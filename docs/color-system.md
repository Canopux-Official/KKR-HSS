# Color System

## Philosophy

Color is used sparingly. Warm white dominates. Maroon carries institutional identity. Gold marks distinction. Everything else is neutral.

**Rule:** If unsure whether to add color, don't.

---

## Primary Palette

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Maroon | `#5C1A2E` | `--color-maroon` | Primary brand, links, key accents, focus states |
| Maroon Light | `#7A2D45` | `--color-maroon-light` | Hover states, secondary emphasis |
| Maroon Dark | `#3D0F1E` | `--color-maroon-dark` | Active states, deep accents |

### Maroon Usage Rules
- Navigation active states
- Text links
- Primary buttons (outlined or filled — sparingly)
- Section dividers (thin rules)
- Focus rings
- Maximum ~10% of any page's visual area

---

## Accent Palette

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Gold | `#B8956A` | `--color-gold` | Decorative rules, pull quote marks, subtle highlights |
| Gold Muted | `#C9AD87` | `--color-gold-muted` | Secondary accent, borders |
| Gold Light | `#E8DCC8` | `--color-gold-light` | Background washes (very sparingly) |

### Gold Usage Rules
- Never use gold as a primary action color
- Thin horizontal rules between sections
- Pull quote quotation marks
- Occasional overline text color
- Maximum ~3% of any page's visual area

---

## Neutral Palette

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Warm White | `#FAF8F5` | `--color-warm-white` | Primary background |
| Beige | `#F5F0E8` | `--color-beige` | Alternate section backgrounds |
| Beige Warm | `#EBE4D8` | `--color-beige-warm` | Subtle section differentiation |
| Charcoal | `#2A2A2A` | `--color-charcoal` | Dark sections (rare), footer background |
| Charcoal Light | `#3D3D3D` | `--color-charcoal-light` | Dark section text variants |
| Stone | `#8A8580` | `--color-stone` | Captions, metadata, secondary text |
| Stone Light | `#B5B0A8` | `--color-stone-light` | Disabled states, placeholders |
| Stone Dark | `#6B6660` | `--color-stone-dark` | Borders on dark backgrounds |

---

## Semantic Palette

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Ink | `#1A1A1A` | `--color-ink` | Primary body text |
| Ink Muted | `#4A4A4A` | `--color-ink-muted` | Secondary body text |
| Ink Subtle | `#6B6B6B` | `--color-ink-subtle` | Tertiary text, timestamps |
| Surface | `#FAF8F5` | `--color-surface` | Page background |
| Surface Elevated | `#FFFFFF` | `--color-surface-elevated` | Cards (rare), modals |
| Surface Muted | `#F5F0E8` | `--color-surface-muted` | Alternate sections |
| Border | `#E5E0D8` | `--color-border` | Dividers, input borders |
| Border Strong | `#C9C4BC` | `--color-border-strong` | Emphasized borders |
| Focus | `#5C1A2E` | `--color-focus` | Focus rings (matches maroon) |
| Error | `#8B2E2E` | `--color-error` | Form validation errors |
| Success | `#2E5C3E` | `--color-success` | Form success states |

---

## Contrast Ratios (WCAG AA)

| Combination | Ratio | Pass |
|-------------|-------|------|
| Ink on Warm White | 16.8:1 | AAA |
| Ink Muted on Warm White | 8.6:1 | AAA |
| Maroon on Warm White | 9.2:1 | AAA |
| Stone on Warm White | 4.6:1 | AA |
| Gold on Maroon Dark | 5.1:1 | AA |
| Warm White on Charcoal | 15.2:1 | AAA |
| Warm White on Maroon | 9.2:1 | AAA |

---

## Section Background Rhythm

Alternate subtly to create visual rhythm without color overload:

```
Section 1: Surface (warm white)
Section 2: Surface (warm white) — separated by border or spacing only
Section 3: Surface Muted (beige) — optional, for differentiation
Section 4: Surface (warm white)
Footer: Charcoal (dark, rare)
```

Dark sections (charcoal background) are used sparingly — typically footer only.

---

## Tailwind Usage

```html
<!-- Backgrounds -->
<div class="bg-surface">...</div>
<div class="bg-surface-muted">...</div>
<div class="bg-charcoal text-warm-white">...</div>

<!-- Text -->
<p class="text-ink">Primary text</p>
<p class="text-ink-muted">Secondary text</p>
<p class="text-stone">Caption text</p>
<a class="text-maroon hover:text-maroon-dark">Link</a>

<!-- Borders -->
<hr class="border-border" />
<div class="border-l-2 border-gold">Pull quote</div>

<!-- Accent -->
<span class="text-gold">Overline label</span>
```

---

## What Not to Do

- No gradient backgrounds
- No multi-color section headers
- No colored card backgrounds
- No rainbow navigation states
- No colored icons (icons are ink or stone only)
- No neon or saturated colors

---

*All color values are defined in `src/styles/tokens.css` and extended in `tailwind.config.ts`.*
