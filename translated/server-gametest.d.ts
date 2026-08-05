// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * `@minecraft/server-gametest` 为脚本API在脚手架与内容测试方面提供支持。
 * 
 * The @minecraft/server-gametest module provides scriptable
 * APIs for scaffolding and testing content experiences in
 * Minecraft.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-gametest",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import { EngineError, InvalidArgumentError } from '@minecraft/common';
import { Block, BlockPermutation, BlockType, Dimension, DimensionLocation, DimensionType, Direction, Entity, FluidType, GameMode, InvalidEntityError, ItemStack, ItemType, Player, RGB, Vector2, Vector3 } from '@minecraft/server';
export enum GameTestCompletedErrorReason {
    Cleanup = 'Cleanup',
    Done = 'Done',
}

export enum GameTestErrorType {
    Assert = 'Assert',
    AssertAtPosition = 'AssertAtPosition',
    ExecutionTimeout = 'ExecutionTimeout',
    ExhaustedAttempts = 'ExhaustedAttempts',
    FailConditionsMet = 'FailConditionsMet',
    LevelStateModificationFailed = 'LevelStateModificationFailed',
    MethodNotImplemented = 'MethodNotImplemented',
    SimulatedPlayerOutOfBounds = 'SimulatedPlayerOutOfBounds',
    Unknown = 'Unknown',
    Waiting = 'Waiting',
}

export enum LookDuration {
    Continuous = 'Continuous',
    Instant = 'Instant',
    UntilMove = 'UntilMove',
}

export enum PersonaArmSize {
    Slim = 'Slim',
    Wide = 'Wide',
}

export enum PersonaPieceType {
    Arms = 'Arms',
    Back = 'Back',
    Body = 'Body',
    Bottom = 'Bottom',
    Capes = 'Capes',
    Dress = 'Dress',
    Eyes = 'Eyes',
    FaceAccessory = 'FaceAccessory',
    FacialHair = 'FacialHair',
    Feet = 'Feet',
    Hair = 'Hair',
    Hands = 'Hands',
    Head = 'Head',
    HighPants = 'HighPants',
    Hood = 'Hood',
    LeftArm = 'LeftArm',
    LeftLeg = 'LeftLeg',
    Legs = 'Legs',
    Mouth = 'Mouth',
    Outerwear = 'Outerwear',
    RightArm = 'RightArm',
    RightLeg = 'RightLeg',
    Skeleton = 'Skeleton',
    Skin = 'Skin',
    Top = 'Top',
}

/**
 * 返回此栅栏是否在多个方向上与其他栅栏连接的信息。
 *
 * Returns information about whether this fence is connected to
 * other fences in several directions.
 */
export class FenceConnectivity {
    private constructor();
    /**
     * @remarks
     * 表示此栅栏方块是否与东侧（x + 1）的另一个栅栏连接。
     *
     * Represents whether this fence block is connected to another
     * fence to the east (x + 1).
     *
     */
    readonly east: boolean;
    /**
     * @remarks
     * 表示此栅栏方块是否与北侧（z - 1）的另一个栅栏连接。
     *
     * Represents whether this fence block is connected to another
     * fence to the north (z - 1).
     *
     */
    readonly north: boolean;
    /**
     * @remarks
     * 表示此栅栏方块是否与南侧（z + 1）的另一个栅栏连接。
     *
     * Represents whether this fence block is connected to another
     * fence to the south (z + 1).
     *
     */
    readonly south: boolean;
    /**
     * @remarks
     * 表示此栅栏方块是否与西侧（x - 1）的另一个栅栏连接。
     *
     * Represents whether this fence block is connected to another
     * fence to the west (x - 1).
     *
     */
    readonly west: boolean;
}

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

export class NavigationResult {
    private constructor();
    readonly isFullPath: boolean;
    getPath(): Vector3[];
}

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

/**
 * 实现一个可用于测试幽匿蔓延行为的类。此幽匿蔓延器类可以驱动特定方块周围的幽匿生长。
 *
 * Implements a class that can be used for testing sculk
 * spreading behaviors. This sculk spreader class can drive the
 * growth of sculk around a particular block.
 */
