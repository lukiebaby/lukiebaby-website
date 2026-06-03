// ── Beat Catalog ─────────────────────────────────────────────────────────────
// Add your beats here. Each entry needs:
//   id      — unique identifier (must match keys in api/catalog.js)
//   num     — fixed catalog number (stays with the beat regardless of sort)
//   title   — beat name (uppercase)
//   bpm     — tempo (number)
//   genre   — comma-separated style tags (uppercase)
//   file    — base object name in Supabase Storage for the PURCHASE files, WITHOUT
//             extension: "<file>.mp3" (mp3 bucket) / "<file>.wav" (wav bucket).
//             See api/catalog.js + api/verify-session.js.
//   snippet — EXACT object name of the preview clip in the public previews bucket.
//             (Snippet names are inconsistent, so they're stored verbatim rather
//             than derived.)
//
// Every beat sells for $30 (MP3) or $50 (WAV) — see PRICE_MP3 / PRICE_WAV below.
// previewUrl is derived from `snippet` at the bottom of this file.

// ── Supabase storage (client-safe: public previews bucket only, no secrets) ───
const SUPABASE_URL    = 'https://ygtkvracitxoblhofrcx.supabase.co';
const PREVIEW_BUCKET  = 'previews';
const PRICE_MP3 = 30;
const PRICE_WAV = 50;

const snippetUrl = name =>
  `${SUPABASE_URL}/storage/v1/object/public/${PREVIEW_BUCKET}/${encodeURIComponent(name)}`;

