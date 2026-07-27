/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { Direction, Entity, InvalidEntityError, ItemStack, Player, Vector2, Vector3 } from '../../server';
/* IMPORT */ import { GameTestError, LookDuration, MoveToOptions, NavigationResult, PlayerSkinData } from '..';

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
