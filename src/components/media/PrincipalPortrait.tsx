import Image from "next/image";
import { cn } from "@/lib/utils";
import { principalPortrait } from "@/content/principal";

interface PrincipalPortraitProps {
  className?: string;
}

export function PrincipalPortrait({ className }: PrincipalPortraitProps) {
  return (
    <figure className={cn("w-full", className)}>
      <Image
        src={principalPortrait.src}
        alt={principalPortrait.alt}
        width={principalPortrait.width}
        height={principalPortrait.height}
        sizes="(max-width: 1024px) 100vw, 520px"
        className="h-auto w-full"
        unoptimized
      />
    </figure>
  );
}
