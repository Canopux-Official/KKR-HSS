import { PageLayout } from "@/components/layout";

import { createPageMetadata } from "@/lib/metadata";

import { siteConfig } from "@/config/site";

import {

  HeroSection,

  WelcomeSection,

  PrincipalSection,

  AcademicsSection,

  CampusLifeSection,

  AchievementsSection,

  GallerySection,

  AdmissionsSection,

  CallToActionSection,

} from "@/components/home";



export const metadata = createPageMetadata({

  title: "Home",

  description: siteConfig.description,

  path: "/",

});



export default function HomePage() {

  return (

    <PageLayout>

      <HeroSection />

      <WelcomeSection />

      <PrincipalSection />

      <AcademicsSection />

      <CampusLifeSection />

      <AchievementsSection />

      <GallerySection />

      <AdmissionsSection />

      <CallToActionSection />

    </PageLayout>

  );

}

