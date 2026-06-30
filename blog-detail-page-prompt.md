# Blog Detail Page — Claude Code Build Prompt

Build the **Blog Detail page** for the Owners Pulse frontend, matching the Figma below. Mirror the data-driven architecture we already use for the **Case Study** page.

**Figma reference (source of truth for spacing, colors, typography, responsive sizing):**
https://www.figma.com/design/rXAdY4tsrRJkuWPy8i4XBz/Owner-Inventory-Modifications?node-id=8318-30892

Pull exact px values, colors, and gaps from the Figma node. Where I say "same as X component," reuse the existing component — do not rebuild it.

---

## Project conventions (must follow)

- **Folders:** `kebab-case`
- **Components:** `PascalCase` (file name + export)
- **File length:** hard limit **220 lines** — split anything larger into sub-components
- **Static content / copy:** lives in `src/constant/` (no hardcoded strings inside components)
- **SVG icons:** live in dedicated icon store files, imported — never inlined ad-hoc in JSX
- **Responsive:** implement desktop / tablet / mobile breakpoints per Figma

---

## Step 1 — Blog data schema

Create a typed schema for blog detail data, following the **same pattern as the case study schema**. Define the TypeScript interface and the seed data object, and place the data in `src/constant/` (e.g. `src/constant/blog-detail/`).

Schema should cover everything the page renders:

- `slug`
- `title` — the H1
- `meta`: `publishDate`, `readingTime`, `views`
- `author`: `name`, `avatar`, `role`
- `heroImage` (if the Figma hero uses one)
- `overview` — intro paragraph(s) for the overview block
- `tableOfContents`: array of `{ id, label }`
- `sections`: array of `{ id, heading, blocks[] }`, where each block is one of:
  - `smallHeading` (string)
  - `paragraph` (string)
  - `numberedList` — items rendered with the workflow numbering icons (see Step 3)
  - `bulletList` — items rendered with a Tailwind color dot
- `testimonial` — reuse the existing testimonial data type
- `relatedTopics` — array using the existing **BlogCard** data type

Keep section `id`s consistent with the `tableOfContents` ids so the TOC and scroll-spy line up.

---

## Step 2 — Hero section

- Reuse the **same Hero section** used on the blog main/listing page.
- **H1 main heading** — same heading style as the main page.
- Below the heading: a row with **date · reading time · views**.
- Below that: **author detail** (avatar + name + role).

That completes the hero.

---

## Step 3 — Two-column layout (below hero)

Wrap the body in a grid. On **desktop**, the **left column takes `col-span-3`**, right column takes the remainder. Collapse to a single column on tablet/mobile per Figma.

### Left column (`col-span-3`, desktop)

1. **Table of Contents**
   - Sticky as you scroll.
   - The **active topic** is highlighted with a **teal pill** background.
   - Use scroll-spy so the active item updates as the user scrolls through `sections`.
2. **Social / share icons** at the bottom of the left column.

### Right column (blog content)

1. **Overview** (first block)
   - Background styled the **same as the Security Compliance component** — reference that component's background.
2. **Detail content** (the `sections`)
   - Each section's main heading is wrapped in the existing **SubHeading** component.
   - **Create a new `SmallHeading` component** for blog sub-headings:
     - Desktop font-size **32px**
     - Tablet & mobile font-size **24px**
   - **Numbered lists (1, 2, 3, 4…):** use the workflow numbering icons — copy `workflowIcon1`, `workflowIcon2`, … from the **sub-industries icons store file**.
   - **Bullet lists:** use a **Tailwind color dot** (match the Figma dot color, teal) with the list content inside the `<li>`.

---

## Step 4 — Testimonial section

- Take inspiration from the **sub-industries Testimonial component** for the **background color**.
- Reuse the **same TestimonialCard** component.

---

## Step 5 — Related topics

- Reuse the **same BlogCard** component used elsewhere, fed from `relatedTopics`.

---

## Step 6 — CTA

- Reuse the **same CTA** section used on the other pages, at the very end.

---

## New components to create

- `SmallHeading` — 32px desktop / 24px tablet & mobile
- Blog Table of Contents — sticky, teal active pill, scroll-spy
- Blog social/share icons
- Blog overview block — Security-Compliance-style background
- Blog detail page composition (orchestrates the above)

## Components to reuse (do not recreate)

- Hero section (from blog main page)
- `SubHeading`
- `TestimonialCard`
- `BlogCard`
- CTA section
- Reference only (for styling/icons): Security Compliance component (overview bg), sub-industries Testimonial (bg color), sub-industries icons store (`workflowIcon1`…)

---

## Acceptance checklist

- [ ] Blog schema mirrors the case study schema; data lives in `src/constant/`
- [ ] Hero reuses the blog-main hero, with H1 + date/reading-time/views + author
- [ ] Desktop layout: left `col-span-3` (TOC + social icons), right content
- [ ] TOC is sticky with a teal active pill driven by scroll-spy
- [ ] Overview block uses the Security Compliance background
- [ ] Section headings use `SubHeading`; sub-headings use the new `SmallHeading` (32/24px)
- [ ] Numbered lists use `workflowIcon1…` from the sub-industries icon store
- [ ] Bullet lists use a Tailwind color dot with content inside `<li>`
- [ ] Testimonial uses sub-industries bg inspiration + existing `TestimonialCard`
- [ ] Related topics use existing `BlogCard`
- [ ] CTA reuses the shared CTA
- [ ] Every file ≤ 220 lines; folders kebab-case; components PascalCase; icons in store files
- [ ] Spacing, colors, typography, and responsive sizing match the Figma node
