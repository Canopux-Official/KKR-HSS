# KKR Mahila Higher Secondary School — Website Foundation

Official website foundation for **KKR Mahila Higher Secondary School**, Bhadrak, Odisha, India.

A timeless, premium institutional website built with Next.js, TypeScript, and Tailwind CSS.

---

## Status

**Phase 1: Foundation** — Complete

This repository contains the design system, documentation, and project architecture. No page content exists yet.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # Production build
npm run lint     # ESLint
npm run typecheck # TypeScript check
```

---

## Documentation

Start with **[docs/FOUNDATION.md](./docs/FOUNDATION.md)** — the master index for all design and engineering documentation.

| Document | Description |
|----------|-------------|
| [Architecture](./docs/architecture.md) | Project structure and layer responsibilities |
| [Design Philosophy](./docs/design-philosophy.md) | Core design beliefs and anti-patterns |
| [Brand Personality](./docs/brand-personality.md) | Voice, tone, and visual identity |
| [Color System](./docs/color-system.md) | Institutional color palette and tokens |
| [Typography](./docs/typography-system.md) | Font families, type scale, hierarchy |
| [Spacing](./docs/spacing-system.md) | 8-point spacing system |
| [Grid](./docs/grid-system.md) | Responsive 12-column editorial grid |
| [Components](./docs/component-library-plan.md) | Component library blueprint |
| [Roadmap](./docs/implementation-roadmap.md) | Phases 2–5 implementation plan |

---

## Design Tokens

All design values are defined as CSS custom properties:

```
src/styles/tokens.css          → Source of truth
tailwind.config.ts             → Tailwind theme extension
src/types/design-tokens.ts     → TypeScript types
```

**Never hardcode colors, spacing, or typography in components.**

---

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (token-driven)
- **Framer Motion** (minimal, reduced-motion aware)
- **Cormorant Garamond** + **Source Sans 3** (Google Fonts)

---

## Project Structure

```
src/
├── app/           → Next.js routing and layouts
├── components/    → ui, layout, editorial, media, forms
├── hooks/         → useReducedMotion, useMediaQuery
├── lib/           → utils, motion presets
├── styles/        → Design token CSS
└── types/         → TypeScript definitions
docs/              → Complete design documentation
public/            → Static assets
```

---

## Design Principles

1. Content is the interface
2. Restraint is premium
3. Authenticity over aspiration
4. Typography leads
5. White space is structure
6. Photography over decoration
7. Accessibility is foundational
8. Timelessness over trends

See [docs/design-principles.md](./docs/design-principles.md) for the complete list.

---

## License

Private — KKR Mahila Higher Secondary School. All rights reserved.
