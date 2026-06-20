// Generates placeholder images for sample content.
// Intentionally uses DIFFERENT source sizes to prove the site normalizes them.
// Run: node scripts/gen-placeholders.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

const out = (p) => {
  mkdirSync(dirname(p), { recursive: true });
  return p;
};

function svg(w, h, c1, c2, label) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="50%" y="50%" fill="rgba(255,255,255,0.85)" font-family="sans-serif"
      font-size="${Math.round(Math.min(w, h) / 8)}" font-weight="700"
      text-anchor="middle" dominant-baseline="middle">${label}</text>
  </svg>`);
}

const jobs = [
  // Team — deliberately different aspect ratios / sizes
  ["src/assets/team/ada.jpg", 900, 900, "#2f6f6b", "#1b3c3a", "A"],
  ["src/assets/team/deniz.jpg", 600, 800, "#3a5a98", "#21345c", "D"],
  // Paper thumbnails
  ["src/assets/papers/faithful.jpg", 800, 500, "#2f6f6b", "#0c1413", "Paper"],
  ["src/assets/papers/rashomon.jpg", 1000, 620, "#5a3a98", "#241247", "Paper"],
  // Blog covers
  ["src/assets/blog/welcome.jpg", 1600, 900, "#2f6f6b", "#143b39", "Blog"],
  ["src/assets/blog/saliency.jpg", 1200, 700, "#98603a", "#3c2414", "Blog"],
];

for (const [path, w, h, c1, c2, label] of jobs) {
  await sharp(svg(w, h, c1, c2, label))
    .jpeg({ quality: 80 })
    .toFile(out(path));
  console.log("wrote", path, `${w}x${h}`);
}
