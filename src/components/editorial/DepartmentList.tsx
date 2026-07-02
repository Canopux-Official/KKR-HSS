import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";
import type { DepartmentItem } from "@/types/content";

interface DepartmentListProps {
  departments: DepartmentItem[];
}

export function DepartmentList({ departments }: DepartmentListProps) {
  return (
    <div className="space-y-0">
      {departments.map((dept, index) => (
        <Reveal key={dept.id} delay={index * 0.06}>
          <article className="py-10 border-t border-border first:border-t-0">
            <Heading as="h3" scale="heading-lg">
              {dept.name}
            </Heading>
            {dept.head && (
              <Text variant="body-sm" muted className="mt-2">
                Head: {dept.head}
              </Text>
            )}
            <Text variant="body" muted className="mt-4 max-w-prose">
              {dept.description}
            </Text>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
