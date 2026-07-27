/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, Vector3 } from '../../server';

/**
 * 表示一个长方体（立方体）的调试形状类。
 *
 * A debug shape class that represents a box or cuboid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugBox extends DebugShape {
    /**
     * @remarks
     * 该形状的包围盒。最终绘制的方块将是该包围盒乘以形状的缩放比例。
     *
     * The bounding box of the shape. The final box will be this
     * bound multiplied by the shape's scale.
     *
     */
    bound: Vector3;
    constructor(location: DimensionLocation | Vector3);
}
