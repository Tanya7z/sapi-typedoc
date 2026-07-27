/* IMPORT */ import { ScriptEventCommandMessageAfterEventSignal } from '..';

/**
 * 提供在 Minecraft 更广泛的脚本系统内触发的一组事件。
 *
 * Provides a set of events that fire within the broader
 * scripting system within Minecraft.
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * 当 /scriptevent 命令被设置时触发的事件。这为命令和其他系统提供了一种在脚本中触发行为的方式。
     *
     * An event that fires when a /scriptevent command is set. This
     * provides a way for commands and other systems to trigger
     * behavior within script.
     *
     * @earlyExecution
     *
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}
