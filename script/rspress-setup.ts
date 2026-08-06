/**
 * @rspress/plugin-typedoc 的 setup 函数。
 *
 * 在 rspress 构建时被调用，负责：
 * 1. 读取 pre-build 阶段保存的元数据（dependencies、examples）
 * 2. 应用 beforeConvert hooks（安装语言、设置 tags）
 * 3. 通过 Converter.EVENT_RESOLVE_END 注册 afterConvert hooks
 *    （修复链接、创建示例页面、创建执行权限摘要）
 *
 * 跳过的 hooks：
 * - 3.docs-home.ts — 由 npm run docs:sync / afterUpdate 维护，不在 typedoc setup 内跑
 */
import { existsSync, readFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { Application, Converter } from 'typedoc';
import type { BeforeConvertHookContext } from './hooks/hook.js';
import { buildMetaPath, installLanguages, translatedPath, type TypeDocLanguages } from './utils.js';
import { loadExamples } from './hooks/1.example-extractor.js';

// 直接导入 TypeDoc 转换期 hooks（docs-home 走 afterUpdate / docs:sync）
import exampleExtractor from './hooks/1.example-extractor.js';
import executionPrivileges from './hooks/1.execution-privileges.js';
import fixLinkInlineTags from './hooks/1.fix-link-inline-tags.js';
import rewriteDefinedIn from './hooks/1.rewrite-defined-in.js';
import corruptionFixer from './hooks/0.corruption-fixer.js';

interface BuildMeta {
    dependencies: Record<string, string>;
    translations: TypeDocLanguages;
    examples: Record<string, { content: string; hash: string; fileName: string; sources: { source: string; fileName: string; path: string }[] }[]>;
}

function loadBuildMeta(): BuildMeta | null {
    if (!existsSync(buildMetaPath)) {
        console.warn('[rspress-setup] 未找到构建元数据，请先运行 npm run build:translate');
        return null;
    }
    return JSON.parse(readFileSync(buildMetaPath, 'utf-8')) as BuildMeta;
}

export async function setupTypeDoc(app: Application): Promise<Application> {
    const meta = loadBuildMeta();
    if (!meta) return app;

    // 恢复 examples 数据（供 example-extractor afterConvert 使用）
    loadExamples(meta.examples);

    // 安装 build.ts 中的翻译
    installLanguages(app, meta.translations);

    // beforeConvert hooks 仅需 tsdocApplication，其余字段在 rspress 构建期不可用，以占位值填充
    const baseCtx: Omit<BeforeConvertHookContext, 'tsdocApplication'> = {
        basePath: resolvePath(buildMetaPath, '..', '..'),
        originalPath: '',
        translatingPath: '',
        translatedPath,
        distPath: '',
        project: undefined as never,
        sourceFiles: [],
        dependencies: meta.dependencies
    };

    // —— beforeConvert hooks ——

    // corruption-fixer: 检查 afterLoad 阶段是否有错误（有则在 pre-build 已抛出）
    if (corruptionFixer.beforeConvert) {
        corruptionFixer.beforeConvert({ ...baseCtx, tsdocApplication: app });
    }

    // example-extractor: 安装语言、设置 blockTags
    // beforeConvert 中的 HTML 渲染覆写在 markdown 模式下会自动跳过
    if (exampleExtractor.beforeConvert) {
        exampleExtractor.beforeConvert({ ...baseCtx, tsdocApplication: app });
    }

    // execution-privileges: 安装语言、设置 modifierTags、visibilityFilters
    if (executionPrivileges.beforeConvert) {
        executionPrivileges.beforeConvert({ ...baseCtx, tsdocApplication: app });
    }

    // —— afterConvert hooks（通过 converter 事件在解析完成后执行）——
    app.converter.on(Converter.EVENT_RESOLVE_END, (context) => {
        const project = context.project;
        const afterConvertContext = {
            basePath: resolvePath(buildMetaPath, '..', '..'),
            originalPath: '',
            translatingPath: '',
            translatedPath,
            distPath: '',
            project: undefined as never,
            sourceFiles: [],
            dependencies: meta.dependencies,
            tsdocApplication: app,
            tsdocProject: project
        };

        // 修复 @link 内联标签
        if (fixLinkInlineTags.afterConvert) {
            fixLinkInlineTags.afterConvert(afterConvertContext);
        }

        // 重写 "defined in" 文件路径
        if (rewriteDefinedIn.afterConvert) {
            rewriteDefinedIn.afterConvert(afterConvertContext);
        }

        // 创建示例页面、修复 @seeExample 标签
        if (exampleExtractor.afterConvert) {
            exampleExtractor.afterConvert(afterConvertContext);
        }

        // 创建执行权限摘要页面
        if (executionPrivileges.afterConvert) {
            executionPrivileges.afterConvert(afterConvertContext);
        }
    });

    return app;
}
