/* IMPORT */ import { PlayerSplitScreenSlot } from '../../server';
/* IMPORT */ import { DisconnectedError } from '..';

/**
 * 玩家加入世界前可获得的数据。
 *
 * The data available before a player joins the world.
 */
export class AsyncPlayerJoinBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 玩家的名称。
     *
     * The player's name
     *
     */
    readonly name: string;
    /**
     * @remarks
     * 一个可用于跨会话识别玩家的标识符。
     *
     * An identifier that can be used to identify a player across
     * sessions.
     *
     */
    readonly persistentId: string;
    /**
     * @remarks
     * 加入玩家的分屏槽位；若玩家不在分屏会话中则为 undefined。
     *
     * The split screen slot of the joining player or undefined if
     * the player is not in a split screen session.
     *
     */
    readonly splitScreenSlot?: PlayerSplitScreenSlot;
    /**
     * @remarks
     * 调用此方法可显式允许玩家加入服务器。当玩家加入被禁用时（在专用服务器上 `allow-player-joining` 被设置为 `false`）很有用。
     *
     * Call this to explicitly allow the player to join the server.
     * This is useful when player joining is disabled
     * (`allow-player-joining` is set to `false` when playing on
     * dedicated server).
     *
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    allowJoin(): void;
    /**
     * @remarks
     * 调用此方法以拒绝玩家加入服务器。可用于阻止未授权的访问。
     *
     * Call this to disallow the player from joining the server.
     * This is useful for preventing unauthorized access to the
     * server.
     *
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disallowJoin(reason?: string): void;
    /**
     * @remarks
     * 已弃用 - 请改用 {@link disallowJoin}。调用此方法可断开玩家的连接。他们将可以重新尝试加入。被断开连接后，玩家将可以再次尝试加入。
     *
     * Deprecated - use {@link disallowJoin} instead.Call this to
     * disconnect a player. They will be allowed to try to join
     * again. They will be allowed to try to join again after being
     * disconnected.
     *
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disconnect(reason?: string): void;
    /**
     * @remarks
     * 若玩家仍在等待加入世界则返回 true。若玩家已断开连接则返回 false。
     *
     * Will return true if the player is still waiting to join the
     * world. If they disconnect then it will return false.
     *
     */
    isValid(): boolean;
}
