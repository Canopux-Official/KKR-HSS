import { achievementsContent, chseExamResults } from "@/content/homepage";
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

          <div className="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6 mt-6 lg:mt-0 space-y-5">
            <Reveal delay={0.05}>
              <div className="border border-border bg-surface-muted p-5 md:p-6">
                <Text as="span" variant="overline" className="block text-maroon">
                  {chseExamResults.examination}
                </Text>
                <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-2">
                  <span className="font-display text-display-sm font-bold text-maroon leading-none">
                    {chseExamResults.firstDivision.secured}
                  </span>
                  <Text as="span" variant="body-lg" muted className="pb-1">
                    out of {chseExamResults.firstDivision.total}
                  </Text>
                </div>
                <Text variant="body" className="mt-2 font-medium text-ink">
                  {chseExamResults.firstDivision.label}
                </Text>
                <Text variant="body-sm" muted className="mt-4 max-w-prose">
                  {chseExamResults.summary}
                </Text>

                <div className="mt-8 pt-8 border-t border-border space-y-5">
                  <Text as="span" variant="overline" className="block">
                    Notable performers
                  </Text>
                  {chseExamResults.toppers.map((topper) => (
                    <div
                      key={topper.name}
                      className="flex flex-wrap items-baseline justify-between gap-2"
                    >
                      <div>
                        <Text variant="body-lg" className="font-medium text-ink">
                          {topper.name}
                        </Text>
                        {topper.note && (
                          <Text variant="caption" className="mt-1 block">
                            {topper.note}
                          </Text>
                        )}
                      </div>
                      <span className="font-display text-heading-lg font-semibold text-maroon">
                        {topper.marks}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <ol className="space-y-0">
              {achievementsContent.highlights.map((item, index) => (
                <Reveal key={item.title} delay={0.1 + index * 0.08}>
                  <li className="py-5 border-t border-border first:border-t-0">
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
