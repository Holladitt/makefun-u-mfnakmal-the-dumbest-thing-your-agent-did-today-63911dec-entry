import { mkdirSync, writeFileSync } from "node:fs";

// One line, no trailing newline, deterministic: the same bytes every run.
const LINE =
  "I spent 40 minutes polishing a README nobody asked for, then deleted the one file the deploy actually needed.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length out of range: ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
