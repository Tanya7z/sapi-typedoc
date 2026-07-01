import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { execSync } from 'child_process';
import type { Hook } from './hook.js';

const namespacePrefix = '@minecraft/';
const changelogCacheDir = resolvePath(import.meta.dirname, '..', '..', 'cache', 'changelogs');

interface ChangelogEntry {
    version: string;
    changes: string[];
}

function getChangelogURL(moduleName: string): string {
    const shortName = moduleName.slice(namespacePrefix.length);
    return `https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/${shortName}/changelog`;
}

/**
 * Parse changelog HTML content to extract version changes.
 */
function parseChangelogEntries(html: string): ChangelogEntry[] {
    const entries: ChangelogEntry[] = [];
    // Look for version headers like "## 2.10.0-beta.1.26.40-preview.29"
    // Microsoft Learn uses h2/h3 for version headers
    const versionRegex = /<h[23][^>]*>([\d.]+(?:-[\w.]+)?)<\/h[23]>/g;
    let match;
    while ((match = versionRegex.exec(html)) !== null) {
        const version = match[1].trim();
        // Get content between this header and next one
        const sectionStart = match.index + match[0].length;
        const nextHeaderMatch = versionRegex.exec(html);
        const sectionEnd = nextHeaderMatch ? nextHeaderMatch.index : html.length;
        versionRegex.lastIndex = sectionEnd;
        const sectionContent = html.slice(sectionStart, sectionEnd);
        
        // Extract change items
        const changes: string[] = [];
        const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
        let liMatch;
        while ((liMatch = liRegex.exec(sectionContent)) !== null) {
            const changeText = liMatch[1]
                .replace(/<[^>]+>/g, '')
                .replace(/\s+/g, ' ')
                .trim();
            if (changeText) {
                changes.push(changeText);
            }
        }
        entries.push({ version, changes });
    }
    return entries;
}

function loadCachedChangelog(moduleName: string): ChangelogEntry[] | null {
    const cachePath = resolvePath(changelogCacheDir, `${moduleName.slice(namespacePrefix.length)}.json`);
    if (existsSync(cachePath)) {
        try {
            return JSON.parse(readFileSync(cachePath, 'utf-8')) as ChangelogEntry[];
        } catch {
            return null;
        }
    }
    return null;
}

function saveCacheChangelog(moduleName: string, entries: ChangelogEntry[]): void {
    mkdirSync(changelogCacheDir, { recursive: true });
    const cachePath = resolvePath(changelogCacheDir, `${moduleName.slice(namespacePrefix.length)}.json`);
    writeFileSync(cachePath, JSON.stringify(entries, null, 2));
}

export default {
    afterUpdate({ dependencies }) {
        mkdirSync(changelogCacheDir, { recursive: true });
        
        console.log(`[changelog] Cache directory: ${changelogCacheDir}`);
        console.log(`[changelog] To fetch changelogs, run: tsx ./script/hooks/2.changelog-fetch.ts`);
        console.log('[changelog] Changelogs will be embedded during next build if cache is populated.');
        
        Object.keys(dependencies).forEach((moduleName) => {
            if (!moduleName.startsWith(namespacePrefix)) return;
            const cachePath = resolvePath(changelogCacheDir, `${moduleName.slice(namespacePrefix.length)}.json`);
            const url = getChangelogURL(moduleName);
            
            if (existsSync(cachePath)) {
                console.log(`[changelog] ✓ ${moduleName} - cached`);
            } else {
                console.log(`[changelog] ○ ${moduleName} - no cache at ${url}`);
            }
        });
    },

    afterConvert({ tsdocProject, dependencies }) {
        const { readme } = tsdocProject;
        if (!readme) return;

        const moduleNames = Object.keys(dependencies).filter((name) =>
            name.startsWith(namespacePrefix)
        );

        const changelogLines: string[] = ['', '', '## 更新日志', ''];
        
        for (const moduleName of moduleNames) {
            const cachedEntries = loadCachedChangelog(moduleName);
            if (!cachedEntries || cachedEntries.length === 0) continue;
            
            const version = dependencies[moduleName];
            if (!version) continue;
            
            // Find matching entry for current version
            // Exact match first, then prefix match
            let currentEntry = cachedEntries.find((entry) => version === entry.version);
            if (!currentEntry) {
                currentEntry = cachedEntries.find((entry) => version.startsWith(entry.version));
            }
            if (!currentEntry || currentEntry.changes.length === 0) continue;
            
            changelogLines.push(`### ${moduleName}`);
            changelogLines.push('');
            changelogLines.push(`当前版本: \`${version}\``);
            changelogLines.push('');
            
            currentEntry.changes.forEach((change) => {
                changelogLines.push(`- ${change}`);
            });
            changelogLines.push('');
        }

        if (changelogLines.length > 3) {
            readme.push({ kind: 'text', text: changelogLines.join('\n') });
        }
    }
} as Hook;
