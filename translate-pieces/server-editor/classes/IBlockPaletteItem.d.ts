/* IMPORT */ import { BlockPermutation, BlockType } from '../../server';
/* IMPORT */ import { BlockPaletteItemType } from '..';

export class IBlockPaletteItem {
    private constructor();
    getBlock(): BlockType | undefined;
    getDisplayName(): string | undefined;
    getType(): BlockPaletteItemType;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setBlock(block: BlockPermutation | BlockType | string): void;
}
