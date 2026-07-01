/* IMPORT */ import { ButtonState, InputButton, Player } from '..';

/**
 * 玩家按下按钮时的事件数据。
 *
 * Event data for when a player presses a button.
 */
export class PlayerButtonInputAfterEvent {
    private constructor();
    /**
     * 此事件涉及的按钮。
     *
     * @remarks
     * The button this event is about.
     *
     */
    readonly button: InputButton;
    /**
     * 此按钮转移到的状态。
     *
     * @remarks
     * The state that this button transferred to.
     *
     */
    readonly newButtonState: ButtonState;
    /**
     * 执行输入事件的玩家。
     *
     * @remarks
     * The player that performed the input event.
     *
     */
    readonly player: Player;
}
