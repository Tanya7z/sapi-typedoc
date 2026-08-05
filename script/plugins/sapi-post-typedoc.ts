import type { RspressPlugin } from '@rspress/core';
import { restructureModules } from '../post/restructure-modules.js';
import { writeRootNav } from '../post/write-nav.js';

export function pluginSapiPostTypeDoc(): RspressPlugin {
  return {
    name: 'sapi-post-typedoc',
    async beforeBuild() {
      const refs = restructureModules();
      const modules = [...new Set(refs.map((r) => r.module))];
      writeRootNav(modules);
      console.log(
        `[sapi-post-typedoc] restructured ${refs.length} members across ${modules.length} modules`,
      );
    },
  };
}
