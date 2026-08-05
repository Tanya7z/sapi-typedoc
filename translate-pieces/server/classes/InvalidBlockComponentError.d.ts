/**
 * 当方块无效时会抛出此错误。在访问不具备相应组件的方块上的组件时，也会抛出此错误。
 *
 * The error can occur when a block is invalid. This can also
 * occur when accessing components on a block that doesn't have
 * them.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidBlockComponentError extends Error {
    private constructor();
}
