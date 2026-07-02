import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export function Textarea({ className, hasError, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full px-4 py-3 font-body text-body text-ink bg-surface-elevated",
        "border transition-colors duration-fast resize-y min-h-[120px]",
        hasError ? "border-error" : "border-border focus:border-maroon",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        "placeholder:text-stone",
        className
      )}
      {...props}
    />
  );
}
