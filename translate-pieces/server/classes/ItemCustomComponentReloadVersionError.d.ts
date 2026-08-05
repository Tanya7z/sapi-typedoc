/**
 * 在使用 /reload 命令后，尝试使用较新的 API 版本注册先前已注册过的物品自定义组件时抛出。
 *
 * Thrown after using the /reload command when trying to
 * register a previously registered item custom component with
 * a newer API version.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}
