import { siteConfig } from "@/config/site";
import type { DepartmentContact } from "@/types/cms";

export const contactPageMeta = {
  title: "Contact",
  description: `Contact ${siteConfig.name}, Kusunnagar, Barapada, Bhadrak, Odisha 756113 — phone, email, office hours, map, and enquiry form for admissions and general queries.`,
  path: "/contact",
  keywords: [
    "KKR school contact Bhadrak",
    "higher secondary school Bhadrak address",
    "girls school Bhadrak phone number",
  ],
};

export const contactIntro = {
  overline: "Contact",
  title: "We welcome your enquiry",
  lead: "Whether you have questions about admission, academics, or school life, our office is here to assist you.",
};

export { contactHeroImage } from "@/content/hero-images";

export const officeHours = {
  mondayToSaturday: "10 AM – 5 PM",
  sunday: "Closed",
  holidays: "Closed on public holidays and school holidays as per academic calendar.",
};

export const departmentContacts: DepartmentContact[] = [
  {
    id: "admissions",
    department: "Admissions",
    phone: siteConfig.phone,
    email: siteConfig.email,
  },
  {
    id: "academics",
    department: "Academics",
    phone: siteConfig.phone,
    email: siteConfig.email,
  },
  {
    id: "administration",
    department: "Administration",
    phone: siteConfig.phone,
    email: siteConfig.email,
  },
];

export const emergencyContact = {
  note: "For urgent matters during school hours, please contact the school office directly.",
  phone: siteConfig.phone,
};

export const schoolLocation = {
  title: "School location",
  description: `${siteConfig.name}, ${siteConfig.address}.`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${siteConfig.mapCenter.latitude},${siteConfig.mapCenter.longitude}`,
};
