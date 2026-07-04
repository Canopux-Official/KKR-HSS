import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StatutoryCommitteeList } from "@/components/editorial/StatutoryCommitteeList";
import { Reveal } from "@/components/ui/Reveal";
import {
  statutoryCommitteesPageMeta,
  statutoryCommitteesIntro,
  statutoryCommittees,
  statutoryHelplines,
} from "@/content/statutory-committees";

export const metadata = createPageMetadata(statutoryCommitteesPageMeta);

export default function StatutoryCommitteesPage() {
  return (
    <PageLayout>
      <PageHero
        overline={statutoryCommitteesIntro.overline}
        title={statutoryCommitteesIntro.title}
        lead={statutoryCommitteesIntro.lead}
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Statutory Committees" },
        ]}
      />

      <Section ariaLabelledby="committees-intro-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5">
              <SectionHeader
                overline="Legal framework"
                title="Mandatory committees"
                titleId="committees-intro-heading"
              />
              <div className="mt-8 space-y-6 max-w-prose">
                {statutoryCommitteesIntro.paragraphs?.map((paragraph, index) => (
                  <Text key={index} variant="body" muted>
                    {paragraph}
                  </Text>
                ))}
              </div>
            </Reveal>
            <Reveal
              className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7 mt-10 lg:mt-0"
              delay={0.1}
            >
              <div className="border border-border bg-surface-muted p-6 md:p-8">
                <Text as="h2" variant="overline" className="block mb-4">
                  {statutoryHelplines.title}
                </Text>
                <dl className="space-y-4">
                  {statutoryHelplines.items.map((item) => (
                    <div key={item.label}>
                      <Text as="dt" variant="body-sm" className="font-medium">
                        {item.label}
                      </Text>
                      <Text as="dd" variant="body-sm" muted className="mt-1">
                        {item.value}
                      </Text>
                    </div>
                  ))}
                </dl>
                <Text variant="body-sm" muted className="mt-6">
                  {statutoryHelplines.note}
                </Text>
              </div>
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Section variant="muted" ariaLabelledby="committees-list-heading">
        <Container>
          <SectionHeader
            overline="Committees"
            title="Composition and presiding officers"
            lead="Presiding officers and members are appointed as per government and UGC guidelines. Official names will be updated upon confirmation from school administration."
            titleId="committees-list-heading"
          />
          <div className="mt-12 lg:mt-16">
            <StatutoryCommitteeList committees={statutoryCommittees} />
          </div>
          <div className="mt-12">
            <Link href="/contact" showArrow>
              Report a concern or submit a complaint
            </Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
