import type { SearchResult } from "@/types/cms";

import { searchDownloads } from "./downloads";

import { admissionFaqs } from "@/content/admissions";



const STATIC_PAGES: SearchResult[] = [

  {

    id: "page-about",

    title: "About the School",

    excerpt: "Learn about KKR Women's Higher Secondary School — history, vision, and values.",

    href: "/about",

    type: "page",

  },

  {

    id: "page-academics",

    title: "Academics",

    excerpt: "Academic programme in Arts, faculty, and curriculum.",

    href: "/academics",

    type: "page",

  },

  {

    id: "page-admissions",

    title: "Admissions",

    excerpt: "Admission process, eligibility, dates, and enquiry form.",

    href: "/admissions",

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

    id: "page-contact",

    title: "Contact",

    excerpt: "School address, phone, email, and contact form.",

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

        href: "/admissions#faqs",

        type: "page",

      })

    );



  return results;

}

