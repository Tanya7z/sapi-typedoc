/* IMPORT */ import { PlayerInteractWithBlockAfterEvent } from '..';

/**
 * 管理与玩家与方块交互后相关的回调。
 *
 * Manages callbacks that are connected to after a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家与方块交互后调用的回调。
     *
     * @remarks
     * Adds a callback that will be called after a player interacts
     * with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockAfterEvent) => void,
    ): (arg0: PlayerInteractWithBlockAfterEvent) => void;
    /**
     * 移除一个在玩家与方块交互后调用的回调。
     *
     * @remarks
     * Removes a callback from being called after a player
     * interacts with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): void;
}
