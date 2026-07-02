import { Grid } from "@/components/ui/Grid";
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
    <div className="space-y-0">
      {members.map((member, index) => (
        <Reveal key={member.id} delay={index * 0.06}>
          <article className="py-12 border-t border-border first:border-t-0 first:pt-0">
            <Grid>
              <div className="col-span-4 sm:col-span-3 lg:col-span-3">
                <EditorialPlaceholder
                  alt={member.imageAlt}
                  aspect="portrait"
                />
              </div>
              <div className="col-span-4 sm:col-span-5 lg:col-span-8 mt-8 sm:mt-0">
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
            </Grid>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
