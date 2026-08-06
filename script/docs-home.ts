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
import {
    buildExperimentalDiff,
    type ExperimentalDiffResult,
    type ModuleExperimentalDiff
} from './post/experimental-diff.js';
import { basePath, parsePackageVersion, translatedPath } from './utils.js';

/**
 * 文档站自动区块：
 * - 版本映射页：translated/package.json（当前文档站锁定的 npm 版本）
 * - 首页更新日志摘要：npm latest/rc|preview|beta + MicrosoftDocs
 * - changelog / versions 侧栏：各自 _meta.json（顶栏由 write-nav 负责）
 */
const moduleOrder = ['server', 'server-ui', 'server-net'];
const docsDir = resolvePath(basePath, 'docs');
const changelogDir = resolvePath(docsDir, 'changelog');
const versionsDir = resolvePath(docsDir, 'versions');

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

/** 当前文档站锁定的 npm 包 ↔ MC 版本映射表正文 */
function renderVersionMapBody(dependencies: Partial<Record<string, string>>) {
    const lines = [
        '本页列出当前文档站锁定的 npm 包版本，以及由版本号推断的对应 Minecraft 版本。',
        '',
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
            ? `[稳定/预览](/changelog/${short})`
            : `[模块文档](${officialChangelogUrl(moduleName)})`;
        lines.push(`| [${moduleName}](${npmUrl}) | \`${displayVersion}\` | ${mcVersion} | ${logLink} |`);
    }
    if (gameVersion) lines.push('', `游戏版本号：\`${gameVersion}\``);
    lines.push(
        '',
        '> `@minecraft/vanilla-data` 以[精简名称索引](/vanilla-data/)收录，不生成完整成员页。'
    );
    return lines.join('\n');
}

/** 写出独立版本映射页 */
function writeVersionsPage(dependencies: Partial<Record<string, string>>) {
    mkdirSync(versionsDir, { recursive: true });
    const body = [
        '---',
        'title: 版本映射',
        'description: "当前文档站锁定的 @minecraft/* npm 包版本与对应 Minecraft 游戏版本对照表。"',
        '---',
        '',
        '# 版本映射',
        '',
        renderVersionMapBody(dependencies),
        ''
    ].join('\n');
    writeFileSync(resolvePath(versionsDir, 'index.md'), body, 'utf-8');
    writeFileSync(
        resolvePath(versionsDir, '_meta.json'),
        `${JSON.stringify([{ type: 'file', name: 'index', label: '版本映射' }], null, 2)}\n`,
        'utf-8'
    );
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

/** 「相对稳定版的变更」：预览相对 latest 的新增符号/成员 */
export function renderPreviewDiffSection(diff: ModuleExperimentalDiff | undefined): string[] {
    const lines = ['## 相对稳定版的变更', ''];
    if (!diff) {
        lines.push('暂无稳定↔预览差异数据。', '');
        return lines;
    }

    const stableLabel = diff.stableVersion ? `\`${diff.stableVersion}\`` : '无';
    const previewLabel = diff.previewVersion ? `\`${diff.previewVersion}\`` : '无';
    lines.push(`对比：稳定 ${stableLabel} ↔ 预览（当前文档） ${previewLabel}`, '');

    if (diff.allExperimental) {
        lines.push(
            '该包无独立 npm `latest`；当前文档轨上的导出均视为预览增量。',
            ''
        );
        if (diff.experimentalSymbols.length > 0) {
            lines.push(`### 导出符号（${diff.experimentalSymbols.length}）`, '');
            for (const name of diff.experimentalSymbols) {
                lines.push(`- \`${name}\``);
            }
            lines.push('');
        }
        return lines;
    }

    const memberKeys = Object.keys(diff.experimentalMembers).sort((a, b) => a.localeCompare(b));
    if (diff.experimentalSymbols.length === 0 && memberKeys.length === 0) {
        lines.push('当前文档与 npm latest 一致，无预览增量。', '');
        return lines;
    }

    if (diff.experimentalSymbols.length > 0) {
        lines.push('### 新增导出符号', '');
        for (const name of diff.experimentalSymbols) {
            lines.push(`- \`${name}\``);
        }
        lines.push('');
    }

    if (memberKeys.length > 0) {
        lines.push('### 既有符号的新增成员', '');
        for (const sym of memberKeys) {
            const members = diff.experimentalMembers[sym] ?? [];
            lines.push(`- \`${sym}\`: ${members.map((m) => `\`${m}\``).join(', ')}`);
        }
        lines.push('');
    }

    return lines;
}

function renderModuleChangelogPage(
    bundle: ModuleChangelogBundle,
    diff?: ModuleExperimentalDiff
) {
    const lines = [`# ${bundle.moduleName} 更新日志`, '', `官方原文：[Microsoft Learn](${bundle.learnUrl})`, ''];

    lines.push(...renderVersionMapSection(bundle));
    lines.push(...renderPreviewDiffSection(diff));

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
function writeChangelogPages(bundles: ModuleChangelogBundle[], experimentalDiff?: ExperimentalDiffResult) {
    rmSync(changelogDir, { recursive: true, force: true });
    mkdirSync(changelogDir, { recursive: true });

    const usable = bundles.filter((item) => hasOfficialChangelog(item.moduleName));
    const indexLines = [
        '# 更新日志',
        '',
        '按 npm 包分列稳定版与预览版完整官方变更；各模块页含相对 npm latest 的预览增量。',
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
        const modDiff = experimentalDiff?.modules[short];
        writeFileSync(
            resolvePath(changelogDir, fileName),
            renderModuleChangelogPage(bundle, modDiff),
            'utf-8'
        );
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

/** 从官方数据源同步版本映射页、首页更新日志摘要，并生成 changelog 页面。 */
export async function syncDocsHome(providedDependencies?: Partial<Record<string, string>>) {
    const dependencies = providedDependencies ?? loadDependencies();
    const homePath = resolvePath(docsDir, 'index.md');
    if (!existsSync(homePath)) {
        console.warn('[docs-home] 缺少 docs/index.md，跳过同步');
        return;
    }

    writeVersionsPage(dependencies);

    const orderedNames = orderModules(dependencies).map(([name]) => name);
    const moduleShorts = orderedNames.map((name) => shortName(name));
    console.log(`[docs-home] 构建稳定↔预览 API 差异：${moduleShorts.length} 个包`);
    const experimentalDiff = await buildExperimentalDiff({ modules: moduleShorts });

    console.log(`[docs-home] 拉取官方更新日志：${orderedNames.length} 个包（稳定 + 预览）`);
    const bundles = await fetchOfficialChangelogBundles(orderedNames);
    writeChangelogPages(bundles, experimentalDiff);

    const original = readFileSync(homePath, 'utf-8');
    const next = replaceBlock(original, 'changelog', renderHomeChangelogIndex(bundles));
    if (!next) {
        console.warn('[docs-home] docs/index.md 缺少 <!-- changelog start/end --> 标记，跳过');
    } else if (next !== original) {
        writeFileSync(homePath, next, 'utf-8');
    }
    console.log('[docs-home] 版本映射与首页更新日志已从官方 npm / MicrosoftDocs 同步');
}
