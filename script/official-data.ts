import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import semver from 'semver';
import { basePath, parsePackageVersion } from './utils.js';

const namespacePrefix = '@minecraft/';
const officialDocsRawBase =
    'https://raw.githubusercontent.com/MicrosoftDocs/minecraft-creator/main/creator/ScriptAPI/minecraft';
const officialLearnBase =
    'https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft';
const cacheDir = resolvePath(basePath, 'cache', 'official-changelogs');
const packumentCacheDir = resolvePath(basePath, 'cache', 'npm-packuments');
const modulesWithoutChangelog = new Set(['math', 'vanilla-data']);
/** 官方元数据本地缓存有效期；强制刷新：SAPI_FORCE_FETCH=1 */
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

export type ReleaseTrack = 'stable' | 'preview';

export interface TrackChangelog {
    track: ReleaseTrack;
    /** npm dist-tag 解析到的版本 */
    npmVersion: string;
    /** MicrosoftDocs 实际命中的版本标题（可能与 npm 版本略有差异） */
    docsVersion?: string;
    section?: string;
    matchedExactly: boolean;
}

/** 单个 API 版本对应的 MC 版本（由 npm 已发布版本号推断，比 Learn 及时） */
export interface ApiVersionMapping {
    /** API 核心版本，如 2.9.0 */
    apiVersion: string;
    /** 稳定分支 MC 版本（来自 *-stable 版本号） */
    stableMc?: string;
    /** 预览分支 MC 版本（来自 *-preview 版本号） */
    previewMc?: string;
    /** 该 API 版本首次在 npm 发布的日期（YYYY-MM-DD） */
    firstPublished?: string;
}

export interface ModuleChangelogBundle {
    moduleName: string;
    learnUrl: string;
    tracks: TrackChangelog[];
    versionMap: ApiVersionMapping[];
}

function moduleShortName(moduleName: string) {
    return moduleName.startsWith(namespacePrefix)
        ? moduleName.slice(namespacePrefix.length)
        : moduleName;
}

function cachePath(moduleName: string) {
    return resolvePath(cacheDir, `${moduleShortName(moduleName)}.md`);
}

function rawChangelogUrl(moduleName: string) {
    return `${officialDocsRawBase}/${moduleShortName(moduleName)}/changelog.md`;
}

export function officialChangelogUrl(moduleName: string) {
    const shortName = moduleShortName(moduleName);
    return modulesWithoutChangelog.has(shortName)
        ? `${officialLearnBase}/${shortName}/minecraft-${shortName}`
        : `${officialLearnBase}/${shortName}/changelog`;
}

export function hasOfficialChangelog(moduleName: string) {
    return !modulesWithoutChangelog.has(moduleShortName(moduleName));
}

interface NpmPackumentSlim {
    distTags: Record<string, string>;
    versions: string[];
    /** 版本号 → 发布时间（ISO） */
    time: Record<string, string>;
}

function packumentCachePath(moduleName: string) {
    return resolvePath(packumentCacheDir, `${moduleShortName(moduleName)}.json`);
}

function isFreshCache(path: string) {
    if (process.env.SAPI_FORCE_FETCH === '1' || !existsSync(path)) return false;
    return Date.now() - statSync(path).mtimeMs < CACHE_TTL_MS;
}

/** 一次拉取 npm packument：dist-tags + 全部已发布版本 + 发布时间。 */
export async function fetchNpmPackument(moduleName: string): Promise<NpmPackumentSlim> {
    const path = packumentCachePath(moduleName);
    if (isFreshCache(path)) {
        return JSON.parse(readFileSync(path, 'utf-8')) as NpmPackumentSlim;
    }
    try {
        const response = await fetch(`https://registry.npmjs.org/${moduleName}`, {
            headers: {
                accept: 'application/json',
                'user-agent': 'sapi-typedoc'
            },
            signal: AbortSignal.timeout(20_000)
        });
        if (!response.ok) {
            throw new Error(`npm registry ${moduleName}: ${response.status} ${response.statusText}`);
        }
        const data = (await response.json()) as {
            'dist-tags'?: Record<string, string>;
            versions?: Record<string, unknown>;
            time?: Record<string, string>;
        };
        const slim: NpmPackumentSlim = {
            distTags: data['dist-tags'] ?? {},
            versions: Object.keys(data.versions ?? {}),
            time: data.time ?? {}
        };
        mkdirSync(packumentCacheDir, { recursive: true });
        writeFileSync(path, JSON.stringify(slim), 'utf-8');
        return slim;
    } catch (error) {
        if (existsSync(path)) {
            console.warn(`[official-data] ${moduleName} npm 元数据拉取失败，使用缓存：${String(error)}`);
            return JSON.parse(readFileSync(path, 'utf-8')) as NpmPackumentSlim;
        }
        throw error;
    }
}

