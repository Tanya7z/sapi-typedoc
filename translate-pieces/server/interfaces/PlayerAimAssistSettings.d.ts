/* IMPORT */ import { AimAssistTargetMode, Vector2 } from '..';

/**
 * 与玩家瞄准辅助相关的设置。
 *
 * Settings relating to a player's aim-assist targeting.
 */
export interface PlayerAimAssistSettings {
    /**
     * @remarks
     * 用于瞄准辅助的视距限制。
     *
     * The view distance limit to use for aim-assist targeting.
     *
     */
    distance?: number;
    /**
     * @remarks
     * 要激活的瞄准辅助预设的 ID。必须包含命名空间。
     *
     * The Id of the aim-assist preset to activate. Must have a
     * namespace.
     *
     */
    presetId: string;
    /**
     * @remarks
     * 用于瞄准辅助的模式。
     *
     * The mode to use for aim-assist targeting.
     *
     */
    targetMode?: AimAssistTargetMode;
    /**
     * @remarks
     * 用于瞄准辅助的视角限制。
     *
     * The view angle limit to use for aim-assist targeting.
     *
     */
    viewAngle?: Vector2;
}
