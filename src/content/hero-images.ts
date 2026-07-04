import type { PageHeroImage } from "@/components/layout/PageHero";
import { HERO_HEIGHT, HERO_WIDTH } from "@/lib/hero";

const HERO_BASE = "/images/heroes";

function pageHero(
  slug: string,
  alt: string,
  objectPosition = "object-center"
): PageHeroImage {
  return {
    src: `${HERO_BASE}/${slug}.png`,
    alt,
    width: HERO_WIDTH,
    height: HERO_HEIGHT,
    objectPosition,
  };
}

export const homeHeroImage = pageHero(
  "home",
  "Entrance gateway of KKR Women's Higher Secondary School, Bhadrak, surrounded by trees",
  "object-[center_35%]"
);

export const aboutHeroImage = pageHero(
  "about",
  "Faculty and staff at KKR Women's Higher Secondary School",
  "object-[center_40%]"
);

export const academicsHeroImage = pageHero(
  "academics",
  "Classroom at KKR Women's Higher Secondary School with chalkboard and whiteboards"
);

export const facultyHeroImage = pageHero(
  "faculty",
  "Faculty and staff at KKR Women's Higher Secondary School",
  "object-[center_40%]"
);

export const admissionsHeroImage = pageHero(
  "admissions",
  "School signboard of KKR Women's Higher Secondary School, Krushna Nagar, Barapada, Bhadrak",
  "object-[center_40%]"
);

export const campusLifeHeroImage = pageHero(
  "campus-life",
  "KKR Women's Higher Secondary School campus courtyard with classroom building, trees, and red staircase",
  "object-[center_45%]"
);

export const contactHeroImage = pageHero(
  "contact",
  "Tiled walkway through trees and landscaped grounds on the KKR Women's Higher Secondary School campus",
  "object-[center_45%]"
);

export const galleryHeroImage = pageHero(
  "gallery",
  "Campus lawns and classroom building surrounded by trees at KKR Women's Higher Secondary School",
  "object-[center_40%]"
);

export const facilitiesHeroImage = pageHero(
  "facilities",
  "School library bookshelves with reference and lending collections"
);

export const leadershipHeroImage = pageHero(
  "leadership",
  "Principal Sri Rajendra Kumar Panda in the school office",
  "object-[center_40%]"
);

export const visionHeroImage = pageHero(
  "vision",
  "School entrance sign with campus temple in the background"
);

export const heritageHeroImage = pageHero(
  "heritage",
  "Campus entrance gate established in 1994, KKR Women's Higher Secondary School",
  "object-[center_45%]"
);

export const departmentsHeroImage = pageHero(
  "departments",
  "Arts classroom with chalkboard at KKR Women's HS School, Kusunnagar"
);

export const examinationsHeroImage = pageHero(
  "examinations",
  "Teaching wall with chalkboard and whiteboards at KKR Women's HS School"
);

export const feesHeroImage = pageHero(
  "fees",
  "Official entrance sign for Kamala Kishori Raut Women's Higher Secondary School",
  "object-[center_40%]"
);

export const faqsHeroImage = pageHero(
  "faqs",
  "Official entrance sign for Kamala Kishori Raut Women's Higher Secondary School",
  "object-[center_40%]"
);

export const downloadsHeroImage = pageHero(
  "downloads",
  "Library reading room with polished wooden table and book cabinets"
);

export const achievementsHeroImage = pageHero(
  "achievements",
  "Self-defence training programme certificate presentation ceremony",
  "object-[center_40%]"
);
