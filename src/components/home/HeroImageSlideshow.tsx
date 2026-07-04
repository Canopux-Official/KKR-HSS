"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE } from "@/lib/motion";
import type { HomepageHeroSlide } from "@/content/homepage";

const INTERVAL_MS = 5500;

interface HeroImageSlideshowProps {
  slides: HomepageHeroSlide[];
  className?: string;
}

export function HeroImageSlideshow({ slides, className }: HeroImageSlideshowProps) {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const advance = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (reducedMotion || slides.length <= 1) return;
    const timer = window.setInterval(advance, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [advance, reducedMotion, slides.length]);

  const activeSlide = slides[activeIndex]!;

  return (
    <div className={cn("absolute inset-0", className)} aria-hidden="true">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={activeSlide.src}
          className="absolute inset-0"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 1.2, ease: EASE.reveal }}
        >
          <div className="relative h-full w-full">
            <Image
              src={activeSlide.src}
              alt=""
              fill
              priority={activeIndex === 0}
              unoptimized
              sizes="100vw"
              className={cn(
                "object-cover opacity-35",
                activeSlide.objectPosition ?? "object-center"
              )}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <p className="sr-only" aria-live="polite">
        {activeSlide.alt}
      </p>
    </div>
  );
}
