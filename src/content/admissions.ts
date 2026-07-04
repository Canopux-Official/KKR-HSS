import type { FAQItem, ProcessStep } from "@/types/cms";
import type { SubNavItem } from "@/types/content";
import { streams } from "@/content/academics";

/** Official Odisha +2 e-admission portal (SAMS) */
export const samsPortalUrl = "https://hss.samsodisha.gov.in";

export const admissionsPageMeta = {
  title: "Admissions",
  description:
    "Admissions to KKR Women's Higher Secondary School, Bhadrak, Odisha — a government girls' higher secondary school. Apply through SAMS Odisha (+2 e-Admission); seats are allotted by merit.",
  path: "/admissions",
  keywords: [
    "admissions Bhadrak higher secondary school",
    "SAMS Odisha admission",
    "girls higher secondary school admission Odisha",
  ],
};

export const admissionsSubNav: SubNavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Stream", href: "#streams" },
  { label: "Process", href: "#process" },
  { label: "Dates", href: "#dates" },
  { label: "Documents", href: "#documents" },
  { label: "Fees", href: "#fees" },
  { label: "FAQs", href: "#faqs" },
  { label: "Enquire", href: "#enquiry" },
];

export const admissionsIntro = {
  overline: "Admissions",
  title: "Begin your journey with us",
  lead: "KKR Women's Higher Secondary School is a Government Higher Secondary School under the Government of Odisha. Admission to Class XI (+2) is conducted centrally through SAMS — the Student Academic Management System — based on merit in the qualifying examination.",
};

export { admissionsHeroImage } from "@/content/hero-images";

export const admissionsOverview = {
  paragraphs: [
    "As a government higher secondary institution, the school participates in the Odisha +2 e-Admission process administered by SAMS (Student Academic Management System). Students who have passed Class 10 apply online, select their preferred colleges and schools — including KKR Women's Higher Secondary School — and receive seat allotment according to their marks, category, and available seats.",
    "Selection is merit-based: students are allotted to different higher secondary schools and junior colleges across Odisha through successive merit lists published on the SAMS portal. Applicants allotted to this school must complete admission formalities here within the dates notified by the government.",
    "Prospective students and guardians may visit the campus to learn about the Arts stream and school environment. For queries about SAMS registration, preferences, or reporting after allotment, contact the school office during working hours or use the enquiry form on this page.",
  ],
};

export const eligibilityCriteria = [
  {
    id: "education",
    title: "Educational qualification",
    description:
      "Pass in Class 10 (Secondary School Examination) from the Board of Secondary Education (BSE), Odisha or any other recognised board, as per SAMS Odisha +2 admission rules for the academic year.",
  },
  {
    id: "marks",
    title: "Merit and seat allotment",
    description:
      "Seat allotment is based on marks obtained in Class 10, reservation policy of the Government of Odisha, and the order of college or school preferences submitted in the SAMS Common Application Form (CAF).",
  },
  {
    id: "sams",
    title: "SAMS registration",
    description:
      "Students must register and apply online through the SAMS Odisha +2 portal. Offline application at the school alone does not constitute admission; allotment through SAMS is required.",
  },
  {
    id: "documents",
    title: "Documentation at admission",
    description:
      "Students allotted to this school must report with original documents and copies as specified in the SAMS intimation letter and school notice. Incomplete documentation may delay enrolment.",
  },
];

export const admissionProcess: ProcessStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "Pass Class 10",
    description:
      "Complete the Secondary School Examination (Class 10) from the Board of Secondary Education (BSE), Odisha or an equivalent recognised board and obtain your mark sheet and certificate.",
  },
  {
    id: "step-2",
    step: 2,
    title: "Register on SAMS Odisha",
    description:
      "When +2 e-Admission opens, visit the SAMS Odisha Higher Secondary portal, create a student login, and complete the Common Application Form (CAF) with accurate personal and academic details.",
  },
  {
    id: "step-3",
    step: 3,
    title: "Choose schools and stream",
    description:
      "In the CAF, select your preferred higher secondary schools and junior colleges in order of priority. Choose the Arts stream and include KKR Women's Higher Secondary School, Bhadrak among your options.",
  },
  {
    id: "step-4",
    step: 4,
    title: "Merit list and allotment",
    description:
      "SAMS publishes merit lists in multiple rounds. Based on your Class 10 results, category, and preferences, you may be allotted a seat at this school or another institution. Check your selection status and download the intimation letter from your SAMS login.",
  },
  {
    id: "step-5",
    step: 5,
    title: "Report and complete admission",
    description:
      "If allotted to KKR Women's Higher Secondary School, report to the school office within the notified dates with required documents, complete fee payment as applicable, and confirm your admission.",
  },
];

