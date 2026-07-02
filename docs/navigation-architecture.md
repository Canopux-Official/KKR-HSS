# Navigation Architecture

## Philosophy

Navigation is invisible until needed. It provides clear pathways without competing with content. Institutional sites use restrained, horizontal navigation — not mega-menus or hamburger-only desktop patterns.

---

## Primary Navigation Structure

```
KKR Women's H.S. School
├── About
│   ├── Our Story
│   ├── Leadership
│   ├── Vision & Mission
│   └── Heritage
├── Academics
│   ├── Curriculum
│   ├── Departments
│   ├── Faculty
│   └── Examinations
├── Admissions
│   ├── How to Apply
│   ├── Fee Structure
│   └── FAQs
├── Campus Life
│   ├── Facilities
│   ├── Activities
│   └── Gallery
├── News & Events
└── Contact
```

*Note: Final page names and hierarchy to be confirmed with school leadership in Phase 2.*

---

## Header Layout

### Desktop (1024px+)

```
┌──────────────────────────────────────────────────────────────┐
│  [Logo / School Name]     About  Academics  Admissions  ...  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- Height: 72px (fixed) or 80px (with padding)
- Background: `surface` (warm white) with subtle bottom border
- Logo/wordmark: left-aligned
- Navigation: right-aligned, horizontal
- Sticky on scroll with subtle border appearance
- No dropdown mega-menus — secondary pages accessed from parent page

### Mobile / Tablet (0–1023px)

```
┌──────────────────────────────────────┐
│  [Logo / School Name]    [Menu ☰]   │
└──────────────────────────────────────┘
```

- Hamburger icon: right-aligned
- Opens full-screen or slide-in drawer
- Drawer contains full navigation list
- Close button clearly visible
- Focus trapped within drawer when open

---

## Navigation Item Styling

### Desktop Links
```css
/* Default */
font: body, 16px, weight 500
color: ink
padding: py-4, px-0
gap between items: 32px (space-8)

/* Hover */
color: maroon
underline: grows from left, 1px, gold

/* Active (current page) */
color: maroon
underline: full width, 2px, maroon
```

### Mobile Drawer Links
```css
/* Default */
font: heading-sm
color: ink
padding: py-4
border-bottom: 1px border

/* Hover/Active */
color: maroon
```

---

## Secondary Navigation

Used within pages for section jumping or sub-page navigation:

```
About > Our Story
───────────────
[Our Story]  [Leadership]  [Vision]  [Heritage]
```

- Horizontal tab-style or vertical sidebar
- Current item: maroon text + bottom border
- No pills, no rounded backgrounds

---

## Breadcrumbs

```
Home  /  Academics  /  Curriculum
```

- Separator: `/` in stone color
- Current page: ink, not linked
- Ancestors: maroon links
- Font: body-sm
- Position: below header, above page title
- Not shown on homepage

---

## Skip Navigation

```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

- First focusable element on every page
- Visually hidden until focused
- Jumps to `<main id="main-content">`

---

## Utility Navigation (Optional)

Small links above or within header:

```
[Contact]  [News]
```

- Font: body-sm
- Color: stone
- Hover: maroon
- Positioned right, above or beside primary nav

---

## Search (Phase 3+)

If implemented:
- Simple search icon in header
- Opens minimal search overlay (not a mega-menu)
- Results page with editorial layout
- No autocomplete animations

---

## Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Keyboard navigation | Tab through all items, Enter to activate |
| Focus indicators | 2px maroon outline, 2px offset |
| ARIA landmarks | `<nav aria-label="Primary navigation">` |
| Mobile drawer | `aria-expanded`, `aria-controls`, focus trap |
| Current page | `aria-current="page"` |
| Dropdown (if added) | `aria-haspopup`, `aria-expanded` |

---

## Behavior

| State | Behavior |
|-------|----------|
| Page load | Navigation visible, no animation |
| Scroll down | Header becomes sticky with border-bottom |
| Scroll up | Header remains visible (no hide/show) |
| Mobile menu open | Body scroll locked, focus trapped |
| Route change | Mobile menu closes, focus returns to trigger |

---

## Configuration (Phase 2)

Navigation structure will be defined in:

```typescript
// src/config/navigation.ts
export const primaryNavigation = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      // ...
    ],
  },
  // ...
];
```

---

## Anti-Patterns

- Mega-menus with images and descriptions
- Hamburger menu on desktop
- More than 7 top-level items
- Animated menu icons (hamburger → X morph)
- Dropdown menus on hover (use click for accessibility)
- Breadcrumb overuse (max 3 levels deep)
- Navigation that hides on scroll down

---

*Navigation components: `Header`, `Navigation`, `MobileMenu` — see component library plan.*
