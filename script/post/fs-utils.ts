import { cpSync, existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

function sleepSync(ms: number) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

export function writeJson(filePath: string, data: unknown) {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf-8');
}

export function readJson<T>(filePath: string): T | undefined {
  if (!existsSync(filePath)) return undefined;
  return JSON.parse(readFileSync(filePath, 'utf-8')) as T;
}

export function moveDirectorySync(src: string, dest: string) {
  const removeOptions = { recursive: true, force: true, maxRetries: 5, retryDelay: 100 } as const;
  rmSync(dest, removeOptions);
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      renameSync(src, dest);
      return;
    } catch (err) {
      const code = (err as NodeJS.ErrnoException).code;
      if (code !== 'EPERM' && code !== 'EBUSY' && code !== 'ENOTEMPTY' && code !== 'EACCES') throw err;
      sleepSync(100 * (attempt + 1));
    }
  }
  cpSync(src, dest, { recursive: true });
  rmSync(src, removeOptions);
}
