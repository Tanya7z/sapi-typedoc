/**
 * 在系统启动事件之外尝试注册自定义组件时抛出的错误。
 *
 * Thrown when trying to register a custom component outside of
 * the system startup event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentInvalidRegistryError extends Error {
    private constructor();
}
