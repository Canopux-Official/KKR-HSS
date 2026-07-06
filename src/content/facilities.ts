import { sitePhotos } from "@/content/site-photos";
import { siteConfig } from "@/config/site";
import type { FacilityItem, SubNavItem } from "@/types/content";

export const facilitiesPageMeta = {
  title: "Facilities",
  description: `Campus facilities at ${siteConfig.name} — laboratories, library, classrooms, sports, and more.`,
  path: "/facilities",
};

export const facilitiesSubNav: SubNavItem[] = [
  { label: "Science Labs", href: "#science-labs" },
  { label: "Computer Lab", href: "#computer-lab" },
  { label: "Library", href: "#library" },
  { label: "Classrooms", href: "#classrooms" },
  { label: "Sports", href: "#sports" },
  { label: "Cultural", href: "#cultural" },
  { label: "Campus", href: "#campus-environment" },
];

export const facilitiesIntro = {
  overline: "Facilities",
  title: "Spaces designed for learning",
  lead: "Our campus provides the physical infrastructure to support academic study, practical work, recreation, and community gathering.",
};

export { facilitiesHeroImage } from "@/content/hero-images";

export const facilities: FacilityItem[] = [
  {
    id: "science-labs",
    title: "Science Laboratories",
    description:
      "Physics, Chemistry, and Biology laboratories are equipped for practical sessions aligned with the higher secondary science curriculum. Students conduct experiments under teacher supervision, developing both technical skill and scientific reasoning.",
    imageAlt: "Arts classroom with chalkboard at KKR Mahila HS School",
    image: sitePhotos.chalkboardClassroom,
    features: [
      "Physics laboratory with apparatus for mechanics, optics, and electricity",
      "Chemistry laboratory with facilities for qualitative and quantitative analysis",
      "Biology laboratory for microscopy, dissection, and specimen study",
    ],
  },
  {
    id: "computer-lab",
    title: "Computer Laboratory",
    description:
      "The computer laboratory provides students with access to computing resources for curriculum-related work and digital literacy. [Equipment specifications to be confirmed.]",
    imageAlt: "Smart classroom with interactive display and teaching boards",
    image: sitePhotos.smartClassroom,
    features: [
      "Workstations for individual student use",
      "Internet access for supervised academic research",
      "Software supporting curriculum requirements",
    ],
  },
  {
    id: "library",
    title: "Library",
    description:
      "The school library houses reference books, textbooks, periodicals, and reading materials across subjects. It offers a quiet environment for study, research, and independent reading.",
    imageAlt: "School library bookshelves with reference and lending collections",
    image: sitePhotos.libraryReadingRoom,
    features: [
      "Reference and lending collections",
      "Reading area for individual study",
      "Support for examination preparation and project work",
    ],
  },
  {
    id: "classrooms",
    title: "Classrooms",
    description:
      "Classrooms are arranged to facilitate attentive learning, with adequate seating, lighting, and ventilation. Selected rooms are equipped with digital teaching aids for enhanced instruction.",
    imageAlt: "Teaching wall with chalkboard and whiteboards",
    image: sitePhotos.classroomBoards,
    features: [
      "Spacious, well-lit teaching spaces",
      "Smart classroom facilities in selected rooms",
      "Display areas for student work and educational materials",
    ],
  },
  {
    id: "sports",
    title: "Sports Facilities",
    description:
      "Physical education and sports form part of the school's commitment to holistic development. Outdoor and indoor facilities support regular physical activity and inter-school participation where applicable.",
    imageAlt: "Students practising self-defence during a training programme",
    image: sitePhotos.selfDefenceTraining,
    features: [
      "Outdoor play areas for field sports",
      "Equipment for physical education classes",
      "[Additional sports facilities — to be confirmed]",
    ],
  },
  {
    id: "cultural",
    title: "Cultural Activities",
    description:
      "Spaces for assembly, performances, and cultural programmes support the school's co-curricular calendar. Annual day celebrations, literary events, and student performances are hosted in these venues.",
    imageAlt: "Traditional depiction of Lord Jagannath, Balabhadra, and Subhadra",
    image: sitePhotos.jagannathDeities,
    features: [
      "Assembly hall for school gatherings",
      "Spaces for rehearsals and performances",
      "Venues for literary and cultural competitions",
    ],
  },
  {
    id: "campus-environment",
    title: "Campus Environment",
    description:
      "The broader campus environment is maintained to provide a safe, orderly setting for daily school life. Grounds, pathways, and common areas are cared for to support the wellbeing of students and staff.",
    imageAlt: "Campus lawns and classroom building surrounded by trees",
    image: sitePhotos.campusLawns,
    features: [
      "Maintained grounds and landscaping",
      "Common areas for student gathering",
      "Administrative offices for enquiries and support",
    ],
  },
];
