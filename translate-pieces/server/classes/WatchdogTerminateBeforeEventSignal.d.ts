/* IMPORT */ import { WatchdogTerminateBeforeEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to a callback that will
 * be called when a script runtime is being terminated due to a
 * violation of the performance watchdog system.
 *
 * 管理与回调连接的回调，当脚本运行时因违反性能看门狗系统而被终止时，将调用该回调。
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a script runtime is
     * being terminated due to a violation of the performance
     * watchdog system.
     *
     * 添加一个回调，当脚本运行时因违反性能看门狗系统而被终止时调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     *
     * 此闭包以受限执行权限调用。
     * @returns
     * Closure that is called with restricted-execution privilege.
     *
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a script runtime
     * is being terminated due to a violation of the performance
     * watchdog system.
     *
     * 移除一个在脚本运行时因违反性能看门狗系统而被终止时调用的回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     *
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}
