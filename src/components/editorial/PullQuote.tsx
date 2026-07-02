import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/Text";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  role?: string;
  className?: string;
}

export function PullQuote({
  quote,
  attribution,
  role,
  className,
}: PullQuoteProps) {
  return (
    <figure className={cn("relative", className)}>
      <div
        className="absolute -left-1 top-0 font-display text-display-sm text-gold leading-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <blockquote className="pl-8 border-l-2 border-gold">
        <Text
          as="p"
          variant="body-xl"
          className="font-accent italic text-ink max-w-prose-wide"
        >
          {quote}
        </Text>
        {(attribution || role) && (
          <figcaption className="mt-6">
            {attribution && (
              <Text as="span" variant="body-sm" className="font-medium text-ink">
                {attribution}
              </Text>
            )}
            {role && (
              <Text as="span" variant="caption" className="block mt-1">
                {role}
              </Text>
            )}
          </figcaption>
        )}
      </blockquote>
    </figure>
  );
}
