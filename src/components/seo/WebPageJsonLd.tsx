import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { siteConfig } from "@/config/site";

interface WebPageJsonLdProps {
  name: string;
  description: string;
  path: string;
}

/** Page-level WebPage schema for enhanced indexing */
export function WebPageJsonLd({ name, description, path }: WebPageJsonLdProps) {
  const url = `${siteConfig.url}${path}`;

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#school` },
        inLanguage: "en-IN",
      }}
    />
  );
}
