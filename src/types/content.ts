export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  image?: string;
  /** Page-specific keywords; keep minimal and relevant */
  keywords?: string[];
}

export interface ContentSection {
  id: string;
  overline?: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
}

export interface StreamItem {
  id: string;
  name: string;
  subjects: string[];
  description: string;
}

export interface DepartmentItem {
  id: string;
  name: string;
  description: string;
  head?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: string;
  qualifications?: string;
  bio?: string;
  imageAlt: string;
}

export interface CalendarEntry {
  id: string;
  date: string;
  title: string;
  description?: string;
  category: string;
}

export interface SitePhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  image?: SitePhoto;
  features?: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
}

export interface GalleryImage extends SitePhoto {
  id: string;
  aspect: "landscape" | "portrait" | "square";
  categoryId: string;
}

export interface GalleryCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
}

export interface AchievementCategory {
  id: string;
  title: string;
  description: string;
  items: AchievementItem[];
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  year?: string;
}

export interface SubNavItem {
  label: string;
  href: string;
}

export interface StatutoryCommittee {
  id: string;
  name: string;
  legalBasis: string;
  description: string;
  head: {
    name: string;
    role: string;
  };
  duties?: string[];
}
