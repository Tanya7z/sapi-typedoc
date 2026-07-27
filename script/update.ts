import { execSync } from 'child_process';
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { basename, dirname, relative, resolve as resolvePath } from 'path';
import type { PackageJson } from 'type-fest';
import { build } from './build.js';
import runHooks from './hooks.js';
import { split, writePiece } from './split.js';
import {
    basePath,
    comparePackageVersion,
    originalPath,
    parsePackageVersion,
    translatedPath,
    translatingPath,
    type PackageVersion
} from './utils.js';

/** 在备份树中查找与目标 piece 对应的旧译文（精确路径，或同目录大小写不敏感） */
function findBackupPiece(backupRoot: string, piecePath: string): string | undefined {
    const rel = relative(translatingPath, piecePath);
    const exact = resolvePath(backupRoot, rel);
    if (existsSync(exact)) return exact;
    const dir = resolvePath(backupRoot, dirname(rel));
    if (!existsSync(dir)) return undefined;
    const want = basename(rel).toLowerCase();
    const hit = readdirSync(dir).find((f) => f.toLowerCase() === want);
    return hit ? resolvePath(dir, hit) : undefined;
}

const excludedPackages = ['@minecraft/dummy-package', '@minecraft/core-build-tasks', '@minecraft/creator-tools'];

export async function update(
    keepCachedPackageJson?: boolean,
    options?: { skipCheckout?: boolean }
) {
    const skipCheckout = options?.skipCheckout === true || process.env.SAPI_UPDATE_SKIP_CHECKOUT === '1';

    // 强制检出 original 分支（CI 可设 skipCheckout，直接在当前工作树更新）
    if (!skipCheckout) {
        const head = execSync('git rev-parse --abbrev-ref HEAD', {
            cwd: basePath
        })
            .toString('utf-8')
            .trim();
        if (head !== 'original' && head !== 'HEAD') {
            execSync('git checkout original', {
                cwd: basePath,
                stdio: 'inherit'
            });
        }
    } else {
        console.log('[update] skipCheckout=true，保持当前分支，仅刷新 npm @minecraft d.ts');
    }

    // 保证 npm 可以识别 overrides 属性
    const npmVersion = execSync('npm -v', { encoding: 'utf-8' });
    const majorNpmVersion = parseInt(npmVersion);
    if (majorNpmVersion < 8) {
        throw new Error(`NPM version should be >= 8, currently ${npmVersion}`);
    }

    // 获取 @minecraft 组织下的包
    const scopedPackages = JSON.parse(execSync('npm search --json scope:minecraft', { encoding: 'utf-8' })) as {
        name: string;
    }[];
    const onlinePackageNames = scopedPackages
        .map((packageInfo) => packageInfo.name)
        .filter((packageName) => !excludedPackages.includes(packageName));

    // 清除 node_modules 与缓存的 package.json
    const packageInfoPath = resolvePath(originalPath, 'package.json');
    const packageSnapshotPath = resolvePath(translatedPath, 'package.json');
    if (!keepCachedPackageJson && existsSync(packageSnapshotPath)) {
        rmSync(packageSnapshotPath);
    }
    const originalNodeModulesDir = resolvePath(originalPath, 'node_modules');
    if (existsSync(originalNodeModulesDir)) {
        rmSync(originalNodeModulesDir, { recursive: true, force: true });
    }
    const packageInfoData = readFileSync(packageInfoPath);
    const packageInfo = JSON.parse(packageInfoData.toString('utf-8')) as PackageJson;

    // 不使用翻译构建项目
    const buildResult = await build(false);
    const { sourceFiles, dependencies } = buildResult;

    // 检查是否所有包都在依赖中
    const missingDependencies = onlinePackageNames.filter((packageName) => !(packageName in dependencies));
    if (missingDependencies.length > 0 && missingDependencies.length <= 5) {
        throw new Error(`Missing dependencies: ${missingDependencies.join(',')}`);
    }

    if (!keepCachedPackageJson) {
        const cacheDependencyOverwrite: Record<string, string> = {};
        for (const [dependencyName, depVersion] of Object.entries(dependencies)) {
            if (!depVersion) continue;
            const requiredVersion = packageInfo.dependencies?.[dependencyName];
            const parsedVersion = parsePackageVersion(depVersion);
            if (requiredVersion === 'beta' && parsedVersion?.gamePreRelease !== 'preview') {
                // 强制所有指定 beta 标签的包使用 preview 分支
                const onlineVersionNames = JSON.parse(
                    execSync(`npm view --json ${dependencyName} versions`, { encoding: 'utf-8' })
                ) as string[];
                const onlineVersions = onlineVersionNames
                    .map((e) => [e, parsePackageVersion(e)] as const)
                    .filter((e): e is [string, PackageVersion] => e[1] !== undefined)
                    .sort((a, b) => comparePackageVersion(a[1], b[1]));
                const selected = onlineVersions[onlineVersions.length - 1];
                console.log(
                    `Package ${dependencyName} uses a stable version ${depVersion}, which will be replaced by ${selected[0]}.`
                );
                cacheDependencyOverwrite[dependencyName] = selected[0];
            }
        }
        if (Object.keys(cacheDependencyOverwrite).length > 0) {
            writeFileSync(
                packageSnapshotPath,
                JSON.stringify(
                    {
                        ...packageInfo,
                        dependencies: { ...dependencies, ...cacheDependencyOverwrite }
                    },
                    null,
                    2
                )
            );
            await update(true, options);
            return;
        }
    }

    // 先备份已有译文，再按最新官方 d.ts 重切；切完后把旧中文写回同路径 piece，
    // 避免周更 CI 用英文原文覆盖 translate-pieces 导致站点中文消失。
    const translatingBackupPath = resolvePath(basePath, 'cache', 'translate-pieces-backup');
    if (existsSync(translatingBackupPath)) {
        rmSync(translatingBackupPath, { recursive: true, force: true });
    }
    if (existsSync(translatingPath)) {
        mkdirSync(resolvePath(translatingBackupPath, '..'), { recursive: true });
        cpSync(translatingPath, translatingBackupPath, { recursive: true });
        console.log('[update] 已备份 translate-pieces，切分后将恢复已有译文');
    }

    rmSync(translatingPath, { recursive: true, force: true });
    await runHooks('beforeUpdate', buildResult);
    let restoredCount = 0;
    let freshCount = 0;
    sourceFiles.forEach((sourceFile) => {
        const pieces = split(sourceFile);
        pieces.forEach((piece) => {
            writePiece(sourceFile, piece);
            // 生成的 index/export 片始终用最新原文；其余优先恢复备份中的中文
            if (piece.generated) return;
            const backupFile = findBackupPiece(translatingBackupPath, piece.path);
            if (backupFile) {
                writeFileSync(piece.path, readFileSync(backupFile));
                restoredCount++;
            } else {
                freshCount++;
            }
        });
    });
    console.log(`[update] 已恢复译文 ${restoredCount} 个 piece，新增待译 ${freshCount} 个`);
    await runHooks('afterUpdate', buildResult);

    // 生成 package.json 快照
    writeFileSync(packageSnapshotPath, JSON.stringify({ ...packageInfo, dependencies }, null, 2));
}
