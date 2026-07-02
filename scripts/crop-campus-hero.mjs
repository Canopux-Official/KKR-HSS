import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const input = join(root, "public/images/campus-life/campus-hero.png");
const output = input;

const targetWidth = 1024;
const targetHeight = 499;

const resized = await sharp(input)
  .resize({ width: targetWidth, withoutEnlargement: false })
  .toBuffer({ resolveWithObject: true });

const { width, height } = resized.info;
const top = Math.round((height - targetHeight) / 2);

await sharp(resized.data)
  .extract({ left: 0, top, width: targetWidth, height: targetHeight })
  .png({ compressionLevel: 6 })
  .toFile(output + ".tmp");

const { renameSync } = await import("node:fs");
renameSync(output + ".tmp", output);

console.log(`Campus life hero: ${width}x${height} -> ${targetWidth}x${targetHeight}`);
