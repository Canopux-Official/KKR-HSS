"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";
import { MobileMenu, MobileMenuTrigger } from "./MobileMenu";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeInDown, getMotionProps } from "@/lib/motion";

interface HeaderProps {
  /** Transparent nav over full-screen homepage hero */
  overlay?: boolean;
}

export function Header({ overlay = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const motionOff = getMotionProps(reducedMotion);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onHero = overlay && !isScrolled;

  return (
    <motion.header
      className={cn(
        "z-sticky transition-[background-color,border-color,box-shadow] duration-normal",
        overlay
          ? cn(
              "fixed top-0 left-0 right-0",
              onHero
                ? "bg-charcoal/25 backdrop-blur-[2px]"
                : "bg-surface border-b border-border shadow-sm"
            )
          : cn(
              "sticky top-0 bg-surface",
              isScrolled && "border-b border-border shadow-sm"
            )
      )}
      initial={motionOff.initial ?? fadeInDown.initial}
      animate={motionOff.animate ?? fadeInDown.animate}
      transition={reducedMotion ? { duration: 0 } : fadeInDown.transition}
    >
      <Container>
        <div className="flex items-center justify-between h-[72px] lg:h-20">
          <NextLink
            href="/"
            className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            aria-label={`${siteConfig.name} — Home`}
          >
            <span
              className={cn(
                "block font-display text-heading-sm lg:text-heading-md leading-tight transition-colors duration-fast",
                onHero
                  ? "text-warm-white group-hover:text-gold-light"
                  : "text-ink group-hover:text-maroon"
              )}
            >
              KKR Mahila
            </span>
            <span
              className={cn(
                "block font-body text-caption tracking-wide transition-colors duration-fast",
                onHero ? "text-stone-light" : "text-stone"
              )}
            >
              Higher Secondary School
            </span>
          </NextLink>

          <div className="flex items-center gap-2 lg:gap-4">
            <Navigation onHero={onHero} />
            <MobileMenuTrigger
              onOpen={() => setIsMenuOpen(true)}
              isOpen={isMenuOpen}
              onHero={onHero}
            />
            <MobileMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
