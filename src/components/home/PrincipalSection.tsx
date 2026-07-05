import { principalContent } from "@/content/homepage";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { PullQuote } from "@/components/editorial/PullQuote";
import { PrincipalPortrait } from "@/components/media/PrincipalPortrait";
import { Reveal } from "@/components/ui/Reveal";

export function PrincipalSection() {
  const titleId = "principal-heading";

  return (
    <Section variant="muted" ariaLabelledby={titleId}>
      <Container>
        <Grid className="lg:items-start">
          <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5 lg:order-2 lg:self-center">
            <PrincipalPortrait />
          </Reveal>
          <Reveal
            className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-1 lg:order-1 mt-8 lg:mt-0"
            delay={0.1}
          >
            <SectionHeader
              overline={principalContent.overline}
              title={principalContent.title}
              titleId={titleId}
            />
            <div className="mt-8">
              <PullQuote
                quote={principalContent.quote}
                attribution={principalContent.name}
                role={principalContent.title_}
              />
            </div>
            <Text variant="body" muted className="mt-6 max-w-prose">
              {principalContent.excerpt}
            </Text>
            <div className="mt-6">
              <Link href={principalContent.link.href} showArrow>
                {principalContent.link.label}
              </Link>
            </div>
          </Reveal>
        </Grid>
      </Container>
    </Section>
  );
}
