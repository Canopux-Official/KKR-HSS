# Iconography Guidelines

## Philosophy

Icons are functional, not decorative. Most institutional content needs no icons at all. When icons are necessary, they are minimal, consistent, and never compete with typography.

**Rule:** If an icon does not aid comprehension, remove it.

---

## When to Use Icons

| Context | Use Icon? | Alternative |
|---------|-----------|-------------|
| Navigation labels | No | Text only |
| Section headings | No | Typography hierarchy |
| Contact information | Optional | Text labels preferred |
| External links | Yes | Small arrow indicator |
| Download links | Yes | Small download indicator |
| Social media | No | Text links preferred |
| Form fields | No | Labels and placeholders |
| Feature lists | No | Editorial text blocks |
| Buttons | Rarely | Text-only buttons preferred |

---

## Icon Style

| Property | Value |
|----------|-------|
| Style | Outlined (stroke), not filled |
| Stroke width | 1.5px |
| Size | 16px (inline), 20px (standalone) |
| Color | `ink` or `stone` — never maroon or gold |
| Source | Lucide React (consistent, minimal, open source) |

---

## Approved Icons (Minimal Set)

| Icon | Use |
|------|-----|
| `ArrowRight` | Link continuation, "read more" |
| `ArrowUpRight` | External links |
| `Download` | PDF/document downloads |
| `Menu` | Mobile navigation toggle |
| `X` | Close mobile menu / modals |
| `ChevronDown` | Accordion expand indicator |
| `Mail` | Email (only in contact blocks) |
| `Phone` | Phone (only in contact blocks) |
| `MapPin` | Address (only in contact blocks) |

**Total approved icons: ~10.** Resist adding more.

---

## Implementation

```tsx
import { ArrowRight } from "lucide-react";

<Link href="/about" className="inline-flex items-center gap-2">
  Read more
  <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
</Link>
```

### Rules
- Always `aria-hidden="true"` on decorative icons
- Icon color inherits from parent text color
- Never use icons as the sole indicator (always pair with text)
- No icon fonts — use SVG components only

---

## What Not to Do

- Icons beside every heading
- Colored icons (maroon, gold, or multi-color)
- Filled/solid icon style
- Icon grids for features or services
- Custom illustrated icons
- Emoji as icons
- Animated icons
- Large decorative icons in hero sections
- Icon-only buttons without `aria-label`

---

## Logo Usage

The school logo/wordmark is separate from iconography:

- SVG format preferred
- Minimum clear space: height of the letter "K" on all sides
- Never distort, rotate, or apply effects
- Full color on light backgrounds
- Reversed (warm-white) on dark backgrounds only
- Minimum size: 120px wide (digital)

*Logo files to be provided by school in Phase 2.*

---

*Icon library: Lucide React. Install in Phase 2 when building components.*
