import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { PageSubNav } from "@/components/editorial/PageSubNav";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { AchievementBlock } from "@/components/editorial/AchievementBlock";
import {
  achievementsPageMeta,
  achievementsSubNav,
  achievementsIntro,
  achievementCategories,
  studentAchievementsNote,
} from "@/content/achievements";

export const metadata = createPageMetadata(achievementsPageMeta);

export default function AchievementsPage() {
  return (
    <PageLayout>
      <PageHero
        overline={achievementsIntro.overline}
        title={achievementsIntro.title}
        lead={achievementsIntro.lead}
        breadcrumbs={[{ label: "Achievements" }]}
      />
      <PageSubNav items={achievementsSubNav} />

      <Section id="overview">
        <Container>
          <Text variant="body" muted className="max-w-prose-wide">
            {studentAchievementsNote}
          </Text>
        </Container>
      </Section>

      {achievementCategories.map((category, index) => (
        <Section
          key={category.id}
          id={category.id}
          variant={index % 2 === 1 ? "muted" : "default"}
          ariaLabelledby={`${category.id}-heading`}
        >
          <Container>
            <AchievementBlock category={category} />
          </Container>
        </Section>
      ))}
    </PageLayout>
  );
}
