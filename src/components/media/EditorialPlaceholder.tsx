import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/Text";

type PlaceholderAspect = "landscape" | "portrait" | "square" | "hero";

interface EditorialPlaceholderProps {
  alt: string;
  aspect?: PlaceholderAspect;
  className?: string;
  priority?: boolean;
  showLabel?: boolean;
}

const aspectClasses: Record<PlaceholderAspect, string> = {
  landscape: "aspect-[3/2]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  hero: "aspect-[16/9] min-h-[50vh] lg:min-h-[70vh]",
};

export function EditorialPlaceholder({
  alt,
  aspect = "landscape",
  className,
  showLabel = true,
}: EditorialPlaceholderProps) {
  return (
    <figure className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "relative w-full bg-beige-warm",
          aspectClasses[aspect]
        )}
        role="img"
        aria-label={alt}
      >
        {showLabel && (
          <div className="absolute inset-0 flex items-end p-6">
            <Text variant="caption" className="text-stone-dark max-w-xs">
              Official photography forthcoming
            </Text>
          </div>
        )}
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}
