import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { examinations } from "@/content/academics";
import { examinationsHeroImage } from "@/content/site-photos";

export const metadata = createPageMetadata({
  title: "Examinations",
  description: "Examination information at KKR Women's Higher Secondary School, Bhadrak, Odisha.",
  path: "/academics/examinations",
});

export default function ExaminationsPage() {
  return (
    <PageLayout>
      <PageHero
        overline="Academics"
        title="Examinations"
        lead="Assessment and board examination information for higher secondary students."
        image={examinationsHeroImage}
        imageAlt={examinationsHeroImage.alt}
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
          <div className="mt-12">
            <Link href="/academics#calendar" showArrow>View academic calendar</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
