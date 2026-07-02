# Responsive Strategy

## Philosophy

Desktop-first thinking — design for the full editorial experience, then adapt gracefully. Every breakpoint maintains the institutional quality; mobile is not an afterthought.

---

## Breakpoint Definitions

| Name | Tailwind | Min Width | Target Devices |
|------|----------|-----------|----------------|
| Mobile | default | 0px | Phones (320–639px) |
| Tablet | `sm:` / `md:` | 640px / 768px | Tablets, small laptops |
| Laptop | `lg:` | 1024px | Laptops, small desktops |
| Desktop | `xl:` | 1280px | Standard desktops |
| Wide | `2xl:` / `3xl:` | 1440px / 1680px | Large monitors |

---

## Design Approach per Breakpoint

### Mobile (0–639px)
- Single column layout (4-column grid)
- Stacked editorial blocks
- Full-width images with proper aspect ratios
- Hamburger navigation (accessible drawer)
- Typography scales down via `clamp()` — never below minimums
- Touch targets minimum 44×44px
- Section padding: `py-20` (80px)

### Tablet (640–1023px)
- 8-column grid
- Some side-by-side layouts emerge
- Navigation may remain drawer or begin inline
- Section padding: `py-24` (96px)
- Images may sit beside text in 2-column splits

### Laptop (1024–1279px)
- Full 12-column grid
- Editorial split layouts active
- Inline horizontal navigation
- Section padding: `py-32` (128px)
- Maximum content sophistication

### Desktop (1280–1679px)
- Wide container (1440px max)
- Increased gutters (32px)
- Full editorial asymmetric layouts
- Photography at highest quality

### Wide (1680px+)
- Container capped at 1440px (content does not stretch infinitely)
- Extra whitespace on sides is intentional
- No layout changes from desktop — only more margin

---

## Typography Scaling

Display and heading sizes use fluid `clamp()` — no breakpoint-specific font classes needed for most cases.

Body text remains fixed at 16px across all breakpoints for reading consistency.

| Element | Mobile | Desktop |
|---------|--------|---------|
| display-xl | 2.5rem (40px) | 4.5rem (72px) |
| heading-xl | 1.75rem (28px) | 2.25rem (36px) |
| body | 1rem (16px) | 1rem (16px) |
| caption | 0.8125rem (13px) | 0.8125rem (13px) |

---

## Image Responsiveness

```html
<Image
  src="..."
  alt="..."
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  fill
  className="object-cover"
/>
```

### Aspect Ratios by Context

| Context | Ratio | Tailwind |
|---------|-------|----------|
| Hero | 16:9 or 3:2 | `aspect-video` or `aspect-[3/2]` |
| Editorial inline | 4:3 or 3:2 | `aspect-[4/3]` |
| Portrait | 3:4 | `aspect-[3/4]` |
| Square (rare) | 1:1 | `aspect-square` |

---

## Navigation Responsiveness

| Breakpoint | Pattern |
|------------|---------|
| Mobile / Tablet | Hamburger → full-screen or slide-in drawer |
| Laptop+ | Horizontal inline navigation |

See [navigation-architecture.md](./navigation-architecture.md) for full spec.

---

## Content Reflow Rules

1. **Side-by-side layouts** stack vertically on mobile (text above image)
2. **Multi-column text** becomes single column
3. **Horizontal rules** remain horizontal
4. **Tables** scroll horizontally or reflow to stacked cards
5. **Timelines** switch from horizontal to vertical
6. **Galleries** reduce columns: 3 → 2 → 1

---

## Testing Matrix

Test every component and page at these widths:

| Width | Device Simulation |
|-------|-------------------|
| 375px | iPhone SE / small phone |
| 390px | iPhone 14 |
| 768px | iPad portrait |
| 1024px | iPad landscape / small laptop |
| 1280px | Standard laptop |
| 1440px | Desktop |
| 1920px | Large desktop |

---

## Performance Considerations

- Serve appropriately sized images per breakpoint via `next/image`
- Lazy load below-fold images
- Font subsetting via `next/font`
- No layout shift from responsive changes (reserve space with aspect ratios)

---

## Tailwind Responsive Pattern

```html
<!-- Mobile-first: base styles for mobile, override at larger breakpoints -->
<section class="py-20 md:py-24 lg:py-32">
  <div class="grid-editorial">
    <div class="col-span-4 sm:col-span-8 sm:col-start-1 lg:col-span-6 lg:col-start-4">
      <h2 class="text-heading-lg lg:text-heading-xl">Title</h2>
      <p class="text-body">Content</p>
    </div>
  </div>
</section>
```

---

*Breakpoint configuration is defined in `src/types/design-tokens.ts` and `tailwind.config.ts`.*
