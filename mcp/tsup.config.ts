import { defineConfig } from 'tsup';

const shared = {
  format: ['esm'] as const,
  target: 'node20' as const,
  platform: 'node' as const,
  dts: false,
  splitting: false,
  sourcemap: true,
};

export default defineConfig([
  {
    ...shared,
    entry: ['src/stdio.ts'],
    clean: true,
    banner: {
      js: '#!/usr/bin/env node',
    },
  },
  {
    ...shared,
    entry: ['src/http.ts'],
    clean: false,
    banner: {
      js: '#!/usr/bin/env node',
    },
  },
]);
