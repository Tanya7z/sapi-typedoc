/* IMPORT */ import { Block, BlockPermutation, Entity, ItemStack } from '..';

/**
 * 包含使用物品挖掘方块的相关信息。
 *
 * Contains information regarding the mining of a block using
 * an item.
 */
export class ItemComponentMineBlockEvent {
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
     * 用于挖掘方块的物品堆。
     *
     * The item stack used to mine the block.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 被挖掘方块的方块状态（BlockPermutation）。
     *
     * The block permutation that was mined.
     *
     */
    readonly minedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 挖掘方块的实体。
     *
     * The entity that mined the block.
     *
     */
    readonly source: Entity;
}
