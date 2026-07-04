import { sitemapRoutes } from "@/config/seo";

/**
 * Canonical static routes for sitemap generation and link audits.
 * Derived from SEO route config; maintenance and utility routes are excluded.
 */
export const staticRoutes = sitemapRoutes.map((route) => route.path) as readonly string[];

export type StaticRoute = (typeof staticRoutes)[number];
