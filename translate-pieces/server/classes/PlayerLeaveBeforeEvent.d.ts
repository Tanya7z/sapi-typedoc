/* IMPORT */ import { Player } from '..';

/**
 * 包含关于正在离开世界玩家的信息。
 *
 * Contains information regarding a player that is leaving the world.
 */
export class PlayerLeaveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 正在离开的玩家。
     *
     * The leaving player.
     *
     */
    readonly player: Player;
}
