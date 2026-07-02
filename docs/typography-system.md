# Typography System

## Philosophy

Typography is the primary design element. Large editorial headings establish authority. Readable body text serves content. The system creates clear hierarchy without relying on color or decoration.

---

## Font Families

| Role | Family | Fallback | Variable | Rationale |
|------|--------|----------|----------|-----------|
| Display | Cormorant Garamond | Georgia, serif | `--font-display` | Editorial authority, classical beauty, institutional confidence |
| Body | Source Sans 3 | system-ui, sans-serif | `--font-body` | Exceptional readability, modern professionalism, accessibility |
| Accent | Cormorant Garamond | Georgia, serif | `--font-accent` | Pull quotes, editorial emphasis (same family as display) |

### Loading Strategy
Fonts load via `next/font/google` in root layout with `display: swap` to prevent FOIT.

---

## Type Scale

### Display (Hero & Page Titles)

| Token | Size (Desktop) | Size (Mobile) | Line Height | Tracking | Weight | Use |
|-------|---------------|---------------|-------------|----------|--------|-----|
| `display-2xl` | 5.5rem (88px) | 3rem (48px) | 1.05 | -0.02em | 500 | Homepage hero only |
| `display-xl` | 4.5rem (72px) | 2.5rem (40px) | 1.08 | -0.02em | 500 | Major page titles |
| `display-lg` | 3.5rem (56px) | 2rem (32px) | 1.10 | -0.015em | 500 | Section heroes |
| `display-md` | 2.75rem (44px) | 1.75rem (28px) | 1.12 | -0.01em | 500 | Feature headlines |
| `display-sm` | 2.25rem (36px) | 1.5rem (24px) | 1.15 | -0.01em | 500 | Sub-hero headlines |

### Headings (Section & Component Titles)

| Token | Size (Desktop) | Size (Mobile) | Line Height | Tracking | Weight | Use |
|-------|---------------|---------------|-------------|----------|--------|-----|
| `heading-xl` | 2.25rem (36px) | 1.75rem (28px) | 1.20 | -0.01em | 500 | Page section titles |
| `heading-lg` | 1.875rem (30px) | 1.5rem (24px) | 1.25 | -0.005em | 500 | Subsection titles |
| `heading-md` | 1.5rem (24px) | 1.25rem (20px) | 1.30 | 0 | 500 | Card titles, component headers |
| `heading-sm` | 1.25rem (20px) | 1.125rem (18px) | 1.35 | 0 | 500 | Small section labels |

### Body (Content)

| Token | Size | Line Height | Tracking | Weight | Use |
|-------|------|-------------|----------|--------|-----|
| `body-xl` | 1.25rem (20px) | 1.65 | 0 | 400 | Lead paragraphs, introductions |
| `body-lg` | 1.125rem (18px) | 1.60 | 0 | 400 | Emphasized body text |
| `body` | 1rem (16px) | 1.65 | 0 | 400 | Standard body text |
| `body-sm` | 0.875rem (14px) | 1.55 | 0 | 400 | Secondary content, metadata |

### Utility

| Token | Size | Line Height | Tracking | Weight | Use |
|-------|------|-------------|----------|--------|-----|
| `caption` | 0.8125rem (13px) | 1.50 | 0.01em | 400 | Image captions, footnotes |
| `overline` | 0.75rem (12px) | 1.40 | 0.12em | 600 | Section labels (uppercase) |

---

## Responsive Typography

All display and heading sizes use `clamp()` for fluid scaling:

```css
--text-display-xl: clamp(2.5rem, 5vw, 4.5rem);
```

Body sizes remain fixed for reading consistency.

### Minimum Sizes (Accessibility)
- Body text: never below 16px (1rem)
- Caption text: never below 13px (0.8125rem)
- Interactive elements: minimum 16px tap target text

---

## Hierarchy Examples

### Page Title Pattern
```
[overline]     → Section category (gold, uppercase, letterspaced)
[display-xl]   → Page title (display font, ink)
[body-xl]      → Lead paragraph (body font, ink-muted, max-w-prose)
```

### Section Pattern
```
[heading-xl]   → Section title
[body]         → Section content (max-w-prose)
```

### Card Pattern
```
[heading-md]   → Card title
[body-sm]      → Card description
[caption]      → Card metadata
```

---

## Tailwind Classes

```html
<h1 class="font-display text-display-xl text-ink">Page Title</h1>
<p class="font-body text-body-xl text-ink-muted max-w-prose">Lead text</p>
<h2 class="font-display text-heading-xl text-ink">Section Title</h2>
<p class="font-body text-body text-ink">Body paragraph</p>
<span class="font-body text-overline uppercase text-gold tracking-widest">Category</span>
<figcaption class="font-body text-caption text-stone">Caption text</figcaption>
```

---

## Text Width Constraints

| Class | Max Width | Use |
|-------|-----------|-----|
| `max-w-prose` | 42rem (672px) | Standard reading content |
| `max-w-prose-wide` | 52rem (832px) | Editorial layouts, introductions |
| `max-w-content` | 72rem (1152px) | Mixed content sections |

Never span body text across full container width.

---

## OpenType Features

```css
font-feature-settings: "kern" 1, "liga" 1;
```

Applied globally in `globals.css`.

---

## Rules

1. Display font for headings only — never for body paragraphs
2. One display size per viewport — do not mix display-xl and display-lg on the same screen
3. Overlines are always uppercase with letter-spacing
4. Body text is always `--font-body`
5. Pull quotes use `--font-accent` (Cormorant Garamond italic)
6. No bold display headings — weight 500 maximum
7. Use `text-balance` on headings, `text-pretty` on body when supported

---

*All typography tokens are defined in `src/styles/tokens.css` and mapped in `tailwind.config.ts`.*
