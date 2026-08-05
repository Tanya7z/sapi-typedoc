/* IMPORT */ import { EntityVisibilityRules } from '..';

/**
 * 根据玩家特定状态控制路径点的可见性。扩展了 {@link EntityVisibilityRules}，增加了针对玩家专属状态（如隐藏模式和旁观者模式）的额外规则。
 *
 * Controls when a waypoint is visible based on player-specific
 * states. Extends {@link EntityVisibilityRules} with
 * additional rules for player-only states like hidden mode and
 * spectator mode.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface PlayerVisibilityRules extends EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪的玩家处于隐藏状态时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when the tracked
     * player is hidden. If undefined, defaults to true.
     *
     */
    showHidden?: boolean;
    /**
     * @remarks
     * 控制当被追踪的玩家处于旁观者模式时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when the tracked
     * player is in spectator mode. If undefined, defaults to true.
     *
     */
    showSpectator?: boolean;
    /**
     * @remarks
     * 控制当旁观者正在查看另一位旁观者玩家时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when a spectator is
     * viewing another spectator player. If undefined, defaults to
     * true.
     *
     */
    showSpectatorToSpectator?: boolean;
}
