/**
 * 在尝试使用已注册过的名称注册物品自定义组件时抛出。
 *
 * Thrown when trying to register an item custom component with
 * a name that has already been registered.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}
