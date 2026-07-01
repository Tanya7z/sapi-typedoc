/* IMPORT */ import { Entity, Player } from '..';

/**
 * @beta
 * 包含有关玩家成功使用有命名的命名标签物品命名实体的相关信息。
 *
 * Contains information related to when a player successfully
 * names an Entity with a named Name Tag item.
 */
export class PlayerUseNameTagAfterEvent {
    private constructor();
    /**
     * 被玩家命名的实体。
     *
     * @remarks
     * The entity that was named by the player.
     *
     * @worldMutation
     *
     */
    entityNamed: Entity;
    /**
     * 玩家给实体的新名称。
     *
     * @remarks
     * The new name that the player has given to the entity.
     *
     * @worldMutation
     *
     */
    newName: string;
    /**
     * 使用命名标签的玩家的句柄。
     *
     * @remarks
     * Handle to the player that used the name tag.
     *
     * @worldMutation
     *
     */
    player: Player;
    /**
     * 玩家使用命名标签之前实体的先前名称。如果实体之前未命名，则为 `undefined`。
     *
     * @remarks
     * The previous name of the entity before the player used the
     * name tag. This will be undefined if the entity was not
     * previously named.
     *
     * @worldMutation
     *
     */
    previousName?: string;
}
