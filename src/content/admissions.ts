import type { FAQItem, ProcessStep } from "@/types/cms";
import type { SubNavItem } from "@/types/content";
import { streams } from "@/content/academics";

export const admissionsPageMeta = {
  title: "Admissions",
  description:
    "Admission information for KKR Women's Higher Secondary School, Bhadrak, Odisha — eligibility, process, dates, and enquiries.",
  path: "/admissions",
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
  lead: "KKR Women's Higher Secondary School welcomes applications from students seeking a disciplined, supportive environment for higher secondary education in Bhadrak, Odisha.",
};

export const admissionsHeroImage = {
  src: "/images/admissions/admissions-hero.png",
  alt: "School signboard of KKR Women's Higher Secondary School, Krushna Nagar, Barapada, Bhadrak",
  width: 1024,
  height: 384,
  objectPosition: "object-[center_40%]",
} as const;

export const admissionsOverview = {
  paragraphs: [
    "Admission to KKR Women's Higher Secondary School is open to students who have completed secondary education as per board requirements and wish to pursue higher secondary studies in Arts.",
    "We encourage prospective students and their guardians to visit the campus, speak with our faculty, and understand the academic pathways available before submitting an application.",
    "The information on this page outlines eligibility, the admission process, required documents, and key dates. For specific enquiries, please use the admission inquiry form below or contact the school office directly.",
  ],
};

export const eligibilityCriteria = [
  {
    id: "education",
    title: "Educational qualification",
    description:
      "Completion of secondary education (Class 10) from a recognised board, as per the requirements of the Board of Secondary Education, Odisha.",
  },
  {
    id: "marks",
    title: "Academic performance",
    description:
      "Minimum percentage or grade requirements as determined by school policy for the academic year. [Specific criteria — to be confirmed by school administration.]",
  },
  {
    id: "documents",
    title: "Documentation",
    description:
      "Submission of all required documents as listed in the documents section. Incomplete applications may not be processed.",
  },
  {
    id: "interview",
    title: "Interaction",
    description:
      "[If applicable] Students and guardians may be invited for an interaction with school administration. Details to be confirmed.",
  },
];

export const admissionProcess: ProcessStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "Obtain application form",
    description:
      "Collect the admission application form from the school office or download from the Downloads page. [Availability — to be confirmed.]",
  },
  {
    id: "step-2",
    step: 2,
    title: "Complete the application",
    description:
      "Fill in all required fields accurately. Attach copies of required documents as specified in the checklist.",
  },
  {
    id: "step-3",
    step: 3,
    title: "Submit to school office",
    description:
      "Submit the completed application with documents to the school office during working hours before the deadline.",
  },
  {
    id: "step-4",
    step: 4,
    title: "Review and interaction",
    description:
      "[If applicable] Applications are reviewed and families may be contacted for further interaction or clarification.",
  },
  {
    id: "step-5",
    step: 5,
    title: "Confirmation of admission",
    description:
      "Successful applicants receive confirmation from the school office with instructions for fee payment and enrolment.",
  },
];

export const importantDates = [
  {
    id: "application-open",
    date: "[Date — to be confirmed]",
    title: "Application period opens",
    description: "Admission applications accepted from this date.",
  },
  {
    id: "application-close",
    date: "[Date — to be confirmed]",
    title: "Application deadline",
    description: "Last date for submission of completed applications.",
  },
  {
    id: "merit-list",
    date: "[Date — to be confirmed]",
    title: "Merit list publication",
    description: "[If applicable] Publication of selected candidates.",
  },
  {
    id: "enrolment",
    date: "[Date — to be confirmed]",
    title: "Enrolment and fee payment",
    description: "Confirmed students complete enrolment formalities.",
  },
  {
    id: "session-start",
    date: "[Date — to be confirmed]",
    title: "Academic session begins",
    description: "Commencement of classes for the new academic year.",
  },
];

export const requiredDocuments = [
  "Completed admission application form",
  "Copy of Class 10 mark sheet and certificate",
  "Transfer certificate from previous school",
  "Character certificate from previous institution",
  "Passport-size photographs [quantity — to be confirmed]",
  "Aadhaar card or government-issued ID copy",
  "Caste certificate [if applicable]",
  "Any additional documents as specified by school administration",
];

export const feeInformation = {
  note: "Fee structure for the academic year will be published here upon confirmation from school administration. For current fee enquiries, please contact the school office.",
  items: [
    { label: "Admission fee", value: "[Amount — to be confirmed]" },
    { label: "Tuition fee (annual)", value: "[Amount — to be confirmed]" },
    { label: "Development fee", value: "[Amount — to be confirmed]" },
    { label: "Other charges", value: "[Details — to be confirmed]" },
  ],
};

export const admissionFaqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Which stream is available for admission?",
    answer:
      "KKR Women's Higher Secondary School currently offers the Arts stream, aligned with the Board of Secondary Education, Odisha curriculum.",
  },
  {
    id: "faq-2",
    question: "When does the admission process begin?",
    answer:
      "Admission dates vary each academic year. Please refer to the Important Dates section on this page or contact the school office for the current schedule.",
  },
  {
    id: "faq-3",
    question: "Can I visit the campus before applying?",
    answer:
      "Yes. Prospective families are encouraged to visit the campus during office hours. We recommend contacting the school office in advance to arrange a convenient time.",
  },
  {
    id: "faq-4",
    question: "What documents are required for admission?",
    answer:
      "Required documents include academic records, transfer certificate, character certificate, photographs, and identity proof. See the Required Documents section for the full checklist.",
  },
  {
    id: "faq-5",
    question: "How will I know if my application is accepted?",
    answer:
      "The school office will contact successful applicants directly. Confirmation details and enrolment instructions will be provided at that time.",
  },
  {
    id: "faq-6",
    question: "Is financial assistance available?",
    answer:
      "[Information on scholarships or fee concessions — to be confirmed by school administration.]",
  },
];

export { streams as admissionStreams };
