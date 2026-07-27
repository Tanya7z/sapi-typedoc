/**
 * 当尝试注册一个已注册过的自定义维度名称时抛出的错误。
 *
 * Thrown when trying to register a custom dimension with a
 * name that has already been registered.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionAlreadyRegisteredError extends Error {
    private constructor();
}
