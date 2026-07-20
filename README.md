<div align="center">

# Aurum

**The Art of the Table.**
A concept fine-dining website for a fictional three-Michelin-star restaurant in Donostia — built as a frontend portfolio piece.

[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

[Live Demo](https://aurum.example.com) · [Case Study](https://aurum.example.com/case-study) · [Report a bug](https://github.com/Dev-Sot/Aurum-Restaurant/issues)

<br />

<img src="./docs/images/landing.png" alt="Aurum — full landing page" width="100%" />

</div>

<br />

> **Note on the demo link** — this repository doesn't ship with a hosted
> deployment yet. The URLs above are placeholders; swap them for the real
> ones once the project is deployed (see [SEO & metadata](#seo--metadata)
> for every file that needs the same update).

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Optimization](#optimization)
- [SEO & metadata](#seo--metadata)
- [Roadmap](#roadmap)
- [Credits](#credits)
- [License](#license)

## About

Aurum isn't a real restaurant — it's a frontend design and development
exercise built under the constraints of a luxury digital brief: typography as
the lead actor, generous negative space, restrained microinteractions, and
zero visual inconsistency between sections.

The project started as a single-file draft exported from
[Figma Make](https://www.figma.com/make) and was rebuilt iteratively —
component by component — into a maintainable, bilingual, fully responsive
application with a custom design system and a hand-rolled i18n/routing layer.
It draws visual inspiration from editorial hospitality sites and studios like
Locomotive, Basic Agency and Instrument: heavy serif display type (Bodoni
Moda), wide-tracked uppercase labels (Inter), and a warm black/ivory/champagne
palette.

The full build process — including the decisions, the mistakes caught along
the way, and what was learned — is written up in the in-app
**[Case Study](https://aurum.example.com/case-study)** page (`/case-study`),
not just this README.

## Features

- **13 hand-composed sections** — Hero, Manifesto, Identity strip,
  Experience, Ingredients, Chef, Menu, Awards, Gallery, Testimonials,
  Reservation, Footer, plus a dedicated Case Study page
- **Bilingual (ES/EN)** — a custom, type-safe i18n system (`src/i18n`) with
  zero external dependencies; every string lives in one object per language,
  and TypeScript fails the build if a translation key is missing
- **Custom client-side router** — a minimal `history.pushState`-based router
  (`src/router`) for the two routes the site needs, with no routing library
  — no more, no less than what the app actually uses
- **Scroll-driven motion** — Framer Motion `useInView` reveals, a scroll-linked
  hero parallax (`useScroll`/`useTransform`, no manual scroll-event math),
  a custom cursor on the gallery, and magnetic hover on the primary CTAs
  — all gated behind `prefers-reduced-motion` and fine-pointer detection so
  nothing forces itself on touch devices or users who've asked for less motion
- **Mobile-first responsive design** — every section was redesigned per
  breakpoint (not just scaled down): grids collapse, the nav becomes a
  full-screen menu, the menu list restructures, the gallery drops
  hover-dependent captions on touch
- **Simulated reservation flow** — a fully client-side form (local React
  state, no backend) with validation and a success confirmation state
- **Accessible by default** — real anchor navigation, a skip-to-content link,
  visible focus states everywhere, a labelled custom `<select>` affordance,
  and colors checked against WCAG AA contrast
- **A real design system, not a page** — five typed primitives
  (`Heading`, `Body`, `Eyebrow`, `Button`, `Reveal`) that lock down only what
  never changes between usages, avoiding Tailwind class-order conflicts

## Tech stack

| | |
| --- | --- |
| **Framework** | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) (strict mode) |
| **Build tool** | [Vite 8](https://vitejs.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) (`@theme`, no PostCSS config) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide](https://lucide.dev) |
| **i18n** | Custom (`src/i18n`) — no i18next, no external library |
| **Routing** | Custom (`src/router`) — no react-router |
| **Linting** | [ESLint 9](https://eslint.org) (flat config) + `typescript-eslint` |
| **Formatting** | [oxfmt](https://github.com/oxc-project/oxc) |
| **Package manager** | [pnpm](https://pnpm.io) |

## Project structure

```text
src/
├── components/       # Reusable, content-agnostic primitives
│   ├── Body.tsx          # Inter body copy
│   ├── Button.tsx        # sm / md / lg sized CTA, outline & solid variants
│   ├── Divider.tsx       # 1px champagne accent line
│   ├── Eyebrow.tsx       # Uppercase micro-label
│   ├── GalleryCursor.tsx # Custom cursor-follower (fine-pointer only)
│   ├── Heading.tsx       # Bodoni Moda display text
│   ├── LanguageSwitch.tsx
│   ├── Magnetic.tsx      # Cursor-attraction wrapper for CTAs
│   ├── Reveal.tsx        # Scroll-reveal wrapper (Framer Motion)
│   └── Section.tsx       # Background + anchor-id wrapper
├── sections/         # One file per landing-page section
├── pages/            # Route-level compositions (Home, CaseStudy)
├── i18n/             # Translation types, es.ts / en.ts, LanguageContext
├── router/            # Minimal history-based router (Router, Link)
├── hooks/             # useScrollY, useSectionInView, useFinePointer, usePageMeta
├── constants/         # Shared layout tokens (section padding scale)
├── types/             # Shared content shape (ExperienceItem, CourseItem, …)
├── lib/               # cn() className helper
├── App.tsx            # Providers + route switch
└── main.tsx           # React entry point

public/                # Static assets served as-is (favicon, manifest, robots.txt, sitemap.xml)
docs/images/            # Screenshots referenced by this README (see docs/images/README.md)
.figma/make/site.json   # Figma Make site metadata (title, description, robots, favicon)
```

## Getting started

This project uses [pnpm](https://pnpm.io). If you don't have it installed,
`corepack pnpm <command>` works too (Node ships Corepack by default).

```bash
# 1. Clone the repository
git clone https://github.com/Dev-Sot/Aurum-Restaurant.git
cd Aurum-Restaurant

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
```

The app runs at `http://localhost:8443` by default (configurable via the
`PORT` environment variable).

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the Vite dev server with hot module reload |
| `pnpm build` | Produces a production build in `dist/` (Vite doesn't type-check on build — run `pnpm typecheck` first) |
| `pnpm preview` | Serves the production build locally |
| `pnpm lint` | Runs ESLint against the whole project |
| `pnpm typecheck` | Runs `tsc --noEmit` (strict mode, no unused locals/params) |
| `pnpm format` | Formats the codebase with oxfmt |

## Optimization

- **Performance** — scroll-linked motion uses Framer Motion motion values
  (`useScroll`/`useTransform`) instead of re-rendering React on every scroll
  event; images sit in fixed-height containers to reserve layout space and
  avoid content shift; the production bundle is a single Vite build with no
  unnecessary runtime dependencies (no i18n or routing library).
- **Responsive** — mobile-first with three shared breakpoint tiers
  (`sectionPadding`, `sectionPaddingTight`, `sectionPaddingLoose` in
  `src/constants/layout.ts`) instead of one-off values per section, verified
  against real screenshots at 390px, 820px and 1600px — not just resized
  in DevTools.
- **Accessibility** — skip-to-content link, real section anchors instead of
  dead `href="#"` links, visible `focus-visible` states on every interactive
  element, `prefers-reduced-motion` respected globally via Framer Motion's
  `MotionConfig`, and color contrast checked against WCAG AA (one secondary
  tone was adjusted after failing the 4.5:1 minimum).
- **Type safety** — `strict: true`, `noUnusedLocals`, `noUnusedParameters` in
  `tsconfig.json`; the i18n `Translation` type means a missing key in either
  language fails the build rather than silently rendering blank text.

## SEO & metadata

Title, description, `robots` and the favicon are configured centrally in
[`.figma/make/site.json`](./.figma/make/site.json) (read by a Vite plugin in
`vite.config.ts` that injects them into `index.html` at build time). Fields
it doesn't cover — `keywords`, `author`, Twitter Card fallback, the canonical
URL — are set directly in [`index.html`](./index.html).

**Before deploying to a real domain**, update the placeholder
`https://aurum.example.com` in all of these:

- `index.html` (`<link rel="canonical">`)
- `public/robots.txt` (`Sitemap:` line)
- `public/sitemap.xml` (both `<loc>` entries)
- `package.json` (`homepage`)
- This README (demo links at the top)

And once a real Open Graph image exists, add it as `openGraph.image` in
`.figma/make/site.json` and remove the Twitter Card fallback block noted in
`index.html`.

## Roadmap

- [ ] Add real Open Graph / Twitter preview image
- [ ] Add the screenshots referenced in `docs/images/`
- [ ] Deploy and swap every placeholder domain for the real one
- [ ] Personal voice pass on the Case Study's "Challenges" and "Lessons
      Learned" sections (`src/i18n/es.ts` / `en.ts`)
- [ ] Optional: a third language
- [ ] Optional: automated visual regression tests for the three breakpoints

## Credits

Concept project — designed & developed by **[Dev-Sot](https://github.com/Dev-Sot)**
· Studio: **Extracurricular**

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.
