/**
 * 包含有关已加入的玩家信息。有关玩家首次在游戏中生成后可能返回的更详细信息，请参见 playerSpawn 事件。
 *
 * Contains information regarding a player that has joined.
 * See the playerSpawn event for more detailed information that
 * could be returned after the first time a player has spawned
 * within the game.
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * 加入游戏的不透明字符串标识符。
     *
     * @remarks
     * Opaque string identifier of the player that joined the game.
     *
     */
    readonly playerId: string;
    /**
     * 已加入的玩家名称。
     *
     * @remarks
     * Name of the player that has joined.
     *
     */
    readonly playerName: string;
}
