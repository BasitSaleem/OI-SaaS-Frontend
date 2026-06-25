#!/usr/bin/env node
// Deletes .js.map files from .next/server after build.
// Turbopack generates these even in production; they serve no purpose
// in Amplify Lambda but add ~16MB to the deployment artifact.
const fs = require("fs");
const path = require("path");

const serverDir = path.join(__dirname, "..", ".next", "server");
let deleted = 0;
let savedBytes = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith(".js.map")) {
      const size = fs.statSync(full).size;
      fs.unlinkSync(full);
      deleted++;
      savedBytes += size;
    }
  }
}

walk(serverDir);
const savedMB = (savedBytes / 1024 / 1024).toFixed(1);
console.log(`Removed ${deleted} server source maps — saved ${savedMB} MB`);
