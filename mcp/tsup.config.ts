import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/stdio.ts', 'src/http.ts'],
  format: ['esm'],
  target: 'node20',
  platform: 'node',
  dts: false,
  clean: true,
  splitting: false,
  sourcemap: true,
  banner: {
    js: '#!/usr/bin/env node',
  },
});
