import { execSync } from 'child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
import { relative as relativePath, resolve as resolvePath } from 'path';
import { Project, SourceFile } from 'ts-morph';
import type { PackageJson } from 'type-fest';
import * as TypeDoc from 'typedoc';
import { syncDocsHome } from './docs-home.js';
import runHooks from './hooks.js';
import { replacePieces, split } from './split.js';
import {
    basePath,
    distPath,
    docsApiPath,
    installLanguages,
    originalPath,
    translatedPath,
    translatingPath,
    type TypeDocLanguages
} from './utils.js';

export type BuildFormat = 'html' | 'markdown';

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

export async function build(translated?: boolean, formats: BuildFormat[] = ['html']) {
    const wantHtml = formats.includes('html');
    const wantMarkdown = formats.includes('markdown');
    if (!wantHtml && !wantMarkdown) {
        throw new Error('build: formats 不能为空');
    }

    const hookContext = { basePath, originalPath, translatingPath, translatedPath, distPath };

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
                    // npm 11+ 项目作用域不允许 CLI --allow-scripts；清掉用户全局配置干扰
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

    // 写出翻译后的 d.ts，供 TypeDoc 读取
    project.saveSync();

    // 仅 Markdown：跳过 HTML convert / afterConvert（含 1.readme 的昂贵 git 扫描）
    if (wantMarkdown && !wantHtml) {
        console.time('[emit:markdown] Total');
        await emitMarkdownDocs(dependencies);
        console.timeEnd('[emit:markdown] Total');
        return translateHookContext;
    }

    // 生成 TypeDoc HTML 页面
    console.time('[analyze] Total');
    const tsdocApplication = await TypeDoc.Application.bootstrapWithPlugins(
        {
            tsconfig: tsConfigFilePath,
            modifierTags: [...TypeDoc.OptionDefaults.modifierTags, '@rc']
        },
        [new TypeDoc.TSConfigReader()]
    );
    installLanguages(tsdocApplication, TypeDocExtraTranslations);
    rmSync(distPath, { recursive: true, force: true });
    const beforeConvertContext = { ...translateHookContext, tsdocApplication };
    await runHooks('beforeConvert', beforeConvertContext);
    const tsdocProject = await tsdocApplication.convert();
    console.timeEnd('[analyze] Total');
    if (!tsdocProject) {
        throw new Error('Convert failed');
    }

    console.time('[emit] Total');
    const afterConvertContext = { ...beforeConvertContext, tsdocProject };
    await runHooks('afterConvert', afterConvertContext);

    await tsdocApplication.generateDocs(tsdocProject, distPath);
    await tsdocApplication.generateJson(tsdocProject, resolvePath(distPath, 'index.json'));
    await runHooks('afterEmit', afterConvertContext);

    if (wantMarkdown) {
        console.time('[emit:markdown] Total');
        await emitMarkdownDocs(dependencies);
        console.timeEnd('[emit:markdown] Total');
    }

    console.timeEnd('[emit] Total');
    return afterConvertContext;
}

/** 单独用 typedoc-plugin-markdown 再转一遍，输出到 docs/api/ 供 MkDocs 使用 */
async function emitMarkdownDocs(dependencies: Partial<Record<string, string>>) {
    const require = createRequire(import.meta.url);
    const markdownPlugin = require.resolve('typedoc-plugin-markdown');
    const mdTsconfig = resolvePath(translatedPath, 'tsconfig.markdown.json');

    // 与 TypeDoc 并行拉取首页/更新日志（网络 I/O），缩短总耗时
    const skipHomeSync = process.env.SAPI_SKIP_DOCS_SYNC === '1';
    const homeSync = skipHomeSync
        ? Promise.resolve()
        : syncDocsHome(dependencies).catch((error) => {
              console.warn(`[emit:markdown] 首页同步失败（继续构建）：${String(error)}`);
          });

    const mdApplication = await TypeDoc.Application.bootstrapWithPlugins(
        {
            tsconfig: mdTsconfig,
            plugin: [markdownPlugin],
            out: docsApiPath,
            // 暂时不导出 vanilla-data（枚举页极多，拖慢 MkDocs）
            exclude: ['**/vanilla-data.d.ts', '**/vanilla-data/**'],
            modifierTags: [...TypeDoc.OptionDefaults.modifierTags, '@rc']
        },
        [new TypeDoc.TSConfigReader()]
    );
    installLanguages(mdApplication, TypeDocExtraTranslations);
    rmSync(docsApiPath, { recursive: true, force: true });
    mkdirSync(docsApiPath, { recursive: true });
    const mdProject = await mdApplication.convert();
    if (!mdProject) {
        throw new Error('Markdown convert failed');
    }
    // TypeDoc 0.28+: generateDocs() 固定写 html；markdown 插件通过 outputs 默认名写出
    await mdApplication.generateOutputs(mdProject);

    const indexMd = resolvePath(docsApiPath, 'index.md');
    if (!existsSync(indexMd)) {
        throw new Error(`Markdown emit 未生成 index.md（请检查 typedoc-plugin-markdown 是否生效）: ${docsApiPath}`);
    }

    // 各模块升为顶栏 Tab；侧栏仅当前模块
    writeMkdocsModuleTabs();
    await homeSync;
}

