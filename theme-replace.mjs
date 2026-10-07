import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const targetDirs = ['./app', './components'];

let filesModified = 0;
targetDirs.forEach(dir => {
    walkDir(dir, filePath => {
        if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            let content = fs.readFileSync(filePath, 'utf8');

            let newContent = content
                .replaceAll('bg-[var(--color-brand-navy)]', 'bg-background')
                .replaceAll('text-[var(--color-brand-offwhite)]', 'text-foreground')
                .replaceAll('bg-[var(--color-brand-offwhite)]', 'bg-foreground')
                .replaceAll('text-[var(--color-brand-navy)]', 'text-background');

            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                filesModified++;
                console.log(`Updated ${filePath}`);
            }
        }
    });
});

console.log(`Replaced hardcoded theme variables in ${filesModified} files.`);
