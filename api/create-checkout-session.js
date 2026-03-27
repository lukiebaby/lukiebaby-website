const Stripe = require('stripe');

// ── Server-side beat registry ─────────────────────────────────────────────────
// Maps beatId → Stripe priceId and beat title.
// priceId: create a product + one-time price in your Stripe dashboard,
//           then copy the price_xxx ID here.
// This data lives only on the server — never sent to the browser.

const BEAT_REGISTRY = {
  'beat-001': {
    priceId: 'price_REPLACE_WITH_STRIPE_PRICE_ID',
    title: 'BEAT TITLE',
  },
};

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { beatId } = body || {};
  const beat = BEAT_REGISTRY[beatId];

  if (!beat) {
    return res.status(400).json({ error: 'Beat not found' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: beat.priceId, quantity: 1 }],
    success_url: `${process.env.SITE_URL}/api/verify-session?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: process.env.SITE_URL,
    metadata: { beatId },
  });

  res.json({ url: session.url });
};
