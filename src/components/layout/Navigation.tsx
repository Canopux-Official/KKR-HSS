"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { primaryNavigation } from "@/config/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {primaryNavigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <li key={item.href}>
              <NextLink
                href={item.href}
                className={cn(
                  "relative py-1 font-body text-body font-medium transition-colors duration-fast",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus",
                  "group",
                  isActive ? "text-maroon" : "text-ink hover:text-maroon"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-fast",
                    isActive ? "w-full h-0.5 bg-maroon" : "w-0 group-hover:w-full"
                  )}
                  aria-hidden="true"
                />
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
