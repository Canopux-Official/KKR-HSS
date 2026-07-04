import type { SearchResult } from "@/types/cms";

import { searchDownloads } from "./downloads";

import { admissionFaqs } from "@/content/admissions";

const STATIC_PAGES: SearchResult[] = [
  {
    id: "page-home",
    title: "Home",
    excerpt:
      "KKR Women's Higher Secondary School — government girls' higher secondary school in Bhadrak, Odisha.",
    href: "/",
    type: "page",
  },
  {
    id: "page-about",
    title: "About the School",
    excerpt:
      "Learn about KKR Women's Higher Secondary School — history, vision, leadership, and statutory committees.",
    href: "/about",
    type: "page",
  },
  {
    id: "page-leadership",
    title: "Leadership",
    excerpt: "Message from the Principal and school leadership.",
    href: "/about/leadership",
    type: "page",
  },
  {
    id: "page-vision",
    title: "Vision & Mission",
    excerpt: "Vision, mission, and core values of the school.",
    href: "/about/vision",
    type: "page",
  },
  {
    id: "page-heritage",
    title: "Heritage",
    excerpt: "History and legacy of KKR Women's Higher Secondary School.",
    href: "/about/heritage",
    type: "page",
  },
  {
    id: "page-statutory",
    title: "Statutory Committees",
    excerpt: "Anti-Ragging, ICC, and grievance redressal committees.",
    href: "/about/statutory-committees",
    type: "page",
  },
  {
    id: "page-academics",
    title: "Academics",
    excerpt: "CHSE (+2) academic programme, curriculum, and calendar.",
    href: "/academics",
    type: "page",
  },
  {
    id: "page-departments",
    title: "Departments",
    excerpt: "Academic departments and subject areas.",
    href: "/academics/departments",
    type: "page",
  },
  {
    id: "page-faculty",
    title: "Faculty",
    excerpt: "Teaching faculty at the school.",
    href: "/academics/faculty",
    type: "page",
  },
  {
    id: "page-examinations",
    title: "Examinations",
    excerpt: "CHSE and internal examination information.",
    href: "/academics/examinations",
    type: "page",
  },
  {
    id: "page-admissions",
    title: "Admissions",
    excerpt: "SAMS Odisha admission process, eligibility, and enquiry form.",
    href: "/admissions",
    type: "page",
  },
  {
    id: "page-admissions-faqs",
    title: "Admission FAQs",
    excerpt: "Frequently asked questions about admission.",
    href: "/admissions/faqs",
    type: "page",
  },
  {
    id: "page-admissions-fees",
    title: "Fee Structure",
    excerpt: "Government school fee structure and charges.",
    href: "/admissions/fees",
    type: "page",
  },
  {
    id: "page-facilities",
    title: "Facilities",
    excerpt: "Campus facilities including laboratories, library, and sports.",
    href: "/facilities",
    type: "page",
  },
  {
    id: "page-campus-life",
    title: "Campus Life",
    excerpt: "Student life, clubs, sports, and cultural programmes.",
    href: "/campus-life",
    type: "page",
  },
  {
    id: "page-gallery",
    title: "Gallery",
    excerpt: "Photographs of campus life, events, and activities.",
    href: "/campus-life/gallery",
    type: "page",
  },
  {
    id: "page-achievements",
    title: "Achievements",
    excerpt: "Student and institutional achievements.",
    href: "/achievements",
    type: "page",
  },
  {
    id: "page-contact",
    title: "Contact",
    excerpt: "School address, phone, email, map, and contact form.",
    href: "/contact",
    type: "page",
  },
  {
    id: "page-downloads",
    title: "Downloads",
    excerpt: "Official forms, prospectus, and documents.",
    href: "/downloads",
    type: "page",
  },
];

export function searchSite(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  STATIC_PAGES.filter(
    (page) =>
      page.title.toLowerCase().includes(q) ||
      page.excerpt.toLowerCase().includes(q)
  ).forEach((page) => results.push(page));

  searchDownloads(q).forEach((item) =>
    results.push({
      id: item.id,
      title: item.title,
      excerpt: item.description ?? "",
      href: "/downloads",
      type: "download",
      date: item.updatedAt,
    })
  );

  admissionFaqs
    .filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
    )
    .forEach((faq) =>
      results.push({
        id: faq.id,
        title: faq.question,
        excerpt: faq.answer.slice(0, 120) + "...",
        href: "/admissions/faqs",
        type: "page",
      })
    );

  return results;
}
