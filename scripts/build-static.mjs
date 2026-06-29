import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const outputDir = new URL("../dist/", import.meta.url);
const filesToCopy = ["index.html", "pages", "css", "images"];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const file of filesToCopy) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(file, outputDir), {
    recursive: true,
  });
}

await writeFile(new URL(".nojekyll", outputDir), "");

console.log("Built static site in dist/");
