/* IMPORT */ import { BlockPermutation, BlockType } from '../../server';
/* IMPORT */ import { IBlockPaletteItem, WeightedBlock } from '..';

export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @param weight
     * Bounds: [1, 100]
     * @throws This function can throw errors.
     */
    addBlock(block: BlockPermutation | BlockType | string, weight: number): void;
    getBlocks(): WeightedBlock[];
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeBlockAt(index: number): void;
}
