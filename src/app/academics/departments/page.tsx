import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { DepartmentList } from "@/components/editorial/DepartmentList";
import { departments } from "@/content/academics";

export const metadata = createPageMetadata({
  title: "Departments",
  description: "Academic departments at KKR Women's Higher Secondary School, Bhadrak, Odisha.",
  path: "/academics/departments",
});

export default function DepartmentsPage() {
  return (
    <PageLayout>
      <PageHero
        overline="Academics"
        title="Departments"
        lead="Academic departments bring together faculty expertise across Arts and Languages."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Departments" },
        ]}
      />
      <Section>
        <Container>
          <DepartmentList departments={departments} />
          <div className="mt-8">
            <Link href="/academics" showArrow>Back to academics</Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