export class SculkSpreader {
    private constructor();
    /**
     * @remarks
     * 获取幽匿蔓延器的最大能量值。
     *
     * Gets the maximum charge of a sculk spreader.
     *
     * @throws This property can throw when used.
     */
    readonly maxCharge: number;
    /**
     * @remarks
     * 添加一个游标——它是幽匿将朝其方向蔓延的概念性路径点。
     *
     * Adds a cursor - which is a notional waypoint that the sculk
     * will spread in the direction of.
     *
     * @worldMutation
     *
     */
    addCursorsWithOffset(offset: Vector3, charge: number): void;
    /**
     * @remarks
     * 获取指定游标的当前位置。
     *
     * Retrieves the current position of the specified cursor.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getCursorPosition(index: number): Vector3;
    /**
     * @remarks
     * 返回此幽匿蔓延器的游标总数。
     *
     * Returns a number of overall cursors for this sculk spreader.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getNumberOfCursors(): number;
    /**
     * @remarks
     * 获取幽匿蔓延器当前的总能量值。
     *
     * Gets the total current charge of the sculk spreader.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getTotalCharge(): number;
}

/**
 * 可在 GameTest 中使用的模拟玩家，用于表示
 * 玩家在世界中如何移动，并用于测试实体和
 * 环境对玩家的反应。该类型的大部分结构和方法
 * 都来自 {@link Player} 类型。请注意，许多
 * 在更广泛的实体上可用的事件类型，
 * 例如物品使用事件，可能不会以相同的
 * 形式在模拟玩家上触发。
 *
 * A simulated player can be used within GameTests to represent
 * how a player moves throughout the world and to support
 * testing of how entities and the environment will react to a
 * player. This type derives much of its structure and methods
 * from the {@link Player} type. Note that many
 * types of events that may be available for entities more
 * broadly, such as item use events, may not fire in the same
 * capacity for simulated players.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SimulatedPlayer extends Player {
    private constructor();
    /**
     * @remarks
     * 头部在俯仰角和偏航角上的旋转。
     *
     * Rotation of the head across pitch and yaw angles.
     *
     * @throws This property can throw when used.
     */
    readonly headRotation: Vector2;
    /**
     * @remarks
     * 返回模拟玩家是否在冲刺。
     *
     * Returns whether the simulated player is sprinting.
     *
     * @worldMutation
     *
     */
    isSprinting: boolean;
    /**
     * @remarks
     * 让模拟玩家执行一次攻击"挥砍"。
     * 若攻击成功执行则返回 true —— 例如，玩家未
     * 处于冷却状态且拥有有效目标。目标选取
     * 通过从玩家头部进行射线检测来完成。
     *
     * Causes the simulated player to make an attack 'swipe'.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. Target
     * selection is performed by raycasting from the player's head.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    attack(): boolean;
    /**
     * @remarks
     * 让模拟玩家攻击指定的目标。
     * 若攻击成功执行则返回 true —— 例如，玩家未
     * 处于冷却状态且拥有有效目标。该
     * 攻击可在任意距离执行，且不需要与
     * 目标实体保持视线接触。
     *
     * Causes the simulated player to attack the provided target.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. The
     * attack can be performed at any distance and does not require
     * line of sight to the target entity.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    attackEntity(entity: Entity): boolean;
    /**
     * @remarks
     * 破坏 blockLocation 处的方块，并遵循服务器
     * 玩家的游戏模式规则。将会持续挖掘该方块，
     * 直到方块被破坏、玩家使用了某个物品，
     * 或调用了 stopBreakingBlock。
     * 如果 blockLocation 处的方块是实心方块则返回 true。
     *
     * Destroys the block at blockLocation, respecting the rules of
     * the server player's game mode. The block will be hit until
     * broken, an item is used or stopBreakingBlock is called.
     * Returns true if the block at blockLocation is solid.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 要交互的方块位置。
     *
     * Location of the block to interact with.
     * @param direction
     * 放置指定物品时所朝的方向。
     *
     * Direction to place the specified item within.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    breakBlock(blockLocation: Vector3, direction?: Direction): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    chat(message: string): void;
    /**
     * @remarks
     * 模拟并执行模拟玩家从世界中
     * 断开连接的操作。
     *
     * Simulates and performs a disconnection of the simulated
     * player from the world.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    disconnect(): void;
    /**
     * @remarks
     * 丢弃模拟玩家当前选中的物品。
     *
     * Drops the simulated player's selected item
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    dropSelectedItem(): boolean;
    /**
     * @remarks
     * 让模拟玩家开始飞行，就像在
     * 创造模式下飞行一样。若要使用鞘翅滑翔，
     * 请参阅 glide 函数。
     *
     * Causes the simulated player to start flying as though they
     * were flying in creative mode. For flying with Elytra, see
     * function glide.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    fly(): void;
    /**
     * @remarks
     * 给模拟玩家一个指定的物品堆。
     *
     * Gives the simulated player a particular item stack.
     *
     * @worldMutation
     *
     * @param itemStack
     * 要给予的物品。
     *
     * Item to give.
     * @param selectSlot
     * 给予后是否将该槽位设为当前选中槽位。
     *
     * Whether to set the selected slot once given.
     * Defaults to: false
     * @throws This function can throw errors.
     */
    giveItem(itemStack: ItemStack, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * 让模拟玩家开始滑翔。玩家必须装备
     * 鞘翅，且必须处于空中。
     *
     * Causes the simulated player to start gliding. Elytra must be
     * equipped and the player must be in the air.
     *
     * @worldMutation
     *
     * @returns
     * 若模拟玩家成功开始滑翔则返回 true。
     * 若玩家已经在滑翔，或者玩家
     * 未装备鞘翅、处于水中或位于
     * 地面，则返回 false。
     *
     * Returns true if the simulated player begins to glide.
     * Returns false if the player is already gliding, or the
     * player does not have Elytra equipped, is in water or is on
     * the ground.
     * @throws This function can throw errors.
     */
    glide(): boolean;
    /**
     * @remarks
     * 从玩家头部进行射线检测，并与
     * 命中的第一个方块或实体进行交互。若交互成功
     * 则返回 true。最大范围为 6 个方块。
     *
     * Performs a raycast from the player’s head and interacts with
     * the first intersected block or entity. Returns true if the
     * interaction was successful. Maximum range is 6 blocks.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    interact(): boolean;
    /**
     * @remarks
     * 让模拟玩家与一个方块进行交互。指定
     * 方块位置处的方块必须是实心方块。若
     * 交互成功执行则返回 true。
     *
     * Causes the simulated player to interact with a block. The
     * block at the specified block location must be solid. Returns
     * true if the interaction was performed.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 要交互的方块位置。
     *
     * Location of the block to interact with.
     * @param direction
     * 放置指定物品时所朝的方向。
     *
     * Direction to place the specified item within.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    interactWithBlock(blockLocation: Vector3, direction?: Direction): boolean;
    /**
     * @remarks
     * 让模拟玩家与一个生物交互。若
     * 交互成功执行则返回 true。
     *
     * Causes the simulated player to interact with a mob. Returns
     * true if the interaction was performed.
     *
     * @worldMutation
     *
     * @param entity
     * 要交互的实体。
     *
     * Entity to interact with.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    interactWithEntity(entity: Entity): boolean;
    /**
     * @remarks
     * 让模拟玩家跳跃。
     *
     * Causes the simulated player to jump.
     *
     * @worldMutation
     *
     * @returns
     * 若成功执行跳跃则返回 true。
     *
     * True if a jump was performed.
     * @throws This function can throw errors.
     */
    jump(): boolean;
    /**
     * @remarks
     * 旋转模拟玩家的头部/身体，使其看向
     * 给定的方块位置。
     *
     * Rotates the simulated player's head/body to look at the
     * given block location.
     *
     * @worldMutation
     *
     * @param duration
     * Defaults to: 2
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    lookAtBlock(blockLocation: Vector3, duration?: LookDuration): void;
    /**
     * @remarks
     * 旋转模拟玩家的头部/身体，使其看向
     * 给定的实体。
     *
     * Rotates the simulated player's head/body to look at the
     * given entity.
     *
     * @worldMutation
     *
     * @param duration
     * Defaults to: 2
     * @throws This function can throw errors.
     */
    lookAtEntity(entity: Entity, duration?: LookDuration): void;
    /**
     * @remarks
     * 旋转模拟玩家的头部/身体，使其看向
     * 给定的位置。
     *
     * Rotates the simulated player's head/body to look at the
     * given location.
     *
     * @worldMutation
     *
     * @param duration
     * Defaults to: 2
     * @throws This function can throw errors.
     */
    lookAtLocation(location: Vector3, duration?: LookDuration): void;
    /**
     * @remarks
     * 让模拟玩家沿相对于 GameTest 的给定
     * 方向行走。
     *
     * Orders the simulated player to walk in the given direction
     * relative to the GameTest.
     *
     * @worldMutation
     *
     * @param speed
     * Defaults to: 1
     * Bounds: [0, 1]
     * @throws This function can throw errors.
     */
    move(westEast: number, northSouth: number, speed?: number): void;
    /**
     * @remarks
     * 让模拟玩家沿相对于玩家当前
     * 朝向的给定方向行走。
     *
     * Orders the simulated player to walk in the given direction
     * relative to the player's current rotation.
     *
     * @worldMutation
     *
     * @param speed
     * Defaults to: 1
     * Bounds: [0, 1]
     * @throws This function can throw errors.
     */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /**
     * @remarks
     * 让模拟玩家沿直线移动到给定的方块
     * 位置。如果已有移动或寻路正在
     * 进行中，此操作将覆盖上一次的
     * 移动/寻路。
     *
     * Orders the simulated player to move to the given block
     * location in a straight line. If a move or navigation is
     * already playing, this will override the last
     * move/navigation.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    moveToBlock(blockLocation: Vector3, options?: MoveToOptions): void;
    /**
     * @remarks
     * 让模拟玩家沿直线移动到给定的位置。
     * 如果已有移动或寻路正在进行中，
     * 此操作将覆盖上一次的移动/寻路。
     *
     * Orders the simulated player to move to the given location in
     * a straight line. If a move or navigation is already playing,
     * this will override the last move/navigation.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    moveToLocation(location: Vector3, options?: MoveToOptions): void;
    /**
     * @remarks
     * 让模拟玩家使用寻路移动到指定的方块
     * 位置。如果已有移动或寻路正在
     * 进行中，此操作将覆盖上一次的移动/行走。请注意，
     * 若模拟玩家被卡住，该模拟玩家
     * 将停止移动。玩家必须接触地面
     * 才能开始寻路。
     *
     * Orders the simulated player to move to a specific block
     * location using navigation. If a move or navigation is
     * already playing, this will override the last move/walk. Note
     * that if the simulated player gets stuck, that simulated
     * player will stop. The player must be touching the ground in
     * order to start navigation.
     *
     * @worldMutation
     *
     * @param speed
     * Defaults to: 1
     * Bounds: [0, 1]
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    navigateToBlock(blockLocation: Vector3, speed?: number): NavigationResult;
    /**
     * @remarks
     * 将使用寻路跟随指定实体，保持
     * 在一个方块的半径范围内。如果已有移动或寻路
     * 正在进行中，此操作将覆盖上一次的移动/寻路。
     *
     * Will use navigation to follow the selected entity to within
     * a one block radius. If a move or navigation is already
     * playing, this will override the last move/navigation.
     *
     * @worldMutation
     *
     * @param speed
     * Defaults to: 1
     * Bounds: [0, 1]
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    navigateToEntity(entity: Entity, speed?: number): NavigationResult;
    /**
     * @remarks
     * 让模拟玩家使用寻路移动到指定的
     * 位置。如果已有移动或寻路正在
     * 进行中，此操作将覆盖上一次的移动/行走。请注意，
     * 若模拟玩家被卡住，该模拟玩家将
     * 停止移动。玩家必须接触地面才能
     * 开始寻路。
     *
     * Orders the simulated player to move to a specific location
     * using navigation. If a move or navigation is already
     * playing, this will override the last move/walk. Note that if
     * the simulated player gets stuck, that simulated player will
     * stop. The player must be touching the ground in order to
     * start navigation.
     *
     * @worldMutation
     *
     * @param speed
     * Defaults to: 1
     * Bounds: [0, 1]
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    navigateToLocation(location: Vector3, speed?: number): NavigationResult;
    /**
     * @remarks
     * 使用寻路跟随 locations 参数所提供的
     * 路线。如果已有移动或寻路正在
     * 进行中，此操作将覆盖上一次的移动/寻路。
     *
     * Use navigation to follow the route provided via the
     * locations parameter. If a move or navigation is already
     * playing, this will override the last move/navigation.
     *
     * @worldMutation
     *
     * @param locations
     * 用于规划路径的位置列表。
     *
     * A list of locations to use for routing.
     * @param speed
     * 执行寻路时使用的净速度。
     *
     * Net speed to use for doing the navigation.
     * Defaults to: 1
     * Bounds: [0, 1]
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    navigateToLocations(locations: Vector3[], speed?: number): void;
    /**
     * @remarks
     * 重生指定的模拟玩家。
     *
     * Respawns the particular simulated player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    respawn(): boolean;
    /**
     * @remarks
     * 让模拟玩家按指定角度旋转身体，
     * 旋转角度相对于玩家当前的朝向。
     *
     * Causes the simulated player to turn by the provided angle,
     * relative to the player's current rotation.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    rotateBody(angleInDegrees: number): void;
    /**
     * @remarks
     * 让模拟玩家旋转身体以朝向指定
     * 角度，相对于 GameTest 的朝向。
     *
     * Causes the simulated player to turn to face the provided
     * angle, relative to the GameTest.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setBodyRotation(angleInDegrees: number): void;
    /**
     * @remarks
     * 为模拟玩家设置一个指定的物品。
     *
     * Sets a particular item for the simulated player.
     *
     * @worldMutation
     *
     * @param itemStack
     * 要设置的物品。
     *
     * Item to set.
     * @param slot
     * 放置指定物品的槽位。
     *
     * Slot to place the given item in.
     * @param selectSlot
     * 设置后是否将该槽位设为当前选中槽位。
     *
     * Whether to set the selected slot once set.
     * Defaults to: false
     * @throws This function can throw errors.
     */
    setItem(itemStack: ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * 更新玩家皮肤的相关信息。
     *
     * Updates information about the player's skin.
     *
     * @worldMutation
     *
     * @param options
     * 要在玩家身上设置的皮肤选项。
     *
     * Options for the skin to set on the player.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setSkin(options: PlayerSkinData): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @param slot
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    startBuild(slot?: number): void;
    /**
     * @remarks
     * 停止挖掘当前正在被连续破坏的方块。
     *
     * Stops destroying the block that is currently being hit.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopBreakingBlock(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopBuild(): void;
    /**
     * @remarks
     * 让模拟玩家停止飞行。
     *
     * Causes the simulated player to stop flying.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopFlying(): void;
    /**
     * @remarks
     * 让模拟玩家停止滑翔。
     *
     * Causes the simulated player to stop gliding.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopGliding(): void;
    /**
     * @remarks
     * 停止与实体或方块的交互。
     *
     * Stops interacting with entities or blocks.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopInteracting(): void;
    /**
     * @remarks
     * 若模拟玩家正在移动，则停止
     * 移动/行走/跟随。
     *
     * Stops moving/walking/following if the simulated player is
     * moving.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopMoving(): void;
    /**
     * @remarks
     * 让模拟玩家停止游泳。
     *
     * Causes the simulated player to stop swimming.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopSwimming(): void;
    /**
     * @remarks
     * 停止使用当前激活的物品。
     *
     * Stops using the currently active item.
     *
     * @worldMutation
     *
     * @returns
     * 返回正在被使用的物品。若无物品
     * 正在使用则返回 undefined。
     *
     * Returns the item that was in use. Undefined if no item was
     * in use.
     * @throws This function can throw errors.
     */
    stopUsingItem(): ItemStack | undefined;
    /**
     * @remarks
     * 让模拟玩家开始游泳。
     *
     * Causes the simulated player to start swimming.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    swim(): void;
    /**
     * @remarks
     * 让模拟玩家使用一个物品。不会消耗
     * 该物品。若物品处于冷却状态则返回 false。
     *
     * Causes the simulated player to use an item. Does not consume
     * the item. Returns false if the item is on cooldown.
     *
     * @worldMutation
     *
     * @param itemStack
     * 要使用的物品。
     *
     * Item to use.
     * @throws This function can throw errors.
     */
    useItem(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 让模拟玩家手持并使用其物品栏中
     * 的一个物品。
     *
     * Causes the simulated player to hold and use an item in their
     * inventory.
     *
     * @worldMutation
     *
     * @param slot
     * 物品栏槽位索引。
     *
     * Index of the inventory slot.
     * @throws This function can throw errors.
     */
    useItemInSlot(slot: number): boolean;
    /**
     * @remarks
     * 让模拟玩家对其物品栏中的物品
     * 在方块上使用。指定方块位置处的方块
     * 必须是实心方块。若物品被使用则返回 true。
     *
     * Causes the simulated player to use an item in their
     * inventory on a block. The block at the specified block
     * location must be solid. Returns true if the item was used.
     *
     * @worldMutation
     *
     * @param slot
     * 要使用的槽位索引。
     *
     * Index of the slot to use.
     * @param blockLocation
     * 物品所作用的位置。
     *
     * Location to use the item upon.
     * @param direction
     * 放置指定物品时所朝的方向。
     *
     * Direction to place the specified item within.
     * Defaults to: 1
     * @param faceLocation
     * 相对于方块西北下角的位置，
     * 物品将放置在此处。
     *
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     * Defaults to: null
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: Vector3,
        direction?: Direction,
        faceLocation?: Vector3,
    ): boolean;
    /**
     * @remarks
     * 让模拟玩家在方块上使用一个物品。
     * 指定方块位置处的方块必须是实心方块。若
     * 物品被使用则返回 true。
     *
     * Causes the simulated player to use an item on a block. The
     * block at the specified block location must be solid. Returns
     * true if the item was used.
     *
     * @worldMutation
     *
     * @param itemStack
     * 要使用的物品。
     *
     * Item to use.
     * @param blockLocation
     * 物品所作用的位置。
     *
     * Location to use the item upon.
     * @param direction
     * 放置指定物品时所朝的方向。
     *
     * Direction to place the specified item within.
     * Defaults to: 1
     * @param faceLocation
     * 相对于方块西北下角的位置，
     * 物品将放置在此处。
     *
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     * Defaults to: null
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    useItemOnBlock(
        itemStack: ItemStack,
        blockLocation: Vector3,
        direction?: Direction,
        faceLocation?: Vector3,
    ): boolean;
}

/**
 * 这些众所周知的标签可用于将不同测试分类到要运行的测试套件中。
 *
 * These well-known tags can be used to classify different
 * tests into suites to run.
 */
export class Tags {
    private constructor();
    /**
     * @remarks
     * 表示带有该标签的测试应属于所有测试套件。
     *
     * Indicates that the tagged test should be a part of all
     * suites.
     *
     */
    static readonly suiteAll = 'suite:all';
    /**
     * @remarks
     * 表示带有该标签的测试应属于内部（调试）测试套件。
     *
     * Indicates that the tagged test should be a part of an
     * internal (debug) test suite.
     *
     */
    static readonly suiteDebug = 'suite:debug';
    /**
     * @remarks
     * 表示带有该标签的测试应属于默认测试套件。
     *
     * Indicates that the tagged test should be a part of the
     * default test suite.
     *
     */
    static readonly suiteDefault = 'suite:default';
    /**
     * @remarks
     * 表示带有该标签的测试应属于已禁用测试套件。
     *
     * Indicates that the tagged test should be a part of a suite
     * of disabled tests.
     *
     */
    static readonly suiteDisabled = 'suite:disabled';
    static readonly suiteNextUpdate = 'suite:nextupdate';
}

/**
 * GameTest 函数的主类，附带用于操作相应测试的辅助工具和数据。请注意，该类的所有方法都期望传入相对于 GameTest 结构方块的位置（BlockLocation 与 Location）。
 *
 * Main class for GameTest functions, with helpers and data for
 * manipulating the respective test. Note that all methods of
 * this class expect BlockLocations and Locations relative to
 * the GameTest structure block.
 */
export class Test {
    private constructor();
    /**
     * @remarks
     * 断言 _condition_ 所指定的条件为真。如果不为真，则抛出带有指定 _message_ 的错误。
     *
     * Tests that the condition specified in _condition_ is true.
     * If not, an error with the specified _message_ is thrown.
     *
     * @param condition
     * 待求值条件表达式。
     *
     * Expression of the condition to evaluate.
     * @param message
     * 当 _condition_ 求值结果不为真时所传递的消息。
     *
     * Message that is passed if the _condition_ does not evaluate
     * to true.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assert(condition: boolean, message: string): void;
    /**
     * @remarks
     * 断言在指定位置上存在指定类型的方块。如果不存在，则抛出异常。
     *
     * Tests that a block of the specified type is present at the
     * specified location. If it is not, an exception is thrown.
     *
     * @param blockType
     * 期望的方块类型。
     *
     * Expected block type.
     * @param blockLocation
     * 待检查的方块位置。
     *
     * Location of the block to test at.
     * @param isPresent
     * 若为 true，此函数检查指定位置上是否存在指定类型的方块；若为 false，则检查指定位置上不存在指定类型的方块。
     *
     * If true, this function tests whether a block of the
     * specified type is at the location. If false, tests that a
     * block of the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertBlockPresent(
        blockType: BlockType | string,
        blockLocation: Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * 断言在指定位置的方块具有特定的状态值。若不具有该状态值，则抛出异常。
     *
     * Tests that a block has a particular state value at the
     * specified location. If it does not have that state value, an
     * exception is thrown.
     *
     * @param blockLocation
     * 待检查的方块位置。
     *
     * Location of the block to test at.
     * @param callback
     * 回调函数，其中包含基于该位置方块的额外检查。
     *
     * Callback function that contains additional tests based on
     * the block at the specified location.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertBlockState(blockLocation: Vector3, callback: (arg0: Block) => boolean): void;
    /**
     * @remarks
     * 断言实体能够抵达指定位置。根据 canReach 的取值，若条件未满足则抛出异常。
     *
     * Tests that an entity can reach a particular location.
     * Depending on the value of canReach, throws an exception if
     * the condition is not met.
     *
     * @param mob
     * 用于针对位置进行测试的实体。
     *
     * Entity that you wish to test the location against.
     * @param blockLocation
     * 结构方块相对位置，用于测试指定 mob 是否能够抵达。
     *
     * Structure-relative location to test whether the specified
     * mob can reach.
     * @param canReach
     * 若为 true，检查 mob 是否能抵达该位置；若为 false，检查该 mob 是否无法抵达该位置。
     *
     * If true, tests whether the mob can reach the location. If
     * false, tests whether the mob is not able to reach the
     * location.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertCanReachLocation(
        mob: Entity,
        blockLocation: Vector3,
        canReach?: boolean,
    ): void;
    /**
     * @remarks
     * 断言位于指定位置的容器（如箱子）内含有指定物品堆。否则抛出错误。
     *
     * Tests that a container (e.g., a chest) at the specified
     * location contains a specified of item stack. If not, an
     * error is thrown.
     *
     * @param itemStack
     * 表示要检查的物品类型。指定容器必须至少包含 1 个与 _itemStack_ 中定义的物品类型相匹配的物品。
     *
     * Represents the type of item to check for. The specified
     * container must contain at least 1 item matching the item
     * type defined in _itemStack_.
     * @param blockLocation
     * 带容器的方块（例如箱子）的位置，将针对其内容进行测试。
     *
     * Location of the block with a container (for example, a
     * chest) to test the contents of.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertContainerContains(itemStack: ItemStack, blockLocation: Vector3): void;
    /**
     * @remarks
     * 断言位于指定位置的容器（如箱子）为空。否则抛出错误。
     *
     * Tests that a container (e.g., a chest) at the specified
     * location is empty. If not, an error is thrown.
     *
     * @param blockLocation
     * 带容器的方块（例如箱子）的位置，将针对其是否为空进行测试。
     *
     * Location of the block with a container (for example, a
     * chest) to test is empty of contents.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertContainerEmpty(blockLocation: Vector3): void;
    /**
     * @remarks
     * 断言实体已装备特定护甲。否则抛出错误。
     *
     * Tests that an entity has a specific piece of armor equipped.
     * If not, an error is thrown.
     *
     * @param entityTypeIdentifier
     * 要匹配的实体标识符（例如 'minecraft:skeleton'）。
     *
     * Identifier of the entity to match (e.g.,
     * 'minecraft:skeleton').
     * @param armorSlot
     * 待检查的容器槽位索引。
     *
     * Container slot index to test.
     * @param armorName
     * 要查找的护甲名称。
     *
     * Name of the armor to look for.
     * @param armorData
     * 要查找的整型数据值。
     *
     * Data value integer to look for.
     * @param blockLocation
     * 装备护甲的待测实体的位置。
     *
     * Location of the entity with armor to test for.
     * @param hasArmor
     * 是否期望该实体装备了指定的护甲。
     *
     * Whether or not the entity is expected to have the specified
     * armor equipped.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityHasArmor(
        entityTypeIdentifier: string,
        armorSlot: number,
        armorName: string,
        armorData: number,
        blockLocation: Vector3,
        hasArmor?: boolean,
    ): void;
    /**
     * @remarks
     * 断言实体具有特定组件。否则抛出异常。
     *
     * Tests that an entity has a particular component. If not, an
     * exception is thrown.
     *
     * @param entityTypeIdentifier
     * 指定实体的标识符（例如 'minecraft:skeleton'）。若未指定命名空间，则默认为 'minecraft:'。
     *
     * Identifier of the specified entity (e.g.,
     * 'minecraft:skeleton'). If the namespace is not specified,
     * 'minecraft:' is assumed.
     * @param componentIdentifier
     * 要检查的组件标识符。若未指定命名空间，则默认为 'minecraft:'。
     *
     * Identifier of the component to check for. If the namespace
     * is not specified, 'minecraft:' is assumed.
     * @param blockLocation
     * 带容器的方块（例如箱子）所在的位置。
     *
     * Location of the block with a container (for example, a
     * chest.)
     * @param hasComponent
     * 决定是测试该组件存在，还是测试其不存在。
     *
     * Determines whether to test that the component exists, or
     * does not.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: Vector3,
        hasComponent?: boolean,
    ): void;
    /**
     * @remarks
     * 根据 isPresent 的取值，断言指定位置上存在或不存在特定实体。根据 isPresent 的取值，若找到或未找到实体，则抛出错误。
     *
     * Depending on the value for isPresent, tests that a
     * particular entity is present or not present at the specified
     * location. Depending on the value of isPresent, if the entity
     * is found or not found, an error is thrown.
     *
     * @param entity
     * 要测试的特定实体。
     *
     * Specific entity to test for.
     * @param blockLocation
     * 实体待测试的位置。
     *
     * Location of the entity to test for.
     * @param isPresent
     * 指明应测试在指定位置存在或不存在实体。
     *
     * Whether to test that an entity is present or not present at
     * the specified location.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityInstancePresent(
        entity: Entity,
        blockLocation: Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * 断言在 GameTest 区域内存在一个实体实例。否则抛出异常。
     *
     * Tests that an entity instance is present within the GameTest
     * area. If not, an exception is thrown.
     *
     * @param entity
     * 待测试的实体实例。
     *
     * Entity instance to test for.
     * @param isPresent
     * 若为 true，则测试指定实体是否存在于 GameTest 区域内；若为 false，则测试指定实体不存在于该区域。
     *
     * If true, this function tests whether the specified entity is
     * present in the GameTest area. If false, tests that the
     * specified entity is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     * @seeExample simpleMobTest.ts 9fe10d88
     */
    assertEntityInstancePresentInArea(entity: Entity, isPresent?: boolean): void;
    /**
     * @remarks
     * 根据 isPresent 的取值，测试在某特定位置存在或不存在指定类型的实体。若条件未满足，则抛出异常。
     *
     * Depending on the value of isPresent, tests for the presence
     * or non-presence of entity of a specified type at a
     * particular location. If the condition is not met, an
     * exception is thrown.
     *
     * @param entityTypeIdentifier
     * 待测试实体的类型（例如 'minecraft:skeleton'）。若未指定实体命名空间，则默认为 'minecraft:'。
     *
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param blockLocation
     * 待测试实体的位置。
     *
     * Location of the entity to test for.
     * @param searchDistance
     * 以 blockLocation 为起点搜索实体的距离。
     *
     * The distance to search for the entity from the
     * blockLocation.
     * Defaults to: 0
     * @param isPresent
     * 若为 true，此函数测试指定类型实体是否存在；若为 false，则测试指定类型实体不存在。
     *
     * If true, this function tests whether an entity of the
     * specified type is present. If false, tests that an entity of
     * the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * 断言在 GameTest 区域内存在指定类型的实体。否则抛出异常。
     *
     * Tests that an entity of a specified type is present within
     * the GameTest area. If not, an exception is thrown.
     *
     * @param entityTypeIdentifier
     * 待测试实体的类型（例如 'minecraft:skeleton'）。若未指定实体命名空间，则默认为 'minecraft:'。
     *
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param isPresent
     * 若为 true，此函数测试指定类型实体是否存在于 GameTest 区域内；若为 false，则测试指定类型实体不存在于该区域。
     *
     * If true, this function tests whether an entity of the
     * specified type is present in the GameTest area. If false,
     * tests that an entity of the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     * @seeExample simpleMobTest.ts 1a4be3f1
     * @seeExample simpleMobGameTest.ts
     */
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    /**
     * @remarks
     * 断言位于指定位置的实体（例如骷髅）具有特定数据。否则抛出错误。
     *
     * Tests that an entity (e.g., a skeleton) at the specified
     * location has a particular piece of data. If not, an error is
     * thrown.
     *
     * @param blockLocation
     * 要查找的实体位置。
     *
     * Location of the entity to look for.
     * @param entityTypeIdentifier
     * 要查找的实体的标识符（例如 'minecraft:skeleton'）。注意：若未指定命名空间，则默认为 'minecraft:'。
     *
     * Identifier of the entity (e.g., 'minecraft:skeleton') to
     * look for. Note if no namespace is specified, 'minecraft:' is
     * assumed.
     * @param callback
     * 用于对所选实体的各项属性进行测试的回调函数。若该回调函数返回 false 或未找到指定标识符的实体，则抛出异常。
     *
     * Callback function where facets of the selected entity can be
     * tested for. If this callback function returns false or no
     * entity with the specified identifier is found, an exception
     * is thrown.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityState(
        blockLocation: Vector3,
        entityTypeIdentifier: string,
        callback: (arg0: Entity) => boolean,
    ): void;
    /**
     * @remarks
     * 根据 isTouching 的取值，断言指定类型的实体正在接触或连接另一实体。若条件未满足，则抛出异常。
     *
     * Depending on the value of isTouching, tests that an entity
     * of a specified type is touching or connected to another
     * entity. If the condition is not met, an exception is thrown.
     *
     * @param entityTypeIdentifier
     * 待测试实体的类型（例如 'minecraft:skeleton'）。若未指定实体命名空间，则默认为 'minecraft:'。
     *
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param location
     * 待测试实体的位置。
     *
     * Location of the entity to test for.
     * @param isTouching
     * 若为 true，此函数测试实体是否接触指定位置；若为 false，则测试实体未接触指定位置。
     *
     * If true, this function tests whether the entity is touching
     * the specified location. If false, tests that an entity is
     * not testing the specified location.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityTouching(entityTypeIdentifier: string, location: Vector3, isTouching?: boolean): void;
    /**
     * @remarks
     * 根据 isWaterlogged 的取值，断言某位置的方块含水。若条件未满足，则抛出错误。纯水方块不视为含水方块。
     *
     * Depending on the value of isWaterlogged, tests that a block
     * at a location contains water. If the condition is not met,
     * an error is thrown. Pure water blocks are not considered to
     * be waterlogged.
     *
     * @param blockLocation
     * 待测试方块的位置。
     *
     * Location of the block to test for.
     * @param isWaterlogged
     * 是否测试 _position_ 处方块期望处于含水状态。
     *
     * Whether to test that the block at _position_ is expected to
     * be waterlogged.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertIsWaterlogged(blockLocation: Vector3, isWaterlogged?: boolean): void;
    /**
     * @remarks
     * 断言在某区域内存在指定类型和数量的物品。否则抛出错误。
     *
     * Tests that items of a particular type and count are present
     * within an area. If not, an error is thrown.
     *
     * @param itemType
     * 要查找的物品类型。
     *
     * Type of item to look for.
     * @param blockLocation
     * 在该位置附近搜索指定物品集合。
     *
     * Location to search around for the specified set of items.
     * @param searchDistance
     * 搜索半径（以方块为单位），用于在范围内累计物品数量。若为 0，则仅搜索 _position_ 处的特定方块。
     *
     * Range, in blocks, to aggregate a count of items around. If
     * 0, will only search the particular block at _position_.
     * @param count
     * 至少要查找并用于测试的物品数量。
     *
     * Number of items, at minimum, to look and test for.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertItemEntityCountIs(
        itemType: ItemType | string,
        blockLocation: Vector3,
        searchDistance: number,
        count: number,
    ): void;
    /**
     * @remarks
     * 根据 isPresent 的取值，断言某特定位置存在或不存在特定物品实体。若条件未满足，则抛出异常。
     *
     * Depending on the value of isPresent, tests whether a
     * particular item entity is present or not at a particular
     * location. If the condition is not met, an exception is
     * thrown.
     *
     * @param itemType
     * 待测试物品的类型。
     *
     * Type of item to test for.
     * @param blockLocation
     * 待测试物品实体的位置。
     *
     * Location of the item entity to test for.
     * @param searchDistance
     * 用于查找物品实体的半径（以方块为单位）。
     *
     * Radius in blocks to look for the item entity.
     * Defaults to: 0
     * @param isPresent
     * 若为 true，此函数测试指定类型的物品实体是否存在；若为 false，则测试指定类型的物品实体不存在。
     *
     * If true, this function tests whether an item entity of the
     * specified type is present. If false, tests that an item
     * entity of the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertItemEntityPresent(
        itemType: ItemType | string,
        blockLocation: Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * 断言某位置上的红石信号强度等级与特定值匹配。否则抛出异常。
     *
     * Tests that Redstone power at a particular location matches a
     * particular value. If not, an exception is thrown.
     *
     * @param blockLocation
     * 待测试的位置。
     *
     * Location to test.
     * @param power
     * 期望的能量等级。
     *
     * Expected power level.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertRedstonePower(blockLocation: Vector3, power: number): void;
    /**
     * @remarks
     * 销毁特定位置上的方块。
     *
     * Destroys a block at a particular location.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 要销毁的方块的位置。
     *
     * Location of the block to destroy.
     * @param dropResources
     * 是否生成特定掉落所暴露的资源。
     *
     * Whether to add resources exposed with a particular drop.
     * Defaults to: false
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    destroyBlock(blockLocation: Vector3, dropResources?: boolean): void;
    /**
     * @remarks
     * 将当前测试标记为失败用例。
     *
     * Marks the current test as a failure case.
     *
     * @param errorMessage
     * 概括失败原因的错误消息。
     *
     * Error message summarizing the failure condition.
     * @throws This function can throw errors.
     */
    fail(errorMessage: string): void;
    /**
     * @remarks
     * 运行给定回调函数。若回调未抛出异常，则将该测试标记为失败。
     *
     * Runs the given callback. If the callback does not throw an
     * exception, the test is marked as a failure.
     *
     * @param callback
     * 要运行的回调函数。若该函数正常执行完毕，则测试将被标记为失败。通常该函数体内会调用 .assertXyz 系列方法。
     *
     * Callback function that runs. If the function runs
     * successfully, the test is marked as a failure. Typically,
     * this function will have .assertXyz method calls within it.
     * @throws This function can throw errors.
     */
    failIf(callback: () => void): void;
    /**
     * @remarks
     * 获取指定方块位置处的方块。
     *
     * Gets a block at the specified block location.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 要检索的方块的位置。
     *
     * Location of the block to retrieve.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getBlock(blockLocation: Vector3): Block;
    /**
     * @remarks
     * 获取此测试所处的维度。
     *
     * Gets the dimension of this test.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getDimension(): Dimension;
    /**
     * @remarks
     * 若指定方块位置处的方块是栅栏，则返回一个包含栅栏连接详情的辅助对象。
     *
     * If the block at the specified block location is a fence,
     * this returns a helper object with details on how a fence is
     * connected.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 要检索的方块的位置。
     *
     * Location of the block to retrieve.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getFenceConnectivity(blockLocation: Vector3): FenceConnectivity;
    /**
     * @remarks
     * 获取一个 sculk spreader 对象，可用于控制和管理 sculk 从某个方块的扩散方式。
     *
     * Retrieves a sculk spreader object that can be used to
     * control and manage how sculk grows from a block.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 要从中获取 sculk spreader 的方块的位置。
     *
     * Location of the block to retrieve a sculk spreader from.
     * @returns
     * 返回 SculkSpreader；若该方块上不存在 SculkSpreader 则返回 undefined。
     *
     * Returns the SculkSpreader or undefined if no SculkSpreader
     * is present on the block.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getSculkSpreader(blockLocation: Vector3): SculkSpreader | undefined;
    /**
     * @remarks
     * 返回当前测试的方向 —— 有关可能取值（北、东、南、西，数值 2-5），请参阅 {@link minecraftserver.Direction} 枚举。
     *
     * Returns the direction of the current test - see the {@link
     * minecraftserver.Direction} enum for more information on
     * potential values (north, east, south, west - values 2-5).
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    getTestDirection(): Direction;
    /**
     * @remarks
     * 此异步函数将等待指定的 tick 数后再继续执行。
     *
     * This asynchronous function will wait for the specified time
     * in ticks before continuing execution.
     *
     * @worldMutation
     *
     * @param tickDelay
     * 等待时长（以 tick 为单位）。
     *
     * Amount of time to wait, in ticks.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    idle(tickDelay: number): Promise<void>;
    /**
     * @remarks
     * 返回该测试当前是否处于运行后的 Clean Up（清理）阶段。
     *
     * Returns whether or not the test is currently in the Clean Up
     * step after running.
     *
     * @worldMutation
     *
     */
    isCleaningUp(): boolean;
    /**
     * @remarks
     * 返回该测试是否已经完成。
     *
     * Returns whether or not the test has already completed
     *
     * @worldMutation
     *
     */
    isCompleted(): boolean;
    /**
     * @remarks
     * 杀死 GameTest 结构内的所有实体。
     *
     * Kills all entities within the GameTest structure.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    killAllEntities(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    onPlayerJump(mob: Entity, jumpAmount: number): void;
    /**
     * @remarks
     * 在某个方块位置按下按钮。
     *
     * Presses a button at a block location.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 要按下按钮的位置。
     *
     * Location to push the button at.
     * @throws
     * Will throw an error if a button is not present at the
     * specified position.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    pressButton(blockLocation: Vector3): void;
    /**
     * @remarks
     * 向所有玩家显示指定消息。
     *
     * Displays the specified message to all players.
     *
     * @worldMutation
     *
     * @param text
     * 要显示的消息。
     *
     * Message to display.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    print(text: string): void;
    /**
     * @remarks
     * 在某个方块位置扳动拉杆。
     *
     * Pulls a lever at a block location.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 要扳动拉杆的位置。
     *
     * Location to pull the lever at.
     * @throws
     * Will throw an error if a lever is not present at the
     * specified position.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    pullLever(blockLocation: Vector3): void;
    /**
     * @remarks
     * 通过创建一个临时红石方块在某特定位置发出红石脉冲。
     *
     * Sends a Redstone pulse at a particular location by creating
     * a temporary Redstone block.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 发射红石脉冲的位置。
     *
     * Location to pulse Redstone at.
     * @param duration
     * 脉冲持续的 tick 数。
     *
     * Number of ticks to pulse Redstone.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    pulseRedstone(blockLocation: Vector3, duration: number): void;
    /**
     * @remarks
     * 从一个 BlockLocation 出发，返回一个坐标相对于当前 GameTest 结构方块的新 BlockLocation。例如，结构方块上方方块的相对坐标为 (0, 1, 0)。同时也会考虑 GameTest 结构的旋转。
     *
     * From a BlockLocation, returns a new BlockLocation with
     * coordinates relative to the current GameTest structure
     * block. For example, the relative coordinates for the block
     * above the structure block are (0, 1, 0). Rotation of the
     * GameTest structure is also taken into account.
     *
     * @param worldBlockLocation
     * 世界上要转换为相对位置的绝对位置。
     *
     * Absolute location in the world to convert to a relative
     * location.
     * @returns
     * 一个相对于 GameTest 命令方块的位置。
     *
     * A location relative to the GameTest command block.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    relativeBlockLocation(worldBlockLocation: Vector3): Vector3;
    /**
     * @remarks
     * 从一个位置出发，返回一个坐标相对于当前 GameTest 结构方块的新位置。例如，结构方块上方方块的相对坐标为 (0, 1, 0)。同时也会考虑 GameTest 结构的旋转。
     *
     * From a location, returns a new location with coordinates
     * relative to the current GameTest structure block. For
     * example, the relative coordinates for the block above the
     * structure block are (0, 1, 0). Rotation of the GameTest
     * structure is also taken into account.
     *
     * @worldMutation
     *
     * @param worldLocation
     * 世界上要转换为相对位置的绝对位置。
     *
     * Absolute location in the world to convert to a relative
     * location.
     * @returns
     * 一个相对于 GameTest 命令方块的位置。
     *
     * A location relative to the GameTest command block.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    relativeLocation(worldLocation: Vector3): Vector3;
    /**
     * @remarks
     * 从世界中移除一个模拟玩家。
     *
     * Removes a simulated player from the world.
     *
     * @worldMutation
     *
     * @param simulatedPlayer
     * 要移除的模拟玩家。
     *
     * Simulated player to remove.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    /**
     * @remarks
     * 根据当前测试的旋转方向返回某个方向的相对方向。传入 Direction.south 将返回测试方向；传入 Direction.north 则返回测试方向的反方向，以此类推。
     *
     * Returns a relative direction given the current rotation of
     * the current test. Passing in Direction.south will return the
     * test direction; Passing in Direction.north will return the
     * opposite of the test direction, and so on.
     *
     * @worldMutation
     *
     * @param direction
     * 要转换为 GameTest 朝向相对方向的方向。传入 Direction.south 将返回测试方向；传入 Direction.north 则返回测试方向的反方向，以此类推。
     *
     * Direction to translate into a direction relative to the
     * GameTest facing. Passing in Direction.south will return the
     * test direction; Passing in Direction.north will return the
     * opposite of the test direction, and so on.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    rotateDirection(direction: Direction): Direction;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    rotateVector(vector: Vector3): Vector3;
    /**
     * @remarks
     * 在指定的 tick 延迟后运行某个特定的回调函数。
     *
     * Runs a specific callback after a specified delay of ticks
     *
     * @worldMutation
     *
     * @param delayTicks
     * 运行指定回调之前的延迟 tick 数。
     *
     * Number of ticks to delay before running the specified
     * callback.
     * @param callback
     * 要执行的回调函数。
     *
     * Callback function to execute.
     * @throws This function can throw errors.
     */
    runAfterDelay(delayTicks: number, callback: () => void): void;
    /**
     * @remarks
     * 在 GameTest 开始的 _tick_ tick 之后运行给定的回调函数。
     *
     * Runs the given callback after a delay of _tick_ ticks from
     * the start of the GameTest.
     *
     * @worldMutation
     *
     * @param tick
     * 从 GameTest 开始的 tick 计数，到达该 tick 时运行回调。
     *
     * Tick (after the start of the GameTest) to run the callback
     * at.
     * @param callback
     * 要执行的回调函数。
     *
     * Callback function to execute.
     * @throws This function can throw errors.
     */
    runAtTickTime(tick: number, callback: () => void): void;
    /**
     * @remarks
     * 在 GameTest 完成后运行给定的回调函数，无论测试是通过、失败还是超时。
     *
     * Runs the given callback after the GameTest has completed
     * regardless if the test passed, failed, or timed out.
     *
     * @worldMutation
     *
     * @param callback
     * 要执行的回调。
     *
     * Callback to execute.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    runOnFinish(callback: () => void): void;
    /**
     * @remarks
     * 在指定的方块位置将方块设为特定配置（即一个 BlockPermutation）。
     *
     * Sets a block to a particular configuration (a
     * BlockPermutation) at the specified block location.
     *
     * @worldMutation
     *
     * @param blockData
     * 包含方块配置数据的方块状态（Permutation）。
     *
     * Permutation that contains the configuration data for a
     * block.
     * @param blockLocation
     * 要设置的方块的位置。
     *
     * Location of the block to set.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    setBlockPermutation(blockData: BlockPermutation, blockLocation: Vector3): void;
    /**
     * @remarks
     * 在指定的方块位置将方块设为特定类型。
     *
     * Sets a block to a particular type at the specified block
     * location.
     *
     * @worldMutation
     *
     * @param blockType
     * 要设置的方块类型。
     *
     * Type of block to set.
     * @param blockLocation
     * 要设置的方块的位置。
     *
     * Location of the block to set.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     * @seeExample minibiomes.ts
     */
    setBlockType(blockType: BlockType | string, blockLocation: Vector3): void;
    /**
     * @remarks
     * 对于盛液体的方块（如炼药锅），可更改其中所盛液体的类型。
     *
     * For blocks that are fluid containers - like a cauldron -
     * changes the type of fluid within that container.
     *
     * @worldMutation
     *
     * @param location
     * 盛液方块的位置。
     *
     * Location of the fluid container block.
     * @param type
     * 要设置的液体类型。可取值请参阅 {@link FluidType}。
     *
     * Type of fluid to set. See {@link FluidType}
     * for a list of values.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    setFluidContainer(location: Vector3, type: FluidType): void;
    /**
     * @remarks
     * 设置可爆炸实体的引信时长。
     *
     * Sets the fuse of an explodable entity.
     *
     * @worldMutation
     *
     * @param entity
     * 可爆炸的实体。
     *
     * Entity that is explodable.
     * @param fuseLength
     * 实体爆炸之前的时长（以 tick 为单位）。
     *
     * Length of time, in ticks, before the entity explodes.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    setTntFuse(entity: Entity, fuseLength: number): void;
    /**
     * @remarks
     * 在某位置生成一个实体。
     *
     * Spawns an entity at a location.
     *
     * @worldMutation
     *
     * @param entityTypeIdentifier
     * 要创建的实体类型。若未指定命名空间，则默认为 'minecraft:'。注意可在尖括号之间指定一个可选的初始生成事件（例如 namespace:entityType<spawnEvent>）。
     *
     * Type of entity to create. If no namespace is provided,
     * 'minecraft:' is assumed. Note that an optional initial spawn
     * event can be specified between less than/greater than signs
     * (e.g., namespace:entityType<spawnEvent>).
     * @returns
     * 已生成的实体。若无法生成该实体，则返回 undefined。
     *
     * The spawned entity. If the entity cannot be spawned, returns
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     * @seeExample simpleMobTest.ts 1a4be3f1
     * @seeExample simpleMobGameTest.ts
     * @seeExample phantomsShouldFlyFromCats.ts
     * @seeExample minibiomes.ts
     */
    spawn(entityTypeIdentifier: string, blockLocation: Vector3): Entity;
    /**
     * @remarks
     * 在某位置生成一个实体。
     *
     * Spawns an entity at a location.
     *
     * @worldMutation
     *
     * @param entityTypeIdentifier
     * 要创建的实体类型。若未指定命名空间，则默认为 'minecraft:'。注意可在尖括号之间指定一个可选的初始生成事件（例如 namespace:entityType<spawnEvent>）。
     *
     * Type of entity to create. If no namespace is provided,
     * 'minecraft:' is assumed. Note that an optional initial spawn
     * event can be specified between less than/greater than signs
     * (e.g., namespace:entityType<spawnEvent>).
     * @returns
     * 已生成的实体。若无法生成该实体，则返回 undefined。
     *
     * The spawned entity. If the entity cannot be spawned, returns
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnAtLocation(entityTypeIdentifier: string, location: Vector3): Entity;
    /**
     * @remarks
     * 在指定位置生成一个物品实体。
     *
     * Spawns an item entity at a specified location.
     *
     * @worldMutation
     *
     * @param itemStack
     * 用于描述要创建的物品实体的 ItemStack。
     *
     * ItemStack that describes the item entity to create.
     * @param location
     * 要在其上创建物品实体的位置。
     *
     * Location to create the item entity at.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @remarks
     * 在世界中创建一个新的模拟玩家。
     *
     * Creates a new simulated player within the world.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 模拟玩家生成的位置。
     *
     * Location where to spawn the simulated player.
     * @param name
     * 为新创建的模拟玩家指定的名称。
     *
     * Name to give the new simulated player.
     * Defaults to: "Simulated Player"
     * @param gameMode
     * Defaults to: 0
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnSimulatedPlayer(
        blockLocation: Vector3,
        name?: string,
        gameMode?: GameMode,
    ): SimulatedPlayer;
    /**
     * @remarks
     * 在某位置生成一个没有任何 AI 行为的实体。此方法经常与 .walkTo 等方法联用，以获得可预测的 mob 行为。
     *
     * Spawns an entity at a location without any AI behaviors.
     * This method is frequently used in conjunction with methods
     * like .walkTo to create predictable mob actions.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 实体应被生成到的位置。
     *
     * Location where the entity should be spawned.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: Vector3): Entity;
    /**
     * @remarks
     * 在某位置生成一个没有任何 AI 行为的实体。此方法经常与 .walkTo 等方法联用，以获得可预测的 mob 行为。
     *
     * Spawns an entity at a location without any AI behaviors.
     * This method is frequently used in conjunction with methods
     * like .walkTo to create predictable mob actions.
     *
     * @worldMutation
     *
     * @param location
     * 实体应被生成到的位置。
     *
     * Location where the entity should be spawned.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviorsAtLocation(
        entityTypeIdentifier: string,
        location: Vector3,
    ): Entity;
    /**
     * @remarks
     * 断言在某一特定位置存在特定的物品实体。否则抛出异常。
     *
     * Tests that a particular item entity is present at a
     * particular location. If not, an exception is thrown.
     *
     * @worldMutation
     *
     * @param blockLocation
     * 含有多面方块的 BlockLocation。
     *
     * BlockLocation containing a multiface block.
     * @param fromFace
     * 用于扩散的起始面。该面必须已被设置。
     *
     * Face to spread from. This face must already be set.
     * @param direction
     * 扩散方向。使用 Minecraft.Direction 枚举来指定方向。
     *
     * Direction to spread. Use the Minecraft.Direction enum to
     * specify a direction.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spreadFromFaceTowardDirection(
        blockLocation: Vector3,
        fromFace: Direction,
        direction: Direction,
    ): void;
    /**
     * @remarks
     * 创建一个新的 GameTestSequence —— 一组在 GameTest 中按顺序执行的步骤。
     *
     * Creates a new GameTestSequence - A set of steps that play
     * out sequentially within a GameTest.
     *
     * @worldMutation
     *
     * @returns
     * 一个新的 GameTestSequence，其链式方法便于创建一组步骤。
     *
     * A new GameTestSequence with chaining methods that facilitate
     * creating a set of steps.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    startSequence(): GameTestSequence;
    /**
     * @remarks
     * 将当前测试标记为成功用例。
     *
     * Marks the current test as a success case.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    succeed(): void;
    /**
     * @remarks
     * 运行给定的回调函数。若回调未抛出异常，则将该测试标记为成功。
     *
     * Runs the given callback. If the callback does not throw an
     * exception, the test is marked as a success.
     *
     * @worldMutation
     *
     * @param callback
     * 要运行的回调函数。若该函数正常执行完毕，则测试将被标记为成功。通常该函数体内会调用 .assertXyz 系列方法。
     *
     * Callback function that runs. If the function runs
     * successfully, the test is marked as a success. Typically,
     * this function will have .assertXyz method calls within it.
     * @throws This function can throw errors.
     */
    succeedIf(callback: () => void): void;
    /**
     * @remarks
     * 在指定的 tick 将测试标记为成功。
     *
     * Marks the test as a success at the specified tick.
     *
     * @worldMutation
     *
     * @param tick
     * 自 GameTest 开始后到达该 tick 时将测试标记为成功。
     *
     * Tick after the start of the GameTest to mark the test as
     * successful.
     * @throws This function can throw errors.
     */
    succeedOnTick(tick: number): void;
    /**
     * @remarks
     * 在测试开始 _tick_ 个 tick 后运行给定的回调函数。若回调未抛出异常，则将该测试标记为失败。
     *
     * Runs the given callback at _tick_ ticks after the start of
     * the test. If the callback does not throw an exception, the
     * test is marked as a failure.
     *
     * @worldMutation
     *
     * @param tick
     * 从 GameTest 开始后到达该 tick 时运行测试回调。
     *
     * Tick after the start of the GameTest to run the testing
     * callback at.
     * @param callback
     * 要运行的回调函数。若该函数正常执行完毕，则测试将被标记为成功。
     *
     * Callback function that runs. If the function runs
     * successfully, the test is marked as a success.
     * @throws This function can throw errors.
     */
    succeedOnTickWhen(tick: number, callback: () => void): void;
    /**
     * @remarks
     * 每个 tick 运行一次给定的回调函数。当回调成功执行（即不抛出异常）时，测试被标记为成功。
     *
     * Runs the given callback every tick. When the callback
     * successfully executes, the test is marked as a success.
     * Specifically, the test will succeed when the callback does
     * not throw an exception.
     *
     * @worldMutation
     *
     * @param callback
     * 要运行的测试回调函数。若该函数正常执行完毕，则测试将被标记为成功。
     *
     * Testing callback function that runs. If the function runs
     * successfully, the test is marked as a success.
     * @throws This function can throw errors.
     * @seeExample simpleMobGameTest.ts
     */
    succeedWhen(callback: () => void): void;
    /**
     * @remarks
     * 根据 isPresent 的取值，每个 tick 测试是否存在某种类型的方块。当找到或未找到（取决于 isPresent）指定类型的方块时，测试即被标记为成功。
     *
     * Depending on the condition of isPresent, tests for the
     * presence of a block of a particular type on every tick. When
     * the specified block of a type is found or not found
     * (depending on isPresent), the test is marked as a success.
     *
     * @worldMutation
     *
     * @param blockType
     * 待测试的方块类型。
     *
     * Type of block to test for.
     * @param blockLocation
     * 待测试的方块位置。
     *
     * Location of the block to test at.
     * @param isPresent
     * 若为 true，此函数测试是否存在指定类型的方块；若为 false，则测试指定类型的方块不存在。
     *
     * If true, this function tests whether a block of the
     * specified type is present. If false, tests that a block of
     * the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    succeedWhenBlockPresent(
        blockType: BlockType | string,
        blockLocation: Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * 每个 tick 检查特定组件是否存在。根据 hasComponent 的取值，当找到指定组件时，测试即被标记为成功。
     *
     * Tests for the presence of a component on every tick.
     * Depending on the value of hasComponent, when the specified
     * component is found, the test is marked as a success.
     *
     * @worldMutation
     *
     * @param entityTypeIdentifier
     * 要查找的实体类型。若未指定命名空间，则默认为 'minecraft:'。
     *
     * Type of entity to look for. If no namespace is specified,
     * 'minecraft:' is assumed.
     * @param componentIdentifier
     * 用于测试其存在性的组件类型。若未指定命名空间，则默认为 'minecraft:'。
     *
     * Type of component to test for the presence of. If no
     * namespace is specified, 'minecraft:' is assumed.
     * @param blockLocation
     * 待测试实体的方块位置。
     *
     * Block location of the entity to test.
     * @param hasComponent
     * 若为 true，此函数测试组件是否存在；若为 false，则测试组件不存在。
     *
     * If true, this function tests for the presence of a
     * component. If false, this function tests for the lack of a
     * component.
     * @throws This function can throw errors.
     */
    succeedWhenEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: Vector3,
        hasComponent: boolean,
    ): void;
    /**
     * @remarks
     * 根据 isPresent 的取值，每个 tick 测试实体的存在性。当找到或未找到（取决于 isPresent）指定类型的实体时，测试即被标记为成功。
     *
     * Depending on the value of isPresent, tests for the presence
     * of an entity on every tick. When an entity of the specified
     * type is found or not found (depending on isPresent), the
     * test is marked as a success.
     *
     * @worldMutation
     *
     * @param entityTypeIdentifier
     * 待测试的实体类型（例如 'minecraft:skeleton'）。若未指定实体命名空间，则默认为 'minecraft:'。
     *
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param blockLocation
     * 待测试实体的位置。
     *
     * Location of the entity to test for.
     * @param isPresent
     * 若为 true，此函数测试指定类型实体是否存在；若为 false，则测试指定类型实体不存在。
     *
     * If true, this function tests whether an entity of the
     * specified type is present. If false, tests that an entity of
     * the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     * @seeExample phantomsShouldFlyFromCats.ts
     * @seeExample minibiomes.ts
     */
    succeedWhenEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * 从固定列表中的方块事件触发一个方块事件。
     *
     * Triggers a block event from a fixed list of available block
     * events.
     *
     * @worldMutation
     *
     * @param event
     * 要触发的事件。有效值包括 minecraft:drip、minecraft:grow_stalagtite、minecraft:grow_stalagmite、minecraft:grow_up、minecraft:grow_down 以及 minecraft:grow_sideways。
     *
     * Event to trigger. Valid values include minecraft:drip,
     * minecraft:grow_stalagtite, minecraft:grow_stalagmite,
     * minecraft:grow_up, minecraft:grow_down and
     * minecraft:grow_sideways.
     * @param eventParameters
     * Defaults to: []
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    triggerInternalBlockEvent(blockLocation: Vector3, event: string, eventParameters?: number[]): void;
    /**
     * @remarks
     * 此异步函数将等待指定回调成功执行完毕。until 可以与 .assert 系列方法配合，用于评估某个条件是否为真。
     *
     * This asynchronous function will wait until the code in the
     * specified callback successfully completes. until can be used
     * in conjunction with .assert functions to evaluate that a
     * condition is true.
     *
     * @worldMutation
     *
     * @param callback
     * 包含要执行的代码的函数。
     *
     * Function with code to evaluate.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    until(callback: () => void): Promise<void>;
    /**
     * @remarks
     * 强制一个生物走到特定位置。通常与 .spawnWithoutBehaviors 等方法配合使用，以获得更可预测的生物行为。一旦与目标位置相交，生物即会停止寻路。
     *
     * Forces a mob to walk to a particular location. Usually used
     * in conjunction with methods like .spawnWithoutBehaviors to
     * have more predictable mob behaviors. Mobs will stop
     * navigation as soon as they intersect the target location.
     *
     * @worldMutation
     *
     * @param mob
     * 要下达指令的生物实体。
     *
     * Mob entity to give orders to.
     * @param blockLocation
     * 实体应行走到的位置。
     *
     * Location where the entity should be walk to.
     * @param speedModifier
     * 实体行走速度的可调修正系数。
     *
     * Adjustable modifier to the mob's walking speed.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    walkTo(mob: Entity, blockLocation: Vector3, speedModifier?: number): void;
    /**
     * @remarks
     * 强制一个生物走到特定位置。通常与 .spawnWithoutBehaviors 等方法配合使用，以获得更可预测的生物行为。一旦与目标位置相交，生物即会停止寻路。
     *
     * Forces a mob to walk to a particular location. Usually used
     * in conjunction with methods like .spawnWithoutBehaviors to
     * have more predictable mob behaviors. Mobs will stop
     * navigation as soon as they intersect the target location.
     *
     * @worldMutation
     *
     * @param mob
     * 要下达指令的生物实体。
     *
     * Mob entity to give orders to.
     * @param location
     * 实体应行走到的位置。
     *
     * Location where the entity should be walk to.
     * @param speedModifier
     * 实体行走速度的可调修正系数。
     *
     * Adjustable modifier to the mob's walking speed.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    walkToLocation(mob: Entity, location: Vector3, speedModifier?: number): void;
    /**
     * @remarks
     * 从一个相对于 GameTest 结构方块的 BlockLocation 出发，返回一个坐标相对于世界的新 BlockLocation。同时也会考虑 GameTest 结构的旋转。
     *
     * From a BlockLocation with coordinates relative to the
     * GameTest structure block, returns a new BlockLocation with
     * coordinates relative to world. Rotation of the GameTest
     * structure is also taken into account.
     *
     * @param relativeBlockLocation
     * 相对于 GameTest 命令方块的位置。
     *
     * Location relative to the GameTest command block.
     * @returns
     * 一个相对于 GameTest 命令方块的绝对位置。
     *
     * An absolute location relative to the GameTest command block.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    worldBlockLocation(relativeBlockLocation: Vector3): Vector3;
    /**
     * @remarks
     * 从一个相对于 GameTest 结构方块的位置出发，返回一个坐标相对于世界的新位置。同时也会考虑 GameTest 结构的旋转。
     *
     * From a location with coordinates relative to the GameTest
     * structure block, returns a new location with coordinates
     * relative to world. Rotation of the GameTest structure is
     * also taken into account.
     *
     * @param relativeLocation
     * 相对于 GameTest 命令方块的位置。
     *
     * Location relative to the GameTest command block.
     * @returns
     * 一个相对于 GameTest 命令方块的绝对位置。
     *
     * An absolute location relative to the GameTest command block.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    worldLocation(relativeLocation: Vector3): Vector3;
}

export interface GameTestErrorContext {
    absolutePosition: Vector3;
    relativePosition: Vector3;
    tickCount: number;
}

export interface MoveToOptions {
    faceTarget?: boolean;
    speed?: number;
}

/**
 * 与特定玩家角色（Persona）部件相关的数据。
 *
 * Data pertaining to a specific player Persona piece.
 */
export interface PlayerPersonaPiece {
    id: string;
    isDefaultPiece?: boolean;
    packId: string;
    productId: string;
    type: PersonaPieceType;
}

/**
 * 与玩家已配置皮肤相关的数据。
 *
 * Data pertaining to a player's configured skin.
 */
export interface PlayerSkinData {
    armSize?: PersonaArmSize;
    personaPieces?: PlayerPersonaPiece[];
    skinColor?: RGB;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class GameTestCompletedError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly reason: GameTestCompletedErrorReason;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class GameTestError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly context?: GameTestErrorContext;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly messageParameters: string[];
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly type: GameTestErrorType;
}

/**
 * @remarks
 * 返回玩家皮肤的相关数据。
 *
 * Returns data about a player's skin.
 *
 * @worldMutation
 *
 * @param player
 * 要获取皮肤数据的玩家。
 * The player who's skin is returned.
 * @throws This function can throw errors.
 *
 * {@link InvalidArgumentError}
 *
 * {@link InvalidEntityError}
 */
export function getPlayerSkin(player: Player): PlayerSkinData;
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
/**
 * @remarks
 * 生成一个未与特定 {@link Test} 关联的模拟玩家。
 * 你可以使用 {@link SimulatedPlayer.remove} 将玩家移出世界。
 *
 * Spawns a simulated player that isn't associated to a
 * specific {@link Test}.  You can use {@link
 * SimulatedPlayer.remove} to remove the player from the world.
 *
 * @worldMutation
 *
 * @param location
 * 生成玩家的位置。
 * The location in which to spawn the player.
 * @param name
 * 玩家的名称。
 * The name for the player.
 * @param gameMode
 * 玩家的游戏模式。
 * The game mode for the player.
 * @throws This function can throw errors.
 *
 * {@link EngineError}
 */
export function spawnSimulatedPlayer(
    location: DimensionLocation,
    name: string,
    gameMode: GameMode,
): SimulatedPlayer;
