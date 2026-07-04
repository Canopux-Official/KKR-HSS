"use client";

import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { heroContent, homepageHeroSlides } from "@/content/homepage";
import { Container } from "@/components/ui/Container";
import { AnimatedHeroTitle } from "@/components/home/AnimatedHeroTitle";
import { HeroImageSlideshow } from "@/components/home/HeroImageSlideshow";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { HOMEPAGE_HERO_VIEWPORT_CLASS } from "@/lib/hero";
import { fadeInUp, heroImageKenBurns } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Welcome"
      className={cn(
        "relative w-full min-h-dvh h-dvh",
        HOMEPAGE_HERO_VIEWPORT_CLASS
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-charcoal min-h-dvh h-dvh",
          HOMEPAGE_HERO_VIEWPORT_CLASS
        )}
      >
        <motion.div
          className="absolute inset-0"
          initial={reducedMotion ? false : heroImageKenBurns.initial}
          animate={reducedMotion ? undefined : heroImageKenBurns.animate}
          transition={
            reducedMotion ? { duration: 0 } : heroImageKenBurns.transition
          }
        >
          <HeroImageSlideshow slides={homepageHeroSlides} />
        </motion.div>

        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-charcoal/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/50 to-charcoal/30" />
        </div>

        <Container
          className={cn(
            "relative z-10 flex h-full min-h-0 flex-col justify-center",
            "pt-[72px] lg:pt-20"
          )}
        >
          <div className="max-w-4xl">
            <AnimatedHeroTitle
              lines={heroContent.titleLines}
              fullTitle={heroContent.title}
            />
          </div>
        </Container>

        <motion.div
          className="absolute bottom-6 right-4 z-20 sm:bottom-8 sm:right-6 md:bottom-10 md:right-8"
          initial={reducedMotion ? false : fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.75 }}
        >
          <NextLink
            href={heroContent.secondaryCta.href}
            className={cn(
              "inline-flex items-center gap-2.5",
              "border border-gold bg-charcoal/40 px-5 py-3 md:px-6",
              "font-body text-body font-medium text-gold backdrop-blur-sm",
              "transition-[color,background-color,border-color,transform] duration-normal ease-reveal",
              "hover:bg-gold hover:text-charcoal hover:border-gold",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            )}
          >
            {heroContent.secondaryCta.label}
            <ArrowRight
              size={18}
              strokeWidth={1.5}
              aria-hidden="true"
              className="link-arrow"
            />
          </NextLink>
        </motion.div>
      </div>
    </section>
  );
}
