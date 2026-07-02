import { siteConfig } from "@/config/site";
import { galleryImages, sitePhotos } from "@/content/site-photos";
import type { GalleryCategory } from "@/types/content";

export const galleryPageMeta = {
  title: "Gallery",
  description: `Photographs of campus life, events, and activities at ${siteConfig.name}, Bhadrak, Odisha.`,
  path: "/campus-life/gallery",
};

export const galleryIntro = {
  overline: "Gallery",
  title: "Life at KKR",
  lead: "Photographs from across the campus — classrooms, library, events, and the grounds that students call home.",
};

export const galleryHeroImage = {
  src: sitePhotos.campusLawns.src,
  alt: "Campus lawns and classroom building surrounded by trees at KKR Women's Higher Secondary School",
  width: sitePhotos.campusLawns.width,
  height: sitePhotos.campusLawns.height,
  objectPosition: "object-[center_40%]",
} as const;

export const galleryCategories: GalleryCategory[] = [
  {
    id: "campus",
    slug: "campus",
    title: "Campus",
    description: "Buildings, grounds, and the physical environment of the school.",
  },
  {
    id: "academics",
    slug: "academics",
    title: "Academics",
    description: "Classrooms, laboratories, and learning in session.",
  },
  {
    id: "events",
    slug: "events",
    title: "Events",
    description: "Annual day, celebrations, and school gatherings.",
  },
  {
    id: "sports",
    slug: "sports",
    title: "Sports & Activities",
    description: "Physical education, sports, and outdoor activities.",
  },
  {
    id: "cultural",
    slug: "cultural",
    title: "Cultural Programmes",
    description: "Performances, festivals, and creative expression.",
  },
];

export { galleryImages };

export function getImagesByCategory(categoryId: string) {
  return galleryImages.filter((img) => img.categoryId === categoryId);
}
