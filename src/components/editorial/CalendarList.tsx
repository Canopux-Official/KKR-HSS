import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";
import type { CalendarEntry } from "@/types/content";

interface CalendarListProps {
  entries: CalendarEntry[];
}

export function CalendarList({ entries }: CalendarListProps) {
  return (
    <div className="max-w-content">
      {entries.map((entry, index) => (
        <Reveal key={entry.id} delay={index * 0.06}>
          <article className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8 py-8 border-t border-border first:border-t-0">
            <div>
              <Text as="time" variant="overline" className="text-maroon block">
                {entry.date}
              </Text>
              <Text variant="caption" className="mt-1 block">
                {entry.category}
              </Text>
            </div>
            <div>
            <Text as="h3" variant="body-lg" className="font-medium text-ink">
                {entry.title}
              </Text>
              {entry.description && (
                <Text variant="body-sm" muted className="mt-2">
                  {entry.description}
                </Text>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
