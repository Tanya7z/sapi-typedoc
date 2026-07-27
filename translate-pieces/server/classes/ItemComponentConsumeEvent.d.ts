/* IMPORT */ import { Entity, ItemStack } from '..';

/**
 * 包含与食物被消耗相关的信息。
 *
 * Contains information related to a food item being consumed.
 */
export class ItemComponentConsumeEvent {
    private constructor();
    /**
     * @remarks
     * 被消耗的物品堆。
     *
     * The item stack that was consumed.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 消耗该物品的源实体。
     *
     * The source entity that consumed the item.
     *
     */
    readonly source: Entity;
}
