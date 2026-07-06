import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { examinations } from "@/content/academics";

export const metadata = createPageMetadata({
  title: "Examinations",
  description: "Examination information at KKR Mahila Higher Secondary School, Bhadrak, Odisha.",
  path: "/academics/examinations",
});

export default function ExaminationsPage() {
  return (
    <PageLayout>
      <PageHero
        overline="Academics"
        title="Examinations"
        lead="Assessment and CHSE (+2) examination information for higher secondary students."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Examinations" },
        ]}
      />
      <Section>
        <Container>
          <div className="max-w-prose-wide space-y-6">
            {examinations.paragraphs?.map((p, i) => (
              <Text key={i} variant="body" muted>{p}</Text>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/academics#calendar" showArrow>View academic calendar</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
