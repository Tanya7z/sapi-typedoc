/* IMPORT */ import { FeedItemEffect } from '..';

/**
 * 作为 Healable 组件的一部分，表示可喂给实体并产生生命值效果的特定物品。
 *
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * 实体被喂食此物品时获得的生命值。该数值是从 0 开始的整数，示例值最高可达 40。
     *
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * 可用于喂食的物品类型标识符。若未指定命名空间，则假定为 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
     *
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食后产生的物品的类型 ID。该值通常为空，但也用于向鹦鹉螺喂食一桶鱼等场景，此时产生的物品将是空桶。
     *
     * Type ID of the resulting item after feeding has occurred.
     * This will usually be empty but is used for scenarios such as
     * feeding a Nautilus with a bucket of fish, where the result
     * item will be an empty bucket.
     *
     */
    readonly resultItem?: string;
    /**
     * @remarks
     * 作为 Healable 组件的一部分，表示实体被喂食某物品后可能产生的可选副作用集合。
     *
     * As part of the Healable component, an optional collection of
     * side effects that can occur from being fed an item.
     *
     */
    getEffects(): FeedItemEffect[];
}
