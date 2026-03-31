const Stripe = require('stripe');
const { head } = require('@vercel/blob');

// ── Server-side beat registry ─────────────────────────────────────────────────
// Maps beatId → private Vercel Blob URL and title.
// The blobUrl is the private blob URL — never sent to the browser directly.
// After payment, the Vercel Blob SDK generates a signed download URL from it.
// BLOB_READ_WRITE_TOKEN must be set in Vercel Environment Variables.

const BEAT_REGISTRY = {
  'gig': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/09-01-22%20%27Gig%27%20155BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'GIG 155BPM',
  },
  'slowlanelarry1': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/10-29-25%20%27wastemytime%27%20120BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'SLOWLANELARRY LEFTOVERS 1 120BPM',
  },
  'slowlanelarry2': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/09-23-24%20%27cry%27%20130BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'SLOWLANELARRY LEFTOVERS 2 130BPM',
  },
  'slowlanelarry3': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/08-15-23%20%27Rx%2090mg%27%2078BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'SLOWLANELARRY LEFTOVERS 3 78BPM',
  },
  'slowlanelarry4': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/08-15-23%20%27Rx%2080mg%27%2084BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'SLOWLANELARRY LEFTOVERS 4 120BPM',
  },
  'slowlanelarry5': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/08-15-23%20%2730mg%27%2081BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'SLOWLANELARRY LEFTOVERS 5 81BPM',
  },
  'slowlanelarry6': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/08-02-24%20%27Higha%27%20145BPM%20%28Prod%20Lukiebaby%29.wav',
    title: 'SLOWLANELARRY LEFTOVERS 6 145BPM',
  },
  'residentevil': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/07-22-24%20%27re2%27%20158BPM%20%28Prod%20Lukiebaby%29.wav',
    title: 'RESIDENT EVIL 158BPM',
  },
  'powder': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/06-14-25%20%27Powder%27%20130BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'POWDER 130BPM',
  },
  'benzo': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/06-14-25%20%27BENZO%27%20131BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'BENZO 131BPM',
  },
  'fthis': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/04-29-23%20%27f%27%20143BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'F THIS 143BPM',
  },
  'wicked': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/02-20-26%20%27Wicked%27%20151BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'WICKED 151BPM',
  },
  'finesse': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/02-05-25%20%27Finesse%27%20150BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'FINESSE 150BPM',
  },
  'poppin': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/01-11-23%20%27Poppin%27%20131BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'POPPIN 131BPM',
  },
  'slowlanelarry7': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/01-10-26%20%27Groovy%27%20118BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'SLOWLANELARRY LEFTOVERS 7 120BPM',
  },
  'backtrack': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/03-07-25%20%27bt%27%20175BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'BACK TRACK 175BPM',
  },
  'pocketsempty': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/03-18-25%20%274PE%27%20150BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'POCKETS EMPTY 150BPM',
  },
  'heartless': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/03-27-25%20%27heartless%27%20182BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'HEARTLESS 182BPM',
  },
  'gothatway': {
    blobUrl: 'https://py22fzsbhchjervh.private.blob.vercel-storage.com/03-28-25%20%27Thatway%27%20178BPM%20%28Prod.%20Lukiebaby%29.wav',
    title: 'GO THAT WAY 178BPM',
  },
};

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

  const beat = BEAT_REGISTRY[session.metadata && session.metadata.beatId];
  if (!beat) {
    return res.status(400).send('Beat not found');
  }

  // Generate a signed download URL from the private Vercel Blob
  const blobInfo = await head(beat.blobUrl, { token: process.env.BLOB_READ_WRITE_TOKEN });
  const downloadUrl = blobInfo.downloadUrl;

  res.setHeader('Content-Type', 'text/html');
  res.send(downloadPage(beat.title, downloadUrl));
};
