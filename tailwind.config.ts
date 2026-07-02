import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "var(--color-maroon)",
          light: "var(--color-maroon-light)",
          dark: "var(--color-maroon-dark)",
        },
        gold: {
          DEFAULT: "var(--color-gold)",
          muted: "var(--color-gold-muted)",
          light: "var(--color-gold-light)",
        },
        charcoal: {
          DEFAULT: "var(--color-charcoal)",
          light: "var(--color-charcoal-light)",
        },
        stone: {
          DEFAULT: "var(--color-stone)",
          light: "var(--color-stone-light)",
          dark: "var(--color-stone-dark)",
        },
        beige: {
          DEFAULT: "var(--color-beige)",
          warm: "var(--color-beige-warm)",
        },
        warm: {
          white: "var(--color-warm-white)",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          subtle: "var(--color-ink-subtle)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          elevated: "var(--color-surface-elevated)",
          muted: "var(--color-surface-muted)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
        focus: "var(--color-focus)",
        error: "var(--color-error)",
        success: "var(--color-success)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": [
          "var(--text-display-2xl)",
          {
            lineHeight: "var(--leading-display-2xl)",
            letterSpacing: "var(--tracking-display-2xl)",
          },
        ],
        "display-xl": [
          "var(--text-display-xl)",
          {
            lineHeight: "var(--leading-display-xl)",
            letterSpacing: "var(--tracking-display-xl)",
          },
        ],
        "display-lg": [
          "var(--text-display-lg)",
          {
            lineHeight: "var(--leading-display-lg)",
            letterSpacing: "var(--tracking-display-lg)",
          },
        ],
        "display-md": [
          "var(--text-display-md)",
          {
            lineHeight: "var(--leading-display-md)",
            letterSpacing: "var(--tracking-display-md)",
          },
        ],
        "display-sm": [
          "var(--text-display-sm)",
          {
            lineHeight: "var(--leading-display-sm)",
            letterSpacing: "var(--tracking-display-sm)",
          },
        ],
        "heading-xl": [
          "var(--text-heading-xl)",
          {
            lineHeight: "var(--leading-heading-xl)",
            letterSpacing: "var(--tracking-heading-xl)",
          },
        ],
        "heading-lg": [
          "var(--text-heading-lg)",
          {
            lineHeight: "var(--leading-heading-lg)",
            letterSpacing: "var(--tracking-heading-lg)",
          },
        ],
        "heading-md": [
          "var(--text-heading-md)",
          {
            lineHeight: "var(--leading-heading-md)",
            letterSpacing: "var(--tracking-heading-md)",
          },
        ],
        "heading-sm": [
          "var(--text-heading-sm)",
          {
            lineHeight: "var(--leading-heading-sm)",
            letterSpacing: "var(--tracking-heading-sm)",
          },
        ],
        "body-xl": [
          "var(--text-body-xl)",
          {
            lineHeight: "var(--leading-body-xl)",
            letterSpacing: "var(--tracking-body)",
          },
        ],
        "body-lg": [
          "var(--text-body-lg)",
          {
            lineHeight: "var(--leading-body-lg)",
            letterSpacing: "var(--tracking-body)",
          },
        ],
        body: [
          "var(--text-body)",
          {
            lineHeight: "var(--leading-body)",
            letterSpacing: "var(--tracking-body)",
          },
        ],
        "body-sm": [
          "var(--text-body-sm)",
          {
            lineHeight: "var(--leading-body-sm)",
            letterSpacing: "var(--tracking-body)",
          },
        ],
        caption: [
          "var(--text-caption)",
          {
            lineHeight: "var(--leading-caption)",
            letterSpacing: "var(--tracking-caption)",
          },
        ],
        overline: [
          "var(--text-overline)",
          {
            lineHeight: "var(--leading-overline)",
            letterSpacing: "var(--tracking-overline)",
          },
        ],
      },
      spacing: {
        "0": "var(--space-0)",
        "1": "var(--space-1)",
        "2": "var(--space-2)",
        "3": "var(--space-3)",
        "4": "var(--space-4)",
        "5": "var(--space-5)",
        "6": "var(--space-6)",
        "8": "var(--space-8)",
        "10": "var(--space-10)",
        "12": "var(--space-12)",
        "16": "var(--space-16)",
        "20": "var(--space-20)",
        "24": "var(--space-24)",
        "32": "var(--space-32)",
        "40": "var(--space-40)",
        "48": "var(--space-48)",
        "64": "var(--space-64)",
      },
      maxWidth: {
        prose: "var(--max-width-prose)",
        "prose-wide": "var(--max-width-prose-wide)",
        content: "var(--max-width-content)",
        container: "var(--max-width-container)",
        "container-wide": "var(--max-width-container-wide)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1680px",
      },
      gridTemplateColumns: {
        editorial: "repeat(12, minmax(0, 1fr))",
        "editorial-8": "repeat(8, minmax(0, 1fr))",
      },
      gap: {
        gutter: "var(--grid-gutter)",
        "gutter-sm": "var(--grid-gutter-sm)",
        "gutter-lg": "var(--grid-gutter-lg)",
      },
      padding: {
        gutter: "var(--grid-gutter)",
        "gutter-sm": "var(--grid-gutter-sm)",
        "gutter-lg": "var(--grid-gutter-lg)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
      },
      transitionTimingFunction: {
        editorial: "var(--ease-editorial)",
        reveal: "var(--ease-reveal)",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
      },
      boxShadow: {
        none: "none",
        subtle: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        editorial: "0 2px 8px 0 rgb(0 0 0 / 0.06)",
      },
      zIndex: {
        base: "0",
        elevated: "10",
        sticky: "100",
        overlay: "200",
        modal: "300",
        toast: "400",
      },
    },
  },
  plugins: [],
};

export default config;
