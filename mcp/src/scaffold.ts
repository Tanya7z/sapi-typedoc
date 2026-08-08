import { randomUUID } from 'node:crypto';
import type { VersionsIndex } from './types.js';

export type ScaffoldLanguage = 'ts' | 'js';
export type ScaffoldTrack = 'preview' | 'stable';

export type ScaffoldOptions = {
  language: ScaffoldLanguage;
  packName: string;
  /** 不含 @minecraft/ 前缀，如 server、server-ui */
  modules: string[];
  track?: ScaffoldTrack;
  includeEmptyResourcePack?: boolean;
};

export type ScaffoldFile = {
  path: string;
  content: string;
};

export type ScaffoldResult = {
  language: ScaffoldLanguage;
  packName: string;
  rootDir: string;
  files: ScaffoldFile[];
  workflow: string;
  note: string;
};

function sanitizePackName(name: string): string {
  const cleaned = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, '_')
    .replace(/^_+|_+$/g, '');
  return cleaned || 'demo_pack';
}

function resolveManifestVersion(
  versions: VersionsIndex,
  module: string,
  track: ScaffoldTrack,
): string {
  const pkg = versions.packages[`@minecraft/${module}`];
  if (!pkg) {
    // 未知模块时给常见占位
    return '1.0.0-beta';
  }
  if (track === 'stable') {
    if (pkg.stable) {
      // stable 可能是完整 npm 版本
      const m = /^(\d+\.\d+\.\d+(?:-[a-zA-Z]+)?)/.exec(pkg.stable);
      return m?.[1] ?? pkg.manifest;
    }
    // 无稳定轨信息时回退 manifest（文档锁定）
    return pkg.manifest;
  }
  return pkg.manifest;
}

function parseMinEngine(gameVersion?: string): [number, number, number] {
  if (!gameVersion) return [1, 21, 0];
  const parts = gameVersion.split('.').map((x) => Number.parseInt(x, 10));
  const major = Number.isFinite(parts[0]) ? parts[0]! : 1;
  const minor = Number.isFinite(parts[1]) ? parts[1]! : 21;
  const patch = Number.isFinite(parts[2]) ? parts[2]! : 0;
  return [major, minor, patch];
}

