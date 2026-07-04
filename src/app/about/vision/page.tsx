import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import {
  aboutVisionMission,
  visionStatement,
  missionStatement,
  coreValues,
} from "@/content/about";
import { visionHeroImage } from "@/content/hero-images";
import { ValueList } from "@/components/editorial/ValueList";

export const metadata = createPageMetadata({
  title: "Vision & Mission",
  description: "Vision, mission, and core values of KKR Women's Higher Secondary School, Bhadrak, Odisha.",
  path: "/about/vision",
});

export default function VisionPage() {
  return (
    <PageLayout>
      <PageHero
        overline={aboutVisionMission.overline}
        title={aboutVisionMission.title}
        lead={aboutVisionMission.lead}
        image={visionHeroImage}
        imageAlt={visionHeroImage.alt}
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Vision & Mission" },
        ]}
      />
      <Section>
        <Container>
          <Grid>
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
      <Section variant="muted">
        <Container>
          <Text as="h2" variant="body-lg" className="font-display font-medium text-ink mb-10">
            Core Values
          </Text>
          <ValueList items={coreValues} />
          <div className="mt-12">
            <Link href="/about" showArrow>Back to about the school</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
