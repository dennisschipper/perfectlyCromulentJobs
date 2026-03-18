// chatgpt wrote most of this.
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
const outFileName = `hnPosts.ts`;
const outPath = path.join(__dirname, "../src/data", outFileName);

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
const shouldRetry = (error: unknown) => {
  if (!(error instanceof Error)) return false
  const message = error.message.toLowerCase()
  return (
    message.includes("econnreset") ||
    message.includes("etimedout") ||
    message.includes("fetch failed")
  )
}

const fetchItem = async (id: number): Promise<HNItem> => {
  const maxAttempts = 4
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      if (!res.ok) throw new Error(`Failed to fetch item ${id}: ${res.status}`)
      return (await res.json()) as HNItem
    } catch (error) {
      const lastAttempt = attempt === maxAttempts
      if (lastAttempt || !shouldRetry(error)) throw error
      await sleep(250 * attempt)
    }
  }
  throw new Error(`Failed to fetch item ${id} after retries`)
}

const main = async () => {
  const root = await fetchItem(threadId);
  const kids = root.kids ?? [];

  const retrievedPosts: HNItem[] = await Promise.all(
    kids.map(k => fetchItem(k))
  )

  const posts = retrievedPosts.map(
    post => {
      const { id, by, text } = post
      return ({ id, by, text })
    }
  )

  const data = {
    threadId,
    title: root.title,
    url: `https://news.ycombinator.com/item?id=${threadId}`,
    fetchedAt: new Date().toISOString(),
    posts: posts
      .filter(p => p.text !== "[flagged]")
      .filter(p => p.text !== "[dead]")
      .filter(p => p.text)
  }

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
