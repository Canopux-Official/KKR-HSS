/**
 * Uniform hero banner dimensions for every page.
 * All hero PNGs are pre-cropped to this size via scripts/standardize-hero-images.mjs
 */
export const HERO_WIDTH = 1024;
export const HERO_HEIGHT = 384;

/** 1024÷384 = 8∶3 — shared aspect ratio for PageHero and HeroSection */
export const HERO_ASPECT_CLASS = "aspect-[8/3]";

/** Fallback when no image is supplied (e.g. search page) */
export const HERO_PLACEHOLDER_MIN_CLASS = "min-h-[240px]";

/** Homepage full-viewport hero — fills entire screen behind overlaid nav */
export const HOMEPAGE_HERO_VIEWPORT_CLASS = "min-h-dvh h-dvh";
