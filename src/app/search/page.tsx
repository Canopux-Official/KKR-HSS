import dynamic from "next/dynamic";
import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";

const SearchContent = dynamic(
  () =>
    import("@/components/search/SearchContent").then((mod) => mod.SearchContent),
  {
    loading: () => (
      <div className="max-w-content py-8" role="status" aria-live="polite">
        <p className="font-body text-body-sm text-stone">Loading search...</p>
      </div>
    ),
  }
);

export const metadata = createPageMetadata({
  title: "Search",
  description: "Search the KKR Women's Higher Secondary School website for pages, admissions information, and downloads.",
  path: "/search",
  noIndex: true,
});

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  return (
    <PageLayout>
      <PageHero
        overline="Search"
        title="Find what you need"
        lead="Search news, events, pages, and documents across the school website."
        breadcrumbs={[{ label: "Search" }]}
      />
      <Section>
        <Container>
          <SearchContent initialQuery={query} />
        </Container>
      </Section>
    </PageLayout>
  );
}
