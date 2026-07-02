import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { DownloadsList } from "@/components/downloads/DownloadsList";
import { getAllDownloads } from "@/lib/cms";
import { downloadsPageMeta, downloadsIntro } from "@/content/downloads";
import { downloadsHeroImage } from "@/content/site-photos";

export const metadata = createPageMetadata(downloadsPageMeta);

export default function DownloadsPage() {
  const items = getAllDownloads();

  return (
    <PageLayout>
      <PageHero
        overline={downloadsIntro.overline}
        title={downloadsIntro.title}
        lead={downloadsIntro.lead}
        image={downloadsHeroImage}
        imageAlt={downloadsHeroImage.alt}
        breadcrumbs={[{ label: "Downloads" }]}
      />
      <Section className="print-friendly">
        <Container>
          <DownloadsList items={items} />
        </Container>
      </Section>
    </PageLayout>
  );
}
