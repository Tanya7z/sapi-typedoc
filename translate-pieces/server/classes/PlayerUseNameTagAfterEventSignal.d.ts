/* IMPORT */ import { PlayerUseNameTagAfterEvent } from '..';

/**
 * @beta
 * 管理连接到玩家使用命名过的命名牌物品成功命名实体事件的回调。
 *
 * Manages callbacks that are connected to when a player successfully names an Entity with a named Name Tag item.
 */
export class PlayerUseNameTagAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 将指定回调订阅到玩家使用命名牌后事件。
     *
     * Subscribes the specified callback to a player use name tag after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): (arg0: PlayerUseNameTagAfterEvent) => void;
    /**
     * @remarks
     * 从玩家使用命名牌后事件中移除指定回调。
     *
     * Removes the specified callback from a player use name tag after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): void;
}
