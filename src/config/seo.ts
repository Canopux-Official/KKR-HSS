import { siteConfig } from "@/config/site";

/** Shared local SEO keywords — use sparingly in page-specific metadata */
export const localSeoKeywords = [
  "KKR Women's Higher Secondary School",
  "women's higher secondary school Bhadrak",
  "girls higher secondary school Bhadrak",
  "higher secondary school Odisha",
  "government girls school Bhadrak",
  "CHSE Odisha",
  "SAMS Odisha admission",
] as const;

export const institutionType = "Government Girls' Higher Secondary School";

export const postalAddress = {
  streetAddress: "Kusunnagar, Barapada",
  addressLocality: "Bhadrak",
  addressRegion: "Odisha",
  postalCode: "756113",
  addressCountry: "IN",
} as const;

export const geoCoordinates = {
  latitude: siteConfig.mapCenter.latitude,
  longitude: siteConfig.mapCenter.longitude,
} as const;

/** Social profile URLs for schema.org sameAs (omit placeholders) */
export function getSameAsUrls(): string[] {
  return Object.values(siteConfig.social).filter(
    (url) => typeof url === "string" && url.startsWith("http")
  );
}

export const verificationEnv = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
  yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
} as const;

export type SitemapChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface RouteSeoConfig {
  path: string;
  priority: number;
  changeFrequency: SitemapChangeFrequency;
  /** Exclude from sitemap.xml */
  excludeFromSitemap?: boolean;
}

/**
 * Canonical static routes with sitemap priority and change frequency.
 * Maintenance and utility routes are excluded.
 */
export const routeSeoConfig: RouteSeoConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/leadership", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/vision", priority: 0.7, changeFrequency: "yearly" },
  { path: "/about/heritage", priority: 0.7, changeFrequency: "yearly" },
  {
    path: "/about/statutory-committees",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  { path: "/academics", priority: 0.9, changeFrequency: "monthly" },
  { path: "/academics/departments", priority: 0.65, changeFrequency: "yearly" },
  { path: "/academics/faculty", priority: 0.65, changeFrequency: "monthly" },
  {
    path: "/academics/examinations",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  { path: "/facilities", priority: 0.8, changeFrequency: "monthly" },
  { path: "/campus-life", priority: 0.8, changeFrequency: "monthly" },
  { path: "/campus-life/gallery", priority: 0.75, changeFrequency: "weekly" },
  { path: "/achievements", priority: 0.75, changeFrequency: "monthly" },
  { path: "/admissions", priority: 0.95, changeFrequency: "weekly" },
  { path: "/admissions/fees", priority: 0.7, changeFrequency: "yearly" },
  { path: "/admissions/faqs", priority: 0.75, changeFrequency: "monthly" },
  { path: "/downloads", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "yearly" },
  {
    path: "/search",
    priority: 0.3,
    changeFrequency: "yearly",
    excludeFromSitemap: true,
  },
];

export const sitemapRoutes = routeSeoConfig.filter(
  (route) => !route.excludeFromSitemap
);
