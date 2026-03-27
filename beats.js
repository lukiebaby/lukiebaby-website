// ── Beat Catalog ─────────────────────────────────────────────────────────────
// Add your beats here. Each entry needs:
//   id         — unique identifier (must match keys in api/create-checkout-session.js)
//   title      — beat name (uppercase)
//   bpm        — tempo (number)
//   genre      — genre tag (uppercase)
//   price      — price in dollars (number)
//   previewUrl — public URL to a preview audio clip (.wav or .mp3)
//
// For previewUrl: upload your preview clip to Vercel Blob Storage (Dashboard →
// Storage → Blob → Upload), set it to public, and paste the URL here.
//
// Also update api/create-checkout-session.js and api/verify-session.js with
// each beat's Stripe priceId and full .wav download URL.

const BEATS = [
  {
    id: 'beat-001',
    title: 'BEAT TITLE',
    bpm: 140,
    genre: 'TRAP',
    price: 50,
    previewUrl: '', // paste Vercel Blob public preview URL here
  },
];
