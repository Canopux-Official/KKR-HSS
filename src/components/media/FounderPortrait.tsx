import Image from "next/image";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import { welcomeContent } from "@/content/homepage";

interface FounderPortraitProps {
  className?: string;
}

export function FounderPortrait({ className }: FounderPortraitProps) {
  const { founder } = welcomeContent;
  const { image } = founder;

  return (
    <figure className={cn("w-full max-w-md", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 1024px) 100vw, 400px"
        className="h-auto w-full"
        unoptimized
      />
      <figcaption className="mt-6 border-t border-border pt-6">
        <Text variant="body" className="font-medium text-ink">
          {founder.name}
        </Text>
        <Text variant="body-sm" muted className="mt-1">
          {founder.role}
        </Text>
        <Text variant="caption" className="mt-2 block text-stone">
          {founder.years}
        </Text>
      </figcaption>
    </figure>
  );
}
