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
    "@type": "Organization",
    name: "KKR Women's Higher Secondary School",
  };

  const authorEntity = author
    ? { "@type": "Person", name: author }
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
            name: location ?? "KKR Women's Higher Secondary School",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bhadrak",
              addressRegion: "Odisha",
              addressCountry: "IN",
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
          publisher,
          inLanguage: "en-IN",
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
