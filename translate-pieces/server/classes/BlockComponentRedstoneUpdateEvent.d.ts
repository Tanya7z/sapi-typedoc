/* IMPORT */ import { BlockEvent } from '..';

/**
 * 包含有关特定方块红石更新事件的信息。
 * 
 * Contains information regarding a specific block redstone
 * update event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRedstoneUpdateEvent extends BlockEvent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 红石组件的第一个更新事件。
     * 
     * The first update event for the redstone component.
     *
     */
    readonly firstUpdate: boolean;
    /**
     * @remarks
     * 通过此方块的红石信号强度。保证不小于该方块的 `minecraft:redstone_consumer`
     * 组件的 `min_power` 值。
     * 
     * The redstone signal strength passing through this block. It
     * is guaranteed to be >= the `min_power` of the block's
     * 'minecraft:redstone_consumer' component.
     *
     */
    readonly powerLevel: number;
    /**
     * @remarks
     * 上一刻通过此方块的红石信号强度。保证不小于该方块的 `minecraft:redstone_consumer`
     * 组件的 `min_power` 值。
     * 
     * The redstone signal strength from the last tick that was
     * passing through this block. It is guaranteed to be >= the
     * `min_power` of the block's 'minecraft:redstone_consumer'
     * component.
     *
     */
    readonly previousPowerLevel: number;
}
