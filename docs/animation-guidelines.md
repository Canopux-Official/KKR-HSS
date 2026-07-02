# Animation Guidelines

## Philosophy

Motion serves content — it never decorates. Animations are subtle, purposeful, and always respect the user's `prefers-reduced-motion` setting.

**Rule:** If removing the animation does not diminish understanding, it should not exist.

---

## Approved Animations

| Type | Use | Duration | Easing |
|------|-----|----------|--------|
| Fade in | Page/section entry | 300ms | editorial |
| Fade in + rise | Content reveal on scroll | 300ms | reveal |
| Opacity hover | Links, images | 150ms | editorial |
| Underline grow | Navigation links | 150ms | editorial |
| Height transition | Accordion expand | 300ms | reveal |
| Color transition | Button/link hover | 150ms | editorial |

---

## Prohibited Animations

- Animated counters / number tickers
- Parallax scrolling
- Bounce, shake, or wiggle effects
- Spinning loaders (use static or minimal pulse)
- Auto-playing carousels
- Scroll-jacking
- Page transition animations
- Blob morphing
- 3D transforms
- Staggered text character animations
- Confetti, particles, or decorative motion

---

## Duration Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--duration-fast` | 150ms | Hover states, micro-interactions |
| `--duration-normal` | 300ms | Content reveals, transitions |
| `--duration-slow` | 500ms | Large section reveals (rare) |

When `prefers-reduced-motion: reduce` is active, all durations become `0ms`.

---

## Easing Curves

| Token | Value | Character |
|-------|-------|-----------|
| `--ease-editorial` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Smooth, restrained |
| `--ease-reveal` | `cubic-bezier(0.16, 1, 0.3, 1)` | Gentle deceleration |

---

## Framer Motion Presets

Defined in `src/lib/motion.ts`:

```typescript
// Fade in
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: EASE.editorial },
};

// Fade in with subtle upward movement
export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: EASE.reveal },
};

// Stagger children (use sparingly)
export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
```

### Usage Pattern
```tsx
"use client";

import { motion } from "framer-motion";
import { fadeInUp, getMotionProps } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Section({ children }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      {...(reducedMotion ? getMotionProps(true) : fadeInUp)}
    >
      {children}
    </motion.section>
  );
}
```

---

## CSS Transitions

For simple hover/focus states, prefer CSS over Framer Motion:

```css
a {
  transition: color var(--duration-fast) var(--ease-editorial);
}

img {
  transition: opacity var(--duration-fast) var(--ease-editorial);
}

img:hover {
  opacity: 0.92;
}
```

---

## Scroll-Triggered Reveals

When content reveals on scroll:

- Trigger once (do not re-animate on scroll back)
- Use Intersection Observer
- Maximum movement: 12px vertical translate
- Maximum opacity change: 0 to 1
- Threshold: 0.15 (15% visible)
- Respect reduced motion (show immediately)

---

## Hover Interactions

| Element | Interaction |
|---------|-------------|
| Text links | Color shift to maroon-dark (150ms) |
| Images | Subtle opacity reduction to 0.92 (150ms) |
| Buttons | Background/border color shift (150ms) |
| Navigation items | Underline grows from left (150ms) |
| Cards (rare) | No shadow animation — subtle border color shift only |

---

## Reduced Motion Implementation

### CSS (Global)
```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --duration-slow: 0ms;
  }
}
```

### React Hook
```typescript
// src/hooks/use-reduced-motion.ts
export function useReducedMotion(): boolean {
  // Returns true if user prefers reduced motion
}
```

### Framer Motion
```typescript
const reducedMotion = useReducedMotion();
const motionProps = reducedMotion ? getMotionProps(true) : fadeInUp;
```

---

## Performance Rules

1. Animate only `opacity` and `transform` (GPU-accelerated)
2. Never animate `width`, `height`, `top`, `left` (causes layout reflow)
3. Use `will-change` sparingly and remove after animation
4. Limit simultaneous animations to 3–5 elements
5. No animations on initial page load above the fold (LCP impact)

---

*Motion presets live in `src/lib/motion.ts`. Duration and easing tokens in `src/styles/tokens.css`.*
