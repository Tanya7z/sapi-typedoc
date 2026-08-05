/**
 * 当实体无效时抛出的错误。可能发生在访问已移除实体的组件时。
 *
 * The error called when an entity is invalid. This can occur
 * when accessing components on a removed entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks
     * 当前无效实体的 id。
     *
     * The id of the entity that is now invalid.
     *
     * @earlyExecution
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 当前无效实体的类型。
     *
     * The type of the entity that is now invalid.
     *
     * @earlyExecution
     *
     */
    readonly type: string;
}
