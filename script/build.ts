import { execSync } from 'child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
import { relative as relativePath, resolve as resolvePath } from 'path';
import { Project, SourceFile } from 'ts-morph';
import type { PackageJson } from 'type-fest';
import runHooks from './hooks.js';
import { replacePieces, split } from './split.js';
import { serializeExamples } from './hooks/1.example-extractor.js';
import {
    basePath,
    buildMetaPath,
    originalPath,
    translatedPath,
    translatingPath,
    type TypeDocLanguages
} from './utils.js';

declare module 'typedoc' {
    interface TranslatableStrings {
        tag_rc: [];
    }
}

const TypeDocExtraTranslations: TypeDocLanguages = {
    zh: {
        tag_rc: '预览版',
        tag_beta: '实验性'
    },
    en: {
        tag_rc: 'Preview',
        tag_beta: 'Beta'
    }
};

const namespacePrefix = '@minecraft/';
const botModules = ['@minecraft/vanilla-data'];
const skipResolutionModules: string[] = [];

function readPackageInfo(modulePath: string) {
    const packageInfoPath = resolvePath(modulePath, 'package.json');
    if (existsSync(packageInfoPath)) {
        try {
            return JSON.parse(readFileSync(packageInfoPath, 'utf-8')) as PackageJson;
        } catch {
            /* ignore */
        }
    }
}

function readPackageInfoOrThrow(modulePath: string) {
    const packageInfo = readPackageInfo(modulePath);
    if (!packageInfo) {
        throw new Error(`package.json not exist or cannot read: ${modulePath}`);
    }
    return packageInfo;
}

function findModuleOrThrow(moduleName: string, root: string) {
    const localRequire = createRequire(resolvePath(root, 'node_modules'));
    const searchPaths = localRequire.resolve.paths(moduleName);
    if (searchPaths) {
        for (const searchPath of searchPaths) {
            const modulePath = resolvePath(searchPath, moduleName);
            const moduleDesc = readPackageInfo(modulePath);
            if (moduleDesc && moduleDesc.name === moduleName) {
                return modulePath;
            }
        }
    }
    throw new Error(`Cannot find module ${moduleName} in ${root}`);
}

function walkFiles(directory: string, walker: (directory: string, fileName: string | null, path: string) => void) {
    const files = readdirSync(directory, { withFileTypes: true });
    walker(directory, null, directory);
    files.forEach((file) => {
        if (file.isDirectory()) {
            walkFiles(resolvePath(directory, file.name), walker);
        } else {
            walker(directory, file.name, resolvePath(directory, file.name));
        }
    });
}

function getModuleSourceFiles(fromPath: string, moduleSpecifier: string) {
    const project = new Project();
    const sourceFile = project.createSourceFile(resolvePath(fromPath, '__temp_module_resolution__.ts'));
    const rootDecl = sourceFile.addExportDeclaration({ moduleSpecifier });
    const referencedFiles: string[] = [];
    const walk = (source: SourceFile | undefined) => {
        if (!source) return;
        const path = source.getFilePath();
        if (referencedFiles.includes(path)) return;
        referencedFiles.push(path);
        const importDecl = source.getImportDeclarations();
        const exportDecl = source.getExportDeclarations();
        importDecl.forEach((decl) => {
            walk(decl.getModuleSpecifierSourceFile());
        });
        exportDecl.forEach((decl) => {
            walk(decl.getModuleSpecifierSourceFile());
        });
    };
    walk(rootDecl.getModuleSpecifierSourceFile());
    return referencedFiles.map((e) => resolvePath(e));
}

function getCommonStringFromStart(a: string, b: string) {
    let len = Math.min(a.length, b.length);
    while (len > 0) {
        if (a.slice(0, len) === b.slice(0, len)) {
            return a.slice(0, len);
        }
        len -= 1;
    }
    return '';
}

function sleepSync(ms: number) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

/**
 * 移动目录。Windows 上刚写完的目录句柄释放有延迟（杀软/索引会短暂占用），
 * 直接 renameSync 可能报 EPERM，因此退避重试，仍失败则退化为复制 + 删除。
 */
function moveDirectorySync(src: string, dest: string) {
    const removeOptions = { recursive: true, force: true, maxRetries: 5, retryDelay: 100 } as const;
    rmSync(dest, removeOptions);
    for (let attempt = 0; attempt < 5; attempt += 1) {
        try {
            renameSync(src, dest);
            return;
        } catch (err) {
            const code = (err as NodeJS.ErrnoException).code;
            if (code !== 'EPERM' && code !== 'EBUSY' && code !== 'ENOTEMPTY' && code !== 'EACCES') {
                throw err;
            }
            sleepSync(100 * (attempt + 1));
        }
    }
    cpSync(src, dest, { recursive: true });
    rmSync(src, removeOptions);
}

export interface BuildResult {
    sourceFiles: SourceFile[];
    dependencies: Partial<Record<string, string>>;
}

/**
 * 翻译管线：加载 original/ 中的 @minecraft/*.d.ts → 切分翻译单元 →
 * 替换已翻译内容 → 保存到 translated/*.d.ts → 保存构建元数据。
 *
 * 不再包含 TypeDoc 转换 / Markdown 输出（由 @rspress/plugin-typedoc 负责）。
 */
