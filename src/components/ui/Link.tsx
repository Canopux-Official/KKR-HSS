import NextLink from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  showArrow?: boolean;
  variant?: "default" | "muted" | "on-dark";
}

export function Link({
  href,
  children,
  className,
  external = false,
  showArrow = false,
  variant = "default",
}: LinkProps) {
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");

  const variantClasses = {
    default: "text-maroon hover:text-maroon-dark",
    muted: "text-ink-muted hover:text-maroon",
    "on-dark": "text-stone-light hover:text-warm-white",
  };

  const classes = cn(
    "inline-flex items-center gap-2 font-body text-body font-medium",
    "transition-[color,transform] duration-normal ease-reveal",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
    variantClasses[variant],
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {(showArrow || isExternal) && (
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            aria-hidden="true"
            className="link-arrow"
          />
        )}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes}>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={1.5}
          aria-hidden="true"
          className="link-arrow"
        />
      )}
    </NextLink>
  );
}
