"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";
import { MobileMenu, MobileMenuTrigger } from "./MobileMenu";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-sticky bg-surface transition-[border-color,box-shadow] duration-normal",
        isScrolled && "border-b border-border"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-[72px] lg:h-20">
          <NextLink
            href="/"
            className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            aria-label={`${siteConfig.name} — Home`}
          >
            <span className="block font-display text-heading-sm lg:text-heading-md text-ink leading-tight group-hover:text-maroon transition-colors duration-fast">
              KKR Women&apos;s
            </span>
            <span className="block font-body text-caption text-stone tracking-wide">
              Higher Secondary School
            </span>
          </NextLink>

          <div className="flex items-center gap-2 lg:gap-4">
            <Navigation />
            <MobileMenuTrigger
              onOpen={() => setIsMenuOpen(true)}
              isOpen={isMenuOpen}
            />
            <MobileMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
