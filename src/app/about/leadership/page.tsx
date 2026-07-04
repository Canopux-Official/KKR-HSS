import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Heading } from "@/components/ui/Heading";
import { PullQuote } from "@/components/editorial/PullQuote";
import { EditorialPlaceholder } from "@/components/media/EditorialPlaceholder";
import { PrincipalPortrait } from "@/components/media/PrincipalPortrait";
import { Reveal } from "@/components/ui/Reveal";
import { principalPageMeta, principalContent } from "@/content/principal";
import { leadershipHeroImage } from "@/content/hero-images";

export const metadata = createPageMetadata(principalPageMeta);

export default function PrincipalPage() {
  return (
    <PageLayout>
      <PageHero
        overline={principalContent.overline}
        title={principalContent.title}
        lead={principalContent.lead}
        image={leadershipHeroImage}
        imageAlt={leadershipHeroImage.alt}
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Leadership" },
        ]}
      />

      <Section ariaLabelledby="welcome-heading">
        <Container>
          <Grid className="lg:items-start">
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5 lg:order-2 lg:self-center">
              <PrincipalPortrait />
              <div className="mt-6">
                <Text variant="body" className="font-medium">
                  {principalContent.name}
                </Text>
                <Text variant="body-sm" muted className="mt-1">
                  {principalContent.role}
                </Text>
                {principalContent.qualifications && (
                  <Text variant="caption" className="mt-2 block">
                    {principalContent.qualifications}
                  </Text>
                )}
              </div>
            </Reveal>
            <Reveal className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-1 lg:order-1 mt-8 lg:mt-0">
              <Heading as="h2" scale="heading-xl" id="welcome-heading">
                Welcome
              </Heading>
              <div className="mt-8 space-y-6 max-w-prose">
                {principalContent.welcome.map((p, i) => (
                  <Text key={i} variant="body" muted>{p}</Text>
                ))}
              </div>
              <div className="mt-12">
                <PullQuote
                  quote="Our role is to provide the structure, guidance, and academic foundation that allows every student's potential to flourish."
                  attribution={principalContent.name}
                  role={principalContent.role}
                />
              </div>
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Section variant="muted" ariaLabelledby="philosophy-heading">
        <Container>
          <Heading as="h2" scale="heading-xl" id="philosophy-heading">
            {principalContent.philosophy.title}
          </Heading>
          <div className="mt-8 space-y-6 max-w-prose-wide">
            {principalContent.philosophy.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Text variant="body" muted>{p}</Text>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section ariaLabelledby="leadership-heading">
        <Container>
          <Heading as="h2" scale="heading-xl" id="leadership-heading">
            {principalContent.leadership.title}
          </Heading>
          <div className="mt-8 space-y-6 max-w-prose-wide">
            {principalContent.leadership.paragraphs.map((p, i) => (
              <Text key={i} variant="body" muted>{p}</Text>
            ))}
          </div>
          <div className="mt-12 space-y-8">
            {principalContent.leadership.members.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.08}>
                <Grid>
                  <div className="col-span-4 sm:col-span-3 lg:col-span-3">
                    <EditorialPlaceholder
                      alt={member.imageAlt}
                      aspect="portrait"
                    />
                  </div>
                  <div className="col-span-4 sm:col-span-5 lg:col-span-6 mt-8 sm:mt-0 flex flex-col justify-center">
                    <Heading as="h3" scale="heading-md">{member.name}</Heading>
                    <Text variant="body-sm" muted className="mt-1">{member.role}</Text>
                  </div>
                </Grid>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
