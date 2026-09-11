# Shaolin Slurp Ramen — WebForge Design Direction V3

## Selected concept: Bayou Dojo / Street-Food Editorial
Shaolin Slurp is a Cajun × ramen mobile noodle house. V3 moves past the previous polished-template feel and gives the brand its own visual system: loud editorial typography, poster/ticket language, original ramen illustration, a custom bowl mark, saffron/red/ink color blocking, strong food crops, and a route-first mobile experience.

## Customer jobs
1. Know where the truck is serving.
2. See bowls and prices quickly on a phone.
3. Understand the Cajun + ramen idea at a glance.
4. Book the truck for private events.

## Visual system
- Cream `#F3E6CA` — warm paper surface
- Paper `#FBF1DC` — light editorial field
- Ink `#101713` — deep structure
- Swamp `#16372F` — menu / night-service field
- Cajun red `#B72A31` — action / heat
- Dark red `#8B1F25` — signature-bowl field
- Saffron `#D7A52F` — appetite / accent
- Pepper `#E25F32` — secondary heat cue

Typography remains intentionally mixed:
- Bebas Neue — oversized street-poster display
- Cormorant Garamond — expressive editorial contrast
- DM Sans — body copy
- IBM Plex Mono — route, labels, utility copy

## V3 original assets
- `assets/v3/shaolin-bowl-mark.svg` — custom ramen/chopsticks/heat emblem created specifically for Shaolin Slurp.
- `assets/v3/bayou-tonkotsu-illustration.svg` — custom illustrated Cajun ramen bowl with egg, andouille, okra, noodles, chili crisp, and branded chopsticks.
- Procedural grain, poster fields, route ticket treatment, ingredient rhythm, and fusion ledger are all brand-specific CSS treatments.

## Composition
- Hero combines the food truck backdrop with an original illustrated hero bowl instead of repeating the same food photography.
- Route immediately follows the hero and dynamically promotes the next scheduled stop.
- Signature bowl is cinematic and image-led.
- Fusion story is presented as a pantry × technique ledger rather than generic feature cards.
- Menu uses live data plus a branded field-guide illustration.
- Street-service section mixes truck photography with a red event poster to vary rhythm.
- Catering remains a direct email-based static interaction suitable for GitHub Pages.

## Motion and interaction
- Restrained reveal motion.
- Continuous ingredient ticker on capable devices.
- Motion disabled under `prefers-reduced-motion`.
- Mobile navigation locks body scroll and neutralizes header blur to avoid the historical iOS stacking bug.
- Menu categories stay interactive through `site-data.js`.

## Content integrity
- Existing business email is retained.
- Route, menu prices, and recipes remain explicitly labeled demo content until client verification.
- No fabricated awards, testimonials, history, or operating claims.

## Implementation
- Static GitHub Pages: HTML + CSS + vanilla JavaScript.
- `js/site-data.js` remains the editable source for menu and schedule content.
- V3 intentionally avoids a framework or backend so the prototype stays portable and inexpensive.

## Quality target
The V3 target is an 8.5–9/10 visual demo: recognizably Shaolin Slurp, not a generic restaurant template. Future work should refine verified content and photography rather than reset the core art direction.
