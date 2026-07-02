import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { Accordion } from "@/components/editorial/Accordion";
import { admissionFaqs } from "@/content/admissions";
import { faqsHeroImage } from "@/content/site-photos";

export const metadata = createPageMetadata({
  title: "Admission FAQs",
  description: "Frequently asked questions about admission to KKR Women's Higher Secondary School.",
  path: "/admissions/faqs",
});

export default function FaqsPage() {
  return (
    <PageLayout>
      <PageHero
        overline="Admissions"
        title="Frequently asked questions"
        lead="Answers to common questions about the admission process."
        image={faqsHeroImage}
        imageAlt={faqsHeroImage.alt}
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "FAQs" },
        ]}
      />
      <Section>
        <Container>
          <Accordion items={admissionFaqs} />
          <div className="mt-12">
            <Link href="/admissions#enquiry" showArrow>Submit an enquiry</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
