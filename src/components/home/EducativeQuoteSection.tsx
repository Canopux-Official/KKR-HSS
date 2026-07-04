import { educativeQuote } from "@/content/homepage";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";

export function EducativeQuoteSection() {
  return (
    <Section variant="dark" ariaLabelledby="educative-quote">
      <Container>
        <Reveal>
          <figure className="mx-auto max-w-prose-wide text-center">
            <div
              className="mb-6 font-display text-display-sm leading-none text-gold select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote>
              <Text
                as="p"
                variant="body-xl"
                id="educative-quote"
                className="font-accent text-balance italic text-warm-white lg:text-[1.375rem] lg:leading-relaxed"
              >
                {educativeQuote.text}
              </Text>
              <figcaption className="mt-8">
                <Text
                  as="span"
                  variant="body-sm"
                  className="font-medium not-italic text-gold-light"
                >
                  {educativeQuote.attribution}
                </Text>
              </figcaption>
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}
