import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";
import type { AchievementCategory } from "@/types/content";

interface AchievementBlockProps {
  category: AchievementCategory;
}

export function AchievementBlock({ category }: AchievementBlockProps) {
  return (
    <section id={category.id} className="scroll-mt-32">
      <Heading as="h2" scale="heading-xl">
        {category.title}
      </Heading>
      <Text variant="body" muted className="mt-4 max-w-prose">
        {category.description}
      </Text>
      <ul className="mt-10 space-y-0">
        {category.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.06}>
            <li className="py-8 border-t border-border first:border-t-0">
              <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-4 sm:gap-8">
                {item.year && (
                  <Text as="span" variant="overline" className="text-stone sm:pt-1">
                    {item.year}
                  </Text>
                )}
                <div className={item.year ? "" : "sm:col-span-2"}>
                  <Heading as="h3" scale="heading-md">
                    {item.title}
                  </Heading>
                  <Text variant="body" muted className="mt-3 max-w-prose">
                    {item.description}
                  </Text>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
