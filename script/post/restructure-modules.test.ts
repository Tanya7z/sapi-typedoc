import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import {
  countMovableApiSources,
  parseApiFileName,
  parseModuleOverviewFileName,
  restructureModules,
} from './restructure-modules.js';

function ensurePlaceholderModuleDir(root: string, moduleName: string) {
  const dir = join(root, moduleName);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, '.keep'), '', 'utf-8');
}

describe('parseApiFileName', () => {
  it('解析 mod.Symbol', () => {
    assert.deepEqual(parseApiFileName('server.Player.md'), { module: 'server', symbol: 'Player' });
  });

  it('无点号返回 undefined', () => {
    assert.equal(parseApiFileName('server.md'), undefined);
  });
});

describe('parseModuleOverviewFileName', () => {
  it('识别无点号概览', () => {
    assert.equal(parseModuleOverviewFileName('server.md'), 'server');
    assert.equal(parseModuleOverviewFileName('server-ui.MDX'), 'server-ui');
  });

  it('带点号不是概览', () => {
    assert.equal(parseModuleOverviewFileName('server.Player.md'), undefined);
  });
});

describe('restructureModules empty-source guard', () => {
  it('api 为空时不清理已有模块目录', () => {
    const root = mkdtempSync(join(tmpdir(), 'sapi-restructure-'));
    const api = join(root, 'api');
    mkdirSync(api, { recursive: true });
    ensurePlaceholderModuleDir(root, 'server');
    assert.ok(existsSync(join(root, 'server', '.keep')));

    const warn = console.warn;
    const warnings: string[] = [];
    console.warn = (...args: unknown[]) => {
      warnings.push(args.map(String).join(' '));
    };
    try {
      assert.equal(countMovableApiSources(api), 0);
      const refs = restructureModules({ docsDir: root, apiDir: api });
      assert.deepEqual(refs, []);
      assert.ok(existsSync(join(root, 'server', '.keep')), 'existing module dir must survive');
      assert.ok(warnings.some((w) => w.includes('没有可搬迁')));
    } finally {
      console.warn = warn;
    }
  });

  it('搬迁成员与 modules 概览，扩展名大小写不敏感', () => {
    const root = mkdtempSync(join(tmpdir(), 'sapi-restructure-'));
    const api = join(root, 'api');
    mkdirSync(join(api, 'classes'), { recursive: true });
    mkdirSync(join(api, 'modules'), { recursive: true });
    writeFileSync(join(api, 'classes', 'server.Player.MDX'), '# Player\n', 'utf-8');
    writeFileSync(join(api, 'modules', 'server.md'), '# server\n', 'utf-8');
    ensurePlaceholderModuleDir(root, 'server');

    const refs = restructureModules({ docsDir: root, apiDir: api });
    assert.equal(refs.length, 2);
    assert.ok(existsSync(join(root, 'server', 'classes', 'Player.mdx')));
    assert.ok(existsSync(join(root, 'server', 'index.md')));
    assert.ok(!existsSync(join(root, 'server', '.keep')), 'old module tree wiped when sources exist');
    assert.deepEqual(
      readdirSync(join(api, 'classes')),
      [],
      'source member files should be moved away',
    );
  });
});
