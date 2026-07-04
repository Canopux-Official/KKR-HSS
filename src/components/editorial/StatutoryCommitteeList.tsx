import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";
import type { StatutoryCommittee } from "@/types/content";

interface StatutoryCommitteeListProps {
  committees: StatutoryCommittee[];
  compact?: boolean;
}

export function StatutoryCommitteeList({
  committees,
  compact = false,
}: StatutoryCommitteeListProps) {
  return (
    <div className="space-y-0 divide-y divide-border border-t border-border">
      {committees.map((committee, index) => (
        <Reveal key={committee.id} delay={index * 0.06}>
          <article className="py-10 first:pt-0">
            <Text as="span" variant="caption" className="block text-maroon">
              {committee.legalBasis}
            </Text>
            <Heading as="h3" scale={compact ? "heading-md" : "heading-lg"} className="mt-2">
              {committee.name}
            </Heading>

            {!compact && (
              <Text variant="body" muted className="mt-4 max-w-prose-wide">
                {committee.description}
              </Text>
            )}

            <dl className="mt-6 grid gap-1 sm:grid-cols-[auto_1fr] sm:gap-x-6 sm:gap-y-1 max-w-prose-wide">
              <Text as="dt" variant="body-sm" className="font-medium text-ink">
                {committee.head.role}
              </Text>
              <Text as="dd" variant="body-sm" muted>
                {committee.head.name}
              </Text>
            </dl>

            {!compact && committee.duties && committee.duties.length > 0 && (
              <div className="mt-6">
                <Text as="span" variant="body-sm" className="font-medium text-ink">
                  Key responsibilities
                </Text>
                <ul className="mt-3 space-y-2 max-w-prose-wide">
                  {committee.duties.map((duty) => (
                    <li key={duty}>
                      <Text variant="body-sm" muted>
                        {duty}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
