import type { Viewport } from "next";
import { Libre_Baskerville, DM_Sans, Playfair_Display } from "next/font/google";
import { BackToTop } from "@/components/ui/BackToTop";
import { Analytics } from "@/components/analytics/Analytics";
import { InstitutionJsonLd } from "@/components/seo";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const heroDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-hero",
  display: "swap",
});

export const metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5c1a2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${heroDisplay.variable}`}>
      <body className="overflow-x-clip">
        <InstitutionJsonLd />
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
