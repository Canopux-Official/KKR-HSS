import { admissionsContent } from "@/content/homepage";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function AdmissionsSection() {
  const titleId = "admissions-heading";

  return (
    <Section ariaLabelledby={titleId}>
      <Container>
        <Grid>
          <Reveal className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-1">
            <SectionHeader
              overline={admissionsContent.overline}
              title={admissionsContent.title}
              titleId={titleId}
            />
            <div className="mt-8 space-y-6 max-w-prose">
              {admissionsContent.paragraphs.map((paragraph, index) => (
                <Text key={index} variant="body" muted>
                  {paragraph}
                </Text>
              ))}
            </div>
            <div className="mt-10">
              <Link href={admissionsContent.link.href} showArrow>
                {admissionsContent.link.label}
              </Link>
            </div>
          </Reveal>

          <Reveal
            className="col-span-4 sm:col-span-8 lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0"
            delay={0.1}
          >
            <dl className="space-y-8 lg:pt-16">
              {admissionsContent.details.map((detail) => (
                <div key={detail.label}>
                  <Text as="dt" variant="overline" className="block mb-2">
                    {detail.label}
                  </Text>
                  <Text as="dd" variant="body" muted>
                    {detail.value}
                  </Text>
                </div>
              ))}
            </dl>
          </Reveal>
        </Grid>
      </Container>
    </Section>
  );
}
