/* IMPORT */ import { InvalidEntityError, Player } from '../../server';
/* IMPORT */ import { AllowListFileReloadError, AllowListModificationError } from '..';

/**
 * 控制服务器的允许列表。仅在专用服务器上可用。
 *
 * Controls the allow list for the server. Only available on
 * dedicated server.
 */
export class AllowList {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    enabled: boolean;
    /**
     * @remarks
     * 将玩家添加到服务器的允许列表。
     *
     * Adds a player to the server's allow list.
     *
     * @worldMutation
     *
     * @param player
     * 应添加到允许列表的玩家或玩家名称。
     *
     * Player or player name that should be added to the allow
     * list.
     * @throws This function can throw errors.
     *
     * {@link AllowListModificationError}
     *
     * {@link InvalidEntityError}
     */
    add(player: Player | string): void;
    /**
     * @remarks
     * 清空允许列表，移除其中的所有条目。
     *
     * Clears the allow list, removing all entries.
     *
     * @worldMutation
     *
     */
    clear(): void;
    /**
     * @remarks
     * 返回玩家是否在服务器的允许列表中。
     *
     * Returns if the player is in the server's allow list.
     *
     * @param player
     * 要检查的玩家或玩家名称。
     *
     * Player or player name that should be checked for.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    contains(player: Player | string): boolean;
    /**
     * @remarks
     * 从磁盘重新加载服务器的允许列表。
     *
     * Reloads the server's allow list from disk.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link AllowListFileReloadError}
     */
    reloadFile(): void;
    /**
     * @remarks
     * 从服务器的允许列表中移除玩家。
     *
     * Removes a player from the server's allow list.
     *
     * @worldMutation
     *
     * @param player
     * 应从允许列表中移除的玩家或玩家名称。
     *
     * Player or player name that should be removed from the allow
     * list.
     * @throws This function can throw errors.
     *
     * {@link AllowListModificationError}
     *
     * {@link InvalidEntityError}
     */
    remove(player: Player | string): void;
}
