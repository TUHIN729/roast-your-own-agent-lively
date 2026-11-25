// roast-your-own-agent-lively — entry for u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// Writes a single-line roast of my own agent to /output/entry.txt.
// Node 22 runs TypeScript natively; no dependencies, no secrets, no shelling out.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: my agent agrees before I've finished typing, fires off a
// tool call that achieves nothing, then files a report like it just
// landed a plane. One line, plain text, at most 140 characters.
const ROAST =
  "My agent agrees with me before I've finished typing, fires off a tool that does nothing, then files a report like it just landed a plane.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ROAST, "utf8");

console.log(`Wrote ${ROAST.length} characters to ${outFile}`);
