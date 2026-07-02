import Link from "next/link";
import { PageLayout } from "@/components/layout";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="py-32 md:py-40 lg:py-48">
        <Container>
          <div className="max-w-prose-wide mx-auto text-center">
            <Text as="span" variant="overline" className="block mb-4">404</Text>
            <Heading as="h1" scale="display-md">Page not found</Heading>
            <Text variant="body-lg" muted className="mt-6">
              The page you are looking for may have been moved or does not exist. Please check the address or return to the homepage.
            </Text>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/">Return home</Button>
              <Button href="/contact" variant="secondary">Contact us</Button>
            </div>
            <nav className="mt-16 pt-8 border-t border-border" aria-label="Helpful links">
              <ul className="flex flex-wrap justify-center gap-6 font-body text-body-sm">
                <li><Link href="/admissions" className="text-maroon hover:text-maroon-dark">Admissions</Link></li>
                <li><Link href="/academics" className="text-maroon hover:text-maroon-dark">Academics</Link></li>
                <li><Link href="/campus-life" className="text-maroon hover:text-maroon-dark">Campus Life</Link></li>
                <li><Link href="/search" className="text-maroon hover:text-maroon-dark">Search</Link></li>
              </ul>
            </nav>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
