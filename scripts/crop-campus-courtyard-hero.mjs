import sharp from "sharp";
import { copyFileSync, readdirSync, renameSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const assetsDir =
  "C:\\Users\\prati\\.cursor\\projects\\c-Users-prati-OneDrive-Desktop-Cursor-KKR\\assets";
const output = join(root, "public/images/campus-life/campus-courtyard-hero.png");

const files = readdirSync(assetsDir);
const sourceName = files.find((f) => f.includes("comp_aes-8b6f3591"));
if (!sourceName) throw new Error("Campus life hero source image not found");

const source = join(assetsDir, sourceName);
const targetWidth = 1024;
const targetHeight = 499;

const resized = await sharp(source)
  .resize({ width: targetWidth, withoutEnlargement: false })
  .toBuffer({ resolveWithObject: true });

const { height } = resized.info;
const top = Math.round((height - targetHeight) / 2);

await sharp(resized.data)
  .extract({ left: 0, top, width: targetWidth, height: targetHeight })
  .png({ compressionLevel: 6 })
  .toFile(output + ".tmp");

renameSync(output + ".tmp", output);

const finalMeta = await sharp(output).metadata();
console.log(
  `Campus life hero saved: ${finalMeta.width}x${finalMeta.height} -> ${output}`
);
