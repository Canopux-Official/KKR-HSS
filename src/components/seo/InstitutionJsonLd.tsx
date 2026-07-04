import { JsonLdScript } from "@/components/seo/JsonLdScript";
import {
  geoCoordinates,
  getSameAsUrls,
  postalAddress,
} from "@/config/seo";
import { siteConfig } from "@/config/site";

export function InstitutionJsonLd() {
  const organizationId = `${siteConfig.url}/#organization`;
  const schoolId = `${siteConfig.url}/#school`;
  const websiteId = `${siteConfig.url}/#website`;
  const logoId = `${siteConfig.url}/#logo`;
  const sameAs = getSameAsUrls();

  const address = {
    "@type": "PostalAddress" as const,
    ...postalAddress,
  };

  const contactPoint = {
    "@type": "ContactPoint" as const,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    contactType: "admissions and general enquiries",
    areaServed: "IN",
    availableLanguage: ["English", "Odia", "Hindi"],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        address,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        logo: { "@id": logoId },
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "ImageObject",
        "@id": logoId,
        url: `${siteConfig.url}/icon`,
        contentUrl: `${siteConfig.url}/icon`,
        width: 32,
        height: 32,
        caption: siteConfig.name,
      },
      {
        "@type": ["School", "EducationalOrganization", "LocalBusiness"],
        "@id": schoolId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        description: siteConfig.description,
        parentOrganization: { "@id": organizationId },
        foundingDate: siteConfig.foundingYear,
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: geoCoordinates.latitude,
          longitude: geoCoordinates.longitude,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${geoCoordinates.latitude},${geoCoordinates.longitude}`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactPoint,
        logo: { "@id": logoId },
        image: `${siteConfig.url}/opengraph-image`,
        ...(sameAs.length > 0 ? { sameAs } : {}),
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

  return <JsonLdScript data={jsonLd} />;
}