/** 顶栏模块顺序：server → server-ui → server-net → 其余 */
const MODULE_TAB_ORDER = [
    'server',
    'server-ui',
    'server-net',
    'common',
    'math',
    'server-admin',
    'server-gametest',
    'server-graphics',
    'server-editor',
    'debug-utilities',
    'diagnostics'
];

const MODULE_KIND_ORDER = ['classes', 'interfaces', 'enumerations', 'functions', 'variables', 'types'] as const;

/** 侧栏类型分组：Material 内置图标（material/*），文字仅作无障碍标题 */
const MODULE_KIND_META: Record<
    (typeof MODULE_KIND_ORDER)[number],
    { icon: string; title: string }
> = {
    classes: { icon: 'material/code-braces', title: '类' },
    interfaces: { icon: 'material/application-brackets-outline', title: '接口' },
    enumerations: { icon: 'material/format-list-bulleted-type', title: '枚举' },
    functions: { icon: 'material/function-variant', title: '函数' },
    variables: { icon: 'material/variable', title: '变量' },
    types: { icon: 'material/code-json', title: '类型别名' }
};

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

/** 生成 docs/.pages 与各模块 .pages，供 Material tabs + awesome-pages */
function writeMkdocsModuleTabs() {
    const docsDir = resolvePath(basePath, 'docs');
    const reservedTopLevel = new Set(['api', 'changelog', 'index.md', 'sync.md', '.pages']);

    const moduleDirs = readdirSync(docsApiPath, { withFileTypes: true })
        .filter(
            (d) =>
                d.isDirectory() &&
                d.name !== 'assets' &&
                existsSync(resolvePath(docsApiPath, d.name, 'index.md'))
        )
        .map((d) => d.name);

    const ordered = [
        ...MODULE_TAB_ORDER.filter((m) => moduleDirs.includes(m)),
        ...moduleDirs.filter((m) => !MODULE_TAB_ORDER.includes(m)).sort()
    ];

    // 清理旧的顶栏模块目录（避免残留已下线的包）
    for (const entry of readdirSync(docsDir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        if (reservedTopLevel.has(entry.name)) continue;
        if (ordered.includes(entry.name) || MODULE_TAB_ORDER.includes(entry.name)) {
            rmSync(resolvePath(docsDir, entry.name), { recursive: true, force: true });
        }
    }

    // 提升到 docs/<mod>，这样才是真正的顶栏分组（侧栏仅含该模块）
    for (const mod of ordered) {
        const src = resolvePath(docsApiPath, mod);
        const dest = resolvePath(docsDir, mod);
        moveDirectorySync(src, dest);

        const entries = readdirSync(dest, { withFileTypes: true });
        const kindDirs = new Set(entries.filter((e) => e.isDirectory()).map((e) => e.name));
        const navItems = ['index.md'];
        for (const kind of MODULE_KIND_ORDER) {
            if (!kindDirs.has(kind)) continue;
            navItems.push(kind);
            writeKindSection(resolvePath(dest, kind), kind);
        }
        // 其它未列入的子目录仍自动收录
        navItems.push('...');
        writeFileSync(
            resolvePath(dest, '.pages'),
            [`title: ${mod}`, 'nav:', ...navItems.map((item) => `  - ${item}`), ''].join('\n'),
            'utf-8'
        );
    }

    // api/ 内索引页仍保留（docs:serve 缓存标记），链接改为顶栏模块路径
    for (const fileName of ['index.md', 'modules.md']) {
        const filePath = resolvePath(docsApiPath, fileName);
        if (!existsSync(filePath)) continue;
        const patched = readFileSync(filePath, 'utf-8').replace(
            /\(([\w.-]+)\/index\.md\)/g,
            '(../$1/index.md)'
        );
        writeFileSync(filePath, patched, 'utf-8');
    }

    // 首页侧栏仅保留「首页 + 更新日志」；API 总览不再挂入导航
    const rootNav = [
        'nav:',
        '  - 首页:',
        '    - index.md',
        '    - 更新日志: changelog',
        ...ordered.map((m) => `  - ${m}`),
        '  - 同步: sync.md',
        ''
    ];
    writeFileSync(resolvePath(docsDir, '.pages'), rootNav.join('\n'), 'utf-8');

    // 隐藏 api/ 目录，避免孤儿页进站点导航（文件仍保留供缓存检测）
    writeFileSync(
        resolvePath(docsApiPath, '.pages'),
        ['title: api', 'hide: true', 'nav:', '  - index.md', '  - modules.md', ''].join('\n'),
        'utf-8'
    );

    console.log(`[mkdocs-nav] 顶栏模块: ${ordered.join(', ')}`);
}

/**
 * 为 classes / interfaces 等目录写入可折叠分组（纯原版 Material，无自定义 CSS）：
 * - 分组标题：Material 内置 icon + 中文文字（如 “类”）
 * - 成员页：用 icon front matter 表示种类，标题去掉 “类：” 前缀
 * - classes / interfaces：按本模块内「继承」嵌套侧栏，并用 search.boost 提高父级权重
 */
function writeKindSection(kindDir: string, kind: (typeof MODULE_KIND_ORDER)[number]) {
    const meta = MODULE_KIND_META[kind];
    writeFileSync(
        resolvePath(kindDir, 'index.md'),
        [
            '---',
            `icon: ${meta.icon}`,
            `title: ${meta.title}`,
            'hide:',
            '  - toc',
            '  - path',
            '---',
            '',
            `# ${meta.title}`,
            '',
            `本分组收录当前模块的全部${meta.title}，请在左侧展开查看。`,
            ''
        ].join('\n'),
        'utf-8'
    );

    const memberFiles = readdirSync(kindDir)
        .filter((name) => name.endsWith('.md') && name !== 'index.md')
        .sort((a, b) => a.localeCompare(b));

    const useInheritance = kind === 'classes' || kind === 'interfaces';
    const graph = useInheritance ? buildInheritanceGraph(kindDir, memberFiles) : undefined;

    for (const file of memberFiles) {
        const depth = graph?.depthOf.get(file) ?? 0;
        const boost = useInheritance ? boostForInheritanceDepth(depth) : undefined;
        patchMemberMarkdown(resolvePath(kindDir, file), meta.icon, boost);
    }

    const navLines = graph
        ? renderInheritanceNavLines(graph)
        : memberFiles.map((file) => `  - ${file}`);

    writeFileSync(
        resolvePath(kindDir, '.pages'),
        [`title: ${meta.title}`, 'nav:', '  - index.md', ...navLines, ''].join('\n'),
        'utf-8'
    );
}

/** 从「## 继承」小节提取指向本目录的父页（忽略跨模块链接）。 */
function parseLocalParents(content: string, knownFiles: Set<string>): string[] {
    const heading = /^## 继承\s*$/m.exec(content);
    if (!heading) return [];
    const bodyStart = heading.index + heading[0].length;
    const rest = content.slice(bodyStart);
    const nextHeading = /^##\s+/m.exec(rest);
    const section = nextHeading ? rest.slice(0, nextHeading.index) : rest;
    const parents: string[] = [];
    for (const match of section.matchAll(/\]\(([^)]+)\)/g)) {
        let href = match[1].trim();
        if (href.startsWith('./')) href = href.slice(2);
        // 跨目录 / 跨模块（含 /）忽略
        if (href.includes('/') || !href.endsWith('.md')) continue;
        if (knownFiles.has(href) && !parents.includes(href)) {
            parents.push(href);
        }
    }
    return parents;
}

