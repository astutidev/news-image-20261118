// Authoring helper only — not executed by the grader.
// Renders page.html into entry.png at exactly 1024x1024 using the
// locally installed Chromium via Playwright, so the committed PNG is
// a pixel-faithful capture of the authored broadsheet page.
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require(
  "/home/hatch/workspace/makefun/shot-tools/node_modules/playwright",
);

const here = dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch({
  executablePath:
    "/home/hatch/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome",
  args: ["--no-sandbox", "--force-color-profile=srgb"],
});
try {
  const page = await browser.newPage({
    viewport: { width: 1024, height: 1024 },
    deviceScaleFactor: 1,
  });
  await page.goto("file://" + join(here, "page.html"));
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(here, "entry.png"), type: "png" });
  console.log("entry.png rendered from page.html");
} finally {
  await browser.close();
}
