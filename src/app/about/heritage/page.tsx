import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { ContentBlock } from "@/components/editorial/ContentBlock";
import { Timeline } from "@/components/editorial/Timeline";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { aboutHistory, aboutHistoryImage, institutionalTimeline } from "@/content/about";
import { heritageHeroImage } from "@/content/site-photos";

export const metadata = createPageMetadata({
  title: "Heritage",
  description: "The history and legacy of KKR Women's Higher Secondary School, Bhadrak, Odisha.",
  path: "/about/heritage",
});

export default function HeritagePage() {
  return (
    <PageLayout>
      <PageHero
        overline="Heritage"
        title="History & Legacy"
        lead="Rooted in Bhadrak, committed to generations of women's education."
        image={heritageHeroImage}
        imageAlt={heritageHeroImage.alt}
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Heritage" },
        ]}
      />
      <Section>
        <Container>
          <ContentBlock
            title={aboutHistory.title}
            paragraphs={aboutHistory.paragraphs ?? []}
            image={aboutHistoryImage}
            imagePosition="left"
          />
        </Container>
      </Section>
      <Section variant="muted">
        <Container>
          <SectionHeader
            overline="Timeline"
            title="Institutional milestones"
            lead="Historical milestones will be updated as official records are confirmed."
          />
          <div className="mt-12 lg:mt-16 max-w-content">
            <Timeline entries={institutionalTimeline} />
          </div>
          <div className="mt-12">
            <Link href="/about" showArrow>Back to about the school</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
