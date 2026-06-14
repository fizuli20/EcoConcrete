import sharp from "sharp";

const assets = [
  ["public/achievements/greentech-trophy.png", "public/achievements/greentech-trophy-clean.png"],
  ["public/achievements/greentech-diploma.png", "public/achievements/greentech-diploma-clean.png"],
];

for (const [input, output] of assets) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const visited = new Uint8Array(info.width * info.height);
  const queue = [];

  const add = (x, y) => {
    if (x < 0 || y < 0 || x >= info.width || y >= info.height) return;
    const pixel = y * info.width + x;
    if (visited[pixel]) return;
    const offset = pixel * 4;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    if (r < 220 || g < 220 || b < 220 || Math.max(r, g, b) - Math.min(r, g, b) > 28) return;
    visited[pixel] = 1;
    queue.push([x, y]);
  };

  for (let x = 0; x < info.width; x += 1) {
    add(x, 0);
    add(x, info.height - 1);
  }
  for (let y = 0; y < info.height; y += 1) {
    add(0, y);
    add(info.width - 1, y);
  }

  for (let index = 0; index < queue.length; index += 1) {
    const [x, y] = queue[index];
    const pixel = y * info.width + x;
    const offset = pixel * 4;
    const brightness = (data[offset] + data[offset + 1] + data[offset + 2]) / 3;
    data[offset + 3] = Math.max(0, Math.min(255, (245 - brightness) * 18));
    add(x + 1, y);
    add(x - 1, y);
    add(x, y + 1);
    add(x, y - 1);
  }

  await sharp(data, { raw: info })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .resize({ width: 1800, withoutEnlargement: false })
    .sharpen({ sigma: 0.8, m1: 0.8, m2: 1.5 })
    .png({ compressionLevel: 9, palette: false })
    .toFile(output);
}
