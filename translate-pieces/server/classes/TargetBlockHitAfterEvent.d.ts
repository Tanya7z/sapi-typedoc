/* IMPORT */ import { BlockEvent, Entity, Vector3 } from '..';

/**
 * Contains information related to changes to a target block
 * hit.
 *
 * 包含与标靶方块被击中时的变化相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The position where the source hit the block.
     *
     * 击中方块时的源位置。
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * The redstone power before the block is hit.
     *
     * 方块被击中前的红石信号强度。
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power at the time the block is hit.
     *
     * 方块被击中时的红石信号强度。
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * Optional source that hit the target block.
     *
     * 击中目标方块的来源（可选）。
     */
    readonly source: Entity;
}
