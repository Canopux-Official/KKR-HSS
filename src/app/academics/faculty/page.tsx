import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { FacultyList } from "@/components/editorial/FacultyList";
import { facultyMembers, facultyHeroImage } from "@/content/academics";

export const metadata = createPageMetadata({
  title: "Faculty",
  description: "Faculty members at KKR Women's Higher Secondary School, Bhadrak, Odisha.",
  path: "/academics/faculty",
});

export default function FacultyPage() {
  return (
    <PageLayout>
      <PageHero
        overline="Academics"
        title="Faculty"
        lead="Our educators bring subject expertise and a genuine commitment to student development."
        image={facultyHeroImage}
        imageAlt={facultyHeroImage.alt}
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Faculty" },
        ]}
      />
      <Section>
        <Container>
          <FacultyList members={facultyMembers} />
          <div className="mt-12">
            <Link href="/academics" showArrow>Back to academics</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
