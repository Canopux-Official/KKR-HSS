import { PageLayout } from "@/components/layout";
import { createPageMetadata } from "@/lib/metadata";
import {
  HeroSection,
  WelcomeSection,
  PrincipalSection,
  AcademicsSection,
  CampusLifeSection,
  AchievementsSection,
  GallerySection,
  AdmissionsSection,
  EducativeQuoteSection,
} from "@/components/home";



export const metadata = createPageMetadata({
  title: "Home",
  description:
    "KKR Mahila Higher Secondary School, Bhadrak, Odisha — a government girls' higher secondary school offering CHSE (+2) programmes. Explore admissions via SAMS Odisha, academics, facilities, and campus life.",
  path: "/",
  keywords: [
    "KKR Mahila Higher Secondary School",
    "women's higher secondary school Bhadrak",
    "girls higher secondary school Bhadrak",
  ],
});



export default function HomePage() {

  return (

    <PageLayout fullViewportHero>

      <HeroSection />

      <WelcomeSection />

      <PrincipalSection />

      <AcademicsSection />

      <CampusLifeSection />

      <AchievementsSection />

      <GallerySection />

      <AdmissionsSection />

      <EducativeQuoteSection />

    </PageLayout>

  );

}

