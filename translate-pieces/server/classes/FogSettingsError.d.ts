/* IMPORT */ import { FogSettings } from '..';

/**
 * @beta
 * 当超出雾效栈上限或提供了无效的雾效标识符时，由 {@link FogSettings} 操作抛出的错误。
 *
 * Error thrown by {@link FogSettings} operations when the fog
 * stack limit is exceeded or an invalid fog identifier is
 * provided.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FogSettingsError extends Error {
    private constructor();
}
