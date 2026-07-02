/** CMS-ready content type definitions */

export type DownloadCategory =
  | "admission"
  | "prospectus"
  | "calendar"
  | "examination"
  | "circular"
  | "results"
  | "other";

export interface DownloadItem {
  id: string;
  title: string;
  description?: string;
  category: DownloadCategory;
  fileUrl?: string;
  fileSize?: string;
  updatedAt: string;
  externalUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface DepartmentContact {
  id: string;
  department: string;
  name?: string;
  phone?: string;
  email?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  type: "page" | "download";
  date?: string;
}

export const DOWNLOAD_CATEGORY_LABELS: Record<DownloadCategory, string> = {
  admission: "Admission Forms",
  prospectus: "Prospectus",
  calendar: "Academic Calendar",
  examination: "Examination Notices",
  circular: "Circulars",
  results: "Results",
  other: "Other Documents",
};
