/* IMPORT */ import { BlockBoundingBox, Dimension } from '..';

/**
 * 提供关于特定常加载区域信息的上下文。
 *
 * A context which provides information about a specific
 * ticking area.
 */
export interface TickingArea {
    /**
     * @remarks
     * 包含常加载区域中所有常加载方块的边界框。
     *
     * The box which contains all the ticking blocks in the ticking
     * area.
     *
     */
    boundingBox: BlockBoundingBox;
    /**
     * @remarks
     * 常加载区域包含的区块数量。
     *
     * The number of chunks that the ticking area contains.
     *
     */
    chunkCount: number;
    /**
     * @remarks
     * 常加载区域所在的维度。
     *
     * The dimension the ticking area is located.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 常加载区域的唯一标识符。
     *
     * The unique identifier of the ticking area.
     *
     */
    identifier: string;
    /**
     * @remarks
     * 如果常加载区域的所有区块都已加载并处于常加载状态，则为 `true`，否则为 `false`。
     *
     * Will be true if all the ticking areas chunks are loaded in
     * ticking and false otherwise.
     *
     */
    isFullyLoaded: boolean;
}
