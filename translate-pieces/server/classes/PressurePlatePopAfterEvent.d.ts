/* IMPORT */ import { BlockEvent } from '..';

/**
 * 包含与压力板弹起变化相关的信息。
 *
 * Contains information related to changes to a pressure plate
 * pop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 压力板弹起之前的红石能量。
     *
     * @remarks
     * The redstone power of the pressure plate before it was
     * popped.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * 弹起时压力板的红石能量。
     *
     * @remarks
     * The redstone power of the pressure plate at the time of the
     * pop.
     *
     */
    readonly redstonePower: number;
}
