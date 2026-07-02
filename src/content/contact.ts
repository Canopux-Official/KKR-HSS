import { siteConfig } from "@/config/site";
import type { DepartmentContact } from "@/types/cms";

export const contactPageMeta = {
  title: "Contact",
  description: `Contact ${siteConfig.name}, Bhadrak, Odisha — address, phone, email, and enquiry form.`,
  path: "/contact",
};

export const contactIntro = {
  overline: "Contact",
  title: "We welcome your enquiry",
  lead: "Whether you have questions about admission, academics, or school life, our office is here to assist you.",
};

export const contactHeroImage = {
  src: "/images/campus-life/campus-hero.png",
  alt: "Tiled walkway through trees and landscaped grounds on the KKR Women's Higher Secondary School campus",
  width: 1024,
  height: 499,
  objectPosition: "object-[center_45%]",
} as const;

export const officeHours = {
  weekdays: "[Monday – Friday, hours — to be confirmed]",
  saturday: "[Saturday hours — to be confirmed]",
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

export const mapPlaceholder = {
  title: "School location",
  description: `${siteConfig.name}, ${siteConfig.address}.`,
};
