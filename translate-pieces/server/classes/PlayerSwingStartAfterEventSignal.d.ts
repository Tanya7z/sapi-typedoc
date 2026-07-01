/* IMPORT */ import { PlayerSwingEventOptions, PlayerSwingStartAfterEvent } from '..';

/**
 * 管理与玩家开始挥动手臂（例如攻击、使用物品、交互）时相关的回调。
 *
 * Manages callbacks that are connected to when a player starts
 * to swing their arm (e.g. attacking, using an item,
 * interacting).
 */
export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家开始挥动手臂（例如攻击、使用物品、交互）时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a player starts to
     * swing their arm (e.g. attacking, using an item,
     * interacting).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * 移除一个在玩家开始挥动手臂（例如攻击、使用物品、交互）时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a player starts to
     * swing their arm (e.g. attacking, using an item,
     * interacting).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}
