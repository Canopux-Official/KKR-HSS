"use client";

import { useEffect, useRef } from "react";
import NextLink from "next/link";
import { X } from "lucide-react";
import { primaryNavigation } from "@/config/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const firstLink = menuRef.current?.querySelector<HTMLElement>("a");
      firstLink?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      ref={menuRef}
      className="fixed inset-0 z-modal lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div
        className="absolute inset-0 bg-charcoal/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className="absolute right-0 top-0 h-full w-full max-w-sm bg-surface border-l border-border flex flex-col"
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between px-gutter-sm py-4 border-b border-border">
          <span className="font-display text-heading-sm text-ink">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-11 h-11 text-ink hover:text-maroon transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto px-gutter-sm">
          {primaryNavigation.map((item) => (
            <li key={item.href} className="border-b border-border">
              <NextLink
                href={item.href}
                onClick={onClose}
                className="block py-5 font-display text-heading-sm text-ink hover:text-maroon transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {item.label}
              </NextLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

interface MobileMenuTriggerProps {
  onOpen: () => void;
  isOpen: boolean;
}

export function MobileMenuTrigger({ onOpen, isOpen }: MobileMenuTriggerProps) {
  return (
    <button
      type="button"
      className="lg:hidden flex items-center justify-center w-11 h-11 text-ink hover:text-maroon transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      onClick={onOpen}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label="Open menu"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M4 8h16M4 16h16" />
      </svg>
    </button>
  );
}
