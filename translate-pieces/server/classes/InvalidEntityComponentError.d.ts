/**
 * 在访问不具备相应组件的实体上的组件时会抛出此错误。
 *
 * This error can occur when accessing components on an entity
 * that doesn't have them.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityComponentError extends Error {
    private constructor();
}
