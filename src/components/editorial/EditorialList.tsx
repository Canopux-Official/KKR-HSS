import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";
import type { ActivityItem } from "@/types/content";

interface EditorialListProps {
  items: ActivityItem[];
  ordered?: boolean;
}

export function EditorialList({ items, ordered = false }: EditorialListProps) {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag className="space-y-0">
      {items.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.06}>
          <li className="py-8 border-t border-border first:border-t-0">
            <Heading as="h3" scale="heading-md">
              {item.title}
            </Heading>
            <Text variant="body" muted className="mt-3 max-w-prose">
              {item.description}
            </Text>
          </li>
        </Reveal>
      ))}
    </ListTag>
  );
}
