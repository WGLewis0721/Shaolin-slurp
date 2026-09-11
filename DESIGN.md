# Shaolin Slurp Ramen - WebForge Design Direction

## Selected concept: Bayou Dojo
A Cajun-ramen fusion food truck identity that combines ramen-shop discipline with New Orleans street-poster energy. Avoid generic Asian restaurant tropes and avoid Mardi Gras costume styling.

## Customer jobs
1. Know where the truck is serving.
2. See the menu and prices quickly on a phone.
3. Book catering/private events.

## Palette
- Cream `#F4E6CC` - primary surface
- Ink `#111715` - text / structural lines
- Swamp `#173B32` - deep brand field
- Cajun red `#B62631` - main action / heat
- Saffron gold `#D6A43C` - supporting accent
- Pepper `#E55C2F` - small heat cue only

## Typography
- Display: Bebas Neue or strong condensed fallback.
- Body: DM Sans / Arial.
- Utility: IBM Plex Mono / monospace.

## Layout language
- Bold editorial scale, visible rules, route-board utility.
- Mostly square corners. Avoid pill-heavy UI, glass effects and arbitrary gradients.
- Food truck route appears before the brand story.
- Menu is a limited grid, not a giant restaurant catalog.

## Motion
- Small reveal transitions and marquee only.
- Respect `prefers-reduced-motion`.

## Content integrity
- Existing email is retained.
- Weekly route and menu are concept/demo content until confirmed for a real business launch.
- No unverified awards, testimonials or real-world locations are introduced.

## Implementation
- Preserve static GitHub Pages architecture: HTML/CSS/vanilla JS.
- `js/site-data.js` centralizes schedule, menu, brand tokens and SEO values.
- `.webforge/design-os.html` is a development-only control surface and must not be treated as a public admin system.

## Definition of done
- Mobile route/menu/catering flow is clear.
- Keyboard navigation and focus are usable.
- No horizontal overflow.
- Reduced motion supported.
- Existing GitHub Pages deployment remains viable.
