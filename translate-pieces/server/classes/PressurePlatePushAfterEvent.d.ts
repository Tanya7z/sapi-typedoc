/* IMPORT */ import { BlockEvent, Entity } from '..';

/**
 * 包含与压力板按下变化相关的信息。
 *
 * Contains information related to changes to a pressure plate push.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 压力板按下前的红石能量。
     *
     * The redstone power of the pressure plate before it was pushed.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 按下时压力板的红石能量。
     *
     * The redstone power of the pressure plate at the time of the push.
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 触发压力板按下的源实体。
     *
     * Source that triggered the pressure plate push.
     *
     */
    readonly source: Entity;
}
