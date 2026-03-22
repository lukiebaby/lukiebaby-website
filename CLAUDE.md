# LUKIEBABY Website — Claude Instructions

## Git & GitHub

**Commit and push after every meaningful change.** Never leave work unsaved to the remote.

### Rules
- After completing any task (feature, fix, style update, content change), stage the affected files, write a clean commit message, and push to `origin master`.
- Commit messages must be descriptive and specific — say what changed and why, not just "update files".
- Never batch unrelated changes into a single commit. One logical change = one commit.
- Always run `git status` before committing to confirm only the intended files are staged.

### Commit message format
```
Short summary (imperative, ≤60 chars)

- Bullet detail if needed
- Another detail if needed
```

### Examples of good commit messages
```
Increase banner height to 325px and fix seamless loop

Add ChunkFive font via @font-face for Vercel deployment

Link Instagram and X.com handles to social profiles

Change title color to #80ab82, body text to #c2e1c2
```

### Remote
- Repo: https://github.com/lukiebaby/lukiebaby-website
- Branch: master

## Project Overview

Static HTML/CSS/JS website for music producer LUKIEBABY. No build step required.
Deployed to Vercel as a static site via `vercel.json`.

### Files
| File | Purpose |
|------|---------|
| `index.html` | All page markup and scroll JS |
| `style.css` | All styles, colors, fonts, animations |
| `banner.png` | Scrolling album art strip |
| `ChunkFive-Regular.ttf` | Custom font loaded via @font-face |
| `vercel.json` | Tells Vercel to serve as static site (no build) |

### Sections (scroll order)
0. **Home** — Title, roles, social links, infinite banner
1. **Credits** — Artist credits list
2. **Beats** — Beat store (coming soon)
3. **Mixing & Services** — Pricing and contact

### Colors
- Background: `#79CE88`
- Page titles: `#80ab82`
- Body text: `#c2e1c2`

### Font
ChunkFive Roman — loaded from `ChunkFive-Regular.ttf` via `@font-face`
