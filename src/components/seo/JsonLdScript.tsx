interface JsonLdScriptProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/** Renders Schema.org JSON-LD without visual impact */
export function JsonLdScript({ data }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
