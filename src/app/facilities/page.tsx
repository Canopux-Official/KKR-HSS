import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { PageSubNav } from "@/components/editorial/PageSubNav";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { FacilityBlock } from "@/components/editorial/FacilityBlock";
import {
  facilitiesPageMeta,
  facilitiesSubNav,
  facilitiesIntro,
  facilitiesHeroImage,
  facilities,
} from "@/content/facilities";

export const metadata = createPageMetadata(facilitiesPageMeta);

export default function FacilitiesPage() {
  return (
    <PageLayout>
      <PageHero
        overline={facilitiesIntro.overline}
        title={facilitiesIntro.title}
        lead={facilitiesIntro.lead}
        image={facilitiesHeroImage}
        imageAlt={facilitiesHeroImage.alt}
        breadcrumbs={[{ label: "Facilities" }]}
      />
      <PageSubNav items={facilitiesSubNav} />

      {facilities.map((facility, index) => (
        <Section
          key={facility.id}
          variant={index % 2 === 1 ? "muted" : "default"}
          ariaLabelledby={`${facility.id}-heading`}
        >
          <Container>
            <FacilityBlock
              facility={facility}
              imagePosition={index % 2 === 0 ? "right" : "left"}
            />
          </Container>
        </Section>
      ))}
    </PageLayout>
  );
}
