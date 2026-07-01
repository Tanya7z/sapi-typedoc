/* IMPORT */ import { ArgumentOutOfBoundsError, EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { InvalidEntityError, NamespaceNameError, PlayerAimAssistSettings } from '..';

/**
 * 用于玩家瞄准辅助相关 API 的容器。
 *
 * A container for APIs related to player aim-assist.
 */
export class PlayerAimAssist {
    private constructor();
    /**
     * 玩家当前激活的瞄准辅助设置，如果未激活则为 `undefined`。
     *
     * @remarks
     * The player's currently active aim-assist settings, or
     * undefined if not active.
     *
     */
    readonly settings?: PlayerAimAssistSettings;
    /**
     * 设置玩家的瞄准辅助设置。
     *
     * @remarks
     * Sets the player's aim-assist settings.
     *
     * @worldMutation
     *
     * @param settings
     * 要为玩家激活的瞄准辅助设置，如果为 `undefined`，则瞄准辅助将被禁用。
     * Aim-assist settings to activate for the player, if undefined
     * aim-assist will be disabled.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link NamespaceNameError}
     */
    set(settings?: PlayerAimAssistSettings): void;
}
