import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "text";
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  href,
  children,
  className,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-maroon text-warm-white hover:bg-maroon-dark border border-maroon",
    secondary:
      "bg-transparent text-maroon border border-maroon hover:bg-maroon hover:text-warm-white",
    text: "bg-transparent text-maroon hover:text-maroon-dark border-transparent px-0",
  };

  const classes = cn(
    "inline-flex items-center justify-center px-6 py-3",
    "font-body text-body font-medium",
    "transition-[color,background-color,border-color,transform,box-shadow] duration-normal ease-reveal",
    "motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
    variants[variant],
    disabled && "pointer-events-none opacity-60",
    className
  );

  if (href) {
    return (
      <NextLink href={href} className={classes}>
        {children}
      </NextLink>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
