/* IMPORT */ import { GameMode, Player } from '..';

/**
 * 包含玩家游戏模式更改后的事件相关信息。
 *
 * Contains information regarding an event after a players game
 * mode is changed.
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * 更改前的游戏模式。
     *
     * @remarks
     * The previous game mode before the change.
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
     * 更改后的当前游戏模式。
     *
     * @remarks
     * The current game mode after the change.
     *
     */
    readonly toGameMode: GameMode;
}
