/* IMPORT */ import { ScriptEventCommandMessageAfterEvent, ScriptEventMessageFilterOptions } from '..';

/**
 * 允许注册一个响应入站 /scriptevent 命令的事件处理器。
 *
 * Allows for registering an event handler that responds to inbound /scriptevent commands.
 */
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册一个新的 ScriptEvent 处理器。
     *
     * Registers a new ScriptEvent handler.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg0: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks
     * 取消订阅 ScriptEvent 事件的特定处理器。
     *
     * Unsubscribes a particular handler for a ScriptEvent event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}
