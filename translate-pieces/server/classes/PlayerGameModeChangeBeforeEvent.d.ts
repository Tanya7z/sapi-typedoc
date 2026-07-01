/* IMPORT */ import { GameMode, Player } from '..';

/**
 * 包含玩家与实体交互前的事件相关信息。
 *
 * Contains information regarding an event before a player
 * interacts with an entity.
 */
export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    /**
     * 如果设置为 `true`，游戏模式更改将被取消。
     *
     * @remarks
     * If set to true the game mode change will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * 当前的游戏模式。
     *
     * @remarks
     * The current game mode.
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 要更改到的游戏模式。
     *
     * @remarks
     * The game mode being changed to.
     *
     */
    toGameMode: GameMode;
}
