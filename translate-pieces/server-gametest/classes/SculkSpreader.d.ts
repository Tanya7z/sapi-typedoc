/* IMPORT */ import { Vector3 } from '../../server';

/**
 * 实现一个可用于测试幽匿蔓延行为的类。此幽匿蔓延器类可以驱动特定方块周围的幽匿生长。
 *
 * Implements a class that can be used for testing sculk
 * spreading behaviors. This sculk spreader class can drive the
 * growth of sculk around a particular block.
 */
export class SculkSpreader {
    private constructor();
    /**
     * @remarks
     * 获取幽匿蔓延器的最大能量值。
     *
     * Gets the maximum charge of a sculk spreader.
     *
     * @throws This property can throw when used.
     */
    readonly maxCharge: number;
    /**
     * @remarks
     * 添加一个游标——它是幽匿将朝其方向蔓延的概念性路径点。
     *
     * Adds a cursor - which is a notional waypoint that the sculk
     * will spread in the direction of.
     *
     * @worldMutation
     *
     */
    addCursorsWithOffset(offset: Vector3, charge: number): void;
    /**
     * @remarks
     * 获取指定游标的当前位置。
     *
     * Retrieves the current position of the specified cursor.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getCursorPosition(index: number): Vector3;
    /**
     * @remarks
     * 返回此幽匿蔓延器的游标总数。
     *
     * Returns a number of overall cursors for this sculk spreader.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getNumberOfCursors(): number;
    /**
     * @remarks
     * 获取幽匿蔓延器当前的总能量值。
     *
     * Gets the total current charge of the sculk spreader.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getTotalCharge(): number;
}
