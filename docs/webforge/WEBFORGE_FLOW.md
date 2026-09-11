# WebForge V2 — Design + Engineering Execution System

WebForge is the project-aware workflow for taking a website from research and direction through original asset creation, implementation, QA, and deployment without drifting into generic AI-generated design.

This document is the default operating procedure. **Project-specific README / DESIGN files override generic WebForge defaults.**

---

## 0. Core operating rule: preserve what already works

Before changing anything, inspect the live site, repository, content model, interactions, deployment method, and known user feedback.

Do **not** replatform a working project simply because another stack is fashionable. Preserve the current architecture unless a real requirement justifies changing it.

Examples:
- Static GitHub Pages site → keep HTML/CSS/vanilla JS when sufficient.
- Existing React/Vite/Next application → work within that stack unless migration is explicitly requested.
- Framer Motion, Tailwind, icon libraries, and frameworks are tools, not mandatory dependencies.

A redesign may completely replace the visual layer while preserving the functional architecture.

---

# 1. Anti-slop guardrails

WebForge must actively reject generic AI-design defaults.

## Banned defaults
- default slate + purple SaaS palettes
- black-to-purple gradients used without a brand reason
- generic glassmorphism applied to every surface
- endless rounded card grids
- floating pill badges everywhere
- unstyled Inter / Roboto / Arial as the primary display identity
- generic centered hero + three cards + testimonials + pricing-template composition
- decorative glows with no visual-system role
- generic stock photography or reused assets from another Gray Matter client
- icons used as substitutes for art direction

## Surface rule
Every major section must have an intentional visual role: editorial field, image composition, typographic composition, diagram, ledger, poster, timeline, data surface, product demonstration, or another brand-specific structure.

Cards are allowed only when the information genuinely behaves like cards.

---

# 2. First-principles design system

## Spacing
Use a consistent spacing token system based primarily on 4px / 8px increments:

`4, 8, 16, 24, 32, 48, 64, 96, 128`

Avoid random spacing values. Optical corrections are allowed when required by typography, borders, or image cropping; document intentional exceptions instead of turning the scale into dogma.

## Typography
Build a project-specific type hierarchy with strong contrast between display and reading text.

Preferred pattern:
- expressive / recognizable display face
- highly readable body face
- optional mono / utility face for data, route, labels, technical UI

Use `clamp()` for fluid display sizing where practical. Use a modular scale (roughly 1.25–1.333) as a starting point, then adjust for the actual typefaces.

Body copy should generally remain within ~45–75 characters per line.

Never select typography only because it is common in AI-generated websites.

## Color
Define semantic tokens, not scattered hex values:
- base / canvas
- structural surface(s)
- foreground
- muted foreground
- primary action
- secondary accent
- border / divider
- status colors

Use the 60/30/10 concept as a **composition guide**, not a mandatory mathematical quota.

Reserve the highest-energy accent for conversion, status, or intentional focal moments.

All normal body-text combinations should meet WCAG 2.2 AA contrast targets.

## CRAP principles
- **Contrast:** meaningful differences in size, weight, color, shape, or position.
- **Repetition:** repeat tokens and recognizable motifs to make the brand coherent.
- **Alignment:** visible elements share intentional keylines.
- **Proximity:** related information clusters; unrelated ideas get breathing room.

---

# 3. Semantic + technical architecture

