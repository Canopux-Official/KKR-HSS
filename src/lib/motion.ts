/**
 * Animation configuration aligned with design system guidelines.
 * All motion is subtle, purposeful, and respects reduced-motion preferences.
 */

export const DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
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
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 12 },
  transition: { duration: DURATION.normal, ease: EASE.reveal },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * Returns empty transition when reduced motion is preferred.
 */
export function getMotionProps(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      initial: false,
      animate: false,
      transition: { duration: 0 },
    };
  }
  return {};
}
