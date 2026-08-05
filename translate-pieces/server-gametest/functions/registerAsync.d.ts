/* IMPORT */ import { RegistrationBuilder, Test } from '..';

/**
 * @remarks
 * 注册一个为异步执行而设计的新 GameTest 函数。此 GameTest
 * 将可以在 Minecraft 中通过
 * `/gametest run [testClassName]:[testName]` 使用。
 *
 * Registers a new GameTest function that is designed for
 * asynchronous execution. This GameTest will become available
 * in Minecraft via `/gametest run [testClassName]:[testName]`.
 *
 * @worldMutation
 *
 * @earlyExecution
 *
 * @param testClassName
 * Name of the class of tests this test should be a part of.
 * @param testName
 * Name of this specific test.
 * @param testFunction
 * Implementation of the test function.
 * @returns
 * Returns a {@link RegistrationBuilder} object where
 * additional options for this test can be specified via
 * builder methods.
 * @seeExample simpleMobAsyncTest.ts
 */
export function registerAsync(
    testClassName: string,
    testName: string,
    testFunction: (arg0: Test) => Promise<void>,
): RegistrationBuilder;
