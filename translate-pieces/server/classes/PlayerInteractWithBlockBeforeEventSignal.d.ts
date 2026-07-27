/* IMPORT */ import { PlayerInteractWithBlockBeforeEvent } from '..';

/**
 * 管理在玩家与方块交互之前相关的回调。
 *
 * Manages callbacks that are connected to before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家与方块交互之前调用的回调。
     *
     * @remarks
     * Adds a callback that will be called before a player
     * interacts with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包将以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg0: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * 移除一个在玩家与方块交互之前调用的回调。
     *
     * @remarks
     * Removes a callback from being called before a player
     * interacts with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包将以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}
