/**
 * @beta
 * 一个枚举，表示监视程序决定终止行为包脚本执行的原因。
 *
 * An enumeration with the reason that a watchdog is deciding
 * to terminate execution of a behavior packs' script.
 */
export enum WatchdogTerminateReason {
    /**
     * @remarks
     * 行为包的脚本运行时因脚本无响应（挂起或无限循环）而被终止。
     *
     * Script runtime for a behavior pack is terminated due to
     * non-responsiveness from script (a hang or infinite loop).
     *
     */
    Hang = 'Hang',
    /**
     * @remarks
     * 行为包的脚本运行时因栈溢出（一个长且可能是无限的函数调用链）而被终止。
     *
     * Script runtime for a behavior pack is terminated due to a
     * stack overflow (a long, and potentially infinite) chain of
     * function calls.
     *
     */
    StackOverflow = 'StackOverflow',
}
