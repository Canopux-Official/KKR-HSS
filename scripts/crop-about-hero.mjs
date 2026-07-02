import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const source = join(root, "public/images/gallery/staff-group.png");
const output = join(root, "public/images/about/about-hero.png");

const metadata = await sharp(source).metadata();
const width = metadata.width ?? 1024;
const height = metadata.height ?? 768;

// Trim ceiling above deity frame; remove bright desk/flags at bottom for readable hero text.
const cropTop = 145;
const cropBottom = 175;
const croppedHeight = height - cropTop - cropBottom;

await sharp(source)
  .extract({
    left: 0,
    top: cropTop,
    width,
    height: croppedHeight,
  })
  .png({ compressionLevel: 6 })
  .toFile(output + ".tmp");

const { renameSync } = await import("node:fs");
renameSync(output + ".tmp", output);

const finalMeta = await sharp(output).metadata();
console.log(
  `Cropped about hero: ${width}x${height} -> ${finalMeta.width}x${finalMeta.height}`
);
