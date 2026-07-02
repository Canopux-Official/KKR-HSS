# Footer Architecture

## Philosophy

The footer is dignified and functional — a quiet conclusion to every page. It provides essential links, contact information, and institutional identity without visual competition.

Dark footers (charcoal background) are used by many premium institutions and create a grounded, authoritative close.

---

## Footer Layout

### Desktop

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  KKR Women's Higher Secondary School                             │
│  Bhadrak, Odisha, India                                          │
│                                                                  │
│  ─────────────────────────────────────────────────────────────── │
│                                                                  │
│  About          Academics       Admissions      Contact          │
│  Our Story      Curriculum      How to Apply    Address          │
│  Leadership     Faculty         Fee Structure   Phone            │
│  Heritage       Departments     FAQs            Email            │
│                                                                  │
│  ─────────────────────────────────────────────────────────────── │
│                                                                  │
│  © 2026 KKR Women's Higher Secondary School. All rights reserved.│
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Mobile

```
┌────────────────────────────────┐
│                                │
│  KKR Women's H.S. School       │
│  Bhadrak, Odisha               │
│                                │
│  ──────────────────────────── │
│                                │
│  About                         │
│  Academics                     │
│  Admissions                    │
│  Campus Life                   │
│  News & Events                 │
│  Contact                       │
│                                │
│  ──────────────────────────── │
│                                │
│  © 2026 KKR Women's H.S. School│
│                                │
└────────────────────────────────┘
```

---

## Visual Treatment

| Property | Value |
|----------|-------|
| Background | `charcoal` (#2A2A2A) |
| Text | `warm-white` (#FAF8F5) |
| Muted text | `stone-light` (#B5B0A8) |
| Links | `warm-white`, hover: `gold` |
| Dividers | `charcoal-light` or 1px `stone-dark` at 20% opacity |
| Padding | `py-16` (mobile) → `py-24` (desktop) |

---

## Content Sections

### 1. Identity Block
- School name: `heading-md`, display font, warm-white
- Location: `body-sm`, stone-light
- Optional: single-line mission statement in `body-sm`

### 2. Navigation Columns (Desktop)
- 3–4 columns of links
- Column heading: `overline`, gold, uppercase
- Links: `body-sm`, warm-white
- Link hover: gold color transition (150ms)

### 3. Contact Information
- Address, phone, email
- `body-sm`, stone-light
- Links (phone, email): warm-white with hover

### 4. Legal / Copyright
- `caption`, stone-light
- Copyright year (dynamic)
- Optional: privacy policy link

---

## Footer Navigation Links

Mirror primary navigation — do not introduce new sections:

| Column | Links |
|--------|-------|
| About | Our Story, Leadership, Vision, Heritage |
| Academics | Curriculum, Departments, Faculty |
| Admissions | How to Apply, Fee Structure, FAQs |
| Connect | Contact, News & Events, Campus Life |

---

## Social Media (If Applicable)

- Text links only — no social media icon grids
- Format: "Follow us on [Platform]" as body-sm links
- Positioned in contact column or below identity block
- Maximum 2–3 platforms (only those actively maintained)

---

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Mobile | Stacked single column, simplified link list |
| Tablet | 2-column link grid |
| Desktop | 4-column link grid + identity block |

---

## Accessibility

```html
<footer role="contentinfo" aria-label="Site footer">
  <nav aria-label="Footer navigation">
    <!-- link columns -->
  </nav>
</footer>
```

- All links keyboard accessible
- Sufficient contrast (warm-white on charcoal: 15.2:1)
- Focus indicators visible on dark background (gold outline)

---

## What Not to Include

- Newsletter signup forms (unless school specifically requests)
- Large logo repetition
- Social media icon grids
- Back-to-top buttons (unnecessary with sticky nav)
- Map embeds (place on Contact page instead)
- Animated elements
- Multiple CTA buttons

---

## Implementation Notes

```tsx
// src/components/layout/Footer.tsx
<footer className="bg-charcoal text-warm-white" role="contentinfo">
  <div className="container-editorial py-16 lg:py-24">
    {/* Identity */}
    {/* Navigation columns */}
    {/* Copyright */}
  </div>
</footer>
```

---

*Footer component is Tier 2, Priority P0 — built in Phase 2, Week 2.*
