import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("py-16 text-center max-w-prose mx-auto", className)}>
      <Heading as="h2" scale="heading-md">
        {title}
      </Heading>
      <Text variant="body" muted className="mt-4">
        {description}
      </Text>
      {actionLabel && actionHref && (
        <div className="mt-8">
          <Button href={actionHref}>{actionLabel}</Button>
        </div>
      )}
    </div>
  );
}
