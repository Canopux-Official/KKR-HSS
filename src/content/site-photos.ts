import type { GalleryImage, SitePhoto } from "@/types/content";

/** Shared school photographs used across gallery and editorial sections. */
export const sitePhotos = {
  staffGroup: {
    src: "/images/gallery/staff-group.png",
    alt: "KKR Women's Higher Secondary School staff and leadership",
    width: 1024,
    height: 768,
  },
  libraryMediaWall: {
    src: "/images/gallery/library-media-wall.png",
    alt: "Classroom with whiteboards, display cabinet, and digital teaching screen",
    width: 1024,
    height: 409,
  },
  libraryBookshelves: {
    src: "/images/gallery/library-bookshelves.png",
    alt: "School library bookshelves with reference and lending collections",
    width: 586,
    height: 1024,
  },
  classroomBoards: {
    src: "/images/gallery/classroom-boards.png",
    alt: "Teaching wall with chalkboard and whiteboards at KKR Women's HS School",
    width: 1024,
    height: 430,
  },
  selfDefenceTraining: {
    src: "/images/gallery/self-defence-training.png",
    alt: "Students practising self-defence during a government training programme",
    width: 1024,
    height: 679,
  },
  smartClassroom: {
    src: "/images/gallery/smart-classroom.png",
    alt: "Smart classroom with interactive display and teaching boards",
    width: 1024,
    height: 333,
  },
  selfDefenceCertificates: {
    src: "/images/gallery/self-defence-certificates.png",
    alt: "Self-defence training programme certificate presentation ceremony",
    width: 1024,
    height: 671,
  },
  campusBuilding: {
    src: "/images/gallery/campus-building.png",
    alt: "Main school building with courtyard and red staircase, Kusunnagar",
    width: 1024,
    height: 388,
  },
  schoolSign: {
    src: "/images/gallery/school-sign.png",
    alt: "Official entrance sign for Kamala Kishori Raut Women's Higher Secondary School",
    width: 1024,
    height: 384,
  },
  founderBust: {
    src: "/images/gallery/founder-bust.png",
    alt: "Memorial bust of founder Late Kishori Kinkar Rout on the school campus",
    width: 687,
    height: 1024,
  },
  chalkboardClassroom: {
    src: "/images/gallery/chalkboard-classroom.png",
    alt: "Arts classroom with chalkboard at KKR Women's HS School, Kusunnagar",
    width: 1024,
    height: 384,
  },
  libraryReadingRoom: {
    src: "/images/gallery/library-reading-room.png",
    alt: "Library reading room with polished wooden table and book cabinets",
    width: 1024,
    height: 452,
  },
  jagannathDeities: {
    src: "/images/gallery/jagannath-deities.png",
    alt: "Traditional depiction of Lord Jagannath, Balabhadra, and Subhadra",
    width: 1024,
    height: 627,
  },
  principalOffice: {
    src: "/images/gallery/principal-office.png",
    alt: "Principal Sri Rajendra Kumar Panda in the school office",
    width: 1024,
    height: 460,
  },
  schoolSignTemple: {
    src: "/images/gallery/school-sign-temple.png",
    alt: "School entrance sign with campus temple in the background",
    width: 1024,
    height: 417,
  },
  libraryOffice: {
    src: "/images/gallery/library-office.png",
    alt: "Library office with book cabinets and study table",
    width: 1024,
    height: 538,
  },
  campusEntranceGate: {
    src: "/images/gallery/campus-entrance-gate.png",
    alt: "Campus entrance gate established in 1994, KKR Women's Higher Secondary School",
    width: 1024,
    height: 380,
  },
  campusCourtyard: {
    src: "/images/gallery/campus-courtyard.png",
    alt: "School courtyard with classroom building and landscaped trees",
    width: 1024,
    height: 499,
  },
  campusTemple: {
    src: "/images/gallery/campus-temple.png",
    alt: "Campus temple shrine within the school grounds",
    width: 494,
    height: 1024,
  },
  campusLawns: {
    src: "/images/gallery/campus-lawns.png",
    alt: "Campus lawns and classroom building surrounded by trees",
    width: 1024,
    height: 652,
  },
  yogaDayStretch: {
    src: "/images/gallery/yoga-day-stretch.png",
    alt: "Staff and students practising yoga on International Day of Yoga at KKR Women's HS School",
    width: 1024,
    height: 588,
  },
  yogaDaySession: {
    src: "/images/gallery/yoga-day-session.png",
    alt: "International Day of Yoga session led by an instructor at Kamala Kishori Rout Mahila HS School",
    width: 1024,
    height: 576,
  },
  campusStaircase: {
    src: "/images/gallery/campus-staircase.png",
    alt: "Outdoor red staircase and two-storey classroom building on the school campus",
    width: 768,
    height: 1024,
  },
  campusWalkway: {
    src: "/images/gallery/campus-walkway.png",
    alt: "Tiled walkway through trees and landscaped grounds on the school campus",
    width: 768,
    height: 1024,
  },
  firstAidDayBanner: {
    src: "/images/gallery/first-aid-day-banner.png",
    alt: "World First Aid Day programme organised by the Youth Red Cross Unit at KKR Women's HS School",
    width: 1024,
    height: 768,
  },
  firstAidDayTreePlanting: {
    src: "/images/gallery/first-aid-day-tree-planting.png",
    alt: "Tree-planting activity during World First Aid Day celebrations on the school campus",
    width: 1024,
    height: 768,
  },
} as const satisfies Record<string, SitePhoto>;

