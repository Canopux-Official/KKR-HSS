import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SitePhoto } from "@/types/content";

type EditorialAspect = "landscape" | "portrait" | "square";

interface EditorialImageProps {
  photo: SitePhoto;
  aspect?: EditorialAspect;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

const aspectClasses: Record<EditorialAspect, string> = {
  landscape: "aspect-[3/2]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function EditorialImage({
  photo,
  aspect,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
}: EditorialImageProps) {
  if (aspect) {
    return (
      <figure className={cn("relative w-full overflow-hidden", className)}>
        <div className={cn("relative w-full", aspectClasses[aspect])}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={sizes}
            className="h-full w-full object-cover"
            style={
              photo.objectPosition
                ? { objectPosition: photo.objectPosition }
                : undefined
            }
            unoptimized
            priority={priority}
          />
        </div>
      </figure>
    );
  }

  return (
    <figure className={cn("w-full", className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        className="h-auto w-full"
        style={
          photo.objectPosition
            ? { objectPosition: photo.objectPosition }
            : undefined
        }
        unoptimized
        priority={priority}
      />
    </figure>
  );
}
