/**
 * Homepage content.
 * Placeholders marked with [brackets] await official confirmation from school leadership.
 */

import { homepageGalleryPreview, sitePhotos } from "@/content/site-photos";
import type { GalleryImage } from "@/types/content";

export type HeroTitleLine = {
  text: string;
  tone: "light" | "gold";
};

export const heroContent = {
  overline: "Bhadrak, Odisha",
  title: "Educating young women. Building stronger tomorrows.",
  titleLines: [
    { text: "Educating", tone: "light" },
    { text: "Young Women.", tone: "light" },
    { text: "Building", tone: "gold" },
    { text: "Stronger", tone: "gold" },
    { text: "Tomorrows.", tone: "light" },
  ] satisfies HeroTitleLine[],
  lead: "KKR Mahila Higher Secondary School is dedicated to the education and empowerment of young women — nurturing academic rigour, character, and confidence for life beyond the classroom.",
  cta: { label: "Discover our school", href: "/about" },
  secondaryCta: { label: "Admissions", href: "/admissions" },
};

/** Homepage hero only — single front gate photograph */
export const homepageHeroImage = {
  src: "/images/hero/front-gate.png",
  alt: "Entrance gate of KKR Mahila Higher Secondary School with Odia signboard, surrounded by trees",
  width: 1024,
  height: 380,
  objectPosition: "object-center",
} as const;

export type HomepageHeroSlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
};

/** Homepage hero slideshow — original resolution per image, no cropping */
export const homepageHeroSlides: HomepageHeroSlide[] = [
  homepageHeroImage,
  {
    src: "/images/hero/first-aid-day.png",
    alt: "World First Aid Day tree-planting programme by the Youth Red Cross Unit at KKR Mahila HS School",
    width: 1024,
    height: 768,
    objectPosition: "object-[center_35%]",
  },
  {
    src: "/images/hero/yoga-day.png",
    alt: "International Day of Yoga session at Kamala Kishori Rout Mahila HS School, Kusunnagar, Bhadrak",
    width: 1024,
    height: 576,
    objectPosition: "object-center",
  },
  {
    src: "/images/hero/self-defence-training.png",
    alt: "Students demonstrating self-defence during a training programme at KKR Mahila HS School",
    width: 1024,
    height: 679,
    objectPosition: "object-center",
  },
  {
    src: "/images/hero/self-defence-certificates.png",
    alt: "Self-defence training programme certificate presentation at KKR Mahila HS School",
    width: 1024,
    height: 671,
    objectPosition: "object-center",
  },
];

export const welcomeContent = {
  overline: "Our Story",
  title: "An institution devoted to women's education",
  paragraphs: [
    "For generations, KKR Mahila Higher Secondary School has served the community of Bhadrak with a steadfast commitment to learning. Founded in {foundingYear}, the school has grown into a place where young women pursue higher secondary education in an environment shaped by care, structure, and high expectations.",
    "We believe education is not merely the transfer of knowledge, but the cultivation of judgment, resilience, and integrity. Our students are prepared not only for CHSE (+2) Council examinations, but for the responsibilities and opportunities that await them.",
    "This is a school with roots in tradition and eyes on the future — where every student is seen, supported, and challenged to grow.",
  ],
  link: { label: "Read our full story", href: "/about" },
  founder: {
    name: "Late Kishori Kinkar Rout",
    role: "Founder",
    years: "1935–1957",
    image: sitePhotos.founderBust,
  },
};

export const principalContent = {
  overline: "From the Principal",
  title: "A message of welcome",
  quote:
    "At KKR Mahila Higher Secondary School, we hold a simple conviction: that every young woman who walks through our gates carries extraordinary potential. Our role is to provide the discipline, the guidance, and the academic foundation that allows that potential to flourish.",
  excerpt:
    "It is my privilege to lead an institution that has long been a pillar of women's education in Bhadrak. We invite you to visit our campus, meet our faculty, and discover what makes this school a place of lasting learning.",
  name: "Sri Rajendra Kumar Panda",
  title_: "Principal",
  link: { label: "Read the full message", href: "/about/leadership" },
};

export const academicsContent = {
  overline: "Academics",
  title: "Rigorous learning across disciplines",
  lead: "Our higher secondary programme offers the Arts stream recognised by the Council of Higher Secondary Education (CHSE), Odisha — taught by experienced faculty who combine subject mastery with genuine care for student development.",
  streams: [
    {
      name: "Arts",
      description:
        "History, Political Science, Economics, Odia, Logic, Education, and English — developing critical thinking, cultural awareness, and articulate expression.",
    },
  ],
  link: { label: "Explore academics", href: "/academics" },
};

export const campusLifeContent = {
  overline: "Campus Life",
  title: "A community built on shared purpose",
  paragraphs: [
    "Beyond the classroom, KKR Mahila Higher Secondary School is a living community. Students participate in cultural programmes, sports, literary activities, and community service — experiences that complement academic study and build lasting friendships.",
    "Our campus provides spaces for learning, reflection, and gathering. From the library to the assembly hall, every corner of the school is designed to support the daily rhythm of disciplined, purposeful student life.",
  ],
  link: { label: "Experience campus life", href: "/campus-life" },
};

export { chseExamResults } from "@/content/achievements";

export const achievementsContent = {
  overline: "Student Life & Accomplishments",
  title: "Recognition earned through dedication",
  lead: "Our students distinguish themselves through consistent effort in academics, arts, and community engagement — including strong performances in the Council of Higher Secondary Education, Odisha (+2 CHSE) examinations.",
  highlights: [
    {
      title: "Cultural programmes",
      description:
        "Annual celebrations, literary competitions, and performing arts events provide platforms for creative expression and school spirit.",
    },
    {
      title: "Community engagement",
      description:
        "Students participate in outreach and service activities that connect classroom learning with responsibility to the wider community of Bhadrak.",
    },
  ],
};

export const galleryContent = {
  overline: "Gallery",
  title: "Life on campus",
  lead: "Photographs from classrooms, events, and the grounds that students call home.",
  link: { label: "View full gallery", href: "/campus-life/gallery" },
  images: homepageGalleryPreview as GalleryImage[],
};

export const admissionsContent = {
  overline: "Admissions",
  title: "Apply through SAMS Odisha",
  paragraphs: [
    "KKR Mahila Higher Secondary School is a Government Higher Secondary School under the Government of Odisha. Admission to Class XI (+2) is not through a separate school application — students apply centrally via SAMS (Student Academic Management System) and are allotted seats based on Class 10 results.",
    "In the SAMS Common Application Form, students select their preferred colleges and schools across Odisha. Those allotted to KKR Mahila complete admission formalities here within the dates notified on the SAMS portal.",
  ],
  details: [
    { label: "How to apply", value: "SAMS Odisha +2 e-Admission (online)" },
    { label: "Selection", value: "Merit-based allotment as per Class 10 results" },
    { label: "Enquiries", value: "Contact the school office during working hours" },
  ],
  link: { label: "Learn about admissions", href: "/admissions" },
};

export const educativeQuote = {
  text: "The highest education is that which does not merely give us information, but makes our life in harmony with all existence.",
  attribution: "Rabindranath Tagore",
};
