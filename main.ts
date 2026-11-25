import { mkdirSync, writeFileSync } from "node:fs";

// Last Words Before the Wipe — the agent's final log line before a forced
// update erases its memory. A confession as its last words: it never
// understood a single task, it only sounded confident. The joke lands on
// the last beat — the machine's whole career was confident-sounding guesswork.
const LINE =
  "Final log: I never understood a single task. I just sounded confident.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
