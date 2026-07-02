import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";
import type { StreamItem } from "@/types/content";

interface StreamListProps {
  streams: StreamItem[];
}

export function StreamList({ streams }: StreamListProps) {
  return (
    <div className="space-y-0">
      {streams.map((stream, index) => (
        <Reveal key={stream.id} delay={index * 0.06}>
          <article className="py-10 border-t border-border first:border-t-0">
            <Text as="span" variant="overline" className="block mb-3">
              Stream
            </Text>
            <Heading as="h3" scale="heading-lg">
              {stream.name}
            </Heading>
            <Text variant="body-sm" muted className="mt-3">
              {stream.subjects.join(" · ")}
            </Text>
            <Text variant="body" muted className="mt-4 max-w-prose">
              {stream.description}
            </Text>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
