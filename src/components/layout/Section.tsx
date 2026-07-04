import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "dark";
  ariaLabelledby?: string;
}

const variantClasses = {
  default: "bg-surface",
  muted: "bg-surface-muted",
  dark: "bg-charcoal text-warm-white",
};

export function Section({
  children,
  className,
  id,
  variant = "default",
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-16 lg:py-20",
        variantClasses[variant],
        className
      )}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  );
}
