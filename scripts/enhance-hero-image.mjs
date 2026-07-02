import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const input = join(root, "public/images/hero/school-entrance.png");
const outputWebp = join(root, "public/images/hero/school-entrance.webp");
const outputPng = join(root, "public/images/hero/school-entrance-hq.png");

const metadata = await sharp(input).metadata();
const targetWidth = 2560;

const pipeline = sharp(input)
  .resize({
    width: targetWidth,
    withoutEnlargement: false,
    kernel: sharp.kernel.lanczos3,
  })
  .sharpen({
    sigma: 0.8,
    m1: 1.2,
    m2: 0.6,
    x1: 2,
    y2: 10,
    y3: 20,
  })
  .modulate({
    brightness: 1.02,
    saturation: 1.05,
  });

await pipeline.clone().webp({ quality: 92, effort: 6 }).toFile(outputWebp);
await pipeline.clone().png({ compressionLevel: 6 }).toFile(outputPng);

const enhanced = await sharp(outputWebp).metadata();
console.log(
  `Enhanced hero image: ${metadata.width}x${metadata.height} -> ${enhanced.width}x${enhanced.height}`
);
