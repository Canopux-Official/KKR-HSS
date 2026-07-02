import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

import { staticRoutes } from "@/lib/routes";



export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = siteConfig.url;

  const now = new Date();



  return staticRoutes.map((path) => ({

    url: `${baseUrl}${path === "/" ? "" : path}`,

    lastModified: now,

    changeFrequency: path === "/" ? "weekly" : "monthly",

    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,

  }));

}

