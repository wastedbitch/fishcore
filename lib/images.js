import fs from "fs";
import path from "path";

export function getImages() {
  const imgDir = path.join(process.cwd(), "public/gallery");
  return fs
    .readdirSync(imgDir)
    .filter((file) => file.endsWith(".png") || file.endsWith(".jpg"));
}
