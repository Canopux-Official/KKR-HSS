import { siteConfig } from "@/config/site";
import type {
  StreamItem,
  DepartmentItem,
  FacultyMember,
  CalendarEntry,
  SubNavItem,
  ContentSection,
} from "@/types/content";

export const academicsPageMeta = {
  title: "Academics",
  description: `Academic programmes, curriculum, faculty, and facilities at ${siteConfig.name}, Bhadrak, Odisha.`,
  path: "/academics",
};

export const academicsSubNav: SubNavItem[] = [
  { label: "Stream", href: "#streams" },
  { label: "Methodology", href: "#methodology" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Examinations", href: "#examinations" },
  { label: "Calendar", href: "#calendar" },
  { label: "Faculty", href: "#faculty" },
  { label: "Facilities", href: "#facilities" },
];

export const academicsIntro: ContentSection = {
  id: "academics-intro",
  overline: "Academics",
  title: "Rigorous learning across disciplines",
  lead: "Our higher secondary programme offers structured pathways recognised by the Council of Higher Secondary Education (CHSE), Odisha — taught by experienced faculty committed to student development.",
};

export {
  academicsHeroImage,
  facultyHeroImage,
} from "@/content/hero-images";

export const streams: StreamItem[] = [
  {
    id: "arts",
    name: "Arts",
    subjects: ["History", "Political Science", "Economics", "Odia", "Logic", "Education", "English"],
    description:
      "The Arts stream develops critical thinking, cultural awareness, and articulate expression — preparing students for higher study in humanities, social sciences, and public service.",
  },
];

export const departments: DepartmentItem[] = [
  {
    id: "arts-dept",
    name: "Arts & Humanities",
    description:
      "History, Political Science, Economics, Odia, Logic, Education, and English are taught to develop analytical reading, structured writing, and informed civic awareness.",
    head: "[Department head — to be confirmed]",
  },
  {
    id: "languages",
    name: "Languages",
    description:
      "English and Odia instruction supports literacy, communication, and appreciation of literature across the Arts curriculum.",
    head: "[Department head — to be confirmed]",
  },
];

export const teachingMethodology: ContentSection = {
  id: "methodology",
  overline: "Teaching Methodology",
  title: "How we teach",
  paragraphs: [
    "Instruction at KKR combines clear exposition, guided practice, and regular assessment. Teachers present material systematically, ensure students understand foundational concepts before advancing, and provide opportunities for questions and discussion.",
    "Class sizes are managed to allow meaningful interaction between teachers and students. Regular tests and assignments help track progress and identify areas where additional support is needed.",
    "We emphasise disciplined study habits — regular attendance, timely completion of assignments, and active engagement in class. These habits serve students throughout their academic careers.",
  ],
};

export const curriculum: ContentSection = {
  id: "curriculum",
  overline: "Curriculum",
  title: "Aligned with CHSE requirements",
  paragraphs: [
    "Our curriculum follows the syllabus prescribed by the Council of Higher Secondary Education (CHSE), Odisha for higher secondary (+2) education. Course content, examination patterns, and assessment criteria are aligned with CHSE guidelines.",
    "In addition to core subjects, students engage with English and MIL (Odia) as required. Curriculum updates following CHSE notifications are communicated promptly to students and parents.",
    "Detailed subject-wise syllabi are available from the school office. Curriculum updates following CHSE notifications will be communicated to students and parents.",
  ],
};

export const examinations: ContentSection = {
  id: "examinations",
  overline: "Examinations",
  title: "Assessment and CHSE examinations",
  paragraphs: [
    "Students are assessed through periodic unit tests, half-yearly examinations, and annual examinations conducted by the school. These internal assessments prepare students for the final +2 CHSE Council examination.",
    "The +2 examination is conducted by the Council of Higher Secondary Education (CHSE), Odisha. The school provides guidance on examination registration, admit cards, and examination schedules as communicated by CHSE.",
    "Examination results and official recognitions will be published on this website upon confirmation from school leadership. We do not publish unverified statistics or rankings.",
  ],
};

export const academicCalendar: CalendarEntry[] = [
  {
    id: "session-start",
    date: "[Date — to be confirmed]",
    title: "Academic session commences",
    description: "Beginning of the new academic year.",
    category: "Academic",
  },
  {
    id: "half-yearly",
    date: "[Date — to be confirmed]",
    title: "Half-yearly examinations",
    description: "Internal assessment for Arts stream students.",
    category: "Examination",
  },
  {
    id: "annual",
    date: "[Date — to be confirmed]",
    title: "Annual examinations",
    description: "End-of-year internal examinations.",
    category: "Examination",
  },
  {
    id: "hsc",
    date: "[Date — to be confirmed]",
    title: "+2 CHSE Council examinations",
    description: "As per Council of Higher Secondary Education (CHSE), Odisha schedule.",
    category: "Examination",
  },
  {
    id: "session-end",
    date: "[Date — to be confirmed]",
    title: "Academic session concludes",
    description: "End of academic year.",
    category: "Academic",
  },
];

export const facultyMembers: FacultyMember[] = [
  {
    id: "faculty-principal",
    name: "Sri Rajendra Kumar Panda",
    role: "Principal",
    department: "Political Science",
    imageAlt: "Sri Rajendra Kumar Panda, Principal",
  },
  {
    id: "faculty-english",
    name: "Sri Bankim Chandra Nayak",
    role: "Lecturer",
    department: "English",
    imageAlt: "Sri Bankim Chandra Nayak, English",
  },
  {
    id: "faculty-logic",
    name: "Sri Ghanashyam Sahoo",
    role: "Lecturer",
    department: "Logic",
    imageAlt: "Sri Ghanashyam Sahoo, Logic",
  },
  {
    id: "faculty-history",
    name: "Sri Ramesh Chandra Khuntia",
    role: "Lecturer",
    department: "History",
    imageAlt: "Sri Ramesh Chandra Khuntia, History",
  },
  {
    id: "faculty-odia",
    name: "Sri Ashwini Kumar Puhan",
    role: "Lecturer",
    department: "MIL Odia",
    imageAlt: "Sri Ashwini Kumar Puhan, MIL Odia",
  },
  {
    id: "faculty-education",
    name: "Smt. Pratignya Panda",
    role: "Lecturer",
    department: "Education",
    imageAlt: "Smt. Pratignya Panda, Education",
  },
  {
    id: "staff-librarian",
    name: "Smt. T Bijaya",
    role: "Librarian",
    department: "Library",
    imageAlt: "Smt. T Bijaya, Librarian",
  },
  {
    id: "staff-clerk",
    name: "Sri Ramesh Chandra Nayak",
    role: "Clerk",
    department: "Office",
    imageAlt: "Sri Ramesh Chandra Nayak, Clerk",
  },
  {
    id: "staff-peon-1",
    name: "Sri Bharat Chandra Jena",
    role: "Peon",
    department: "Support Staff",
    imageAlt: "Sri Bharat Chandra Jena, Peon",
  },
  {
    id: "staff-peon-2",
    name: "Sri Sudarshan Pradhan",
    role: "Peon",
    department: "Support Staff",
    imageAlt: "Sri Sudarshan Pradhan, Peon",
  },
];

export const academicFacilities: ContentSection = {
  id: "facilities",
  overline: "Academic Facilities",
  title: "Spaces for learning and inquiry",
  paragraphs: [
    "The school maintains laboratories for Physics, Chemistry, and Biology; a computer laboratory; a library; and classrooms equipped for modern instruction. Each facility supports the academic programme and is described in detail on our Facilities page.",
  ],
};

export const laboratoryFacilities = {
  title: "Science Laboratories",
  description:
    "Dedicated laboratories for Physics, Chemistry, and Biology allow students to conduct experiments aligned with the curriculum. Safety protocols and supervised sessions ensure productive practical learning.",
};

export const libraryFacility = {
  title: "Library",
  description:
    "The school library provides reference materials, textbooks, and reading resources. It serves as a quiet space for study and research, supporting academic work across the Arts curriculum.",
};

export const smartClassrooms = {
  title: "Smart Classrooms",
  description:
    "Selected classrooms are equipped with digital teaching aids to supplement traditional instruction. [Details of smart classroom facilities to be confirmed.]",
};
