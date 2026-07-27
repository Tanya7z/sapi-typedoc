/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { Dimension } from '../../server';

/**
 * 用于在世界中添加和移除线框形状的调试绘制类。
 *
 * Debug Drawing class used to allow adding and removing
 * wireframe shapes in world space.
 */
export class DebugDrawer {
    private constructor();
    /**
     * @remarks
     * 向世界中添加一个新的调试形状。
     *
     * Adds a new debug shape to the world.
     *
     * @param shape
     * 要添加的调试形状,应为 DebugBox、DebugLine、DebugCircle、DebugSphere、DebugArrow 或 DebugText 类型。
     *
     * The debug shape to be added. Should be of type DebugBox,
     * DebugLine, DebugCircle, DebugSphere, DebugArrow or
     * DebugText.
     */
    addShape(shape: DebugShape, dimension?: Dimension): void;
    /**
     * @remarks
     * 移除世界中的所有调试形状。
     *
     * Removes all debug shapes from the world.
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * 从世界中移除一个调试形状实例。等同于在形状本身上调用 remove。
     *
     * Removes an instance of a debug shape from the world. This is
     * equivalent to calling remove on the shape itself.
     *
     */
    removeShape(shape: DebugShape): void;
}