export const importantDates = [
  {
    id: "sams-notification",
    date: "As per SAMS notification",
    title: "+2 e-Admission opens",
    description:
      "Odisha +2 online application through SAMS typically begins after Class 10 results. See the official SAMS portal for the current academic year schedule.",
  },
  {
    id: "caf-deadline",
    date: "As per SAMS notification",
    title: "Last date for online CAF",
    description: "Final date for submission of the Common Application Form on the SAMS portal.",
  },
  {
    id: "merit-list",
    date: "As per SAMS notification",
    title: "Merit lists and intimation letters",
    description:
      "First, second, and subsequent selection merit lists are published on SAMS. Allotted students download their intimation letter from the student login.",
  },
  {
    id: "reporting",
    date: "As per SAMS notification",
    title: "Reporting to allotted school",
    description:
      "Students allotted to this school must report within the window specified in the SAMS intimation letter.",
  },
  {
    id: "session-start",
    date: "As per CHSE / school calendar",
    title: "Commencement of classes",
    description: "Class XI (+2 first year) sessions begin as per the academic calendar notified by the school.",
  },
];

export const requiredDocuments = [
  "SAMS intimation / allotment letter (printout from student login)",
  "Original and copy of Class 10 mark sheet and certificate",
  "Transfer certificate from previous school",
  "Character certificate from previous institution",
  "Passport-size photographs as specified in SAMS or school notice",
  "Aadhaar card or government-issued ID copy",
  "Caste certificate [if applicable, as per reservation claimed in CAF]",
  "Any additional documents listed in the SAMS intimation letter or school admission notice",
];

export const feeInformation = {
  note: "Fee structure for government higher secondary schools is notified by the Government of Odisha. Applicable fees are paid as directed during SAMS admission confirmation. Contact the school office for the current fee details.",
  items: [
    { label: "Admission fee", value: "As per government notification" },
    { label: "Tuition fee (annual)", value: "As per government notification" },
    { label: "Development / other charges", value: "As notified for the academic year" },
    { label: "SAMS application fee", value: "Payable online during CAF submission on SAMS" },
  ],
};

export const admissionFaqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Which stream is available for admission?",
    answer:
      "KKR Women's Higher Secondary School currently offers the Arts stream, aligned with the Council of Higher Secondary Education (CHSE), Odisha curriculum.",
  },
  {
    id: "faq-2",
    question: "How do I apply for admission?",
    answer:
      "Admission to Class XI (+2) is through SAMS Odisha — the Student Academic Management System run by the Government of Odisha. After Class 10 results, register on the SAMS +2 portal, fill the Common Application Form, and select this school among your preferences. Allotment is based on merit.",
  },
  {
    id: "faq-3",
    question: "Is this a government school?",
    answer:
      "Yes. KKR Women's Higher Secondary School is a Government Higher Secondary School under the Government of Odisha. Admissions follow the state-wide SAMS +2 e-Admission process.",
  },
  {
    id: "faq-4",
    question: "How are students selected?",
    answer:
      "Selection is merit-based. SAMS allots seats using Class 10 marks, reservation rules, and the order of preferences you submit. Students may be allotted to this school or to other higher secondary colleges across Odisha, depending on results and seat availability.",
  },
  {
    id: "faq-5",
    question: "Can I visit the campus before applying?",
    answer:
      "Yes. Prospective families are encouraged to visit the campus during office hours. Contact the school office in advance to arrange a convenient time.",
  },
  {
    id: "faq-6",
    question: "What documents are required after allotment?",
    answer:
      "Students allotted through SAMS must report with the intimation letter, Class 10 records, transfer certificate, character certificate, photographs, identity proof, and other documents listed in the SAMS notice. See the Required Documents section for a checklist.",
  },
  {
    id: "faq-7",
    question: "How will I know if I am selected for this school?",
    answer:
      "Log in to your SAMS student account to check selection status and download the intimation letter when merit lists are published. The school office may also display notices for students allotted here.",
  },
];

export { streams as admissionStreams };
