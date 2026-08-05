import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import type { PackageJson } from 'type-fest';
import {
    fetchOfficialChangelogBundles,
    hasOfficialChangelog,
    officialChangelogUrl,
    type ModuleChangelogBundle,
    type TrackChangelog
} from './official-data.js';
import { basePath, parsePackageVersion, translatedPath } from './utils.js';

/**
 * 首页自动区块：
 * - 版本表：translated/package.json（当前文档站锁定的 npm 版本）
 * - 更新日志：npm latest/rc|preview|beta + MicrosoftDocs 官方全文
 * - changelog 侧栏：docs/changelog/_meta.json（顶栏由 write-nav 负责）
 */
const moduleOrder = ['server', 'server-ui', 'server-net'];
const docsDir = resolvePath(basePath, 'docs');
const changelogDir = resolvePath(docsDir, 'changelog');

function replaceBlock(content: string, name: string, body: string) {
    const start = `<!-- ${name} start -->`;
    const end = `<!-- ${name} end -->`;
    const from = content.indexOf(start);
    const to = content.indexOf(end);
    if (from < 0 || to < 0 || to < from) return undefined;
    return `${content.slice(0, from + start.length)}\n\n${body}\n\n${content.slice(to)}`;
}

function loadDependencies() {
    const snapshotPath = resolvePath(translatedPath, 'package.json');
    if (!existsSync(snapshotPath)) return {};
    const packageJson = JSON.parse(readFileSync(snapshotPath, 'utf-8')) as PackageJson;
    return packageJson.dependencies ?? {};
}

function shortName(moduleName: string) {
    return moduleName.startsWith('@minecraft/') ? moduleName.slice('@minecraft/'.length) : moduleName;
}

function orderModules(dependencies: Partial<Record<string, string>>) {
    const entries = Object.entries(dependencies).filter(
        (entry): entry is [string, string] => entry[0].startsWith('@minecraft/') && typeof entry[1] === 'string'
    );
    return entries.sort(([a], [b]) => {
        const shortA = shortName(a);
        const shortB = shortName(b);
        const rankA = moduleOrder.indexOf(shortA);
        const rankB = moduleOrder.indexOf(shortB);
        if (rankA >= 0 || rankB >= 0) {
            return (rankA >= 0 ? rankA : moduleOrder.length) - (rankB >= 0 ? rankB : moduleOrder.length);
        }
        return shortA.localeCompare(shortB);
    });
}

function trackLabel(track: TrackChangelog['track']) {
    return track === 'stable' ? '稳定版' : '预览版';
}

function renderSummary(dependencies: Partial<Record<string, string>>) {
    const lines = [
        '数据来源：官方 npm [`@minecraft/*`](https://www.npmjs.com/search?q=scope%3Aminecraft)。',
        '',
        '| 包名 | 当前文档版本 | 对应 MC 版本 | 本站更新日志 |',
        '| --- | --- | --- | --- |'
    ];
    let gameVersion: string | undefined;
    for (const [moduleName, version] of orderModules(dependencies)) {
        const info = parsePackageVersion(version);
        gameVersion ??= info?.gameVersion;
        const displayVersion = info?.version ?? version;
        const mcVersion = info?.gameVersion ? `\`${info.gameVersion}\`` : '-';
        const npmUrl = `https://www.npmjs.com/package/${moduleName}`;
        const short = shortName(moduleName);
        const logLink = hasOfficialChangelog(moduleName)
            ? `[稳定/预览](./changelog/${short}.md)`
            : `[模块文档](${officialChangelogUrl(moduleName)})`;
        lines.push(`| [${moduleName}](${npmUrl}) | \`${displayVersion}\` | ${mcVersion} | ${logLink} |`);
    }
    if (gameVersion) lines.push('', `游戏版本号：\`${gameVersion}\``);
    return lines.join('\n');
}

