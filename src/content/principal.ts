import { siteConfig } from "@/config/site";

export const principalPageMeta = {
  title: "Principal's Message",
  description: `A welcome message from the Principal of ${siteConfig.name}, Bhadrak, Odisha.`,
  path: "/about/leadership",
};

export const principalPortrait = {
  src: "/images/principal/principal-portrait.png",
  alt: "Sri Rajendra Kumar Panda, Principal of KKR Women's Higher Secondary School",
  width: 1024,
  height: 408,
} as const;

export const principalContent = {
  overline: "Leadership",
  title: "A message from the Principal",
  lead: "It is my privilege to welcome you to KKR Women's Higher Secondary School — an institution devoted to the education and empowerment of young women in Bhadrak.",
  name: "Sri Rajendra Kumar Panda",
  role: "Principal",
  qualifications: "[Academic qualifications — to be confirmed]",
  imageAlt: principalPortrait.alt,
  welcome: [
    "On behalf of the faculty, staff, and governing body of KKR Women's Higher Secondary School, I extend a warm welcome to students, parents, and visitors to our website.",
    "Our school exists to serve a clear and enduring purpose: to provide young women with a disciplined, supportive environment in which they can pursue higher secondary education with rigour and confidence.",
    "We believe that every student who enters our gates carries extraordinary potential. Our responsibility is to provide the structure, guidance, and academic foundation that allows that potential to flourish — in the classroom, in examinations, and in the broader life of the school.",
  ],
  philosophy: {
    title: "Educational philosophy",
    paragraphs: [
      "Education at KKR is grounded in the belief that learning requires both intellectual engagement and personal discipline. We do not separate academic achievement from character development — the two proceed together.",
      "Our faculty are committed to teaching that is clear, demanding, and compassionate. We expect students to work hard, to ask questions, and to take ownership of their learning. In return, we provide the resources, support, and encouragement they need to succeed.",
      "We prepare students for the Higher Secondary Certificate examination and for the paths that follow — further study, professional training, and responsible participation in society. Our aim is not merely examination success, but the cultivation of thoughtful, capable young women.",
    ],
  },
  leadership: {
    title: "Leadership and governance",
    paragraphs: [
      "The school is led by a Principal and supported by a team of experienced educators and administrative staff. Governance and policy decisions are made with the long-term interests of students and the institution in mind.",
      "Details of the school's governing structure and leadership team will be published here upon confirmation from school administration.",
    ],
    members: [
      {
        id: "principal",
        name: "Sri Rajendra Kumar Panda",
        role: "Principal",
        imageAlt: principalPortrait.alt,
      },
      {
        id: "vice-principal",
        name: "[Vice Principal's name — to be confirmed]",
        role: "Vice Principal",
        imageAlt: "Vice Principal — official portrait forthcoming",
      },
    ],
  },
};
