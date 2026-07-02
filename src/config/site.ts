export const siteConfig = {
  name: "KKR Women's Higher Secondary School",
  shortName: "KKR Women's H.S. School",
  description:
    "Official website of KKR Women's Higher Secondary School, Bhadrak, Odisha — dedicated to the education and empowerment of young women through academic excellence, discipline, and holistic development.",
  location: "Bhadrak, Odisha, India",
  address: "Kusunnagar, Barapada, Bhadrak, 756113",
  phone: "+91-7205102208",
  email: "kkrmahilahss@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kkrwomens.edu.in",
  foundingYear: "1994",
  social: {
    facebook: "[Facebook URL — to be confirmed]",
    instagram: "[Instagram URL — to be confirmed]",
    youtube: "[YouTube URL — to be confirmed]",
  },
} as const;
