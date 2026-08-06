import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Root } from 'mdast';
import {
  abbreviationTitle,
  buildAbbreviationPattern,
  loadAbbreviations,
  parseAbbreviations,
  remarkAbbrGlossary,
} from './abbreviations.js';

describe('parseAbbreviations', () => {
  it('解析 pandoc 词表行并忽略注释/空行', () => {
    const md = [
      '<!-- comment -->',
      '',
      '*[SFMC]: Server For Minecraft Core。',
      '*[API]: Application Programming Interface。',
      '*[API]: 覆盖定义。',
      'not a definition',
    ].join('\n');
    const map = parseAbbreviations(md);
    assert.equal(map.get('SFMC'), 'Server For Minecraft Core。');
    assert.equal(map.get('API'), '覆盖定义。');
    assert.equal(map.has('not'), false);
  });

  it('abbreviationTitle 去掉链接与行内代码', () => {
    assert.equal(
      abbreviationTitle('见 [Wiki](https://example.com) 与 `Block`。'),
      '见 Wiki 与 Block。',
    );
  });

  it('buildAbbreviationPattern 优先长词', () => {
    const re = buildAbbreviationPattern(['ID', 'NamespacedIdentifier', 'Identifier']);
    assert.ok(re);
    re!.lastIndex = 0;
    const m = re!.exec('use NamespacedIdentifier here');
    assert.equal(m?.[1], 'NamespacedIdentifier');
  });
});

describe('loadAbbreviations', () => {
  it('能加载仓库 includes/abbreviations.md', () => {
    const map = loadAbbreviations();
    assert.ok(map.size > 10);
    assert.ok(map.has('SAPI'));
    assert.ok(map.has('BlockActor'));
  });
});

describe('remarkAbbrGlossary', () => {
  it('替换正文缩写，跳过 code / inlineCode', () => {
    const glossary = parseAbbreviations('*[SAPI]: Script API。\n*[API]: 接口。\n');
    const plugin = remarkAbbrGlossary({ glossary });
    const transform = plugin();
    assert.ok(transform);

    const tree: Root = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            { type: 'text', value: '使用 SAPI 与 ' },
            { type: 'inlineCode', value: 'SAPI' },
            { type: 'text', value: '，以及 API。' },
          ],
        },
        {
          type: 'code',
          lang: 'ts',
          value: 'const SAPI = 1;',
        },
      ],
    };

    transform(tree);

    const para = tree.children[0]!;
    assert.equal(para.type, 'paragraph');
    if (para.type !== 'paragraph') return;

    const types = para.children.map((c) => c.type);
    assert.ok(types.includes('mdxJsxTextElement'));
    const abbrs = para.children.filter((c) => c.type === 'mdxJsxTextElement');
    assert.equal(abbrs.length, 2);
    for (const node of abbrs) {
      assert.equal(node.type, 'mdxJsxTextElement');
      if (node.type !== 'mdxJsxTextElement') continue;
      assert.equal(node.name, 'abbr');
      const tip = node.attributes.find((a) => a.name === 'tip');
      assert.ok(tip?.value);
      assert.equal(
        node.attributes.some((a) => a.name === 'title'),
        false,
      );
    }

    const code = tree.children[1]!;
    assert.equal(code.type, 'code');
    if (code.type === 'code') {
      assert.equal(code.value, 'const SAPI = 1;');
    }
  });
});
