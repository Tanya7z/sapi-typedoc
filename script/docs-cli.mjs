/**
 * MkDocs 本地预览 / 构建入口
 * - serve：若已有 docs/api/index.md 则复用（SAPI_FORCE_BUILD_MD=1 或 --rebuild 强制重生成）
 * - build：始终 build:md + mkdocs build（Pages 只发 site/）
 */
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mode = (process.argv[2] ?? 'serve').toLowerCase();
const forceRebuild =
    process.env.SAPI_FORCE_BUILD_MD === '1' || process.argv.includes('--rebuild');
const apiIndex = resolve(root, 'docs', 'api', 'index.md');
const isWin = process.platform === 'win32';

/** 转义后拼成单条 shell 命令，避免 shell:true + args[] 触发 DEP0190。 */
function shellCommand(cmd, args) {
    const quote = (value) => {
        if (!/[\s"&<>|^%!()]/.test(value)) return value;
        return `"${value.replace(/"/g, '\\"')}"`;
    };
    return [cmd, ...args.map(quote)].join(' ');
}

function run(cmd, args) {
    const r = isWin
        ? spawnSync(shellCommand(cmd, args), {
              cwd: root,
              stdio: 'inherit',
              shell: true,
              env: process.env
          })
        : spawnSync(cmd, args, {
              cwd: root,
              stdio: 'inherit',
              shell: false,
              env: process.env
          });
    if (r.error) {
        console.error(`[docs] 无法启动 ${cmd}:`, r.error.message);
        process.exit(1);
    }
    if (r.status !== 0) process.exit(r.status ?? 1);
}

function ensureApiMarkdown() {
    if (!forceRebuild && existsSync(apiIndex)) {
        console.log('[docs] 复用已有 docs/api（强制重生成：SAPI_FORCE_BUILD_MD=1 或 --rebuild）');
        return;
    }
    run('npm', ['run', 'build:md']);
}

function mkdocs(args) {
    let r = isWin
        ? spawnSync(shellCommand('python', ['-m', 'mkdocs', ...args]), {
              cwd: root,
              stdio: 'inherit',
              shell: true,
              env: process.env
          })
        : spawnSync('python', ['-m', 'mkdocs', ...args], {
              cwd: root,
              stdio: 'inherit',
              shell: false,
              env: process.env
          });
    if (r.error || r.status !== 0) {
        r = isWin
            ? spawnSync(shellCommand('mkdocs', args), {
                  cwd: root,
                  stdio: 'inherit',
                  shell: true,
                  env: process.env
              })
            : spawnSync('mkdocs', args, {
                  cwd: root,
                  stdio: 'inherit',
                  shell: false,
                  env: process.env
              });
    }
    if (r.status !== 0) {
        console.error('[docs] MkDocs 失败。请先：pip install -r requirements-docs.txt');
        process.exit(r.status ?? 1);
    }
}

if (mode === 'serve') {
    ensureApiMarkdown();
    mkdocs(['serve', '-a', '127.0.0.1:8000', '-w', 'translated']);
} else if (mode === 'build') {
    run('npm', ['run', 'build:md']);
    mkdocs(['build']);
} else {
    console.error('Usage: node script/docs-cli.mjs <serve|build> [--rebuild]');
    process.exit(1);
}
