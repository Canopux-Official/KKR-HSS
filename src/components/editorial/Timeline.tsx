import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";
import type { TimelineEntry } from "@/types/content";

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="relative">
      {entries.map((entry, index) => (
        <Reveal key={entry.id} delay={index * 0.06}>
          <li className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8 py-8 border-t border-border first:border-t-0">
            <div>
              <Text as="time" variant="overline" className="text-maroon block">
                {entry.year}
              </Text>
            </div>
            <div>
              <Heading as="h3" scale="heading-md">
                {entry.title}
              </Heading>
              <Text variant="body" muted className="mt-3 max-w-prose">
                {entry.description}
              </Text>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
