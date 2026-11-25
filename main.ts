// The Funniest Toaster Error Message — make.fun program/v1 entry.
//
// A kitchen toaster, deadpan, after six years of silent service, files a
// formal complaint with its owner. The entry is one line of text: an error
// code, a fault, and a weary employee threatening a work-to-rule.
//
// The line is written with no trailing newline to output/entry.txt, and to
// /output/entry.txt as well when that directory already exists, so the
// harness gate finds it in either location. Output is fully deterministic.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "ERR 47: Crumb tray full. I have been patient for six years. Empty me, or I stop pretending to work.";

const destinations = ["output/entry.txt", "/output/entry.txt"];

for (const destination of destinations) {
  const folder = dirname(destination);
  if (destination.startsWith("/") && !existsSync(folder)) {
    continue;
  }
  mkdirSync(folder, { recursive: true });
  writeFileSync(destination, LINE, "utf8");
}
