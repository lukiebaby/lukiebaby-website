// ── Beat Catalog ─────────────────────────────────────────────────────────────
// Add your beats here. Each entry needs:
//   id         — unique identifier (must match keys in api/create-checkout-session.js)
//   num        — fixed catalog number (stays with the beat regardless of sort)
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
    num: 1,
    title: "GIG",
    bpm: 155,
    genre: 'HARD TRAP',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/09-01-22%20%27Gig%27%20155BPM%20%28Prod.%20Lukiebaby%29SNIPPET.wav',
  },
  {
    id: 'slowlanelarry1',
    num: 2,
    title: "SLOWLANELARRY LEFTOVERS 1",
    bpm: 120,
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/10-29-25%20%27wastemytime%27%20120BPM%20%28Prod.%20Lukiebaby%29-%5BAudioTrimmer.com%5D.wav',
  },
  {
    id: 'slowlanelarry2',
    num: 3,
    title: "SLOWLANELARRY LEFTOVERS 2",
    bpm: 130,
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/09-23-24%20%27cry%27%20130BPM%20SNIPPET%20%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'slowlanelarry3',
    num: 4,
    title: "SLOWLANELARRY LEFTOVERS 3",
    bpm: 78,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-15-23%20%27Rx%2090mg%27%2078BPM%20%28Prod.%20Lukiebaby%29%20SNIPPET.wav',
  },
  {
    id: 'slowlanelarry4',
    num: 5,
    title: "SLOWLANELARRY LEFTOVERS 4",
    bpm: 120,
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-15-23%20%27Rx%2080mg%27%2084BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'slowlanelarry5',
    num: 6,
    title: "SLOWLANELARRY LEFTOVERS 5",
    bpm: 81,
    genre: 'SOUL, BOOM BAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-15-23%20%2730mg%27%2081BPM%20%28Prod.%20Lukiebaby%29%20SNIPPET.wav',
  },
  {
    id: 'slowlanelarry6',
    num: 7,
    title: "SLOWLANELARRY LEFTOVERS 6",
    bpm: 145,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/08-02-24%20%27Higha%27%20145BPM%20SNIPPET%20%28Prod%20Lukiebaby%29.wav',
  },
  {
    id: 'residentevil',
    num: 8,
    title: "RESIDENT EVIL",
    bpm: 158,
    genre: 'HARD, TRAP',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/07-22-24%20%27re2%27%20158BPM%20%28Prod%20Lukiebaby%29%20snippet.wav',
  },
  {
    id: 'powder',
    num: 9,
    title: "POWDER",
    bpm: 130,
    genre: 'HARD, TRAP, VALEE',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/06-14-25%20%27Powder%27%20130BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'benzo',
    num: 10,
    title: "BENZO",
    bpm: 131,
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/06-14-25%20%27BENZO%27%20131BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'fthis',
    num: 11,
    title: "F THIS",
    bpm: 143,
    genre: 'HARD, TRAP',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/04-29-23%20%27f%27%20143BPM%20%28Prod.%20Lukiebaby%29%20SNIPPET.wav',
  },
  {
    id: 'wicked',
    num: 12,
    title: "WICKED",
    bpm: 151,
    genre: 'DARK, TRAP, RX PAPI',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/02-20-26%20%27Wicked%27%20151BPM%20%28Prod.%20Lukiebaby%29%20SNIPPET.wav',
  },
  {
    id: 'finesse',
    num: 13,
    title: "FINESSE",
    bpm: 150,
    genre: 'SAMPLED, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/02-05-25%20%27Finesse%27%20150BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'poppin',
    num: 14,
    title: "POPPIN",
    bpm: 131,
    genre: 'GUITAR, TRAP, VALEE',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/01-11-23%20%27Poppin%27%20131BPM%20%28Prod.%20Lukiebaby%29-%5BAudioTrimmer.com%5D.wav',
  },
  {
    id: 'slowlanelarry7',
    num: 15,
    title: "SLOWLANELARRY LEFTOVERS 7",
    bpm: 120,
    genre: 'SMOOTH, TRAP, RXKNEPHEW',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/01-10-26%20%27Groovy%27%20118BPM%20%28Prod.%20Lukiebaby%29-%5BAudioTrimmer.com%5D.wav',
  },
  {
    id: 'backtrack',
    num: 16,
    title: "BACK TRACK",
    bpm: 175,
    genre: 'HARD, TRAP, EXPERIMENTAL',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/03-07-25%20%27bt%27%20175BPM%20snippet%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'pocketsempty',
    num: 17,
    title: "POCKETS EMPTY",
    bpm: 150,
    genre: 'HARD, TRAP, EXPERIMENTAL',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/03-18-25%20%274PE%27%20150BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'heartless',
    num: 18,
    title: "HEARTLESS",
    bpm: 182,
    genre: 'SMOOTH, TRAP, GUITAR, TWOTIIME',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/03-27-25%20%27heartless%27%20182BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
  {
    id: 'gothatway',
    num: 19,
    title: "GO THAT WAY",
    bpm: 178,
    genre: 'SMOOTH, TRAP, GUITAR, TWOTIIME',
    price: 50,
    previewUrl: 'https://cxa7wmzv0q3bmgo7.public.blob.vercel-storage.com/03-28-25%20%27Thatway%27%20178BPM%20SNIPPET%20%28Prod.%20Lukiebaby%29.wav',
  },
];
