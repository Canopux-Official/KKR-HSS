import { cn } from "@/lib/utils";

type TextVariant =
  | "body-xl"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption"
  | "overline";

interface TextProps {
  as?: "p" | "span" | "div" | "time" | "figcaption" | "dt" | "dd" | "h2" | "h3";
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}

const variantClasses: Record<TextVariant, string> = {
  "body-xl": "text-body-xl leading-[var(--leading-body-xl)]",
  "body-lg": "text-body-lg leading-[var(--leading-body-lg)]",
  body: "text-body leading-[var(--leading-body)]",
  "body-sm": "text-body-sm leading-[var(--leading-body-sm)]",
  caption: "text-caption leading-[var(--leading-caption)]",
  overline:
    "text-overline leading-[var(--leading-overline)] uppercase tracking-[var(--tracking-overline)] font-semibold",
};

export function Text({
  as: Component = "p",
  variant = "body",
  children,
  className,
  muted = false,
  id,
}: TextProps) {
  return (
    <Component
      id={id}
      className={cn(
        "font-body text-pretty",
        variantClasses[variant],
        muted ? "text-ink-muted" : "text-ink",
        variant === "overline" && "text-gold",
        variant === "caption" && "text-stone",
        className
      )}
    >
      {children}
    </Component>
  );
}
