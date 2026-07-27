/* IMPORT */ import { BlockEvent, BlockPermutation } from '..';

/**
 * 包含有关特定方块置换从之前置换更改的信息。
 * 
 * Contains information regarding a specific block permutation
 * that was changed from a previous permutation.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockStateChangeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 先前的 BlockPermutation。
     * 
     * The previous BlockPermutation.
     *
     */
    readonly previousPermutation: BlockPermutation;
}
