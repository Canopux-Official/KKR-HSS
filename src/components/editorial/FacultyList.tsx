import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { EditorialPlaceholder } from "@/components/media/EditorialPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import type { FacultyMember } from "@/types/content";

interface FacultyListProps {
  members: FacultyMember[];
}

export function FacultyList({ members }: FacultyListProps) {
  return (
    <div
      className="
        grid gap-x-6 gap-y-10
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {members.map((member, index) => (
        <Reveal key={member.id} delay={index * 0.06}>
          <article className="flex flex-col">
            <EditorialPlaceholder
              alt={member.imageAlt}
              aspect="portrait"
            />
            <div className="mt-4">
              <Text as="span" variant="overline" className="block mb-2">
                {member.department}
              </Text>
              <Heading as="h3" scale="heading-lg">
                {member.name}
              </Heading>
              <Text variant="body-sm" muted className="mt-1">
                {member.role}
              </Text>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}