/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, Vector2, Vector3 } from '../../server';

/**
 * 表示圆柱体的调试形状类。
 *
 * A debug shape class that represents a cylinder.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCylinder extends DebugShape {
    /**
     * @remarks
     * 圆柱体的高度。
     *
     * The height of the cylinder.
     *
     */
    height: number;
    /**
     * @remarks
     * 用于近似圆柱体圆形截面的分段数。取值范围：[3, 128]
     *
     * The number of segments used to approximate the circular
     * cross-section of the cylinder. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    numSegments: number;
    /**
     * @remarks
     * 圆柱体圆形截面的半径（x：底部半径，y：顶部半径）。
     *
     * The radii of the cylinder's circular cross-section (x:
     * bottom radius, y: top radius).
     *
     */
    radii: Vector2;
    constructor(location: DimensionLocation | Vector3);
}
