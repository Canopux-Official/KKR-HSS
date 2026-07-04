/**
 * Animation configuration aligned with design system guidelines.
 * All motion is subtle, purposeful, and respects reduced-motion preferences.
 */

export const DURATION = {
  fast: 0.15,
  normal: 0.4,
  slow: 0.65,
} as const;

export const EASE = {
  editorial: [0.25, 0.1, 0.25, 1] as const,
  reveal: [0.16, 1, 0.3, 1] as const,
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: DURATION.normal, ease: EASE.editorial },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: DURATION.normal, ease: EASE.reveal },
};

/** Framer Motion variant form for stagger children */
export const fadeInUpVariant = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE.reveal },
  },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: DURATION.slow, ease: EASE.reveal },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.normal, ease: EASE.reveal },
};

export const heroImageKenBurns = {
  initial: { scale: 1.08 },
  animate: { scale: 1 },
  transition: { duration: 1.4, ease: EASE.reveal },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const heroTextStagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const heroTextItem = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE.reveal },
  },
};

/**
 * Returns empty transition when reduced motion is preferred.
 */
export function getMotionProps(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      initial: false as const,
      animate: false as const,
      transition: { duration: 0 },
    };
  }
  return {};
}
