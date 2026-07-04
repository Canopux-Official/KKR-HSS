import { siteConfig } from "@/config/site";
import { sitePhotos } from "@/content/site-photos";
import type { ActivityItem, SubNavItem } from "@/types/content";

export const studentLifePageMeta = {
  title: "Campus Life",
  description: `Student life, clubs, sports, and cultural programmes at ${siteConfig.name}, Bhadrak, Odisha.`,
  path: "/campus-life",
};

export const studentLifeSubNav: SubNavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Clubs", href: "#clubs" },
  { label: "NCC & NSS", href: "#ncc-nss" },
  { label: "Sports", href: "#sports" },
  { label: "Annual Functions", href: "#annual-functions" },
  { label: "Cultural", href: "#cultural" },
  { label: "Competitions", href: "#competitions" },
  { label: "Development", href: "#development" },
];

export const studentLifeIntro = {
  overline: "Campus Life",
  title: "Learning beyond the classroom",
  lead: "Student life at KKR extends well beyond academic study — encompassing clubs, sports, cultural programmes, and opportunities for personal growth.",
};

export { campusLifeHeroImage } from "@/content/hero-images";

export const studentLifeOverviewImage = sitePhotos.campusBuilding;
export const sportsSectionImage = sitePhotos.selfDefenceTraining;
export const culturalSectionImage = sitePhotos.jagannathDeities;

export const studentLifeOverview = {
  paragraphs: [
    "A student's experience at KKR Women's Higher Secondary School is shaped as much by participation in school life as by classroom achievement. We encourage students to engage with co-curricular activities that develop confidence, creativity, and a sense of community.",
    "From literary societies to sports teams, from cultural performances to community service — the school calendar offers varied opportunities for students to discover interests and build lasting friendships.",
    "Details of specific programmes and societies will be updated here as confirmed by school administration.",
  ],
};

export const clubsAndSocieties: ActivityItem[] = [
  {
    id: "literary",
    title: "Literary Society",
    description:
      "Debates, essay competitions, and literary discussions provide platforms for articulate expression and critical thinking.",
  },
  {
    id: "science-club",
    title: "Science Club",
    description:
      "Projects, exhibitions, and science-related activities extend classroom learning for interested students.",
  },
  {
    id: "cultural-club",
    title: "Cultural Society",
    description:
      "Music, dance, and performing arts activities celebrate Odia culture and creative expression.",
  },
];

export const nccNss: ActivityItem[] = [
  {
    id: "ncc",
    title: "NCC",
    description:
      "[If applicable] The National Cadet Corps programme instils discipline, leadership, and civic responsibility. Participation details to be confirmed by school administration.",
  },
  {
    id: "nss",
    title: "NSS",
    description:
      "[If applicable] The National Service Scheme provides opportunities for community service and social awareness. Programme availability to be confirmed.",
  },
];

export const sportsActivities: ActivityItem[] = [
  {
    id: "pe",
    title: "Physical Education",
    description:
      "Regular physical education classes ensure all students engage in physical activity as part of the curriculum.",
  },
  {
    id: "inter-school",
    title: "Inter-school Participation",
    description:
      "Students may represent the school in inter-school sports and athletics events. [Details of sports programmes to be confirmed.]",
  },
];

export const annualFunctions: ActivityItem[] = [
  {
    id: "annual-day",
    title: "Annual Day",
    description:
      "The school's annual day celebration brings together performances, recognitions, and community gathering — a highlight of the academic calendar.",
  },
  {
    id: "founders-day",
    title: "Founder's Day / School Day",
    description:
      "[If observed] A day to reflect on the school's heritage and values. Details to be confirmed.",
  },
];

export const culturalProgrammes: ActivityItem[] = [
  {
    id: "performances",
    title: "Student Performances",
    description:
      "Dance, music, and drama performances allow students to showcase talent and celebrate cultural traditions.",
  },
  {
    id: "festivals",
    title: "Festival Celebrations",
    description:
      "Observance of national and regional festivals fosters cultural awareness and school community spirit.",
  },
];

export const competitions: ActivityItem[] = [
  {
    id: "academic",
    title: "Academic Competitions",
    description:
      "Quiz competitions, olympiads, and subject-specific contests challenge students to apply knowledge beyond the classroom.",
  },
  {
    id: "cultural-comp",
    title: "Cultural Competitions",
    description:
      "Inter-house and inter-school cultural competitions in music, dance, debate, and fine arts.",
  },
];

export const studentDevelopment: ActivityItem[] = [
  {
    id: "counselling",
    title: "Guidance & Counselling",
    description:
      "Support for academic planning and personal development. [Counselling services details to be confirmed.]",
  },
  {
    id: "career",
    title: "Career Guidance",
    description:
      "Information sessions and guidance on higher education and career pathways after higher secondary completion.",
  },
];
