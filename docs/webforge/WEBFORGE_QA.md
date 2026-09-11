# WebForge QA — Bayou Broth

## WebForge V2 operating standard
This project now follows `docs/webforge/WEBFORGE_FLOW.md` as its design + engineering execution system. Future passes should preserve the working architecture, research the niche before major visual changes, create original client-specific assets before final polish, and use the WebForge quality scorecard rather than relying on generic template conventions.

## Why V3 exists
V2 improved hierarchy and photography but still leaned too heavily on repeated imagery and a polished-template structure. User review remained around **5–5.5/10**. V3 rebuilds the visual layer around a proprietary street-food editorial system while preserving the working static architecture.

## V3 corrective changes
- Rebuilt the hero around a new custom Bayou Tonkotsu illustration plus the truck backdrop.
- Added an original bowl brand mark, now the Bayou Broth mark.
- Replaced repeated card patterns with a route ticket, fusion ledger, event poster, ingredient rhythm, and editorial image/text splits.
- Reduced repeated use of the ramen photo; custom illustration now carries major branded moments.
- Strengthened mobile hierarchy and made the route / menu / catering journey more immediate.
- Added next-stop selection based on the current weekday instead of always promoting Monday.
- Restored mobile-menu protections against the prior iOS fixed-nav / blurred-header stacking problem.
- Added keyboard-accessible menu tabs with proper roles, selected states, focus management, and arrow-key navigation.
- Added intrinsic image dimensions and absolute social-preview image URLs.
- Restored legacy `#find-the-truck` and `#about` anchors without reintroducing unverified ordering functionality.
- Isolated `about-bushido.html` onto `css/bushido.css` so homepage styling no longer breaks the brand-story page.
- Replaced the dated Bushido timeline with clearly labeled brand mythology chapters to avoid presenting invented operating history as fact.
- Removed placeholder generic social destinations from the Bushido footer.
- Explicitly excluded `.webforge/` development controls from the GitHub Pages build.
- Kept `site-data.js` as the single editable menu/schedule source.
- Preserved the mailto catering workflow and static GitHub Pages deployment model.

## Astra carryover QA status
The material issues from the previous review are now addressed:
- Route next-stop logic: **fixed for weekday selection**
- Mobile route-header layout: **tightened for narrow phones**
- Image dimensions: **added to V3 homepage media**
- Menu-tab accessibility: **completed**
- Legacy anchors: **restored where valid**
- Placeholder social links: **removed**
- Bushido Brown CSS regression: **fixed by stylesheet isolation**
- Mobile nav stacking / body-scroll behavior: **hardened across both pages**
- Public development Design OS: **excluded from Pages build**

## Bayou Broth rebrand pass
- Renamed customer-facing identity to **Bayou Broth**.
- Hero uses the Bayou Broth truck environment and house-bowl photography.
- Signature bowl uses the Bayou Broth ramen photography; the old generic close-up is no longer the intended public asset.
- Added the documentary-style field-notes photography system.
- Bayou Broth assets live under `assets/bayou-broth/`.
- Brand direction is now **Louisiana pantry + ramen technique**, with Gulf South street-food editorial styling instead of Shaolin mythology.

## WebForge V2 quality gates
Every significant future pass should be graded across:
1. identity / distinctiveness
2. visual composition
3. imagery / asset quality
4. usability / conversion
5. responsive quality
6. accessibility
7. engineering quality
8. content integrity

Do not ship simply because the average score is high if one critical dimension remains weak.

## Image-quality pass
The Bayou Broth photography was previously shipped over-compressed and downscaled (215–500px wide) while being rendered far larger, and `bayou-broth-truck-market.webp` was a truncated file that failed to decode in mainstream WebP decoders.

Every Bayou Broth photo was re-exported at production resolution with the same composition, subject matter, and brand grade:

| Asset | Before | After |
| --- | --- | --- |
| `bayou-broth-truck-market.webp` | 500×340 (corrupt / undecodable) | 1800×1094 |
| `bayou-broth-house-bowl.webp` | 360×411 | 1226×1400 |
| `bayou-broth-shrimp-ramen.webp` | 300×388 | 1083×1400 |
| `bayou-broth-noodle-lift.webp` | 360×369 | 878×900 |
| `bayou-broth-bao.webp` | 330×380 | 782×900 |
| `bayou-broth-branded-cup.webp` | 300×390 | 692×900 |
| `bayou-broth-cajun-heat-sauce.webp` | 215×583 | 369×1000 |

The truck frame lost its final rows in the corrupt export, so the recovered image is trimmed to the intact 500×304 area before re-export. Both placements use `object-fit:cover`, so no crop or CSS change was required. Intrinsic `width`/`height` attributes in `index.html` now match the new files.

Every final file must decode cleanly (`dwebp` / `webpinfo` report no errors) before it ships.

## Launch blockers that are content, not design
1. Replace demo route with verified serving locations and hours.
2. Confirm bowl names, ingredients, prices, and heat levels.
3. Confirm final social profiles and ordering strategy.
4. Replace or augment concept photography with final owner-approved food/truck photography when available.
5. Connect a real ordering system only if online ordering is part of the business model.

## Do not regress
Future edits should not replace the current direction with generic glass cards, gradient SaaS sections, excessive rounded pills, reused client assets, or another stock restaurant template. Build on the Bayou Broth street-food editorial system and follow the project-aware WebForge V2 flow.
