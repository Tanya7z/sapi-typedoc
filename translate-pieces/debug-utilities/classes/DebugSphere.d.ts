/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, Vector3 } from '../../server';

/**
 * 表示一个球体的调试形状类。
 *
 * A debug shape class that represents a sphere.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugSphere extends DebugShape {
    constructor(location: DimensionLocation | Vector3);
}
