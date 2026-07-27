/* IMPORT */ import { BlockFilter } from '..';

/**
 * 包含 `getBlockStandingOn` 和 `getAllBlocksStandingOn` 的额外选项。
 *
 * Contains additional options for getBlockStandingOn and
 * getAllBlocksStandingOn.
 */
export interface GetBlocksStandingOnOptions {
    /**
     * @remarks
     * 指定后，函数将根据方块过滤器来包括/排除返回的方块。
     *
     * When specified, the function will include / exclude what
     * block(s) are returned based on the block filter.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 如果为 `true`，所有高度为 0.2 或更低的方块（如活板门和地毯）将被忽略，并返回其下方的方块。
     *
     * If true, all blocks of height 0.2 or lower like trapdoors
     * and carpets will be ignored, and the block underneath will
     * be returned.
     *
     */
    ignoreThinBlocks?: boolean;
}
