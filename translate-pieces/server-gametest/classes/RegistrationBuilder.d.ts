/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { DimensionType, Vector3 } from '../../server';

/**
 * 用于为测试设置 GameTest 参数的工具类。可以将多个方法链式
 * 调用以设置多个属性。
 *
 * A utility class to set GameTest parameters for a test.
 * Methods can be chained together to set multiple properties.
 */
export class RegistrationBuilder {
    private constructor();
    /**
     * @remarks
     * 设置测试所运行的批次。
     *
     * Sets the batch for the test to run in.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param batchName
     * 测试所属批次的名称。
     *
     * Name of the batch for the test.
     * @returns
     * RegistrationBuilder 对象，可在其上调用其他配置方法。
     *
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    batch(batchName: string): RegistrationBuilder;
    /**
     * @remarks
     * 设置测试失败后尝试重新运行的最大次数。
     *
     * Sets the maximum number of times a test will try to rerun if
     * it fails.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder 对象，可在其上调用其他配置方法。
     *
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    maxAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks
     * 设置测试在超时并判定失败之前运行的最大刻数。
     *
     * Sets the maximum number of ticks a test will run for before
     * timing out and failing.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder 对象，可在其上调用其他配置方法。
     *
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    maxTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks
     * 在同时运行多个测试时，应为该 GameTest 预留的周围空间大小
     * （以方块为单位）。
     *
     * Size around the GameTest, in blocks, that should be reserved
     * for the test when running multiple tests together.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param paddingBlocks
     * 该 GameTest 周围不应创建其他 GameTest 的空间大小（以方块为
     * 单位）。
     *
     * Size, in blocks, around the GameTest where additional
     * GameTests should not be created.
     * @returns
     * RegistrationBuilder 对象，可在其上调用其他配置方法。
     *
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    padding(paddingBlocks: number): RegistrationBuilder;
    /**
     * @remarks
     * 该测试是否必须作为其所属更大测试集的一部分而通过。
     *
     * Whether this test is required to pass as part of its broader
     * set of tests.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param isRequired
     * 若设为 true，则该测试必须通过，整个测试运行才能通过。
     *
     * If set to true, the test must pass in order for the entire
     * run of tests to pass.
     * @returns
     * RegistrationBuilder 对象，可在其上调用其他配置方法。
     *
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    required(isRequired: boolean): RegistrationBuilder;
    /**
     * @remarks
     * 设置视为成功所需的测试成功运行次数。
     *
     * Sets the number of successful test runs to be considered
     * successful.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder 对象，可在其上调用其他配置方法。
     *
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks
     * 若为 true，则通过 /gametest runset 运行时会以全部四个旋转方
     * 向运行该测试。
     *
     * If true, runs the test in all four rotations when run via
     * /gametest runset.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    rotateTest(rotate: boolean): RegistrationBuilder;
    /**
     * @remarks
     * 设置结构生成后，测试在执行前等待的刻数。
     *
     * Sets the number of ticks for a test to wait before executing
     * when the structure is spawned.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder 对象，可在其上调用其他配置方法。
     *
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    setupTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks
     * 以指定的位置和维度覆盖默认的结构放置。若高度（y）设为
     * Dimension.heightRange.max，则结构将吸附到地面。若未指定维
     * 度，则将在运行命令所在的维度中运行。
     *
     * Overrides the default structure placement with a specific
     * location and dimension. If height (y) is set to
     * Dimension.heightRange.max, the structure will snap to the
     * ground. If the dimension is not specified, it will run in
     * the dimension the command was run from.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder 对象，可在其上调用其他配置方法。
     *
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     */
    structureLocation(
        structureLocation: Vector3,
        structureDimension?: DimensionType | string,
    ): RegistrationBuilder;
    /**
     * @remarks
     * 设置测试要使用的结构名称。"xyz:bar" 将从行为包栈中加载
     * `/structures/xyz/bar.mcstructure`。
     *
     * Sets the name of the structure for a test to use. "xyz:bar"
     * will load `/structures/xyz/bar.mcstructure` from the
     * behavior pack stack.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder 对象，可在其上调用其他配置方法。
     *
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * @seeExample phantomsShouldFlyFromCats.ts
     */
    structureName(structureName: string): RegistrationBuilder;
    /**
     * @remarks
     * 为测试添加一个标签。你可以使用 `/gametest runset <tag>` 运行
     * 具有指定标签的所有测试。
     *
     * Adds a tag to a test. You can run all tests with a given tag
     * with `/gametest runset <tag>`.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder 对象，可在其上调用其他配置方法。
     *
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * @seeExample phantomsShouldFlyFromCats.ts
     */
    tag(tag: string): RegistrationBuilder;
}
