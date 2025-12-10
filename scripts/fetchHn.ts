import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

interface HNItem {
  id: number;
  by?: string;
  time?: number;
  text?: string;
  title?: string;
  url?: string;
  kids?: number[];
  type?: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urlArg = process.argv[2];
if (!urlArg) {
  console.error("Usage: npm run fetch -- <hn-item-url>");
  process.exit(1);
}

const idParam = new URL(urlArg).searchParams.get("id");
if (!idParam) {
  console.error("Invalid HN url, missing id param");
  process.exit(1);
}

const threadId = Number(idParam);
const timestamp = new Date().toISOString().replace(/[:.]/g, "_");
const outFileName = `hn_jobs_${timestamp}.ts`;
const outPath = path.join(__dirname, "../src/data", outFileName);

async function fetchItem(id: number): Promise<HNItem> {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  if (!res.ok) throw new Error(`Failed to fetch item ${id}: ${res.status}`);
  return (await res.json()) as HNItem;
}

async function main() {
  const root = await fetchItem(threadId);
  const kids = root.kids ?? [];

  const posts = await Promise.all(kids.map((k) => fetchItem(k)));

  const data = {
    threadId,
    title: root.title,
    url: `https://news.ycombinator.com/item?id=${threadId}`,
    fetchedAt: new Date().toISOString(),
    posts,
  };

  const fileContents = `// auto-generated\nexport const hnJobs = ${JSON.stringify(
    data,
    null,
    2
  )} as const;\n`;

  fs.writeFileSync(outPath, fileContents, "utf8");
  console.log(`Saved to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
