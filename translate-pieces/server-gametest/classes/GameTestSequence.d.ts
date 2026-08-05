/**
 * 按顺序执行通过链式 .thenXyz 方法定义的一系列步骤。
 * 这便于按时间顺序编写 GameTest 设置方法与断言的「脚本」。
 *
 * Executes a set of steps defined via chained .thenXyz
 * methods, sequentially. This facilitates a 'script' of
 * GameTest setup methods and assertions over time.
 */
export class GameTestSequence {
    private constructor();
    /**
     * @remarks
     * 将给定的回调作为一步运行在 GameTest 序列中。回调中抛出的异常将终止序列执行。
     *
     * Runs the given callback as a step within a GameTest
     * sequence. Exceptions thrown within the callback will end
     * sequence execution.
     *
     * @worldMutation
     *
     * @param callback
     * 要执行的回调函数。
     *
     * Callback function to execute.
     * @returns
     * 返回一个 GameTestSequence 对象，可继续向其添加更多 .thenXyz 步骤。
     *
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenExecute(callback: () => void): GameTestSequence;
    /**
     * @remarks
     * 经过一段延迟后，将给定的回调作为一步运行在 GameTest 序列中。回调中抛出的异常将终止序列执行。
     *
     * After a delay, runs the given callback as a step within a
     * GameTest sequence. Exceptions thrown within the callback
     * will end sequence execution.
     *
     * @worldMutation
     *
     * @param delayTicks
     * 执行回调前等待的游戏刻数。
     *
     * Number of ticks to wait before executing the callback.
     * @param callback
     * 要执行的回调函数。
     *
     * Callback function to execute.
     * @returns
     * 返回一个 GameTestSequence 对象，可继续向其添加更多 .thenXyz 步骤。
     *
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    /**
     * @remarks
     * 在指定的刻数内，每游戏刻执行一次给定的回调。
     *
     * Runs the given callback every tick for the given number of
     * ticks.
     *
     * @worldMutation
     *
     * @param callback
     * 要执行的回调函数。
     *
     * Callback function to execute.
     * @returns
     * 返回一个 GameTestSequence 对象，可继续向其添加更多 .thenXyz 步骤。
     *
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence;
    /**
     * @remarks
     * 如果 GameTest 序列执行到该步骤，则让测试失败。
     *
     * Causes the test to fail if this step in the GameTest
     * sequence is reached.
     *
     * @worldMutation
     *
     * @param errorMessage
     * 概括失败原因的错误信息。
     *
     * Error message summarizing the failure condition.
     */
    thenFail(errorMessage: string): void;
    /**
     * @remarks
     * 让 GameTest 序列在指定的 delayTicks 内空转等待。
     *
     * Idles the GameTest sequence for the specified delayTicks.
     *
     * @worldMutation
     *
     * @param delayTicks
     * GameTest 序列在该步骤要延迟的游戏刻数。
     *
     * Number of ticks to delay for this step in the GameTest
     * sequence.
     * @returns
     * 返回一个 GameTestSequence 对象，可继续向其添加更多 .thenXyz 步骤。
     *
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenIdle(delayTicks: number): GameTestSequence;
    /**
     * @remarks
     * 如果 GameTest 序列执行到该步骤，则将 GameTest 标记为成功。
     *
     * Marks the GameTest a success if this step is reached in the
     * GameTest sequence.
     *
     * @worldMutation
     *
     */
    thenSucceed(): void;
    /**
     * @remarks
     * 每游戏刻执行给定的回调，直到其成功为止。回调中抛出的异常将终止序列执行。
     *
     * Executes the given callback every tick until it succeeds.
     * Exceptions thrown within the callback will end sequence
     * execution.
     *
     * @worldMutation
     *
     * @param callback
     * 要执行的测试回调函数，通常其内部会调用各种 .assertXyz 断言方法。
     *
     * Testing callback function to execute. Typically, this
     * function will have .assertXyz functions within it.
     * @returns
     * 返回一个 GameTestSequence 对象，可继续向其添加更多 .thenXyz 步骤。
     *
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenWait(callback: () => void): GameTestSequence;
    /**
     * @remarks
     * 从上一步完成起，经过一段延迟后，每游戏刻执行给定的回调直到其成功。回调中抛出的异常将终止序列执行。
     *
     * After a delay from the previous step, executes the given
     * callback every tick until it succeeds. Exceptions thrown
     * within the callback will end sequence execution.
     *
     * @worldMutation
     *
     * @param delayTicks
     * 距 GameTest 序列上一步结束之后，运行回调的游戏刻。
     *
     * Tick (after the previous step in the GameTest sequence) to
     * run the callback at.
     * @param callback
     * 要执行的测试回调函数，通常其内部会调用各种 .assertXyz 断言方法。
     *
     * Testing callback function to execute. Typically, this
     * function will have .assertXyz functions within it.
     * @returns
     * 返回一个 GameTestSequence 对象，可继续向其添加更多 .thenXyz 步骤。
     *
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence;
}
