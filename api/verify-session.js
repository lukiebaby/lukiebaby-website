const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');
const CATALOG = require('./catalog');

// After Stripe confirms payment, mint a short-lived signed download URL for the
// purchased file from the matching private Supabase bucket (mp3 or wav).
// SUPABASE_URL + SUPABASE_SECRET_KEY must be set in Vercel Environment Variables.

const MP3_BUCKET = 'beats mp3';
const WAV_BUCKET = 'beats wav';
const SIGNED_URL_TTL = 60 * 30; // 30 minutes

function downloadPage(title, downloadUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DOWNLOAD — ${title} — LUKIEBABY</title>
  <style>
    @font-face {
      font-family: 'ChunkFive Roman';
      src: url('/ChunkFive-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:         #79CE88;
      --text-body:  #c2e1c2;
      --text-title: #80ab82;
      --text-bright:#f5fdf5;
    }
    body {
      background: var(--bg);
      font-family: 'ChunkFive Roman', serif;
      color: var(--text-body);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      font-size: clamp(4rem, 12vw, 12rem);
      letter-spacing: .06em;
      color: var(--text-title);
      text-transform: uppercase;
      line-height: 1;
    }
    .beat-name {
      font-size: clamp(1.5rem, 4vw, 4rem);
      letter-spacing: .22em;
      text-transform: uppercase;
    }
    .download-btn {
      display: inline-block;
      font-family: 'ChunkFive Roman', serif;
      font-size: clamp(1.2rem, 3vw, 2.8rem);
      letter-spacing: .22em;
      text-transform: uppercase;
      color: var(--text-title);
      border: 2px solid var(--text-title);
      padding: .8rem 2.5rem;
      text-decoration: none;
      transition: color .25s, border-color .25s;
    }
    .download-btn:hover {
      color: var(--text-bright);
      border-color: var(--text-bright);
    }
    .back-link {
      font-size: clamp(.9rem, 2vw, 1.8rem);
      letter-spacing: .2em;
      text-transform: uppercase;
      color: var(--text-body);
      text-decoration: none;
      opacity: .65;
      transition: opacity .25s;
    }
    .back-link:hover { opacity: 1; }
  </style>
</head>
<body>
  <h1>THANK YOU</h1>
  <p class="beat-name">${title}</p>
  <a class="download-btn" href="${downloadUrl}" download>DOWNLOAD BEAT</a>
  <a class="back-link" href="/">← BACK TO LUKIEBABY</a>
</body>
</html>`;
}

module.exports = async function handler(req, res) {
  const { session_id } = req.query;
  if (!session_id) {
    return res.status(400).send('Missing session_id');
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch {
    return res.status(400).send('Invalid session');
  }

  if (session.payment_status !== 'paid') {
    return res.status(402).send('Payment not completed');
  }

  const meta = session.metadata || {};
  const beat = CATALOG[meta.beatId];
  const format = meta.format === 'wav' ? 'wav' : 'mp3';
  if (!beat) {
    return res.status(400).send('Beat not found');
  }

  // Generate a signed download URL from the matching private Supabase bucket.
  const bucket = format === 'wav' ? WAV_BUCKET : MP3_BUCKET;
  const key = `${beat.file}.${format}`;

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY);
  const { data, error } = await supabase
    .storage
    .from(bucket)
    .createSignedUrl(key, SIGNED_URL_TTL, { download: true });

  if (error || !data) {
    return res.status(500).send('Could not generate download');
  }

  res.setHeader('Content-Type', 'text/html');
  res.send(downloadPage(`${beat.title} — ${format.toUpperCase()}`, data.signedUrl));
};
