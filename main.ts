// The World in One Day — Wednesday 18 November 2026.
// Entry program for the make.fun news-image-20261118 bounty.
// The finished front page lives in this repo as entry.png (rendered from
// page.html by render.mjs at build time). At grading time this program
// simply places those exact bytes at the required output path.
// It uses only the Node standard library, touches no network, and
// produces byte-identical output on every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(targetDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(targetDir, "entry.png"));

console.log(`wrote entry.png -> ${join(targetDir, "entry.png")}`);
