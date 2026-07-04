"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeInUpVariant, getMotionProps, staggerContainer } from "@/lib/motion";

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerReveal({ children, className }: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const motionOff = getMotionProps(reducedMotion);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={reducedMotion ? undefined : staggerContainer}
      initial={motionOff.initial ?? "initial"}
      animate={isInView ? (motionOff.animate ?? "animate") : "initial"}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={cn(className)} variants={fadeInUpVariant}>
      {children}
    </motion.div>
  );
}
