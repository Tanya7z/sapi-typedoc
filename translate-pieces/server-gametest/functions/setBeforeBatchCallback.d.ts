/* IMPORT */ import { GameTestError } from '..';

/**
 * @remarks
 * 设置一个在批次调用前调用的回调。
 * 这将覆盖此前为此批次设置的回调。
 *
 * Sets a callback that is called before the batch gets called.
 * This will overwrite previously set callbacks for this batch.
 *
 * @worldMutation
 *
 * @earlyExecution
 *
 * @param batchName
 * 测试回调将要在其之前运行的批次名称。
 * Name of the batch of tests the callback will run before.
 * @throws 此函数可能会抛出错误。 This function can throw errors.
 *
 * {@link GameTestError}
 */
export function setBeforeBatchCallback(batchName: string, batchCallback: () => void): void;
