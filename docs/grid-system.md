# Grid System

## Philosophy

A professional 12-column editorial grid provides structure without rigidity. Content spans columns purposefully — never defaulting to full-width for text.

---

## Breakpoints & Columns

| Breakpoint | Min Width | Columns | Gutter | Container Max |
|------------|-----------|---------|--------|---------------|
| Mobile | 0px | 4 | 16px | 100% |
| Tablet (sm) | 640px | 8 | 24px | 1280px |
| Laptop (lg) | 1024px | 12 | 24px | 1280px |
| Desktop (xl) | 1280px | 12 | 32px | 1440px |
| Wide (3xl) | 1680px | 12 | 32px | 1440px |

---

## Container Widths

| Token | Value | Pixels | Use |
|-------|-------|--------|-----|
| `--max-width-prose` | 42rem | 672px | Body text, reading content |
| `--max-width-prose-wide` | 52rem | 832px | Editorial introductions |
| `--max-width-content` | 72rem | 1152px | Mixed media sections |
| `--max-width-container` | 80rem | 1280px | Standard page container |
| `--max-width-container-wide` | 90rem | 1440px | Full editorial layouts |

---

## Grid Classes

### Container
```html
<div class="container-editorial">
  <!-- Max-width 1440px, responsive horizontal padding -->
</div>
```

### 12-Column Grid
```html
<div class="grid-editorial">
  <!-- 4 cols mobile → 8 cols tablet → 12 cols desktop -->
</div>
```

---

## Column Span Patterns

### Text Content (Most Common)
```
Desktop: col-span-6 col-start-4  (centered 6 of 12)
Tablet:  col-span-6 col-start-2  (centered 6 of 8)
Mobile:  col-span-4              (full width of 4)
```

### Editorial Split (Text + Image)
```
Desktop:
  Text:  col-span-5
  Image: col-span-6 col-start-7

Tablet:
  Text:  col-span-4
  Image: col-span-4

Mobile: Stack (col-span-4 each)
```

### Full-Bleed Image with Overlay Text
```
Desktop:
  Image: col-span-12 (full width)
  Text:  col-span-5, positioned over image

Mobile:
  Image: col-span-4
  Text:  below image
```

### Asymmetric Editorial
```
Desktop:
  Left:  col-span-4
  Right: col-span-7 col-start-6

Creates intentional offset — not centered
```

### Sidebar Layout
```
Desktop:
  Main:    col-span-8
  Sidebar: col-span-3 col-start-10

Tablet:
  Main:    col-span-5
  Sidebar: col-span-3

Mobile: Stack
```

---

## Grid Gap

| Context | Gap Token | Value |
|---------|-----------|-------|
| Mobile | `--grid-gutter-sm` | 16px |
| Tablet+ | `--grid-gutter` | 24px |
| Desktop+ | `--grid-gutter-lg` | 32px |

Tailwind: `gap-gutter`, `gap-gutter-sm`, `gap-gutter-lg`

---

## Content Width Rules

1. **Body text** never exceeds `max-w-prose` (42rem)
2. **Lead paragraphs** may use `max-w-prose-wide` (52rem)
3. **Images** may span wider but respect container bounds
4. **Full-bleed images** break out of container intentionally (rare, hero only)
5. **Navigation and footer** span full container width

---

## Visual Grid Reference

### Desktop (12 columns)
```
|--1--|--2--|--3--|--4--|--5--|--6--|--7--|--8--|--9--|--10-|--11-|--12-|
|     [    prose content (cols 4-9)    ]                              |
|  [text: 5]              [image: 6]                                  |
|  [    full width image (cols 1-12)                              ]   |
```

### Tablet (8 columns)
```
|--1--|--2--|--3--|--4--|--5--|--6--|--7--|--8--|
|     [  prose content (cols 2-7)  ]            |
```

### Mobile (4 columns)
```
|--1--|--2--|--3--|--4--|
|[  full width (4)     ]|
```

---

## Implementation

Grid is implemented via CSS in `globals.css`:

```css
.grid-editorial {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns-mobile), minmax(0, 1fr));
  gap: var(--grid-gutter-sm);
}

@media (min-width: 640px) {
  .grid-editorial {
    grid-template-columns: repeat(var(--grid-columns-tablet), minmax(0, 1fr));
    gap: var(--grid-gutter);
  }
}

@media (min-width: 1024px) {
  .grid-editorial {
    grid-template-columns: repeat(var(--grid-columns-desktop), minmax(0, 1fr));
  }
}
```

Column spans use Tailwind responsive prefixes:
```html
<div class="col-span-4 sm:col-span-6 lg:col-span-5">
```

---

## Anti-Patterns

- Centering everything (creates monotonous layouts)
- Text spanning all 12 columns
- Inconsistent column spans across similar sections
- Ignoring grid on mobile (stacking is fine, but use the 4-column grid)
- Nested grids more than one level deep

---

*Grid tokens are defined in `src/styles/tokens.css`. Breakpoint config in `src/types/design-tokens.ts`.*
