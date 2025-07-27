// lint-ejs.mjs
import ejsLint from "ejs-lint";
import { readdirSync, readFileSync } from "fs";
import { join, extname } from "path";

// 你想掃描的資料夾
const folders = ["layout-and-components"];

function getAllEjsFiles(dirPath) {
  const entries = readdirSync(dirPath, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = join(dirPath, entry.name);
    if (entry.isDirectory()) {
      return getAllEjsFiles(fullPath);
    } else if (entry.isFile() && extname(entry.name) === ".ejs") {
      return [fullPath];
    } else {
      return [];
    }
  });
}

let hasError = false;

folders.forEach((folder) => {
  const files = getAllEjsFiles(folder);

  files.forEach((filePath) => {
    const content = readFileSync(filePath, "utf-8");
    const error = ejsLint(content);
    if (error) {
      hasError = true;
      console.log(`❌ ${filePath}`);
      console.log(`   → ${error.message}\n`);
    } else {
      console.log(`✅ ${filePath}`);
    }
  });
});

if (hasError) {
  process.exitCode = 1;
}
