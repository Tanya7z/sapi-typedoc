/* IMPORT */ import { Dimension, Player, Vector3 } from '..';

/**
 * 包含玩家维度已更改的相关信息。
 *
 * Contains information related to changes to a player's
 * dimension having been changed.
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * 玩家正在切换的源维度。
     *
     * @remarks
     * The dimension the player is changing from.
     *
     */
    readonly fromDimension: Dimension;
    /**
     * 玩家在切换维度前的位置。
     *
     * @remarks
     * The location the player was at before changing dimensions.
     *
     */
    readonly fromLocation: Vector3;
    /**
     * 正在切换维度的玩家句柄。
     *
     * @remarks
     * Handle to the player that is changing dimensions.
     *
     */
    readonly player: Player;
    /**
     * 玩家正在切换到的目标维度。
     *
     * @remarks
     * The dimension that the player is changing to.
     *
     */
    readonly toDimension: Dimension;
    /**
     * 玩家切换维度后将生成的位置。
     *
     * @remarks
     * The location the player will spawn to after changing
     * dimensions.
     *
     */
    readonly toLocation: Vector3;
}
