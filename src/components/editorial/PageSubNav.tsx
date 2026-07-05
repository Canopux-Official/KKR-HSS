import NextLink from "next/link";
import { cn } from "@/lib/utils";
import type { SubNavItem } from "@/types/content";

interface PageSubNavProps {
  items: SubNavItem[];
  className?: string;
}

export function PageSubNav({ items, className }: PageSubNavProps) {
  return (
    <nav
      aria-label="Page sections"
      className={cn(
        "border-y border-border bg-surface sticky top-[72px] lg:top-20 z-elevated",
        className
      )}
    >
      <div className="container-editorial">
        <ul className="flex gap-6 lg:gap-8 overflow-x-auto py-3 scrollbar-none -mx-gutter-sm px-gutter-sm sm:mx-0 sm:px-0">
          {items.map((item) => (
            <li key={item.href} className="shrink-0">
              <NextLink
                href={item.href}
                className="font-body text-body-sm font-medium text-ink-muted hover:text-maroon whitespace-nowrap transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {item.label}
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
