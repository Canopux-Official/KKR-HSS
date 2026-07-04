import { academicsContent } from "@/content/homepage";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { Divider } from "@/components/ui/Divider";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function AcademicsSection() {
  const titleId = "academics-heading";

  return (
    <Section ariaLabelledby={titleId}>
      <Container>
        <SectionHeader
            overline={academicsContent.overline}
            title={academicsContent.title}
            lead={academicsContent.lead}
            titleId={titleId}
          />

        <div className="mt-10 lg:mt-12">
          <Grid>
            {academicsContent.streams.map((stream, index) => (
              <Reveal
                key={stream.name}
                className="col-span-4 sm:col-span-8 lg:col-span-4"
                delay={index * 0.08}
              >
                <article className="h-full">
                  {index > 0 && (
                    <Divider className="mb-8 lg:hidden" />
                  )}
                  <Text as="span" variant="overline" className="block mb-3">
                    Stream
                  </Text>
                  <Heading as="h3" scale="heading-lg">
                    {stream.name}
                  </Heading>
                  <Text variant="body" muted className="mt-4 max-w-prose">
                    {stream.description}
                  </Text>
                  {index < academicsContent.streams.length - 1 && (
                    <Divider className="mt-8 hidden lg:block" />
                  )}
                </article>
              </Reveal>
            ))}
          </Grid>
        </div>

        <div className="mt-8 lg:mt-10">
          <Link href={academicsContent.link.href} showArrow>
            {academicsContent.link.label}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
