# Component Library Plan

## Philosophy

Every component is handcrafted for institutional quality. No generic UI kit. Components are built only when needed — not speculatively.

**Rule:** A component must be used in at least two places, or be a fundamental primitive, to enter the library.

---

## Component Tiers

### Tier 1: Primitives (`src/components/ui/`)
Atomic, style-only components with no business logic.

| Component | Priority | Status | Description |
|-----------|----------|--------|-------------|
| `Button` | P0 | Planned | Primary, secondary, text variants |
| `Link` | P0 | Planned | Internal, external, with arrow |
| `Heading` | P0 | Planned | Typed heading (h1–h6) with scale prop |
| `Text` | P0 | Planned | Body, lead, caption, overline variants |
| `Divider` | P1 | Planned | Horizontal rule, gold accent variant |
| `Container` | P0 | Planned | Editorial container wrapper |
| `Grid` | P0 | Planned | 12-column editorial grid |
| `VisuallyHidden` | P0 | Planned | Screen reader only content |
| `SkipLink` | P0 | Planned | Skip to main content |

### Tier 2: Layout (`src/components/layout/`)
Structural site components.

| Component | Priority | Status | Description |
|-----------|----------|--------|-------------|
| `Header` | P0 | Planned | Site header with navigation |
| `Navigation` | P0 | Planned | Primary nav (desktop + mobile) |
| `MobileMenu` | P0 | Planned | Accessible drawer navigation |
| `Footer` | P0 | Planned | Site footer |
| `PageWrapper` | P1 | Planned | Standard page layout shell |
| `Section` | P1 | Planned | Section with consistent padding |

### Tier 3: Editorial (`src/components/editorial/`)
Content presentation patterns.

| Component | Priority | Status | Description |
|-----------|----------|--------|-------------|
| `SectionHeader` | P0 | Planned | Overline + heading + optional lead |
| `PullQuote` | P1 | Planned | Editorial quotation block |
| `Callout` | P1 | Planned | Highlighted information block |
| `ContentBlock` | P1 | Planned | Standard text + optional media |
| `Timeline` | P2 | Planned | Institutional history timeline |
| `Accordion` | P1 | Planned | Expandable content sections |
| `Quote` | P2 | Planned | Blockquote with attribution |
| `StatBlock` | P2 | Planned | Single authentic statistic (no counters) |

### Tier 4: Media (`src/components/media/`)
Image and gallery components.

| Component | Priority | Status | Description |
|-----------|----------|--------|-------------|
| `Image` | P0 | Planned | Wrapped next/image with editorial treatment |
| `Figure` | P1 | Planned | Image + caption |
| `Gallery` | P2 | Planned | Photo grid with lightbox |
| `ImageText` | P1 | Planned | Side-by-side editorial layout |
| `HeroImage` | P1 | Planned | Full-width hero photograph |
| `AspectRatio` | P0 | Planned | Consistent aspect ratio container |

### Tier 5: Forms (`src/components/forms/`)
Form elements for contact and inquiry.

| Component | Priority | Status | Description |
|-----------|----------|--------|-------------|
| `Input` | P1 | Planned | Text input with label |
| `Textarea` | P1 | Planned | Multi-line input |
| `Select` | P2 | Planned | Dropdown select |
| `Label` | P1 | Planned | Form label |
| `FieldError` | P1 | Planned | Validation error message |
| `FormGroup` | P1 | Planned | Label + input + error wrapper |
| `ContactForm` | P2 | Planned | Complete contact form pattern |

### Tier 6: Data Display
Tables and structured content.

| Component | Priority | Status | Description |
|-----------|----------|--------|-------------|
| `Table` | P2 | Planned | Accessible data table |
| `DefinitionList` | P2 | Planned | Key-value pairs |
| `Card` | P2 | Planned | Minimal content card (use sparingly) |
| `Breadcrumb` | P1 | Planned | Navigation breadcrumbs |

---

## Component API Pattern

All components follow this interface pattern:

```typescript
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  // Component-specific props
}

export function Component({ children, className, ...props }: ComponentProps) {
  return (
    <element className={cn("base-styles", className)} {...props}>
      {children}
    </element>
  );
}
```

### Principles
- Accept `className` for composition
- Use `cn()` for class merging
- Forward refs where appropriate
- Export from barrel `index.ts` files
- No internal state unless necessary (accordions, menus)
- Server Components by default; `"use client"` only when needed

---

## Component File Structure

```
src/components/ui/Button/
├── Button.tsx           # Component implementation
├── Button.types.ts      # TypeScript interfaces (if complex)
└── index.ts             # Barrel export
```

For simple components, a single file suffices:
```
src/components/ui/Divider.tsx
```

---

## Styling Approach

Components use Tailwind utility classes referencing design tokens:

```tsx
export function Button({ variant = "primary", children, className }: ButtonProps) {
  const variants = {
    primary: "bg-maroon text-warm-white hover:bg-maroon-dark",
    secondary: "border border-maroon text-maroon hover:bg-maroon hover:text-warm-white",
    text: "text-maroon hover:text-maroon-dark underline-offset-4 hover:underline",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center px-6 py-3 font-body text-body font-medium",
        "transition-colors duration-fast",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
```

---

## Build Order (Phase 2)

1. **Week 1:** Tier 1 primitives (Button, Link, Heading, Text, Container, Grid)
2. **Week 2:** Tier 2 layout (Header, Navigation, MobileMenu, Footer)
3. **Week 3:** Tier 3 editorial (SectionHeader, ContentBlock, Accordion)
4. **Week 4:** Tier 4 media (Image, Figure, ImageText, HeroImage)
5. **Week 5:** Tier 5 forms + Tier 6 data display

---

## Quality Checklist (Per Component)

- [ ] Uses design tokens exclusively
- [ ] Responsive across all breakpoints
- [ ] Keyboard accessible
- [ ] Screen reader tested
- [ ] Reduced motion respected
- [ ] TypeScript props documented
- [ ] No hardcoded colors or spacing
- [ ] Follows naming conventions
- [ ] Matches design principles

---

*Components are built in Phase 2. This document is the blueprint.*
