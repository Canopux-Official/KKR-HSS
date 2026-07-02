import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes with conflict resolution.
 * Standard utility for all components.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Check if user prefers reduced motion.
 * Use before applying Framer Motion or CSS animations.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Format institutional names consistently.
 */
export function formatInstitutionName(): string {
  return "KKR Women's Higher Secondary School";
}

/**
 * Format location consistently.
 */
export function formatLocation(): string {
  return "Bhadrak, Odisha, India";
}