/** 从 dist-tags 取稳定版（latest）与预览版（rc → preview → beta）。 */
export function resolveTrackVersions(distTags: Record<string, string>) {
    const stable = distTags.latest;
    const preview = [distTags.rc, distTags.preview, distTags.beta].find(
        (version) => typeof version === 'string' && version !== stable
    );
    return { stable, preview };
}

function compareGameVersions(a: string, b: string) {
    const pa = a.split('.').map(Number);
    const pb = b.split('.').map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
        const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
        if (diff !== 0) return diff;
    }
    return 0;
}

/**
 * 由 npm 已发布版本号推断「API 版本 ↔ MC 版本」映射。
 * 例：`2.9.0-beta.1.26.34-stable` → 稳定分支 MC 1.26.34；
 *     `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC 1.26.50.20。
 */
export function buildVersionMapping(
    versions: string[],
    time?: Record<string, string>
): ApiVersionMapping[] {
    const map = new Map<string, ApiVersionMapping & { firstMs?: number }>();
    for (const version of versions) {
        if (version.includes('-internal')) continue;
        const core = apiCore(version);
        if (!core) continue;
        let entry = map.get(core);
        if (!entry) {
            entry = { apiVersion: core };
            map.set(core, entry);
        }

        const info = parsePackageVersion(version);
        if (info) {
            if (info.gamePreRelease === 'stable') {
                if (!entry.stableMc || compareGameVersions(info.gameVersion, entry.stableMc) > 0) {
                    entry.stableMc = info.gameVersion;
                }
            } else if (info.gamePreRelease === 'preview') {
                if (!entry.previewMc || compareGameVersions(info.gameVersion, entry.previewMc) > 0) {
                    entry.previewMc = info.gameVersion;
                }
            }
        }

        const published = time?.[version];
        if (published) {
            const ms = Date.parse(published);
            if (Number.isFinite(ms) && (entry.firstMs === undefined || ms < entry.firstMs)) {
                entry.firstMs = ms;
            }
        }
    }

    return [...map.values()]
        .map(({ firstMs, ...rest }) => ({
            ...rest,
            firstPublished:
                firstMs !== undefined ? new Date(firstMs).toISOString().slice(0, 10) : undefined
        }))
        .sort((a, b) => semver.rcompare(a.apiVersion, b.apiVersion));
}

