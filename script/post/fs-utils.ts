import { cpSync, existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const removeOptions = { recursive: true, force: true, maxRetries: 5, retryDelay: 100 } as const;

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

/** Windows 下带重试的递归删除 */
export function rmTreeSync(target: string) {
  rmSync(target, removeOptions);
}

/** Windows 下带重试的文件移动（rename，失败则 copy+rm） */
export function moveFileSync(src: string, dest: string) {
  mkdirSync(dirname(dest), { recursive: true });
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
  cpSync(src, dest);
  rmSync(src, { force: true, maxRetries: 5, retryDelay: 100 });
}

export function moveDirectorySync(src: string, dest: string) {
  rmTreeSync(dest);
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
  rmTreeSync(src);
}
