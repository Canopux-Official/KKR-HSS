# Spacing System

## Philosophy

Consistent spatial rhythm creates the premium, editorial feel. An 8-point base grid ensures every margin, padding, and gap aligns to a predictable scale.

**Rule:** Only use values from the spacing scale. Never arbitrary pixel values.

---

## Base Unit

**8px** — all spacing derives from multiples of 8.

---

## Spacing Scale

| Token | Value | Pixels | Tailwind | Primary Use |
|-------|-------|--------|----------|-------------|
| `--space-0` | 0 | 0 | `0` | Reset |
| `--space-1` | 0.25rem | 4px | `1` | Micro adjustments (icon gaps) |
| `--space-2` | 0.5rem | 8px | `2` | Tight inline spacing |
| `--space-3` | 0.75rem | 12px | `3` | Compact component padding |
| `--space-4` | 1rem | 16px | `4` | Standard component padding |
| `--space-5` | 1.25rem | 20px | `5` | Comfortable inline gaps |
| `--space-6` | 1.5rem | 24px | `6` | Component internal spacing |
| `--space-8` | 2rem | 32px | `8` | Between related elements |
| `--space-10` | 2.5rem | 40px | `10` | Subsection spacing |
| `--space-12` | 3rem | 48px | `12` | Section internal padding |
| `--space-16` | 4rem | 64px | `16` | Between content blocks |
| `--space-20` | 5rem | 80px | `20` | Section padding (mobile) |
| `--space-24` | 6rem | 96px | `24` | Section padding (tablet) |
| `--space-32` | 8rem | 128px | `32` | Section padding (desktop) |
| `--space-40` | 10rem | 160px | `40` | Major section breaks |
| `--space-48` | 12rem | 192px | `48` | Hero spacing |
| `--space-64` | 16rem | 256px | `64` | Page-level vertical rhythm |

---

## Application Guidelines

### Component Internal Spacing

| Element | Padding | Gap |
|---------|---------|-----|
| Button | `px-6 py-3` (24px × 12px) | — |
| Input field | `px-4 py-3` (16px × 12px) | — |
| Card (rare) | `p-6` to `p-8` | — |
| Navigation item | `py-4` | `gap-8` between items |
| Form field group | — | `gap-2` label to input, `gap-6` between fields |

### Layout Spacing

| Context | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Section vertical padding | `py-20` (80px) | `py-24` (96px) | `py-32` (128px) |
| Between sections | `space-y-20` | `space-y-24` | `space-y-32` |
| Heading to body | `mt-6` to `mt-8` | `mt-8` | `mt-8` |
| Overline to heading | `mb-4` | `mb-4` | `mb-6` |
| Paragraph spacing | `mb-6` | `mb-6` | `mb-8` |
| Image to caption | `mt-3` | `mt-3` | `mt-4` |

### Page-Level Rhythm

```
[Header]                    — fixed/sticky
[Hero]                      — py-48 to py-64
[Section 1]                 — py-32
[Section 2]                 — py-32
[Section 3]                 — py-32
[Footer]                    — py-16 to py-24
```

---

## Vertical Rhythm Principle

Sections breathe. The minimum vertical padding for any content section is `--space-20` (80px) on mobile, scaling to `--space-32` (128px) on desktop.

Between a heading and its content: minimum `--space-6` (24px).
Between paragraphs: `--space-6` (24px).
Between unrelated content blocks: minimum `--space-16` (64px).

---

## Horizontal Spacing

Container padding follows grid gutter tokens:

| Breakpoint | Gutter Token | Value |
|------------|-------------|-------|
| Mobile | `--grid-gutter-sm` | 16px |
| Tablet+ | `--grid-gutter` | 24px |
| Desktop+ | `--grid-gutter-lg` | 32px |

---

## Tailwind Usage

```html
<!-- Section -->
<section class="py-20 md:py-24 lg:py-32">

<!-- Heading group -->
<div class="mb-8">
  <span class="mb-4 block">Overline</span>
  <h2>Heading</h2>
</div>

<!-- Content stack -->
<div class="space-y-6">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</div>

<!-- Component padding -->
<button class="px-6 py-3">Action</button>
```

---

## Anti-Patterns

- `mt-[37px]` or any arbitrary value
- Inconsistent section padding across pages
- Cramped content (less than `py-16` for sections)
- Excessive spacing that disconnects related content
- Mixing spacing scales (e.g., `mb-5` then `mb-7`)

---

*Spacing tokens are defined in `src/styles/tokens.css` and mapped in `tailwind.config.ts`.*
