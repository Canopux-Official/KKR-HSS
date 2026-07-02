"use client";

import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
import { EmptyState } from "@/components/ui/EmptyState";
import { searchSite } from "@/lib/cms/search";

interface SearchContentProps {
  initialQuery: string;
}

export function SearchContent({ initialQuery }: SearchContentProps) {
  const results = initialQuery ? searchSite(initialQuery) : [];

  return (
    <div className="max-w-content">
      <SearchBar defaultQuery={initialQuery} className="mb-12" />

      {!initialQuery ? (
        <EmptyState
          title="Search the website"
          description="Enter a keyword above to find pages, news articles, events, and documents."
        />
      ) : results.length === 0 ? (
        <EmptyState
          title="No results found"
          description={`We could not find anything matching "${initialQuery}". Try different keywords or browse our main sections.`}
          actionLabel="View admissions"
          actionHref="/admissions"
        />
      ) : (
        <>
          <p className="font-body text-body-sm text-stone mb-8">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{initialQuery}&rdquo;
          </p>
          <SearchResultsList results={results} />
        </>
      )}
    </div>
  );
}
