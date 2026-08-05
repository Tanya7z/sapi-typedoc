/* IMPORT */ import { HotbarEventOptions, PlayerHotbarSelectedSlotChangeAfterEvent } from '..';

/**
 * 管理与玩家选择的快捷栏槽位更改后相关的回调。
 *
 * Manages callbacks that are connected after a player selected
 * hotbar slot is changed.
 */
export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * 添加一个在玩家选择的快捷栏槽位更改后调用的回调。
     *
     * @remarks
     * Adds a callback that will be called after a player selected
     * hotbar slot is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此事件触发时调用的函数回调。
     * Function callback that is called when this event fires.
     * @param options
     * 事件订阅的附加过滤选项。
     * Additional filtering options for the event subscription.
     */
    subscribe(
        callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void,
        options?: HotbarEventOptions,
    ): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * 移除在玩家选择的快捷栏槽位更改后调用的回调。
     *
     * @remarks
     * Removes a callback from being called after a player selected
     * hotbar slot is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void;
}
