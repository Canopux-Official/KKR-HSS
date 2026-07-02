import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { EditorialPlaceholder } from "@/components/media/EditorialPlaceholder";
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
  imageAlt: string;
  image?: PageHeroImage;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({
  overline,
  title,
  lead,
  imageAlt,
  image,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section aria-label="Page header" className="relative">
      <div
        className={cn(
          "relative w-full overflow-hidden bg-charcoal",
          !image && "min-h-[40vh] lg:min-h-[50vh]"
        )}
        style={
          image
            ? { aspectRatio: `${image.width} / ${image.height}` }
            : undefined
        }
      >
        {image ? (
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
        ) : (
          <EditorialPlaceholder
            alt={imageAlt}
            aspect="hero"
            showLabel={false}
            className="absolute inset-0 h-full w-full [&>div]:h-full [&>div]:min-h-0"
          />
        )}
        <div className="absolute inset-0" aria-hidden="true">
          {image ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/60 to-charcoal/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-charcoal/50" />
          )}
        </div>
        <Container className="absolute inset-0 z-10 flex flex-col justify-end pb-12 md:pb-16 lg:pb-20">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumb items={breadcrumbs} className="mb-8" variant="on-dark" />
          )}
          <div className="max-w-3xl">
            {overline && (
              <Text
                as="span"
                variant="overline"
                className={`text-gold-light mb-4 block${image ? " hero-text-shadow" : ""}`}
              >
                {overline}
              </Text>
            )}
            <Heading
              as="h1"
              scale="display-lg"
              className={`text-warm-white${image ? " hero-text-shadow-lg" : ""}`}
            >
              {title}
            </Heading>
            {lead && (
              <Text
                variant="body-xl"
                className={`mt-6 max-w-prose-wide${image ? " text-warm-white hero-text-shadow" : " text-warm-white/90"}`}
              >
                {lead}
              </Text>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}
