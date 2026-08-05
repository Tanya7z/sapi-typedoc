/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { ButtonState, InputButton, InputMode, InvalidEntityError, Vector2 } from '..';

/**
 * 包含某个客户端实例的输入信息。
 *
 * Contains the input information for a client instance.
 */
export class InputInfo {
    private constructor();
    /**
     * @remarks
     * 玩家最后使用的输入模式。
     *
     * The last input mode used by the player.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly lastInputModeUsed: InputMode;
    /**
     * @remarks
     * 玩家的触摸输入是否仅影响触摸栏。
     *
     * Whether the player touch input only affects the touchbar or
     * not.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}
