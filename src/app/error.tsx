"use client";

import { useEffect } from "react";
import { PageLayout } from "@/components/layout";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout>
      <section className="py-32 md:py-40 lg:py-48">
        <Container>
          <div className="max-w-prose-wide mx-auto text-center">
            <Text as="span" variant="overline" className="block mb-4">Error</Text>
            <Heading as="h1" scale="display-md">Something went wrong</Heading>
            <Text variant="body-lg" muted className="mt-6">
              We apologise for the inconvenience. Please try again, or return to the homepage.
            </Text>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button type="button" onClick={reset}>Try again</Button>
              <Button href="/" variant="secondary">Return home</Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
