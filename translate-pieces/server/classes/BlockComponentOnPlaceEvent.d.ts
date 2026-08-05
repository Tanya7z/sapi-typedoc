/* IMPORT */ import { BlockEvent, BlockPermutation } from '..';

/**
 * 包含有关特定方块被放置的信息。
 * 
 * Contains information regarding a specific block that was
 * placed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 在此位置被替换的先前方块。
     * 
     * Previous block at this location that was replaced.
     *
     */
    readonly previousBlock: BlockPermutation;
}
