# Bayou Broth — GitHub Copilot Implementation Handoff

Repo: `WGLewis0721/Shaolin-slurp`
Live site: `https://wglewis0721.github.io/Shaolin-slurp/`

## Goal
Finish the public rebrand from **Shaolin Slurp** to **Bayou Broth** and integrate the Bayou Broth photography already committed under `assets/bayou-broth/`.

This is a static GitHub Pages site. Keep the existing architecture: **HTML + CSS + vanilla JavaScript only**. Do not add React, a build system, a backend, or a new framework.

## Read first
1. Read `README.md` completely. It is the authoritative current brand and photography direction.
2. Review `index.html`, `css/styles.css`, `css/v3-fixes.css`, `js/site-data.js`, and `js/main.js` before editing.
3. Preserve the working route, menu-tab, mobile-nav, reveal, accessibility, and catering-mailto behavior.

## Authoritative brand
- Brand name: **Bayou Broth**
- Category: **Cajun × ramen fusion food truck / mobile noodle house**
- Positioning: **Louisiana pantry + ramen technique**
- Tone: premium-but-gritty, real food truck, documentary/editorial, warm, local, bold, practical
- Avoid generic AI restaurant styling, luxury-ramen clichés, and generic Asian décor.

## Bayou Broth photography already in the repo
Use these exact repo assets as the primary photographic system:

- `assets/bayou-broth/bayou-broth-truck-market.webp`
- `assets/bayou-broth/bayou-broth-house-bowl.webp`
- `assets/bayou-broth/bayou-broth-noodle-lift.webp`
- `assets/bayou-broth/bayou-broth-bao.webp`
- `assets/bayou-broth/bayou-broth-cajun-heat-sauce.webp`
- `assets/bayou-broth/bayou-broth-branded-cup.webp`
- `assets/bayou-broth/bayou-broth-shrimp-ramen.webp`
- `assets/bayou-broth/bayou-broth-bowl-mark.svg`

Do not replace these with stock photos or external hotlinks.

## Required public-site changes

### 1. Complete the rename
Search the production-facing files for:
- `Shaolin Slurp`
- `Shaolin Slurp Ramen`
- `SHAOLIN SLURP`
- `Bayou Dojo`
- `THE BAYOU DOJO`
- `BAYOU DOJO / FIELD GUIDE`
- `SLURP CODE`
- `SHAOLIN SLURP PRESENTS`

Replace customer-facing instances with appropriate **Bayou Broth** language.

The repository name can remain `Shaolin-slurp`; do not rename the repository unless explicitly asked.

### 2. Update metadata and identity
In `index.html`, update:
- `<title>`
- meta description
- Open Graph title/description/image
- Twitter title/description/image
- JSON-LD `name`
- brand aria-labels
- visible wordmark/lockup
- footer copyright/name
- favicon to `assets/bayou-broth/bayou-broth-bowl-mark.svg` if compatible

Keep the current canonical/live URL because the GitHub Pages repo path has not changed.

### 3. Hero
Use `assets/bayou-broth/bayou-broth-truck-market.webp` as the hero environment/background.

Use `assets/bayou-broth/bayou-broth-house-bowl.webp` as the primary food visual in the hero instead of making the old illustrated bowl the dominant image.

Keep the current hero message structure around:
- `CAJUN`
- `heat.`
- `RAMEN`
- `discipline.`

Keep the route/next-drop module working.

### 4. Replace the weak old ramen photo
The old generic image `assets/backgrounds/shaolin-ramen-closeup.jpg` must no longer appear on the public homepage.

Use either:
- `assets/bayou-broth/bayou-broth-house-bowl.webp`, or
- `assets/bayou-broth/bayou-broth-shrimp-ramen.webp`

for the signature-bowl section, choosing the crop that works best with the current composition.

### 5. Add a photographic field-notes section
Create a strong editorial section between the fusion/story area and menu, or another compositionally appropriate location, using:
- noodle lift
- bao
- Cajun heat sauce
- branded cup

Suggested content direction:
- kicker: `FROM THE WINDOW / CONCEPT PHOTOGRAPHY`
- headline: `Built for street service.`
- supporting copy should emphasize hot food, tactile texture, service-window light, and Louisiana pantry cues.

This should feel like an editorial food spread, not four SaaS cards.

### 6. Street-service section
Use the Bayou Broth truck photo for the truck/service story. Crop it differently from the hero where possible so it does not look like the exact same image repeated.

Update the poster copy from `SHAOLIN SLURP PRESENTS` to `BAYOU BROTH PRESENTS`.

### 7. Brand marks and labels
Use `assets/bayou-broth/bayou-broth-bowl-mark.svg` for header/footer/story marks where appropriate.

Change labels like:
- `THE BAYOU DOJO` → `BAYOU BROTH`
- `BAYOU DOJO / FIELD GUIDE` → `BAYOU BROTH / FIELD GUIDE`
- `SLURP CODE` → `BROTH CODE`

Do not force a martial-arts theme into the new brand.

## Important facts / do not invent
The current route, locations, menu recipes, prices, and operating claims are demo content until client verification.

Do **not** invent:
- a new email address
- social media handles
- ordering platform
- business owner/founder story
- operating history
- verified route stops
- verified menu pricing
- a new domain

Keep `shaolinslurp@gmail.com` for now unless a verified replacement already exists in the repo.

Keep visible demo/verification disclaimers where appropriate.

## Image implementation requirements
- Use meaningful alt text for content images.
- Decorative images should use empty alt text and appropriate aria treatment.
- Add intrinsic `width` and `height` to images.
- Hero image may load eagerly; below-the-fold images should use `loading="lazy"`.
- Use `object-fit` / `object-position` deliberately for responsive crops.
- Do not stretch images.
- Avoid cumulative layout shift.

## Responsive / accessibility checks
Before committing, verify the site at approximately:
- 1440px desktop
- 768px tablet
- 430px mobile
- 390px mobile

Confirm:
- no horizontal overflow
- brand lockup does not clip
- mobile menu remains full-screen and usable
- route board fits narrow screens
- menu tabs remain keyboard accessible
- focus-visible treatment remains intact
- catering form still works
- anchor navigation still works
- reduced-motion behavior remains intact

## Files that may need updates
At minimum inspect/update:
- `index.html`
- `css/styles.css`
- `css/v3-fixes.css`
- `README.md` only if needed to reflect implementation status
- `DESIGN.md`
- `docs/webforge/WEBFORGE_QA.md`
- `.webforge/design-os.html`
- `.webforge/design-os.js`

Do not make unrelated changes.

## Final repo checks
Before finishing:
1. Search the repo for `Shaolin` and identify every remaining occurrence.
2. Public/customer-facing pages should present **Bayou Broth** only.
3. Historical/internal references may remain only when intentionally documented.
4. Confirm every referenced Bayou Broth image path resolves.
5. Confirm `index.html` contains no reference to `assets/backgrounds/shaolin-ramen-closeup.jpg`.
6. Confirm the live-page architecture is still static GitHub Pages.

## Commit
Commit the implementation with a clear message such as:

`Rebrand public site to Bayou Broth and integrate final photo set`

If you work on a branch, open a PR and merge only after the checks above pass.