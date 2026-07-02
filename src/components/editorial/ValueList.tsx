import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";
import type { ValueItem } from "@/types/content";

interface ValueListProps {
  items: ValueItem[];
}

export function ValueList({ items }: ValueListProps) {
  return (
    <dl className="space-y-0">
      {items.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.06}>
          <div className="py-8 border-t border-border first:border-t-0">
            <Text as="dt" variant="overline" className="block mb-3">
              {String(index + 1).padStart(2, "0")}
            </Text>
            <div>
              <Heading as="h3" scale="heading-md" className="mb-3">
                {item.title}
              </Heading>
              <Text variant="body" muted className="max-w-prose">
                {item.description}
              </Text>
            </div>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}