/** 列出官方 changelog 中的版本标题。 */
export function listVersionHeadings(markdown: string) {
    return [...markdown.matchAll(/^##\s+(.+?)\s*$/gm)]
        .map((match) => match[1].trim())
        .filter((heading) => heading.length > 0 && !/^version changes$/i.test(heading));
}

function isPreviewHeading(version: string) {
    return /-(?:beta|rc|preview)(?:\.|$)/i.test(version);
}

function isStableHeading(version: string) {
    return !isPreviewHeading(version);
}

function apiCore(version: string) {
    // 2.8.0 / 2.10.0-beta / 2.9.0-rc.1.26... → 2.8.0 / 2.10.0 / 2.9.0
    const match = /^(\d+\.\d+\.\d+)/.exec(version);
    return match?.[1];
}

/**
 * 为请求的 npm 版本在官方 changelog 中找最合适的标题。
 * 精确匹配优先；否则按版本核心号 / 轨道回退。
 */
export function resolveVersionHeading(
    requested: string,
    headings: string[],
    track: ReleaseTrack
): { docsVersion?: string; matchedExactly: boolean } {
    if (headings.includes(requested)) {
        return { docsVersion: requested, matchedExactly: true };
    }

    const core = apiCore(requested);
    const requestedLooksPreview = isPreviewHeading(requested);
    const kindPool = headings.filter((heading) =>
        requestedLooksPreview ? isPreviewHeading(heading) : isStableHeading(heading)
    );
    const searchPool = kindPool.length > 0 ? kindPool : headings;

    if (core) {
        const sameCore =
            searchPool.find(
                (heading) =>
                    heading === core || heading.startsWith(`${core}-`) || apiCore(heading) === core
            ) ??
            headings.find(
                (heading) =>
                    heading === core || heading.startsWith(`${core}-`) || apiCore(heading) === core
            );
        if (sameCore) {
            return { docsVersion: sameCore, matchedExactly: false };
        }
    }

    const trackPool = headings.filter((heading) =>
        track === 'stable' ? isStableHeading(heading) : isPreviewHeading(heading)
    );
    if (trackPool.length > 0) {
        return { docsVersion: trackPool[0], matchedExactly: false };
    }
    if (headings.length > 0) {
        return { docsVersion: headings[0], matchedExactly: false };
    }
    return { docsVersion: undefined, matchedExactly: false };
}

/** 从 MicrosoftDocs 的官方 Markdown 中提取指定版本全文。 */
export function extractVersionSection(markdown: string, version: string) {
    const escaped = version.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const heading = new RegExp(`^##\\s+${escaped}\\s*$`, 'm');
    const match = heading.exec(markdown);
    if (!match) return undefined;
    const bodyStart = match.index + match[0].length;
    const nextHeading = /^##\s+/m.exec(markdown.slice(bodyStart));
    const bodyEnd = nextHeading ? bodyStart + nextHeading.index : markdown.length;
    return markdown.slice(bodyStart, bodyEnd).trim();
}

/** 清洗官方 Markdown，避免相对链接在本站失效。 */
export function sanitizeOfficialSection(section: string) {
    return section
        // `[Name](rel.md)` → `Name`
        .replace(/`\[([^\]]+)\]\((?!https?:)[^)]+\)`/g, '`$1`')
        // *[Name](rel.md)* → **Name**
        .replace(/\*\[([^\]]+)\]\((?!https?:)[^)]+\)\*/g, '**$1**')
        .replace(/\[([^\]]+)\]\((?!https?:)[^)]+\)/g, '`$1`')
        // 官方条目常用 ####，降为 ###，挂在本站「稳定版/预览版」二级标题下
        .replace(/^######\s+/gm, '##### ')
        .replace(/^#####\s+/gm, '#### ')
        .replace(/^####\s+/gm, '### ')
        .trim();
}

async function fetchOfficialMarkdown(moduleName: string) {
    if (!hasOfficialChangelog(moduleName)) return undefined;
    const path = cachePath(moduleName);
    if (isFreshCache(path)) {
        return readFileSync(path, 'utf-8');
    }
    try {
        const response = await fetch(rawChangelogUrl(moduleName), {
            headers: { 'user-agent': 'sapi-typedoc' },
            signal: AbortSignal.timeout(20_000)
        });
        if (response.status === 404) return undefined;
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const markdown = await response.text();
        mkdirSync(cacheDir, { recursive: true });
        writeFileSync(path, markdown, 'utf-8');
        return markdown;
    } catch (error) {
        if (existsSync(path)) {
            console.warn(
                `[official-data] ${moduleName} 官方更新日志拉取失败，使用缓存：${String(error)}`
            );
            return readFileSync(path, 'utf-8');
        }
        console.warn(`[official-data] ${moduleName} 无官方更新日志：${String(error)}`);
        return undefined;
    }
}

function buildTrack(
    track: ReleaseTrack,
    npmVersion: string | undefined,
    markdown: string | undefined,
    headings: string[]
): TrackChangelog | undefined {
    if (!npmVersion) return undefined;
    const resolved = resolveVersionHeading(npmVersion, headings, track);
    const section =
        markdown && resolved.docsVersion
            ? extractVersionSection(markdown, resolved.docsVersion)
            : undefined;
    return {
        track,
        npmVersion,
        docsVersion: resolved.docsVersion,
        section: section ? sanitizeOfficialSection(section) : undefined,
        matchedExactly: resolved.matchedExactly
    };
}

/**
 * 为每个 npm 包拉取稳定版 + 预览版官方更新日志全文，并推断版本映射表。
 */
export async function fetchOfficialChangelogBundles(
    moduleNames: string[]
): Promise<ModuleChangelogBundle[]> {
    return Promise.all(
        moduleNames.map(async (moduleName) => {
            const learnUrl = officialChangelogUrl(moduleName);
            if (!hasOfficialChangelog(moduleName)) {
                return { moduleName, learnUrl, tracks: [], versionMap: [] };
            }

            let tracks: TrackChangelog[] = [];
            let versionMap: ApiVersionMapping[] = [];
            try {
                const packument = await fetchNpmPackument(moduleName);
                const { stable, preview } = resolveTrackVersions(packument.distTags);
                versionMap = buildVersionMapping(packument.versions, packument.time);
                const markdown = await fetchOfficialMarkdown(moduleName);
                const headings = markdown ? listVersionHeadings(markdown) : [];
                tracks = [
                    buildTrack('stable', stable, markdown, headings),
                    buildTrack('preview', preview, markdown, headings)
                ].filter((item): item is TrackChangelog => item !== undefined);
            } catch (error) {
                console.warn(`[official-data] ${moduleName} 拉取失败：${String(error)}`);
            }

            return { moduleName, learnUrl, tracks, versionMap };
        })
    );
}
