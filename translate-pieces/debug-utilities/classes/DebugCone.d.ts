/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, Vector2, Vector3 } from '../../server';

/**
 * 表示圆锥体的调试形状类。
 *
 * A debug shape class that represents a cone.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCone extends DebugShape {
    /**
     * @remarks
     * 圆锥体的高度。
     *
     * The height of the cone.
     *
     */
    height: number;
    /**
     * @remarks
     * 用于近似圆锥体圆形底面的分段数量。取值范围:[3, 128]
     *
     * The number of segments used to approximate the circular base
     * of the cone. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    numSegments: number;
    /**
     * @remarks
     * 圆锥体圆形底面的半径(x:底部半径,y:顶部半径)。
     *
     * The radii of the cone's circular base (x: bottom radius, y:
     * top radius).
     *
     */
    radii: Vector2;
    constructor(location: DimensionLocation | Vector3);
}
