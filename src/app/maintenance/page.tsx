import { createPageMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/layout";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export const metadata = createPageMetadata({
  title: "Maintenance",
  description:
    "KKR Mahila Higher Secondary School website is temporarily unavailable for scheduled maintenance.",
  path: "/maintenance",
  noIndex: true,
});

export default function MaintenancePage() {
  return (
    <PageLayout>
      <section className="py-32 md:py-40 lg:py-48">
        <Container>
          <div className="max-w-prose-wide mx-auto text-center">
            <Text as="span" variant="overline" className="block mb-4">Maintenance</Text>
            <Heading as="h1" scale="display-md">We&apos;ll be back shortly</Heading>
            <Text variant="body-lg" muted className="mt-6">
              The website is temporarily unavailable for scheduled maintenance. Please check back soon or contact the school office directly.
            </Text>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
