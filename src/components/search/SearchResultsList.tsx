import NextLink from "next/link";
import { Text } from "@/components/ui/Text";
import type { SearchResult } from "@/types/cms";

interface SearchResultsListProps {
  results: SearchResult[];
}

const TYPE_LABELS: Record<SearchResult["type"], string> = {
  page: "Page",
  download: "Download",
};

export function SearchResultsList({ results }: SearchResultsListProps) {
  if (results.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-0 divide-y divide-border border-t border-border">
      {results.map((result) => (
        <li key={result.id}>
          <NextLink
            href={result.href}
            className="block py-8 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            <div className="flex items-center gap-3 mb-2">
              <Text as="span" variant="caption" className="text-gold">
                {TYPE_LABELS[result.type]}
              </Text>
              {result.date && (
                <>
                  <span className="text-stone" aria-hidden="true">/</span>
                  <Text as="time" variant="caption">
                    {result.date}
                  </Text>
                </>
              )}
            </div>
            <Text
              as="span"
              variant="body-lg"
              className="font-medium text-ink group-hover:text-maroon transition-colors duration-fast"
            >
              {result.title}
            </Text>
            <Text variant="body-sm" muted className="mt-2 max-w-prose-wide">
              {result.excerpt}
            </Text>
          </NextLink>
        </li>
      ))}
    </ul>
  );
}

export function formatNewsDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
