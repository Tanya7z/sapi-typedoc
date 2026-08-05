/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, Vector3 } from '../../server';

/**
 * 表示椭球体的调试形状类。
 *
 * A debug shape class that represents an ellipsoid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugEllipsoid extends DebugShape {
    /**
     * @remarks
     * 椭球体沿各坐标轴（x、y、z）的半径。
     *
     * The radii of the ellipsoid along each axis (x, y, z).
     *
     */
    radii: Vector3;
    /**
     * @remarks
     * 沿每个轴用于近似椭球体的分段数。范围：[3, 128]
     *
     * The number of segments used to approximate the ellipsoid per
     * axis. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    segmentsPerAxis: number;
    constructor(location: DimensionLocation | Vector3);
}
