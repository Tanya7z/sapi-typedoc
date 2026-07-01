/* IMPORT */ import { ArgumentOutOfBoundsError, EngineError, InvalidArgumentError, UnsupportedFunctionalityError } from '../../common';
/* IMPORT */ import { AABB, Block, BlockRaycastHit, BlockRaycastOptions, CommandError, CommandResult, ContainerRulesError, Dimension, Effect, EffectType, EntityApplyDamageByProjectileOptions, EntityApplyDamageOptions, EntityComponent, EntityComponentReturnType, EntityComponentTypes, EntityEffectOptions, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, GetBlocksStandingOnOptions, InvalidEntityComponentError, InvalidEntityError, ItemStack, PlayAnimationOptions, ScoreboardIdentity, TeleportOptions, TicksPerSecond, Vector2, Vector3, VectorXZ } from '..';

/**
 * 表示世界中实体（生物、玩家或其他移动物体，如矿车）的状态。
 *
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
    private constructor();
    /**
     * @remarks
     * 实体当前所在的维度。
     *
     * Dimension that the entity is currently within.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 实体的唯一标识符。此标识符旨在跨世界实例加载保持一致。不应从此唯一标识符的值和结构中推断任何含义——不要解析或解释它。即使 {@link Entity.isValid} 为 `false`，此属性也可访问。
     *
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it. This
     * property is accessible even if {@link Entity.isValid} is
     * false.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 实体是否接触可攀爬方块。例如，梯子旁的玩家或石墙旁的蜘蛛。
     *
     * Whether the entity is touching a climbable block. For
     * example, a player next to a ladder or a spider next to a
     * stone wall.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isClimbing: boolean;
    /**
     * @remarks
     * 实体是否具有大于 0 的坠落距离，或在滑翔时大于 1。
     *
     * Whether the entity has a fall distance greater than 0, or
     * greater than 1 while gliding.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isFalling: boolean;
    /**
     * @remarks
     * 实体的任何部分是否在水方块内部。
     *
     * Whether any part of the entity is inside a water block.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isInWater: boolean;
    /**
     * @remarks
     * 实体是否在实心方块顶部。此属性可能以意外方式表现。此属性在实体首次生成时始终为 `true`，如果实体没有重力，则此属性可能不正确。
     *
     * Whether the entity is on top of a solid block. This property
     * may behave in unexpected ways. This property will always be
     * true when an Entity is first spawned, and if the Entity has
     * no gravity this property may be incorrect.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isOnGround: boolean;
    /**
     * @remarks
     * 如果为 `true`，实体当前正在睡觉。
     *
     * If true, the entity is currently sleeping.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isSleeping: boolean;
    /**
     * @remarks
     * 实体是否正在潜行——即移动得较慢且较安静。
     *
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     *
     * @worldMutation
     *
     */
    isSneaking: boolean;
    /**
     * @remarks
     * 实体是否正在冲刺。例如，使用冲刺动作的玩家、逃跑的豹猫或用胡萝卜钓竿加速的猪。
     *
     * Whether the entity is sprinting. For example, a player using
     * the sprint action, an ocelot running away or a pig boosting
     * with Carrot on a Stick.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isSprinting: boolean;
    /**
     * @remarks
     * 实体是否处于游泳状态。例如，使用游泳动作的玩家或水中的鱼。
     *
     * Whether the entity is in the swimming state. For example, a
     * player using the swim action or a fish in water.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isSwimming: boolean;
    /**
     * @remarks
     * 返回实体是否可以被脚本操作。当玩家的 EntityLifetimeState 设置为 Loaded 时，该玩家被视为有效。
     *
     * Returns whether the entity can be manipulated by script. A
     * Player is considered valid when it's EntityLifetimeState is
     * set to Loaded.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 用于在 `.lang` 文件中本地化此实体名称的键。
     *
     * Key for the localization of this entity's name used in .lang
     * files.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 实体的当前位置。
     *
     * Current location of the entity.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 决定玩家名称标签是否应进行深度测试以确定可见性的布尔值。
     *
     * Boolean which determines if the player nameplate should be
     * depth tested for visibility.
     *
     * @worldMutation
     *
     */
    nameplateDepthTested: boolean;
    /**
     * @remarks
     * 决定此实体名称标签渲染距离的浮点数。
     *
     * Float that determines the render distance of this entity's
     * nameplate.
     *
     * @worldMutation
     *
     */
    nameplateRenderDistance: number;
    /**
     * @remarks
     * 实体的给定名称。
     *
     * Given name of the entity.
     *
     * @worldMutation
     *
     */
    nameTag: string;
    /**
     * @remarks
     * 返回表示此实体的记分板身份。实体被击杀后仍将保持有效。
     *
     * Returns a scoreboard identity that represents this entity.
     * Will remain valid when the entity is killed.
     *
     */
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * @beta
     * @remarks
     * 获取或设置用作 AI 相关行为（如攻击）目标的实体。如果实体当前没有目标，则返回 `undefined`。
     *
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking. If the entity
     * currently has no target returns undefined.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly target?: Entity;
    /**
     * @remarks
     * 实体类型的标识符——例如，`minecraft:skeleton`。即使 {@link Entity.isValid} 为 `false`，此属性也可访问。
     *
     * Identifier of the type of the entity - for example,
     * 'minecraft:skeleton'. This property is accessible even if
     * {@link Entity.isValid} is false.
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * 向实体添加或更新一个效果，例如中毒。
     *
     * Adds or updates an effect, like poison, to the entity.
     *
     * @worldMutation
     *
     * @param effectType
     * 要添加到实体的效果类型。
     *
     * Type of effect to add to the entity.
     * @param duration
     * 效果应用的时间量（以 tick 为单位）。每秒有 20 tick。使用 {@link TicksPerSecond} 常量在 tick 和秒之间进行转换。值必须在 [0, 20000000] 范围内。范围：[1, 20000000]
     *
     * Amount of time, in ticks, for the effect to apply. There are
     * 20 ticks per second. Use {@link TicksPerSecond} constant to
     * convert between ticks and seconds. The value must be within
     * the range [0, 20000000].
     * Bounds: [1, 20000000]
     * @param options
     * 效果的附加选项。
     *
     * Additional options for the effect.
     * @returns
     * 如果效果成功添加或更新，则不返回任何内容。如果持续时间或放大器超出有效范围，或者效果不存在，则可能抛出错误。
     *
     * Returns nothing if the effect was added or updated
     * successfully. This can throw an error if the duration or
     * amplifier are outside of the valid ranges, or if the effect
     * does not exist.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     * @seeExample spawnPoisonedVillager.ts
     * @seeExample quickFoxLazyDog.ts
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
    /**
     * @remarks
     * 向实体的物品栏添加一个物品。
     *
     * Adds an item to the entity's inventory.
     *
     * @worldMutation
     *
     * @returns
     * 如果物品已完全添加则返回 `undefined`，否则返回包含剩余数量的 ItemStack。
     *
     * Returns undefined if the item was fully added or returns an
     * ItemStack with the remaining count.
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     *
     * {@link InvalidEntityComponentError}
     *
     * {@link InvalidEntityError}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks
     * 向实体添加一个指定的标签。
     *
     * Adds a specified tag to an entity.
     *
     * @worldMutation
     *
     * @param tag
     * 要添加的标签内容。标签必须少于 256 个字符。
     *
     * Content of the tag to add. The tag must be less than 256
     * characters.
     * @returns
     * 如果标签成功添加则返回 `true`。如果标签已存在于实体上，则可能失败。
     *
     * Returns true if the tag was added successfully. This can
     * fail if the tag already exists on the entity.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     * @seeExample tagsQuery.ts
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * 对实体应用一组伤害。
     *
     * Applies a set of damage to an entity.
     *
     * @worldMutation
     *
     * @param amount
     * 要应用的伤害量。
     *
     * Amount of damage to apply.
     * @param options
     * 关于伤害来源的附加选项，可能为此实体添加额外效果或引发额外行为。
     *
     * Additional options about the source of damage, which may add
     * additional effects or spur additional behaviors on this
     * entity.
     * @returns
     * 实体是否受到任何伤害。如果实体无敌或应用的伤害小于或等于 0，则可能返回 `false`。
     *
     * Whether the entity takes any damage. This can return false
     * if the entity is invulnerable or if the damage applied is
     * less than or equal to 0.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link UnsupportedFunctionalityError}
     * @seeExample applyDamageThenHeal.ts
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @remarks
     * 向实体的当前速度施加冲量向量。
     *
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * @worldMutation
     *
     * @param vector
     * 冲量向量。
     *
     * Impulse vector.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     * @seeExample applyImpulse.ts
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @remarks
     * 向实体的当前速度施加冲量向量。
     *
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * @worldMutation
     *
     * @param verticalStrength
     * 垂直向量的击退强度。
     *
     * Knockback strength for the vertical vector.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link UnsupportedFunctionalityError}
     * @seeExample bounceSkeletons.ts
     */
    applyKnockback(horizontalForce: VectorXZ, verticalStrength: number): void;
    /**
     * @remarks
     * 清除此实体上设置的所有动态属性。
     *
     * Clears all dynamic properties that have been set on this
     * entity.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 将实体的当前速度设置为零。
     *
     * Sets the current velocity of the Entity to zero.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     * @seeExample applyImpulse.ts
     */
    clearVelocity(): void;
    /**
     * @remarks
     * 如果实体着火，则将其灭火。请注意，你可以调用 `getComponent('minecraft:onfire')`，如果存在，则实体着火。
     *
     * Extinguishes the fire if the entity is on fire. Note that
     * you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * @worldMutation
     *
     * @param useEffects
     * 是否显示与灭火相关的任何视觉效果。默认值：`true`
     *
     * Whether to show any visual effects connected to the
     * extinguishing.
     * Defaults to: true
     * @returns
     * 返回实体是否曾着火。
     *
     * Returns whether the entity was on fire.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     * @seeExample setOnFire.ts
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @remarks
     * 获取实体的碰撞边界。
     *
     * Gets the entity's collision bounds.
     *
     * @returns
     * 一个轴对齐的边界框。
     *
     * An axis-aligned bounding box.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getAABB(): AABB;
    /**
     * @remarks
     * 获取此实体直接站在上面的实心方块。忽略压力板。
     *
     * Gets the solid blocks that this entity is directly standing
     * on. Ignores pressure plates.
     *
     * @param options
     * 返回哪些方块的附加配置选项。
     *
     * Additional configuration options for what blocks are
     * returned.
     * @returns
     * 此实体直接站在上面的实心方块。如果实体正在跳跃或飞行，则返回空列表。
     *
     * The solid blocks that this entity is directly standing on.
     * Returns an empty list if the entity is jumping or flying.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getAllBlocksStandingOn(options?: GetBlocksStandingOnOptions): Block[];
    /**
     * @remarks
     * 返回从此实体视线方向上相交的第一个方块。
     *
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     *
     * @param options
     * 射线投射的附加配置选项。
     *
     * Additional configuration options for the ray cast.
     * @returns
     * 返回从此实体视线方向上相交的第一个方块。
     *
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @remarks
     * 获取最接近此实体中心的一个实心方块，此实体直接站在上面。忽略压力板。
     *
     * Gets a single solid block closest to the center of the
     * entity that this entity is directly standing on. Ignores
     * pressure plates.
     *
     * @param options
     * 返回哪个方块的附加配置选项。
     *
     * Additional configuration options for what block is returned.
     * @returns
     * 最接近此实体中心的一个实心方块，此实体直接站在上面。如果实体正在飞行或跳跃，则为 `undefined`。
     *
     * A single solid block closest to the center of the entity
     * that this entity is directly standing on. Undefined if
     * entity is flying or jumping.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getBlockStandingOn(options?: GetBlocksStandingOnOptions): Block | undefined;
    /**
     * @remarks
     * 获取实体的一个组件（表示附加功能）。
     *
     * Gets a component (that represents additional capabilities)
     * for an entity.
     *
     * @param componentId
     * 组件的标识符（例如，`'minecraft:health'`）。如果未指定命名空间前缀，则默认为 `'minecraft:'`。可用的组件 ID 可以在 {@link EntityComponentTypes} 枚举中找到。
     *
     * The identifier of the component (e.g., 'minecraft:health').
     * If no namespace prefix is specified, 'minecraft:' is
     * assumed. Available component IDs can be found as part of the
     * {@link EntityComponentTypes} enum.
     * @returns
     * 如果组件存在于实体上则返回该组件，否则返回 `undefined`。
     *
     * Returns the component if it exists on the entity, otherwise
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getComponent<T extends string>(componentId: T): EntityComponentReturnType<T> | undefined;
    /**
     * @remarks
     * 返回此实体上存在的所有脚本组件。
     *
     * Returns all scripting components that are present on this
     * entity.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getComponents(): EntityComponent[];
    /**
     * @remarks
     * 返回一个属性值。
     *
     * Returns a property value.
     *
     * @param identifier
     * 属性标识符。
     *
     * The property identifier.
     * @returns
     * 返回属性的值，如果属性尚未设置则返回 `undefined`。
     *
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 返回此实体上已使用的可用动态属性标识符集合。
     *
     * Returns the available set of dynamic property identifiers
     * that have been used on this entity.
     *
     * @returns
     * 此实体上设置的动态属性的字符串数组。
     *
     * A string array of the dynamic properties set on this entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 返回此实体当前存储的所有动态属性的总大小（以字节为单位）。包括键和值的大小。这对于诊断性能警告信号很有用——例如，如果一个实体有数兆字节的关联动态属性，它在各种设备上加载可能会很慢。
     *
     * Returns the total size, in bytes, of all the dynamic
     * properties that are currently stored for this entity. This
     * includes the size of both the key and the value.  This can
     * be useful for diagnosing performance warning signs - if, for
     * example, an entity has many megabytes of associated dynamic
     * properties, it may be slow to load on various devices.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 返回实体上指定 EffectType 的效果，如果效果不存在则返回 `undefined`，如果效果类型不存在则抛出错误。
     *
     * Returns the effect for the specified EffectType on the
     * entity, undefined if the effect is not present, or throws an
     * error if the effect does not exist.
     *
     * @param effectType
     * 效果标识符。
     *
     * The effect identifier.
     * @returns
     * 指定效果的 Effect 对象，如果效果不存在则返回 `undefined`，如果效果类型不存在则抛出错误。
     *
     * Effect object for the specified effect, undefined if the
     * effect is not present, or throws an error if the effect does
     * not exist.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @remarks
     * 返回应用于此实体的一组效果。
     *
     * Returns a set of effects applied to this entity.
     *
     * @returns
     * 效果列表。
     *
     * List of effects.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getEffects(): Effect[];
    /**
     * @remarks
     * 通过从此实体的视角执行射线投射，获取此实体正在注视的实体。
     *
     * Gets the entities that this entity is looking at by
     * performing a ray cast from the view of this entity.
     *
     * @param options
     * 射线投射的附加配置选项。
     *
     * Additional configuration options for the ray cast.
     * @returns
     * 返回从此实体视线方向上的实体集合。
     *
     * Returns a set of entities from the direction that this
     * entity is looking at.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @remarks
     * 返回此实体头部组件的当前位置。
     *
     * Returns the current location of the head component of this
     * entity.
     *
     * @returns
     * 返回此实体头部组件的当前位置。
     *
     * Returns the current location of the head component of this
     * entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getHeadLocation(): Vector3;
    /**
     * @remarks
     * 获取一个实体属性值。如果该属性在同一个 tick 内使用 setProperty 函数设置，更新后的值将不会反映出来，直到下一个 tick。
     *
     * Gets an entity Property value. If the property was set using
     * the setProperty function within the same tick, the updated
     * value will not be reflected until the subsequent tick.
     *
     * @param identifier
     * 实体属性标识符。
     *
     * The entity Property identifier.
     * @returns
     * 返回当前属性值。对于枚举属性，返回字符串。对于浮点和整数属性，返回数字。对于未定义的属性，返回 `undefined`。
     *
     * Returns the current property value. For enum properties, a
     * string is returned. For float and int properties, a number
     * is returned. For undefined properties, undefined is
     * returned.
     * @throws
     * 如果实体无效则抛出异常。
     *
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    getProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @remarks
     * 返回此实体的当前旋转组件。
     *
     * Returns the current rotation component of this entity.
     *
     * @returns
     * 返回包含此实体旋转的 Vec2（以度为单位）。
     *
     * Returns a Vec2 containing the rotation of this entity (in
     * degrees).
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getRotation(): Vector2;
    /**
     * @remarks
     * 返回与实体关联的所有标签。
     *
     * Returns all tags associated with the entity.
     *
     * @returns
     * 包含所有标签字符串的数组。
     *
     * An array containing all tags as strings.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 返回实体的当前速度向量。
     *
     * Returns the current velocity vector of the entity.
     *
     * @returns
     * 返回实体的当前速度向量。
     *
     * Returns the current velocity vector of the entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     * @seeExample getFireworkVelocity.ts
     */
    getVelocity(): Vector3;
    /**
     * @remarks
     * 返回实体的当前视线方向。
     *
     * Returns the current view direction of the entity.
     *
     * @returns
     * 返回实体的当前视线方向。
     *
     * Returns the current view direction of the entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getViewDirection(): Vector3;
    /**
     * @remarks
     * 如果指定组件存在于该实体上，则返回 `true`。
     *
     * Returns true if the specified component is present on this
     * entity.
     *
     * @param componentId
     * 要检索的组件的标识符（例如，`'minecraft:rideable'`）。如果未指定命名空间前缀，则默认为 `'minecraft:'`。
     *
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     * @returns
     * 如果指定组件存在于该实体上，则返回 `true`。
     *
     * Returns true if the specified component is present on this
     * entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * 返回实体是否具有特定标签。
     *
     * Returns whether an entity has a particular tag.
     *
     * @param tag
     * 要测试的标签标识符。
     *
     * Identifier of the tag to test for.
     * @returns
     * 返回实体是否具有特定标签。
     *
     * Returns whether an entity has a particular tag.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 击杀此实体。实体将正常掉落战利品。
     *
     * Kills this entity. The entity will drop loot as normal.
     *
     * @worldMutation
     *
     * @returns
     * 如果实体可以被击杀则返回 `true`（即使它已经死亡），否则返回 `false`。
     *
     * Returns true if entity can be killed (even if it is already
     * dead), otherwise it returns false.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     * @seeExample tagsQuery.ts
     */
    kill(): boolean;
    /**
     * @remarks
     * 设置实体的旋转以面对目标位置。如果适用，俯仰和偏航都将被设置，例如对于生物，俯仰控制头部倾斜，偏航控制身体旋转。
     *
     * Sets the rotation of the entity to face a target location.
     * Both pitch and yaw will be set, if applicable, such as for
     * mobs where the pitch controls the head tilt and the yaw
     * controls the body rotation.
     *
     * @worldMutation
     *
     * @param targetLocation
     * 此实体应面向/注视的目标位置。
     *
     * The target location that this entity should face/look
     * towards.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    lookAt(targetLocation: Vector3): void;
    /**
     * @remarks
     * 将实体与传入的选项进行匹配。如果 EntityQueryOptions 中未指定位置，则使用实体的位置进行匹配。
     *
     * Matches the entity against the passed in options. Uses the
     * location of the entity for matching if the location is not
     * specified in the passed in EntityQueryOptions.
     *
     * @param options
     * 执行匹配的查询条件。
     *
     * The query to perform the match against.
     * @returns
     * 如果实体匹配传入的 EntityQueryOptions 中的条件则返回 `true`，否则返回 `false`。
     *
     * Returns true if the entity matches the criteria in the
     * passed in EntityQueryOptions, otherwise it returns false.
     * @throws
     * 如果查询选项配置错误则抛出异常。
     *
     * Throws if the query options are misconfigured.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    matches(options: EntityQueryOptions): boolean;
    /**
     * @remarks
     * 使实体播放给定的动画。
     *
     * Cause the entity to play the given animation.
     *
     * @worldMutation
     *
     * @param animationName
     * 动画标识符，例如 `animation.creeper.swelling`。
     *
     * The animation identifier. e.g. animation.creeper.swelling
     * @param options
     * 控制动画播放和过渡的附加选项。
     *
     * Additional options to control the playback and transitions
     * of the animation.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @remarks
     * 立即从世界中移除实体。被移除的实体不会执行死亡动画或在移除时掉落战利品。
     *
     * Immediately removes the entity from the world. The removed
     * entity will not perform a death animation or drop loot upon
     * removal.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    remove(): void;
    /**
     * @remarks
     * 移除实体上的指定 EffectType，如果效果不存在则返回 `false`。
     *
     * Removes the specified EffectType on the entity, or returns
     * false if the effect is not present.
     *
     * @worldMutation
     *
     * @param effectType
     * 效果标识符。
     *
     * The effect identifier.
     * @returns
     * 如果效果已被移除则返回 `true`。如果未找到效果或效果不存在则返回 `false`。
     *
     * Returns true if the effect has been removed. Returns false
     * if the effect is not found or does not exist.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * @remarks
     * 从实体移除指定的标签。
     *
     * Removes a specified tag from an entity.
     *
     * @worldMutation
     *
     * @param tag
     * 要移除的标签内容。
     *
     * Content of the tag to remove.
     * @returns
     * 返回该标签是否存在于实体上。
     *
     * Returns whether the tag existed on the entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * 将实体属性重置为其默认值，如实体定义中所指定。此属性更改直到下一个 tick 才会应用。
     *
     * Resets an Entity Property back to its default value, as
     * specified in the Entity's definition. This property change
     * is not applied until the next tick.
     *
     * @worldMutation
     *
     * @param identifier
     * 实体属性标识符。
     *
     * The Entity Property identifier.
     * @returns
     * 返回默认属性值。对于枚举属性，返回字符串。对于浮点和整数属性，返回数字。对于未定义的属性，返回 `undefined`。
     *
     * Returns the default property value. For enum properties, a
     * string is returned. For float and int properties, a number
     * is returned. For undefined properties, undefined is
     * returned.
     * @throws
     * 如果实体无效则抛出异常。
     *
     * Throws if the entity is invalid.
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidEntityError}
     */
    resetProperty(identifier: string): boolean | number | string;
    /**
     * @remarks
     * 在实体上运行同步命令。
     *
     * Runs a synchronous command on the entity.
     *
     * @worldMutation
     *
     * @param commandString
     * 命令字符串。注意：这不应包含前导斜杠。
     *
     * The command string. Note: This should not include a leading
     * forward slash.
     * @returns
     * 包含命令是否成功的命令结果。
     *
     * A command result containing whether the command was
     * successful.
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * 使用特定值设置多个动态属性。
     *
     * Sets multiple dynamic properties with specific values.
     *
     * @param values
     * 要设置的动态属性的键值对记录。如果数据值为 `null`，将会移除该属性。
     *
     * A Record of key value pairs of the dynamic properties to
     * set. If the data value is null, it will remove that property
     * instead.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    /**
     * @remarks
     * 设置指定属性为一个值。
     *
     * Sets a specified property to a value.
     *
     * @param identifier
     * 属性标识符。
     *
     * The property identifier.
     * @param value
     * 要设置的属性的数据值。如果值为 `null`，将会移除该属性。
     *
     * Data value of the property to set. If the value is null, it
     * will remove the property instead.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 点燃实体（如果它不在水中或雨里）。请注意，你可以调用 `getComponent('minecraft:onfire')`，如果存在，则实体着火。
     *
     * Sets an entity on fire (if it is not in water or rain). Note
     * that you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * @worldMutation
     *
     * @param seconds
     * 设置实体着火的时间长度。
     *
     * Length of time to set the entity on fire.
     * @param useEffects
     * 是否应考虑副作用（如解冻）和其他条件，如雨水或防火保护。默认值：`true`
     *
     * Whether side-effects should be applied (e.g. thawing freeze)
     * and other conditions such as rain or fire protection should
     * be taken into consideration.
     * Defaults to: true
     * @returns
     * 实体是否被点燃。如果秒数小于或等于零、实体潮湿或实体免疫火焰，则可能失败。
     *
     * Whether the entity was set on fire. This can fail if seconds
     * is less than or equal to zero, the entity is wet or the
     * entity is immune to fire.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     * @seeExample setOnFire.ts
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @remarks
     * 将实体属性设置为提供的值。此属性更改直到下一个 tick 才会应用。
     *
     * Sets an Entity Property to the provided value. This property
     * change is not applied until the next tick.
     *
     * @worldMutation
     *
     * @param identifier
     * 实体属性标识符。
     *
     * The Entity Property identifier.
     * @param value
     * 属性值。提供的类型必须与实体定义中指定的类型兼容。
     *
     * The property value. The provided type must be compatible
     * with the type specified in the entity's definition.
     * @throws
     * 如果实体无效则抛出异常。如果提供了无效的标识符则抛出异常。如果提供的值类型与属性类型不匹配则抛出异常。如果提供的值超出预期范围（int、float 属性）则抛出异常。如果提供的字符串值与接受的枚举值集合不匹配（枚举属性）则抛出异常。
     *
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the
     * property type.
     * Throws if the provided value is outside the expected range
     * (int, float properties).
     * Throws if the provided string value does not match the set
     * of accepted enum values (enum properties
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * 设置实体的主要旋转。
     *
     * Sets the main rotation of the entity.
     *
     * @worldMutation
     *
     * @param rotation
     * 实体的 x 和 y 旋转（以度为单位）。对于大多数生物，x 旋转控制头部倾斜，y 旋转控制身体旋转。
     *
     * The x and y rotation of the entity (in degrees). For most
     * mobs, the x rotation controls the head tilt and the y
     * rotation controls the body rotation.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setRotation(rotation: Vector2): void;
    /**
     * @remarks
     * 将选定的实体传送到新位置。
     *
     * Teleports the selected entity to a new location
     *
     * @worldMutation
     *
     * @param location
     * 实体的新位置。
     *
     * New location for the entity.
     * @param teleportOptions
     * 关于传送操作的选项。
     *
     * Options regarding the teleport operation.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link UnsupportedFunctionalityError}
     * @seeExample teleport.ts
     * @seeExample teleportMovement.ts
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @remarks
     * 触发一个实体类型事件。对于每个实体，在实体的定义为关键实体行为定义了许多事件；例如，苦力怕有一个 `minecraft:start_exploding` 类型事件。
     *
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     *
     * @worldMutation
     *
     * @param eventName
     * 要触发的实体类型事件的名称。如果未指定命名空间，则默认为 `minecraft:`。
     *
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws
     * 如果事件未在实体的定义中定义，则会抛出错误。
     *
     * If the event is not defined in the definition of the entity,
     * an error will be thrown.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     * @seeExample triggerEvent.ts e68d4331
     * @seeExample triggerEvent.ts d45f49d2
     */
    triggerEvent(eventName: string): void;
    /**
     * @remarks
     * 尝试传送，但可能不会完成传送操作（例如，如果目标位置有方块阻挡）。
     *
     * Attempts to try a teleport, but may not complete the
     * teleport operation (for example, if there are blocks at the
     * destination.)
     *
     * @worldMutation
     *
     * @param location
     * 要传送实体的位置。
     *
     * Location to teleport the entity to.
     * @param teleportOptions
     * 关于传送操作的选项。
     *
     * Options regarding the teleport operation.
     * @returns
     * 返回传送是否成功。如果目标区块未加载或传送会导致与方块相交，则可能失败。
     *
     * Returns whether the teleport succeeded. This can fail if the
     * destination chunk is unloaded or if the teleport would
     * result in intersecting with blocks.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}
