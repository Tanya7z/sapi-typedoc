/* IMPORT */ import { InputInfo, PlayerButtonInputAfterEvent, WorldAfterEvents } from '..';

/**
 * 所有支持的输入按钮。与 {@link InputInfo.getButtonState}（通过 {@link Player.inputInfo}）或 {@link PlayerButtonInputAfterEvent}（通过 {@link WorldAfterEvents.playerButtonInput}）一起使用。
 *
 * All the different input buttons that are supported. Use with
 * {@link InputInfo.getButtonState} via {@link
 * Player.inputInfo} or {@link PlayerButtonInputAfterEvent} via
 * {@link WorldAfterEvents.playerButtonInput}
 */
export enum InputButton {
    /**
     * @remarks
     * 映射到控制器、键盘和触摸界面上的"跳跃"按钮。
     *
     * This is mapped to the 'Jump' button on controllers,
     * keyboards, and touch interfaces.
     *
     */
    Jump = 'Jump',
    /**
     * @remarks
     * 映射到控制器、键盘和触摸界面上的"潜行"按钮。默认情况下，在键盘上是 shift，在 Xbox 控制器上是 B。在触摸界面上，这只会被按下 1 tick 或更短时间，然后即使玩家按住手指也会立即释放。下马或离开船只不会发送潜行按钮更改事件。
     *
     * This is mapped to the 'Sneak' button on controllers,
     * keyboards, and touch interfaces. By default, this is shift
     * on a keyboard or B on an Xbox controller. On touch
     * interfaces this will only be pressed for 1 tick or less and
     * then it will be released immediately even if the player
     * holds their finger down. Dismounting a horse or exiting a
     * boat will not send a Sneak button change event.
     *
     */
    Sneak = 'Sneak',
}
