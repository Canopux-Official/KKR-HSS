import Image from "next/image";
import { heroContent } from "@/content/homepage";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

const HERO_IMAGE = {
  src: "/images/hero/school-entrance.png",
  alt: "Entrance gateway of KKR Women's Higher Secondary School, Bhadrak, surrounded by trees",
  width: 1024,
  height: 380,
} as const;

export function HeroSection() {
  return (
    <section aria-label="Welcome" className="relative">
      <div className="relative w-full overflow-hidden bg-charcoal">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          width={HERO_IMAGE.width}
          height={HERO_IMAGE.height}
          priority
          unoptimized
          sizes="100vw"
          className="h-auto w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/60 to-charcoal/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/25 to-transparent" />
        </div>
        <Container className="absolute inset-0 flex items-end pb-12 md:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <Text
              as="span"
              variant="overline"
              className="text-gold-light mb-4 block hero-text-shadow"
            >
              {heroContent.overline}
            </Text>
            <Heading
              as="h1"
              scale="display-xl"
              className="text-warm-white hero-text-shadow-lg"
            >
              {heroContent.title}
            </Heading>
            <Text
              variant="body-xl"
              className="mt-6 text-warm-white max-w-prose-wide hero-text-shadow"
            >
              {heroContent.lead}
            </Text>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={heroContent.cta.href} variant="secondary" className="border-warm-white text-warm-white bg-charcoal/50 hover:bg-warm-white hover:text-charcoal backdrop-blur-sm">
                {heroContent.cta.label}
              </Button>
              <Button href={heroContent.secondaryCta.href} variant="secondary" className="border-warm-white/90 text-warm-white bg-charcoal/35 hover:bg-warm-white hover:text-charcoal backdrop-blur-sm">
                {heroContent.secondaryCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
