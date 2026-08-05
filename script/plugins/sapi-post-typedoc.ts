import type { RspressPlugin } from '@rspress/core';
import { enhanceMemberPages } from '../post/enhance-member-mdx.js';
import { writeModuleMeta } from '../post/inheritance-meta.js';
import { restructureModules } from '../post/restructure-modules.js';
import { writeTagsIndex } from '../post/tags-index.js';
import { writeUntaggedReport } from '../post/untagged-report.js';
import { writeVanillaDataIndex } from '../post/vanilla-data-index.js';
import { ensureVanillaDataNav, writeRootNav } from '../post/write-nav.js';

/**
 * empty refs 策略：仍尝试 vanilla-data 索引；成功则补丁现有 `_nav.json`「更多」项，不整表重写。
 * 非空 refs：完整流水线结束后再写索引，并把 vanilla-data 并入 presentModules 后重写导航。
 */
export function pluginSapiPostTypeDoc(): RspressPlugin {
  return {
    name: 'sapi-post-typedoc',
    async beforeBuild() {
      const refs = restructureModules();
      if (refs.length === 0) {
        console.warn(
          '[sapi-post-typedoc] restructure 结果为空（无可用源或已跳过）；跳过 writeRootNav / tags 主流水线，仍尝试 vanilla-data 索引',
        );
        const ok = writeVanillaDataIndex();
        if (ok) {
          ensureVanillaDataNav();
        }
        return;
      }

      const modules = [...new Set(refs.map((r) => r.module))];
      const vanillaOk = writeVanillaDataIndex();
      writeRootNav(
        vanillaOk ? [...new Set([...modules, 'vanilla-data'])] : modules,
      );
      for (const mod of modules) {
        writeModuleMeta(
          mod,
          refs.filter((r) => r.module === mod),
        );
      }
      enhanceMemberPages(refs);
      writeTagsIndex(refs);
      writeUntaggedReport(refs);

      console.log(
        `[sapi-post-typedoc] restructured ${refs.length} members across ${modules.length} modules`,
      );
    },
  };
}
