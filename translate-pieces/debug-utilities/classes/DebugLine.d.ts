/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, Vector3 } from '../../server';

/**
 * 表示一条线段的调试形状类。
 *
 * A debug shape class that represents a line segment.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugLine extends DebugShape {
    /**
     * @remarks
     * 线段的终点位置。最终绘制的线段将位于 location 与 endLocation 之间。
     *
     * The end location of the line segment. The final line will
     * spawn between location and endLocation.
     *
     */
    endLocation: Vector3;
    constructor(
        location: DimensionLocation | Vector3,
        endLocation: Vector3,
    );
}
