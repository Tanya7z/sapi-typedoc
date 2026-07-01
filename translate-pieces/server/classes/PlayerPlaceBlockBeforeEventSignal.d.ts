/* IMPORT */ import { BlockEventOptions, PlayerPlaceBlockBeforeEvent } from '..';

/**
 * @beta
 * 管理连接到玩家放置方块前事件的回调。
 *
 * Manages callbacks that are connected to before a block is placed by a player.
 */
export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家放置方块前调用的回调。
     *
     * Adds a callback that will be called before a block is placed by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包将以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家放置方块前调用的回调。
     *
     * Removes a callback from being called before an block is placed by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void): void;
}
