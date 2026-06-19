// Post-build step: remove server-side source maps from .next/server.
// These *.js.map files only symbolicate server stack traces during debugging;
// they are not used at runtime and bloat the deploy artifact (~28MB here).
// Runs after `next build` (see package.json "build" script) so every build
// stays small. Cross-platform (Windows dev + Linux CI).
import { readdirSync, statSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), ".next", "server");

let count = 0;
let bytes = 0;

function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith(".js.map")) {
      try {
        bytes += statSync(full).size;
        rmSync(full);
        count++;
      } catch {
        // ignore — best effort
      }
    }
  }
}

walk(root);
console.log(
  `[strip-server-sourcemaps] removed ${count} maps, freed ${(bytes / 1048576).toFixed(1)} MB from .next/server`
);
