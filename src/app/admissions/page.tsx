import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { PageSubNav } from "@/components/editorial/PageSubNav";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { ProcessSteps } from "@/components/editorial/ProcessSteps";
import { StreamList } from "@/components/editorial/StreamList";
import { Accordion } from "@/components/editorial/Accordion";
import { Timeline } from "@/components/editorial/Timeline";
import { Reveal } from "@/components/ui/Reveal";
import { AdmissionInquiryForm } from "@/components/forms";
import {
  admissionsPageMeta,
  admissionsSubNav,
  admissionsIntro,
  admissionsOverview,
  eligibilityCriteria,
  admissionProcess,
  importantDates,
  requiredDocuments,
  feeInformation,
  admissionFaqs,
  admissionStreams,
  samsPortalUrl,
} from "@/content/admissions";

export const metadata = createPageMetadata(admissionsPageMeta);

export default function AdmissionsPage() {
  const timelineEntries = importantDates.map((d) => ({
    id: d.id,
    year: d.date,
    title: d.title,
    description: d.description,
  }));

  return (
    <PageLayout>
      <PageHero
        overline={admissionsIntro.overline}
        title={admissionsIntro.title}
        lead={admissionsIntro.lead}
        breadcrumbs={[{ label: "Admissions" }]}
      />
      <PageSubNav items={admissionsSubNav} />

      <Section id="overview" ariaLabelledby="overview-heading">
        <Container>
          <SectionHeader overline="Overview" title="Welcome to admissions" titleId="overview-heading" />
          <div className="mt-8 space-y-6 max-w-prose-wide">
            {admissionsOverview.paragraphs.map((p, i) => (
              <Text key={i} variant="body" muted>{p}</Text>
            ))}
          </div>
          <div className="mt-10">
            <Link href={samsPortalUrl} showArrow>
              SAMS Odisha +2 e-Admission portal
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="eligibility" variant="muted" ariaLabelledby="eligibility-heading">
        <Container>
          <SectionHeader overline="Eligibility" title="Who may apply" titleId="eligibility-heading" />
          <ul className="mt-12 space-y-0 divide-y divide-border border-t border-border">
            {eligibilityCriteria.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.06}>
                <li className="py-8">
                  <Text as="h3" variant="body-lg" className="font-display font-medium text-ink">{item.title}</Text>
                  <Text variant="body" muted className="mt-3 max-w-prose">{item.description}</Text>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="streams" ariaLabelledby="streams-heading">
        <Container>
          <SectionHeader overline="Stream" title="Available pathway" titleId="streams-heading" />
          <div className="mt-12"><StreamList streams={admissionStreams} /></div>
        </Container>
      </Section>

      <Section id="process" variant="muted" ariaLabelledby="process-heading">
        <Container>
          <SectionHeader overline="Process" title="How to apply" lead="A step-by-step guide to the admission process." titleId="process-heading" />
          <div className="mt-12 max-w-content"><ProcessSteps steps={admissionProcess} /></div>
        </Container>
      </Section>

      <Section id="dates" ariaLabelledby="dates-heading">
        <Container>
          <SectionHeader overline="Important Dates" title="Key dates" lead="Dates are placeholders awaiting confirmation from school administration." titleId="dates-heading" />
          <div className="mt-12 max-w-content"><Timeline entries={timelineEntries} /></div>
        </Container>
      </Section>

      <Section id="documents" variant="muted" ariaLabelledby="documents-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5">
              <SectionHeader overline="Documents" title="Required documents" titleId="documents-heading" />
            </Reveal>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0" delay={0.1}>
              <ul className="space-y-4">
                {requiredDocuments.map((doc, i) => (
                  <li key={i}><Text variant="body" muted>{doc}</Text></li>
                ))}
              </ul>
              <div className="mt-8"><Link href="/downloads" showArrow>Download forms</Link></div>
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Section id="fees" ariaLabelledby="fees-heading">
        <Container>
          <SectionHeader overline="Fees" title="Fee information" titleId="fees-heading" />
          <Text variant="body" muted className="mt-6 max-w-prose">{feeInformation.note}</Text>
          <dl className="mt-10 space-y-6 max-w-prose">
            {feeInformation.items.map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between gap-2 py-4 border-t border-border first:border-t-0">
                <Text as="dt" variant="body" className="font-medium">{item.label}</Text>
                <Text as="dd" variant="body" muted>{item.value}</Text>
              </div>
            ))}
          </dl>
          <div className="mt-8"><Link href="/admissions/fees" showArrow>Full fee structure</Link></div>
        </Container>
      </Section>

      <Section id="faqs" variant="muted" ariaLabelledby="faqs-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-4">
              <SectionHeader overline="FAQs" title="Frequently asked questions" titleId="faqs-heading" />
              <div className="mt-8"><Link href="/admissions/faqs" showArrow>View all FAQs</Link></div>
            </Reveal>
            <div className="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6 mt-8 lg:mt-0">
              <Accordion items={admissionFaqs} />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section id="enquiry" ariaLabelledby="enquiry-heading">
        <Container>
          <SectionHeader overline="Enquire" title="Admission inquiry" lead="Submit your questions and our office will respond during working hours." titleId="enquiry-heading" />
          <div className="mt-12"><AdmissionInquiryForm /></div>
        </Container>
      </Section>
    </PageLayout>
  );
}
