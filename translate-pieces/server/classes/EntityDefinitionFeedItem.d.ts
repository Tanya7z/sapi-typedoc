/**
 * 作为 Ageable 组件的一部分，表示一组可以喂给实体的物品及其促进成长的速率。
 *
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
export class EntityDefinitionFeedItem {
    private constructor();
    /**
     * @remarks
     * 实体在喂食此物品时年龄增长的量。值通常在 0 到 1 之间。
     *
     * The amount by which an entity's age will increase when fed
     * this item. Values usually range between 0 and 1.
     *
     */
    readonly growth: number;
    /**
     * @remarks
     * 可喂食物品类型的标识符。如果未指定命名空间，则默认为 `minecraft:`。示例值包括 `wheat` 或 `golden_apple`。
     *
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食后产生的物品的类型 ID。这通常为空，但用于某些场景，例如用一桶鱼喂食鹦鹉螺时，结果物品将是一个空桶。
     *
     * Type ID of the resulting item after feeding has occurred.
     * This will usually be empty but is used for scenarios such as
     * feeding a Nautilus with a bucket of fish, where the result
     * item will be an empty bucket.
     *
     */
    readonly resultItem?: string;
}