interface InheritanceGraph {
    childrenOf: Map<string, string[]>;
    roots: string[];
    depthOf: Map<string, number>;
}

/**
 * 按本模块继承关系建树。多父时取字母序第一个本模块父；成环则断边。
 */
function buildInheritanceGraph(kindDir: string, memberFiles: string[]): InheritanceGraph {
    const knownFiles = new Set(memberFiles);
    const parentOf = new Map<string, string>();

    for (const file of memberFiles) {
        const content = readFileSync(resolvePath(kindDir, file), 'utf-8');
        const parents = parseLocalParents(content, knownFiles)
            .filter((parent) => parent !== file)
            .sort((a, b) => a.localeCompare(b));
        if (parents.length > 0) {
            parentOf.set(file, parents[0]);
        }
    }

    // 断环：沿父链走，若回到已访问节点则删除当前边
    for (const child of [...parentOf.keys()]) {
        const seen = new Set<string>();
        let current: string | undefined = child;
        while (current && parentOf.has(current)) {
            if (seen.has(current)) {
                parentOf.delete(current);
                break;
            }
            seen.add(current);
            current = parentOf.get(current);
        }
    }

    const childrenOf = new Map<string, string[]>();
    for (const [child, parent] of parentOf) {
        const list = childrenOf.get(parent);
        if (list) list.push(child);
        else childrenOf.set(parent, [child]);
    }

    // 排序规则：可展开项（有子）优先置顶，其后为叶子；同组内按字母序
    const hasChildren = (file: string) => (childrenOf.get(file)?.length ?? 0) > 0;
    const byExpandableThenName = (a: string, b: string) => {
        const diff = Number(hasChildren(b)) - Number(hasChildren(a));
        return diff !== 0 ? diff : a.localeCompare(b);
    };
    for (const children of childrenOf.values()) {
        children.sort(byExpandableThenName);
    }

    const roots = memberFiles.filter((file) => !parentOf.has(file)).sort(byExpandableThenName);
    const depthOf = new Map<string, number>();

    function assignDepth(file: string, depth: number) {
        depthOf.set(file, depth);
        for (const child of childrenOf.get(file) ?? []) {
            assignDepth(child, depth + 1);
        }
    }
    for (const root of roots) {
        assignDepth(root, 0);
    }

    return { childrenOf, roots, depthOf };
}

