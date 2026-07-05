import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { PageSubNav } from "@/components/editorial/PageSubNav";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { Timeline } from "@/components/editorial/Timeline";
import { ValueList } from "@/components/editorial/ValueList";
import { ContentBlock } from "@/components/editorial/ContentBlock";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/ui/Reveal";
import {
  aboutPageMeta,
  aboutSubNav,
  aboutOverview,
  aboutOverviewImage,
  aboutCampusImage,
  aboutHistoryImage,
  aboutHistory,
  aboutVisionMission,
  visionStatement,
  missionStatement,
  coreValues,
  whyChooseKkr,
  institutionalTimeline,
  campusOverview,
} from "@/content/about";
import {
  statutoryCommittees,
  statutoryCommitteesIntro,
} from "@/content/statutory-committees";
import { StatutoryCommitteeList } from "@/components/editorial/StatutoryCommitteeList";

export const metadata = createPageMetadata(aboutPageMeta);

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        overline="About"
        title="KKR Women's Higher Secondary School"
        lead={aboutOverview.lead}
        breadcrumbs={[{ label: "About" }]}
      />
      <PageSubNav items={aboutSubNav} />

      <Section id="overview" ariaLabelledby="overview-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-1">
              <SectionHeader
                overline={aboutOverview.overline}
                title={aboutOverview.title}
                titleId="overview-heading"
              />
              <div className="mt-8 space-y-6 max-w-prose">
                {(aboutOverview.paragraphs ?? []).map((p, i) => (
                  <Text key={i} variant="body" muted>{p}</Text>
                ))}
              </div>
            </Reveal>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5 lg:col-start-8 mt-8 lg:mt-0" delay={0.1}>
              <EditorialImage photo={aboutOverviewImage} aspect="portrait" />
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Section id="history" variant="muted" ariaLabelledby="history-heading">
        <Container>
          <ContentBlock
            title={aboutHistory.title}
            overline={aboutHistory.overline}
            paragraphs={aboutHistory.paragraphs ?? []}
            image={aboutHistoryImage}
            imagePosition="left"
          />
        </Container>
      </Section>

      <Section id="vision-mission" ariaLabelledby="vision-mission-heading">
        <Container>
          <SectionHeader
            overline={aboutVisionMission.overline}
            title={aboutVisionMission.title}
            lead={aboutVisionMission.lead}
            titleId="vision-mission-heading"
          />
          <Grid className="mt-8 lg:mt-10">
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-6">
              <Text as="span" variant="overline" className="block mb-4">Vision</Text>
              <Text variant="body-xl" className="max-w-prose font-accent italic">
                {visionStatement.text}
              </Text>
            </Reveal>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-6 mt-8 lg:mt-0" delay={0.1}>
              <Text as="span" variant="overline" className="block mb-4">Mission</Text>
              <Text variant="body-lg" muted className="max-w-prose">
                {missionStatement.text}
              </Text>
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Section id="values" variant="muted" ariaLabelledby="values-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-4">
              <SectionHeader
                overline="Core Values"
                title="What we stand for"
                titleId="values-heading"
              />
            </Reveal>
            <div className="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6 mt-8 lg:mt-0">
              <ValueList items={coreValues} />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section id="why-kkr" ariaLabelledby="why-kkr-heading">
        <Container>
          <SectionHeader
            overline={whyChooseKkr.overline}
            title={whyChooseKkr.title}
            titleId="why-kkr-heading"
          />
          <div className="mt-10 space-y-6 max-w-prose-wide">
            {(whyChooseKkr.paragraphs ?? []).map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Text variant="body" muted>{p}</Text>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/admissions" showArrow>Learn about admissions</Link>
          </div>
        </Container>
      </Section>

      <Section id="timeline" variant="muted" ariaLabelledby="timeline-heading">
        <Container>
          <SectionHeader
            overline="Timeline"
            title="Institutional milestones"
            lead="Historical milestones will be updated as official records are confirmed by school leadership."
            titleId="timeline-heading"
          />
          <div className="mt-8 lg:mt-10 max-w-content">
            <Timeline entries={institutionalTimeline} />
          </div>
        </Container>
      </Section>

      <Section id="statutory-committees" variant="muted" ariaLabelledby="statutory-committees-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-4">
              <SectionHeader
                overline={statutoryCommitteesIntro.overline}
                title="Safety and grievance committees"
                lead="Mandatory committees for anti-ragging measures, sexual harassment redressal, and student grievances — as required by UGC and Government of India regulations."
                titleId="statutory-committees-heading"
              />
              <div className="mt-8">
                <Link href="/about/statutory-committees" showArrow>
                  View full committee details
                </Link>
              </div>
            </Reveal>
            <div className="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6 mt-8 lg:mt-0">
              <StatutoryCommitteeList committees={statutoryCommittees} compact />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section id="campus" ariaLabelledby="campus-heading">
        <Container>
          <ContentBlock
            title={campusOverview.title}
            overline={campusOverview.overline}
            paragraphs={campusOverview.paragraphs ?? []}
            image={aboutCampusImage}
          />
          <div className="mt-8 flex flex-wrap gap-6">
            <Link href="/facilities" showArrow>Explore facilities</Link>
            <Link href="/campus-life/gallery" showArrow>View gallery</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
