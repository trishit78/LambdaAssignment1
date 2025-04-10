/**
 * DONOT MODIFY THE BELOW FILE
 */

import * as fs from 'fs';
import * as crypto from 'crypto';
import * as path from 'path';

function hashFile(filePath: string): string {
    const fileBuffer = fs.readFileSync(filePath);
    return crypto.createHash('sha256').update(fileBuffer).digest('hex');
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });
    return arrayOfFiles;
}

function validateTestsHash(): boolean {
    const storedHashLines = fs.readFileSync('./tests.hash', 'utf-8').trim().split('\n');
    const storedHashes: Record<string, string> = Object.fromEntries(
        storedHashLines.map(line => line.split(':') as [string, string])
    );

    const currentFiles = getAllFiles('./tests');
    const currentHashes: Record<string, string> = Object.fromEntries(
        currentFiles.map(file => [file, hashFile(file)])
    );

    for (const file in storedHashes) {
        if (!currentHashes[file]) {
            console.error(`❌ Missing test file: ${file}`);
            return false;
        }
        if (storedHashes[file] !== currentHashes[file]) {
            console.error(`❌ Modified test file: ${file}`);
            return false;
        }
    }

    console.log('✅ Test integrity verified.');
    return true;
}

if (!validateTestsHash()) {
    console.error('\n🛑 Test files have been modified. Please revert changes to run the tests.');
    process.exit(1);
}
