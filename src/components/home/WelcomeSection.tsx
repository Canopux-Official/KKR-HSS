import { welcomeContent } from "@/content/homepage";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { FounderPortrait } from "@/components/media/FounderPortrait";
import { Reveal } from "@/components/ui/Reveal";

export function WelcomeSection() {
  const titleId = "welcome-heading";

  return (
    <Section ariaLabelledby={titleId}>
      <Container>
        <Grid className="lg:items-start">
          <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5 lg:col-start-1">
            <SectionHeader
              overline={welcomeContent.overline}
              title={welcomeContent.title}
              titleId={titleId}
            />
            <div className="mt-8 space-y-6 max-w-prose">
              {welcomeContent.paragraphs.map((paragraph, index) => (
                <Text key={index} variant="body" muted>
                  {paragraph.replace(
                    "{foundingYear}",
                    siteConfig.foundingYear
                  )}
                </Text>
              ))}
            </div>
            <div className="mt-10">
              <Link href={welcomeContent.link.href} showArrow>
                {welcomeContent.link.label}
              </Link>
            </div>
          </Reveal>
          <Reveal
            className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0 lg:self-center"
            delay={0.1}
          >
            <FounderPortrait />
          </Reveal>
        </Grid>
      </Container>
    </Section>
  );
}
