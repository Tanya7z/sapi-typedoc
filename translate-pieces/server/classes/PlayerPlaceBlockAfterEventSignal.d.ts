/* IMPORT */ import { BlockEventOptions, PlayerPlaceBlockAfterEvent } from '..';

/**
 * 管理与玩家放置方块时相关的回调。
 *
 * Manages callbacks that are connected to when a block is
 * placed by a player.
 */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家放置方块时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a block is placed
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    /**
     * 移除一个在玩家放置方块时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when an block is placed
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}
