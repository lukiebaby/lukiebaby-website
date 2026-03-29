const Stripe = require('stripe');

// ── Server-side beat registry ─────────────────────────────────────────────────
// Maps beatId → Stripe priceId and beat title.
// priceId: create a product + one-time price in your Stripe dashboard,
//           then copy the price_xxx ID here.
// This data lives only on the server — never sent to the browser.

const BEAT_REGISTRY = {
  'gig': {
    priceId: 'price_1TFSdWChI2JOxZ4RBGVBc9Wc',
    title: 'GIG 155BPM',
  },
  'slowlanelarry1': {
    priceId: 'price_1TFlGkChI2JOxZ4RwgoggvUF',
    title: 'SLOWLANELARRY LEFTOVERS 1 120BPM',
  },
  'slowlanelarry2': {
    priceId: 'price_1TFlIqChI2JOxZ4RQ0yfW0Q4',
    title: 'SLOWLANELARRY LEFTOVERS 2 130BPM',
  },
  'slowlanelarry3': {
    priceId: 'price_1TFlKVChI2JOxZ4RWHetKmWd',
    title: 'SLOWLANELARRY LEFTOVERS 3 78BPM',
  },
  'slowlanelarry4': {
    priceId: 'price_1TFlLwChI2JOxZ4RlCdciJ2F',
    title: 'SLOWLANELARRY LEFTOVERS 4 120BPM',
  },
  'slowlanelarry5': {
    priceId: 'price_1TFlNoChI2JOxZ4RUBK6aK9i',
    title: 'SLOWLANELARRY LEFTOVERS 5 81BPM',
  },
  'slowlanelarry6': {
    priceId: 'price_1TFlP2ChI2JOxZ4Rtkp3Bxxm',
    title: 'SLOWLANELARRY LEFTOVERS 6 145BPM',
  },
  'residentevil': {
    priceId: 'price_1TGBEjChI2JOxZ4RGRCPhTiS',
    title: 'RESIDENT EVIL 158BPM',
  },
  'powder': {
    priceId: 'price_1TGBIzChI2JOxZ4RERn6Cqwp',
    title: 'POWDER 130BPM',
  },
  'benzo': {
    priceId: 'price_1TGBMDChI2JOxZ4RoM8tnmtr',
    title: 'BENZO 131BPM',
  },
  'fthis': {
    priceId: 'price_1TGBOrChI2JOxZ4R3bzlFa0x',
    title: 'F THIS 143BPM',
  },
  'wicked': {
    priceId: 'price_1TGBQyChI2JOxZ4RXPlXSeah',
    title: 'WICKED 151BPM',
  },
  'finesse': {
    priceId: 'price_1TGBSKChI2JOxZ4RpRyPU2dx',
    title: 'FINESSE 150BPM',
  },
  'poppin': {
    priceId: 'price_1TGBVmChI2JOxZ4RysHFHEGg',
    title: 'POPPIN 131BPM',
  },
  'slowlanelarry7': {
    priceId: 'price_1TGBY6ChI2JOxZ4RbVkkv9gr',
    title: 'SLOWLANELARRY LEFTOVERS 7 120BPM',
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
