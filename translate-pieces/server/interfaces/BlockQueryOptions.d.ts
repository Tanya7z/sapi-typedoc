/* IMPORT */ import { BlockFilter, Vector3 } from '..';

/**
 * @beta
 * 在体积中查询方块的选项。扩展了 `BlockFilter`，增加了基于距离位置的额外排序和限制选项。
 *
 * Options for querying blocks in a volume. Extends BlockFilter
 * with additional sorting and limiting options based on
 * distance from a location.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockQueryOptions extends BlockFilter {
    /**
     * @remarks
     * 如果指定，则返回距离位置最近的 N 个方块。必须大于 0。不能与 `farthest` 同时使用。需要设置 `location`。
     *
     * If specified, returns the closest N blocks to the location.
     * Must be greater than 0. Cannot be used with farthest.
     * Requires location to be set.
     *
     */
    closest?: number;
    /**
     * @remarks
     * 如果指定，则返回距离位置最远的 N 个方块。必须大于 0。不能与 `closest` 同时使用。需要设置 `location`。
     *
     * If specified, returns the farthest N blocks from the
     * location. Must be greater than 0. Cannot be used with
     * closest. Requires location to be set.
     *
     */
    farthest?: number;
    /**
     * @remarks
     * 用作最近或最远距离计算的参考点位置。当指定了 `closest` 或 `farthest` 时需要设置。
     *
     * Location used as the reference point for closest or farthest
     * distance calculations. Required when closest or farthest is
     * specified.
     *
     */
    location?: Vector3;
}
