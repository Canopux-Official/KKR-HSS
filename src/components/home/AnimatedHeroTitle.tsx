"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { HeroTitleLine } from "@/content/homepage";

interface AnimatedHeroLineProps {
  text: string;
  delay?: number;
  className?: string;
}

export function AnimatedHeroLine({
  text,
  delay = 0,
  className,
}: AnimatedHeroLineProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <span className={cn("block", className)}>{text}</span>;
  }

  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={{ y: "108%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.85,
          delay,
          ease: EASE.reveal,
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}

const toneClasses: Record<HeroTitleLine["tone"], string> = {
  light: "text-white",
  gold: "text-gold",
};

interface AnimatedHeroTitleProps {
  lines: HeroTitleLine[];
  fullTitle: string;
  className?: string;
}

export function AnimatedHeroTitle({
  lines,
  fullTitle,
  className,
}: AnimatedHeroTitleProps) {
  return (
    <h1
      className={cn(
        "font-hero font-extrabold uppercase",
        "text-[clamp(2.25rem,7vw,4.75rem)] leading-[0.92] tracking-[0.02em]",
        className
      )}
    >
      <span className="sr-only">{fullTitle}</span>
      {lines.map((line, index) => (
        <AnimatedHeroLine
          key={`${line.text}-${index}`}
          text={line.text}
          delay={0.12 + index * 0.1}
          className={toneClasses[line.tone]}
        />
      ))}
    </h1>
  );
}
