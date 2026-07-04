import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { postalAddress } from "@/config/seo";
import { siteConfig } from "@/config/site";

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  type?: "NewsArticle" | "Event";
  startDate?: string;
  endDate?: string;
  location?: string;
}

/** Future-ready JSON-LD for news articles and school events */
export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  type = "NewsArticle",
  startDate,
  endDate,
  location,
}: ArticleJsonLdProps) {
  const publisher = {
    "@type": "Organization" as const,
    name: siteConfig.name,
    url: siteConfig.url,
  };

  const authorEntity = author
    ? { "@type": "Person" as const, name: author }
    : publisher;

  const jsonLd =
    type === "Event"
      ? {
          "@context": "https://schema.org",
          "@type": "Event",
          name: title,
          description,
          url,
          startDate,
          endDate: endDate ?? startDate,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: location ?? siteConfig.name,
            address: {
              "@type": "PostalAddress",
              ...postalAddress,
            },
          },
          organizer: publisher,
          inLanguage: "en-IN",
        }
      : {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: title,
          description,
          url,
          datePublished,
          dateModified: dateModified ?? datePublished,
          author: authorEntity,
          publisher: {
            ...publisher,
            logo: {
              "@type": "ImageObject",
              url: `${siteConfig.url}/icon`,
            },
          },
          image: `${siteConfig.url}/opengraph-image`,
          inLanguage: "en-IN",
        };

  return <JsonLdScript data={jsonLd} />;
}
