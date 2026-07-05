import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { PageSubNav } from "@/components/editorial/PageSubNav";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { EditorialList } from "@/components/editorial/EditorialList";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/ui/Reveal";
import {
  studentLifePageMeta,
  studentLifeSubNav,
  studentLifeIntro,
  studentLifeOverviewImage,
  sportsSectionImage,
  culturalSectionImage,
  studentLifeOverview,
  clubsAndSocieties,
  nccNss,
  sportsActivities,
  annualFunctions,
  culturalProgrammes,
  competitions,
  studentDevelopment,
} from "@/content/student-life";

export const metadata = createPageMetadata(studentLifePageMeta);

export default function CampusLifePage() {
  return (
    <PageLayout>
      <PageHero
        overline={studentLifeIntro.overline}
        title={studentLifeIntro.title}
        lead={studentLifeIntro.lead}
        breadcrumbs={[{ label: "Campus Life" }]}
      />
      <PageSubNav items={studentLifeSubNav} />

      <Section id="overview" ariaLabelledby="overview-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-6">
              <SectionHeader
                overline="Overview"
                title="A community beyond the classroom"
                titleId="overview-heading"
              />
              <div className="mt-8 space-y-6 max-w-prose">
                {studentLifeOverview.paragraphs.map((p, i) => (
                  <Text key={i} variant="body" muted>{p}</Text>
                ))}
              </div>
            </Reveal>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5 lg:col-start-8 mt-8 lg:mt-0" delay={0.1}>
              <EditorialImage photo={studentLifeOverviewImage} aspect="portrait" />
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Section id="clubs" variant="muted" ariaLabelledby="clubs-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-4">
              <SectionHeader
                overline="Clubs & Societies"
                title="Spaces for interest and expression"
                titleId="clubs-heading"
              />
            </Reveal>
            <div className="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6 mt-8 lg:mt-0">
              <EditorialList items={clubsAndSocieties} />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section id="ncc-nss" ariaLabelledby="ncc-nss-heading">
        <Container>
          <SectionHeader
            overline="NCC & NSS"
            title="Service and discipline"
            lead="Programme availability to be confirmed by school administration."
            titleId="ncc-nss-heading"
          />
          <div className="mt-8">
            <EditorialList items={nccNss} />
          </div>
        </Container>
      </Section>

      <Section id="sports" variant="muted" ariaLabelledby="sports-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5">
              <SectionHeader
                overline="Sports"
                title="Physical education and athletics"
                titleId="sports-heading"
              />
              <EditorialList items={sportsActivities} />
            </Reveal>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0" delay={0.1}>
              <EditorialImage photo={sportsSectionImage} aspect="landscape" />
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Section id="annual-functions" ariaLabelledby="annual-heading">
        <Container>
          <SectionHeader
            overline="Annual Functions"
            title="Markers of the school year"
            titleId="annual-heading"
          />
          <div className="mt-8">
            <EditorialList items={annualFunctions} />
          </div>
        </Container>
      </Section>

      <Section id="cultural" variant="muted" ariaLabelledby="cultural-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-6">
              <SectionHeader
                overline="Cultural Programmes"
                title="Celebrating creativity and tradition"
                titleId="cultural-heading"
              />
              <EditorialList items={culturalProgrammes} />
            </Reveal>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5 lg:col-start-8 mt-8 lg:mt-0" delay={0.1}>
              <EditorialImage photo={culturalSectionImage} />
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Section id="competitions" ariaLabelledby="competitions-heading">
        <Container>
          <SectionHeader
            overline="Competitions"
            title="Challenges beyond the curriculum"
            titleId="competitions-heading"
          />
          <div className="mt-8">
            <EditorialList items={competitions} />
          </div>
        </Container>
      </Section>

      <Section id="development" variant="muted" ariaLabelledby="development-heading">
        <Container>
          <SectionHeader
            overline="Student Development"
            title="Supporting growth and direction"
            titleId="development-heading"
          />
          <div className="mt-8">
            <EditorialList items={studentDevelopment} />
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link href="/campus-life/gallery" showArrow>View gallery</Link>
            <Link href="/achievements" showArrow>Student achievements</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
