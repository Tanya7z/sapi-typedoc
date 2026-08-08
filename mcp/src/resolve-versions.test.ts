import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  compareGameVersions,
  normalizeGameVersion,
  parseMinEngineVersion,
  resolveVersions,
} from './resolve-versions.js';
import type { VersionMapIndex } from './types.js';

const sampleMap: VersionMapIndex = {
  generatedAt: '2026-01-01T00:00:00.000Z',
  packages: {
    '@minecraft/server': {
      module: 'server',
      packageName: '@minecraft/server',
      npmStable: '2.9.0',
      npmPreview: '2.11.0-beta.1.26.50-preview.20',
      rows: [
        { apiVersion: '2.11.0', previewMc: '1.26.50.24' },
        { apiVersion: '2.10.0', stableMc: '1.26.43', previewMc: '1.26.50.24' },
        { apiVersion: '2.9.0', stableMc: '1.26.36', previewMc: '1.26.50.22' },
        { apiVersion: '2.8.0', stableMc: '1.26.21', previewMc: '1.26.40.24' },
      ],
    },
    '@minecraft/server-ui': {
      module: 'server-ui',
      packageName: '@minecraft/server-ui',
      npmStable: '2.1.0',
      npmPreview: '2.3.0-beta.1.26.50-preview.20',
      rows: [
        { apiVersion: '2.3.0', previewMc: '1.26.50.24' },
        { apiVersion: '2.2.0', stableMc: '1.26.43', previewMc: '1.26.50.24' },
        { apiVersion: '2.1.0', stableMc: '1.26.21', previewMc: '1.26.40.24' },
      ],
    },
  },
};

describe('normalizeGameVersion / compare', () => {
  it('规范化输入', () => {
    assert.equal(normalizeGameVersion('v1.26.42'), '1.26.42');
    assert.equal(normalizeGameVersion(' 1.26.50.20 '), '1.26.50.20');
  });

  it('比较游戏版本', () => {
    assert.ok(compareGameVersions('1.26.42', '1.26.43') < 0);
    assert.ok(compareGameVersions('1.26.50.20', '1.26.50.20') === 0);
  });

  it('min_engine 取前三段', () => {
    assert.deepEqual(parseMinEngineVersion('1.26.50.20'), [1, 26, 50]);
  });
});

describe('resolveVersions', () => {
  it('stable 1.26.42 → server 2.9.0 / server-ui 2.1.0', () => {
    const r = resolveVersions(sampleMap, {
      gameVersion: '1.26.42',
      track: 'stable',
    });
    assert.equal(r.track, 'stable');
    assert.equal(r.packages['@minecraft/server']?.apiVersion, '2.9.0');
    assert.equal(r.packages['@minecraft/server']?.manifest, '2.9.0');
    assert.equal(r.aliases.server, '2.9.0');
    assert.equal(r.packages['@minecraft/server-ui']?.apiVersion, '2.1.0');
    assert.deepEqual(r.minEngineVersion, [1, 26, 42]);
  });

  it('stable 1.26.43 → 可用 2.10.0 / 2.2.0', () => {
    const r = resolveVersions(sampleMap, {
      gameVersion: '1.26.43',
      track: 'stable',
    });
    assert.equal(r.packages['@minecraft/server']?.apiVersion, '2.10.0');
    assert.equal(r.packages['@minecraft/server-ui']?.apiVersion, '2.2.0');
  });

  it('preview 四段版本 auto → preview 轨', () => {
    const r = resolveVersions(sampleMap, {
      gameVersion: '1.26.50.20',
      track: 'auto',
    });
    assert.equal(r.track, 'preview');
    // previewMc 1.26.50.24 > 1.26.50.20，故 2.11/2.10 不可用，落到 2.9.0（previewMc 1.26.50.22 仍高于 20）
    // 1.26.50.22 > 1.26.50.20 → 继续落到 2.8.0 previewMc 1.26.40.24
    assert.equal(r.packages['@minecraft/server']?.apiVersion, '2.8.0');
  });

  it('preview 1.26.50.24 → 最高预览 API', () => {
    const r = resolveVersions(sampleMap, {
      gameVersion: '1.26.50.24',
      track: 'preview',
    });
    assert.equal(r.packages['@minecraft/server']?.apiVersion, '2.11.0');
    assert.equal(r.packages['@minecraft/server']?.manifest, '2.11.0-beta');
    assert.equal(r.packages['@minecraft/server-ui']?.apiVersion, '2.3.0');
  });
});
