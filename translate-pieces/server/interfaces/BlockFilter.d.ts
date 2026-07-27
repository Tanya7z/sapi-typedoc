/* IMPORT */ import { BlockPermutation } from '..';

/**
 * 根据类型、标签或置换来包含或排除方块的选项。
 * 如果没有添加包含选项，将选择所有未被排除选项拒绝的方块。
 * 如果至少添加了一个包含选项，方块必须匹配至少一个包含选项才能不被拒绝。
 *
 * Options to include or exclude blocks based on type, tag or
 * permutation. If no include options are added it will select
 * all blocks that are not rejected by the exclude options. If
 * at least one include option is added the block must match
 * one of the include options to not be rejected.
 */
export interface BlockFilter {
    /**
     * @remarks
     * 如果匹配其中任何一个，过滤器应拒绝的方块置换数组。
     *
     * Array of block permutations that the filter should reject if
     * any matches.
     *
     */
    excludePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 如果匹配其中任何一个，过滤器应拒绝的方块标签数组。
     *
     * Array of block tags that the filter should reject if any
     * matches.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 如果匹配其中任何一个，过滤器应拒绝的方块类型数组。
     *
     * Array of block types that the filter should reject if any
     * matches.
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 如果至少匹配其中一个，过滤器应选择的方块置换数组。
     *
     * Array of block permutations that the filter should select if
     * at least one matches.
     *
     */
    includePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 如果至少匹配其中一个，过滤器应选择的方块标签数组。
     *
     * Array of block tags that the filter should select if at
     * least one matches.
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 如果至少匹配其中一个，过滤器应选择的方块类型数组。
     *
     * Array of block types that the filter should select if at
     * least one matches.
     *
     */
    includeTypes?: string[];
}
