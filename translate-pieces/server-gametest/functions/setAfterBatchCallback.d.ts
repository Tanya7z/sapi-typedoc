/* IMPORT */ import { GameTestError } from '..';

/**
 * @remarks
 * 设置一个在批次运行结束后被调用的回调函数。
 * 这将覆盖先前为该批次设置的回调函数。
 * Sets a callback that is called after the batch gets called.
 * This will overwrite previously set callbacks for this batch.
 *
 * @worldMutation
 *
 * @earlyExecution
 *
 * @param batchName
 * 回调将在其之后运行的测试批次名称。
 * Name of the batch of tests the callback will run after.
 * @throws This function can throw errors.
 *
 * {@link GameTestError}
 */
export function setAfterBatchCallback(batchName: string, batchCallback: () => void): void;
