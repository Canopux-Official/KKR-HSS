# Project Architecture

## Overview

Scalable, component-driven architecture built on Next.js App Router with a clear separation between design system, layout shell, content, and utilities.

---

## Folder Structure

```
kkr-womens-school/
├── docs/                          # Design & engineering documentation
│   ├── FOUNDATION.md              # Master index (start here)
│   ├── architecture.md
│   ├── design-philosophy.md
│   ├── brand-personality.md
│   ├── color-system.md
│   ├── typography-system.md
│   ├── spacing-system.md
│   ├── grid-system.md
│   ├── responsive-strategy.md
│   ├── animation-guidelines.md
│   ├── component-library-plan.md
│   ├── navigation-architecture.md
│   ├── footer-architecture.md
│   ├── iconography-guidelines.md
│   ├── image-guidelines.md
│   ├── accessibility-standards.md
│   ├── coding-standards.md
│   ├── naming-conventions.md
│   ├── design-principles.md
│   └── implementation-roadmap.md
│
├── public/
│   ├── fonts/                     # Self-hosted font fallbacks (if needed)
│   ├── images/                    # Static assets (logos, favicons)
│   │   ├── brand/
│   │   └── og/
│   └── favicon.ico
│
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # Root layout (fonts, metadata)
│   │   ├── globals.css            # Global styles + Tailwind
│   │   └── page.tsx               # Foundation placeholder (no content)
│   │
│   ├── components/
│   │   ├── layout/                # Shell components (Header, Footer, etc.)
│   │   ├── ui/                    # Atomic design system components
│   │   ├── editorial/             # Content presentation blocks
│   │   ├── media/                 # Image, gallery, video components
│   │   └── forms/                 # Form elements and patterns
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── use-reduced-motion.ts
│   │   └── use-media-query.ts
│   │
│   ├── lib/                       # Utilities and configuration
│   │   ├── utils.ts               # cn(), formatters
│   │   └── motion.ts              # Framer Motion presets
│   │
│   ├── styles/
│   │   └── tokens.css             # Design token CSS custom properties
│   │
│   └── types/
│       └── design-tokens.ts       # Token type definitions
│
├── tailwind.config.ts             # Tailwind theme (references tokens)
├── next.config.ts                 # Next.js configuration
├── tsconfig.json
├── package.json
└── README.md
```

---

## Layer Responsibilities

### `src/app/`
Routing, layouts, metadata, and page composition. Pages import components — they do not contain design logic.

### `src/components/layout/`
Site-wide structural components: header, footer, navigation, skip links, page wrappers.

### `src/components/ui/`
Atomic, reusable design system primitives: buttons, links, typography components, dividers, badges.

### `src/components/editorial/`
Content presentation patterns: section headers, pull quotes, callouts, timelines, accordions, content blocks.

### `src/components/media/`
Image treatments, galleries, figure captions, video embeds, aspect-ratio containers.

### `src/components/forms/`
Form inputs, labels, validation states, contact patterns.

### `src/lib/`
Pure utilities with no UI. Motion presets, formatters, helpers.

### `src/styles/`
CSS custom properties and global base styles only.

### `src/types/`
Shared TypeScript interfaces and token type definitions.

### `docs/`
All design decisions documented. Code must align with docs.

---

## Data Flow

```
tokens.css → tailwind.config.ts → components → pages
                    ↓
            design-tokens.ts (types)
```

---

## Import Aliases

```typescript
import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/motion";
import type { TypographyScale } from "@/types/design-tokens";
```

Configured in `tsconfig.json` as `@/*` → `./src/*`.

---

## Future Expansion (Phase 2+)

```
src/
├── app/
│   ├── (site)/                    # Route group for public pages
│   │   ├── about/
│   │   ├── academics/
│   │   ├── admissions/
│   │   ├── campus/
│   │   ├── news/
│   │   └── contact/
│   └── api/                       # API routes if needed
├── content/                       # MDX or CMS content (Phase 3)
└── config/
    ├── navigation.ts              # Nav structure from architecture doc
    └── site.ts                    # Site-wide constants
```

---

## Build & Deploy

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript validation |

Recommended deployment: Vercel or equivalent with edge caching for static pages.
