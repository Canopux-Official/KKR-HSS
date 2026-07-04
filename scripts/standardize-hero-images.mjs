/**
 * Crop every page hero to a uniform 1024×384 (8:3) resolution.
 * Run: node scripts/standardize-hero-images.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public/images/heroes");

const TARGET_W = 1024;
const TARGET_H = 384;

/** @type {{ slug: string; source: string; position?: sharp.Gravity | string }[]} */
const heroes = [
  { slug: "home", source: "public/images/hero/school-entrance.png", position: "north" },
  { slug: "about", source: "public/images/about/about-hero.png", position: "north" },
  { slug: "academics", source: "public/images/academics/academics-hero.png" },
  { slug: "faculty", source: "public/images/gallery/staff-group.png", position: "north" },
  { slug: "admissions", source: "public/images/admissions/admissions-hero.png", position: "north" },
  { slug: "campus-life", source: "public/images/campus-life/campus-courtyard-hero.png", position: "centre" },
  { slug: "contact", source: "public/images/campus-life/campus-hero.png", position: "centre" },
  { slug: "gallery", source: "public/images/gallery/campus-lawns.png", position: "centre" },
  { slug: "facilities", source: "public/images/gallery/library-bookshelves.png", position: "centre" },
  { slug: "leadership", source: "public/images/gallery/principal-office.png", position: "north" },
  { slug: "vision", source: "public/images/gallery/school-sign-temple.png" },
  { slug: "heritage", source: "public/images/gallery/campus-entrance-gate.png", position: "north" },
  { slug: "departments", source: "public/images/gallery/chalkboard-classroom.png" },
  { slug: "examinations", source: "public/images/gallery/classroom-boards.png" },
  { slug: "fees", source: "public/images/gallery/school-sign.png", position: "north" },
  { slug: "faqs", source: "public/images/gallery/school-sign.png", position: "north" },
  { slug: "downloads", source: "public/images/gallery/library-reading-room.png" },
  { slug: "achievements", source: "public/images/gallery/self-defence-certificates.png", position: "north" },
];

mkdirSync(outDir, { recursive: true });

for (const { slug, source, position = "centre" } of heroes) {
  const input = join(root, source);
  const output = join(outDir, `${slug}.png`);

  await sharp(input)
    .resize(TARGET_W, TARGET_H, { fit: "cover", position })
    .png({ compressionLevel: 6 })
    .toFile(output);

  console.log(`✓ ${slug}: ${source} -> heroes/${slug}.png (${TARGET_W}×${TARGET_H})`);
}

console.log(`\nDone — ${heroes.length} heroes at ${TARGET_W}×${TARGET_H}px`);
