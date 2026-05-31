// ── Beat Catalog ─────────────────────────────────────────────────────────────
// Add your beats here. Each entry needs:
//   id     — unique identifier (must match keys in api/catalog.js)
//   num    — fixed catalog number (stays with the beat regardless of sort)
//   title  — beat name (uppercase)
//   bpm    — tempo (number)
//   genre  — comma-separated style tags (uppercase)
//   file   — base object name in Supabase Storage, WITHOUT extension.
//            Preview = "<file>.mp3" in the public SNIPPET_BUCKET.
//            Purchase = "<file>.mp3" / "<file>.wav" in the private buckets
//            (see api/catalog.js + api/verify-session.js).
//
// Every beat sells for $30 (MP3) or $50 (WAV) — see PRICE_MP3 / PRICE_WAV below.
// previewUrl is derived automatically from `file` at the bottom of this file.

// ── Supabase storage (client-safe: public snippet bucket only, no secrets) ────
const SUPABASE_URL   = 'https://ygtkvracitxoblhofrcx.supabase.co';
const SNIPPET_BUCKET = 'snippets';
const PRICE_MP3 = 30;
const PRICE_WAV = 50;

const snippetUrl = file =>
  `${SUPABASE_URL}/storage/v1/object/public/${SNIPPET_BUCKET}/${encodeURIComponent(file + '.mp3')}`;

const BEATS = [
  {
    id: 'slowlanelarry1',
    num: 1,
    title: "SLOWLANELARRY LEFTOVERS 1",
    bpm: 120,
    genre: 'SMOOTH, TRAP, RXKNEPHEW, SAMPLED',
    file: "10-29-25 'wastemytime' 120BPM (Prod. Lukiebaby)",
  },
  {
    id: 'slowlanelarry2',
    num: 2,
    title: "SLOWLANELARRY LEFTOVERS 2",
    bpm: 130,
    genre: 'SMOOTH, TRAP, RXKNEPHEW, PAIN, SAMPLED',
    file: "09-23-24 'cry' 130BPM (Prod. Lukiebaby)",
  },
  {
    id: 'slowlanelarry3',
    num: 3,
    title: "SLOWLANELARRY LEFTOVERS 3",
    bpm: 78,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW, SAMPLED',
    file: "08-15-23 'Rx 90mg' 78BPM (Prod. Lukiebaby)",
  },
  {
    id: 'slowlanelarry4',
    num: 4,
    title: "SLOWLANELARRY LEFTOVERS 4",
    bpm: 84,
    genre: 'SMOOTH, TRAP, RXKNEPHEW, SAMPLED',
    file: "08-15-23 'Rx 80mg' 84BPM (Prod. Lukiebaby)",
  },
  {
    id: 'slowlanelarry5',
    num: 5,
    title: "SLOWLANELARRY LEFTOVERS 5",
    bpm: 81,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW, SAMPLED',
    file: "08-15-23 'Rx 30mg' 81BPM (Prod. Lukiebaby)",
  },
  {
    id: 'slowlanelarry6',
    num: 6,
    title: "SLOWLANELARRY LEFTOVERS 6",
    bpm: 145,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW, SAMPLED',
    file: "08-02-24 'Higha' 145BPM (Prod Lukiebaby)",
  },
  {
    id: 'gigs',
    num: 7,
    title: "GIGS",
    bpm: 155,
    genre: 'ETHNIC, TRAP, FUTURE, 808 MAFIA',
    file: "09-01-22-26 'Gig' 155BPM (Prod. Lukiebaby)",
  },
  {
    id: 'residentevil',
    num: 8,
    title: "RESIDENT EVIL",
    bpm: 158,
    genre: 'TRAP, DARK, EXPERIMENTAL, VALEE',
    file: "07-22-24 're2' 158BPM (Prod Lukiebaby)",
  },
  {
    id: 'powder',
    num: 9,
    title: "POWDER",
    bpm: 130,
    genre: 'TRAP, DARK, EXPERIMENTAL, VALEE',
    file: "06-14-25 'Powder' 130BPM (Prod. Lukiebaby)",
  },
  {
    id: 'benzos',
    num: 10,
    title: "BENZOS",
    bpm: 130,
    genre: 'SMOOTH, TRAP, RXKNEPHEW, SAMPLED',
    file: "06-14-25 'BENZO' 131BPM (Prod. Lukiebaby)",
  },
  {
    id: 'fuckallat',
    num: 11,
    title: "FUCK ALLAT",
    bpm: 143,
    genre: 'TRAP, DARK, EXPERIMENTAL, CHASETHEMONEY',
    file: "04-29-23 'f' 143BPM (Prod. Lukiebaby)",
  },
  {
    id: 'wicked',
    num: 12,
    title: "WICKED",
    bpm: 151,
    genre: 'TRAP, DARK, EXPERIMENTAL, CHASETHEMONEY',
    file: "02-20-26 'Wicked' 151BPM (Prod. Lukiebaby)",
  },
  {
    id: 'finesse',
    num: 13,
    title: "FINESSE",
    bpm: 150,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW, SAMPLED',
    file: "02-05-25 'Finesse' 150BPM (Prod. Lukiebaby)",
  },
  {
    id: 'poppin',
    num: 14,
    title: "POPPIN",
    bpm: 131,
    genre: 'TRAP, CHASETHEMONEY, VALEE, SAMPLED',
    file: "01-11-23 'Poppin' 131BPM (Prod. Lukiebaby)",
  },
  {
    id: 'slowlanelarry7',
    num: 15,
    title: "SLOWLANELARRY LEFTOVERS 7",
    bpm: 118,
    genre: 'SMOOTH, BOOM BAP, RXKNEPHEW, SAMPLED',
    file: "01-10-26 'Groovy' 118BPM (Prod. Lukiebaby)",
  },
  {
    id: 'gothatway',
    num: 16,
    title: "GO THAT WAY",
    bpm: 178,
    genre: 'TRAP, PAIN, POLO G, TWOTIIME',
    file: "03-28-25 'Thatway' 178BPM (Prod. Lukiebaby)",
  },
  {
    id: 'heartless',
    num: 17,
    title: "HEARTLESS",
    bpm: 182,
    genre: 'TRAP, PAIN, POLO G, TWOTIIME',
    file: "03-27-25 'heartless' 182BPM (Prod. Lukiebaby)",
  },
  {
    id: 'pocketsemptied',
    num: 18,
    title: "POCKETS EMPTIED",
    bpm: 150,
    genre: 'TRAP, DARK, EXPERIMENTAL, CHASETHEMONEY',
    file: "03-18-25 '4PE' 150BPM (Prod. Lukiebaby)",
  },
  {
    id: 'backtrack',
    num: 19,
    title: "BACKTRACK",
    bpm: 175,
    genre: 'TRAP, DARK, EXPERIMENTAL, 808 MAFIA',
    file: "03-07-25 'bt' 175BPM (Prod. Lukiebaby)",
  },
  {
    id: 'resaferoom',
    num: 20,
    title: "RE SAFEROOM",
    bpm: 130,
    genre: 'TRAP, CHASETHEMONEY, VALEE, SAMPLED',
    file: "03-30-26 'RESAFEROOM' 130BPM (Prod. Lukiebaby)",
  },
];

// Derive preview URLs from the public snippet bucket.
BEATS.forEach(b => { b.previewUrl = snippetUrl(b.file); });
