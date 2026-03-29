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
    title: "GIG",
    bpm: 155,
    date: '09/01/22',
    genre: 'HARD TRAP',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/09-01-22%20%27Gig%27%20155BPM%20%28Prod.%20Lukiebaby%29SNIPPET.wav',
  },
  {
    id: 'slowlanelarry1',
    title: "SLOWLANELARRY LEFTOVERS 1",
    bpm: 120,
    date: '10/29/25',
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/10-29-25%20%27wastemytime%27%20120BPM%20%28Prod.%20Lukiebaby%29-%5BAudioTrimmer.com%5D.wav',
  },
  {
    id: 'slowlanelarry2',
    title: "SLOWLANELARRY LEFTOVERS 2",
    bpm: 130,
    date: '09/23/24',
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/09-23-24%20%27cry%27%20130BPM%20SNIPPET%20%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'slowlanelarry3',
    title: "SLOWLANELARRY LEFTOVERS 3",
    bpm: 78,
    date: '08/15/23',
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-15-23%20%27Rx%2090mg%27%2078BPM%20%28Prod.%20Lukiebaby%29%20SNIPPET.wav',
  },
  {
    id: 'slowlanelarry4',
    title: "SLOWLANELARRY LEFTOVERS 4",
    bpm: 120,
    date: '08/15/23',
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-15-23%20%27Rx%2080mg%27%2084BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'slowlanelarry5',
    title: "SLOWLANELARRY LEFTOVERS 5",
    bpm: 81,
    date: '08/15/23',
    genre: 'SOUL, BOOM BAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-15-23%20%2730mg%27%2081BPM%20%28Prod.%20Lukiebaby%29%20SNIPPET.wav',
  },
  {
    id: 'slowlanelarry6',
    title: "SLOWLANELARRY LEFTOVERS 6",
    bpm: 145,
    date: '08/02/24',
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-02-24%20%27Higha%27%20145BPM%20SNIPPET%20%28Prod%20Lukiebaby%29.wav',
  },
  {
    id: 'residentevil',
    title: "RESIDENT EVIL",
    bpm: 158,
    date: '07/22/24',
    genre: 'HARD, TRAP',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/07-22-24%20%27re2%27%20158BPM%20%28Prod%20Lukiebaby%29%20snippet.wav',
  },
  {
    id: 'powder',
    title: "POWDER",
    bpm: 130,
    date: '06/14/25',
    genre: 'HARD, TRAP, VALEE',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/06-14-25%20%27Powder%27%20130BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'benzo',
    title: "BENZO",
    bpm: 131,
    date: '06/14/25',
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/06-14-25%20%27BENZO%27%20131BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'fthis',
    title: "F THIS",
    bpm: 143,
    date: '04/29/23',
    genre: 'HARD, TRAP',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/04-29-23%20%27f%27%20143BPM%20%28Prod.%20Lukiebaby%29%20SNIPPET.wav',
  },
  {
    id: 'wicked',
    title: "WICKED",
    bpm: 151,
    date: '02/20/26',
    genre: 'DARK, TRAP, RX PAPI',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/02-20-26%20%27Wicked%27%20151BPM%20%28Prod.%20Lukiebaby%29%20SNIPPET.wav',
  },
  {
    id: 'finesse',
    title: "FINESSE",
    bpm: 150,
    date: '02/05/25',
    genre: 'SAMPLED, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/02-05-25%20%27Finesse%27%20150BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'poppin',
    title: "POPPIN",
    bpm: 131,
    date: '01/11/23',
    genre: 'GUITAR, TRAP, VALEE',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/01-11-23%20%27Poppin%27%20131BPM%20%28Prod.%20Lukiebaby%29-%5BAudioTrimmer.com%5D.wav',
  },
  {
    id: 'slowlanelarry7',
    title: "SLOWLANELARRY LEFTOVERS 7",
    bpm: 120,
    date: '01/10/26',
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/01-10-26%20%27Groovy%27%20118BPM%20%28Prod.%20Lukiebaby%29-%5BAudioTrimmer.com%5D.wav',
  },
];
