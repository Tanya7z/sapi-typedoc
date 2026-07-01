/* IMPORT */ import { Dimension } from '..';

/**
 * 世界中的精确坐标，包含其维度和位置。
 *
 * An exact coordinate within the world, including its
 * dimension and location.
 */
export interface DimensionLocation {
    /**
     * @remarks
     * 此坐标关联的维度。
     *
     * Dimension that this coordinate is associated with.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 此维度位置的 X 分量。
     *
     * X component of this dimension-location.
     *
     */
    x: number;
    /**
     * @remarks
     * 此维度位置的 Y 分量。
     *
     * Y component of this dimension-location.
     *
     */
    y: number;
    /**
     * @remarks
     * 此维度位置的 Z 分量。
     *
     * Z component of this dimension-location.
     *
     */
    z: number;
}
