"use client";

import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  lead?: string;
  className?: string;
  titleId?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  overline,
  title,
  lead,
  className,
  titleId,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  return (
    <Reveal>
      <header
        className={cn(
          align === "center" && "text-center mx-auto max-w-prose-wide",
          className
        )}
      >
        {overline && (
          <Text
            as="span"
            variant="overline"
            className={cn("block mb-3", dark && "text-gold")}
          >
            {overline}
          </Text>
        )}
        <Heading
          as="h2"
          scale="heading-xl"
          id={titleId}
          className={cn(dark && "text-warm-white")}
        >
          {title}
        </Heading>
        {lead && (
          <Text
            variant="body-lg"
            muted
            className={cn(
              "mt-4 max-w-prose",
              align === "center" && "mx-auto",
              dark && "text-stone-light"
            )}
          >
            {lead}
          </Text>
        )}
      </header>
    </Reveal>
  );
}
