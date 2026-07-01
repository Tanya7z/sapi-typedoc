/* IMPORT */ import { BlockEvent, Entity } from '..';

/**
 * Contains information related to changes to a trip wire trip.
 *
 * 包含与绊线被触发相关的信息。
 * @seeExample tripWireTripEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Whether or not the block has redstone power.
     *
     * 该方块是否具有红石信号。
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * The sources that triggered the trip wire to trip.
     *
     * 触发绊线的来源。
     */
    readonly sources: Entity[];
}
