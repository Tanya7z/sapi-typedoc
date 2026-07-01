/* IMPORT */ import { StartupEvent } from '..';

/**
 * 管理连接到启动前事件的回调。
 *
 * Manages callbacks that are connected to before a startup event.
 */
export class StartupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以早期执行权限被调用。
     *
     * This closure is called with early-execution privilege.
     * @returns
     * 以早期执行权限调用的闭包。
     *
     * Closure that is called with early-execution privilege.
     */
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以早期执行权限被调用。
     *
     * This closure is called with early-execution privilege.
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}
