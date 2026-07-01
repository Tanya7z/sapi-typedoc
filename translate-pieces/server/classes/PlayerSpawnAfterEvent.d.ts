/* IMPORT */ import { Player } from '..';

/**
 * 包含关于玩家生成的更多信息的事件。
 *
 * An event that contains more information about a player
 * spawning.
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * 如果为 `true`，这是玩家加入游戏后的首次生成。
     *
     * @remarks
     * If true, this is the initial spawn of a player after joining
     * the game.
     *
     * @worldMutation
     *
     */
    initialSpawn: boolean;
    /**
     * 表示加入游戏的玩家对象。
     *
     * @remarks
     * Object that represents the player that joined the game.
     *
     * @worldMutation
     *
     */
    player: Player;
}
