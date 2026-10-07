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
                .replace(/bg-\[var\(--color-brand-(blue|navy)\)\]\/\d+/g, 'bg-foreground/5')
                .replace(/border-\[var\(--color-brand-(blue|cyan)\)\]\/\d+/g, 'border-foreground/15')
                .replace(/bg-background\/\d+/g, 'bg-foreground/5'); // catches any previously botched opacity replacements

            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                filesModified++;
                console.log(`Updated containers in ${filePath}`);
            }
        }
    });
});

console.log(`Replaced hardcoded semi-transparent inner containers in ${filesModified} files.`);
