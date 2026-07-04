import { siteConfig } from "@/config/site";
import type { ContentSection, StatutoryCommittee } from "@/types/content";

export const statutoryCommitteesPageMeta = {
  title: "Statutory Committees",
  description: `Mandatory statutory committees at ${siteConfig.name} — Anti-Ragging, Internal Complaints (POSH), and student grievance redressal, as required by UGC and Government of India regulations.`,
  path: "/about/statutory-committees",
};

export const statutoryCommitteesIntro: ContentSection = {
  id: "intro",
  overline: "Statutory Committees",
  title: "Campus safety and grievance redressal",
  lead: "As a higher secondary institution, the school is required by law to constitute and publicly disclose certain committees for the prevention of ragging, redressal of sexual harassment complaints, and resolution of student grievances.",
  paragraphs: [
    "These bodies are constituted in accordance with the UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions (2009), the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 — commonly known as the POSH Act — and applicable UGC grievance redressal guidelines.",
    "Ragging in any form is a criminal offence punishable under Indian law. Sexual harassment of students or staff is strictly prohibited. Complaints may be submitted in writing to the relevant committee or to the school office during working hours.",
    "Committee presiding officers are published here as notified by school administration. For urgent concerns, contact the school office or the national anti-ragging helpline.",
  ],
};

export const statutoryCommittees: StatutoryCommittee[] = [
  {
    id: "anti-ragging-committee",
    name: "Anti-Ragging Committee",
    legalBasis:
      "UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009",
    description:
      "The Anti-Ragging Committee ensures compliance with anti-ragging regulations, conducts awareness programmes at the start of each academic session, investigates complaints, and monitors the Anti-Ragging Squad. The committee includes representatives of faculty, parents, students, and local administration as prescribed.",
    head: {
      name: "Sri Rajendra Kumar Panda",
      role: "Chairperson (Principal)",
    },
    duties: [
      "Monitor and prevent ragging on campus and in hostels or transport, where applicable",
      "Conduct orientation and counselling for new and senior students",
      "Investigate ragging complaints and recommend action as per regulations",
      "Submit compliance reports to the affiliating board and UGC as required",
    ],
  },
  {
    id: "anti-ragging-squad",
    name: "Anti-Ragging Squad",
    legalBasis:
      "UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009",
    description:
      "The Anti-Ragging Squad is a vigilant body nominated by the Head of Institution. It performs surprise checks in classrooms, corridors, common areas, and the campus perimeter to detect and prevent ragging, and remains active throughout the academic year.",
    head: {
      name: "Smt. Pratignya Panda",
      role: "Convenor",
    },
    duties: [
      "Maintain mobile vigil and patrolling across the campus",
      "Report incidents promptly to the Anti-Ragging Committee",
      "Assist in awareness drives and monitoring during admission and orientation",
    ],
  },
  {
    id: "icc",
    name: "Internal Complaints Committee (Anti-Sexual Harassment)",
    legalBasis:
      "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act); UGC regulations on prevention of sexual harassment in higher educational institutions",
    description:
      "The Internal Complaints Committee (ICC) addresses complaints of sexual harassment against women employees and students. The committee must include a senior woman as Presiding Officer, faculty and student representatives, and an external member from an NGO or association familiar with issues relating to sexual harassment.",
    head: {
      name: "Smt. Pratignya Panda",
      role: "Presiding Officer",
    },
    duties: [
      "Receive and inquire into complaints of sexual harassment in a time-bound manner",
      "Recommend appropriate action and maintain confidentiality of proceedings",
      "Organise gender-sensitisation and awareness programmes for students and staff",
      "Display contact details and complaint procedures at prominent locations on campus",
    ],
  },
  {
    id: "grievance-redressal",
    name: "Students' Grievance Redressal Committee",
    legalBasis:
      "UGC regulations on grievance redressal in higher educational institutions",
    description:
      "This committee provides a formal mechanism for students and parents to raise academic, administrative, or welfare-related grievances and seek fair, documented resolution within a reasonable timeframe.",
    head: {
      name: "Sri Rajendra Kumar Panda",
      role: "Chairperson (Principal)",
    },
    duties: [
      "Receive and acknowledge written grievances from students or parents",
      "Conduct hearings and recommend remedial action where appropriate",
      "Maintain records of complaints and resolutions",
    ],
  },
];

export const statutoryHelplines = {
  title: "Helplines and reporting",
  items: [
    {
      label: "National Anti-Ragging Helpline",
      value: "1800-180-5522 (24×7)",
    },
    {
      label: "School office",
      value: siteConfig.phone,
    },
    {
      label: "Email",
      value: siteConfig.email,
    },
  ],
  note: "In an emergency, students and parents may also contact local police on 112 or 100. All complaints are treated seriously and handled in accordance with applicable law and school policy.",
};
