export interface NavItem {
  label: string;
  href: string;
}

export const primaryNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Vision & Mission", href: "/about/vision" },
    { label: "Heritage", href: "/about/heritage" },
    { label: "Statutory Committees", href: "/about/statutory-committees" },
  ],
  academics: [
    { label: "Curriculum", href: "/academics" },
    { label: "Departments", href: "/academics/departments" },
    { label: "Faculty", href: "/academics/faculty" },
    { label: "Examinations", href: "/academics/examinations" },
  ],
  admissions: [
    { label: "How to Apply", href: "/admissions" },
    { label: "Fee Structure", href: "/admissions/fees" },
    { label: "FAQs", href: "/admissions/faqs" },
    { label: "Downloads", href: "/downloads" },
  ],
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "Campus Life", href: "/campus-life" },
    { label: "Facilities", href: "/facilities" },
    { label: "Gallery", href: "/campus-life/gallery" },
    { label: "Achievements", href: "/achievements" },
  ],
} as const;
