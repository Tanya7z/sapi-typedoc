/**
 * 在使用 /reload 命令后，当尝试注册一个此前已注册但用于处理新事件的物品自定义组件时抛出。
 *
 * Thrown after using the /reload command when trying to
 * register a previously registered item custom component that
 * handles a new event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}
