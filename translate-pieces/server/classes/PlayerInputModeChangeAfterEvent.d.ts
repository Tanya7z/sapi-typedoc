/* IMPORT */ import { InputMode, Player } from '..';

/**
 * 玩家输入模式更改时的事件数据。
 *
 * Event data for when a player input mode changes.
 */
export class PlayerInputModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家使用的新输入模式。
     *
     * The new input mode used by the player.
     *
     */
    readonly newInputModeUsed: InputMode;
    /**
     * @remarks
     * 输入模式发生更改的玩家。
     *
     * The player that had an input mode change.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家之前使用的输入模式。
     *
     * The previous input mode used by the player.
     *
     */
    readonly previousInputModeUsed: InputMode;
}
