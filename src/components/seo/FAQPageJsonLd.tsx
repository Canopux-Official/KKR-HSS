import { JsonLdScript } from "@/components/seo/JsonLdScript";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FAQPageJsonLdProps {
  items: FaqItem[];
}

export function FAQPageJsonLd({ items }: FAQPageJsonLdProps) {
  if (items.length === 0) return null;

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