const BEATS = [
  {
    id: 'slowlanelarry1',
    num: 1,
    title: "SLOWLANELARRY LEFTOVERS 1",
    bpm: 120,
    genre: 'SMOOTH, TRAP, RXKNEPHEW, SAMPLED',
    file: "10-29-25 'wastemytime' 120BPM (Prod. Lukiebaby)",
    snippet: "10-29-25 'wastemytime' 120BPM (Prod. Lukiebaby) SNIPPET.wav",
  },
  {
    id: 'slowlanelarry2',
    num: 2,
    title: "SLOWLANELARRY LEFTOVERS 2",
    bpm: 130,
    genre: 'SMOOTH, TRAP, RXKNEPHEW, PAIN, SAMPLED',
    file: "09-23-24 'cry' 130BPM (Prod. Lukiebaby)",
    snippet: "09-23-24 'cry' 130BPM (Prod. Lukiebaby) SNIPPET.wav",
  },
  {
    id: 'slowlanelarry3',
    num: 3,
    title: "SLOWLANELARRY LEFTOVERS 3",
    bpm: 78,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW, SAMPLED',
    file: "08-15-23 'Rx 90mg' 78BPM  (Prod. Lukiebaby)",
    snippet: "08-15-23 'Rx 90mg' 78BPM SNIPPET (Prod. Lukiebaby).wav",
  },
  {
    id: 'slowlanelarry4',
    num: 4,
    title: "SLOWLANELARRY LEFTOVERS 4",
    bpm: 84,
    genre: 'SMOOTH, TRAP, RXKNEPHEW, SAMPLED',
    file: "08-15-23 'Rx 80mg' 84BPM (Prod. Lukiebaby)",
    snippet: "08-15-23 'Rx 80mg' 84BPM (Prod. Lukiebaby) snippet.wav",
  },
  {
    id: 'slowlanelarry5',
    num: 5,
    title: "SLOWLANELARRY LEFTOVERS 5",
    bpm: 81,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW, SAMPLED',
    file: "08-15-23 'Rx 30mg' 81BPM (Prod. Lukiebaby)",
    snippet: "08-15-23 'Rx 30mg' 81BPM (Prod. Lukiebaby)snippet.wav",
  },
  {
    id: 'slowlanelarry6',
    num: 6,
    title: "SLOWLANELARRY LEFTOVERS 6",
    bpm: 145,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW, SAMPLED',
    file: "08-02-24 'Higha' 145BPM (Prod Lukiebaby)",
    snippet: "08-02-24 'Higha' 145BPM (Prod Lukiebaby)snippet.wav",
  },
  {
    id: 'gigs',
    num: 7,
    title: "GIGS",
    bpm: 155,
    genre: 'ETHNIC, TRAP, FUTURE, 808 MAFIA',
    file: "09-01-22-26 'Gig' 155BPM (Prod. Lukiebaby)",
    snippet: "09-01-22-26 'Gig' 155BPM (Prod. Lukiebaby) SNIPPET.wav",
  },
  {
    id: 'residentevil',
    num: 8,
    title: "RESIDENT EVIL",
    bpm: 158,
    genre: 'TRAP, DARK, EXPERIMENTAL, VALEE',
    file: "07-22-24 're2' 158BPM (Prod Lukiebaby)",
    snippet: "07-22-24 're2' 158BPM (Prod Lukiebaby)snippet.wav",
  },
  {
    id: 'powder',
    num: 9,
    title: "POWDER",
    bpm: 130,
    genre: 'TRAP, DARK, EXPERIMENTAL, VALEE',
    file: "06-14-25 'Powder' 130BPM (Prod. Lukiebaby)",
    snippet: "06-14-25 'Powder' 130BPM (Prod. Lukiebaby)snippet.wav",
  },
  {
    id: 'benzos',
    num: 10,
    title: "BENZOS",
    bpm: 130,
    genre: 'SMOOTH, TRAP, RXKNEPHEW, SAMPLED',
    file: "06-14-25 'BENZO' 131BPM (Prod. Lukiebaby)",
    snippet: "06-14-25 'BENZO' 131BPM (Prod. Lukiebaby)snippet.wav",
  },
  {
    id: 'fuckallat',
    num: 11,
    title: "FUCK ALLAT",
    bpm: 143,
    genre: 'TRAP, DARK, EXPERIMENTAL, CHASETHEMONEY',
    file: "04-29-23 'f' 143BPM (Prod. Lukiebaby)",
    snippet: "04-29-23 'f' 143BPM (Prod. Lukiebaby)snippet.wav",
  },
  {
    id: 'wicked',
    num: 12,
    title: "WICKED",
    bpm: 151,
    genre: 'TRAP, DARK, EXPERIMENTAL, CHASETHEMONEY',
    file: "02-20-26 'Wicked' 151BPM (Prod. Lukiebaby)",
    snippet: "02-20-26 'Wicked' 151BPM (Prod. Lukiebaby)snippet.wav",
  },
  {
    id: 'finesse',
    num: 13,
    title: "FINESSE",
    bpm: 150,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW, SAMPLED',
    file: "02-05-25 'Finesse' 150BPM (Prod. Lukiebaby)",
    snippet: "02-05-25 'Finesse' 150BPM (Prod. Lukiebaby)snippet.wav",
  },
  {
    id: 'poppin',
    num: 14,
    title: "POPPIN",
    bpm: 131,
    genre: 'TRAP, CHASETHEMONEY, VALEE, SAMPLED',
    file: "01-11-23 'Poppin' 131BPM (Prod. Lukiebaby)",
    snippet: "01-11-23 'Poppin' 131BPM (Prod. Lukiebaby)snippet.wav",
  },
  {
    id: 'slowlanelarry7',
    num: 15,
    title: "SLOWLANELARRY LEFTOVERS 7",
    bpm: 118,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW, SAMPLED',
    file: "01-10-26 'Groovy' 118BPM (Prod. Lukiebaby)",
    snippet: "01-10-26 'Groovy' 118BPM (Prod. Lukiebaby)snippet.wav",
  },
  {
    id: 'gothatway',
    num: 16,
    title: "GO THAT WAY",
    bpm: 178,
    genre: 'TRAP, PAIN, POLO G, TWOTIIME',
    file: "03-28-25 'Thatway' 178BPM (Prod. Lukiebaby)",
    snippet: "03-28-25 'Thatway' 178BPM SNIPPET (Prod. Lukiebaby).wav",
  },
  {
    id: 'heartless',
    num: 17,
    title: "HEARTLESS",
    bpm: 182,
    genre: 'TRAP, PAIN, POLO G, TWOTIIME',
    file: "03-27-25 'heartless' 182BPM (Prod. Lukiebaby)",
    snippet: "03-27-25 'heartless' 182BPM SNIPPET (Prod. Lukiebaby).wav",
  },
  {
    id: 'pocketsemptied',
    num: 18,
    title: "POCKETS EMPTIED",
    bpm: 150,
    genre: 'TRAP, DARK, EXPERIMENTAL, CHASETHEMONEY',
    file: "03-18-25 '4PE' 150BPM (Prod. Lukiebaby)",
    snippet: "03-18-25 '4PE' 150BPM SNIPPET (Prod. Lukiebaby).wav",
  },
  {
    id: 'backtrack',
    num: 19,
    title: "BACKTRACK",
    bpm: 175,
    genre: 'TRAP, DARK, EXPERIMENTAL, 808 MAFIA',
    file: "03-07-25 'bt' 175BPM (Prod. Lukiebaby)",
    snippet: "03-07-25 'bt' 175BPM snippet (Prod. Lukiebaby).wav",
  },
  {
    id: 'resaferoom',
    num: 20,
    title: "RE SAFEROOM",
    bpm: 130,
    genre: 'TRAP, CHASETHEMONEY, VALEE, SAMPLED',
    file: "03-30-26 'RESAFEROOM' 130BPM (Prod. Lukiebaby)",
    snippet: "03-30-26 'RESAFEROOM' 130BPM snippet (Prod. Lukiebaby).wav",
  },
  {
    id: 'inmymind',
    num: 21,
    title: "IN MY MIND",
    bpm: 150,
    genre: 'SMOOTH, RXKNEPHEW, SAMPLED, TRAP',
    file: "05-17-26 'IN MY MIND' (Prod. Lukiebaby)",
    snippet: "05-17-26 'IN MY MIND' (Prod. Lukiebaby) snippet.wav",
  },
  {
    id: 'holidayszn',
    num: 22,
    title: "HOLIDAY SZN",
    bpm: 124,
    genre: 'BOUNCE, ZAYTOVEN, MIGOS, TRAP',
    file: "12-17-24 'hldyszn' 124BPM (Prod. Lukiebaby)",
    snippet: "12-17-24 'hldyszn' 124BPM (Prod. Lukiebaby) snippet.wav",
  },
  {
    id: 'strongodors',
    num: 23,
    title: "STRONG ODORS",
    bpm: 150,
    genre: 'BOOM BAP, RETCH, RXKNEPHEW, SAMPLED',
    file: "02-14-26 'StrongOdors' 150BPM (Prod. Lukiebaby)",
    snippet: "02-14-26 'StrongOdors' 150BPM (Prod. Lukiebaby)snippet.wav",
  },
  {
    id: 'wonky',
    num: 24,
    title: "WONKY",
    bpm: 125,
    genre: 'TRAP, SAMPLED, BOUNCE, RXKNEPHEW',
    file: "03-18-25 'wonky' 125BPM (Prod. Lukiebaby)",
    snippet: "03-18-25 'wonky' 125BPM (Prod. Lukiebaby) snippet.wav",
  },
  {
    id: 'fiveam',
    num: 25,
    title: "5AM",
    bpm: 131,
    genre: 'TRAP, DARK, BOUNCE',
    file: "07-28-24 '5AM' 131BPM (Prod Lukiebaby)",
    snippet: "07-28-24 '5AM' 131BPM (Prod Lukiebaby)SNIPPET.wav",
  },
  {
    id: 'sincewayback',
    num: 26,
    title: "SINCE WAY BACK",
    bpm: 150,
    genre: 'TRAP, SAMPLED, BOUNCE, RXKNEPHEW',
    file: "05-09-26 'SinceWayBack' 150BPM (Prod. Lukiebaby)",
    snippet: "05-09-26 'SinceWayBack' 150BPM snippet(Prod. Lukiebaby).wav",
  },
  {
    id: 'smackers',
    num: 27,
    title: "SMACKERS",
    bpm: 112,
    genre: 'TRAP, SAMPLED, BOUNCE, DARK',
    file: "03-07-25 'pent' 112BPM (Prod. Lukiebaby)",
    snippet: "03-07-25 'pent' 112BPM (Prod. Lukiebaby)snippet.wav",
  },
];

// Derive preview URLs from the exact snippet object names in the public bucket.
BEATS.forEach(b => { b.previewUrl = snippetUrl(b.snippet); });
