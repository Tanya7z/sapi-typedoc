/**
 * 在使用 /reload 命令后，尝试注册一个之前未注册的自定义维度时抛出的错误。在重载期间不能添加新的自定义维度。
 *
 * Thrown after using the /reload command when trying to
 * register a custom dimension that was not previously
 * registered. New custom dimensions cannot be added during a
 * reload.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionReloadNewDimensionError extends Error {
    private constructor();
}
