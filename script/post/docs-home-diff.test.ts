import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { renderPreviewDiffSection } from '../docs-home.js';
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
    // previewVersion 与 stable 相同时真实 builder 走「无增量」分支；此处测空列表文案
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
