import { achievementsContent } from "@/content/homepage";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function AchievementsSection() {
  const titleId = "achievements-heading";

  return (
    <Section ariaLabelledby={titleId}>
      <Container>
        <Grid>
          <Reveal className="col-span-4 sm:col-span-8 lg:col-span-4 lg:col-start-1">
            <SectionHeader
              overline={achievementsContent.overline}
              title={achievementsContent.title}
              titleId={titleId}
            />
            <Text variant="body-lg" muted className="mt-6 max-w-prose">
              {achievementsContent.lead}
            </Text>
          </Reveal>

          <div className="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6 mt-12 lg:mt-0">
            <ol className="space-y-0">
              {achievementsContent.highlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <li className="py-8 border-t border-border first:border-t-0 lg:first:border-t">
                    <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-4 sm:gap-8">
                      <Text
                        as="span"
                        variant="overline"
                        className="text-stone sm:pt-1"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Text>
                      <div>
                        <Heading as="h3" scale="heading-md">
                          {item.title}
                        </Heading>
                        <Text variant="body" muted className="mt-3 max-w-prose">
                          {item.description}
                        </Text>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
