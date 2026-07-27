/* IMPORT */ import { BlockFilter } from '..';

/**
 * 包含方块填充操作的额外选项。
 *
 * Contains additional options for a block fill operation.
 */
export interface BlockFillOptions {
    /**
     * @remarks
     * 指定后，填充操作将包括/排除添加到方块过滤器中的方块。
     *
     * When specified, the fill operation will include / exclude
     * the blocks added to the block filter.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 当为 `true` 时，如果部分填充体积超出已加载区块边界，`fillBlocks` 不会报错，而是仅填充位于已加载区块边界内的方块，并忽略边界外的方块。
     *
     * When true fillBlocks will not error if part of the fill
     * volume is outside of loaded chunks bounds. Instead it will
     * just fill the blocks that are inside the loaded chunk bounds
     * and ignoring blocks outside.
     *
     */
    ignoreChunkBoundErrors?: boolean;
}
