/**
 * Canonical static routes for sitemap generation and link audits.
 * Maintenance and error routes are intentionally excluded.
 */
export const staticRoutes = [
  "/",
  "/about",
  "/about/leadership",
  "/about/vision",
  "/about/heritage",
  "/academics",
  "/academics/departments",
  "/academics/faculty",
  "/academics/examinations",
  "/facilities",
  "/campus-life",
  "/campus-life/gallery",
  "/achievements",
  "/admissions",
  "/admissions/fees",
  "/admissions/faqs",
  "/downloads",
  "/contact",
  "/search",
] as const;

export type StaticRoute = (typeof staticRoutes)[number];
