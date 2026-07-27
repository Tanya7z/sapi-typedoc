/* IMPORT */ import { RegistrationBuilder, Test } from '..';

/**
 * @remarks
 * 注册一个新的 GameTest 函数。该 GameTest 将可通过
 * `/gametest run [testClassName]:[testName]`
 * 在 Minecraft 中运行。
 *
 * @worldMutation
 *
 * @earlyExecution
 *
 * @param testClassName
 * 此测试所属的测试类名称。
 * @param testName
 * 此具体测试的名称。
 * @param testFunction
 * 测试函数的实现。
 * @returns
 * 返回一个 {@link RegistrationBuilder} 对象，
 * 可通过其构建器方法为此测试指定
 * 其他选项。
 * @seeExample simpleMobGameTest.ts
 *
 * @remarks
 * Registers a new GameTest function. This GameTest will become
 * available in Minecraft via `/gametest run
 * [testClassName]:[testName]`.
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
 * @seeExample simpleMobGameTest.ts
 */
export function register(
    testClassName: string,
    testName: string,
    testFunction: (arg0: Test) => void,
): RegistrationBuilder;
