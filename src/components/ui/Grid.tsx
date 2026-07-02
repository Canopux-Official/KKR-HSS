import { cn } from "@/lib/utils";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export function Grid({ children, className }: GridProps) {
  return <div className={cn("grid-editorial", className)}>{children}</div>;
}
