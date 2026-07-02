import { siteConfig } from "@/config/site";

export function InstitutionJsonLd() {
  const organizationId = `${siteConfig.url}/#organization`;
  const schoolId = `${siteConfig.url}/#school`;
  const websiteId = `${siteConfig.url}/#website`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kusunnagar, Barapada",
          addressLocality: "Bhadrak",
          addressRegion: "Odisha",
          postalCode: "756113",
          addressCountry: "IN",
        },
        telephone: siteConfig.phone,
        email: siteConfig.email,
      },
      {
        "@type": "EducationalOrganization",
        "@id": schoolId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        parentOrganization: { "@id": organizationId },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kusunnagar, Barapada",
          addressLocality: "Bhadrak",
          addressRegion: "Odisha",
          postalCode: "756113",
          addressCountry: "IN",
        },
        telephone: siteConfig.phone,
        email: siteConfig.email,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: { "@id": organizationId },
        inLanguage: "en-IN",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
