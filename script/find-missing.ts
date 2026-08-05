import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve as resolvePath } from 'path';

const basePath = resolvePath(import.meta.dirname, '..');
const originalPath = resolvePath(basePath, 'original', 'node_modules', '@minecraft');
const translatingPath = resolvePath(basePath, 'translate-pieces');

function extractTopLevelNames(content: string): Map<string, string> {
    const names = new Map<string, string>();
    const patterns: { regex: RegExp; cat: string }[] = [
        { regex: /export\s+(abstract\s+)?class\s+(\w+)/g, cat: 'classes' },
        { regex: /export\s+interface\s+(\w+)/g, cat: 'interfaces' },
        { regex: /export\s+enum\s+(\w+)/g, cat: 'enums' },
        { regex: /export\s+type\s+(\w+)/g, cat: 'types' },
        { regex: /export\s+function\s+(\w+)/g, cat: 'functions' },
        { regex: /export\s+(const|let|var)\s+(\w+)/g, cat: 'variables' },
    ];
    for (const { regex, cat } of patterns) {
        let m: RegExpExecArray | null;
        while ((m = regex.exec(content)) !== null) {
            const name = m[2] || m[1];
            if (!names.has(name)) names.set(name, cat);
        }
    }
    return names;
}

function getAllExistingPieces(modulePath: string): Set<string> {
    const existing = new Set<string>();
    if (!existsSync(modulePath)) return existing;
    const cats = ['classes', 'interfaces', 'enums', 'types', 'functions', 'variables'];
    for (const cat of cats) {
        const dir = resolvePath(modulePath, cat);
        if (!existsSync(dir)) continue;
        for (const f of readdirSync(dir)) {
            if (f.endsWith('.d.ts')) existing.add(f.replace('.d.ts', ''));
        }
    }
    return existing;
}

const modules = ['common', 'debug-utilities', 'diagnostics', 'math', 'server', 'server-admin', 'server-editor', 'server-gametest', 'server-graphics', 'server-net', 'server-ui', 'vanilla-data'];

let totalMissing = 0;
for (const mod of modules) {
    const dtsPath = resolvePath(originalPath, mod, 'index.d.ts');
    if (!existsSync(dtsPath)) continue;

    const content = readFileSync(dtsPath, 'utf-8');
    const names = extractTopLevelNames(content);
    const existingPieces = getAllExistingPieces(resolvePath(translatingPath, mod));

    for (const [name, cat] of names) {
        if (!existingPieces.has(name)) {
            console.log(`MISSING: [${cat}] ${mod}/${name}`);
            totalMissing++;
        }
    }
}
console.log(`\nTotal missing: ${totalMissing}`);