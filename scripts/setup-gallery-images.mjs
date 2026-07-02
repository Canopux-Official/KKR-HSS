import { copyFileSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const assetsDir =
  "C:\\Users\\prati\\.cursor\\projects\\c-Users-prati-OneDrive-Desktop-Cursor-KKR\\assets";
const outDir = join(root, "public", "images", "gallery");

const mappings = [
  ["altogether-0b7dde8f-d544-468a-b508-d7f4d9abb186.png", "staff-group.png"],
  ["front_lib_2-7ef89945-3786-45a3-bdd6-303429ba838f.png", "library-media-wall.png"],
  ["aesthetic_lib-dc4e7023-043f-43e2-93a6-54ca79afd9b1.png", "library-bookshelves.png"],
  ["Notice_board-e3e8b2b8-55fd-4cde-8023-d7c2bd4846e8.png", "classroom-boards.png"],
  ["SD-b53a73af-9b1d-4c50-873f-1c5e6a8f5d63.png", "self-defence-training.png"],
  ["smart_board-e8a1c3de-ddf3-4b4b-8588-4e526b560493.png", "smart-classroom.png"],
  ["SD_2-4ee116b6-011b-4d8a-8f1d-6a70f352cb5c.png", "self-defence-certificates.png"],
  ["comp_2-ca8a0f04-611b-4e1c-95a9-a0c0f6279c48.png", "campus-building.png"],
  ["odia_kkr_only-3e32358e-ad0a-4414-9e34-1423f40c4f23.png", "school-sign.png"],
  ["founder-04d556ec-f124-4633-8d62-3d894e9ebf84.png", "founder-bust.png"],
  ["green_b-0d74f48a-a7ac-4e98-b223-03e693a7e97f.png", "chalkboard-classroom.png"],
  ["front_lib-558f410c-9e11-4a7f-8b08-e4c2497eec21.png", "library-reading-room.png"],
  ["lord_jaga-a18df455-9028-4d4e-a1bf-3185f98513fc.png", "jagannath-deities.png"],
  ["principal-8ed6fe40-6b8a-4e63-a7fd-34f323e0cc83.png", "principal-office.png"],
  ["odia_kkr_comp-23936395-ce4a-475b-a503-0b3b07fef4fc.png", "school-sign-temple.png"],
  ["back_lib-59a3a4d3-37bf-4bda-8cbe-1623d8496e4d.png", "library-office.png"],
  ["front-823e6d07-8f80-42e0-8f91-6f64798e7c42.png", "campus-entrance-gate.png"],
  ["comp_aes-acc96ba6-fc95-4e6d-9ba0-ac2a9bced734.png", "campus-courtyard.png"],
  ["Temple-e3e17fc7-4322-42a3-ac82-f7c308a28454.png", "campus-temple.png"],
  ["comp-34c5eca5-242e-46ba-8ba3-58ce014f2ad1.png", "campus-lawns.png"],
];

function findAsset(suffix) {
  const files = readdirSync(assetsDir);
  const match = files.find((f) => f.includes(suffix));
  if (!match) throw new Error(`Asset not found for suffix: ${suffix}`);
  return join(assetsDir, match);
}

function imageDimensions(buffer) {
  if (buffer[0] === 0x89 && buffer.toString("ascii", 1, 4) === "PNG") {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }
  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) break;
      const marker = buffer[offset + 1];
      const length = buffer.readUInt16BE(offset + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8) {
        return {
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }
      offset += 2 + length;
    }
  }
  throw new Error("Unsupported image format");
}

function aspectRatio(width, height) {
  const ratio = width / height;
  if (ratio > 1.15) return "landscape";
  if (ratio < 0.87) return "portrait";
  return "square";
}

mkdirSync(outDir, { recursive: true });

const photos = [];

for (const [suffix, filename] of mappings) {
  const src = findAsset(suffix);
  const dest = join(outDir, filename);
  copyFileSync(src, dest);
  const buffer = readFileSync(dest);
  const { width, height } = imageDimensions(buffer);
  photos.push({
    filename,
    src: `/images/gallery/${filename}`,
    width,
    height,
    aspect: aspectRatio(width, height),
  });
  console.log(`Copied ${filename} (${width}x${height})`);
}

writeFileSync(join(root, "scripts", "gallery-dimensions.json"), JSON.stringify(photos, null, 2));
console.log(`\nDone. ${photos.length} images in ${outDir}`);
