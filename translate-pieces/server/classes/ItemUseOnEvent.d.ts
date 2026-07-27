/* IMPORT */ import { Block, Direction, ItemStack, Vector3 } from '..';

/**
 * 包含有关在方块上使用物品的信息。
 *
 * Contains information regarding the use of an item on a
 * block.
 */
export class ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * 此事件影响的方块。
     *
     * The block impacted by this event.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 使用物品所在的方块面。
     *
     * The face of the block that the item was used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 相对于使用物品的方块西北底角的位置。
     *
     * Location relative to the bottom north-west corner of the
     * block that the item was used on.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 在方块上使用的物品堆。
     *
     * The item stack used on the block.
     *
     */
    readonly itemStack: ItemStack;
}
