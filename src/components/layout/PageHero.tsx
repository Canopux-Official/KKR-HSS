"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { HERO_ASPECT_CLASS } from "@/lib/hero";
import {
  getMotionProps,
  heroImageKenBurns,
  heroTextItem,
  heroTextStagger,
} from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { BreadcrumbItem } from "@/types/content";

export interface PageHeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
}

interface PageHeroProps {
  overline?: string;
  title: string;
  lead?: string;
  imageAlt?: string;
  image?: PageHeroImage;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({
  overline,
  title,
  lead,
  image,
  breadcrumbs,
}: PageHeroProps) {
  const reducedMotion = useReducedMotion();
  const motionOff = getMotionProps(reducedMotion);

  if (!image) {
    return (
      <section
        aria-label="Page header"
        className="border-b border-border bg-surface"
      >
        <Container className="py-10 md:py-12 lg:py-16">
          <motion.div
            className="max-w-3xl"
            variants={reducedMotion ? undefined : heroTextStagger}
            initial={motionOff.initial ?? "initial"}
            animate={motionOff.animate ?? "animate"}
          >
            {breadcrumbs && breadcrumbs.length > 0 && (
              <motion.div variants={reducedMotion ? undefined : heroTextItem}>
                <Breadcrumb items={breadcrumbs} className="mb-6" />
              </motion.div>
            )}
            {overline && (
              <motion.div variants={reducedMotion ? undefined : heroTextItem}>
                <Text
                  as="span"
                  variant="overline"
                  className="mb-3 block text-maroon"
                >
                  {overline}
                </Text>
              </motion.div>
            )}
            <motion.div variants={reducedMotion ? undefined : heroTextItem}>
              <Heading as="h1" scale="display-lg">
                {title}
              </Heading>
            </motion.div>
            {lead && (
              <motion.div variants={reducedMotion ? undefined : heroTextItem}>
                <Text variant="body-xl" muted className="mt-4 max-w-prose-wide">
                  {lead}
                </Text>
              </motion.div>
            )}
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section aria-label="Page header" className="relative">
      <div
        className={cn(
          "relative w-full overflow-hidden bg-charcoal",
          HERO_ASPECT_CLASS
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
          <div className="relative h-full w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              unoptimized
              sizes="100vw"
              className={cn(
                "object-cover",
                image.objectPosition ?? "object-center"
              )}
            />
          </div>
        </motion.div>
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/78 via-charcoal/45 to-charcoal/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        </div>
        <Container className="absolute inset-0 z-10 flex flex-col justify-end pb-8 md:pb-10 lg:pb-12">
          <motion.div
            className="max-w-3xl"
            variants={reducedMotion ? undefined : heroTextStagger}
            initial={motionOff.initial ?? "initial"}
            animate={motionOff.animate ?? "animate"}
          >
            {breadcrumbs && breadcrumbs.length > 0 && (
              <motion.div variants={reducedMotion ? undefined : heroTextItem}>
                <Breadcrumb
                  items={breadcrumbs}
                  className="mb-6"
                  variant="on-dark"
                />
              </motion.div>
            )}
            {overline && (
              <motion.div variants={reducedMotion ? undefined : heroTextItem}>
                <Text
                  as="span"
                  variant="overline"
                  className="mb-3 block text-gold-light hero-text-shadow"
                >
                  {overline}
                </Text>
              </motion.div>
            )}
            <motion.div variants={reducedMotion ? undefined : heroTextItem}>
              <Heading
                as="h1"
                scale="display-lg"
                className="text-warm-white hero-text-shadow-lg"
              >
                {title}
              </Heading>
            </motion.div>
            {lead && (
              <motion.div variants={reducedMotion ? undefined : heroTextItem}>
                <Text
                  variant="body-xl"
                  className="mt-4 max-w-prose-wide text-warm-white hero-text-shadow"
                >
                  {lead}
                </Text>
              </motion.div>
            )}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
