/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { NamespaceNameError, SystemAfterEvents, SystemBeforeEvents, SystemInfo } from '..';

/**
 * 提供系统级事件和函数的类。
 *
 * A class that provides system-level events and functions.
 */
export class System {
    private constructor();
    /**
     * @remarks
     * 返回系统级操作的后置事件集合。
     *
     * Returns a collection of after-events for system-level operations.
     *
     * @earlyExecution
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @remarks
     * 返回系统级操作的前置事件集合。
     *
     * Returns a collection of before-events for system-level operations.
     *
     * @earlyExecution
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * 表示服务器当前的世界刻数。
     *
     * Represents the current world tick of the server.
     *
     * @earlyExecution
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * 如果这是一个当前已加载编辑器的世界，则返回 `true`，否则返回 `false`。
     *
     * Returns true if this is a world where the editor is currently loaded, returns false otherwise.
     *
     * @earlyExecution
     *
     */
    readonly isEditorWorld: boolean;
    /**
     * @remarks
     * 包含服务器的设备信息。
     *
     * Contains the device information for the server.
     *
     * @earlyExecution
     *
     */
    readonly serverSystemInfo: SystemInfo;
    /**
     * @remarks
     * 取消通过 {@link System.runJob} 排队的作业的执行。
     *
     * Cancels the execution of a job queued via {@link System.runJob}.
     *
     * @earlyExecution
     *
     * @param jobId
     * 从 {@link System.runJob} 返回的作业 ID。
     *
     * The job ID returned from {@link System.runJob}.
     */
    clearJob(jobId: number): void;
    /**
     * @remarks
     * 取消先前通过 {@link System.run} 安排的函数运行的执行。
     *
     * Cancels the execution of a function run that was previously scheduled via {@link System.run}.
     *
     * @earlyExecution
     *
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * 在下一个可用的未来时间运行指定的函数。这通常用于实现延迟行为和游戏循环。在事件处理程序的上下文中运行时，通常会在事件发生的同一刻结束时运行代码。在其他代码（system.run 回调）中运行时，该函数将在下一刻运行。但请注意，根据系统负载，不能保证在同一刻或下一刻运行。
     *
     * Runs a specified function at the next available future time. This is frequently used to implement delayed behaviors and game loops. When run within the context of an event handler, this will generally run the code at the end of the same tick where the event occurred. When run in other code (a system.run callout), this will run the function in the next tick. Note, however, that depending on load on the system, running in the same or next tick is not guaranteed.
     *
     * @earlyExecution
     *
     * @param callback
     * 在下一个游戏刻运行的函数回调。
     *
     * Function callback to run at the next game tick.
     * @returns
     * 一个不透明标识符，可与 `clearRun` 函数一起使用以取消此运行的执行。
     *
     * An opaque identifier that can be used with the `clearRun` function to cancel the execution of this run.
     * @seeExample trapTick.ts
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * 按间隔运行一组代码。
     *
     * Runs a set of code on an interval.
     *
     * @earlyExecution
     *
     * @param callback
     * 在此间隔发生时将运行的功能代码。
     *
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * 回调被调用的间隔刻数。
     *
     * An interval of every N ticks that the callback will be called upon.
     * @returns
     * 一个不透明句柄，可与 clearRun 方法一起使用以停止此函数的间隔运行。
     *
     * An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
     * @seeExample every30Seconds.ts
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks
     * 将生成器排队直到完成。生成器将在每刻获得一个时间片，并将运行直到它让出或完成。
     *
     * Queues a generator to run until completion. The generator will be given a time slice each tick, and will be run until it yields or completes.
     *
     * @earlyExecution
     *
     * @param generator
     * 要运行的生成器实例。
     *
     * The instance of the generator to run.
     * @returns
     * 一个不透明句柄，可与 {@link System.clearJob} 一起使用以停止此生成器的运行。
     *
     * An opaque handle that can be used with {@link System.clearJob} to stop the run of this generator.
     * @seeExample cubeGenerator.ts
     */
    runJob(generator: Generator<void, void, void>): number;
    /**
     * @remarks
     * 在由 tickDelay 指定的未来时间运行一组代码。
     *
     * Runs a set of code at a future time specified by tickDelay.
     *
     * @earlyExecution
     *
     * @param callback
     * 此超时发生时将运行的功能代码。
     *
     * Functional code that will run when this timeout occurs.
     * @param tickDelay
     * 调用间隔前的时间（以刻为单位）。
     *
     * Amount of time, in ticks, before the interval will be called.
     * @returns
     * 一个不透明句柄，可与 clearRun 方法一起使用以停止此函数的间隔运行。
     *
     * An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @remarks
     * 使用指定的消息 ID 和负载在脚本内触发事件。
     *
     * Causes an event to fire within script with the specified message ID and payload.
     *
     * @param id
     * 要发送的消息的标识符。这是自定义的，具体取决于你在世界中安装的行为包和内容。
     *
     * Identifier of the message to send. This is custom and dependent on the kinds of behavior packs and content you may have installed within the world.
     * @param message
     * 要发送的消息的数据组件。这是自定义的，具体取决于你在世界中安装的行为包和内容。
     *
     * Data component of the message to send. This is custom and dependent on the kinds of behavior packs and content you may have installed within the world.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    sendScriptEvent(id: string, message: string): void;
    /**
     * @remarks
     * waitTicks 返回一个在请求的刻数后解析的 Promise。
     *
     * waitTicks returns a promise that resolves after the requested number of ticks.
     *
     * @earlyExecution
     *
     * @param ticks
     * 要等待的刻数。最小值为 1。
     *
     * The amount of ticks to wait. Minimum value is 1.
     * @returns
     * 在指定刻数过去后解析的 Promise。
     *
     * A promise that is resolved when the specified amount of ticks have occurred.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}
