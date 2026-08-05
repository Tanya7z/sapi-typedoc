import type { RspressPlugin } from '@rspress/core';
import { writeModuleMeta } from '../post/inheritance-meta.js';
import { restructureModules } from '../post/restructure-modules.js';
import { writeRootNav } from '../post/write-nav.js';

export function pluginSapiPostTypeDoc(): RspressPlugin {
  return {
    name: 'sapi-post-typedoc',
    async beforeBuild() {
      const refs = restructureModules();
      if (refs.length === 0) {
        console.warn(
          '[sapi-post-typedoc] restructure 结果为空（无可用源或已跳过）；不调用 writeRootNav，保留现有模块目录与导航',
        );
        return;
      }
      const modules = [...new Set(refs.map((r) => r.module))];
      writeRootNav(modules);
      for (const mod of modules) {
        writeModuleMeta(
          mod,
          refs.filter((r) => r.module === mod),
        );
      }
      console.log(
        `[sapi-post-typedoc] restructured ${refs.length} members across ${modules.length} modules`,
      );
    },
  };
}
