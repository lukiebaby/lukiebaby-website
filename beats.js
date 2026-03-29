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
    id: 'gig',
    title: "GIG 155BPM",
    bpm: 155,
    genre: 'HARD TRAP',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/09-01-22%20%27Gig%27%20155BPM%20%28Prod.%20Lukiebaby%29SNIPPET.wav',
  },
  {
    id: 'slowlanelarry1',
    title: "SLOWLANELARRY LEFTOVERS 1 120BPM",
    bpm: 120,
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/10-29-25%20%27wastemytime%27%20120BPM%20%28Prod.%20Lukiebaby%29-%5BAudioTrimmer.com%5D.wav',
  },
  {
    id: 'slowlanelarry2',
    title: "SLOWLANELARRY LEFTOVERS 2 130BPM",
    bpm: 130,
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/09-23-24%20%27cry%27%20130BPM%20SNIPPET%20%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'slowlanelarry3',
    title: "SLOWLANELARRY LEFTOVERS 3 78BPM",
    bpm: 78,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-15-23%20%27Rx%2090mg%27%2078BPM%20%28Prod.%20Lukiebaby%29%20SNIPPET.wav',
  },
  {
    id: 'slowlanelarry4',
    title: "SLOWLANELARRY LEFTOVERS 4 120BPM",
    bpm: 120,
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-15-23%20%27Rx%2080mg%27%2084BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'slowlanelarry5',
    title: "SLOWLANELARRY LEFTOVERS 5 81BPM",
    bpm: 81,
    genre: 'SOUL, BOOM BAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-15-23%20%2730mg%27%2081BPM%20%28Prod.%20Lukiebaby%29%20SNIPPET.wav',
  },
  {
    id: 'slowlanelarry6',
    title: "SLOWLANELARRY LEFTOVERS 6 145BPM",
    bpm: 145,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-02-24%20%27Higha%27%20145BPM%20SNIPPET%20%28Prod%20Lukiebaby%29.wav',
  },
];
