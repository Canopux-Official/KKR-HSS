export const siteConfig = {
  name: "KKR Mahila Higher Secondary School",
  shortName: "KKR Mahila H.S. School",
  description:
    "Official website of KKR Mahila Higher Secondary School, Bhadrak, Odisha — a Government Higher Secondary School under the Government of Odisha, dedicated to the education and empowerment of young women.",
  location: "Bhadrak, Odisha, India",
  address: "Kusunnagar, Barapada, Bhadrak, 756113",
  mapQuery: "3CV9+GR5, Agarpada Road, Hasinpur, Odisha 756113",
  /** Center point for the contact-page map embed (from plus code 3CV9+GR5, Bhadrak area) */
  mapCenter: {
    latitude: 21.0938125,
    longitude: 86.4195625,
    zoom: 17,
  },
  phone: "+91-7205102208",
  email: "kkrmahilamahavidyalaya@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kkrwomens.edu.in",
  foundingYear: "1994",
  social: {
    facebook: "[Facebook URL — to be confirmed]",
    instagram: "[Instagram URL — to be confirmed]",
    youtube: "[YouTube URL — to be confirmed]",
  },
} as const;
