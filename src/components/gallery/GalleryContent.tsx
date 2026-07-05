"use client";

import { useState } from "react";
import { PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { GalleryGrid } from "@/components/media/GalleryGrid";
import { cn } from "@/lib/utils";
import type { GalleryCategory, GalleryImage } from "@/types/content";
import { getImagesByCategory } from "@/content/gallery";

interface GalleryContentProps {
  intro: {
    overline: string;
    title: string;
    lead: string;
  };
  categories: GalleryCategory[];
  allImages: GalleryImage[];
}

export function GalleryContent({
  intro,
  categories,
  allImages,
}: GalleryContentProps) {
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");

  const displayedImages =
    activeCategory === "all"
      ? allImages
      : getImagesByCategory(activeCategory);

  return (
    <>
      <PageHero
        overline={intro.overline}
        title={intro.title}
        lead={intro.lead}
        breadcrumbs={[
          { label: "Campus Life", href: "/campus-life" },
          { label: "Gallery" },
        ]}
      />

      <Section>
        <Container>
          <nav aria-label="Gallery categories" className="mb-6 lg:mb-8">
            <ul className="flex flex-wrap gap-4 lg:gap-6">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={cn(
                    "font-body text-body-sm font-medium py-2 border-b-2 transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
                    activeCategory === "all"
                      ? "text-maroon border-maroon"
                      : "text-ink-muted border-transparent hover:text-maroon"
                  )}
                >
                  All
                </button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "font-body text-body-sm font-medium py-2 border-b-2 transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
                      activeCategory === category.id
                        ? "text-maroon border-maroon"
                        : "text-ink-muted border-transparent hover:text-maroon"
                    )}
                  >
                    {category.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {activeCategory !== "all" && (
            <Text variant="body" muted className="mb-10 max-w-prose">
              {categories.find((c) => c.id === activeCategory)?.description}
            </Text>
          )}

          <GalleryGrid images={displayedImages} />
        </Container>
      </Section>
    </>
  );
}
