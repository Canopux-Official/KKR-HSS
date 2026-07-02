import { siteConfig } from "@/config/site";
import type { AchievementCategory, SubNavItem } from "@/types/content";

export const achievementsPageMeta = {
  title: "Achievements",
  description: `Student and institutional achievements at ${siteConfig.name}, Bhadrak, Odisha.`,
  path: "/achievements",
};

export const achievementsSubNav: SubNavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Academic", href: "#academic" },
  { label: "Sports", href: "#sports" },
  { label: "Cultural", href: "#cultural" },
  { label: "Institutional", href: "#institutional" },
];

export const achievementsIntro = {
  overline: "Achievements",
  title: "Recognition earned through dedication",
  lead: "Our students distinguish themselves through consistent effort in academics, arts, and community engagement. Official results, awards, and recognitions will be published here upon confirmation from school leadership. We do not publish unverified statistics or fabricated accomplishments.",
};

export const achievementCategories: AchievementCategory[] = [
  {
    id: "academic",
    title: "Academic Excellence",
    description:
      "Board examination results and academic recognitions will be documented here with official verification.",
    items: [
      {
        id: "hsc-results",
        title: "HSC examination results",
        description:
          "Annual board examination outcomes will be published upon official release and school confirmation. [No results published until verified.]",
        year: "[Year — to be confirmed]",
      },
      {
        id: "subject-toppers",
        title: "Subject distinctions",
        description:
          "Individual subject achievements and distinctions will be listed here as confirmed by examination authorities.",
        year: "[Year — to be confirmed]",
      },
    ],
  },
  {
    id: "sports",
    title: "Sports Achievements",
    description:
      "Inter-school and district-level sports participation and recognitions.",
    items: [
      {
        id: "sports-participation",
        title: "Inter-school sports",
        description:
          "Records of student participation and achievements in inter-school athletics and sports events will be published upon confirmation.",
        year: "[Year — to be confirmed]",
      },
    ],
  },
  {
    id: "cultural",
    title: "Cultural Achievements",
    description:
      "Recognitions in literary, performing arts, and cultural competitions.",
    items: [
      {
        id: "cultural-competitions",
        title: "Cultural competitions",
        description:
          "Student achievements in debate, music, dance, and fine arts competitions will be documented here as they are officially confirmed.",
        year: "[Year — to be confirmed]",
      },
    ],
  },
  {
    id: "institutional",
    title: "Institutional Recognition",
    description:
      "Official recognitions accorded to the school as an institution.",
    items: [
      {
        id: "institutional-awards",
        title: "Institutional awards",
        description:
          "Any official awards or recognitions received by the school will be published here with proper documentation. [None listed until confirmed.]",
        year: "[Year — to be confirmed]",
      },
    ],
  },
];

export const studentAchievementsNote =
  "Individual student achievements are celebrated within the school community. Publication on this website requires consent and official verification. Families wishing to share achievements may contact the school office.";
