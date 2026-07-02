import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  variant?: "default" | "gold";
}

export function Divider({ className, variant = "default" }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 h-px w-full",
        variant === "gold" ? "bg-gold" : "bg-border",
        className
      )}
      aria-hidden="true"
    />
  );
}
