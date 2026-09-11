# WebForge QA — Cajun Ramen Redesign V3

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
- Kept `site-data.js` as the single editable menu/schedule source (now `window.BAYOU_BROTH_SITE`).
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

## Quality gate review
- Distinctiveness / proprietary brand language: substantially improved
- Visual hierarchy / composition: strong
- Brand fit: strong Cajun × ramen identity without generic Japanese-theme clichés
- Appetite appeal: stronger mix of food photography + custom food illustration
- Route UX: immediate and scannable
- Menu UX: interactive categories retained
- Catering conversion: direct and prominent
- Responsive/mobile: dedicated composition changes below 760px plus extra safeguards below 480px
- Accessibility: skip link, semantic sections, Escape close, keyboard tabs, focus-visible states, reduced-motion support, descriptive food-art alt text
- Technical feasibility: static HTML/CSS/JS only; no framework or backend added

## Launch blockers that are content, not design
1. Replace demo route with verified serving locations and hours.
2. Confirm bowl names, ingredients, prices, and heat levels.
3. Confirm final social profiles and ordering strategy.
4. Replace or augment the Bayou Broth concept photography with final owner-approved food/truck photography.
5. Connect a real ordering system only if online ordering is part of the business model.

## Bayou Broth rebrand pass
- Renamed all customer-facing copy, metadata, JSON-LD, wordmark, and favicon from Shaolin Slurp to **Bayou Broth**.
- Hero now uses `bayou-broth-truck-market.webp` as the environment and `bayou-broth-house-bowl.webp` as the primary food visual.
- Signature bowl uses `bayou-broth-shrimp-ramen.webp`; `assets/backgrounds/shaolin-ramen-closeup.jpg` no longer appears on the public site.
- Added the "Built for street service." field-notes editorial spread (noodle lift, bao, Cajun heat sauce, branded cup).
- Labels updated: `THE BAYOU DOJO` → `BAYOU BROTH`, `BAYOU DOJO / FIELD GUIDE` → `BAYOU BROTH / FIELD GUIDE`, `SLURP CODE` → `BROTH CODE`, `SHAOLIN SLURP PRESENTS` → `BAYOU BROTH PRESENTS`.
- Page weight dropped from ~5 MB of JPEG/PNG to well under 100 KB of WebP/SVG imagery; the hero image is preloaded and every below-the-fold image is lazy-loaded with intrinsic dimensions.
- `about-bushido.html` rebranded and moved onto the same lightweight image set.

## Do not regress
Future edits should not replace V3 with generic glass cards, gradient SaaS sections, excessive rounded pills, or another stock restaurant template. Build on the Bayou Broth street-poster system instead.
