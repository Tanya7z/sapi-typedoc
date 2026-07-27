/* IMPORT */ import { ShutdownBeforeEventSignal, StartupBeforeEventSignal, WatchdogTerminateBeforeEventSignal } from '..';

/**
 * 一组在实际操作发生前触发的事件。在大多数情况下，你可以取消或修改即将发生的事件。注意，在 before 事件中，任何修改游戏状态的 API 将无法运行并会抛出错误。
 *
 * A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event. Note that in before events any APIs that modify gameplay state will not function and will throw an error.
 */
export class SystemBeforeEvents {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly shutdown: ShutdownBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly startup: StartupBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 当脚本监视狗关闭服务器时触发。这可能是由于使用了过多内存，或导致了显著的减速或卡顿。要阻止关闭，请将事件的 cancel 属性设置为 `true`。
     *
     * Fires when the scripting watchdog shuts down the server. The can be due to using too much memory, or by causing significant slowdown or hang. To prevent shutdown, set the event's cancel property to true.
     *
     * @earlyExecution
     *
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}
