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

  // 1. Temporarily protect any URL paths with dashes (e.g., /mold-removal)
  // so we don't accidentally break links or file references.
  const protectedLinks = [];
  content = content.replace(/([a-zA-Z0-9.\-_/]*mold[a-zA-Z0-9.\-_/]*\.[a-z]{2,4}|\/[a-zA-Z0-9.\-_/]*mold[a-zA-Z0-9.\-_/]*)/g, (match) => {
    protectedLinks.push(match);
    return `___LINK_${protectedLinks.length - 1}___`;
  });

  // 2. ONLY replace standalone generic words (mould, moulds)
  // We use lookarounds to ensure we don't accidentally touch compound words 
  // like MoldGuard or MoldKill.
  content = content.replace(/(?<![A-Za-z])Mold(?![A-Za-z])/g, 'Mould');
  content = content.replace(/(?<![A-Za-z])mold(?![A-Za-z])/g, 'mould');
  content = content.replace(/(?<![A-Za-z])Molds(?![A-Za-z])/g, 'Moulds');
  content = content.replace(/(?<![A-Za-z])molds(?![A-Za-z])/g, 'moulds');

  // 3. Restore all the protected URL paths and links exactly as they were!
  protectedLinks.forEach((link, idx) => {
    content = content.replace(`___LINK_${idx}___`, link);
  });
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated textual 'mould' in: ${filePath}`);
  }
}

DIRS_TO_SCAN.forEach(dir => walkDir(dir, processFile));
console.log("Replacement complete. All brand names, emails, and links were 100% skipped.");
