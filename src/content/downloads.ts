import type { DownloadItem } from "@/types/cms";

export const downloadsPageMeta = {
  title: "Downloads",
  description:
    "Official documents, forms, and notices available for download from KKR Women's Higher Secondary School.",
  path: "/downloads",
};

export const downloadsIntro = {
  overline: "Downloads",
  title: "Official documents",
  lead: "Forms, prospectus, calendars, and notices published by the school administration. Documents marked as forthcoming will be uploaded upon availability.",
};

export const downloadItems: DownloadItem[] = [
  {
    id: "dl-1",
    title: "Admission application form",
    description: "Application form for higher secondary admission.",
    category: "admission",
    updatedAt: "2026-01-01",
    fileUrl: "[PDF — to be uploaded]",
  },
  {
    id: "dl-2",
    title: "School prospectus",
    description: "Overview of academic programmes, facilities, and school information.",
    category: "prospectus",
    updatedAt: "2026-01-01",
    fileUrl: "[PDF — to be uploaded]",
  },
  {
    id: "dl-3",
    title: "Academic calendar 2026–27",
    description: "Key dates for the academic year including holidays and examinations.",
    category: "calendar",
    updatedAt: "2026-01-01",
    fileUrl: "[PDF — to be uploaded]",
  },
  {
    id: "dl-4",
    title: "Half-yearly examination notice",
    description: "Schedule and guidelines for half-yearly examinations.",
    category: "examination",
    updatedAt: "2025-12-01",
    fileUrl: "[PDF — to be uploaded]",
  },
  {
    id: "dl-5",
    title: "Fee structure circular",
    description: "Official fee structure for the current academic year.",
    category: "circular",
    updatedAt: "2026-01-01",
    fileUrl: "[PDF — to be uploaded]",
  },
  {
    id: "dl-6",
    title: "+2 CHSE examination information",
    description: "CHSE examination registration and schedule information.",
    category: "examination",
    updatedAt: "2025-11-01",
    fileUrl: "[PDF — to be uploaded]",
  },
  {
    id: "dl-7",
    title: "Examination results",
    description: "Link to official CHSE examination results when published.",
    category: "results",
    updatedAt: "2025-06-01",
    externalUrl: "[Results URL — to be confirmed]",
  },
  {
    id: "dl-8",
    title: "Transfer certificate request form",
    description: "Form for requesting transfer certificate from the school.",
    category: "other",
    updatedAt: "2026-01-01",
    fileUrl: "[PDF — to be uploaded]",
  },
];
