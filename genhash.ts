/**
 * DONOT MODIFY THE BELOW FILE
 */
const fs = require('fs');
const cryptoLib = require('crypto');
const path = require('path');

function hashFile(filePath: string) {
  const fileBuffer = fs.readFileSync(filePath);
  return cryptoLib.createHash('sha256').update(fileBuffer).digest('hex');
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file: string) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const testFiles = getAllFiles('./tests');
const hashes = testFiles.map(file => `${file}:${hashFile(file)}`).join('\n');
fs.writeFileSync('./tests.hash', hashes);

console.log('✅ tests.hash file generated.');
