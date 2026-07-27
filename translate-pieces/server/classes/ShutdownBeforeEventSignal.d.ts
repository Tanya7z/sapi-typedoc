/* IMPORT */ import { ShutdownEvent } from '..';

/**
 * 为调用者提供了一个可适应的接口，用于订阅在游戏世界关闭前触发的事件。此事件发生在玩家离开之后，但在世界关闭之前。
 *
 * Provides an adaptable interface for callers to subscribe to an event that fires before the game world shuts down. This event occurs after players have left, but before the world has closed.
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 为此事件添加一个新的订阅者回调。
     *
     * Adds a new subscriber callback to this event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 事件触发时调用的函数回调。此闭包以受限执行权限被调用。
     *
     * Function callback that is called when this event fires. This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * 移除先前通过 subscribe 方法订阅的回调。
     *
     * Removes a subscriber callback previously subscribed to via the subscribe method.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 先前传递给 subscribe 方法的函数闭包。此闭包以受限执行权限被调用。
     *
     * Function closure that was previously passed to the subscribe method. This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}
