/* IMPORT */ import { PlayerInputPermissionCategoryChangeAfterEvent } from '..';

/**
 * 管理连接到玩家输入权限更改后事件的回调。
 *
 * Manages callbacks that are connected to after a players input permissions change.
 */
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家输入权限更改后调用的回调。
     *
     * Adds a callback that will be called after a players input permissions change.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void,
    ): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家输入权限更改后调用的回调。
     *
     * Removes a callback from being called after a players input permissions change.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}
