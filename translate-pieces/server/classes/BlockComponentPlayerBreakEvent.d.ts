/* IMPORT */ import { BlockEvent, BlockPermutation, Player } from '..';

/**
 * 包含有关玩家破坏特定方块的信息。
 * 
 * Contains information regarding a specific block being broken
 * by a player.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerBreakEvent extends BlockEvent {
    private constructor();
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
     * 破坏此方块的玩家。
     * 
     * The player that broke this block.
     *
     */
    readonly player?: Player;
}