function displayName(packName: string): string {
  return packName
    .split('_')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function mainScript(packName: string): string {
  return `import { world, system } from '@minecraft/server';

system.run(() => {
  console.log('[${packName}] Script API 已加载');
});

world.afterEvents.playerSpawn.subscribe((event) => {
  if (!event.initialSpawn) return;
  event.player.sendMessage('Hello from Script API!');
});
`;
}

/** 生成行为包脚本工程文件树（由宿主 Agent 写入磁盘） */
export function buildScriptProject(
  versions: VersionsIndex,
  options: ScaffoldOptions,
): ScaffoldResult {
  const language = options.language;
  const packName = sanitizePackName(options.packName);
  const modules = [...(options.modules.length > 0 ? options.modules : ['server'])];
  if (!modules.includes('server')) modules.unshift('server');
  const track = options.track ?? 'preview';
  const rootDir = packName;
  const bpDir = `${rootDir}/behavior_packs/${packName}`;
  const headerUuid = randomUUID();
  const moduleUuid = randomUUID();
  const minEngine = parseMinEngine(versions.gameVersion);

  const deps = modules.map((mod) => ({
    module_name: `@minecraft/${mod}`,
    version: resolveManifestVersion(versions, mod, track),
  }));

  // script 模块在 BP 内始终以 JS 为入口；TS 工程构建输出到此路径
  const entry = 'scripts/main.js';

  const manifest = {
    format_version: 2,
    header: {
      name: displayName(packName),
      description: `${displayName(packName)} Script API pack`,
      uuid: headerUuid,
      version: [1, 0, 0],
      min_engine_version: minEngine,
    },
    modules: [
      {
        type: 'script',
        language: 'javascript',
        uuid: moduleUuid,
        entry,
        version: [1, 0, 0],
      },
    ],
    dependencies: deps,
  };

  const files: ScaffoldFile[] = [
    {
      path: `${bpDir}/manifest.json`,
      content: `${JSON.stringify(manifest, null, 2)}\n`,
    },
  ];

  if (language === 'ts') {
    const pkgDeps: Record<string, string> = {};
    for (const mod of modules) {
      const key = `@minecraft/${mod}`;
      pkgDeps[key] = versions.packages[key]?.locked ?? 'latest';
    }
    // server 脚本几乎总会用到类型；若未显式包含也装上便于编辑
    if (!pkgDeps['@minecraft/server'] && versions.packages['@minecraft/server']) {
      pkgDeps['@minecraft/server'] = versions.packages['@minecraft/server'].locked;
    }

    files.push(
      {
        path: `${rootDir}/package.json`,
        content: `${JSON.stringify(
          {
            name: packName,
            version: '1.0.0',
            private: true,
            type: 'module',
            scripts: {
              build: 'node ./scripts/build.mjs',
              watch: 'node ./scripts/build.mjs --watch',
            },
            devDependencies: {
              esbuild: '^0.25.0',
              typescript: '^5.9.0',
            },
            dependencies: pkgDeps,
          },
          null,
          2,
        )}\n`,
      },
      {
        path: `${rootDir}/tsconfig.json`,
        content: `${JSON.stringify(
          {
            compilerOptions: {
              target: 'ES2020',
              module: 'ES2020',
              moduleResolution: 'bundler',
              lib: ['ES2020'],
              strict: true,
              skipLibCheck: true,
              noEmit: true,
              types: modules.map((m) => `@minecraft/${m}`),
            },
            include: ['src/**/*'],
          },
          null,
          2,
        )}\n`,
      },
      {
        path: `${rootDir}/scripts/build.mjs`,
        content: `import * as esbuild from 'esbuild';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const watch = process.argv.includes('--watch');
const outfile = join(root, ${JSON.stringify(`behavior_packs/${packName}/scripts/main.js`)});

mkdirSync(dirname(outfile), { recursive: true });

const ctx = await esbuild.context({
  entryPoints: [join(root, 'src/main.ts')],
  outfile,
  bundle: true,
  format: 'esm',
  platform: 'neutral',
  target: 'es2020',
  external: [
${modules.map((m) => `    '@minecraft/${m}',`).join('\n')}
  ],
  sourcemap: true,
});

if (watch) {
  await ctx.watch();
  console.log('[watch] rebuilding on change…');
} else {
  await ctx.rebuild();
  await ctx.dispose();
  console.log('[build] wrote', outfile);
}
`,
      },
      {
        path: `${rootDir}/src/main.ts`,
        content: mainScript(packName),
      },
      {
        path: `${rootDir}/.gitignore`,
        content: `node_modules/\nbehavior_packs/**/scripts/\n*.js.map\n`,
      },
    );
  } else {
    files.push({
      path: `${bpDir}/scripts/main.js`,
      content: mainScript(packName),
    });
    // 可选轻量 package.json 便于装类型包（即使用 JS）
    const pkgDeps: Record<string, string> = {};
    for (const mod of modules) {
      const key = `@minecraft/${mod}`;
      pkgDeps[key] = versions.packages[key]?.locked ?? 'latest';
    }
    files.push({
      path: `${rootDir}/package.json`,
      content: `${JSON.stringify(
        {
          name: packName,
          version: '1.0.0',
          private: true,
          type: 'module',
          dependencies: pkgDeps,
        },
        null,
        2,
      )}\n`,
    });
  }

  if (options.includeEmptyResourcePack) {
    const rpUuid = randomUUID();
    const rpDir = `${rootDir}/resource_packs/${packName}_rp`;
    files.push({
      path: `${rpDir}/manifest.json`,
      content: `${JSON.stringify(
        {
          format_version: 2,
          header: {
            name: `${displayName(packName)} Resources`,
            description: 'Empty resource pack',
            uuid: rpUuid,
            version: [1, 0, 0],
            min_engine_version: minEngine,
          },
          modules: [
            {
              type: 'resources',
              uuid: randomUUID(),
              version: [1, 0, 0],
            },
          ],
        },
        null,
        2,
      )}\n`,
    });
  }

  const workflow =
    language === 'ts'
      ? [
          '## 工作流（TypeScript）',
          '',
          '1. 在工程根目录执行：',
          '```bash',
          'npm install',
          'npm run build',
          '```',
          '2. 将 `behavior_packs/`（及可选 `resource_packs/`）复制到 Minecraft 的 `development_behavior_packs` / `development_resource_packs`，或用你的同步工具链接。',
          '3. 创建/打开世界 → 行为包中启用本包 → 按需打开 Beta API 实验性玩法。',
          '4. 改代码后 `npm run watch` 或再次 `npm run build`，再重新进世界验证。',
          '',
          '### 值得注意',
          `- 依赖版本已对齐文档站锁定（track=${track}）。`,
          '- `@minecraft/*` 由游戏运行时提供，打包时已 external，勿打进 bundle。',
          '- 推荐 TypeScript：类型与文档一致，改 API 更不易写错。',
        ].join('\n')
      : [
          '## 工作流（JavaScript）',
          '',
          '1. （可选）在工程根目录 `npm install` 以获取编辑器类型提示。',
          '2. 将 `behavior_packs/` 放入 `development_behavior_packs`。',
          '3. 世界中启用本行为包；需要 Beta API 时打开对应实验性玩法。',
          '4. 直接编辑 `behavior_packs/.../scripts/main.js` 后重新进世界验证。',
          '',
          '### 值得注意',
          `- 依赖版本已对齐文档站锁定（track=${track}）。`,
          '- 若项目会变大，建议改用 TypeScript 模板（重新调用 init_script_project，language=ts）。',
        ].join('\n');

  return {
    language,
    packName,
    rootDir,
    files,
    workflow,
    note: '本工具只返回文件内容；请由宿主 Agent 写入用户工作区。若用户尚未选择语言，必须先询问 JS 或 TS（推荐 TS）。',
  };
}

export function formatScaffoldResult(result: ScaffoldResult): string {
  const fileBlocks = result.files
    .map(
      (f) =>
        `### FILE: ${f.path}\n\`\`\`\n${f.content.replace(/```/g, '\\`\\`\\`')}\n\`\`\``,
    )
    .join('\n\n');

  return [
    `# Script 项目脚手架（${result.language.toUpperCase()}）`,
    `包名: ${result.packName}`,
    `根目录: ${result.rootDir}/`,
    '',
    result.note,
    '',
    '请将下列 FILE 区块写入工作区（路径相对当前项目根或用户指定目录）。',
    '',
    fileBlocks,
    '',
    result.workflow,
  ].join('\n');
}
