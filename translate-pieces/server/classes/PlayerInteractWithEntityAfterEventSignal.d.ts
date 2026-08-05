/* IMPORT */ import { PlayerInteractWithEntityAfterEvent } from '..';

/**
 * 管理连接到玩家与实体交互后事件的回调。
 *
 * Manages callbacks that are connected to after a player interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家与实体交互后调用的回调。
     *
     * Adds a callback that will be called after a player interacts with an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg0: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家与实体交互后调用的回调。
     *
     * Removes a callback from being called after a player interacts with an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}
