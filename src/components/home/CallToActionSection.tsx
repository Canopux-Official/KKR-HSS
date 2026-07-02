import { ctaContent } from "@/content/homepage";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CallToActionSection() {
  return (
    <Section variant="dark" ariaLabelledby="cta-heading">
      <Container>
        <Reveal>
          <div className="max-w-prose-wide mx-auto text-center">
            <Heading
              as="h2"
              scale="display-sm"
              id="cta-heading"
              className="text-warm-white"
            >
              {ctaContent.title}
            </Heading>
            <Text
              variant="body-lg"
              className="mt-6 text-stone-light mx-auto max-w-prose"
            >
              {ctaContent.lead}
            </Text>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                href={ctaContent.primary.href}
                variant="secondary"
                className="border-warm-white text-warm-white hover:bg-warm-white hover:text-charcoal"
              >
                {ctaContent.primary.label}
              </Button>
              <Button
                href={ctaContent.secondary.href}
                variant="text"
                className="text-warm-white hover:text-gold-light"
              >
                {ctaContent.secondary.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
