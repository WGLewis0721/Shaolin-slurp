# Cass — Headlining Performer Website

https://wglewis0721.github.io/Cassidy_singer/

Production-ready static website for the **Cass** headlining performer brand.
Built with pure HTML + CSS + minimal JS (no frameworks), designed for GitHub Pages hosting.

**Design:** Dark luxury aesthetic — matte black backgrounds, restrained neon pink glow,
cinematic stage atmosphere, bold typography, high contrast. Authority-driven, booking-first.

---

## Page Structure

| Section | ID | Purpose |
|---|---|---|
| Navigation | `#navbar` | Fixed top nav with booking CTA |
| Hero | `#hero` | Cinematic two-column headline with CTAs and authority strip |
| Social Proof Strip | *(no ID)* | Star rating, testimonial quote, event category metrics |
| Experience | `#experience` | Three premium feature blocks with velvet background |
| Featured Live Experience | `#media` | Large video embed + category segmented controls |
| Performance Gallery | `#gallery` | Responsive grid with lightbox |
| Booking | `#booking` | Two-column form + booking snapshot card |
| Final CTA | `#final-cta` | Dark authority CTA |
| Footer | `#footer` | Quick nav, socials, brand statement |

---

## Running Locally

No build step required. Simply open `index.html` in any modern browser:

```bash
# Option 1 — double-click
open index.html        # macOS
start index.html       # Windows

# Option 2 — local dev server (optional, avoids any CORS quirks)
npx serve .            # Node.js — installs serve temporarily
python -m http.server  # Python 3 — then visit http://localhost:8000
```

---

## Publishing to GitHub Pages

1. Push (or upload) this repository to GitHub.
2. Go to **Settings → Pages** in your repository.
3. Under **Branch**, select `main` (or `master`) and the root folder `/`.
4. Click **Save**.
5. GitHub will provide a URL like `https://yourusername.github.io/repo-name/` within a minute or two.

> **Tip:** Make sure `index.html` is in the root of the repository (it is, by default).

---

## Asset Setup

All images and overlays referenced in the site live in the `/assets/` folder.

| Filename | Used in |
|---|---|
| `hero-background-smoke.jpg` | Hero section full-screen background |
| `smoke-overlay.png` | Hero overlay (`mix-blend-mode: screen`) |
| `glitter-overlay.png` | Hero overlay (`mix-blend-mode: overlay`) |
| `velvet-dark-section-background.jpg` | Experience section background |
| `stage-spotlight-texture.jpg` | Media section background |
| `social-banner-background.jpg` | Gallery section background |
| `booking-section-background.jpg` | Booking section background |
| `press-kit-background.jpg` | Final CTA section background |
| `neon-divider-line.png` | Decorative dividers between sections |
| `gallery-01.jpg` — `gallery-06.jpg` | Performance gallery grid |

### Hero Logo / Right-Side Visual

The hero right column currently shows the main brand logo PNG.
To use a live performance video instead, open `index.html`, locate the
`<!-- Right: Logo / Performance visual -->` comment in the `#hero` section, and
replace the `<img>` block with the commented-out `<div class="embed-responsive">` iframe,
substituting `YOUR_VIDEO_ID` with your real YouTube video ID.

---

## Replacing the Formspree Form ID

The booking form uses [Formspree](https://formspree.io) to handle submissions without a backend.

**Steps:**

1. Create a free account at [formspree.io](https://formspree.io).
2. Click **New Form** and give it a name (e.g. "Cass Booking").
3. Copy the **Form ID** from the embed snippet (looks like `xpwzabcd`).
4. Open `index.html` and find this line (inside the `#booking` section):

   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

5. Replace `YOUR_FORM_ID` with your real form ID:

   ```html
   action="https://formspree.io/f/xpwzabcd"
   ```

6. Save and push. Form submissions will now appear in your Formspree dashboard and be emailed to you.

---

## Updating Social Links

Search for `YOUR_HANDLE` / `YOUR_CHANNEL` / `YOUR_ARTIST_ID` / `YOUR_PAGE` in `index.html`
and replace with the real social profile URLs.

---

## Gallery Photos

Drop performance photos into `/assets/` named `gallery-01.jpg` through `gallery-06.jpg`
to populate the gallery grid. Images are displayed in a 3-column responsive grid with
hover zoom, glow effect, and a fullscreen lightbox on click.

To add more images, duplicate a `.gallery-tile` block inside the gallery grid and
increment the filename:

```html
<div class="gallery-tile" data-lightbox="assets/gallery-07.jpg" data-alt="Cass — performance photo 7"
     tabindex="0" role="button" aria-label="View performance photo 7 fullscreen">
  <img src="assets/gallery-07.jpg" alt="Cass performing live" loading="lazy" />
</div>
```

---

## Media Embed

Replace the `VIDEO_ID` placeholder in the `#media` section to activate the YouTube embed:

| Placeholder | Replace with |
|---|---|
| `VIDEO_ID` in the YouTube iframe src | Your YouTube video ID (e.g. `dQw4w9WgXcQ`) |
| `YOUR_CHANNEL` in footer links | Your YouTube channel handle |
| `YOUR_HANDLE` in social links | Your Instagram / TikTok handle |
| `YOUR_ARTIST_ID` in Spotify footer link | Your Spotify artist ID |

---

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, grid, flexbox, responsive breakpoints, fade-in animations
- **Minimal JS** — gallery lightbox, media tab toggle, booking form feedback
- No external frameworks, no build tools, no dependencies
- Hosting: **GitHub Pages** (static)

---

## Contact

**CassidyAccasia@gmail.com** &bull; Alabama &bull; Available to Travel