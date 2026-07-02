# KKR Women's Higher Secondary School — Design Foundation

> The authoritative reference for building the official institutional website.
> Bhadrak, Odisha, India

---

## Purpose

This document establishes the complete design and engineering foundation for a world-class institutional website. It is not a page build — it is the architectural blueprint that every future design and development decision must follow.

The website must feel comparable in quality to internationally renowned educational institutions — Harvard, Guildhall School of Music & Drama, Ravensbourne — while maintaining a distinct identity rooted in Odisha's educational heritage.

---

## Reference Analysis

### What Makes Exceptional Institutional Sites Work

| Principle | Harvard | Guildhall | Ravensbourne | KKR Application |
|-----------|---------|-----------|--------------|-----------------|
| Editorial layouts | Long-form storytelling, asymmetric grids | Clean section rhythm, restrained blocks | Bold typographic statements | Photography-led editorial with generous margins |
| Typography | Serif authority, large display type | Professional hierarchy | Confident scale contrasts | Cormorant Garamond display + Source Sans 3 body |
| Visual hierarchy | Content leads, UI recedes | Clear section breaks | Strong headline presence | Institutional headings, muted UI chrome |
| Whitespace | Dominant, intentional | Generous section padding | Breathing room between blocks | 8-point system, section rhythm of 64–128px |
| Color restraint | Crimson accent on white | Minimal palette | Controlled accent use | Maroon + gold on warm white |
| Photography | Archival, authentic, full-bleed | Performance imagery | Student work, editorial crops | Real campus life only — never stock |
| Interactions | Subtle, content-serving | Minimal animation | Purposeful motion | Fade, reveal, gentle hover only |
| Timelessness | 250+ years of design restraint | Classical institutional tone | Contemporary but not trendy | Avoid all SaaS/AI design patterns |

### What We Explicitly Reject

- Giant gradients, glassmorphism, blob shapes
- Floating statistic cards, animated counters
- Rounded SaaS UI, startup hero sections
- Generic icons beside every heading
- Feature card grids, fake testimonials
- Over-animation, large shadows, trend-chasing

---

## Document Index

| # | Document | Path |
|---|----------|------|
| 1 | Project Architecture | [architecture.md](./architecture.md) |
| 2 | Design Philosophy | [design-philosophy.md](./design-philosophy.md) |
| 3 | Brand Personality | [brand-personality.md](./brand-personality.md) |
| 4 | Color System | [color-system.md](./color-system.md) |
| 5 | Typography System | [typography-system.md](./typography-system.md) |
| 6 | Spacing System | [spacing-system.md](./spacing-system.md) |
| 7 | Grid System | [grid-system.md](./grid-system.md) |
| 8 | Responsive Strategy | [responsive-strategy.md](./responsive-strategy.md) |
| 9 | Animation Guidelines | [animation-guidelines.md](./animation-guidelines.md) |
| 10 | Component Library Plan | [component-library-plan.md](./component-library-plan.md) |
| 11 | Navigation Architecture | [navigation-architecture.md](./navigation-architecture.md) |
| 12 | Footer Architecture | [footer-architecture.md](./footer-architecture.md) |
| 13 | Iconography Guidelines | [iconography-guidelines.md](./iconography-guidelines.md) |
| 14 | Image Usage Guidelines | [image-guidelines.md](./image-guidelines.md) |
| 15 | Accessibility Standards | [accessibility-standards.md](./accessibility-standards.md) |
| 16 | Coding Standards | [coding-standards.md](./coding-standards.md) |
| 17 | Naming Conventions | [naming-conventions.md](./naming-conventions.md) |
| 18 | Design Principles | [design-principles.md](./design-principles.md) |
| 19 | Implementation Roadmap | [implementation-roadmap.md](./implementation-roadmap.md) |

---

## Technology Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 15 (App Router) | SSR, routing, image optimization, institutional SEO |
| Language | TypeScript | Type safety across design tokens and components |
| Styling | Tailwind CSS + CSS custom properties | Token-driven, maintainable, responsive |
| Animation | Framer Motion (minimal) | Subtle reveals with reduced-motion support |
| Fonts | Cormorant Garamond + Source Sans 3 | Editorial authority + exceptional readability |

---

## Token Source of Truth

All design values live in:

```
src/styles/tokens.css          → CSS custom properties
tailwind.config.ts             → Tailwind theme extension
src/types/design-tokens.ts     → TypeScript type definitions
```

Never hardcode colors, spacing, or typography in components. Always reference tokens.

---

## Quick Start

```bash
npm install
npm run dev
```

Foundation phase delivers tokens, documentation, and project structure only. No page content exists yet.

---

## Governance

Every future contribution must:

1. Reference this foundation before making design decisions
2. Use design tokens — never arbitrary values
3. Pass accessibility review (WCAG 2.1 AA minimum)
4. Avoid patterns listed in the "Absolutely Avoid" section
5. Be reviewed against [design-principles.md](./design-principles.md)

---

*Foundation Phase — Version 1.0*
*KKR Women's Higher Secondary School, Bhadrak, Odisha*
