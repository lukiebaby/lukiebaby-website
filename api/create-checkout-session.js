const Stripe = require('stripe');
const CATALOG = require('./catalog');

// Resolves a beat + format into a Stripe Checkout session.
// The catalog stores Stripe PRODUCT ids; we expand each product's default price
// (set to $30 for MP3 / $50 for WAV in the Stripe dashboard) at checkout time.

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { beatId, format } = body || {};
  const beat = CATALOG[beatId];

  if (!beat) {
    return res.status(400).json({ error: 'Beat not found' });
  }
  if (format !== 'mp3' && format !== 'wav') {
    return res.status(400).json({ error: 'Invalid format' });
  }

  const productId = format === 'wav' ? beat.wavProduct : beat.mp3Product;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let priceId;
  try {
    const product = await stripe.products.retrieve(productId, { expand: ['default_price'] });
    priceId = product.default_price && product.default_price.id;
  } catch (e) {
    console.error('Stripe price lookup failed', productId, e.message);
    return res.status(400).json({ error: 'Price lookup failed' });
  }
  if (!priceId) {
    return res.status(400).json({ error: 'No default price set for product' });
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.SITE_URL}/api/verify-session?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: process.env.SITE_URL,
    metadata: { beatId, format },
  });

  res.json({ url: session.url });
};