function renderHomeChangelogIndex(bundles: ModuleChangelogBundle[]) {
    const lines = [
        '每个 npm 包的**稳定版（latest）**与**预览版（rc / preview / beta）**完整更新日志已生成，见顶栏「更新日志」入口。',
        '',
        '| 模块 | 稳定版 | 预览版 |',
        '| --- | --- | --- |'
    ];
    for (const bundle of bundles.filter((item) => hasOfficialChangelog(item.moduleName))) {
        const short = shortName(bundle.moduleName);
        const stable = bundle.tracks.find((item) => item.track === 'stable');
        const preview = bundle.tracks.find((item) => item.track === 'preview');
        lines.push(
            `| [${bundle.moduleName}](./changelog/${short}.md) | ${
                stable ? `\`${stable.npmVersion}\`` : '-'
            } | ${preview ? `\`${preview.npmVersion}\`` : '-'} |`
        );
    }
    lines.push(
        '',
        '> 正文来自 [MicrosoftDocs/minecraft-creator](https://github.com/MicrosoftDocs/minecraft-creator/tree/main/creator/ScriptAPI/minecraft)；若 npm 预览版本尚未收录，会回退到官方 changelog 中同轨道最近条目。'
    );
    return lines.join('\n');
}

function apiCoreOf(version: string | undefined) {
    if (!version) return undefined;
    return /^(\d+\.\d+\.\d+)/.exec(version)?.[1];
}

/** 「API 版本 ↔ MC 版本」映射表。 */
function renderVersionMapSection(bundle: ModuleChangelogBundle) {
    if (bundle.versionMap.length === 0) return [];

    const stableCore = apiCoreOf(bundle.tracks.find((item) => item.track === 'stable')?.npmVersion);
    const previewCore = apiCoreOf(bundle.tracks.find((item) => item.track === 'preview')?.npmVersion);

    const lines = [
        '## 版本映射表',
        '',
        '> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。',
        '',
        '| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |',
        '| --- | --- | --- | --- | --- |'
    ];
    for (const row of bundle.versionMap) {
        const notes: string[] = [];
        if (row.apiVersion === stableCore) notes.push('稳定');
        if (row.apiVersion === previewCore) notes.push('预览');
        lines.push(
            `| \`${row.apiVersion}\` | ${row.stableMc ? `\`${row.stableMc}\`` : '-'} | ${
                row.previewMc ? `\`${row.previewMc}\`` : '-'
            } | ${row.firstPublished ?? '-'} | ${notes.join(' / ') || '-'} |`
        );
    }
    lines.push('');
    return lines;
}

function renderModuleChangelogPage(bundle: ModuleChangelogBundle) {
    const lines = [`# ${bundle.moduleName} 更新日志`, '', `官方原文：[Microsoft Learn](${bundle.learnUrl})`, ''];

    lines.push(...renderVersionMapSection(bundle));

    lines.push(`[查看官方完整更新日志](${bundle.learnUrl})`, '');

    if (bundle.tracks.length === 0 && bundle.versionMap.length === 0) {
        lines.push('该模块暂无独立官方 changelog 文件。', '');
        return lines.join('\n');
    }

    for (const track of bundle.tracks) {
        lines.push(`## ${trackLabel(track.track)} \`${track.npmVersion}\``, '');
        if (track.docsVersion && track.docsVersion !== track.npmVersion) {
            lines.push(`> 官方文档对应条目：\`${track.docsVersion}\`${track.matchedExactly ? '' : '（近似匹配）'}`, '');
        }
        if (track.section) {
            lines.push(track.section, '');
        } else {
            lines.push('MicrosoftDocs 当前未收录可解析的变更正文。', '');
        }
    }
    return lines.join('\n');
}

/** 写 changelog 页面 + rspress _meta.json */
function writeChangelogPages(bundles: ModuleChangelogBundle[]) {
    rmSync(changelogDir, { recursive: true, force: true });
    mkdirSync(changelogDir, { recursive: true });

    const usable = bundles.filter((item) => hasOfficialChangelog(item.moduleName));
    const indexLines = [
        '# 更新日志',
        '',
        '按 npm 包分列稳定版与预览版完整官方变更。',
        '',
        '| 模块 | 稳定版 | 预览版 |',
        '| --- | --- | --- |'
    ];

    // rspress _meta.json: 侧栏顺序（file 条目）
    const metaEntries: { type: 'file'; name: string; label?: string }[] = [
        { type: 'file', name: 'index', label: '概览' }
    ];

    for (const bundle of usable) {
        const short = shortName(bundle.moduleName);
        const fileName = `${short}.md`;
        writeFileSync(resolvePath(changelogDir, fileName), renderModuleChangelogPage(bundle), 'utf-8');
        metaEntries.push({ type: 'file', name: short, label: bundle.moduleName });

        const stable = bundle.tracks.find((item) => item.track === 'stable');
        const preview = bundle.tracks.find((item) => item.track === 'preview');
        indexLines.push(
            `| [${bundle.moduleName}](./${short}.md) | ${
                stable ? `\`${stable.npmVersion}\`` : '-'
            } | ${preview ? `\`${preview.npmVersion}\`` : '-'} |`
        );
    }
    indexLines.push('');
    writeFileSync(resolvePath(changelogDir, 'index.md'), indexLines.join('\n'), 'utf-8');

    // changelog 目录侧栏（顶栏「更新日志」由 write-nav 写入 _nav.json）
    writeFileSync(resolvePath(changelogDir, '_meta.json'), JSON.stringify(metaEntries, null, 2), 'utf-8');
}

/** 从官方数据源同步首页版本表，并生成 changelog 页面。 */
export async function syncDocsHome(providedDependencies?: Partial<Record<string, string>>) {
    const dependencies = providedDependencies ?? loadDependencies();
    const homePath = resolvePath(docsDir, 'index.md');
    if (!existsSync(homePath)) {
        console.warn('[docs-home] 缺少 docs/index.md，跳过同步');
        return;
    }

    const orderedNames = orderModules(dependencies).map(([name]) => name);
    console.log(`[docs-home] 拉取官方更新日志：${orderedNames.length} 个包（稳定 + 预览）`);
    const bundles = await fetchOfficialChangelogBundles(orderedNames);
    writeChangelogPages(bundles);

    const original = readFileSync(homePath, 'utf-8');
    let home = original;
    const blocks = [
        ['summary', renderSummary(dependencies)],
        ['changelog', renderHomeChangelogIndex(bundles)]
    ] as const;

    for (const [name, body] of blocks) {
        const next = replaceBlock(home, name, body);
        if (!next) {
            console.warn(`[docs-home] docs/index.md 缺少 <!-- ${name} start/end --> 标记，跳过`);
            continue;
        }
        home = next;
    }

    if (home !== original) {
        writeFileSync(homePath, home, 'utf-8');
    }
    console.log('[docs-home] 首页更新日志已从官方 npm / MicrosoftDocs 同步');
}
