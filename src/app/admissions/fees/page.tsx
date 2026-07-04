import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { feeInformation } from "@/content/admissions";
import { feesHeroImage } from "@/content/hero-images";

export const metadata = createPageMetadata({
  title: "Fee Structure",
  description: "Fee structure for KKR Women's Higher Secondary School, Bhadrak, Odisha.",
  path: "/admissions/fees",
});

export default function FeesPage() {
  return (
    <PageLayout>
      <PageHero
        overline="Admissions"
        title="Fee structure"
        lead="Official fee information for the academic year."
        image={feesHeroImage}
        imageAlt={feesHeroImage.alt}
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Fee Structure" },
        ]}
      />
      <Section>
        <Container>
          <Text variant="body" muted className="max-w-prose-wide">{feeInformation.note}</Text>
          <dl className="mt-12 space-y-0 divide-y divide-border border-t border-border max-w-prose-wide">
            {feeInformation.items.map((item) => (
              <div key={item.label} className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Text as="dt" variant="body" className="font-medium">{item.label}</Text>
                <Text as="dd" variant="body" muted>{item.value}</Text>
              </div>
            ))}
          </dl>
          <div className="mt-12">
            <Link href="/admissions" showArrow>Back to admissions</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
