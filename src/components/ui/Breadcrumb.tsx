import NextLink from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import type { BreadcrumbItem } from "@/types/content";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "default" | "on-dark";
}

function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const listItems = [
    { name: "Home", item: `${siteConfig.url}/` },
    ...items.map((item, index) => {
      const isLast = index === items.length - 1;
      const entry: { name: string; item?: string } = { name: item.label };
      if (item.href && !isLast) {
        entry.item = `${siteConfig.url}${item.href}`;
      }
      return entry;
    }),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      ...(entry.item ? { item: entry.item } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function Breadcrumb({
  items,
  className,
  variant = "default",
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <BreadcrumbJsonLd items={items} />
      <ol className="flex flex-wrap items-center gap-2 font-body text-body-sm">
        <li>
          <NextLink
            href="/"
            className={cn(
              "transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
              variant === "on-dark"
                ? "text-warm-white/80 hover:text-warm-white"
                : "text-stone hover:text-maroon"
            )}
          >
            Home
          </NextLink>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <span
                className={cn(
                  variant === "on-dark" ? "text-stone-light" : "text-stone"
                )}
                aria-hidden="true"
              >
                /
              </span>
              {isLast || !item.href ? (
                <span
                  className={cn(
                    variant === "on-dark" ? "text-warm-white" : "text-ink"
                  )}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <NextLink
                  href={item.href}
                  className={cn(
                    "transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
                    variant === "on-dark"
                      ? "text-warm-white/80 hover:text-warm-white"
                      : "text-maroon hover:text-maroon-dark"
                  )}
                >
                  {item.label}
                </NextLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
