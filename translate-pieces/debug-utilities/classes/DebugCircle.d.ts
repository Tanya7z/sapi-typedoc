/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, Vector3 } from '../../server';

/**
 * 表示一个圆（2D）的调试形状类。
 *
 * A debug shape class that represents a circle (2D).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCircle extends DebugShape {
    constructor(location: DimensionLocation | Vector3);
}
