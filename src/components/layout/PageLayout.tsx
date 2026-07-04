import { SkipLink } from "@/components/ui/SkipLink";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  /** Homepage: nav overlays a full-viewport hero */
  fullViewportHero?: boolean;
}

export function PageLayout({
  children,
  fullViewportHero = false,
}: PageLayoutProps) {
  return (
    <>
      <SkipLink />
      <Header overlay={fullViewportHero} />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
