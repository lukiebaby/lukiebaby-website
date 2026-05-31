const Stripe = require('stripe');
const CATALOG = require('./catalog');

// ── Price config sanity check ─────────────────────────────────────────────────
// Scans every beat's MP3 + WAV Stripe product and reports whether each has a
// default price set, in the expected currency, at the expected amount.
//
// Visit:  /api/debug-prices
// If you set a DEBUG_TOKEN env var, you must pass it:  /api/debug-prices?token=...
//
// Expected: MP3 = $30.00 CAD, WAV = $50.00 CAD (edit the constants below if this
// ever changes). Uses whichever Stripe mode your STRIPE_SECRET_KEY is in.

const EXPECTED_CURRENCY = 'cad';
const EXPECTED_MP3_CENTS = 3000; // $30.00
const EXPECTED_WAV_CENTS = 5000; // $50.00

async function checkProduct(stripe, productId, expectedCents) {
  const out = { productId, expected: `$${(expectedCents / 100).toFixed(2)} ${EXPECTED_CURRENCY.toUpperCase()}` };
  if (!productId) {
    return { ...out, status: 'no-product-id' };
  }
  let product;
  try {
    product = await stripe.products.retrieve(productId, { expand: ['default_price'] });
  } catch (e) {
    return { ...out, status: 'retrieve-failed', error: e.message };
  }
  const price = product.default_price;
  if (!price || typeof price !== 'object') {
    return { ...out, status: 'missing-default-price' };
  }
  out.priceId = price.id;
  out.amount = price.unit_amount != null ? `$${(price.unit_amount / 100).toFixed(2)} ${(price.currency || '').toUpperCase()}` : null;

  const problems = [];
  if (price.active === false) problems.push('price-inactive');
  if (product.active === false) problems.push('product-inactive');
  if ((price.currency || '').toLowerCase() !== EXPECTED_CURRENCY) problems.push('wrong-currency');
  if (price.unit_amount !== expectedCents) problems.push('wrong-amount');
  if (price.recurring) problems.push('not-one-time');

  out.status = problems.length ? problems.join(', ') : 'ok';
  return out;
}

module.exports = async function handler(req, res) {
  const requiredToken = process.env.DEBUG_TOKEN;
  if (requiredToken && req.query.token !== requiredToken) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'STRIPE_SECRET_KEY not configured' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const mode = process.env.STRIPE_SECRET_KEY.startsWith('sk_live') ? 'live' : 'test';

  const beats = await Promise.all(
    Object.entries(CATALOG).map(async ([id, beat]) => {
      const [mp3, wav] = await Promise.all([
        checkProduct(stripe, beat.mp3Product, EXPECTED_MP3_CENTS),
        checkProduct(stripe, beat.wavProduct, EXPECTED_WAV_CENTS),
      ]);
      return { id, title: beat.title, mp3, wav };
    })
  );

  const problems = [];
  for (const b of beats) {
    if (b.mp3.status !== 'ok') problems.push(`${b.id} (MP3): ${b.mp3.status}`);
    if (b.wav.status !== 'ok') problems.push(`${b.id} (WAV): ${b.wav.status}`);
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
    stripeMode: mode,
    expected: { mp3: `$${(EXPECTED_MP3_CENTS / 100).toFixed(2)} ${EXPECTED_CURRENCY.toUpperCase()}`, wav: `$${(EXPECTED_WAV_CENTS / 100).toFixed(2)} ${EXPECTED_CURRENCY.toUpperCase()}` },
    ok: problems.length === 0,
    problemCount: problems.length,
    problems,
    beats,
  }, null, 2));
};
