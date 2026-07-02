import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { PageMeta } from "@/types/content";

const defaultOgImage = "/opengraph-image";

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
  image,
}: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? defaultOgImage;
  const fullTitle = path === "/" ? siteConfig.name : `${title} | ${siteConfig.name}`;

  return {
    title: path === "/" ? { absolute: siteConfig.name } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.shortName}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  keywords: [
    "KKR Women's Higher Secondary School",
    "women's school Bhadrak",
    "higher secondary school Odisha",
    "girls school Bhadrak",
    "Odisha education",
    "CHSE Odisha",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
