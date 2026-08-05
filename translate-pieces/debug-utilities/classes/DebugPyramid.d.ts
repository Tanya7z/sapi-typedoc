/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, Vector3 } from '../../server';

/**
 * 表示金字塔的调试形状类。
 *
 * A debug shape class that represents a pyramid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugPyramid extends DebugShape {
    /**
     * @remarks
     * 金字塔底面的深度。
     *
     * The depth of the pyramid's base.
     *
     */
    depth?: number;
    /**
     * @remarks
     * 金字塔的高度。
     *
     * The height of the pyramid.
     *
     */
    height: number;
    /**
     * @remarks
     * 金字塔底面的宽度。
     *
     * The width of the pyramid's base.
     *
     */
    width: number;
    constructor(location: DimensionLocation | Vector3);
}
