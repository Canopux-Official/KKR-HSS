# Accessibility Standards

## Philosophy

An educational institution serves its entire community. Accessibility is not a feature — it is a foundational requirement. WCAG 2.1 Level AA is the minimum standard.

---

## Compliance Target

**WCAG 2.1 Level AA** across all pages and components.

---

## Color & Contrast

| Requirement | Standard | Our Implementation |
|-------------|----------|-------------------|
| Normal text | 4.5:1 minimum | Ink on warm-white: 16.8:1 |
| Large text (18px+ bold, 24px+) | 3:1 minimum | All headings pass AAA |
| UI components | 3:1 minimum | Borders, focus rings tested |
| Focus indicators | 3:1 against adjacent colors | 2px maroon outline |

- Never convey information by color alone
- Error states use text + color (not color only)
- Test with color blindness simulators

---

## Keyboard Navigation

| Requirement | Implementation |
|-------------|----------------|
| All interactive elements focusable | Native elements or `tabIndex={0}` |
| Logical tab order | DOM order matches visual order |
| Visible focus indicators | 2px solid maroon, 2px offset |
| Skip navigation | Skip-to-main link as first focusable element |
| No keyboard traps | Except mobile menu (with escape to close) |
| Escape closes overlays | Mobile menu, modals, search |

### Focus Styles
```css
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}
```

---

## Screen Readers

| Requirement | Implementation |
|-------------|----------------|
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>` |
| Heading hierarchy | One `<h1>` per page, no skipped levels |
| ARIA landmarks | `role="navigation"`, `role="contentinfo"`, `aria-label` |
| ARIA labels | On icon-only buttons, complex widgets |
| Alt text | Descriptive on all content images |
| Form labels | Every input has associated `<label>` |
| Error messages | `aria-describedby` linking input to error |
| Live regions | `aria-live="polite"` for dynamic content |
| Current page | `aria-current="page"` on active nav item |

---

## Motion & Animation

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- All animations respect `prefers-reduced-motion`
- No auto-playing video or carousels
- Pause/stop controls for any moving content
- Parallax disabled for reduced motion users

---

## Typography & Readability

| Requirement | Implementation |
|-------------|----------------|
| Minimum body size | 16px (1rem) |
| Line height | 1.5+ for body text (we use 1.65) |
| Line length | Max 75 characters (prose width: 42rem) |
| Text resize | Layout functional at 200% zoom |
| No justified text | Left-aligned only |
| Sufficient paragraph spacing | 24px between paragraphs |

---

## Forms

| Requirement | Implementation |
|-------------|----------------|
| Labels | Visible, associated with `htmlFor` / `id` |
| Required fields | Marked with text "(required)", not color alone |
| Error identification | Text description + `aria-invalid="true"` |
| Error suggestion | Actionable error messages |
| Autocomplete | `autocomplete` attributes on standard fields |
| Field grouping | `<fieldset>` + `<legend>` for related fields |

---

## Images & Media

| Requirement | Implementation |
|-------------|----------------|
| Alt text | Descriptive for content images |
| Decorative images | `alt=""` + `role="presentation"` |
| Complex images | Long description nearby or `aria-describedby` |
| Video | Captions required |
| Audio | Transcript provided |

---

## Responsive & Touch

| Requirement | Implementation |
|-------------|----------------|
| Touch targets | Minimum 44×44px |
| Orientation | Functional in portrait and landscape |
| Reflow | No horizontal scroll at 320px width |
| Spacing | Sufficient between interactive elements |

---

## Testing Protocol

### Automated
- axe-core integration in CI (Phase 3)
- Lighthouse accessibility audit (score target: 95+)
- ESLint jsx-a11y plugin

### Manual
- Keyboard-only navigation test on every page
- Screen reader test (NVDA on Windows, VoiceOver on macOS)
- 200% zoom test
- Color contrast verification
- Mobile touch target verification

### Per-Component Checklist
- [ ] Keyboard accessible
- [ ] Focus visible
- [ ] Screen reader announces correctly
- [ ] Color contrast passes
- [ ] Works at 200% zoom
- [ ] Reduced motion respected
- [ ] Touch targets adequate (mobile)

---

## Semantic HTML Structure

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header>
    <nav aria-label="Primary navigation">
      <!-- navigation -->
    </nav>
  </header>

  <main id="main-content">
    <article>
      <h1>Page Title</h1>
      <section aria-labelledby="section-heading">
        <h2 id="section-heading">Section Title</h2>
        <!-- content -->
      </section>
    </article>
  </main>

  <footer role="contentinfo" aria-label="Site footer">
    <!-- footer -->
  </footer>
</body>
```

---

## Document Language

```html
<html lang="en">
```

If Odia content is added in future phases:
```html
<span lang="or">ଓଡ଼ିଆ ପାଠ୍ୟ</span>
```

---

*Accessibility is verified at every phase gate before deployment.*
