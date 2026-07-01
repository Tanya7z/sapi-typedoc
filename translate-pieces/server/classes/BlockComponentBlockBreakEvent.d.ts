/* IMPORT */ import { Block, BlockEvent, BlockPermutation, Entity } from '..';

/**
 * 包含有关特定方块被破坏的信息。
 * 
 * Contains information regarding a specific block being
 * broken.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 导致破坏的方块。
     * 
     * The block that caused destruction.
     *
     */
    readonly blockDestructionSource?: Block;
    /**
     * @remarks
     * 返回此方块在被破坏之前的置换信息。
     * 
     * Returns permutation information about this block before it
     * was broken.
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 导致破坏的 Actor。
     * 
     * The Actor that caused destruction.
     *
     */
    readonly entitySource?: Entity;
}