function galleryEntry(
  id: string,
  photo: SitePhoto,
  aspect: GalleryImage["aspect"],
  categoryId: string
): GalleryImage {
  return { id, ...photo, aspect, categoryId };
}

export const galleryImages: GalleryImage[] = [
  galleryEntry("g-campus-building", sitePhotos.campusBuilding, "landscape", "campus"),
  galleryEntry("g-campus-entrance", sitePhotos.campusEntranceGate, "landscape", "campus"),
  galleryEntry("g-campus-courtyard", sitePhotos.campusCourtyard, "landscape", "campus"),
  galleryEntry("g-campus-lawns", sitePhotos.campusLawns, "landscape", "campus"),
  galleryEntry("g-school-sign", sitePhotos.schoolSign, "landscape", "campus"),
  galleryEntry("g-school-sign-temple", sitePhotos.schoolSignTemple, "landscape", "campus"),
  galleryEntry("g-staff-group", sitePhotos.staffGroup, "landscape", "campus"),
  galleryEntry("g-founder-bust", sitePhotos.founderBust, "portrait", "campus"),
  galleryEntry("g-principal-office", sitePhotos.principalOffice, "landscape", "campus"),
  galleryEntry("g-chalkboard-classroom", sitePhotos.chalkboardClassroom, "landscape", "academics"),
  galleryEntry("g-classroom-boards", sitePhotos.classroomBoards, "landscape", "academics"),
  galleryEntry("g-smart-classroom", sitePhotos.smartClassroom, "landscape", "academics"),
  galleryEntry("g-library-bookshelves", sitePhotos.libraryBookshelves, "portrait", "academics"),
  galleryEntry("g-library-reading-room", sitePhotos.libraryReadingRoom, "landscape", "academics"),
  galleryEntry("g-library-office", sitePhotos.libraryOffice, "landscape", "academics"),
  galleryEntry("g-library-media-wall", sitePhotos.libraryMediaWall, "landscape", "academics"),
  galleryEntry("g-self-defence-certificates", sitePhotos.selfDefenceCertificates, "landscape", "events"),
  galleryEntry("g-self-defence-training", sitePhotos.selfDefenceTraining, "landscape", "sports"),
  galleryEntry("g-jagannath-deities", sitePhotos.jagannathDeities, "landscape", "cultural"),
  galleryEntry("g-campus-temple", sitePhotos.campusTemple, "portrait", "cultural"),
  galleryEntry("g-yoga-day-stretch", sitePhotos.yogaDayStretch, "landscape", "events"),
  galleryEntry("g-yoga-day-session", sitePhotos.yogaDaySession, "landscape", "events"),
  galleryEntry("g-campus-staircase", sitePhotos.campusStaircase, "portrait", "campus"),
  galleryEntry("g-campus-walkway", sitePhotos.campusWalkway, "portrait", "campus"),
  galleryEntry("g-first-aid-day-banner", sitePhotos.firstAidDayBanner, "landscape", "events"),
  galleryEntry("g-first-aid-day-tree-planting", sitePhotos.firstAidDayTreePlanting, "landscape", "events"),
];

/** Homepage gallery preview — six highlights from the full collection. */
export const homepageGalleryPreview: GalleryImage[] = [
  galleryImages[2]!,
  galleryImages[12]!,
  galleryImages[16]!,
  galleryImages[11]!,
  galleryImages[0]!,
  galleryImages[7]!,
];

export interface PageHeroPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
}

function asPageHero(
  photo: SitePhoto,
  objectPosition = "object-center"
): PageHeroPhoto {
  return {
    src: photo.src,
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
    objectPosition,
  };
}

/** Footer sub-page heroes sourced from the gallery collection. */
export const leadershipHeroImage = asPageHero(
  sitePhotos.principalOffice,
  "object-[center_40%]"
);
export const visionHeroImage = asPageHero(sitePhotos.schoolSignTemple);
export const heritageHeroImage = asPageHero(
  sitePhotos.campusEntranceGate,
  "object-[center_45%]"
);
export const departmentsHeroImage = asPageHero(sitePhotos.chalkboardClassroom);
export const examinationsHeroImage = asPageHero(sitePhotos.classroomBoards);
export const feesHeroImage = asPageHero(sitePhotos.schoolSign);
export const faqsHeroImage = asPageHero(sitePhotos.schoolSign, "object-[center_40%]");
export const downloadsHeroImage = asPageHero(sitePhotos.libraryReadingRoom);
export const achievementsHeroImage = asPageHero(
  sitePhotos.selfDefenceCertificates,
  "object-[center_40%]"
);