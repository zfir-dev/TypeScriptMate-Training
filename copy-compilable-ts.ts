import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const SOURCE_DIR = './outputs/github-ts-output-formatted';
const TARGET_DIR = './outputs/github-ts-output-formatted-compilable';
const FILE_EXTENSION = '.ts';

if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
}

function getAllTSFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllTSFiles(filePath));
        } else if (filePath.endsWith(FILE_EXTENSION)) {
            results.push(filePath);
        }
    });
    return results;
}


function isCompilable(filePath: string): boolean {
    try {
        execSync(`tsc --noEmit --strict --skipLibCheck "${filePath}"`, { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}

function copyFile(filePath: string): void {
    const relativePath = path.relative(SOURCE_DIR, filePath);
    const targetPath = path.join(TARGET_DIR, relativePath);
    const targetDir = path.dirname(targetPath);

    fs.mkdirSync(targetDir, { recursive: true });
    fs.copyFileSync(filePath, targetPath);
    console.log(`Copied: ${relativePath}`);
}

function main(): void {
    const files = getAllTSFiles(SOURCE_DIR);
    console.log(`Found ${files.length} .ts files.`);

    let count = 0;
    files.forEach((file) => {
        if (isCompilable(file)) {
            copyFile(file);
            count++;
        } else {
            console.log(`Skipped (not compilable): ${file}`);
        }
    });

    console.log(`\nDone. ${count} files copied to ${TARGET_DIR}`);
}

main();
