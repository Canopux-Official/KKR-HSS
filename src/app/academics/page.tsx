import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { PageSubNav } from "@/components/editorial/PageSubNav";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StreamList } from "@/components/editorial/StreamList";
import { DepartmentList } from "@/components/editorial/DepartmentList";
import { FacultyList } from "@/components/editorial/FacultyList";
import { CalendarList } from "@/components/editorial/CalendarList";
import { Reveal } from "@/components/ui/Reveal";
import {
  academicsPageMeta,
  academicsSubNav,
  academicsIntro,
  academicsHeroImage,
  streams,
  departments,
  teachingMethodology,
  curriculum,
  examinations,
  academicCalendar,
  facultyMembers,
  academicFacilities,
  laboratoryFacilities,
  libraryFacility,
  smartClassrooms,
} from "@/content/academics";

export const metadata = createPageMetadata(academicsPageMeta);

export default function AcademicsPage() {
  return (
    <PageLayout>
      <PageHero
        overline={academicsIntro.overline}
        title={academicsIntro.title}
        lead={academicsIntro.lead}
        image={academicsHeroImage}
        imageAlt={academicsHeroImage.alt}
        breadcrumbs={[{ label: "Academics" }]}
      />
      <PageSubNav items={academicsSubNav} />

      <Section id="streams" ariaLabelledby="streams-heading">
        <Container>
          <SectionHeader
            overline="Stream"
            title="Higher secondary pathways"
            lead="Arts stream offering a structured pathway to the Higher Secondary Certificate examination."
            titleId="streams-heading"
          />
          <div className="mt-12 lg:mt-16">
            <StreamList streams={streams} />
          </div>
        </Container>
      </Section>

      <Section id="departments" variant="muted" ariaLabelledby="departments-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-4">
              <SectionHeader
                overline="Departments"
                title="Subject departments"
                lead="Academic departments bring together faculty expertise across the Arts stream."
                titleId="departments-heading"
              />
              <div className="mt-8">
                <Link href="/academics/departments" showArrow>View all departments</Link>
              </div>
            </Reveal>
            <div className="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6 mt-12 lg:mt-0">
              <DepartmentList departments={departments} />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section id="methodology" ariaLabelledby="methodology-heading">
        <Container>
          <SectionHeader
            overline={teachingMethodology.overline}
            title={teachingMethodology.title}
            titleId="methodology-heading"
          />
          <div className="mt-8 space-y-6 max-w-prose-wide">
            {teachingMethodology.paragraphs?.map((p, i) => (
              <Text key={i} variant="body" muted>{p}</Text>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="curriculum" variant="muted" ariaLabelledby="curriculum-heading">
        <Container>
          <SectionHeader
            overline={curriculum.overline}
            title={curriculum.title}
            titleId="curriculum-heading"
          />
          <div className="mt-8 space-y-6 max-w-prose-wide">
            {curriculum.paragraphs?.map((p, i) => (
              <Text key={i} variant="body" muted>{p}</Text>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="examinations" ariaLabelledby="examinations-heading">
        <Container>
          <Grid>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5">
              <SectionHeader
                overline={examinations.overline}
                title={examinations.title}
                titleId="examinations-heading"
              />
              <div className="mt-8 space-y-6 max-w-prose">
                {examinations.paragraphs?.map((p, i) => (
                  <Text key={i} variant="body" muted>{p}</Text>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/academics/examinations" showArrow>Examination details</Link>
              </div>
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Section id="calendar" variant="muted" ariaLabelledby="calendar-heading">
        <Container>
          <SectionHeader
            overline="Academic Calendar"
            title="Key dates"
            lead="Dates below are placeholders awaiting confirmation from school administration. This structure is CMS-ready for annual updates."
            titleId="calendar-heading"
          />
          <div className="mt-12 lg:mt-16">
            <CalendarList entries={academicCalendar} />
          </div>
        </Container>
      </Section>

      <Section id="faculty" ariaLabelledby="faculty-heading">
        <Container>
          <SectionHeader
            overline="Faculty"
            title="Our educators"
            lead="Experienced faculty dedicated to student learning and development."
            titleId="faculty-heading"
          />
          <div className="mt-12 lg:mt-16">
            <FacultyList members={facultyMembers} />
          </div>
          <div className="mt-10">
            <Link href="/academics/faculty" showArrow>View all faculty</Link>
          </div>
        </Container>
      </Section>

      <Section id="facilities" variant="muted" ariaLabelledby="academic-facilities-heading">
        <Container>
          <SectionHeader
            overline={academicFacilities.overline}
            title={academicFacilities.title}
            titleId="academic-facilities-heading"
          />
          <Text variant="body" muted className="mt-6 max-w-prose-wide">
            {academicFacilities.paragraphs?.[0]}
          </Text>
          <div className="mt-16 space-y-16">
            {[laboratoryFacilities, libraryFacility, smartClassrooms].map((facility, index) => (
              <Reveal key={facility.title} delay={index * 0.06}>
                <article className="py-8 border-t border-border first:border-t-0">
                  <Text as="h3" variant="body-lg" className="font-display font-medium text-ink">
                    {facility.title}
                  </Text>
                  <Text variant="body" muted className="mt-4 max-w-prose">
                    {facility.description}
                  </Text>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/facilities" showArrow>Explore all facilities</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
