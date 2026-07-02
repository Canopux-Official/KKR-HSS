import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export function Input({ className, hasError, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full px-4 py-3 font-body text-body text-ink bg-surface-elevated",
        "border transition-colors duration-fast",
        hasError ? "border-error" : "border-border focus:border-maroon",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        "placeholder:text-stone",
        className
      )}
      {...props}
    />
  );
}
