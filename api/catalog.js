// ── Server-side beat registry ─────────────────────────────────────────────────
// Maps beatId → display title, Supabase object base name, and the Stripe PRODUCT
// ids for each format. Shared by api/create-checkout-session.js and
// api/verify-session.js. This data lives only on the server.
//
//   file        — base object name in Supabase Storage (no extension). The purchase
//                 file is "<file>.mp3" (mp3 bucket) or "<file>.wav" (wav bucket).
//   mp3Product  — Stripe product id for the $30 MP3 (default price resolved at checkout)
//   wavProduct  — Stripe product id for the $50 WAV (default price resolved at checkout)

module.exports = {
  slowlanelarry1: {
    title: 'SLOWLANELARRY LEFTOVERS 1 120BPM',
    file: "10-29-25 'wastemytime' 120BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcBhArvJfSL3b8',
    wavProduct: 'prod_UEDigvmeBcbvM8',
  },
  slowlanelarry2: {
    title: 'SLOWLANELARRY LEFTOVERS 2 130BPM',
    file: "09-23-24 'cry' 130BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcBnR2Vy79WxcX',
    wavProduct: 'prod_UEDksxB7npm5tQ',
  },
  slowlanelarry3: {
    title: 'SLOWLANELARRY LEFTOVERS 3 78BPM',
    file: "08-15-23 'Rx 90mg' 78BPM  (Prod. Lukiebaby)",
    mp3Product: 'prod_UcBrHAKoCoScVp',
    wavProduct: 'prod_UEDmW3H8ADwwK6',
  },
  slowlanelarry4: {
    title: 'SLOWLANELARRY LEFTOVERS 4 84BPM',
    file: "08-15-23 'Rx 80mg' 84BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcBuFpw4DpGEGn',
    wavProduct: 'prod_UEDnhNKcNSgvvt',
  },
  slowlanelarry5: {
    title: 'SLOWLANELARRY LEFTOVERS 5 81BPM',
    file: "08-15-23 'Rx 30mg' 81BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcBz30ZujhCPNA',
    wavProduct: 'prod_UEDpeJBFjR0wMB',
  },
  slowlanelarry6: {
    title: 'SLOWLANELARRY LEFTOVERS 6 145BPM',
    file: "08-02-24 'Higha' 145BPM (Prod Lukiebaby)",
    mp3Product: 'prod_UcC2E8bqtJB1YZ',
    wavProduct: 'prod_UEDqSA9igmmUSo',
  },
  gigs: {
    title: 'GIGS 155BPM',
    file: "09-01-22-26 'Gig' 155BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcC5WKAspxgoj9',
    wavProduct: 'prod_UDuStIi8WggExu',
  },
  residentevil: {
    title: 'RESIDENT EVIL 158BPM',
    file: "07-22-24 're2' 158BPM (Prod Lukiebaby)",
    mp3Product: 'prod_UcC8363aWOF0Yu',
    wavProduct: 'prod_UEeXyQBmNXZTvz',
  },
  powder: {
    title: 'POWDER 130BPM',
    file: "06-14-25 'Powder' 130BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCBHsqCYaTv7Y',
    wavProduct: 'prod_UEecvO6lGC4agX',
  },
  benzos: {
    title: 'BENZOS 130BPM',
    file: "06-14-25 'BENZO' 131BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCDc3BYYceOcy',
    wavProduct: 'prod_UEefA7aQmsNEQp',
  },
  fuckallat: {
    title: 'FUCK ALLAT 143BPM',
    file: "04-29-23 'f' 143BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCHb6Wa1BB0o6',
    wavProduct: 'prod_UEei9EQNCaQf83',
  },
  wicked: {
    title: 'WICKED 151BPM',
    file: "02-20-26 'Wicked' 151BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCKYvjc0WySWC',
    wavProduct: 'prod_UEeknTWCTSgXt9',
  },
  finesse: {
    title: 'FINESSE 150BPM',
    file: "02-05-25 'Finesse' 150BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCMfEL8CFJqqz',
    wavProduct: 'prod_UEelHGn6cBktGe',
  },
  poppin: {
    title: 'POPPIN 131BPM',
    file: "01-11-23 'Poppin' 131BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCP8TOBKaXQgl',
    wavProduct: 'prod_UEepeNnJHs3xEP',
  },
  slowlanelarry7: {
    title: 'SLOWLANELARRY LEFTOVERS 7 118BPM',
    file: "01-10-26 'Groovy' 118BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCR0FacajhN3d',
    wavProduct: 'prod_UEer4OeWWbOnU4',
  },
  gothatway: {
    title: 'GO THAT WAY 178BPM',
    file: "03-28-25 'Thatway' 178BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCTUWTtGdbrG9',
    wavProduct: 'prod_UFPCUs3uzs8jUQ',
  },
  heartless: {
    title: 'HEARTLESS 182BPM',
    file: "03-27-25 'heartless' 182BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCVHk9Ueq2JU7',
    wavProduct: 'prod_UFPBWMo4Sw5TBf',
  },
  pocketsemptied: {
    title: 'POCKETS EMPTIED 150BPM',
    file: "03-18-25 '4PE' 150BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCXxiXvgfBniD',
    wavProduct: 'prod_UFPBP6epuQLXlD',
  },
  backtrack: {
    title: 'BACKTRACK 175BPM',
    file: "03-07-25 'bt' 175BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCZB8rrq6rkNz',
    wavProduct: 'prod_UFPAyOObCgMI7H',
  },
  resaferoom: {
    title: 'RE SAFEROOM 130BPM',
    file: "03-30-26 'RESAFEROOM' 130BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcCdeALMHyC7IB',
    wavProduct: 'prod_UcCc1DbctBXmGA',
  },
  inmymind: {
    title: 'IN MY MIND 150BPM',
    file: "05-17-26 'IN MY MIND' (Prod. Lukiebaby)",
    mp3Product: 'prod_UcWDMs4qSWtcMP',
    wavProduct: 'prod_UcWEZ3TldfKvZF',
  },
  holidayszn: {
    title: 'HOLIDAY SZN 124BPM',
    file: "12-17-24 'hldyszn' 124BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcWWkr4oLDC7he',
    wavProduct: 'prod_UcWXEQuRHtWJ4G',
  },
  strongodors: {
    title: 'STRONG ODORS 150BPM',
    file: "02-14-26 'StrongOdors' 150BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcyeXLdrBF3GaN',
    wavProduct: 'prod_UcydJbAOZd2WNI',
  },
  wonky: {
    title: 'WONKY 125BPM',
    file: "03-18-25 'wonky' 125BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UcysrDNmU1Lf2G',
    wavProduct: 'prod_UcysJnJxRZ6mug',
  },
  fiveam: {
    title: '5AM 131BPM',
    file: "07-28-24 '5AM' 131BPM (Prod Lukiebaby)",
    mp3Product: 'prod_UdIxg7exfee53q',
    wavProduct: 'prod_UdIxamh2HYLnmx',
  },
  sincewayback: {
    title: 'SINCE WAY BACK 150BPM',
    file: "05-09-26 'SinceWayBack' 150BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UdIywCru9PgmPT',
    wavProduct: 'prod_UdIyMFST7kga3y',
  },
  smackers: {
    title: 'SMACKERS 112BPM',
    file: "03-07-25 'pent' 112BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UdLCU88c4N5cLn',
    wavProduct: 'prod_UdLCzd8Uv87H3w',
  },
  twoshots: {
    title: '2 SHOTS 170BPM',
    file: "01-31-26 '2 shots' 170BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UdLOOVtfh1WnUm',
    wavProduct: 'prod_UdLO0XjyvYrS2n',
  },
  stovetopsorcery: {
    title: 'STOVETOP SORCERY 150BPM',
    file: "02-08-26 'Sorcery' 150BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UdMUU6nfqylf94',
    wavProduct: 'prod_UdMUEZmXULfy2Q',
  },
  echoes: {
    title: 'ECHOES 146BPM',
    file: "04-02-26 'echoes' 143BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UdMlYr2meCUdcE',
    wavProduct: 'prod_UdMk7GD3RCsJvZ',
  },
  peachice: {
    title: 'PEACH ICE 131BPM',
    file: "06-20-25 'GR8CAR' 131BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_Ue5LDdDeIIwNm9',
    wavProduct: 'prod_Ue5KUKP2XkWRfr',
  },
  ds3: {
    title: 'DS3 154BPM',
    file: "03-28-25 'DS3' 154BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_Ue8GDPLdr3bmZG',
    wavProduct: 'prod_Ue8FbpRumKfcKa',
  },
  trapordie: {
    title: 'TRAPORDIE 150BPM',
    file: "04-06-25 'trapordie' 150BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_Ue8p8figtFSQ1O',
    wavProduct: 'prod_Ue8pjwMIqa9Or6',
  },
  threefor5: {
    title: '3 FOR 5 135BPM',
    file: "01-18-26 '3for5' 135BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_Ue90qF9sNnu0iL',
    wavProduct: 'prod_Ue90ynzZR96bAq',
  },
  dumpgawd: {
    title: 'DUMP GAWD 155BPM',
    file: "06-24-26 'Shogun' 155BPM (Prod. Lukiebaby)",
    mp3Product: 'prod_UmMyOi7ZK0xmr8',
    wavProduct: 'prod_UmMz8vwi8GOEJ8',
  },
};
