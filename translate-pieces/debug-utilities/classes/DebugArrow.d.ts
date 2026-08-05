/* IMPORT */ import { DebugLine } from '..';
/* IMPORT */ import { DimensionLocation, Vector3 } from '../../server';

/**
 * 箭头头部/箭尖的长度。
 *
 * The length of the arrow's head/tip.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugArrow extends DebugLine {
    /**
     * @remarks
     * 向世界中添加一个新的调试形状。
     *
     * Adds a new debug shape to the world.
     *
     */
    headLength: number;
    /**
     * @remarks
     * 箭头头部/箭尖的半径。
     *
     * The radius of the arrow's head/tip.
     *
     */
    headRadius: number;
    /**
     * @remarks
     * 箭头头部/箭尖底部圆周的段数（默认：4）。
     *
     * The number of segments for the base circle of the arrow's
     * head/tip (default: 4).
     *
     * Bounds: [3, 128]
     */
    headSegments: number;
    constructor(
        location: DimensionLocation | Vector3,
        endLocation: Vector3,
    );
}
