import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
}

export function Select({ className, hasError, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "w-full px-4 py-3 font-body text-body text-ink bg-surface-elevated",
        "border transition-colors duration-fast",
        hasError ? "border-error" : "border-border focus:border-maroon",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
