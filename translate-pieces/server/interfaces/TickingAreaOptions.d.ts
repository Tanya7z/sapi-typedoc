/* IMPORT */ import { Dimension, Vector3 } from '..';

/**
 * 使用 {@link TickingAreaManager} 创建常加载区域的选项。
 *
 * Options to create a ticking area using the {@link
 * TickingAreaManager}.
 */
export interface TickingAreaOptions {
    /**
     * @remarks
     * 常加载区域所在的维度。
     *
     * The dimension the ticking area will be in.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 边界框的一个角落方块位置。
     *
     * Corner block location of the bounding box.
     *
     */
    from: Vector3;
    /**
     * @remarks
     * 边界框的对角角落方块位置。
     *
     * Opposite corner block location of the bounding box.
     *
     */
    to: Vector3;
}
