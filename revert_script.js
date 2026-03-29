const fs = require('fs');
const path = require('path');

const DIRS_TO_SCAN = ['app', 'lib', 'seo_content'];
const EXTENSIONS = ['.tsx', '.ts', '.md'];

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(f)) {
        walkDir(dirPath, callback);
      }
    } else {
      if (EXTENSIONS.includes(path.extname(f))) {
        callback(dirPath);
      }
    }
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Since we are moving back to Mold, we just need to replace Mould with Mold globally.
  // We can do a direct replacement since "Mould" wouldn't be part of any system variables or links 
  // except the ones we're trying to fix anyway.
  
  content = content.replace(/MouldGuard/g, 'MoldGuard'); // Just in case it got changed
  content = content.replace(/Mould/g, 'Mold');
  content = content.replace(/mould/g, 'mold');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Reverted to Mold in: ${filePath}`);
  }
}

// 1. Process all files
DIRS_TO_SCAN.forEach(dir => walkDir(dir, processFile));

// 2. Rename the newly created blog post file if it exists
try {
  const oldPath = path.join(process.cwd(), 'seo_content', 'blog', 'mould-removal-remediation-prices-kenya-2026.md');
  const newPath = path.join(process.cwd(), 'seo_content', 'blog', 'mold-removal-remediation-prices-kenya-2026.md');
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed blog file to: mold-removal-remediation-prices-kenya-2026.md`);
  }
} catch (e) {
  console.log("Error renaming file:", e.message);
}

console.log("Revert complete. Everything is back to Mold.");