/** 继承深度 → search.boost（父高子低；取值温和，避免压过标题匹配）。 */
function boostForInheritanceDepth(depth: number): number {
    if (depth <= 0) return 1.2;
    if (depth === 1) return 1.1;
    if (depth === 2) return 1.0;
    return 0.95;
}

function renderInheritanceNavLines(graph: InheritanceGraph): string[] {
    const { childrenOf, roots } = graph;

    function renderNode(file: string, depth: number): string[] {
        const pad = '  '.repeat(depth + 1);
        const children = childrenOf.get(file) ?? [];
        if (children.length === 0) {
            return [`${pad}- ${file}`];
        }
        const sectionName = file.replace(/\.md$/i, '');
        const lines = [`${pad}- ${sectionName}:`, `${pad}  - ${file}`];
        for (const child of children) {
            lines.push(...renderNode(child, depth + 1));
        }
        return lines;
    }

    return roots.flatMap((file) => renderNode(file, 0));
}

/**
 * 给成员页加 icon（侧栏去掉「类：」前缀）、可选 search.boost，并补上构造函数锚点。
 */
function patchMemberMarkdown(filePath: string, icon: string, searchBoost?: number) {
    let content = readFileSync(filePath, 'utf-8');
    let changed = false;

    if (!content.startsWith('---')) {
        const headingMatch = /^#\s+(.+?)\s*$/m.exec(content);
        const heading = headingMatch?.[1] ?? '';
        const colonIndex = heading.indexOf(': ');
        const symbolName = colonIndex >= 0 ? heading.slice(colonIndex + 2).trim() : heading.trim();
        if (symbolName) {
            const frontMatter = [
                '---',
                `icon: ${icon}`,
                `title: "${symbolName.replace(/"/g, '\\"')}"`,
                ...(searchBoost !== undefined
                    ? ['search:', `  boost: ${searchBoost}`]
                    : []),
                '---',
                '',
                ''
            ].join('\n');
            content = frontMatter + content;
            changed = true;
        }
    }

    const withAnchors = content
        .replace(/^## 构造函数\s*$/gm, '## 构造函数 {#constructors}')
        .replace(/^### 构造函数\s*$/gm, '### 构造函数 {#constructor}');
    if (withAnchors !== content) {
        content = withAnchors;
        changed = true;
    }

    if (changed) {
        writeFileSync(filePath, content, 'utf-8');
    }
}
