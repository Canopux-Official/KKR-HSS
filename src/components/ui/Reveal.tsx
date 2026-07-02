"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeInUp, getMotionProps } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  const motionProps = reducedMotion
    ? getMotionProps(true)
    : {
        ...fadeInUp,
        transition: { ...fadeInUp.transition, delay },
      };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={motionProps.initial}
      animate={isInView ? motionProps.animate : motionProps.initial}
      transition={motionProps.transition}
    >
      {children}
    </motion.div>
  );
}
