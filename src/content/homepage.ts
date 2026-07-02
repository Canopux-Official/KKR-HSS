/**
 * Homepage content.
 * Placeholders marked with [brackets] await official confirmation from school leadership.
 */

import { homepageGalleryPreview } from "@/content/site-photos";
import type { GalleryImage } from "@/types/content";

export const heroContent = {
  overline: "Bhadrak, Odisha",
  title: "Where discipline meets excellence",
  lead: "KKR Women's Higher Secondary School is dedicated to the education and empowerment of young women — nurturing academic rigour, character, and confidence for life beyond the classroom.",
  cta: { label: "Discover our school", href: "/about" },
  secondaryCta: { label: "Admissions", href: "/admissions" },
};

export const welcomeContent = {
  overline: "Our Story",
  title: "An institution devoted to women's education",
  paragraphs: [
    "For generations, KKR Women's Higher Secondary School has served the community of Bhadrak with a steadfast commitment to learning. Founded in {foundingYear}, the school has grown into a place where young women pursue higher secondary education in an environment shaped by care, structure, and high expectations.",
    "We believe education is not merely the transfer of knowledge, but the cultivation of judgment, resilience, and integrity. Our students are prepared not only for council examinations, but for the responsibilities and opportunities that await them.",
    "This is a school with roots in tradition and eyes on the future — where every student is seen, supported, and challenged to grow.",
  ],
  link: { label: "Read our full story", href: "/about" },
  founder: {
    name: "Late Kishori Kinkar Rout",
    role: "Founder",
    years: "1935–1957",
    image: {
      src: "/images/about/founder-bust.png",
      alt: "Bust of Late Kishori Kinkar Rout, founder of KKR Women's Higher Secondary School",
      width: 687,
      height: 1024,
    },
  },
};

export const principalContent = {
  overline: "From the Principal",
  title: "A message of welcome",
  quote:
    "At KKR Women's Higher Secondary School, we hold a simple conviction: that every young woman who walks through our gates carries extraordinary potential. Our role is to provide the discipline, the guidance, and the academic foundation that allows that potential to flourish.",
  excerpt:
    "It is my privilege to lead an institution that has long been a pillar of women's education in Bhadrak. We invite you to visit our campus, meet our faculty, and discover what makes this school a place of lasting learning.",
  name: "Sri Rajendra Kumar Panda",
  title_: "Principal",
  link: { label: "Read the full message", href: "/about/leadership" },
};

export const academicsContent = {
  overline: "Academics",
  title: "Rigorous learning across disciplines",
  lead: "Our higher secondary programme offers the Arts stream recognised by the Board of Secondary Education, Odisha — taught by experienced faculty who combine subject mastery with genuine care for student development.",
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
    "Beyond the classroom, KKR Women's Higher Secondary School is a living community. Students participate in cultural programmes, sports, literary activities, and community service — experiences that complement academic study and build lasting friendships.",
    "Our campus provides spaces for learning, reflection, and gathering. From the library to the assembly hall, every corner of the school is designed to support the daily rhythm of disciplined, purposeful student life.",
  ],
  link: { label: "Experience campus life", href: "/campus-life" },
};

export const achievementsContent = {
  overline: "Student Life & Accomplishments",
  title: "Recognition earned through dedication",
  lead: "Our students distinguish themselves through consistent effort in academics, arts, and community engagement. Official results, awards, and recognitions will be published here upon confirmation from school leadership.",
  highlights: [
    {
      title: "Board examinations",
      description:
        "Students prepare for the Higher Secondary Certificate examination under the guidance of dedicated faculty, with structured revision and individual support.",
    },
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
  title: "Begin your journey with us",
  paragraphs: [
    "KKR Women's Higher Secondary School welcomes applications from students seeking a disciplined, supportive environment for higher secondary education. The admissions process is designed to be clear and accessible for families.",
    "We encourage prospective students and their guardians to visit the campus, speak with our faculty, and understand the academic pathways available before submitting an application.",
  ],
  details: [
    { label: "Application period", value: "[Dates — to be confirmed]" },
    { label: "Eligibility", value: "Completion of secondary education as per board requirements" },
    { label: "Enquiries", value: "Contact the school office during working hours" },
  ],
  link: { label: "Learn about admissions", href: "/admissions" },
};

export const ctaContent = {
  title: "We welcome your interest",
  lead: "Whether you are a prospective student, a parent, or a member of the community, we invite you to learn more about KKR Women's Higher Secondary School and the education we offer.",
  primary: { label: "Contact us", href: "/contact" },
  secondary: { label: "About the school", href: "/about" },
};
