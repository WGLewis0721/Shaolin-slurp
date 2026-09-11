# Shaolin Slurp Ramen - WebForge Design Direction v2

## Selected concept: Bayou Dojo / Food-First
A Cajun-ramen fusion food truck identity that combines ramen-shop discipline with New Orleans street-poster energy, but now leads with **real food and truck photography** instead of abstract illustration. The goal is to make visitors hungry first, then make the route/menu/catering journey effortless.

## Customer jobs
1. Know where the truck is serving.
2. See the menu and prices quickly on a phone.
3. Understand the Cajun + ramen idea without reading a long story.
4. Book catering/private events.

## Palette
- Cream `#F1E3C8` - primary surface
- Paper `#F6ECD9` - secondary surface
- Ink `#0D1512` - structure / typography
- Swamp `#173B32` - deep brand field
- Cajun red `#B72A31` - action / heat
- Saffron gold `#D3A43A` - supporting accent
- Pepper `#E16031` - small heat cue

## Typography
- Display: Bebas Neue - loud food-truck/poster headlines.
- Accent serif: Cormorant Garamond - premium editorial contrast.
- Body: DM Sans.
- Utility: IBM Plex Mono.

## Layout language
- Photography dominates high-impact moments.
- Oversized condensed type + restrained serif accents.
- Visible rules, printed-menu details, stamps/seals, strong color fields.
- Mostly square corners; no glassmorphism, generic gradient cards, or pill-heavy UI.
- Route comes immediately after the hero; signature bowl follows before the deeper brand story.
- Menu stays intentionally small and scannable.

## Primary experience
Hero: truck + bowl photography, Bayou Dojo positioning, next-stop strip.
Route: highly scannable weekly schedule.
Signature bowl: food-first proof of the fusion concept.
Fusion story: Louisiana pantry x ramen technique.
Menu: bowls/sides/drinks with clear prices and heat levels.
Street service: truck/event visual proof.
Catering: direct email-based static form for GitHub Pages.

## Motion
- Small reveal transitions only.
- No decorative auto-play video in this demo.
- Respect `prefers-reduced-motion`.

## Content integrity
- Existing email is retained.
- Weekly route, prices, and recipes are clearly treated as demo content until verified.
- No invented awards, testimonials, operating locations, or business history.

## Implementation
- Preserve static GitHub Pages architecture: HTML/CSS/vanilla JS.
- `js/site-data.js` centralizes schedule, menu, brand tokens, and SEO values.
- `.webforge/design-os.html` remains a development-only control surface.

## Quality target
The previous pass was visually competent but too flat and looked like a design-system demo rather than a food brand. V2 specifically corrects that by increasing photography, appetite appeal, contrast, pacing, visual hierarchy, and brand-specific storytelling while keeping the route/menu/catering UX simple.
