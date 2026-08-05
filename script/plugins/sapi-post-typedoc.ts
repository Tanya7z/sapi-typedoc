import type { RspressPlugin } from '@rspress/core';

export function pluginSapiPostTypeDoc(): RspressPlugin {
  return {
    name: 'sapi-post-typedoc',
    async beforeBuild() {
      console.log('[sapi-post-typedoc] beforeBuild: pipeline placeholder');
    },
  };
}
