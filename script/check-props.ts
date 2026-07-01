import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve as resolvePath } from 'path';

const basePath = resolvePath(import.meta.dirname, '..');
const translatingPath = resolvePath(basePath, 'translate-pieces');

interface Issue {
    file: string;
    issue: string;
}

const issues: Issue[] = [];

function checkFile(filePath: string, relPath: string) {
    if (!existsSync(filePath)) return;
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // Check if class/interface/enum has a description without Chinese
    // Check for @remarks or @param blocks that might be missing Chinese
    // Heuristic: if there's an @remarks or description block with only English text

    let inComment = false;
    let commentLines: string[] = [];
    let lineNum = 0;

    for (const line of lines) {
        lineNum++;
        const trimmed = line.trim();

        if (trimmed.startsWith('/**')) {
            inComment = true;
            commentLines = [trimmed];
            continue;
        }

        if (inComment) {
            commentLines.push(trimmed);
            if (trimmed.endsWith('*/') || trimmed === '*/') {
                inComment = false;
                analyzeComment(commentLines, relPath, lineNum);
                commentLines = [];
            }
        }
    }
}

function analyzeComment(commentLines: string[], relPath: string, lineNum: number) {
    const combined = commentLines.join('\n');

    // Skip comments that are just decorations or have no text
    if (combined.includes('@seeExample') || 
        combined.includes('@packageDocumentation') ||
        combined.includes('@ts-ignore') ||
        combined.includes('Copyright')) return;

    // Check if this is a class/interface/enum description block
    const isTypeComment = combined.includes('@remarks') === false;
    
    // Look for @remarks blocks that have only English (no Chinese chars)
    if (combined.includes('@remarks')) {
        // Split by @remarks to find individual remark blocks
        const remarkBlocks = combined.split(/@remarks/g);
        for (let i = 1; i < remarkBlocks.length; i++) {
            const block = remarkBlocks[i];
            
            // Check if there's a comment (either /* or /// style) before this block
            // that has Chinese text
            const hasChinese = /[\u4e00-\u9fff]/.test(block);
            const hasEnglish = /[a-zA-Z]{3,}/.test(block);
            
            // Find the next tag or end of comment
            const nextTag = block.search(/@\w+|$|(?=\*\/)/);
            const textContent = nextTag > 0 ? block.substring(0, nextTag).trim() : '';
            
            // Only flag if there's English text but no Chinese text nearby
            // and this is not just tags
            if (hasEnglish && !hasChinese && textContent.length > 10) {
                issues.push({
                    file: relPath,
                    issue: `@remarks block at or near line ${lineNum} missing Chinese translation`
                });
            }
        }
    }
    
    // Check class descriptions
    if (!combined.includes('@remarks') && !combined.includes('@param') && !combined.includes('@returns')) {
        const textLines = commentLines
            .filter(l => !l.startsWith('/**') && !l.endsWith('*/') && !l.startsWith('* @') && l !== '*' && l !== '')
            .map(l => l.replace(/^\*\s?/, '').trim())
            .filter(l => l.length > 0);
        
        if (textLines.length > 0) {
            const allText = textLines.join(' ');
            const hasChinese = /[\u4e00-\u9fff]/.test(allText);
            const hasEnglish = /[a-zA-Z]{3,}/.test(allText);
            
            if (hasEnglish && !hasChinese) {
                issues.push({
                    file: relPath,
                    issue: `Class/interface description missing Chinese translation`
                });
            }
        }
    }
    
    // Check @param blocks for missing Chinese
    const paramMatches = combined.match(/@param\s+\w+/g);
    if (paramMatches) {
        for (const paramMatch of paramMatches) {
            const paramName = paramMatch.replace('@param ', '');
            // Find the text after this param
            const paramIdx = combined.indexOf(paramMatch);
            const afterParam = combined.substring(paramIdx + paramMatch.length);
            const nextTag = afterParam.search(/\n\s*\*\s*@\w+|(?=\*\/)/);
            const paramText = nextTag > 0 ? afterParam.substring(0, nextTag).trim() : afterParam.trim();
            
            const hasChinese = /[\u4e00-\u9fff]/.test(paramText);
            const hasEnglish = /[a-zA-Z]{3,}/.test(paramText);
            
            if (hasEnglish && !hasChinese && paramText.length > 3) {
                issues.push({
                    file: relPath,
                    issue: `@param ${paramName} missing Chinese translation`
                });
            }
        }
    }
}

function scanModule(modPath: string, modName: string) {
    if (!existsSync(modPath)) return;
    
    const cats = ['classes', 'interfaces', 'enums', 'types', 'variables'];
    for (const cat of cats) {
        const dir = resolvePath(modPath, cat);
        if (!existsSync(dir)) continue;
        for (const f of readdirSync(dir)) {
            if (f.endsWith('.d.ts')) {
                const filePath = resolvePath(dir, f);
                const relPath = `${modName}/${cat}/${f}`;
                checkFile(filePath, relPath);
            }
        }
    }
}

const modules = ['common', 'debug-utilities', 'diagnostics', 'server', 'server-admin', 'server-gametest', 'server-net', 'server-ui', 'math', 'server-editor'];

for (const mod of modules) {
    scanModule(resolvePath(translatingPath, mod), mod);
}

// Special case: check vanilla-data (translated directory structure)
const translatedPath = resolvePath(basePath, 'translated');
const tdFiles = ['common.d.ts', 'server-ui.d.ts'];
// We check the combined files for any issues too

console.log(`=== Missing Translation Report ===\n`);
console.log(`Found ${issues.length} issues:\n`);

const byModule = new Map<string, Issue[]>();
for (const issue of issues) {
    const mod = issue.file.split('/')[0];
    const list = byModule.get(mod) || [];
    list.push(issue);
    byModule.set(mod, list);
}

let serverUiIssues: Issue[] = [];
let serverIssues: Issue[] = [];
let commonIssues: Issue[] = [];

for (const [mod, list] of byModule) {
    console.log(`\n## ${mod} (${list.length} issues):`);
    for (const item of list) {
        console.log(`  - ${item.file}: ${item.issue}`);
        if (mod === 'server-ui') serverUiIssues.push(item);
        if (mod === 'server') serverIssues.push(item);
        if (mod === 'common') commonIssues.push(item);
    }
}

// Output summary
console.log(`\n\n=== Summary ===`);
console.log(`server-ui issues: ${serverUiIssues.length}`);
console.log(`server issues: ${serverIssues.length}`);
console.log(`common issues: ${commonIssues.length}`);