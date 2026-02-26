# Copilot Instructions for Shaolin Slurp Ramen

## Project Overview

This is a production-ready **static website** for the **Shaolin Slurp Ramen** food truck brand, hosted on GitHub Pages at https://wglewis0721.github.io/Shaolin-slurp/.

## Tech Stack

- **HTML5** — semantic, accessible markup (single `index.html` file)
- **CSS3** — custom properties, grid, flexbox, responsive breakpoints, fade-in animations (`css/styles.css`)
- **Vanilla JS** — sticky header, hero parallax, hamburger menu toggle, scroll-triggered animations, dynamic copyright year (`js/main.js`)
- **Google Fonts** — Bebas Neue, Oswald, Inter
- **No frameworks, no build tools, no dependencies** — do not introduce npm packages, bundlers, or external JS libraries

## Design Language

- Dark grindhouse aesthetic: matte black backgrounds (`#0A0A0A`), neon gold accents
- Cinematic grain texture overlay
- Bold kung-fu–inspired typography (Bebas Neue for headings, Oswald for subheadings, Inter for body)
- Inspired by 70s–80s kung-fu films, Wu-Tang street culture, and the discipline of the kitchen
- Keep all copy consistent with this voice: gritty, confident, cinematic

## Page Structure

| Section         | ID                | Notes                                              |
|-----------------|-------------------|----------------------------------------------------|
| Header / Nav    | `#site-header`    | Fixed sticky header with logo and primary nav      |
| Hero            | `#hero`           | Full-screen food truck background, neon emblem, CTAs |
| About           | `#about`          | Two-column grid — chef portrait + brand story      |
| Menu            | `#menu`           | Signature bowls, add-ons, and full menu poster     |
| Find the Truck  | `#find-the-truck` | Social follow CTA with Instagram and TikTok links  |
| Footer          | `.site-footer`    | Brand icon, tagline, social icons, dynamic copyright |

## Asset Organization

All images live in `/assets/` organized by subfolder:

```
assets/
  backgrounds/   # Hero, texture overlay, Find-the-Truck background
  logo/          # Primary logo, neon dragon emblem, dragon icon (favicon)
  about/         # Chef portrait
  menu/          # Menu section background and full menu poster
  social/        # OpenGraph / Twitter Card social preview image
```

## Coding Conventions

- **No build step** — all changes must be directly usable by opening `index.html` in a browser
- Use **CSS custom properties** (variables) defined in `:root` for colors, fonts, and spacing rather than hard-coded values
- Maintain **semantic HTML** and **ARIA attributes** for accessibility
- Keep JS minimal and dependency-free; use `document.addEventListener` and standard DOM APIs
- Responsive design: mobile-first breakpoints in CSS
- Images must include `width`, `height`, and descriptive `alt` attributes
- Social links (Instagram/TikTok) appear in both the `#find-the-truck` section and the footer — update both when changing them

## Common Tasks

### Adding a Menu Item
Edit the `<ul>` inside `#menu` in `index.html`:
```html
<li class="menu-item">
  <div class="menu-item-header">
    <span class="menu-item-name">Bowl Name</span>
    <span class="menu-item-price">$14</span>
  </div>
  <p class="menu-item-desc">Description of the bowl and its ingredients.</p>
</li>
```

### Updating Social Links
Search `index.html` for `https://www.instagram.com/` and `https://www.tiktok.com/` and replace both occurrences of each with the real profile URLs.

### Swapping Images
Drop new files into the appropriate `assets/` subfolder and update the `src` attribute in `index.html`.

## Out of Scope

- Do not add frameworks (React, Vue, etc.), CSS preprocessors, or build pipelines
- Do not add backend logic — this is a purely static site
- Do not modify the GitHub Pages configuration (`_config.yml`)
