/* IMPORT */ import { BlockEvent, Entity } from '..';

/**
 * 包含与压力板被触发相关的信息。
 *
 * Contains information related to changes to a pressure plate push.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 压力板触发前的红石信号强度。
     *
     * The redstone power of the pressure plate before it was pushed.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 按下时压力板的红石信号强度。
     *
     * The redstone power of the pressure plate at the time of the push.
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 触发压力板的源实体。
     *
     * Source that triggered the pressure plate push.
     *
     */
    readonly source: Entity;
}