export async function build(translated = true): Promise<BuildResult> {
    const hookContext = { basePath, originalPath, translatingPath, translatedPath, distPath: '' };

    // 尝试加载翻译文件对应版本的 package.json
    console.time('[restoreDependencies] Total');
    const originalPackageJsonPath = resolvePath(originalPath, 'package.json');
    const cachedPackageJsonPath = resolvePath(translatedPath, 'package.json');
    const originalPackageJsonData = readFileSync(originalPackageJsonPath);
    if (existsSync(cachedPackageJsonPath)) {
        writeFileSync(originalPackageJsonPath, readFileSync(cachedPackageJsonPath));
    }

    // 使依赖与 package.json 同步（只要 .d.ts；可复用已有 node_modules）
    const modulesReady = existsSync(resolvePath(originalPath, 'node_modules', '@minecraft'));
    try {
        if (modulesReady && process.env.SAPI_FORCE_NPM_INSTALL !== '1') {
            console.log('[restoreDependencies] reuse existing original/node_modules (set SAPI_FORCE_NPM_INSTALL=1 to refresh)');
        } else {
            execSync('npm install --ignore-scripts', {
                cwd: originalPath,
                stdio: 'inherit',
                env: {
                    ...process.env,
                    npm_config_allow_scripts: ''
                }
            });
        }
    } finally {
        writeFileSync(originalPackageJsonPath, originalPackageJsonData);
    }
    console.timeEnd('[restoreDependencies] Total');

    // 从依赖中构建用于生成文档的项目
    console.time('[loadOriginal] Total');
    await runHooks('beforeLoad', hookContext);
    const tsConfigFilePath = resolvePath(translatedPath, 'tsconfig.json');
    const project = new Project({
        tsConfigFilePath,
        skipAddingFilesFromTsConfig: true
    });
    const sourceFiles: SourceFile[] = [];
    const dependencies = readPackageInfo(originalPath)?.dependencies ?? {};
    Object.keys(dependencies).forEach((moduleName) => {
        if (moduleName.startsWith(namespacePrefix)) {
            const pureModuleName = moduleName.slice(namespacePrefix.length);
            const modulePath = findModuleOrThrow(moduleName, originalPath);
            const packageInfo = readPackageInfoOrThrow(modulePath);
            const version = packageInfo.version;
            console.log(`Loading d.ts for ${moduleName}@${version ?? 'undefined'}`);
            let dtsFiles: string[] = [];
            walkFiles(modulePath, (dir, file, path) => {
                if (file?.endsWith('.d.ts')) {
                    const relPath = relativePath(modulePath, path);
                    if (!relPath.includes('node_modules')) {
                        dtsFiles.push(path);
                    }
                }
            });
            if (!skipResolutionModules.includes(moduleName)) {
                const moduleSourceFiles = getModuleSourceFiles(originalPath, moduleName);
                dtsFiles = dtsFiles.filter((e) => moduleSourceFiles.includes(e));
            }
            if (dtsFiles.length < 1) {
                throw new Error(`Cannot find any d.ts for ${moduleName}`);
            }
            if (dtsFiles.length === 1) {
                const sourceFile = project.createSourceFile(
                    resolvePath(translatedPath, `${pureModuleName}.d.ts`),
                    readFileSync(dtsFiles[0], 'utf-8').replace(/\r\n|\r/g, '\n'),
                    { overwrite: true }
                );
                if (!botModules.includes(moduleName)) sourceFiles.push(sourceFile);
            } else {
                const typeEntry = resolvePath(modulePath, packageInfo.types ?? 'index.d.ts').replace(/\.d\.ts$/i, '');
                const commonParent = dtsFiles
                    .map((path) => resolvePath(path, '..'))
                    .reduce((common, parent) => getCommonStringFromStart(common, parent));
                const moduleRoot = resolvePath(translatedPath, pureModuleName);
                const moduleEntry = resolvePath(moduleRoot, relativePath(commonParent, typeEntry));
                const moduleEntryRelative = `./${relativePath(translatedPath, moduleEntry).replace(/\\/g, '/')}`;
                const exportStatement = `export * from ${JSON.stringify(moduleEntryRelative)};`;
                dtsFiles.forEach((file) => {
                    const target = resolvePath(moduleRoot, relativePath(commonParent, file));
                    mkdirSync(resolvePath(target, '..'), { recursive: true });
                    const sourceFile = project.createSourceFile(
                        target,
                        readFileSync(file, 'utf-8').replace(/\r\n|\r/g, '\n'),
                        { overwrite: true }
                    );
                    if (!botModules.includes(moduleName)) sourceFiles.push(sourceFile);
                });
                const indexSourceFile = project.createSourceFile(
                    resolvePath(translatedPath, `${pureModuleName}.d.ts`),
                    exportStatement,
                    { overwrite: true }
                );
                if (!botModules.includes(moduleName)) sourceFiles.push(indexSourceFile);
            }
            dependencies[moduleName] = version;
        }
    });
    const translateHookContext = { ...hookContext, basePath, project, sourceFiles, dependencies };
    await runHooks('afterLoad', translateHookContext);
    console.timeEnd('[loadOriginal] Total');

    if (translated) {
        // 将顶层成员替换为带翻译的版本
        console.time('[translate] Total');
        sourceFiles.forEach((sourceFile) => {
            const pieces = split(sourceFile);
            replacePieces(sourceFile, pieces);
        });
        await runHooks('afterTranslate', translateHookContext);
        console.timeEnd('[translate] Total');
    }

    // 写出翻译后的 d.ts，供 @rspress/plugin-typedoc 读取
    project.saveSync();

    // 保存构建元数据（供 rspress setup 函数读取）
    const examplesData = serializeExamples();
    writeFileSync(
        buildMetaPath,
        JSON.stringify(
            {
                dependencies,
                translations: TypeDocExtraTranslations,
                examples: examplesData,
                timestamp: Date.now()
            },
            null,
            2
        ),
        'utf-8'
    );
    console.log(`[build] 翻译完成，元数据已保存到 ${buildMetaPath}`);

    return { sourceFiles, dependencies };
}
