# Coding Standards

## Philosophy

Code quality reflects institutional quality. Clean, typed, maintainable code that any developer can understand and extend.

---

## Language & Framework

| Tool | Version | Purpose |
|------|---------|---------|
| TypeScript | 5.x | Type safety |
| Next.js | 15.x | App Router, SSR, routing |
| React | 19.x | UI library |
| Tailwind CSS | 3.x | Utility-first styling |
| Framer Motion | 12.x | Minimal animation |

---

## TypeScript

### Strict Mode
`strict: true` in `tsconfig.json` — no exceptions.

### Type Patterns
```typescript
// Props interfaces for every component
interface ButtonProps {
  variant?: "primary" | "secondary" | "text";
  children: React.ReactNode;
  className?: string;
}

// Use type imports
import type { Metadata } from "next";

// Avoid `any` — use `unknown` and narrow
function parseData(data: unknown): SchoolData {
  // validation logic
}
```

### Rules
- No `any` types
- No `@ts-ignore` without documented reason
- Export types alongside components
- Use `Readonly<>` for props in server components

---

## React & Next.js

### Server Components Default
```tsx
// Server Component (default) — no "use client"
export function SectionHeader({ title, overline }: SectionHeaderProps) {
  return (
    <header>
      {overline && <span className="text-overline">{overline}</span>}
      <h2>{title}</h2>
    </header>
  );
}
```

### Client Components — Only When Needed
```tsx
"use client";

// Only for: interactivity, hooks, browser APIs, Framer Motion
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}
```

### When to Use `"use client"`
- Event handlers (onClick, onChange)
- React hooks (useState, useEffect, useRef)
- Browser APIs (window, document, matchMedia)
- Framer Motion animations
- Third-party libraries requiring browser context

### When NOT to Use `"use client"`
- Static content rendering
- Data fetching (use Server Components)
- Layout components without interactivity
- Typography and text components

---

## Styling

### Design Tokens Only
```tsx
// Correct
<div className="bg-surface text-ink p-8">

// Wrong — arbitrary values
<div className="bg-[#faf8f5] text-[#1a1a1a] p-[37px]">
```

### Class Merging
```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-styles", conditional && "conditional-style", className)}>
```

### No CSS Modules or Styled Components
Tailwind utilities + CSS custom properties only. Component-specific CSS only in `globals.css` `@layer components` when Tailwind is insufficient.

---

## File Organization

### One Component Per File
```
Button.tsx       → exports Button
Button.types.ts  → exports ButtonProps (if complex)
index.ts         → re-exports
```

### Barrel Exports
```typescript
// src/components/ui/index.ts
export { Button } from "./Button";
export { Link } from "./Link";
export { Heading } from "./Heading";
```

### Import Order
```typescript
// 1. React / Next.js
import type { Metadata } from "next";
import Image from "next/image";

// 2. Third-party
import { motion } from "framer-motion";

// 3. Internal — absolute imports
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { TypographyScale } from "@/types/design-tokens";

// 4. Relative imports (avoid when possible)
import { localHelper } from "./helpers";
```

---

## Error Handling

```typescript
// Server-side data fetching
async function getPageData(slug: string) {
  const data = await fetchContent(slug);
  if (!data) {
    notFound(); // Next.js not-found page
  }
  return data;
}
```

- No silent failures
- User-facing errors are calm and helpful
- Console errors in development only
- No try/catch wrapping everything — handle at boundaries

---

## Performance

| Practice | Implementation |
|----------|----------------|
| Image optimization | `next/image` always |
| Font optimization | `next/font/google` |
| Code splitting | Automatic via App Router |
| Lazy loading | Default for below-fold images |
| Bundle size | Import only used icons from Lucide |
| Server Components | Default — minimize client JS |

---

## Git Practices

### Commit Messages
```
type: concise description

feat: add Button component with primary variant
fix: correct heading hierarchy on about page
docs: update color system with contrast ratios
refactor: extract SectionHeader from page components
```

### Branch Naming
```
feature/component-button
feature/page-about
fix/navigation-mobile-focus
docs/typography-update
```

---

## Linting

ESLint with `eslint-config-next` — run before every commit:

```bash
npm run lint
npm run typecheck
```

---

## Comments

```typescript
// Only comment non-obvious business logic
// DO NOT comment what the code does — the code should be self-explanatory

// School requires admission forms to be submitted before March 31
const ADMISSION_DEADLINE = new Date("2026-03-31");
```

---

## Environment Variables

```bash
# .env.local (never committed)
NEXT_PUBLIC_SITE_URL=https://kkrwomens.edu.in
CONTACT_FORM_ENDPOINT=...
```

- `NEXT_PUBLIC_` prefix for client-side variables only
- Never commit `.env.local`
- Document all variables in `.env.example`

---

*Standards are enforced via ESLint, TypeScript, and code review.*