## Semantic DOM
Use landmarks intentionally:
`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.

Requirements:
- one page-level `h1`
- logical heading order
- real buttons for actions
- real links for navigation
- descriptive alt text for meaningful images
- decorative images hidden from assistive technology
- visible `:focus-visible` treatment
- keyboard-operable menus/tabs/modals
- minimum ~44×44px practical touch targets for controls
- reduced-motion behavior where motion is non-essential

## Layout engines
Use:
- Flexbox for 1D flows
- Grid for 2D structural composition
- intrinsic sizing (`min()`, `max()`, `clamp()`, `minmax()`, `auto-fit`) before piling on breakpoint overrides

Media queries remain valid when composition genuinely needs to change. Do not force every responsive problem into one CSS technique.

## Component architecture
Match the project stack.

Static project:
- semantic reusable HTML patterns
- CSS tokens/components
- small isolated vanilla-JS behaviors

Component framework project:
- reusable components with clear data boundaries
- TypeScript where already supported / required
- avoid unnecessary abstraction layers

---

# 4. WebForge 9-phase execution loop

## Phase 1 — Anatomy + niche analysis

Before designing:
- inspect the entire existing site / app
- identify customer jobs and conversion paths
- determine target audience and tone
- list functional requirements that must survive redesign
- identify current visual weaknesses
- identify what should be preserved

For redesigns, produce a short **Keep / Change / Remove / Create** inventory.

## Phase 2 — Reference + market research

Study relevant examples from the real world:
- direct competitors
- adjacent brands with similar audiences
- Awwwards / Dribbble / Behance / ThemeForest when useful
- product-specific design systems
- photography blogs / restaurant photography / product photography references when imagery matters
- forums and implementation write-ups when technical execution is non-obvious

Do not copy a whole reference site.

Extract reusable principles:
- composition
- hierarchy
- image treatment
- typography behavior
- transitions
- interaction patterns
- content sequencing

Create a short reference matrix: **reference → technique worth learning → project-specific adaptation**.

## Phase 3 — Architecture + environment preflight

Inspect the repository before choosing tools.

Document:
- current stack
- hosting/deployment model
- build tooling
- dependencies
- content/data sources
- responsive architecture
- accessibility patterns
- integration constraints

Only introduce dependencies when they solve a real project requirement.

Do not force Next.js, React, Tailwind, Lucide, Framer Motion, or any build system onto a project merely because they appear in a generic starter workflow.

## Phase 4 — Interactive discovery gate

Pause for user direction **only when a material design decision is unresolved**.

Use 3–4 compact choices covering the decisions that would materially change the build, such as:
- visual direction
- interaction priority
- conversion priority
- palette / mood

Skip this pause when:
- the user already supplied the direction
- the project is a continuation of an approved design
- the user said “go,” “continue,” or otherwise delegated creative ownership
- the correct direction can be inferred from an existing approved reference

Do not repeatedly re-ask settled questions.

## Phase 5 — Blueprint + content architecture

Before major UI implementation, define:
- customer journey
- page/section order
- component or structural manifest
- editable data sources
- interaction inventory
- content integrity boundaries
- asset manifest
- breakpoint/composition strategy

For an existing repo, explicitly name the files expected to change.

## Phase 6 — Original asset pipeline

**Assets are part of design, not decoration added after coding.**

For each client, create a distinct visual world.

Workflow:
1. audit current imagery and identify weak/generic/repeated assets
2. research real photography/art direction in the niche
3. define a shot/asset list
4. generate or create original brand-specific assets
5. evaluate realism, continuity, crop flexibility, lighting, composition, and brand fit
6. export individual files with descriptive names
7. compress appropriately for web while preserving useful quality
8. place them in a dedicated asset directory
9. wire them into the composition intentionally

For AI-generated photography, actively avoid common synthetic tells:
- impossible lighting
- excessive amber glow
- hyper-sharp everything
- impossible ingredient piles
- floating props
- overly pristine logos on every object
- perfect symmetry
- fake steam clouds
- implausible crowds

Prefer documentary imperfection and believable physical context.

Never recycle another client's generated brand graphics.

## Phase 7 — Modular UI construction

Build the page according to the approved blueprint.

Requirements:
- semantic markup
- tokenized spacing/color/type
- strong section-to-section rhythm
- purposeful composition changes
- responsive behavior from the start
- no generic placeholder art when final visual direction is known
- preserve working business logic unless a change is required

For static sites, resist turning a straightforward build into a framework project.

## Phase 8 — Interaction + tactile polish

Add motion only after hierarchy and imagery work without it.

Use appropriate tools for the stack:
- CSS transitions / keyframes
- vanilla JS observers
- Framer Motion only when the project already supports it or truly benefits from it

Polish may include:
- hover/press feedback
- reveal transitions
- sticky behaviors
- state transitions
- tabs/filters
- modals
- comparison controls
- contextual glows/textures

Motion must support orientation, hierarchy, or delight—not disguise weak layout.

## Phase 9 — QA, scoring, deployment readiness

Run a final audit across:

### Visual quality
- distinct brand identity
- composition / hierarchy
- typography
- asset quality
- section rhythm
- mobile visual quality

### UX / conversion
- primary action obvious
- customer questions answered quickly
- route/contact/order/booking flows work
- no dead controls

### Engineering
- no console-breaking errors
- no broken paths
- valid asset references
- layout works at narrow mobile, tablet, laptop, and wide desktop
- no horizontal overflow
- interactions are keyboard usable
- image dimensions / loading behavior are appropriate
- reduced-motion support where needed

### Content integrity
- no fabricated awards, reviews, clients, dates, pricing, locations, availability, or business history
- demo content clearly labeled when unverified

### Scorecard
Grade each dimension 1–10:
1. identity / distinctiveness
2. visual composition
3. imagery / asset quality
4. usability / conversion
5. responsive quality
6. accessibility
7. engineering quality
8. content integrity

A production candidate should not ship simply because the average is high if one critical dimension is weak.

---

# 5. Quality iteration rule

When the user grades the result, do not make random cosmetic changes.

Translate feedback into a delta list:
- what specifically prevents the site from reaching the next quality tier?
- which 2–4 changes will create the largest visual/UX improvement?
- is the weakness layout, imagery, type, content, interaction, or architecture?

Then execute another focused pass.

Example:
`5.5/10 → identify template feel + repeated imagery + weak hierarchy → rebuild composition + create original imagery + tighten responsive behavior → reassess.`

---

# 6. WebForge project artifacts

A mature WebForge project should maintain:

- `README.md` — current product / brand / stack / content status
- `DESIGN.md` — current visual direction and design decisions
- `docs/webforge/WEBFORGE_FLOW.md` — this execution system
- `docs/webforge/WEBFORGE_QA.md` — project QA ledger / known blockers
- asset manifest or clearly organized asset directories
- `.webforge/` — optional development-only controls or preview tooling

Development-only WebForge controls must not accidentally become public admin surfaces.

---

# 7. Phase 4 response template

When discovery is actually needed, use:

```text
[WEBFORGE — DESIGN OVERRIDE]

Before implementation, choose or override the decisions that materially change this build:

1. Visual direction
   A. [project-specific direction]
   B. [project-specific direction]
   C. [project-specific direction]

2. Priority experience
   A. [feature / journey]
   B. [feature / journey]
   C. [feature / journey]

3. Primary conversion
   A. [CTA]
   B. [CTA]
   C. [CTA]

4. Palette / accent
   Default: [project-specific proposal]
   Or provide a custom direction.

Reply with selections or custom instructions.
```

Do not use generic sample options that do not belong to the project.

---

# 8. Final principle

WebForge is not “make it prettier.”

It is the coordinated system of:

**research → positioning → design system → original assets → composition → interaction → engineering → QA → deployment.**

The goal is a website that looks like it belongs to the specific client, performs the specific business job, survives real devices, and can be maintained by the next engineer or AI without resetting the project back to a generic template.
