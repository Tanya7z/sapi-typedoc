import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { MemberRef } from './restructure-modules.js';
import {
  buildMemberLinkCatalog,
  rewriteTypedocHref,
  rewriteTypedocMarkdownLinks,
} from './rewrite-links.js';

function ref(partial: Partial<MemberRef> & Pick<MemberRef, 'module' | 'kind' | 'symbolName'>): MemberRef {
  return {
    fileName: `${partial.symbolName}.mdx`,
    absPath: `/docs/${partial.module}/${partial.kind}/${partial.symbolName}.mdx`,
    ...partial,
  };
}

describe('rewriteTypedocHref', () => {
  const catalog = buildMemberLinkCatalog([
    ref({ module: 'server', kind: 'classes', symbolName: 'Player' }),
    ref({ module: 'server', kind: 'classes', symbolName: 'Entity' }),
    ref({ module: 'server', kind: 'enums', symbolName: 'Direction' }),
    ref({ module: 'common', kind: 'classes', symbolName: 'EngineError' }),
  ]);
  const current = ref({ module: 'server', kind: 'classes', symbolName: 'Player' });

  it('rewrites mod.Symbol.md and cross-kind paths', () => {
    assert.equal(rewriteTypedocHref('server.Entity.md', current, catalog), '/server/classes/Entity');
    assert.equal(
      rewriteTypedocHref('../enums/server.Direction.md', current, catalog),
      '/server/enums/Direction',
    );
    assert.equal(
      rewriteTypedocHref('server.Entity.md#nametag', current, catalog),
      '/server/classes/Entity#nametag',
    );
  });

  it('rewrites cross-module and keeps externals', () => {
    assert.equal(
      rewriteTypedocHref('common.EngineError.md', current, catalog),
      '/common/classes/EngineError',
    );
    assert.equal(rewriteTypedocHref('https://example.com/a.md', current, catalog), 'https://example.com/a.md');
    assert.equal(rewriteTypedocHref('#local', current, catalog), '#local');
  });

  it('rewrites markdown bodies', () => {
    const out = rewriteTypedocMarkdownLinks(
      '见 [`Entity`](server.Entity.md) 与 [错误](common.EngineError.md)。',
      current,
      catalog,
    );
    assert.match(out, /\[`Entity`\]\(\/server\/classes\/Entity\)/);
    assert.match(out, /\[错误\]\(\/common\/classes\/EngineError\)/);
  });
});
