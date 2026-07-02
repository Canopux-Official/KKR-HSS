import { createPageMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/layout";
import { GalleryContent } from "@/components/gallery/GalleryContent";
import {
  galleryPageMeta,
  galleryIntro,
  galleryCategories,
  galleryImages,
} from "@/content/gallery";

export const metadata = createPageMetadata(galleryPageMeta);

export default function GalleryPage() {
  return (
    <PageLayout>
      <GalleryContent
        intro={galleryIntro}
        categories={galleryCategories}
        allImages={galleryImages}
      />
    </PageLayout>
  );
}
