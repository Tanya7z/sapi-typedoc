import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  renderPerPackageVersionMaps,
  renderPreviewDiffSection,
  renderVersionMapSection,
} from '../docs-home.js';
import type { ModuleChangelogBundle } from '../official-data.js';
import type { ModuleExperimentalDiff } from './experimental-diff.js';

describe('renderPreviewDiffSection', () => {
  it('无 diff 时给说明', () => {
    const text = renderPreviewDiffSection(undefined).join('\n');
    assert.match(text, /## 相对稳定版的变更/);
    assert.match(text, /暂无稳定↔预览差异数据/);
  });

  it('空增量时说明与 latest 一致', () => {
    const diff: ModuleExperimentalDiff = {
      module: 'common',
      allExperimental: false,
      experimentalSymbols: [],
      experimentalMembers: {},
      stableVersion: '1.3.0',
      previewVersion: '1.3.0',
    };
    const text = renderPreviewDiffSection({
      ...diff,
      previewVersion: '1.3.0-rc.1',
    }).join('\n');
    assert.match(text, /无预览增量/);
  });

  it('列出新增符号与新增成员', () => {
    const diff: ModuleExperimentalDiff = {
      module: 'server',
      allExperimental: false,
      experimentalSymbols: ['BrandNew'],
      experimentalMembers: { World: ['getFoo', 'getBar'] },
      stableVersion: '2.0.0',
      previewVersion: '2.1.0-beta',
    };
    const text = renderPreviewDiffSection(diff).join('\n');
    assert.match(text, /稳定 `2\.0\.0` ↔ 预览（当前文档） `2\.1\.0-beta`/);
    assert.match(text, /### 新增导出符号/);
    assert.match(text, /`BrandNew`/);
    assert.match(text, /### 既有符号的新增成员/);
    assert.match(text, /`World`: `getFoo`, `getBar`/);
  });

  it('allExperimental 时列出导出并说明', () => {
    const diff: ModuleExperimentalDiff = {
      module: 'debug-utilities',
      allExperimental: true,
      experimentalSymbols: ['DebugDrawer'],
      experimentalMembers: {},
      previewVersion: '1.0.0-beta',
    };
    const text = renderPreviewDiffSection(diff).join('\n');
    assert.match(text, /无独立 npm `latest`/);
    assert.match(text, /`DebugDrawer`/);
  });
});

describe('renderVersionMapSection / renderPerPackageVersionMaps', () => {
  const bundle: ModuleChangelogBundle = {
    moduleName: '@minecraft/server',
    learnUrl: 'https://example.com/server',
    tracks: [
      { track: 'stable', npmVersion: '2.9.0', matchedExactly: true },
      { track: 'preview', npmVersion: '2.10.0-rc.1.26.50-preview.20', matchedExactly: true },
    ],
    versionMap: [
      {
        apiVersion: '2.10.0',
        previewMc: '1.26.50.20',
        firstPublished: '2026-06-01',
      },
      {
        apiVersion: '2.9.0',
        stableMc: '1.26.36',
        previewMc: '1.26.40.20',
        firstPublished: '2026-04-01',
      },
    ],
  };

  it('备注高亮稳定 / 预览 / 文档站', () => {
    const text = renderVersionMapSection(bundle, { docs: '2.10.0' }).join('\n');
    assert.match(text, /## 版本映射表/);
    assert.match(text, /`2\.10\.0`.*文档站 \/ 预览/);
    assert.match(text, /`2\.9\.0`.*稳定/);
  });

  it('按包输出全量对照并挂锚点', () => {
    const text = renderPerPackageVersionMaps(
      { '@minecraft/server': '2.10.0-beta.1.26.50-preview.20' },
      [bundle],
    ).join('\n');
    assert.match(text, /## 各包 API 版本对照/);
    assert.match(text, /### @minecraft\/server \{#minecraftserver\}/);
    assert.match(text, /本站更新日志/);
    assert.match(text, /`2\.10\.0`/);
    assert.match(text, /文档站/);
  });
});
