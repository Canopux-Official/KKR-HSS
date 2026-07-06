/**
 * KKR Mahila Higher Secondary School
 * Design Token Type Definitions
 *
 * These types mirror CSS custom properties defined in src/styles/tokens.css.
 * Use for type-safe component APIs and documentation generation.
 */

export type ColorToken =
  | "maroon"
  | "maroon-light"
  | "maroon-dark"
  | "gold"
  | "gold-muted"
  | "gold-light"
  | "charcoal"
  | "charcoal-light"
  | "stone"
  | "stone-light"
  | "stone-dark"
  | "beige"
  | "beige-warm"
  | "warm-white"
  | "ink"
  | "ink-muted"
  | "ink-subtle"
  | "surface"
  | "surface-elevated"
  | "surface-muted"
  | "border"
  | "border-strong"
  | "focus"
  | "error"
  | "success";

export type TypographyScale =
  | "display-2xl"
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "heading-xl"
  | "heading-lg"
  | "heading-md"
  | "heading-sm"
  | "body-xl"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption"
  | "overline";

export type SpacingToken =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 64;

export type Breakpoint = "mobile" | "tablet" | "laptop" | "desktop" | "wide";

export type GridColumns = 4 | 8 | 12;

export type AnimationDuration = "fast" | "normal" | "slow";

export type EasingCurve = "editorial" | "reveal";

export interface BreakpointConfig {
  name: Breakpoint;
  minWidth: number;
  maxWidth?: number;
  columns: GridColumns;
  gutter: string;
  containerMax: string;
  proseMax: string;
}

export const BREAKPOINTS: Record<Breakpoint, BreakpointConfig> = {
  mobile: {
    name: "mobile",
    minWidth: 0,
    maxWidth: 639,
    columns: 4,
    gutter: "var(--grid-gutter-sm)",
    containerMax: "100%",
    proseMax: "var(--max-width-prose)",
  },
  tablet: {
    name: "tablet",
    minWidth: 640,
    maxWidth: 1023,
    columns: 8,
    gutter: "var(--grid-gutter)",
    containerMax: "var(--max-width-container)",
    proseMax: "var(--max-width-prose)",
  },
  laptop: {
    name: "laptop",
    minWidth: 1024,
    maxWidth: 1279,
    columns: 12,
    gutter: "var(--grid-gutter)",
    containerMax: "var(--max-width-container)",
    proseMax: "var(--max-width-prose-wide)",
  },
  desktop: {
    name: "desktop",
    minWidth: 1280,
    maxWidth: 1679,
    columns: 12,
    gutter: "var(--grid-gutter-lg)",
    containerMax: "var(--max-width-container-wide)",
    proseMax: "var(--max-width-prose-wide)",
  },
  wide: {
    name: "wide",
    minWidth: 1680,
    columns: 12,
    gutter: "var(--grid-gutter-lg)",
    containerMax: "var(--max-width-container-wide)",
    proseMax: "var(--max-width-prose-wide)",
  },
};

export const SPACING_SCALE: Record<SpacingToken, string> = {
  0: "var(--space-0)",
  1: "var(--space-1)",
  2: "var(--space-2)",
  3: "var(--space-3)",
  4: "var(--space-4)",
  5: "var(--space-5)",
  6: "var(--space-6)",
  8: "var(--space-8)",
  10: "var(--space-10)",
  12: "var(--space-12)",
  16: "var(--space-16)",
  20: "var(--space-20)",
  24: "var(--space-24)",
  32: "var(--space-32)",
  40: "var(--space-40)",
  48: "var(--space-48)",
  64: "var(--space-64)",
};
