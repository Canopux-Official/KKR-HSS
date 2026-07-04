import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { Accordion } from "@/components/editorial/Accordion";
import { FAQPageJsonLd } from "@/components/seo";
import { admissionFaqs } from "@/content/admissions";
import { faqsHeroImage } from "@/content/hero-images";

export const metadata = createPageMetadata({
  title: "Admission FAQs",
  description:
    "Frequently asked questions about SAMS Odisha admission to KKR Women's Higher Secondary School, a government girls' higher secondary school in Bhadrak, Odisha.",
  path: "/admissions/faqs",
  keywords: [
    "admissions Bhadrak higher secondary school",
    "SAMS Odisha admission",
    "girls school admission Bhadrak",
  ],
});

export default function FaqsPage() {
  return (
    <PageLayout>
      <FAQPageJsonLd
        items={admissionFaqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
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
