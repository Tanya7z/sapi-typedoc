/**
 * 包含关于已离开世界玩家的信息。
 *
 * Contains information regarding a player that has left the world.
 */
export class PlayerLeaveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已离开世界玩家的不透明字符串标识符。
     *
     * Opaque string identifier of the player that has left the event.
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * 已离开世界玩家的名称。
     *
     * Player that has left the world.
     *
     */
    readonly playerName: string;
}
