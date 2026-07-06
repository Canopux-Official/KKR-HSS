import { siteConfig } from "@/config/site";
import { sitePhotos } from "@/content/site-photos";
import type {
  ContentSection,
  TimelineEntry,
  ValueItem,
  SubNavItem,
} from "@/types/content";

export const aboutPageMeta = {
  title: "About the School",
  description: `Learn about ${siteConfig.name} — our history, vision, mission, and commitment to women's higher secondary education in Bhadrak, Odisha.`,
  path: "/about",
};

export const aboutSubNav: SubNavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "History", href: "#history" },
  { label: "Vision & Mission", href: "#vision-mission" },
  { label: "Core Values", href: "#values" },
  { label: "Why KKR", href: "#why-kkr" },
  { label: "Timeline", href: "#timeline" },
  { label: "Statutory Committees", href: "#statutory-committees" },
  { label: "Campus", href: "#campus" },
];

export const aboutOverview: ContentSection = {
  id: "overview",
  overline: "Overview",
  title: "A school devoted to women's education",
  lead: "KKR Mahila Higher Secondary School has long served the community of Bhadrak with a steadfast commitment to learning, discipline, and the empowerment of young women.",
  paragraphs: [
    `Established in ${siteConfig.foundingYear}, the school is a Government Higher Secondary School under the Government of Odisha, providing higher secondary education in an environment shaped by care, structure, and high academic expectations. We are an institution where young women pursue their studies with purpose — preparing for CHSE (+2) examinations and for the responsibilities that follow.`,
    "Our campus in Bhadrak, Odisha, is home to a community of students, faculty, and staff united by a shared belief in the transformative power of education. We welcome families who value discipline, academic rigour, and holistic development.",
    "This page offers an introduction to who we are, what we stand for, and the environment we strive to maintain for every student.",
  ],
};

export { aboutHeroImage } from "@/content/hero-images";

export const aboutOverviewImage = sitePhotos.schoolSign;
export const aboutCampusImage = sitePhotos.campusTemple;
export const aboutHistoryImage = sitePhotos.founderBust;

export const aboutHistory: ContentSection = {
  id: "history",
  overline: "History & Legacy",
  title: "Rooted in Bhadrak, committed to generations",
  paragraphs: [
    "The history of KKR Mahila Higher Secondary School is intertwined with the educational aspirations of Bhadrak and the surrounding region. Details of the school's founding and early years will be documented here upon confirmation from school records and leadership.",
    "What endures across decades is a consistent purpose: to provide young women with access to quality higher secondary education in a setting that values both academic achievement and personal character.",
    "Former students, faculty, and community members have contributed to the school's legacy. Their stories form part of the institution's living history — one that continues to be written with each passing academic year.",
  ],
};

export const aboutVisionMission: ContentSection = {
  id: "vision-mission",
  overline: "Vision & Mission",
  title: "Our guiding principles",
  lead: "The following statements reflect the school's institutional direction. Final approved text to be confirmed by school leadership.",
};

export const visionStatement = {
  title: "Vision",
  text: "To be a leading institution for women's higher secondary education in Odisha — recognised for academic excellence, ethical conduct, and the holistic development of every student.",
};

export const missionStatement = {
  title: "Mission",
  text: "To provide rigorous higher secondary education that empowers young women with knowledge, discipline, and confidence; to nurture critical thinking and character; and to prepare students for further study, meaningful work, and responsible citizenship.",
};

export const coreValues: ValueItem[] = [
  {
    id: "excellence",
    title: "Academic Excellence",
    description:
      "We maintain high standards in teaching and learning, expecting every student to engage fully with her studies and to strive for her personal best.",
  },
  {
    id: "discipline",
    title: "Discipline",
    description:
      "Structure and self-regulation form the foundation of a productive learning environment. We cultivate habits of punctuality, respect, and responsibility.",
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "Honesty in academic work and conduct is non-negotiable. We expect students and staff to act with fairness and moral courage.",
  },
  {
    id: "empowerment",
    title: "Empowerment",
    description:
      "Education is a means of empowerment. We support young women in developing the confidence to pursue their ambitions and to contribute to society.",
  },
  {
    id: "community",
    title: "Community",
    description:
      "The school is a community of learners. We foster mutual respect, collaboration, and a sense of belonging among students, faculty, and families.",
  },
];

export const whyChooseKkr: ContentSection = {
  id: "why-kkr",
  overline: "Why Choose KKR",
  title: "An environment shaped for learning",
  paragraphs: [
    "Families choose KKR Mahila Higher Secondary School for the combination of academic structure, dedicated faculty, and a campus culture that prioritises the education of young women.",
    "Our higher secondary programme offers the Arts stream, taught by experienced educators who understand both subject matter and adolescent development.",
    "Beyond academics, students benefit from facilities for laboratory work, library research, sports, and cultural activities — supporting a well-rounded educational experience.",
    "We invite prospective families to visit the campus, speak with our faculty, and see firsthand the environment we maintain for our students.",
  ],
};

export const institutionalTimeline: TimelineEntry[] = [
  {
    id: "founding",
    year: siteConfig.foundingYear,
    title: "School established",
    description:
      "KKR Mahila Higher Secondary School begins its service to the community of Bhadrak. [Historical details to be confirmed from school records.]",
  },
  {
    id: "expansion",
    year: "[Year — to be confirmed]",
    title: "Campus development",
    description:
      "Expansion of academic facilities and infrastructure to meet growing enrolment. [Details to be confirmed.]",
  },
  {
    id: "programmes",
    year: "[Year — to be confirmed]",
    title: "Academic programmes extended",
    description:
      "Introduction or strengthening of higher secondary Arts programmes and co-curricular activities. [Details to be confirmed.]",
  },
  {
    id: "present",
    year: "Present",
    title: "Continuing the legacy",
    description:
      "The school continues to serve young women in Bhadrak with a commitment to academic excellence and holistic development.",
  },
];

export const campusOverview: ContentSection = {
  id: "campus",
  overline: "Campus Overview",
  title: "A setting for focused learning",
  paragraphs: [
    "The KKR Mahila Higher Secondary School campus provides classrooms, laboratories, a library, and spaces for assembly, sports, and cultural activities. The physical environment is maintained to support the daily rhythm of academic life.",
    "Classrooms are arranged to facilitate attentive learning. Academic facilities support subject-specific learning aligned with the curriculum. The library offers a quiet space for reading and research.",
    "Outdoor areas and sports facilities allow for physical education and recreation. Assembly and cultural spaces host the gatherings and programmes that mark the school calendar.",
    "Official campus photography and detailed facility descriptions are available on our Facilities and Gallery pages.",
  ],
};
