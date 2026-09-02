import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const topicDir = new URL("../src/scss/topics/", import.meta.url);
const exampleDir = new URL("../examples/", import.meta.url);

const topics = (await readdir(topicDir)).filter((name) => name.endsWith(".scss"));
const examples = (await readdir(exampleDir)).filter((name) => /^\d{2}-.+\.scss$/.test(name));

if (topics.length !== 15) throw new Error(`Expected 15 topic files, found ${topics.length}`);
if (examples.length !== 50) throw new Error(`Expected 50 example files, found ${examples.length}`);

for (const file of examples) {
  const source = await readFile(new URL(file, exampleDir), "utf8");
  if (!source.includes('@use "../src/scss" as kit;')) {
    throw new Error(`${file} does not consume the public module API`);
  }
}

for (const file of topics) {
  const source = await readFile(new URL(file, topicDir), "utf8");
  const opens = (source.match(/\{/g) ?? []).length;
  const closes = (source.match(/\}/g) ?? []).length;
  if (opens !== closes) throw new Error(`${file} has unbalanced braces`);
}

console.log(`Verified ${topics.length} topic files.`);
console.log(`Verified ${examples.length} examples.`);
console.log("All examples use the public Sass module API.");
