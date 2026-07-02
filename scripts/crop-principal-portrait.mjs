import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const input = join(root, "public/images/principal/principal-portrait-source.png");
const output = join(root, "public/images/principal/principal-portrait.png");

const metadata = await sharp(input).metadata();
const width = metadata.width ?? 1024;
const height = metadata.height ?? 460;

// Remove phone watermark strip along the bottom edge.
const cropBottom = 52;
const croppedHeight = height - cropBottom;

await sharp(input)
  .extract({
    left: 0,
    top: 0,
    width,
    height: croppedHeight,
  })
  .png({ compressionLevel: 6 })
  .toFile(output);

const finalMeta = await sharp(output).metadata();

console.log(
  `Cropped principal portrait: ${width}x${height} -> ${finalMeta.width}x${finalMeta.height}`
);
