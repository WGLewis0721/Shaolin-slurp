# Copilot Instructions — Bayou Broth

## Mandatory operating order

Before changing this project:

1. Read `README.md` for the current brand/product direction.
2. Read `docs/webforge/WEBFORGE_FLOW.md` for the WebForge V2 design + engineering workflow.
3. Read `DESIGN.md` and `docs/webforge/WEBFORGE_QA.md` for current visual decisions and known blockers.
4. Inspect the live page structure and existing interactions before editing.

Project-specific files override generic defaults. Do not reset settled decisions.

## Project overview

This repository is a static GitHub Pages concept for **Bayou Broth**, a **Cajun × ramen fusion food truck / mobile noodle house**.

Live site:
`https://wglewis0721.github.io/Shaolin-slurp/`

The repository name and GitHub Pages URL may still contain the legacy Shaolin Slurp name. The public-facing brand is **Bayou Broth**.

## Tech stack

- HTML5
- CSS3 with custom properties, Grid, Flexbox, intrinsic sizing, and responsive composition
- Vanilla JavaScript
- Google Fonts
- GitHub Pages
- No build step

### Architecture rule
Do **not** introduce React, Vue, Next.js, Vite, Tailwind, Framer Motion, npm packages, or a backend unless a real requirement explicitly justifies it.

Preserve the working static architecture and existing route/menu/catering behavior.

## Brand direction

Bayou Broth should feel like a **real independent Gulf South food truck with strong editorial art direction**, not an AI-generated restaurant template.

Core idea:
**Louisiana pantry + ramen technique**

Visual characteristics:
- swamp green / ink black / weathered cream
- Cajun red + saffron/gold accents
- bold editorial / street-poster typography
- tactile surfaces
- believable food-truck photography
- documentary service-window atmosphere
- warm but realistic lighting
- strong food crops and route-first mobile UX

Avoid:
- generic glass cards
- slate/purple SaaS styling
- generic Japanese décor
- excessive rounded pills
- decorative neon/glow without brand purpose
- generic stock imagery
- another client's visual assets
- fabricated business claims

## Asset system

Primary Bayou Broth assets live in:

`assets/bayou-broth/`

Current set includes:
- `bayou-broth-truck-market.webp`
- `bayou-broth-house-bowl.webp`
- `bayou-broth-shrimp-ramen.webp`
- `bayou-broth-noodle-lift.webp`
- `bayou-broth-bao.webp`
- `bayou-broth-cajun-heat-sauce.webp`
- `bayou-broth-branded-cup.webp`
- `bayou-broth-bowl-mark.svg`

Use repository assets rather than external hotlinks.

## Design-system rules

Follow `docs/webforge/WEBFORGE_FLOW.md`.

Key requirements:
- spacing should use the project token scale rather than random values
- typography should be fluid where practical with `clamp()`
- body copy should maintain readable line length
- semantic color roles should be defined through CSS custom properties
- maintain WCAG-conscious contrast
- every major section needs an intentional compositional role rather than defaulting to card grids
- use semantic HTML landmarks
- one page-level `h1`
- preserve keyboard support, focus-visible states, reduced motion, and usable touch targets
- images require meaningful alt text where appropriate and explicit intrinsic dimensions

## Existing interaction rules

Preserve unless intentionally replacing with a tested alternative:
- mobile menu and body-scroll locking
- narrow-mobile navigation safeguards
- route rendering / next-stop logic
- interactive menu categories and keyboard tab behavior
- reveal behavior with reduced-motion support
- catering mailto flow
- editable route/menu content from `js/site-data.js`

## Content integrity

Do not invent or present unverified information as fact.

The following may still be concept/demo content:
- weekly route
- serving locations
- menu names
- ingredients
- prices
- heat levels
- social profiles
- ordering availability
- company history

Do not fabricate testimonials, awards, reviews, dates, partnerships, operating history, or customer counts.

## Working method

For substantial design work, follow WebForge:

**audit → niche/reference research → architecture preflight → discovery only if unresolved → blueprint → original asset pipeline → implementation → polish → QA/deployment**

Do not begin by blindly writing components.

If the user has already approved a direction or says `go` / `continue`, do not stop and re-ask settled design questions.

## Before completing a change

Verify:
- no broken local asset paths
- no accidental Shaolin Slurp branding in production-facing areas unless intentionally documenting legacy history
- no horizontal overflow at narrow mobile widths
- navigation remains usable
- primary CTA remains obvious
- route/menu/catering interactions still work
- focus states remain visible
- no generic template regressions
- no unsupported business claims were introduced

Do not modify GitHub Pages configuration unless specifically required.
