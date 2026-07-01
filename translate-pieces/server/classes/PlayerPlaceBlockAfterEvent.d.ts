/* IMPORT */ import { BlockEvent, Player } from '..';

/**
 * 包含有关玩家放置方块的事件信息。
 *
 * Contains information regarding an event where a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 放置此事件方块的玩家。
     *
     * @remarks
     * Player that placed the block for this event.
     *
     */
    readonly player: Player;
}
