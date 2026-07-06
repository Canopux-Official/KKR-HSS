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

export const chseExamResults = {
  examination: "+2 CHSE Council Examinations",
  summary:
    "36 students out of 128 secured 1st division in the +2 CHSE Council examinations.",
  firstDivision: {
    secured: "36",
    total: 128,
    label: "students secured 1st division",
  },
  toppers: [
    {
      name: "Prativa Panda",
      marks: "521",
      note: "Highest in school",
    },
    {
      name: "Laxmi Balmuch",
      marks: "498",
    },
  ],
} as const;

export const achievementsIntro = {
  overline: "Achievements",
  title: "Recognition earned through dedication",
  lead: "Our students distinguish themselves through consistent effort in academics, arts, and community engagement — including strong performances in the Council of Higher Secondary Education, Odisha (+2 CHSE) examinations.",
};

export const achievementCategories: AchievementCategory[] = [
  {
    id: "academic",
    title: "Academic Excellence",
    description:
      "CHSE (+2) Council examination results and academic recognitions, as confirmed by school leadership.",
    items: [
      {
        id: "hsc-results",
        title: chseExamResults.examination,
        description: chseExamResults.summary,
        year: "Latest session",
      },
      {
        id: "school-toppers",
        title: "School toppers",
        description: chseExamResults.toppers
          .map((topper) => {
            const note =
              "note" in topper && topper.note
                ? ` (${topper.note.toLowerCase()})`
                : "";
            return `${topper.name} — ${topper.marks} marks${note}`;
          })
          .join(". "),
        year: "Latest session",
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
