import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingScale =
  | "display-2xl"
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "heading-xl"
  | "heading-lg"
  | "heading-md"
  | "heading-sm";

interface HeadingProps {
  as?: HeadingLevel;
  scale?: HeadingScale;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const scaleClasses: Record<HeadingScale, string> = {
  "display-2xl": "text-display-2xl",
  "display-xl": "text-display-xl",
  "display-lg": "text-display-lg",
  "display-md": "text-display-md",
  "display-sm": "text-display-sm",
  "heading-xl": "text-heading-xl",
  "heading-lg": "text-heading-lg",
  "heading-md": "text-heading-md",
  "heading-sm": "text-heading-sm",
};

export function Heading({
  as: Component = "h2",
  scale = "heading-xl",
  children,
  className,
  id,
}: HeadingProps) {
  return (
    <Component
      id={id}
      className={cn(
        "font-display text-ink text-balance",
        scale.startsWith("display") ? "font-bold" : "font-semibold",
        scaleClasses[scale],
        className
      )}
    >
      {children}
    </Component>
  );
}
