"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import type { GalleryImage } from "@/types/content";

interface GalleryGridProps {
  images: GalleryImage[];
  className?: string;
}

const layoutClasses = [
  "col-span-4 sm:col-span-5 lg:col-span-7",
  "col-span-4 sm:col-span-3 lg:col-span-5",
  "col-span-4 sm:col-span-4 lg:col-span-4",
  "col-span-4 sm:col-span-8 lg:col-span-8",
  "col-span-4 sm:col-span-4 lg:col-span-4",
  "col-span-4 sm:col-span-8 lg:col-span-8",
  "col-span-4 sm:col-span-8 lg:col-span-6",
  "col-span-4 sm:col-span-8 lg:col-span-6",
];

const aspectClasses: Record<GalleryImage["aspect"], string> = {
  landscape: "aspect-[3/2]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function GalleryGrid({ images, className }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i !== null ? (i + 1) % images.length : null));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i !== null ? (i - 1 + images.length) % images.length : null
        );
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, closeLightbox, images.length]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <StaggerReveal
        className={cn(
          "grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-gutter-sm sm:gap-gutter",
          className
        )}
      >
        {images.map((image, index) => (
          <StaggerItem
            key={image.id}
            className={layoutClasses[index % layoutClasses.length]}
          >
            <button
              type="button"
              className="group w-full text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              onClick={() => setActiveIndex(index)}
              aria-label={`View image: ${image.alt}`}
            >
              <div className="overflow-hidden transition-[opacity,transform] duration-normal ease-reveal group-hover:opacity-95 group-hover:scale-[1.02]">
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    aspectClasses[image.aspect]
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-slow ease-reveal group-hover:scale-105"
                    unoptimized
                  />
                </div>
              </div>
            </button>
          </StaggerItem>
        ))}
      </StaggerReveal>

      {activeImage && activeIndex !== null && (
        <motion.div
          className="fixed inset-0 z-modal flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-charcoal/90"
            onClick={closeLightbox}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-4xl mx-4">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 flex items-center justify-center w-11 h-11 text-warm-white hover:text-gold transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label="Close image viewer"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              sizes="(max-width: 1024px) 100vw, 896px"
              className="h-auto max-h-[80vh] w-full object-contain"
              unoptimized
            />
            <p className="mt-4 font-body text-body-sm text-stone-light text-center">
              {activeImage.alt}
            </p>
            <p className="mt-2 font-body text-caption text-stone text-center">
              {activeIndex + 1} of {images.length}
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}
