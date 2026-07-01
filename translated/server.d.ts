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
 * 包含了大量用于修改 Minecraft 世界（实体、方块、维度等）的类型。
 * 
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server",
 *   "version": "2.10.0-beta"
 * }
 * ```
 *
 */
import { ArgumentOutOfBoundsError, EngineError, InvalidArgumentError, NumberRange, PropertyOutOfBoundsError, UnsupportedFunctionalityError } from '@minecraft/common';
// @ts-ignore Optional types-only package, will decay to any if @minecraft/vanilla-data isn't installed
import type { BlockStateMapping, BlockStateSuperset, MinecraftBlockTypes, MinecraftEntityTypes, MinecraftFeatureTypes, MinecraftItemTypes, MinecraftPotionDeliveryTypes, MinecraftPotionEffectTypes } from '@minecraft/vanilla-data';
/**
 * 指定用于瞄准辅助的不同目标模式。
 *
 * Specifies different targeting modes for use in aim-assist.
 */
export enum AimAssistTargetMode {
    /**
     * @remarks
     * 基于角度的目标锁定。
     *
     * Angle based targeting.
     *
     */
    Angle = 'Angle',
    /**
     * @remarks
     * 基于距离的目标锁定。
     *
     * Distance based targeting.
     *
     */
    Distance = 'Distance',
}

/**
 * 可通过 Block.getComponent 函数访问的方块组件类型。
 *
 * The types of block components that are accessible via
 * function Block.getComponent.
 */
export enum BlockComponentTypes {
    /**
     * @beta
     */
    DynamicProperties = 'minecraft:dynamic_properties',
    FluidContainer = 'minecraft:fluid_container',
    /**
     * @beta
     */
    Instrument = 'minecraft:instrument_sound',
    /**
     * @remarks
     * 表示世界中方块的库存。用于像箱子这样的方块。
     *
     * Represents the inventory of a block in the world. Used with
     * blocks like chests.
     *
     */
    Inventory = 'minecraft:inventory',
    /**
     * @remarks
     * 表示方块在地图上显示时的颜色。
     *
     * Represents the color of a block when displayed on a map.
     *
     */
    MapColor = 'minecraft:map_color',
    /**
     * @remarks
     * 表示可以移动的方块（例如活塞）。
     *
     * Represents a block that can move (such as a piston).
     *
     */
    Movable = 'minecraft:movable',
    /**
     * @remarks
     * 当存在时，此方块具有类似活塞的行为。包含用于发现方块活塞状态的附加属性。
     *
     * When present, this block has piston-like behavior. Contains
     * additional properties for discovering block piston state.
     *
     */
    Piston = 'minecraft:piston',
    /**
     * @remarks
     * 表示方块与降水（如雨或雪）的交互方式。
     *
     * Represents a how a block interacts with precipitation (such
     * as rain or snow).
     *
     */
    PrecipitationInteractions = 'minecraft:precipitation_interactions',
    /**
     * @remarks
     * 表示可以播放唱片的方块。
     *
     * Represents a block that can play a record.
     *
     */
    RecordPlayer = 'minecraft:record_player',
    /**
     * @remarks
     * 表示可以输出红石信号的方块。
     *
     * Represents a block that can output a redstone signal.
     *
     */
    RedstoneProducer = 'minecraft:redstone_producer',
    /**
     * @remarks
     * 表示可以显示文本的方块。
     *
     * Represents a block that can display text on it.
     *
     */
    Sign = 'minecraft:sign',
}

/**
 * 描述方块活塞状态的枚举。
 *
 * An enumeration describing the state of a block piston.
 */
export enum BlockPistonState {
    /**
     * @remarks
     * 活塞是否完全伸出。
     *
     * Whether the piston is fully expanded.
     *
     */
    Expanded = 'Expanded',
    /**
     * @remarks
     * 活塞是否正在伸出过程中。
     *
     * Whether the piston is in the process of expanding.
     *
     */
    Expanding = 'Expanding',
    /**
     * @remarks
     * 活塞是否完全收回。
     *
     * Whether the piston is fully retracted.
     *
     */
    Retracted = 'Retracted',
    /**
     * @remarks
     * 活塞是否正在收回过程中。
     *
     * Whether the piston is in the process of retracting.
     *
     */
    Retracting = 'Retracting',
}

/**
 * 对两个 BlockVolume 对象进行相交测试的结果描述。
 *
 * Description of the resulting intersection test on two
 * BlockVolume objects
 */
export enum BlockVolumeIntersection {
    /**
     * @remarks
     * 体积 B 与体积 A 没有交点。
     *
     * Volume B has no intersection points with Volume A
     *
     */
    Disjoint = 0,
    /**
     * @remarks
     * 体积 B 完全位于体积 A 内部。
     *
     * Volume B resides completely inside Volume A
     *
     */
    Contains = 1,
    /**
     * @remarks
     * 体积 B 与体积 A 部分相交。
     *
     * Volume B partially intersects Volume A
     *
     */
    Intersects = 2,
}

/**
 * 与使用 {@link ItemBookComponent} 相关的错误原因枚举。
 *
 * An enum of error reasons relating to using {@link
 * ItemBookComponent}.
 */
export enum BookErrorReason {
    /**
     * @remarks
     * 请求的页面内容超过了最大页面长度 256。
     *
     * The requested page content exceeds the max page length of
     * 256.
     *
     */
    ExceedsMaxPageLength = 'ExceedsMaxPageLength',
    /**
     * @remarks
     * 无法创建页面，因为会超过最大页数 50。
     *
     * The page could not be created as it would exceed the max
     * page count of 50.
     *
     */
    ExceedsMaxPages = 'ExceedsMaxPages',
    /**
     * @remarks
     * 正在签名的标题超过了最大标题长度 16。
     *
     * The title being signed exceeds the maximum title length of
     * 16.
     *
     */
    ExceedsTitleLength = 'ExceedsTitleLength',
}

/**
 * 键盘、控制器或触摸界面上的按钮状态。
 *
 * The state of a button on a keyboard, controller, or touch
 * interface.
 */
export enum ButtonState {
    Pressed = 'Pressed',
    Released = 'Released',
}

/**
 * @beta
 * 表示应用于摄像机的抖动类型。
 *
 * Represents the type of shake to apply to the camera.
 */
export enum CameraShakeType {
    /**
     * @remarks
     * 一种位置抖动，使摄像机沿其轴移动。
     *
     * A positional shake that moves the camera along its axes.
     *
     */
    Positional = 'Positional',
    /**
     * @remarks
     * 一种旋转抖动，使摄像机绕其轴旋转。
     *
     * A rotational shake that rotates the camera around its axes.
     *
     */
    Rotational = 'Rotational',
}

/**
 * 执行自定义命令所需的权限等级。
 *
 * The required permission level to execute the custom command.
 */
export enum CommandPermissionLevel {
    /**
     * @remarks
     * 任何对象都可以运行此等级。
     *
     * Anything can run this level.
     *
     */
    Any = 0,
    /**
     * @remarks
     * 任何操作员都可以运行此命令，包括命令方块。
     *
     * Any operator can run this command, including command blocks.
     *
     */
    GameDirectors = 1,
    /**
     * @remarks
     * 任何操作员都可以运行此命令，但不包括命令方块。
     *
     * Any operator can run this command, but NOT command blocks.
     *
     */
    Admin = 2,
    /**
     * @remarks
     * 任何服务器主机都可以运行此命令。
     *
     * Any server host can run this command.
     *
     */
    Host = 3,
    /**
     * @remarks
     * 仅专用服务器可以运行此命令。
     *
     * Only dedicated server can run this command.
     *
     */
    Owner = 4,
}

/**
 * @beta
 * Action 枚举决定了 CompoundBlockVolume 在执行内部/外部计算时如何关联 CompoundBlockVolumeItem。
 *
 * The Action enum determines how the CompoundBlockVolume
 * considers the associated CompoundBlockVolumeItem when
 * performing inside/outside calculations.
 */
export enum CompoundBlockVolumeAction {
    /**
     * @remarks
     * 关联的 BlockVolume 被视为正空间，任何相交测试均视为命中。
     *
     * The associated BlockVolume is considered a positive space,
     * and any intersection tests are considered hits
     *
     */
    Add = 0,
    /**
     * @remarks
     * 关联的 BlockVolume 被视为负空间或空洞，任何相交测试均视为未命中。使用 Subtract 动作，可以在方块体积上"打孔"，使得相交测试可以通过这些空间。
     *
     * The associated BlockVolume is considered a negative or void
     * space, and any intersection tests are considered misses.
     * Using the Subtract action, it is possible to `punch holes`
     * in block volumes so that any intersection tests may pass
     * through such spaces
     *
     */
    Subtract = 1,
}

/**
 * @beta
 * 描述 CompoundBlockVolumeItem 相对于父 CompoundVolume 的相对性枚举。
 *
 * An enum describing the relativity of the
 * CompoundBlockVolumeItem, relative to the parent
 * CompoundVolume.
 */
export enum CompoundBlockVolumePositionRelativity {
    /**
     * @remarks
     * 关联 BlockVolume 中的位置相对于它们被添加到的 CompoundBlockVolume。
     *
     * The locations within the associated BlockVolume are relative
     * to the CompoundBlockVolume to which they were added
     *
     */
    Relative = 0,
    /**
     * @remarks
     * 关联 BlockVolume 中的位置处于绝对世界空间。
     *
     * The locations within the associated BlockVolume are in
     * absolute world space
     *
     */
    Absolute = 1,
}

/**
 * 抛出 {@link @minecraft/server.ContainerRulesError} 的原因。
 *
 * Reasons that the {@link
 * @minecraft/server.ContainerRulesError} was thrown.
 */
export enum ContainerRulesErrorReason {
    /**
     * @remarks
     * 当尝试添加已在 {@link ContainerRules.bannedItems} 中定义的物品时抛出。
     *
     * Thrown when trying to add item that was defined in {@link
     * ContainerRules.bannedItems}.
     *
     */
    BannedItem = 'BannedItem',
    /**
     * @remarks
     * 当尝试将带有 `Storage Item` 组件的物品添加到 {@link ContainerRules.allowNestedStorageItems} 设置为 `false` 的容器时抛出。
     *
     * Thrown when trying to add item with `Storage Item` component
     * to container with {@link
     * ContainerRules.allowNestedStorageItems} set to false.
     *
     */
    NestedStorageItem = 'NestedStorageItem',
    /**
     * @remarks
     * 当尝试添加未在非空 {@link ContainerRules.allowedItems} 中定义的物品时抛出。
     *
     * Thrown when trying to add item not defined in non-empty
     * {@link ContainerRules.allowedItems}.
     *
     */
    NotAllowedItem = 'NotAllowedItem',
    /**
     * @remarks
     * 当尝试添加物品导致容器重量超过 {@link ContainerRules.weightLimit} 时抛出。
     *
     * Thrown when trying to add item that pushed the containers
     * weight over the {@link ContainerRules.weightLimit}.
     *
     */
    OverWeightLimit = 'OverWeightLimit',
    /**
     * @remarks
     * 当尝试添加由 `Storage Weight Modifier` 组件定义为零重量的物品到具有定义的 {@link ContainerRules.weightLimit} 的容器时抛出。
     *
     * Thrown when trying to add item with zero weight defined by
     * the `Storage Weight Modifier` component to container with a
     * defined {@link ContainerRules.weightLimit}
     *
     */
    ZeroWeightItem = 'ZeroWeightItem',
}

/**
 * 控制方案类型，定义玩家如何响应玩家输入进行移动。有关控制方案的更多详细信息，请参阅以下页面：https://learn.microsoft.com/en-us/minecraft/creator/documents/controlschemes
 *
 * Control Scheme types which define how the player moves in
 * response to player inputs.
 * See the following page for more details on control schemes:
 * https://learn.microsoft.com/en-us/minecraft/creator/documents/controlschemes
 */
export enum ControlScheme {
    CameraRelative = 'CameraRelative',
    CameraRelativeStrafe = 'CameraRelativeStrafe',
    LockedPlayerRelativeStrafe = 'LockedPlayerRelativeStrafe',
    PlayerRelative = 'PlayerRelative',
    PlayerRelativeStrafe = 'PlayerRelativeStrafe',
}

/**
 * 自定义命令注册失败的原因。
 *
 * Reason why custom command registration failed.
 */
export enum CustomCommandErrorReason {
    /**
     * @remarks
     * 命令名称已注册。
     *
     * Command name already registered.
     *
     */
    AlreadyRegistered = 'AlreadyRegistered',
    /**
     * @remarks
     * 自定义命令引用了一个尚未注册的枚举。
     *
     * Custom Command references an enum that has not been
     * registered.
     *
     */
    EnumDependencyMissing = 'EnumDependencyMissing',
    /**
     * @remarks
     * 提供的自定义命令命名空间与此附加包之前的注册不匹配。
     *
     * Supplied Custom Command namespace does not match previous
     * registrations for this add-on.
     *
     */
    NamespaceMismatch = 'NamespaceMismatch',
    /**
     * @remarks
     * 在 CustomCommand 中定义了太多命令参数。
     *
     * Too many command parameters defined in CustomCommand.
     *
     */
    ParameterLimit = 'ParameterLimit',
    /**
     * @remarks
     * 在世界初始化事件之后无法访问自定义命令注册表。
     *
     * Custom command registry can not be accessed after world
     * initialized event.
     *
     */
    RegistryInvalid = 'RegistryInvalid',
    /**
     * @remarks
     * 重载期间不能重新定义命令参数。只有脚本闭包本身可以更改。
     *
     * Command parameters cannot be redefined during reload. Only
     * the script closure itself can be changed.
     *
     */
    RegistryReadOnly = 'RegistryReadOnly',
    /**
     * @beta
     * @remarks
     * 非枚举类型的命令参数不能使用 enumName。
     *
     * Non enum type command parameters cannot use enumName.
     *
     */
    UnexpectedEnumName = 'UnexpectedEnumName',
}

/**
 * 自定义命令接受的参数类型。
 *
 * The types of paramaters accepted by a custom command.
 */
export enum CustomCommandParamType {
    /**
     * @remarks
     * 方块类型参数提供 {@link BlockType}。
     *
     * Block type parameter provides a {@link BlockType}.
     *
     */
    BlockType = 'BlockType',
    /**
     * @remarks
     * 布尔参数。
     *
     * Boolean parameter.
     *
     */
    Boolean = 'Boolean',
    /**
     * @remarks
     * 实体选择器参数提供 {@link Entity}。
     *
     * Entity selector parameter provides an {@link Entity}.
     *
     */
    EntitySelector = 'EntitySelector',
    /**
     * @remarks
     * 实体类型参数提供 {@link EntityType}。
     *
     * Entity type parameter provides an {@link EntityType}.
     *
     */
    EntityType = 'EntityType',
    /**
     * @remarks
     * 命令枚举参数。
     *
     * Command enum parameter.
     *
     */
    Enum = 'Enum',
    /**
     * @remarks
     * 浮点数参数。
     *
     * Float parameter.
     *
     */
    Float = 'Float',
    /**
     * @remarks
     * 整数参数。
     *
     * Integer parameter.
     *
     */
    Integer = 'Integer',
    /**
     * @remarks
     * 物品类型参数提供 {@link ItemType}。
     *
     * Item type parameter provides an {@link ItemType}.
     *
     */
    ItemType = 'ItemType',
    /**
     * @remarks
     * 位置参数提供 {@link @minecraft/server.Vector3}。
     *
     * Location parameter provides a {@link
     * @minecraft/server.Vector3}.
     *
     */
    Location = 'Location',
    /**
     * @remarks
     * 玩家选择器参数提供 {@link Player}。
     *
     * Player selector parameter provides a {@link Player}.
     *
     */
    PlayerSelector = 'PlayerSelector',
    /**
     * @remarks
     * 字符串参数。
     *
     * String parameter.
     *
     */
    String = 'String',
}

/**
 * 谁执行了该命令。
 *
 * Who executed the command.
 */
export enum CustomCommandSource {
    /**
     * @remarks
     * 命令源自命令方块。
     *
     * Command originated from a command block.
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 命令源自实体或玩家。
     *
     * Command originated from an entity or player.
     *
     */
    Entity = 'Entity',
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 命令源自服务器。
     *
     * Command originated from the server.
     *
     */
    Server = 'Server',
}

export enum CustomCommandStatus {
    Success = 0,
    Failure = 1,
}

export enum CustomComponentNameErrorReason {
    NoNamespace = 1,
    DisallowedNamespace = 2,
}

/**
 * Minecraft 各种难度级别的枚举。
 *
 * An enumeration for the various difficulty levels of
 * Minecraft.
 */
export enum Difficulty {
    /**
     * @remarks
     * 简单难度级别。
     *
     * Easy difficulty level.
     *
     */
    Easy = 'Easy',
    /**
     * @remarks
     * 困难难度级别。
     *
     * Hard difficulty level.
     *
     */
    Hard = 'Hard',
    /**
     * @remarks
     * 普通难度级别。
     *
     * Normal difficulty level.
     *
     */
    Normal = 'Normal',
    /**
     * @remarks
     * 和平难度级别。
     *
     * Peaceful difficulty level.
     *
     */
    Peaceful = 'Peaceful',
}

/**
 * 通用枚举之一。表示朝向。
 * 
 * A general purpose relative direction enumeration.
 */
export enum Direction {
    /**
     * @remarks
     * 表示下方（y - 1）。
     * 
     * Returns the {@link Block} beneath (y - 1) of this item.
     *
     */
    Down = 'Down',
    /**
     * @remarks
     * 表示东方（x + 1）。
     * 
     * Returns the {@link Block} to the east (x + 1) of this item.
     *
     */
    East = 'East',
    /**
     * @remarks
     * 表示北方（z - 1）。
     * 
     * Returns the {@link Block} to the east (z + 1) of this item.
     *
     */
    North = 'North',
    /**
     * @remarks
     * 表示南方（z + 1）。
     * 
     * Returns the {@link Block} to the south (z - 1) of this item.
     *
     */
    South = 'South',
    /**
     * @remarks
     * 表示上方（y + 1）。
     * 
     * Returns the {@link Block} above (y + 1) of this item.
     *
     */
    Up = 'Up',
    /**
     * @remarks
     * 表示西方（x - 1）。
     * 
     * Returns the {@link Block} to the west (x - 1) of this item.
     *
     */
    West = 'West',
}

/**
 * 表示记分板分数的显示方式。
 * 
 * Specifies a mechanism for displaying scores on a scoreboard.
 */
export enum DisplaySlotId {
    /**
     * @remarks
     * 记分项上的分数将显示在玩家名称牌下方。
     * 
     * Displays the score below the player's name.
     *
     */
    BelowName = 'BelowName',
    /**
     * @remarks
     * 该记分项与对应的分数持有者将显示在暂停菜单上。
     * 
     * Displays the score as a list on the pause screen.
     *
     */
    List = 'List',
    /**
     * @remarks
     * 记分项将在屏幕右侧显示。
     * 
     * Displays the score on the side of the player's screen.
     *
     */
    Sidebar = 'Sidebar',
}

/**
 * 指定用作染料的不同颜色。
 *
 * Specifies different colors for use as dye.
 */
export enum DyeColor {
    /**
     * @remarks
     * 黑色染料颜色。
     *
     * Black dye color.
     *
     */
    Black = 'Black',
    /**
     * @remarks
     * 蓝色染料颜色。
     *
     * Blue dye color.
     *
     */
    Blue = 'Blue',
    /**
     * @remarks
     * 棕色染料颜色。
     *
     * Brown dye color.
     *
     */
    Brown = 'Brown',
    /**
     * @remarks
     * 青色染料颜色。
     *
     * Cyan dye color.
     *
     */
    Cyan = 'Cyan',
    /**
     * @remarks
     * 灰色染料颜色。
     *
     * Gray dye color.
     *
     */
    Gray = 'Gray',
    /**
     * @remarks
     * 绿色染料颜色。
     *
     * Green dye color.
     *
     */
    Green = 'Green',
    /**
     * @remarks
     * 淡蓝色染料颜色。
     *
     * Light blue dye color.
     *
     */
    LightBlue = 'LightBlue',
    /**
     * @remarks
     * 黄绿色染料颜色。
     *
     * Lime dye color.
     *
     */
    Lime = 'Lime',
    /**
     * @remarks
     * 品红色染料颜色。
     *
     * Magenta dye color.
     *
     */
    Magenta = 'Magenta',
    /**
     * @remarks
     * 橙色染料颜色。
     *
     * Orange dye color.
     *
     */
    Orange = 'Orange',
    /**
     * @remarks
     * 粉红色染料颜色。
     *
     * Pink dye color.
     *
     */
    Pink = 'Pink',
    /**
     * @remarks
     * 紫色染料颜色。
     *
     * Purple dye color.
     *
     */
    Purple = 'Purple',
    /**
     * @remarks
     * 红色染料颜色。
     *
     * Red dye color.
     *
     */
    Red = 'Red',
    /**
     * @remarks
     * 银色染料颜色。
     *
     * Silver dye color.
     *
     */
    Silver = 'Silver',
    /**
     * @remarks
     * 白色染料颜色。
     *
     * White dye color.
     *
     */
    White = 'White',
    /**
     * @remarks
     * 黄色染料颜色。
     *
     * Yellow dye color.
     *
     */
    Yellow = 'Yellow',
}

export enum EasingType {
    InBack = 'InBack',
    InBounce = 'InBounce',
    InCirc = 'InCirc',
    InCubic = 'InCubic',
    InElastic = 'InElastic',
    InExpo = 'InExpo',
    InOutBack = 'InOutBack',
    InOutBounce = 'InOutBounce',
    InOutCirc = 'InOutCirc',
    InOutCubic = 'InOutCubic',
    InOutElastic = 'InOutElastic',
    InOutExpo = 'InOutExpo',
    InOutQuad = 'InOutQuad',
    InOutQuart = 'InOutQuart',
    InOutQuint = 'InOutQuint',
    InOutSine = 'InOutSine',
    InQuad = 'InQuad',
    InQuart = 'InQuart',
    InQuint = 'InQuint',
    InSine = 'InSine',
    Linear = 'Linear',
    OutBack = 'OutBack',
    OutBounce = 'OutBounce',
    OutCirc = 'OutCirc',
    OutCubic = 'OutCubic',
    OutElastic = 'OutElastic',
    OutExpo = 'OutExpo',
    OutQuad = 'OutQuad',
    OutQuart = 'OutQuart',
    OutQuint = 'OutQuint',
    OutSine = 'OutSine',
    Spring = 'Spring',
}

export enum EnchantmentSlot {
    ArmorFeet = 'ArmorFeet',
    ArmorHead = 'ArmorHead',
    ArmorLegs = 'ArmorLegs',
    ArmorTorso = 'ArmorTorso',
    Axe = 'Axe',
    Bow = 'Bow',
    CarrotStick = 'CarrotStick',
    CosmeticHead = 'CosmeticHead',
    Crossbow = 'Crossbow',
    Elytra = 'Elytra',
    FishingRod = 'FishingRod',
    Flintsteel = 'Flintsteel',
    Hoe = 'Hoe',
    MeleeSpear = 'MeleeSpear',
    Pickaxe = 'Pickaxe',
    Shears = 'Shears',
    Shield = 'Shield',
    Shovel = 'Shovel',
    Spear = 'Spear',
    Sword = 'Sword',
}

/**
 * 实体的附着位置点。包含头部、身体、腿部等点，用于将摄像机附着到实体上。
 *
 * The entity's attach location point. Contains points such as
 * head, body, leg, etc to attach the camera to.
 */
export enum EntityAttachPoint {
    Body = 'Body',
    BreathingPoint = 'BreathingPoint',
    DropAttachPoint = 'DropAttachPoint',
    ExplosionPoint = 'ExplosionPoint',
    Eyes = 'Eyes',
    Feet = 'Feet',
    Head = 'Head',
    Mouth = 'Mouth',
    WeaponAttachPoint = 'WeaponAttachPoint',
}

/**
 * 可通过 Entity.getComponent 函数访问的实体组件类型。
 *
 * The types of entity components that are accessible via
 * function Entity.getComponent.
 */
export enum EntityComponentTypes {
    /**
     * @remarks
     * 添加时，此组件使实体生成时带有指定 entityType 的骑乘者。
     *
     * When added, this component makes the entity spawn with a
     * rider of the specified entityType.
     *
     */
    AddRider = 'minecraft:addrider',
    /**
     * @remarks
     * 为实体添加成长计时器。可以通过给予实体由 feedItems 定义的它喜欢的物品来加速。
     *
     * Adds a timer for the entity to grow up. It can be
     * accelerated by giving the entity the items it likes as
     * defined by feedItems.
     *
     */
    Ageable = 'minecraft:ageable',
    /**
     * @remarks
     * 定义此实体可以在哪些方块中呼吸，并赋予它们窒息的能力。
     *
     * Defines what blocks this entity can breathe in and gives
     * them the ability to suffocate.
     *
     */
    Breathable = 'minecraft:breathable',
    /**
     * @remarks
     * 添加时，此组件表示实体可以爬上梯子。
     *
     * When added, this component signifies that the entity can
     * climb up ladders.
     *
     */
    CanClimb = 'minecraft:can_climb',
    /**
     * @remarks
     * 添加时，此组件表示实体可以飞行，且寻路器不会限制在需要下方有实心方块的路径上。
     *
     * When added, this component signifies that the entity can
     * fly, and the pathfinder won't be restricted to paths where a
     * solid block is required underneath it.
     *
     */
    CanFly = 'minecraft:can_fly',
    /**
     * @remarks
     * 添加时，此组件表示实体可以像 Minecraft 中的马一样进行蓄力跳跃。
     *
     * When added, this component signifies that the entity can
     * power jump like the horse does within Minecraft.
     *
     */
    CanPowerJump = 'minecraft:can_power_jump',
    /**
     * @remarks
     * 定义实体的颜色。仅对具有预定义颜色值的某些实体起作用（例如，羊、羊驼、潜影贝）。
     *
     * Defines the entity's color. Only works on certain entities
     * that have predefined color values (e.g., sheep, llama,
     * shulker).
     *
     */
    Color = 'minecraft:color',
    /**
     * @remarks
     * 定义实体的次要颜色。仅对具有预定义次要颜色值的某些实体起作用（例如，热带鱼）。
     *
     * Defines the entity's secondary color. Only works on certain
     * entities that have predefined secondary color values (e.g.,
     * tropical fish).
     *
     */
    Color2 = 'minecraft:color2',
    CursorInventory = 'minecraft:cursor_inventory',
    /**
     * @remarks
     * 表示此实体的末影箱库存属性。
     *
     * Represents this entity's ender inventory properties.
     *
     */
    EnderInventory = 'minecraft:ender_inventory',
    /**
     * @remarks
     * 提供对生物装备槽的访问。此组件存在于所有生物实体上。
     *
     * Provides access to a mob's equipment slots. This component
     * exists for all mob entities.
     *
     */
    Equippable = 'minecraft:equippable',
    /**
     * @remarks
     * 添加时，此组件表示此实体不会受到火焰伤害。
     *
     * When added, this component signifies that this entity
     * doesn't take damage from fire.
     *
     */
    FireImmune = 'minecraft:fire_immune',
    /**
     * @remarks
     * 添加时，此组件表示此实体可以在液体方块中浮动。
     *
     * When added, this component signifies that this entity can
     * float in liquid blocks.
     *
     */
    FloatsInLiquid = 'minecraft:floats_in_liquid',
    /**
     * @remarks
     * 表示实体的飞行速度。
     *
     * Represents the flying speed of an entity.
     *
     */
    FlyingSpeed = 'minecraft:flying_speed',
    /**
     * @remarks
     * 定义摩擦力对此实体的影响程度。
     *
     * Defines how much friction affects this entity.
     *
     */
    FrictionModifier = 'minecraft:friction_modifier',
    /**
     * @remarks
     * 定义与此实体交互以进行治疗的方式。
     *
     * Defines the interactions with this entity for healing it.
     *
     */
    Healable = 'minecraft:healable',
    /**
     * @remarks
     * 定义实体的生命值属性。
     *
     * Defines the health properties of an entity.
     *
     */
    Health = 'minecraft:health',
    /**
     * @remarks
     * 定义此实体的库存属性。
     *
     * Defines this entity's inventory properties.
     *
     */
    Inventory = 'minecraft:inventory',
    /**
     * @remarks
     * 添加时，此组件表示此实体是幼年体。
     *
     * When added, this component signifies that this entity is a
     * baby.
     *
     */
    IsBaby = 'minecraft:is_baby',
    /**
     * @remarks
     * 添加时，此组件表示此实体已充能。
     *
     * When added, this component signifies that this entity is
     * charged.
     *
     */
    IsCharged = 'minecraft:is_charged',
    /**
     * @remarks
     * 添加时，此组件表示此实体当前携带箱子。
     *
     * When added, this component signifies that this entity is
     * currently carrying a chest.
     *
     */
    IsChested = 'minecraft:is_chested',
    /**
     * @remarks
     * 添加时，此组件表示可以使用染料更改此实体的颜色。
     *
     * When added, this component signifies that dyes can be used
     * on this entity to change its color.
     *
     */
    IsDyeable = 'minecraft:is_dyeable',
    /**
     * @remarks
     * 添加时，此组件表示此实体在隐形时可以躲避敌对生物。
     *
     * When added, this component signifies that this entity can
     * hide from hostile mobs while invisible.
     *
     */
    IsHiddenWhenInvisible = 'minecraft:is_hidden_when_invisible',
    /**
     * @remarks
     * 添加时，此组件表示此实体当前着火。
     *
     * When added, this component signifies that this entity this
     * currently on fire.
     *
     */
    IsIgnited = 'minecraft:is_ignited',
    /**
     * @remarks
     * 添加时，此组件表示此实体是灾厄队长。
     *
     * When added, this component signifies that this entity is an
     * illager captain.
     *
     */
    IsIllagerCaptain = 'minecraft:is_illager_captain',
    /**
     * @remarks
     * 添加时，此组件表示此实体当前已上鞍。
     *
     * When added, this component signifies that this entity is
     * currently saddled.
     *
     */
    IsSaddled = 'minecraft:is_saddled',
    /**
     * @remarks
     * 添加时，此组件表示此实体当前正在摇晃。
     *
     * When added, this component signifies that this entity is
     * currently shaking.
     *
     */
    IsShaking = 'minecraft:is_shaking',
    /**
     * @remarks
     * 添加时，此组件表示此实体当前已被剪毛。
     *
     * When added, this component signifies that this entity is
     * currently sheared.
     *
     */
    IsSheared = 'minecraft:is_sheared',
    /**
     * @remarks
     * 添加时，此组件表示此实体可以堆叠。
     *
     * When added, this component signifies that this entity can be
     * stacked.
     *
     */
    IsStackable = 'minecraft:is_stackable',
    /**
     * @remarks
     * 添加时，此组件表示此实体当前被眩晕。
     *
     * When added, this component signifies that this entity is
     * currently stunned.
     *
     */
    IsStunned = 'minecraft:is_stunned',
    /**
     * @remarks
     * 添加时，此组件表示此实体当前已被驯服。
     *
     * When added, this component signifies that this entity is
     * currently tamed.
     *
     */
    IsTamed = 'minecraft:is_tamed',
    /**
     * @remarks
     * 如果添加到实体上，表示该实体代表世界中自由浮动的物品。允许您通过 itemStack 属性获取实际的物品堆栈内容。
     *
     * If added onto the entity, this indicates that the entity
     * represents a free-floating item in the world. Lets you
     * retrieve the actual item stack contents via the itemStack
     * property.
     *
     */
    Item = 'minecraft:item',
    /**
     * @remarks
     * 定义此实体在熔岩中的基础移动速度。
     *
     * Defines the base movement speed in lava of this entity.
     *
     */
    LavaMovement = 'minecraft:lava_movement',
    /**
     * @remarks
     * 允许此实体被拴绳拴住，并定义此实体被拴绳时的条件和事件。
     *
     * Allows this entity to be leashed and defines the conditions
     * and events for this entity when is leashed.
     *
     */
    Leashable = 'minecraft:leashable',
    /**
     * @remarks
     * 添加时，此组件表示此实体包含一个额外的变体值。可用于进一步区分变体。
     *
     * When added, this component signifies that this entity
     * contains an additional variant value. Can be used to further
     * differentiate variants.
     *
     */
    MarkVariant = 'minecraft:mark_variant',
    /**
     * @remarks
     * 定义此实体的常规移动速度。
     *
     * Defines the general movement speed of this entity.
     *
     */
    Movement = 'minecraft:movement',
    /**
     * @remarks
     * 添加时，此移动控制允许生物在水中游泳并在陆地上行走。
     *
     * When added, this movement control allows the mob to swim in
     * water and walk on land.
     *
     */
    MovementAmphibious = 'minecraft:movement.amphibious',
    /**
     * @remarks
     * 添加时，此组件允许实体的移动。
     *
     * When added, this component allows the movement of an entity.
     *
     */
    MovementBasic = 'minecraft:movement.basic',
    /**
     * @remarks
     * 添加时，此移动控制使生物飞行。
     *
     * When added, this move control causes the mob to fly.
     *
     */
    MovementFly = 'minecraft:movement.fly',
    /**
     * @remarks
     * 添加时，此移动控制允许生物飞行、游泳、攀爬等。
     *
     * When added, this move control allows a mob to fly, swim,
     * climb, etc.
     *
     */
    MovementGeneric = 'minecraft:movement.generic',
    /**
     * @remarks
     * 添加时，此移动控制允许生物滑翔。
     *
     * When added, this movement control allows the mob to glide.
     *
     */
    MovementGlide = 'minecraft:movement.glide',
    /**
     * @remarks
     * 添加时，此移动控制使生物悬停。
     *
     * When added, this move control causes the mob to hover.
     *
     */
    MovementHover = 'minecraft:movement.hover',
    /**
     * @remarks
     * 移动控制，使生物在移动时跳跃，并在跳跃之间具有指定的延迟。
     *
     * Move control that causes the mob to jump as it moves with a
     * specified delay between jumps.
     *
     */
    MovementJump = 'minecraft:movement.jump',
    /**
     * @remarks
     * 添加时，此移动控制使生物在移动时单脚跳。
     *
     * When added, this move control causes the mob to hop as it
     * moves.
     *
     */
    MovementSkip = 'minecraft:movement.skip',
    /**
     * @remarks
     * 添加时，此移动控制使生物左右摇摆，给人以游泳的印象。
     *
     * When added, this move control causes the mob to sway side to
     * side giving the impression it is swimming.
     *
     */
    MovementSway = 'minecraft:movement.sway',
    /**
     * @remarks
     * 允许此实体生成包含垂直墙壁的路径（例如，像 Minecraft 中的蜘蛛那样）。
     *
     * Allows this entity to generate paths that include vertical
     * walls (for example, like Minecraft spiders do.)
     *
     */
    NavigationClimb = 'minecraft:navigation.climb',
    /**
     * @remarks
     * 允许此实体像普通恶魂一样在空中飞行生成路径。
     *
     * Allows this entity to generate paths by flying around the
     * air like the regular Ghast.
     *
     */
    NavigationFloat = 'minecraft:navigation.float',
    /**
     * @remarks
     * 允许此实体在空中生成路径（例如，像 Minecraft 中的鹦鹉那样）。
     *
     * Allows this entity to generate paths in the air (for
     * example, like Minecraft parrots do.)
     *
     */
    NavigationFly = 'minecraft:navigation.fly',
    /**
     * @remarks
     * 允许此实体通过行走、游泳、飞行和/或攀爬以及跳跃上下一个方块来生成路径。
     *
     * Allows this entity to generate paths by walking, swimming,
     * flying and/or climbing around and jumping up and down a
     * block.
     *
     */
    NavigationGeneric = 'minecraft:navigation.generic',
    /**
     * @remarks
     * 允许此实体在空中生成路径（例如，像 Minecraft 中的蜜蜂那样）。防止它们从天空中掉落并进行预测性移动。
     *
     * Allows this entity to generate paths in the air (for
     * example, like the Minecraft Bees do.) Keeps them from
     * falling out of the skies and doing predictive movement.
     *
     */
    NavigationHover = 'minecraft:navigation.hover',
    /**
     * @remarks
     * 允许此实体像普通生物一样通过行走和跳跃上下一个方块来生成路径。
     *
     * Allows this entity to generate paths by walking around and
     * jumping up and down a block like regular mobs.
     *
     */
    NavigationWalk = 'minecraft:navigation.walk',
    /**
     * @beta
     * @remarks
     * 为实体添加 NPC 功能，例如自定义皮肤、名称和对话交互。
     *
     * Adds NPC capabilities to an entity such as custom skin,
     * name, and dialogue interactions.
     *
     */
    Npc = 'minecraft:npc',
    /**
     * @remarks
     * 当存在于实体上时，此实体着火。
     *
     * When present on an entity, this entity is on fire.
     *
     */
    OnFire = 'minecraft:onfire',
    /**
     * @remarks
     * 使用此组件读取玩家的饥饿值。仅在玩家身上可用。
     *
     * Use this component to read the exhaustion of a player. This
     * is only available on players.
     *
     */
    Exhaustion = 'minecraft:player.exhaustion',
    /**
     * @remarks
     * 使用此组件读取玩家的饥饿度。仅在玩家身上可用。
     *
     * Use this component to read the hunger of a player. This is
     * only available on players.
     *
     */
    Hunger = 'minecraft:player.hunger',
    /**
     * @remarks
     * 使用此组件读取玩家的饱和度。仅在玩家身上可用。
     *
     * Use this component to read the saturation of a player. This
     * is only available on players.
     *
     */
    Saturation = 'minecraft:player.saturation',
    /**
     * @remarks
     * 弹射物组件控制弹射物实体的属性，并允许其在给定方向上发射。当实体具有 minecraft:projectile 组件时，此组件存在。
     *
     * The projectile component controls the properties of a
     * projectile entity and allows it to be shot in a given
     * direction. This component is present when the entity has the
     * minecraft:projectile component.
     *
     */
    Projectile = 'minecraft:projectile',
    /**
     * @remarks
     * 设置实体可以穿过的距离。
     *
     * Sets the distance through which the entity can push through.
     *
     */
    PushThrough = 'minecraft:push_through',
    /**
     * @remarks
     * 添加时，此组件增加了一个实体可以被另一个实体骑乘的能力。
     *
     * When added, this component adds the capability that an
     * entity can be ridden by another entity.
     *
     */
    Rideable = 'minecraft:rideable',
    /**
     * @remarks
     * 当任何实体正在骑乘另一个实体时，此组件被添加到该实体上。
     *
     * This component is added to any entity when it is riding
     * another entity.
     *
     */
    Riding = 'minecraft:riding',
    /**
     * @remarks
     * 设置实体的视觉大小。
     *
     * Sets the entity's visual size.
     *
     */
    Scale = 'minecraft:scale',
    /**
     * @remarks
     * 皮肤 ID 值。可用于区分皮肤，例如村民的基础皮肤。
     *
     * Skin Id value. Can be used to differentiate skins, such as
     * base skins for villagers.
     *
     */
    SkinId = 'minecraft:skin_id',
    /**
     * @remarks
     * 定义实体携带物品的强度。
     *
     * Defines the entity's strength to carry items.
     *
     */
    Strength = 'minecraft:strength',
    /**
     * @remarks
     * 定义实体被玩家驯服的规则。
     *
     * Defines the rules for an entity to be tamed by the player.
     *
     */
    Tameable = 'minecraft:tameable',
    /**
     * @remarks
     * 包含基于骑乘它的实体来驯服可骑乘实体的选项。
     *
     * Contains options for taming a rideable entity based on the
     * entity that mounts it.
     *
     */
    TameMount = 'minecraft:tamemount',
    /**
     * @remarks
     * 用于确定实体所属的类型族。
     *
     * Used to determine the type families the entity belongs to.
     *
     */
    TypeFamily = 'minecraft:type_family',
    /**
     * @remarks
     * 定义此实体在水下的常规移动速度。
     *
     * Defines the general movement speed underwater of this
     * entity.
     *
     */
    UnderwaterMovement = 'minecraft:underwater_movement',
    /**
     * @remarks
     * 用于区分实体变体的组件组（例如，豹猫、村民）。
     *
     * Used to differentiate the component group of a variant of an
     * entity from others. (e.g. ocelot, villager).
     *
     */
    Variant = 'minecraft:variant',
    /**
     * @remarks
     * 添加时，此组件表示此实体想要成为骑师。
     *
     * When added, this component signifies that this entity wants
     * to become a jockey.
     *
     */
    WantsJockey = 'minecraft:wants_jockey',
}

/**
 * 描述实体的伤害来源。
 *
 * Describes the source of damage from an Entity.
 */
export enum EntityDamageCause {
    /**
     * @remarks
     * 由下落的铁砧造成的伤害。
     *
     * Damage caused by a falling anvil.
     *
     */
    anvil = 'anvil',
    /**
     * @remarks
     * 由非实体爆炸造成的伤害。例如，爆炸的床。
     *
     * Damage caused from a non-Entity explosion. For example, an
     * exploding bed.
     *
     */
    blockExplosion = 'blockExplosion',
    /**
     * @remarks
     * 由营火造成的伤害。
     *
     * Damage caused by Campfires.
     *
     */
    campfire = 'campfire',
    /**
     * @remarks
     * 未使用。
     *
     * Unused.
     *
     */
    charging = 'charging',
    /**
     * @remarks
     * 由物理接触实体或方块造成的伤害。例如，触碰甜浆果丛或河豚。
     *
     * Damage caused by physically touching an Entity or Block. For
     * example, touching a Sweet Berry bush or Pufferfish.
     *
     */
    contact = 'contact',
    /**
     * @remarks
     * 由实体处于无空气状态且在液体方块内部造成的伤害。
     *
     * Damage caused by an Entity being out of air and inside a
     * liquid block.
     *
     */
    drowning = 'drowning',
    /**
     * @remarks
     * 由实体攻击造成的伤害。
     *
     * Damage caused by an Entity attack.
     *
     */
    entityAttack = 'entityAttack',
    /**
     * @remarks
     * 由实体爆炸造成的伤害。例如，苦力怕或凋灵。
     *
     * Damage caused by an Entity explosion. For example, a Creeper
     * or Wither.
     *
     */
    entityExplosion = 'entityExplosion',
    /**
     * @remarks
     * 由摔落到地面造成的伤害。
     *
     * Damage caused by falling onto the ground.
     *
     */
    fall = 'fall',
    /**
     * @remarks
     * 由下落的方块造成的伤害。注意：铁砧和钟乳石有它们自己的伤害原因。
     *
     * Damage caused by falling blocks. Note: Anvils and
     * Stalactites have their own damage causes.
     *
     */
    fallingBlock = 'fallingBlock',
    /**
     * @remarks
     * 由着火造成的伤害。
     *
     * Damage caused by catching on fire.
     *
     */
    fire = 'fire',
    /**
     * @remarks
     * 由持续燃烧造成的伤害。
     *
     * Damage caused by burning over time.
     *
     */
    fireTick = 'fireTick',
    /**
     * @remarks
     * 由烟花造成的伤害。
     *
     * Damage caused by fireworks.
     *
     */
    fireworks = 'fireworks',
    /**
     * @remarks
     * 在穿着鞘翅滑翔时高速撞墙造成的伤害。
     *
     * Damage caused by flying into a wall at high speed while
     * gliding with Elytra.
     *
     */
    flyIntoWall = 'flyIntoWall',
    /**
     * @remarks
     * 由停留在细雪方块内造成的伤害。
     *
     * Damage caused by staying inside a Powder Snow block.
     *
     */
    freezing = 'freezing',
    /**
     * @remarks
     * 由接触熔岩方块造成的伤害。
     *
     * Damage caused by touching a Lava block.
     *
     */
    lava = 'lava',
    /**
     * @remarks
     * 由被闪电击中造成的伤害。
     *
     * Damage caused by being struck by lightning.
     *
     */
    lightning = 'lightning',
    maceSmash = 'maceSmash',
    /**
     * @remarks
     * 由魔法攻击造成的伤害。例如，唤魔者尖牙或潮涌核心方块。
     *
     * Damage caused by magical attacks. For example, Evoker Fang
     * or Conduit Block.
     *
     */
    magic = 'magic',
    /**
     * @remarks
     * 由接触岩浆块造成的伤害。
     *
     * Damage caused by touching a Magma block.
     *
     */
    magma = 'magma',
    /**
     * @remarks
     * 由无来源造成的伤害。例如，来自命令或脚本。
     *
     * Damage caused by no source. For example, from a command or
     * script.
     *
     */
    none = 'none',
    /**
     * @remarks
     * 由间接来源造成的伤害。例如，在行为包中将生物的生命值设为 0。
     *
     * Damage caused by an indirect source. For example, setting a
     * mob's health to 0 in a behavior pack.
     *
     */
    override = 'override',
    /**
     * @remarks
     * 由活塞造成的伤害。
     *
     * Damage caused by a Piston.
     *
     */
    piston = 'piston',
    /**
     * @remarks
     * 由弹射物造成的伤害。
     *
     * Damage caused by a projectile.
     *
     */
    projectile = 'projectile',
    /**
     * @remarks
     * 由山羊冲撞造成的伤害。
     *
     * Damage caused by Goat ramming.
     *
     */
    ramAttack = 'ramAttack',
    /**
     * @remarks
     * 由 /kill 命令造成的伤害。
     *
     * Damage caused by the /kill command.
     *
     */
    selfDestruct = 'selfDestruct',
    /**
     * @remarks
     * 由监守者的音波尖啸攻击造成的伤害。
     *
     * Damage caused by the Warden's Sonic Boom attack.
     *
     */
    sonicBoom = 'sonicBoom',
    /**
     * @remarks
     * 由灵魂营火造成的伤害。
     *
     * Damage caused by a Soul Campfire.
     *
     */
    soulCampfire = 'soulCampfire',
    /**
     * @remarks
     * 由下落的钟乳石块造成的伤害。
     *
     * Damage caused by a falling Stalactite block.
     *
     */
    stalactite = 'stalactite',
    /**
     * @remarks
     * 由接触石笋块造成的伤害。
     *
     * Damage caused by touching a Stalagmite block.
     *
     */
    stalagmite = 'stalagmite',
    /**
     * @remarks
     * 因饥饿值空而随时间造成的伤害。
     *
     * Damage caused over time by having an empty hunger bar.
     *
     */
    starve = 'starve',
    /**
     * @remarks
     * 由实体处于无空气状态且在非液体方块内部造成的伤害。
     *
     * Damage caused by an Entity being out of air and inside a
     * non-liquid block.
     *
     */
    suffocation = 'suffocation',
    /**
     * @remarks
     * 由实体处于不适宜生存的气候中造成的伤害。例如，雪傀儡在温度大于 1 的生物群系中。
     *
     * Damage caused by an Entity being in an inhabitable climate.
     * For example, a Snow Golem in a biome with a temperature
     * greater than 1.
     *
     */
    temperature = 'temperature',
    /**
     * @remarks
     * 由荆棘盔甲附魔和守卫者荆棘效果造成的伤害。
     *
     * Damage caused by the Thorns armor enchantment and by the
     * Guardian thorns effect.
     *
     */
    thorns = 'thorns',
    /**
     * @remarks
     * 因掉入虚空而随时间造成的伤害。
     *
     * Damage caused over time by falling into the void.
     *
     */
    'void' = 'void',
    /**
     * @remarks
     * 由凋灵效果造成的伤害。例如，接触凋灵玫瑰。
     *
     * Damage caused by the Wither effect. For example, from
     * touching a Wither Rose.
     *
     */
    wither = 'wither',
}

/**
 * 描述实体的治疗来源。
 *
 * Describes the source of healing of an Entity.
 */
export enum EntityHealCause {
    /**
     * @remarks
     * 由药水等物品造成的治疗。
     *
     * Healing caused by items such as potions.
     *
     */
    Heal = 'Heal',
    /**
     * @remarks
     * 由再生效果造成的治疗。
     *
     * Healing caused by regeneration effects.
     *
     */
    Regeneration = 'Regeneration',
    /**
     * @remarks
     * 当饥饿值满时造成的治疗。
     *
     * Healing caused when hunger is full.
     *
     */
    SelfHeal = 'SelfHeal',
    /**
     * @remarks
     * 当不死图腾被激活时造成的治疗。
     *
     * Healing caused when Totem of Undying is activated.
     *
     */
    TotemOfUndying = 'TotemOfUndying',
}

/**
 * 描述实体初始化原因的枚举。
 *
 * An enumeration describing initialization cause of an entity.
 */
export enum EntityInitializationCause {
    /**
     * @remarks
     * 实体作为其他实体的子代创建时的情况，例如，牛生小牛或史莱姆死亡后分裂出更小的史莱姆。
     *
     * Case when an entity is created as child of other entity or
     * entities, e.g., cows making a cow or slimes making smaller
     * slimes after dying.
     *
     */
    Born = 'Born',
    /**
     * @remarks
     * 实体由事件创建时的情况，例如，流浪商人生成羊驼。
     *
     * Case when an entity is created by an event, e.g., a
     * Wandering trader spawning llamas.
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * 实体被加载到世界中时的情况。
     *
     * Case when an entity is loaded into the world.
     *
     */
    Loaded = 'Loaded',
    /**
     * @remarks
     * 实体自然生成在世界中时的情况。
     *
     * Case when an entity is naturally spawned in the world.
     *
     */
    Spawned = 'Spawned',
    /**
     * @remarks
     * 实体转变为另一个实体时的情况。
     *
     * Case when an entity is transformed into another entity.
     *
     */
    Transformed = 'Transformed',
}

/**
 * 描述实体挥动来源的枚举。作为 {@link PlayerSwingStartAfterEvent} 的一部分发送。
 *
 * Enumerator describing the source of an Entity swing. Sent as
 * part of {@link PlayerSwingStartAfterEvent}
 */
export enum EntitySwingSource {
    /**
     * @remarks
     * 当实体作为攻击的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of an attack.
     *
     */
    Attack = 'Attack',
    /**
     * @remarks
     * 当实体作为建造动作的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of a build action.
     *
     */
    Build = 'Build',
    /**
     * @remarks
     * 当实体作为丢弃物品的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of dropping an item.
     *
     */
    DropItem = 'DropItem',
    /**
     * @remarks
     * 当实体作为事件响应的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of an event response.
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * 当实体作为交互的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of an interaction.
     *
     */
    Interact = 'Interact',
    /**
     * @remarks
     * 当实体作为挖掘动作的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of a mine action.
     *
     */
    Mine = 'Mine',
    /**
     * @remarks
     * 当实体挥动没有可确定的来源时发送。
     *
     * Sent when the Entity swing has no determinable source.
     *
     */
    None = 'None',
    /**
     * @remarks
     * 当实体作为投掷物品的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of throwing an item.
     *
     */
    ThrowItem = 'ThrowItem',
    /**
     * @remarks
     * 当实体作为使用物品的一部分挥动时发送。
     *
     * Sent when the Entity swings as part of using an item.
     *
     */
    UseItem = 'UseItem',
}

/**
 * 生物的装备槽。包括盔甲、副手和主手槽。
 *
 * The equipment slot of the mob. This includes armor, offhand
 * and mainhand slots.
 */
export enum EquipmentSlot {
    /**
     * @beta
     * @remarks
     * 身体槽。此槽用于为非人形生物持有盔甲。
     *
     * The body slot. This slot is used to hold armor for
     * non-humanoid mobs.
     *
     */
    Body = 'Body',
    /**
     * @remarks
     * 胸部槽。此槽用于持有胸甲或鞘翅等物品。
     *
     * The chest slot. This slot is used to hold items such as
     * Chestplate or Elytra.
     *
     */
    Chest = 'Chest',
    /**
     * @remarks
     * 脚部槽。此槽用于持有靴子等物品。
     *
     * The feet slot. This slot is used to hold items such as
     * Boots.
     *
     */
    Feet = 'Feet',
    /**
     * @remarks
     * 头部槽。此槽用于持有头盔或雕刻南瓜等物品。
     *
     * The head slot. This slot is used to hold items such as
     * Helmets or Carved Pumpkins.
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * 腿部槽。此槽用于持有护腿等物品。
     *
     * The legs slot. This slot is used to hold items such as
     * Leggings.
     *
     */
    Legs = 'Legs',
    /**
     * @remarks
     * 主手槽。对于玩家，主手槽指的是当前激活的快捷栏槽位。
     *
     * The mainhand slot. For players, the mainhand slot refers to
     * the currently active hotbar slot.
     *
     */
    Mainhand = 'Mainhand',
    /**
     * @remarks
     * 副手槽。此槽用于持有盾牌和地图等物品。
     *
     * The offhand slot. This slot is used to hold items such as
     * shields and maps.
     *
     */
    Offhand = 'Offhand',
}

/**
 * 表示在包含液体的方块（如炼药锅）中使用的流体类型。
 *
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 */
export enum FluidType {
    /**
     * @remarks
     * 表示熔岩作为一种流体类型。
     *
     * Represents lava as a type of fluid.
     *
     */
    Lava = 'Lava',
    /**
     * @remarks
     * 表示药水作为一种流体类型。
     *
     * Represents a potion as a type of fluid.
     *
     */
    Potion = 'Potion',
    /**
     * @remarks
     * 表示细雪作为一种流体类型。
     *
     * Represents powder snow as a type of fluid.
     *
     */
    PowderSnow = 'PowderSnow',
    /**
     * @remarks
     * 表示水作为一种流体类型。
     *
     * Represents water as a type of fluida.
     *
     */
    Water = 'Water',
}

/**
 * 表示当前世界体验的游戏模式。
 *
 * Represents a game mode for the current world experience.
 */
export enum GameMode {
    /**
     * @remarks
     * 世界处于更受限的体验模式，方块可能无法被操作。
     *
     * World is in a more locked-down experience, where blocks may
     * not be manipulated.
     *
     */
    Adventure = 'Adventure',
    /**
     * @remarks
     * 世界处于完全创造模式。在创造模式下，玩家拥有物品选择选项卡和生存选择选项卡中的所有可用资源。他们还可以立即破坏方块，包括那些通常无法破坏的方块。命令方块和结构方块也可以在创造模式下使用。物品也不会失去耐久度或消失。
     *
     * World is in a full creative mode. In creative mode, the
     * player has all the resources available in the item selection
     * tabs and the survival selection tab. They can also destroy
     * blocks instantly including those which would normally be
     * indestructible. Command and structure blocks can also be
     * used in creative mode. Items also do not lose durability or
     * disappear.
     *
     */
    Creative = 'Creative',
    /**
     * @remarks
     * 世界处于旁观者模式。在旁观者模式下，旁观者始终飞行且无法着陆。旁观者可以穿过实心方块和实体而不会发生任何碰撞，并且无法使用物品或与方块或生物交互。旁观者不会被生物或其他玩家看到，除非是其他旁观者；旁观者显示为透明的浮动头部。
     *
     * World is in spectator mode. In spectator mode, spectators
     * are always flying and cannot become grounded. Spectators can
     * pass through solid blocks and entities without any
     * collisions, and cannot use items or interact with blocks or
     * mobs. Spectators cannot be seen by mobs or other players,
     * except for other spectators; spectators appear as a
     * transparent floating head.
     *
     */
    Spectator = 'Spectator',
    /**
     * @remarks
     * 世界处于生存模式，玩家可能受到伤害，实体可能不是和平的。生存模式下，玩家必须收集资源、建造结构，同时在其生成的世界中生存。活动会随着时间的推移逐渐消耗玩家的生命值和饥饿值。
     *
     * World is in a survival mode, where players can take damage
     * and entities may not be peaceful. Survival mode is where the
     * player must collect resources, build structures while
     * surviving in their generated world. Activities can, over
     * time, chip away at player health and hunger bar.
     *
     */
    Survival = 'Survival',
}

/**
 * 游戏规则。这些值也可以通过 /gamerule 命令控制。
 *
 * Game rules. These values can also be controlled via the
 * /gamerule command.
 */
export enum GameRule {
    /**
     * @remarks
     * 命令方块在执行命令时是否通知管理员。
     *
     * Whether command blocks should notify admins when they
     * perform commands.
     *
     */
    CommandBlockOutput = 'commandBlockOutput',
    /**
     * @remarks
     * 控制命令方块是否可以执行命令。
     *
     * Controls whether command blocks can execute commands.
     *
     */
    CommandBlocksEnabled = 'commandBlocksEnabled',
    /**
     * @remarks
     * 控制昼夜循环是否进行。
     *
     * Controls whether the day and night cycles progress.
     *
     */
    DoDayLightCycle = 'doDayLightCycle',
    /**
     * @remarks
     * 控制非生物实体是否掉落物品。例如，物品展示框。
     *
     * Controls whether non-mob entities do drops. ie. Item Frame
     *
     */
    DoEntityDrops = 'doEntityDrops',
    /**
     * @remarks
     * 控制火势是否蔓延。
     *
     * Controls whether fire spreads.
     *
     */
    DoFireTick = 'doFireTick',
    /**
     * @remarks
     * 控制玩家是立即重生还是显示死亡屏幕。
     *
     * Controls whether players immediately respawn or are shown
     * the death screen.
     *
     */
    DoImmediateRespawn = 'doImmediateRespawn',
    /**
     * @remarks
     * 控制玩家是否处理不睡觉的影响（例如幻翼生成）。
     *
     * Controls whether players deal with the effects of not
     * sleeping (such as Phantom spawning).
     *
     */
    DoInsomnia = 'doInsomnia',
    /**
     * @remarks
     * 决定玩家是否只能制作那些他们已经解锁的配方——当 dolimitedcrafting 设置为 `true` 时。
     *
     * Determines whether players should be able to craft only
     * those recipes that they've unlocked first - when
     * dolimitedcrafting is set to true.
     *
     */
    DoLimitedCrafting = 'doLimitedCrafting',
    /**
     * @remarks
     * 控制生物是否掉落战利品。
     *
     * Controls whether mobs drop loot.
     *
     */
    DoMobLoot = 'doMobLoot',
    /**
     * @remarks
     * 控制生物是否自然生成在世界中。
     *
     * Controls whether mobs spawn naturally in the world.
     *
     */
    DoMobSpawning = 'doMobSpawning',
    /**
     * @remarks
     * 控制方块被破坏时是否掉落物品。
     *
     * Controls whether blocks drop items when destroyed.
     *
     */
    DoTileDrops = 'doTileDrops',
    /**
     * @remarks
     * 控制天气是否可以自然变化。
     *
     * Controls whether the weather can change naturally.
     *
     */
    DoWeatherCycle = 'doWeatherCycle',
    /**
     * @remarks
     * 控制实体是否因溺水而受到伤害。
     *
     * Controls whether entities take damage from drowning.
     *
     */
    DrowningDamage = 'drowningDamage',
    /**
     * @remarks
     * 控制实体是否因坠落而受到伤害。
     *
     * Controls whether entities take damage from falling.
     *
     */
    FallDamage = 'fallDamage',
    /**
     * @remarks
     * 控制实体是否因火焰而受到伤害。
     *
     * Controls whether entities take damage from fire.
     *
     */
    FireDamage = 'fireDamage',
    /**
     * @remarks
     * 控制是否受到冰冻伤害。
     *
     * Controls whether there is damage from freezing.
     *
     */
    FreezeDamage = 'freezeDamage',
    /**
     * @remarks
     * 可由 /function 命令同时执行的最大命令数量。
     *
     * The maximum number of commands that can be executed
     * simultaneously by the /function command.
     *
     */
    FunctionCommandLimit = 'functionCommandLimit',
    /**
     * @remarks
     * 控制玩家死亡时是否保留其物品栏。
     *
     * Controls whether players keep their inventories when they
     * die.
     *
     */
    KeepInventory = 'keepInventory',
    /**
     * @remarks
     * 每 tick 可执行的最大连锁命令数量。
     *
     * The maximum number of chained commands that can execute per
     * tick.
     *
     */
    MaxCommandChainLength = 'maxCommandChainLength',
    /**
     * @remarks
     * 控制世界中是否会发生生物破坏行为。例如：苦力怕爆炸破坏方块。
     *
     * Controls whether mob griefing can happen in the world.
     * Example: A Creeper explosion destroying blocks.
     *
     */
    MobGriefing = 'mobGriefing',
    /**
     * @remarks
     * 控制玩家是否可以恢复生命值。
     *
     * Controls whether players can regenerate health.
     *
     */
    NaturalRegeneration = 'naturalRegeneration',
    /**
     * @remarks
     * 需要睡眠的玩家百分比，以进入第二天。
     *
     * The percentage of players required to be sleeping in order
     * to advance to the next day.
     *
     */
    PlayersSleepingPercentage = 'playersSleepingPercentage',
    /**
     * @beta
     * @remarks
     * 控制哪些玩家路径点会自动添加到玩家的定位栏中。
     *
     * Controls which player waypoints are automatically added to
     * the players locator bar.
     *
     */
    PlayerWaypoints = 'playerWaypoints',
    /**
     * @remarks
     * 控制弹射物（具有弹射物组件的实体，如箭、投掷的三叉戟或烟花）是否可以破坏某些支持此交互的方块（如紫颂果、滴水石锥或饰纹陶罐）。不同弹射物可以破坏哪些方块有限制。
     *
     * Controls whether projectiles (entities with a projectile
     * component, like Arrows, thrown Tridents or Fireworks) can
     * destroy certain blocks that support this interaction (such
     * as Chorus Fruit, Dripstone or Decorated Pots). Restrictions
     * on which projectiles can destroy certain blocks apply.
     *
     */
    ProjectilesCanBreakBlocks = 'projectilesCanBreakBlocks',
    /**
     * @remarks
     * 控制玩家是否可以互相伤害。
     *
     * Controls whether players can damage each other.
     *
     */
    Pvp = 'pvp',
    /**
     * @remarks
     * 控制随机 tick 发生的频率。值为 0 或更小将禁用随机 tick。默认值为 1。
     *
     * Controls how frequently random ticks occur. A value of 0 or
     * less will disable random ticks. The default value is 1.
     *
     */
    RandomTickSpeed = 'randomTickSpeed',
    /**
     * @remarks
     * 控制内置（原版）配方是否在玩家游戏进程中自动解锁（另一种选择是根据自定义游戏逻辑使用 /recipe 命令）。
     *
     * Controls whether built-in (vanilla) recipes automatically
     * unlock as the player progresses through the game (one
     * alternative to this is to use the /recipe command based on
     * custom gameplay logic.)
     *
     */
    RecipesUnlock = 'recipesUnlock',
    /**
     * @remarks
     * 控制重生方块（例如床、重生锚）是否在其他维度中爆炸。
     *
     * Controls whether respawn blocks (e.g. Bed, Respawn Anchor)
     * explode in other dimensions.
     *
     */
    RespawnBlocksExplode = 'respawnBlocksExplode',
    /**
     * @remarks
     * 控制命令输出是否显示给玩家。同时也控制命令方块输出是否默认存储。
     *
     * Controls whether command output is displayed to players.
     * Also controls whether Command Block output is stored by
     * default.
     *
     */
    SendCommandFeedback = 'sendCommandFeedback',
    /**
     * @remarks
     * 控制是否显示边界方块效果。
     *
     * Controls whether Border Block effects are shown.
     *
     */
    ShowBorderEffect = 'showBorderEffect',
    /**
     * @remarks
     * 控制是否显示玩家坐标。
     *
     * Controls whether player coordinates are displayed.
     *
     */
    ShowCoordinates = 'showCoordinates',
    /**
     * @remarks
     * 控制是否显示玩家已游玩的天数。
     *
     * Controls whether the days a player has played is displayed.
     *
     */
    ShowDaysPlayed = 'showDaysPlayed',
    /**
     * @remarks
     * 控制死亡消息是否显示在聊天中。
     *
     * Controls whether death messages are displayed in chat.
     *
     */
    ShowDeathMessages = 'showDeathMessages',
    /**
     * @remarks
     * 控制配方的标准玩家通知是否显示。当设置为 `false` 时，"玩家已解锁配方"不再作为玩家通知发送。
     *
     * Controls whether standard player notifications for recipes
     * will show. When set to false, 'player unlocked recipes' are
     * no longer sent as player notifications.
     *
     */
    ShowRecipeMessages = 'showRecipeMessages',
    /**
     * @remarks
     * 控制是否显示物品标签。例如，"Can Place On"、"Can Destroy"、物品锁定图标等。
     *
     * Controls whether item tags are shown. E.g. 'Can Place On',
     * 'Can Destroy', item lock icons, etc.
     *
     */
    ShowTags = 'showTags',
    /**
     * @remarks
     * 允许玩家在世界出生点周围生成的方块半径。不影响冒险模式。默认值为 10 个方块。
     *
     * The block radius from world spawn that a player is allowed
     * to spawn in. Does not affect Adventure mode. The default
     * value is 10 blocks.
     *
     */
    SpawnRadius = 'spawnRadius',
    /**
     * @remarks
     * 影响 TNT 方块是否可以被点燃。
     *
     * Affects whether TNT blocks can be lit.
     *
     */
    TntExplodes = 'tntExplodes',
    /**
     * @remarks
     * 控制方块在被爆炸破坏时是随机掉落战利品还是全部掉落战利品。默认为 `false`。
     *
     * Controls whether blocks randomly drop loot or all blocks
     * drop loot when destroyed by an explosion. Defaults to false.
     *
     */
    TntExplosionDropDecay = 'tntExplosionDropDecay',
}

/**
 * 描述客户端的图形模式。由 {@link Player.graphicsMode} 使用。
 *
 * Describes the graphics mode of a client. Used by {@link
 * Player.graphicsMode}
 */
export enum GraphicsMode {
    /**
     * @remarks
     * 指代延迟技术预览图形模式设置的图形模式。
     *
     * A graphics mode that refers to the Deferred Technical
     * Preview graphics mode setting.
     *
     */
    Deferred = 'Deferred',
    /**
     * @remarks
     * 指代精美图形模式设置的图形模式。在此设置下，大多数特殊图形效果都已打开。
     *
     * A graphics mode that refers to the Fancy graphics mode
     * setting. Most special graphics effects are turned on in this
     * setting.
     *
     */
    Fancy = 'Fancy',
    /**
     * @remarks
     * 指代光线追踪图形模式设置的图形模式。此设置启用光线追踪。
     *
     * A graphics mode that refers to the Ray Traced graphics mode
     * setting. This setting enables ray tracing.
     *
     */
    RayTraced = 'RayTraced',
    /**
     * @remarks
     * 指代简单图形模式设置的图形模式。在此设置下，大多数图形效果都已关闭。
     *
     * A graphics mode that refers to the Simple graphics mode
     * setting. Most graphics effects are turned off in this
     * setting.
     *
     */
    Simple = 'Simple',
}

/**
 * 指定与实体当前持有的物品相关的选项。
 *
 * Specifies options related to the item currently being held
 * by an entity.
 */
export enum HeldItemOption {
    /**
     * @remarks
     * 正在持有任何物品。
     *
     * Any item is being held.
     *
     */
    AnyItem = 'AnyItem',
    /**
     * @remarks
     * 没有持有物品。
     *
     * No item is being held.
     *
     */
    NoItem = 'NoItem',
}

export enum HudElement {
    PaperDoll = 0,
    Armor = 1,
    ToolTips = 2,
    TouchControls = 3,
    Crosshair = 4,
    Hotbar = 5,
    Health = 6,
    ProgressBar = 7,
    Hunger = 8,
    AirBubbles = 9,
    HorseHealth = 10,
    StatusEffects = 11,
    ItemText = 12,
}

/**
 * 指定如何处理 HUD 元素的可见性的枚举。
 *
 * Enumeration that specifies how to treat the visibility of a
 * HUD element.
 */
export enum HudVisibility {
    /**
     * @remarks
     * 指定此 HUD 元素应被隐藏。
     *
     * Specifies that this HUD element should be hidden.
     *
     */
    Hide = 0,
    /**
     * @remarks
     * 指定此 HUD 元素应重置为其默认状态（虽然大多数 HUD 元素是可见的，但某些 HUD 元素可以通过玩家设置隐藏。）
     *
     * Specifies that this HUD element should be reset to its
     * default state (while most HUD elements are visible, some HUD
     * elements can be hidden by the player via settings.)
     *
     */
    Reset = 1,
}

/**
 * 所有支持的输入按钮。与 {@link InputInfo.getButtonState}（通过 {@link Player.inputInfo}）或 {@link PlayerButtonInputAfterEvent}（通过 {@link WorldAfterEvents.playerButtonInput}）一起使用。
 *
 * All the different input buttons that are supported. Use with
 * {@link InputInfo.getButtonState} via {@link
 * Player.inputInfo} or {@link PlayerButtonInputAfterEvent} via
 * {@link WorldAfterEvents.playerButtonInput}
 */
export enum InputButton {
    /**
     * @remarks
     * 映射到控制器、键盘和触摸界面上的"跳跃"按钮。
     *
     * This is mapped to the 'Jump' button on controllers,
     * keyboards, and touch interfaces.
     *
     */
    Jump = 'Jump',
    /**
     * @remarks
     * 映射到控制器、键盘和触摸界面上的"潜行"按钮。默认情况下，在键盘上是 shift，在 Xbox 控制器上是 B。在触摸界面上，这只会被按下 1 tick 或更短时间，然后即使玩家按住手指也会立即释放。下马或离开船只不会发送潜行按钮更改事件。
     *
     * This is mapped to the 'Sneak' button on controllers,
     * keyboards, and touch interfaces. By default, this is shift
     * on a keyboard or B on an Xbox controller. On touch
     * interfaces this will only be pressed for 1 tick or less and
     * then it will be released immediately even if the player
     * holds their finger down. Dismounting a horse or exiting a
     * boat will not send a Sneak button change event.
     *
     */
    Sneak = 'Sneak',
}

/**
 * 描述设备的输入类型。
 *
 * Describes the type of input of a device.
 */
export enum InputMode {
    /**
     * @remarks
     * 游戏手柄输入。
     *
     * Gamepad input.
     *
     */
    Gamepad = 'Gamepad',
    /**
     * @remarks
     * 键盘和鼠标输入。
     *
     * Keyboard and mouse input.
     *
     */
    KeyboardAndMouse = 'KeyboardAndMouse',
    /**
     * @remarks
     * 动作控制器输入。
     *
     * Motion controller input.
     *
     */
    MotionController = 'MotionController',
    /**
     * @remarks
     * 触摸输入。
     *
     * Touch input.
     *
     */
    Touch = 'Touch',
}

/**
 * 输入权限类别。由 {@link PlayerInputPermissionCategoryChangeAfterEvent} 指定哪个类别已更改，以及由 {@link PlayerInputPermissions} 获取或设置权限。
 *
 * Input permission categories. Used by {@link
 * PlayerInputPermissionCategoryChangeAfterEvent} to specify
 * which category was changed and {@link
 * PlayerInputPermissions} to get or set permissions.
 */
export enum InputPermissionCategory {
    /**
     * @remarks
     * 与摄像机移动相关的玩家输入。
     *
     * Player input relating to camera movement.
     *
     */
    Camera = 1,
    /**
     * @remarks
     * 与所有玩家移动相关的输入。禁用此选项相当于禁用跳跃、潜行、横向移动、上马和下马。
     *
     * Player input relating to all player movement. Disabling this
     * is equivalent to disabling jump, sneak, lateral movement,
     * mount, and dismount.
     *
     */
    Movement = 2,
    /**
     * @remarks
     * 玩家在世界中横向移动的输入。在键盘上是 WASD，在手柄或触摸上是移动摇杆。
     *
     * Player input for moving laterally in the world. This would
     * be WASD on a keyboard or the movement joystick on gamepad or
     * touch.
     *
     */
    LateralMovement = 4,
    /**
     * @remarks
     * 与潜行相关的玩家输入。这也影响向下飞行。
     *
     * Player input relating to sneak. This also affects flying
     * down.
     *
     */
    Sneak = 5,
    /**
     * @remarks
     * 与跳跃相关的玩家输入。这也影响向上飞行。
     *
     * Player input relating to jumping. This also affects flying
     * up.
     *
     */
    Jump = 6,
    /**
     * @remarks
     * 与骑乘载具相关的玩家输入。
     *
     * Player input relating to mounting vehicles.
     *
     */
    Mount = 7,
    /**
     * @remarks
     * 与下马相关的玩家输入。当禁用时，玩家仍可以通过其他方式下马，例如在马背上玩家仍然可以跳下，在船上玩家可以进入另一艘船。
     *
     * Player input relating to dismounting. When disabled, the
     * player can still dismount vehicles by other means, for
     * example on horses players can still jump off and in boats
     * players can go into another boat.
     *
     */
    Dismount = 8,
    /**
     * @remarks
     * 与玩家向前移动相关的输入。
     *
     * Player input relating to moving the player forward.
     *
     */
    MoveForward = 9,
    /**
     * @remarks
     * 与玩家向后移动相关的输入。
     *
     * Player input relating to moving the player backward.
     *
     */
    MoveBackward = 10,
    /**
     * @remarks
     * 与玩家向左移动相关的输入。
     *
     * Player input relating to moving the player left.
     *
     */
    MoveLeft = 11,
    /**
     * @remarks
     * 与玩家向右移动相关的输入。
     *
     * Player input relating to moving the player right.
     *
     */
    MoveRight = 12,
}

/**
 * 可通过 ItemStack.getComponent 函数访问的物品组件类型。
 *
 * The types of item components that are accessible via
 * function ItemStack.getComponent.
 */
export enum ItemComponentTypes {
    /**
     * @beta
     */
    BlockDynamicProperties = 'minecraft:block_actor_dynamic_properties',
    /**
     * @remarks
     * minecraft:book 组件。
     *
     * The minecraft:book component.
     *
     */
    Book = 'minecraft:book',
    Compostable = 'minecraft:compostable',
    /**
     * @remarks
     * minecraft:cooldown 组件。
     *
     * The minecraft:cooldown component.
     *
     */
    Cooldown = 'minecraft:cooldown',
    /**
     * @remarks
     * minecraft:durability 组件。
     *
     * The minecraft:durability component.
     *
     */
    Durability = 'minecraft:durability',
    Dyeable = 'minecraft:dyeable',
    /**
     * @remarks
     * minecraft:enchantable 组件。
     *
     * The minecraft:enchantable component.
     *
     */
    Enchantable = 'minecraft:enchantable',
    /**
     * @remarks
     * minecraft:food 组件。
     *
     * The minecraft:food component.
     *
     */
    Food = 'minecraft:food',
    Inventory = 'minecraft:inventory',
    Potion = 'minecraft:potion',
}

/**
 * 描述物品在容器中的移动方式。
 *
 * Describes how an an item can be moved within a container.
 */
export enum ItemLockMode {
    /**
     * @remarks
     * 物品不能被丢弃或用于合成。
     *
     * The item cannot be dropped or crafted with.
     *
     */
    inventory = 'inventory',
    /**
     * @remarks
     * 物品没有容器限制。
     *
     * The item has no container restrictions.
     *
     */
    none = 'none',
    /**
     * @remarks
     * 物品不能从其槽位移出、丢弃或用于合成。
     *
     * The item cannot be moved from its slot, dropped or crafted
     * with.
     *
     */
    slot = 'slot',
}

/**
 * 指定如何处理可与水共存的方块与现有液体重叠的情况。
 *
 * Specifies how to handle waterloggable blocks overlapping
 * with existing liquid.
 */
export enum LiquidSettings {
    /**
     * @remarks
     * 使可与水共存的方块在与现有液体重叠时变为含水状态。
     *
     * Causes a waterloggable block to become waterlogged, if it
     * overlaps with existing liquid.
     *
     */
    ApplyWaterlogging = 'ApplyWaterlogging',
    /**
     * @remarks
     * 不要使任何与现有液体重叠的可与水共存的方块变为含水状态。
     *
     * Do not waterlog any waterloggable blocks that overlap
     * existing liquid.
     *
     */
    IgnoreWaterlogging = 'IgnoreWaterlogging',
}

/**
 * 表示可以放置在方块上或在世界中动态流动的液体类型。
 *
 * Represents the type of liquid that can be placed on a block
 * or flow dynamically in the world.
 */
export enum LiquidType {
    /**
     * @remarks
     * 表示水作为一种液体类型。
     *
     * Represents water as a type of liquid.
     *
     */
    Water = 'Water',
}

/**
 * 表示定位栏操作可能失败的各种原因的枚举。
 *
 * Enum representing the different reasons why a locator bar
 * operation may fail.
 */
export enum LocatorBarErrorReason {
    /**
     * @remarks
     * 该路径点已存在于定位栏中，无法再次添加。
     *
     * The waypoint already exists in the locator bar and cannot be
     * added again.
     *
     */
    WaypointAlreadyExists = 'WaypointAlreadyExists',
    /**
     * @remarks
     * 已达到最大路径点数量，无法再添加更多。
     *
     * The maximum number of waypoints has been reached and no more
     * can be added.
     *
     */
    WaypointLimitExceeded = 'WaypointLimitExceeded',
    /**
     * @remarks
     * 指定的路径点在定位栏中不存在。
     *
     * The specified waypoint does not exist in the locator bar.
     *
     */
    WaypointNotFound = 'WaypointNotFound',
}

/**
 * 描述设备的内存。
 *
 * Describes the memory of a device.
 */
export enum MemoryTier {
    /**
     * @remarks
     * 超低等级的最大内存为 1.5GB。
     *
     * Max memory for Super Low Tier is 1.5GBs.
     *
     */
    SuperLow = 0,
    /**
     * @remarks
     * 低等级的最大内存为 2GB。
     *
     *  Max memory for Low Tier is 2GBs.
     *
     */
    Low = 1,
    /**
     * @remarks
     * 中等级的最大内存为 4GB。
     *
     * Max memory for Mid Tier is 4GBs.
     *
     */
    Mid = 2,
    /**
     * @remarks
     * 高等级的最大内存为 8GB。
     *
     * Max memory for High Tier is 8GBs.
     *
     */
    High = 3,
    /**
     * @remarks
     * 超高等级的内存超过 8GB。
     *
     * Memory for Super High Tier is above 8GBs.
     *
     */
    SuperHigh = 4,
}

/**
 * 包含基于当前日期的不同月相阶段的枚举。使用 world.getMoonPhase 获取当前月相。
 *
 * 月亮的满盈程度控制着各种生物行为，例如沼泽生物群系中史莱姆的生成数量、骷髅和僵尸生成时带有盔甲的几率，以及蜘蛛生成时带有特定状态效果的几率。
 *
 * Enum containing the different phases of the moon based on
 * the current day.,Obtain the current MoonPhase using
 * world.getMoonPhase.
 *
 * The fullness of the moon controls various mob behaviors such
 * as the number of slimes that spawn in Swamp biomes, the
 * chance skeletons and zombies have to spawn with armor, as
 * well as the chance for spiders to spawn with certain status
 * effects.
 */
export enum MoonPhase {
    /**
     * @remarks
     * 最亮的月相。在此阶段，猫有 50% 的几率生成黑猫。
     *
     * The brightest moon phase. During this phase, cats have a 50%
     * chance of spawning as black cats.
     *
     */
    FullMoon = 0,
    /**
     * @remarks
     * 满月之后的阶段。
     *
     * The phase following the Full Moon.
     *
     */
    WaningGibbous = 1,
    /**
     * @remarks
     * 蛾眉月之后的阶段。
     *
     * The phase following the Waxing Crescent.
     *
     */
    FirstQuarter = 2,
    /**
     * @remarks
     * 下弦月之后的阶段。
     *
     * The phase following the Last Quarter.
     *
     */
    WaningCrescent = 3,
    /**
     * @remarks
     * 最暗的月相。
     *
     * The darkest moon phase.
     *
     */
    NewMoon = 4,
    /**
     * @remarks
     * 新月之后的阶段。
     *
     * The phase following the New Moon.
     *
     */
    WaxingCrescent = 5,
    /**
     * @remarks
     * 亏凸月之后的阶段。
     *
     * The phase following the Waning Gibbous.
     *
     */
    LastQuarter = 6,
    /**
     * @remarks
     * 上弦月之后的阶段。
     *
     * The phase following the First Quarter.
     *
     */
    WaxingGibbous = 7,
}

export enum MovementType {
    Immovable = 'Immovable',
    Popped = 'Popped',
    Push = 'Push',
    PushPull = 'PushPull',
}

/**
 * 描述命名空间名称错误被抛出原因的枚举。
 *
 * An enumeration describing the reason for the namespace name
 * error being thrown
 */
export enum NamespaceNameErrorReason {
    /**
     * @remarks
     * 使用了受限的命名空间作为命名空间。
     *
     * A restricted namespace was used as the namespace
     *
     */
    DisallowedNamespace = 'DisallowedNamespace',
    /**
     * @remarks
     * 当需要命名空间时，名称缺少命名空间。
     *
     * The name was missing a namespace when one is required
     *
     */
    NoNamespace = 'NoNamespace',
}

/**
 * 表示分数持有者列表的排序顺序。
 * 
 * Used for specifying a sort order for how to display an
 * objective and its list of participants.
 */
export enum ObjectiveSortOrder {
    /**
     * @remarks
     * 以升序显示分数持有者列表（例如：A-Z）。
     * 
     * Objective participant list is displayed in ascending (e.g.,
     * A-Z) order.
     *
     */
    Ascending = 0,
    /**
     * @remarks
     * 以降序显示分数持有者列表（例如：Z-A）。
     * 
     * Objective participant list is displayed in descending (e.g.,
     * Z-A) order.
     *
     */
    Descending = 1,
}

/**
 * 包含可与 EntityColorComponent 和 EntityColor2Component 一起使用的颜色的枚举。
 *
 * Enum containing colors to be used with EntityColorComponent
 * and EntityColor2Component
 */
export enum PaletteColor {
    /**
     * @remarks
     * 十六进制颜色 #f0f0f0
     *
     * Hex color #f0f0f0
     *
     */
    White = 0,
    /**
     * @remarks
     * 十六进制颜色 #F9801D
     *
     * Hex color #F9801D
     *
     */
    Orange = 1,
    /**
     * @remarks
     * 十六进制颜色 #C74EBD
     *
     * Hex color #C74EBD
     *
     */
    Magenta = 2,
    /**
     * @remarks
     * 十六进制颜色 #3AB3DA
     *
     * Hex color #3AB3DA
     *
     */
    LightBlue = 3,
    /**
     * @remarks
     * 十六进制颜色 #FED83D
     *
     * Hex color #FED83D
     *
     */
    Yellow = 4,
    /**
     * @remarks
     * 十六进制颜色 #80C71F
     *
     * Hex color #80C71F
     *
     */
    Lime = 5,
    /**
     * @remarks
     * 十六进制颜色 #F38BAA
     *
     * Hex color #F38BAA
     *
     */
    Pink = 6,
    /**
     * @remarks
     * 十六进制颜色 #474F52
     *
     * Hex color #474F52
     *
     */
    Gray = 7,
    /**
     * @remarks
     * 十六进制颜色 #9D9D97
     *
     * Hex color #9D9D97
     *
     */
    Silver = 8,
    /**
     * @remarks
     * 十六进制颜色 #169C9C
     *
     * Hex color #169C9C
     *
     */
    Cyan = 9,
    /**
     * @remarks
     * 十六进制颜色 #8932B8
     *
     * Hex color #8932B8
     *
     */
    Purple = 10,
    /**
     * @remarks
     * 十六进制颜色 #3C44AA
     *
     * Hex color #3C44AA
     *
     */
    Blue = 11,
    /**
     * @remarks
     * 十六进制颜色 #835432
     *
     * Hex color #835432
     *
     */
    Brown = 12,
    /**
     * @remarks
     * 十六进制颜色 #5E7C16
     *
     * Hex color #5E7C16
     *
     */
    Green = 13,
    /**
     * @remarks
     * 十六进制颜色 #B02E26
     *
     * Hex color #B02E26
     *
     */
    Red = 14,
    /**
     * @remarks
     * 十六进制颜色 #1D1D21
     *
     * Hex color #1D1D21
     *
     */
    Black = 15,
}

/**
 * 描述设备属于哪种平台。
 *
 * Describes what kind of platform is a device.
 */
export enum PlatformType {
    /**
     * @remarks
     * 专用游戏设备。
     *
     * Specialized gaming device.
     *
     */
    Console = 'Console',
    /**
     * @remarks
     * 个人计算机（PC）。
     *
     * Personal Computer (PC).
     *
     */
    Desktop = 'Desktop',
    /**
     * @remarks
     * 手持设备，例如智能手机或平板电脑。
     *
     *  Handheld device such smartphone or tablet.
     *
     */
    Mobile = 'Mobile',
}

/**
 * 指定玩家库存类型。
 *
 * Specifies the player inventory type.
 */
export enum PlayerInventoryType {
    /**
     * @remarks
     * 快捷栏库存。
     *
     * Hotbar inventory.
     *
     */
    Hotbar = 'Hotbar',
    /**
     * @remarks
     * 主库存。
     *
     * Main inventory.
     *
     */
    Inventory = 'Inventory',
}

/**
 * 玩家权限等级。
 *
 * The player permission level.
 */
export enum PlayerPermissionLevel {
    /**
     * @remarks
     * 访客只能观察世界，不能与之交互。
     *
     * Visitors can only observe the world, not interact with it.
     *
     */
    Visitor = 0,
    /**
     * @remarks
     * 成员可以建造和挖掘、攻击玩家和生物，以及与物品和实体交互。
     *
     * Members can build and mine, attack players and mobs, and
     * interact with items and entities.
     *
     */
    Member = 1,
    /**
     * @remarks
     * 操作员可以传送和使用命令，此外还可以执行成员的所有操作。
     *
     * Operators can teleport and use commands, in addition to
     * everything Members can do.
     *
     */
    Operator = 2,
    Custom = 3,
}

/**
 * @rc
 * 玩家的分屏槽位。
 *
 * The split screen slot of a player.
 */
export enum PlayerSplitScreenSlot {
    /**
     * @remarks
     * 分屏会话中的第一个玩家。这是主要玩家。
     *
     * The first player in the split screen session. This is the
     * primary player.
     *
     */
    First = 'First',
    /**
     * @remarks
     * 分屏会话中的第四个玩家。
     *
     * The fourth player in the split screen session.
     *
     */
    Fourth = 'Fourth',
    /**
     * @remarks
     * 分屏会话中的第二个玩家。
     *
     * The second player in the split screen session.
     *
     */
    Second = 'Second',
    /**
     * @remarks
     * 分屏会话中的第三个玩家。
     *
     * The third player in the split screen session.
     *
     */
    Third = 'Third',
}

/**
 * @beta
 * 玩家路径点模式的枚举。
 *
 * Player waypoints mode enum.
 */
export enum PlayerWaypointsMode {
    Everyone = 'Everyone',
    Off = 'Off',
}

/**
 * 表示分数持有者的类型。
 * 
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * @remarks
     * 分数持有者是一个实体。
     * 
     * This scoreboard participant is tied to an entity.
     *
     */
    Entity = 'Entity',
    /**
     * @remarks
     * 分数持有者是一个虚拟玩家（通常用于存储数据或者作为抽象进度）。
     * 
     * This scoreboard participant is tied to a pseudo player
     * entity - typically this is used to store scores as data or
     * as abstract progress.
     *
     */
    FakePlayer = 'FakePlayer',
    /**
     * @remarks
     * 分数持有者是一位玩家。
     * 
     * This scoreboard participant is tied to a player.
     *
     */
    Player = 'Player',
}

/**
 * 描述脚本事件的来源。
 *
 * Describes where the script event originated from.
 */
export enum ScriptEventSource {
    /**
     * @remarks
     * 脚本事件源自方块，例如命令方块。
     *
     * The script event originated from a Block such as a Command
     * Block.
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 脚本事件源自实体，例如玩家、命令方块矿车或动画控制器。
     *
     * The script event originated from an Entity such as a Player,
     * Command Block Minecart or Animation Controller.
     *
     */
    Entity = 'Entity',
    /**
     * @remarks
     * 脚本事件源自 NPC 对话。
     *
     * The script event originated from an NPC dialogue.
     *
     */
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 脚本事件源自服务器，例如来自 runCommand API 调用或专用服务器控制台。
     *
     * The script event originated from the server, such as from a
     * runCommand API call or a dedicated server console.
     *
     */
    Server = 'Server',
}

/**
 * 表示告示牌的一面。
 *
 * Represents a side of a sign.
 */
export enum SignSide {
    /**
     * @remarks
     * 告示牌的背面。
     *
     * The back of the sign.
     *
     */
    Back = 'Back',
    /**
     * @remarks
     * 告示牌的正面。
     *
     * The front of the sign.
     *
     */
    Front = 'Front',
}

export enum StickyType {
    None = 'None',
    Same = 'Same',
}

/**
 * 指定放置结构时结构方块应如何动画显示。
 *
 * Specifies how structure blocks should be animated when a
 * structure is placed.
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * 方块将一次一个随机放置。使用 @minecraft/server.StructurePlaceOptions.animationSeconds 控制所有方块放置完成所需的时间。
     *
     * Blocks will be randomly placed one at at time. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     *
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * 方块将从下到上一次一层地放置。使用 @minecraft/server.StructurePlaceOptions.animationSeconds 控制所有方块放置完成所需的时间。
     *
     * Blocks will be placed one layer at a time from bottom to
     * top. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     *
     */
    Layers = 'Layers',
    /**
     * @remarks
     * 所有方块将立即放置。
     *
     * All blocks will be placed immediately.
     *
     */
    None = 'None',
}

/**
 * 指定放置结构时应如何镜像。
 *
 * Specifies how a structure should be mirrored when placed.
 */
export enum StructureMirrorAxis {
    /**
     * @remarks
     * 不镜像。
     *
     * No mirroring.
     *
     */
    None = 'None',
    /**
     * @remarks
     * 结构沿 X 轴镜像。
     *
     * Structure is mirrored across the X axis.
     *
     */
    X = 'X',
    /**
     * @remarks
     * 结构沿 X 和 Z 轴镜像。
     *
     * Structure is mirrored across both the X and Z axes.
     *
     */
    XZ = 'XZ',
    /**
     * @remarks
     * 结构沿 Z 轴镜像。
     *
     * Structure is mirrored across the Z axis.
     *
     */
    Z = 'Z',
}

/**
 * 描述结构放置旋转的枚举。
 *
 * Enum describing a structure's placement rotation.
 */
export enum StructureRotation {
    /**
     * @remarks
     * 不旋转。
     *
     * No rotation.
     *
     */
    None = 'None',
    /**
     * @remarks
     * 180 度旋转。
     *
     * 180 degree rotation.
     *
     */
    Rotate180 = 'Rotate180',
    /**
     * @remarks
     * 270 度旋转。
     *
     * 270 degree rotation.
     *
     */
    Rotate270 = 'Rotate270',
    /**
     * @remarks
     * 90 度旋转。
     *
     * 90 degree rotation.
     *
     */
    Rotate90 = 'Rotate90',
}

/**
 * 指定结构的保存方式。
 *
 * Specifies how a structure should be saved.
 */
export enum StructureSaveMode {
    /**
     * @remarks
     * 结构将临时保存到内存中。结构将持续到世界关闭为止。
     *
     * The structure will be temporarily saved to memory. The
     * structure will persist until the world is shut down.
     *
     */
    Memory = 'Memory',
    /**
     * @remarks
     * 结构将保存到世界文件中，并在世界加载之间持续存在。可以通过 @minecraft/server.StructureManager.delete 从世界中移除已保存的结构。
     *
     * The structure will be saved to the world file and persist
     * between world loads. A saved structure can be removed from
     * the world via @minecraft/server.StructureManager.delete.
     *
     */
    World = 'World',
}

/**
 * 抛出 {@link @minecraft/server.TickingAreaError} 的原因。
 *
 * The reason that the {@link
 * @minecraft/server.TickingAreaError} was thrown.
 */
export enum TickingAreaErrorReason {
    /**
     * @remarks
     * 添加了一个标识符已存在的常加载区域。
     *
     * Added a ticking area with an identifier that already exists.
     *
     */
    IdentifierAlreadyExists = 'IdentifierAlreadyExists',
    /**
     * @remarks
     * 添加此常加载区域将常加载区域推过了 {@link TickingAreaManager.maxChunkCount} 指定的限制。
     *
     *  Adding this ticking area pushed the ticking areas over the
     * limit specified by {@link TickingAreaManager.maxChunkCount}.
     *
     */
    OverChunkLimit = 'OverChunkLimit',
    /**
     * @remarks
     * 超过了常加载区域长度或宽度的 255 个区块限制。
     *
     * Exceeded the 255 chunk limit for the length or width of the
     * ticking area.
     *
     */
    SideLengthExceeded = 'SideLengthExceeded',
    /**
     * @remarks
     * 尝试移除在 {@link TickingAreaManager} 中未注册标识符的常加载区域。
     *
     * Tried to remove ticking area with identifier not registered
     * in the {@link TickingAreaManager}.
     *
     */
    UnknownIdentifier = 'UnknownIdentifier',
}

/**
 * 提供 Minecraft 一天中常见时段的数值。
 *
 * Provides numeric values for common periods in the Minecraft
 * day.
 */
export enum TimeOfDay {
    /**
     * @remarks
     * 将时间设置为一天的开始，在 Minecraft 中对应时间 1,000（相当于早上 7 点）。
     *
     * Sets the time to the start of the day, which is time of the
     * day 1,000 (or the equivalent of 7am) in Minecraft.
     *
     */
    Day = 1000,
    /**
     * @remarks
     * 将时间设置为正午，在 Minecraft 中对应时间 6,000。
     *
     * Sets the time to noon, which is time of the day 6,000 in
     * Minecraft.
     *
     */
    Noon = 6000,
    /**
     * @remarks
     * 将时间设置为日落，在 Minecraft 中对应时间 12,000（相当于下午 6 点）。
     *
     * Sets the time to sunset, which is time of the day 12,000 (or
     * the equivalent of 6pm) in Minecraft.
     *
     */
    Sunset = 12000,
    /**
     * @remarks
     * 将时间设置为夜晚，在 Minecraft 中对应时间 13,000（相当于晚上 7:00）。
     *
     * Sets the time to night, which is time of the day 13,000 (or
     * the equivalent of 7:00pm) in Minecraft.
     *
     */
    Night = 13000,
    /**
     * @remarks
     * 将时间设置为午夜，在 Minecraft 中对应时间 18,000（相当于凌晨 12:00）。
     *
     * Sets the time to midnight, which is time of the day 18,000
     * (or the equivalent of 12:00am) in Minecraft.
     *
     */
    Midnight = 18000,
    /**
     * @remarks
     * 将时间设置为日出，在 Minecraft 中对应时间 23,000（相当于早上 5 点）。
     *
     * Sets the time to sunrise, which is time of the day 23,000
     * (or the equivalent of 5am) in Minecraft.
     *
     */
    Sunrise = 23000,
}

/**
 * 应用于方块或方块部分的着色逻辑。当世界位置作为上下文的一部分时，颜色可能会变化，因为生物群系通常会影响最终的着色结果。
 *
 * Tint logic applied to a block or part of a block. The color
 * may vary when a world position is part of the context, as
 * biomes often have an influence on the resulting tint.
 */
export enum TintMethod {
    /**
     * @remarks
     * 指定白桦树叶着色方法。
     *
     * Specifies a birch foliage tint method.
     *
     */
    BirchFoliage = 'BirchFoliage',
    /**
     * @remarks
     * 指定默认树叶着色方法。
     *
     * Specifies a default foliage tint method.
     *
     */
    DefaultFoliage = 'DefaultFoliage',
    /**
     * @remarks
     * 指定干燥树叶着色方法。
     *
     * Specifies a dry foliage tint method.
     *
     */
    DryFoliage = 'DryFoliage',
    /**
     * @remarks
     * 指定常绿树叶着色方法。
     *
     * Specifies an evergreen foliage tint method.
     *
     */
    EvergreenFoliage = 'EvergreenFoliage',
    /**
     * @remarks
     * 指定草地着色方法。
     *
     * Specifies a grass tint method.
     *
     */
    Grass = 'Grass',
    /**
     * @remarks
     * 指定不使用着色方法，结果为白色着色。
     *
     * Specifies no tint method, resulting in a white tint.
     *
     */
    None = 'None',
    /**
     * @remarks
     * 指定水体着色方法。
     *
     * Specifies a water tint method.
     *
     */
    Water = 'Water',
}

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

/**
 * 表示可在定位栏上为路径点显示的不同纹理图标的枚举。
 *
 * Enum representing different texture icons that can be
 * displayed for waypoints on the locator bar.
 */
export enum WaypointTexture {
    /**
     * @remarks
     * 圆形路径点图标纹理。
     *
     * Circle waypoint icon texture.
     *
     */
    Circle = 'minecraft:circle',
    /**
     * @remarks
     * 小方形路径点图标纹理。
     *
     * Small square waypoint icon texture.
     *
     */
    SmallSquare = 'minecraft:small_square',
    /**
     * @remarks
     * 小星形路径点图标纹理。
     *
     * Small star waypoint icon texture.
     *
     */
    SmallStar = 'minecraft:small_star',
    /**
     * @remarks
     * 方形路径点图标纹理。
     *
     * Square waypoint icon texture.
     *
     */
    Square = 'minecraft:square',
}

/**
 * 用于指定世界中天气状况的类型。
 *
 * Used to specify the type of weather condition within the
 * world.
 */
export enum WeatherType {
    /**
     * @remarks
     * 指定晴天天气状况。
     *
     * Specifies a clear weather condition.
     *
     */
    Clear = 'Clear',
    /**
     * @remarks
     * 指定雨天天气状况。
     *
     * Specifies a rain weather condition.
     *
     */
    Rain = 'Rain',
    /**
     * @remarks
     * 指定雷雨天气状况。
     *
     * Specifies a rain and thunder weather condition.
     *
     */
    Thunder = 'Thunder',
}

export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap
    ? BlockComponentTypeMap[T]
    : BlockCustomComponentInstance;

export type BlockComponentTypeMap = {
    dynamic_properties: BlockDynamicPropertiesComponent;
    fluid_container: BlockFluidContainerComponent;
    instrument_sound: BlockInstrumentComponent;
    inventory: BlockInventoryComponent;
    map_color: BlockMapColorComponent;
    'minecraft:dynamic_properties': BlockDynamicPropertiesComponent;
    'minecraft:fluid_container': BlockFluidContainerComponent;
    'minecraft:instrument_sound': BlockInstrumentComponent;
    'minecraft:inventory': BlockInventoryComponent;
    'minecraft:map_color': BlockMapColorComponent;
    'minecraft:movable': BlockMovableComponent;
    'minecraft:piston': BlockPistonComponent;
    'minecraft:precipitation_interactions': BlockPrecipitationInteractionsComponent;
    'minecraft:record_player': BlockRecordPlayerComponent;
    'minecraft:redstone_producer': BlockRedstoneProducerComponent;
    'minecraft:sign': BlockSignComponent;
    movable: BlockMovableComponent;
    piston: BlockPistonComponent;
    precipitation_interactions: BlockPrecipitationInteractionsComponent;
    record_player: BlockRecordPlayerComponent;
    redstone_producer: BlockRedstoneProducerComponent;
    sign: BlockSignComponent;
};

/**
 * Type alias used by the {@link BlockPermutation} matches and
 * resolve functions to narrow block state argument types to
 * those mapped by {@link
 * @minecraft/vanilla-data.BlockStateMapping}.
 */
export type BlockStateArg<T> = T extends `${MinecraftBlockTypes}`
    ? T extends keyof BlockStateMapping
        ? BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;

export type EntityComponentReturnType<T extends string> = T extends keyof EntityComponentTypeMap
    ? EntityComponentTypeMap[T]
    : EntityComponent;

export type EntityComponentTypeMap = {
    addrider: EntityAddRiderComponent;
    ageable: EntityAgeableComponent;
    breathable: EntityBreathableComponent;
    can_climb: EntityCanClimbComponent;
    can_fly: EntityCanFlyComponent;
    can_power_jump: EntityCanPowerJumpComponent;
    color: EntityColorComponent;
    color2: EntityColor2Component;
    cursor_inventory: PlayerCursorInventoryComponent;
    ender_inventory: EntityEnderInventoryComponent;
    equippable: EntityEquippableComponent;
    fire_immune: EntityFireImmuneComponent;
    floats_in_liquid: EntityFloatsInLiquidComponent;
    flying_speed: EntityFlyingSpeedComponent;
    friction_modifier: EntityFrictionModifierComponent;
    healable: EntityHealableComponent;
    health: EntityHealthComponent;
    inventory: EntityInventoryComponent;
    is_baby: EntityIsBabyComponent;
    is_charged: EntityIsChargedComponent;
    is_chested: EntityIsChestedComponent;
    is_dyeable: EntityIsDyeableComponent;
    is_hidden_when_invisible: EntityIsHiddenWhenInvisibleComponent;
    is_ignited: EntityIsIgnitedComponent;
    is_illager_captain: EntityIsIllagerCaptainComponent;
    is_saddled: EntityIsSaddledComponent;
    is_shaking: EntityIsShakingComponent;
    is_sheared: EntityIsShearedComponent;
    is_stackable: EntityIsStackableComponent;
    is_stunned: EntityIsStunnedComponent;
    is_tamed: EntityIsTamedComponent;
    item: EntityItemComponent;
    lava_movement: EntityLavaMovementComponent;
    leashable: EntityLeashableComponent;
    mark_variant: EntityMarkVariantComponent;
    'minecraft:addrider': EntityAddRiderComponent;
    'minecraft:ageable': EntityAgeableComponent;
    'minecraft:breathable': EntityBreathableComponent;
    'minecraft:can_climb': EntityCanClimbComponent;
    'minecraft:can_fly': EntityCanFlyComponent;
    'minecraft:can_power_jump': EntityCanPowerJumpComponent;
    'minecraft:color': EntityColorComponent;
    'minecraft:color2': EntityColor2Component;
    'minecraft:cursor_inventory': PlayerCursorInventoryComponent;
    'minecraft:ender_inventory': EntityEnderInventoryComponent;
    'minecraft:equippable': EntityEquippableComponent;
    'minecraft:fire_immune': EntityFireImmuneComponent;
    'minecraft:floats_in_liquid': EntityFloatsInLiquidComponent;
    'minecraft:flying_speed': EntityFlyingSpeedComponent;
    'minecraft:friction_modifier': EntityFrictionModifierComponent;
    'minecraft:healable': EntityHealableComponent;
    'minecraft:health': EntityHealthComponent;
    'minecraft:inventory': EntityInventoryComponent;
    'minecraft:is_baby': EntityIsBabyComponent;
    'minecraft:is_charged': EntityIsChargedComponent;
    'minecraft:is_chested': EntityIsChestedComponent;
    'minecraft:is_dyeable': EntityIsDyeableComponent;
    'minecraft:is_hidden_when_invisible': EntityIsHiddenWhenInvisibleComponent;
    'minecraft:is_ignited': EntityIsIgnitedComponent;
    'minecraft:is_illager_captain': EntityIsIllagerCaptainComponent;
    'minecraft:is_saddled': EntityIsSaddledComponent;
    'minecraft:is_shaking': EntityIsShakingComponent;
    'minecraft:is_sheared': EntityIsShearedComponent;
    'minecraft:is_stackable': EntityIsStackableComponent;
    'minecraft:is_stunned': EntityIsStunnedComponent;
    'minecraft:is_tamed': EntityIsTamedComponent;
    'minecraft:item': EntityItemComponent;
    'minecraft:lava_movement': EntityLavaMovementComponent;
    'minecraft:leashable': EntityLeashableComponent;
    'minecraft:mark_variant': EntityMarkVariantComponent;
    'minecraft:movement': EntityMovementComponent;
    'minecraft:movement.amphibious': EntityMovementAmphibiousComponent;
    'minecraft:movement.basic': EntityMovementBasicComponent;
    'minecraft:movement.fly': EntityMovementFlyComponent;
    'minecraft:movement.generic': EntityMovementGenericComponent;
    'minecraft:movement.glide': EntityMovementGlideComponent;
    'minecraft:movement.hover': EntityMovementHoverComponent;
    'minecraft:movement.jump': EntityMovementJumpComponent;
    'minecraft:movement.skip': EntityMovementSkipComponent;
    'minecraft:movement.sway': EntityMovementSwayComponent;
    'minecraft:navigation.climb': EntityNavigationClimbComponent;
    'minecraft:navigation.float': EntityNavigationFloatComponent;
    'minecraft:navigation.fly': EntityNavigationFlyComponent;
    'minecraft:navigation.generic': EntityNavigationGenericComponent;
    'minecraft:navigation.hover': EntityNavigationHoverComponent;
    'minecraft:navigation.walk': EntityNavigationWalkComponent;
    'minecraft:npc': EntityNpcComponent;
    'minecraft:onfire': EntityOnFireComponent;
    'minecraft:player.exhaustion': EntityExhaustionComponent;
    'minecraft:player.hunger': EntityHungerComponent;
    'minecraft:player.saturation': EntitySaturationComponent;
    'minecraft:projectile': EntityProjectileComponent;
    'minecraft:push_through': EntityPushThroughComponent;
    'minecraft:rideable': EntityRideableComponent;
    'minecraft:riding': EntityRidingComponent;
    'minecraft:scale': EntityScaleComponent;
    'minecraft:skin_id': EntitySkinIdComponent;
    'minecraft:strength': EntityStrengthComponent;
    'minecraft:tameable': EntityTameableComponent;
    'minecraft:tamemount': EntityTameMountComponent;
    'minecraft:type_family': EntityTypeFamilyComponent;
    'minecraft:underwater_movement': EntityUnderwaterMovementComponent;
    'minecraft:variant': EntityVariantComponent;
    'minecraft:wants_jockey': EntityWantsJockeyComponent;
    movement: EntityMovementComponent;
    'movement.amphibious': EntityMovementAmphibiousComponent;
    'movement.basic': EntityMovementBasicComponent;
    'movement.fly': EntityMovementFlyComponent;
    'movement.generic': EntityMovementGenericComponent;
    'movement.glide': EntityMovementGlideComponent;
    'movement.hover': EntityMovementHoverComponent;
    'movement.jump': EntityMovementJumpComponent;
    'movement.skip': EntityMovementSkipComponent;
    'movement.sway': EntityMovementSwayComponent;
    'navigation.climb': EntityNavigationClimbComponent;
    'navigation.float': EntityNavigationFloatComponent;
    'navigation.fly': EntityNavigationFlyComponent;
    'navigation.generic': EntityNavigationGenericComponent;
    'navigation.hover': EntityNavigationHoverComponent;
    'navigation.walk': EntityNavigationWalkComponent;
    npc: EntityNpcComponent;
    onfire: EntityOnFireComponent;
    'player.exhaustion': EntityExhaustionComponent;
    'player.hunger': EntityHungerComponent;
    'player.saturation': EntitySaturationComponent;
    projectile: EntityProjectileComponent;
    push_through: EntityPushThroughComponent;
    rideable: EntityRideableComponent;
    riding: EntityRidingComponent;
    scale: EntityScaleComponent;
    skin_id: EntitySkinIdComponent;
    strength: EntityStrengthComponent;
    tameable: EntityTameableComponent;
    tamemount: EntityTameMountComponent;
    type_family: EntityTypeFamilyComponent;
    underwater_movement: EntityUnderwaterMovementComponent;
    variant: EntityVariantComponent;
    wants_jockey: EntityWantsJockeyComponent;
};

/**
 * @beta
 */
export type EntityIdentifierType<T> = [T] extends [never]
    ? VanillaEntityIdentifier
    : T extends string
      ? VanillaEntityIdentifier | T
      : never;

export type ItemComponentReturnType<T extends string> = T extends keyof ItemComponentTypeMap
    ? ItemComponentTypeMap[T]
    : ItemCustomComponentInstance;

export type ItemComponentTypeMap = {
    block_actor_dynamic_properties: ItemBlockDynamicPropertiesComponent;
    book: ItemBookComponent;
    compostable: ItemCompostableComponent;
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    dyeable: ItemDyeableComponent;
    enchantable: ItemEnchantableComponent;
    food: ItemFoodComponent;
    inventory: ItemInventoryComponent;
    'minecraft:block_actor_dynamic_properties': ItemBlockDynamicPropertiesComponent;
    'minecraft:book': ItemBookComponent;
    'minecraft:compostable': ItemCompostableComponent;
    'minecraft:cooldown': ItemCooldownComponent;
    'minecraft:durability': ItemDurabilityComponent;
    'minecraft:dyeable': ItemDyeableComponent;
    'minecraft:enchantable': ItemEnchantableComponent;
    'minecraft:food': ItemFoodComponent;
    'minecraft:inventory': ItemInventoryComponent;
    'minecraft:potion': ItemPotionComponent;
    potion: ItemPotionComponent;
};

/**
 * @beta
 */
export type VanillaEntityIdentifier =
    | EntityType
    | MinecraftEntityTypes
    | `${MinecraftEntityTypes}`
    | `${MinecraftEntityTypes}<${string}>`;

/**
 * 处理存在于 world.aimAssist 注册表中的瞄准辅助分类的句柄。
 * 
 * Handle to an aim-assist category that exists in the
 * world.aimAssist registry.
 */
export class AimAssistCategory {
    private constructor();
    /**
     * @remarks
     * 用于未在 getBlockPriorities 中找到的方块类型的默认瞄准优先级。
     * 
     * Default targeting priority used for block types not found in
     * getBlockPriorities.
     *
     * @throws This property can throw when used.
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * 用于未在 getEntityPriorities 中找到的实体类型的默认瞄准优先级。
     * 
     * Default targeting priority used for entity types not found
     * in getEntityPriorities.
     *
     * @throws This property can throw when used.
     */
    readonly defaultEntityPriority: number;
    /**
     * @remarks
     * 与该分类关联的唯一 ID。
     * 
     * The unique Id associated with the category.
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     * 
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * 记录方块 ID 到其优先级设置的映射。数字越大，优先级越高。
     * 
     * The record mapping block Ids to their priority settings.
     * Larger numbers have greater priority.
     * @throws This function can throw errors.
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     * 
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * 记录方块标签到其优先级设置的映射。数字越大，优先级越高。
     * 
     * The record mapping block tags to their priority settings.
     * Larger numbers have greater priority.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     * 
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * 记录实体 ID 到其优先级设置的映射。数字越大，优先级越高。
     * 
     * The record mapping entity Ids to their priority settings.
     * Larger numbers have greater priority.
     * @throws This function can throw errors.
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     * 
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * 将实体类型家族映射到 Record 中的优先级设置。数字越大，优先级越高。
     * 
     * Map entity type families to their priority settings in a
     * Record. Larger numbers have greater priority.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
}

/**
 * 与 AimAssistRegistry.addCategory 一起使用的设置，用于创建 AimAssistCategory。
 * 
 * Settings used with AimAssistRegistry.addCategory for
 * creation of the AimAssistCategory.
 */
export class AimAssistCategorySettings {
    /**
     * @remarks
     * 可选。用于未提供给 setBlockPriorities 的方块类型的默认瞄准优先级。
     * 
     * Optional. Default targeting priority used for block types
     * not provided to setBlockPriorities.
     *
     * @worldMutation
     *
     */
    defaultBlockPriority: number;
    /**
     * @remarks
     * 可选。用于未提供给 setEntityPriorities 的实体类型的默认瞄准优先级。
     * 
     * Optional. Default targeting priority used for entity types
     * not provided to setEntityPriorities.
     *
     * @worldMutation
     *
     */
    defaultEntityPriority: number;
    /**
     * @remarks
     * 用于注册分类的唯一 ID。必须具有命名空间。
     * 
     * The unique Id used to register the category with. Must have
     * a namespace.
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 构造函数，接受一个唯一 ID 来与创建的 AimAssistCategory 关联。必须具有命名空间。
     * 
     * Constructor that takes a unique Id to associate with the
     * created AimAssistCategory. Must have a namespace.
     *
     */
    constructor(identifier: string);
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     * 
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * 记录方块 ID 到其优先级设置的映射。数字越大，优先级越高。
     * 
     * The record mapping block Ids to their priority settings.
     * Larger numbers have greater priority.
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     * 
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * 记录方块标签到其优先级设置的映射。数字越大，优先级越高。
     * 
     * The record mapping block tags to their priority settings.
     * Larger numbers have greater priority.
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     * 
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * 记录实体 ID 到其优先级设置的映射。数字越大，优先级越高。
     * 
     * The record mapping entity Ids to their priority settings.
     * Larger numbers have greater priority.
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     * 
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * 将实体类型家族映射到 Record 中的优先级设置。数字越大，优先级越高。
     * 
     * Map entity type families to their priority settings in a
     * Record. Larger numbers have greater priority.
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
    /**
     * @remarks
     * 设置用于方块瞄准的优先级设置。
     * 
     * Sets the priority settings used for block targeting.
     *
     * @worldMutation
     *
     * @param blockPriorities
     * 将方块 ID 映射到其优先级设置的记录。数字越大，优先级越高。
     * 
     * A record mapping block Ids to their priority settings.
     * Larger numbers have greater priority.
     */
    setBlockPriorities(
        blockPriorities: Record<keyof typeof MinecraftBlockTypes | string, number>,
    ): void;
    /**
     * @remarks
     * 设置用于方块瞄准的优先级设置。
     * 
     * Sets the priority settings used for block targeting.
     *
     * @worldMutation
     *
     */
    setBlockTagPriorities(blockTagPriorities: Record<string, number>): void;
    /**
     * @remarks
     * 设置用于实体瞄准的优先级设置。
     * 
     * Sets the priority settings used for entity targeting.
     *
     * @worldMutation
     *
     * @param entityPriorities
     * 将实体 ID 映射到其优先级设置的记录。数字越大，优先级越高。
     * 
     * A record mapping entity Ids to their priority settings.
     * Larger numbers have greater priority.
     */
    setEntityPriorities(
        entityPriorities: Record<keyof typeof MinecraftEntityTypes | string, number>,
    ): void;
    /**
     * @remarks
     * 设置用于实体瞄准的优先级设置。
     * 
     * Sets the priority settings used for entity targeting.
     *
     * @worldMutation
     *
     */
    setEntityTypeFamilyPriorities(entityTypeFamilyPriorities: Record<string, number>): void;
}

/**
 * 处理存在于 world.aimAssist 注册表中的瞄准辅助预设的句柄。
 * 
 * Handle to an aim-assist preset that exists in the
 * world.aimAssist registry.
 */
export class AimAssistPreset {
    private constructor();
    /**
     * @remarks
     * 可选。用于未提供给 setItemSettings 的项目的默认瞄准辅助分类 ID。
     * 
     * Optional. Default aim-assist category Id used for items not
     * provided to setItemSettings.
     *
     * @throws This property can throw when used.
     */
    readonly defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手的瞄准辅助分类 ID。
     * 
     * Optional. Aim-assist category Id used for an empty hand.
     *
     * @throws This property can throw when used.
     */
    readonly handSettings?: string;
    /**
     * @remarks
     * 与该预设关联的唯一 ID。
     * 
     * The unique Id associated with the preset.
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块标签列表。
     * 
     * Gets the list of block tags to exclude from aim assist
     * targeting.
     *
     * @returns
     * 方块标签数组。
     * 
     * The array of block tags.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getExcludedBlockTagTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块 ID 列表。
     * 
     * Gets the list of block Ids to exclude from aim assist
     * targeting.
     *
     * @returns
     * 方块 ID 数组。
     * 
     * The array of block Ids.
     * @throws This function can throw errors.
     */
    getExcludedBlockTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体 ID 列表。
     * 
     * Gets the list of entity Ids to exclude from aim assist
     * targeting.
     *
     * @returns
     * 实体 ID 数组。
     * 
     * The array of entity Ids.
     * @throws This function can throw errors.
     */
    getExcludedEntityTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体类型家族列表。
     * 
     * Gets the list of entity type families to exclude from aim
     * assist targeting.
     *
     * @returns
     * 实体类型家族数组。
     * 
     * The array of entity type families.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getExcludedEntityTypeFamilyTargets(): string[];
    /**
     * @remarks
     * 获取每个物品的瞄准辅助分类 ID。
     * 
     * Gets the per-item aim-assist category Ids.
     *
     * @returns
     * 记录物品 ID 到瞄准辅助分类 ID 的映射。
     * 
     * The record mapping item Ids to aim-assist category Ids.
     * @throws This function can throw errors.
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * 获取手持时将通过瞄准辅助瞄准液体方块的物品 ID 列表。
     * 
     * Gets the list of item Ids that will target liquid blocks
     * with aim-assist when being held.
     *
     * @returns
     * 物品 ID 数组。
     * 
     * The array of item Ids.
     * @throws This function can throw errors.
     */
    getLiquidTargetingItems(): string[];
}

/**
 * 与 AimAssistRegistry.addPreset 一起使用的设置，用于创建 AimAssistPreset。
 * 
 * Settings used with AimAssistRegistry.addPreset for creation
 * of the AimAssistPreset.
 */
export class AimAssistPresetSettings {
    /**
     * @remarks
     * 可选。用于未提供给 setItemSettings 的项目的默认瞄准辅助分类 ID。
     * 
     * Optional. Default aim-assist category Id used for items not
     * provided to setItemSettings.
     *
     * @worldMutation
     *
     */
    defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手的瞄准辅助分类 ID。
     * 
     * Optional. Aim-assist category Id used for an empty hand.
     *
     * @worldMutation
     *
     */
    handSettings?: string;
    /**
     * @remarks
     * 用于注册预设的唯一 ID。必须具有命名空间。
     * 
     * The unique Id used to register the preset with. Must have a
     * namespace.
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 构造函数，接受一个唯一 ID 来与创建的 AimAssistPreset 关联。必须具有命名空间。
     * 
     * Constructor that takes a unique Id to associate with the
     * created AimAssistPreset. Must have a namespace.
     *
     */
    constructor(identifier: string);
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块标签列表。
     * 
     * Gets the list of block tags to exclude from aim assist
     * targeting.
     *
     * @returns
     * 方块标签数组。
     * 
     * The array of block tags.
     */
    getExcludedBlockTagTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块 ID 列表。
     * 
     * Gets the list of block Ids to exclude from aim assist
     * targeting.
     *
     * @returns
     * 方块 ID 数组。
     * 
     * The array of block Ids.
     */
    getExcludedBlockTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体 ID 列表。
     * 
     * Gets the list of entity Ids to exclude from aim assist
     * targeting.
     *
     * @returns
     * 实体 ID 数组。
     * 
     * The array of entity Ids.
     */
    getExcludedEntityTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体类型家族列表。
     * 
     * Gets the list of entity type families to exclude from aim
     * assist targeting.
     *
     * @returns
     * 实体类型家族数组。
     * 
     * The array of entity type families.
     */
    getExcludedEntityTypeFamilyTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取每个物品的瞄准辅助分类 ID。
     * 
     * Gets the per-item aim-assist category Ids.
     *
     * @returns
     * 记录物品 ID 到瞄准辅助分类 ID 的映射。
     * 
     * The record mapping item Ids to aim-assist category Ids.
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * 获取手持时将通过瞄准辅助瞄准液体方块的物品 ID 列表。
     * 
     * Gets the list of item Ids that will target liquid blocks
     * with aim-assist when being held.
     *
     * @returns
     * 物品 ID 数组。
     * 
     * The array of item Ids.
     */
    getLiquidTargetingItems(): string[] | undefined;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的方块标签列表。
     * 
     * Sets the list of block tags to exclude from aim assist
     * targeting.
     *
     * @worldMutation
     *
     * @param targets
     * 方块标签数组。
     * 
     * An array of block tags.
     */
    setExcludedBlockTagTargets(targets?: string[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的方块 ID 列表。
     * 
     * Sets the list of block Ids to exclude from aim assist
     * targeting.
     *
     * @worldMutation
     *
     * @param targets
     * 方块 ID 数组。
     * 
     * An array of block Ids.
     */
    setExcludedBlockTargets(targets?: (keyof typeof MinecraftBlockTypes | string)[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的实体 ID 列表。
     * 
     * Sets the list of entity Ids to exclude from aim assist
     * targeting.
     *
     * @worldMutation
     *
     * @param targets
     * 实体 ID 数组。
     * 
     * An array of entity Ids.
     */
    setExcludedEntityTargets(targets?: (keyof typeof MinecraftEntityTypes | string)[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的实体类型家族列表。
     * 
     * Sets the list of entity type families to exclude from aim
     * assist targeting.
     *
     * @worldMutation
     *
     * @param targets
     * 实体类型家族数组。
     * 
     * An array of entity type families.
     */
    setExcludedEntityTypeFamilyTargets(targets?: string[]): void;
    /**
     * @remarks
     * 设置每个物品的瞄准辅助分类 ID。
     * 
     * Sets the per-item aim-assist category Ids.
     *
     * @worldMutation
     *
     * @param itemSettings
     * 记录物品 ID 到瞄准辅助分类 ID 的映射。分类 ID 必须具有命名空间。
     * 
     * A record mapping item Ids to aim-assist category Ids.
     * Category Ids must have a namespace.
     */
    setItemSettings(itemSettings: Record<keyof typeof MinecraftItemTypes | string, string>): void;
    /**
     * @remarks
     * 设置手持时将通过瞄准辅助瞄准液体方块的物品 ID 列表。
     * 
     * Sets the list of item Ids that will target liquid blocks
     * with aim-assist when being held.
     *
     * @worldMutation
     *
     * @param items
     * 物品 ID 数组。
     * 
     * An array of item Ids.
     */
    setLiquidTargetingItems(items?: (keyof typeof MinecraftItemTypes | string)[]): void;
}

/**
 * 用于管理世界瞄准辅助设置的 API 容器。
 * 
 * A container for APIs related to the world's aim-assist
 * settings.
 */
export class AimAssistRegistry {
    private constructor();
    /**
     * @remarks
     * 未另行指定时使用的默认瞄准辅助分类 ID。
     * 
     * The default aim-assist category Id that is used when not
     * otherwise specified.
     *
     */
    static readonly DefaultCategoryId = 'minecraft:default';
    /**
     * @remarks
     * 未另行指定时使用的默认瞄准辅助预设 ID。
     * 
     * The default aim-assist preset Id that is used when not
     * otherwise specified.
     *
     */
    static readonly DefaultPresetId = 'minecraft:aim_assist_default';
    /**
     * @remarks
     * 向注册表添加一个瞄准辅助分类。
     * 
     * Adds an aim-assist category to the registry.
     *
     * @worldMutation
     *
     * @param category
     * 用于创建新分类的分类设置。
     * 
     * The category settings used to create the new category.
     * @returns
     * 创建的分类句柄。
     * 
     * The created category handle.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addCategory(category: AimAssistCategorySettings): AimAssistCategory;
    /**
     * @remarks
     * 向注册表添加一个瞄准辅助预设。
     * 
     * Adds an aim-assist preset to the registry.
     *
     * @worldMutation
     *
     * @param preset
     * 用于创建新预设的预设设置。
     * 
     * The preset settings used to create the new preset.
     * @returns
     * 创建的预设句柄。
     * 
     * The created preset handle.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
    /**
     * @remarks
     * 获取注册表中所有可用的分类。
     * 
     * Gets all available categories in the registry.
     *
     * @returns
     * 所有可用分类对象的数组。
     * 
     * An array of all available category objects.
     */
    getCategories(): AimAssistCategory[];
    /**
     * @remarks
     * 获取与提供的 ID 关联的分类。
     * 
     * Gets the category associated with the provided Id.
     *
     * @worldMutation
     *
     * @returns
     * 如果存在则返回分类对象，否则返回 undefined。
     * 
     * The category object if it exists, otherwise returns
     * undefined.
     */
    getCategory(categoryId: string): AimAssistCategory | undefined;
    /**
     * @remarks
     * 获取与提供的 ID 关联的预设。
     * 
     * Gets the preset associated with the provided Id.
     *
     * @worldMutation
     *
     * @param presetId
     * 要检索的预设的 ID。必须具有命名空间。
     * 
     * The Id of the preset to retrieve. Must have a namespace.
     * @returns
     * 如果存在则返回预设对象，否则返回 undefined。
     * 
     * The preset object if it exists, otherwise returns undefined.
     */
    getPreset(presetId: string): AimAssistPreset | undefined;
    /**
     * @remarks
     * 获取注册表中所有可用的预设。
     * 
     * Gets all available presets in the registry.
     *
     * @returns
     * 所有可用预设对象的数组。
     * 
     * An array of all available preset objects.
     */
    getPresets(): AimAssistPreset[];
}

/**
 * @beta
 * 描述单个旗帜图案，包括颜色和图案类型。
 * 
 * Describes a single banner pattern, which includes a colour
 * and a pattern type.
 */
export class BannerPattern {
    private constructor();
    /**
     * @remarks
     * 应用于此旗帜图案的颜色。
     * 
     * The color to apply to this banner pattern.
     *
     */
    readonly color: string;
    /**
     * @remarks
     * 应用于旗帜的图案类型（例如渐变、V 形、十字等）。
     * 
     * The pattern type (e.g. gradient, chevron, cross, etc.) to
     * apply to the banner.
     *
     */
    readonly pattern: string;
}

/**
 * 描述一种生物群系类型。
 * 
 * Describes a type of biome.
 */
export class BiomeType {
    private constructor();
    /**
     * @remarks
     * 生物群系类型的标识符。
     * 
     * Identifier of the biome type.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 返回该生物群系的标签列表。
     * 
     * Returns a list of the biome's tags.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查生物群系是否拥有所有提供的标签。
     * 
     * Checks if the biome has all of the provided tags.
     *
     * @param tags
     * 要检查的标签列表。
     * 
     * The list of tags to check against the biome.
     */
    hasTags(tags: string[]): boolean;
}

/**
 * 支持 Minecraft 中注册的可用生物群系类型目录。
 * 
 * Supports a catalog of available biome types registered
 * within Minecraft.
 */
export class BiomeTypes {
    private constructor();
    /**
     * @remarks
     * 返回特定的生物群系类型。
     * 
     * Returns a specific biome type.
     *
     * @param typeName
     * 生物群系的标识符。通常应使用命名空间标识符（例如 minecraft:frozen_peaks）。
     * 
     * Identifier of the biome.  Generally, namespaced identifiers
     * (e.g., minecraft:frozen_peaks) should be used.
     * @returns
     * 如果生物群系存在，则返回 BiomeType 对象。如果不存在，则返回 undefined。
     * 
     * If the biome exists, a BiomeType object is returned. If not,
     * undefined is returned.
     */
    static get(typeName: string): BiomeType | undefined;
    /**
     * @remarks
     * 返回 Minecraft 中所有注册的生物群系类型。
     * 
     * Returns all registered biome types within Minecraft
     *
     */
    static getAll(): BiomeType[];
}

/**
 * 表示世界维度中的特定位置的方块。
 * 方块对象对应了唯一的 X、Y、Z 与维度，可用于读取或修改此位置的方块状态。
 * 此类型在 1.17.10.21 有重大更新。
 * 
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
export class Block {
    private constructor();
    /**
     * @remarks
     * 返回方块所在维度对象。
     *
     * Returns the dimension that the block is within.
     *
     * @returns
     * 方块所在维度对象。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 返回 true 如果这个方块是空气方块（例如，空的空间）
     *
     * Returns true if this block is an air block (i.e., empty
     * space).
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isAir: boolean;
    /**
     * @remarks
     * 如果这个方块是液体方块，例如水方块和熔岩方块等，则返回 true。
     * 空气方块和石头方块等则不属于液体方块。
     * 含水方块不算作液体方块。
     *
     * Returns true if this block is a liquid block - (e.g., a
     * water block and a lava block are liquid, while an air block
     * and a stone block are not. Water logged blocks are not
     * liquid blocks).
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isLiquid: boolean;
    /**
     * @beta
     * @remarks
     * 如果该块是实心且不可通行的，则返回 true
     * -（例如，圆石和钻石块是实心方块，而梯子和栅栏则不是）。
     *
     * Returns true if this block is solid and impassible - (e.g.,
     * a cobblestone block and a diamond block are solid, while a
     * ladder block and a fence block are not).
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isSolid: boolean;
    /**
     * @remarks
     * Returns true if this reference to a block is still valid
     * (for example, if the block is unloaded, references to that
     * block will no longer be valid.)
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 返回或设置该方块是否含水。
     *
     * Returns or sets whether this block has water on it.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isWaterlogged: boolean;
    /**
     * @remarks
     * Key for the localization of this block's name used in .lang
     * files.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 该方块的坐标。
     *
     * Coordinates of the specified block.
     *
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 描述该方块的附加配置数据。
     * （常称为方块状态）
     *
     * Additional block configuration data that describes the
     * block.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly permutation: BlockPermutation;
    /**
     * @remarks
     * 获取方块的类型。
     *
     * Gets the type of block.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * 该方块的类型标识符。
     *
     * Identifier of the type of block for this block. Warning:
     * Vanilla block names can be changed in future releases, try
     * using 'Block.matches' instead for block comparison.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly typeId: string;
    /**
     * @remarks
     * 方块的 X 坐标。
     *
     * X coordinate of the block.
     *
     */
    readonly x: number;
    /**
     * @remarks
     * 方块的 Y 坐标。
     *
     * Y coordinate of the block.
     *
     */
    readonly y: number;
    /**
     * @remarks
     * 方块的 Z 坐标。
     *
     * Z coordinate of the block.
     *
     */
    readonly z: number;
    /**
     * @remarks
     * 返回该方块上方的 {@link Block}（Y 方向正方向）。
     *
     * Returns the {@link Block} above this block (positive in the
     * Y direction).
     *
     * @param steps
     * 返回之前要执行的步骤数。
     * 留空默认为一。
     * （返回的方块在原方块上方的距离）。
     *
     * Number of steps above to step before returning.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    above(steps?: number): Block | undefined;
    /**
     * @remarks
     * 返回该方块下方的{@link Block}（Y 方向为负）。
     *
     * Returns the {@link Block} below this block (negative in the
     * Y direction).
     *
     * @param steps
     * 向下的步数。
     * 留空默认为一。
     *
     * Number of steps below to step before returning.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    below(steps?: number): Block | undefined;
    /**
     * @remarks
     * 返回该方块在 X 轴和 Z 轴上的中心的 {@link Vector3}。
     *
     * Returns the {@link Vector3} of the center of this block on
     * the X and Z axis.
     *
     */
    bottomCenter(): Vector3;
    /**
     * @remarks
     * Returns whether this block is removed when touched by
     * liquid.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether this block is removed when touched by liquid.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * Returns whether this block can have a liquid placed over it,
     * i.e. be waterlogged.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether this block can have a liquid placed over it.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @beta
     * @remarks
     * Returns whether this block is removed when touched by
     * liquid.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether this block is removed when touched by liquid.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @beta
     * @remarks
     * Returns whether this block can have a liquid placed over it,
     * i.e. be waterlogged.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether this block can have a liquid placed over it.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @beta
     * @remarks
     * 检查在该方块的指定面上放置{@link BlockPermutation}或{@link BlockType}或指定标识符的方块是否可行。
     *
     * Checks to see whether it is valid to place the specified
     * block type or block permutation, on a specified face on this
     * block.
     *
     * @param blockToPlace
     * 被检查放置可行性的{@link BlockPermutation}或{@link BlockType}或方块标识符。
     *
     * Block type or block permutation to check placement for.
     * @param faceToPlaceOn
     * 被检查放置的方向（可选）。
     *
     * Optional specific face of this block to check placement
     * against.
     * @returns
     * 如果在此面可以放置这样的方块则返回 `true` 。
     *
     * Returns `true` if the block type or permutation can be
     * placed on this block, else `false`.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean;
    /**
     * @remarks
     * 返回该方块在 X、Y 和 Z 轴上中心的 {@link Vector3}。
     *
     * Returns the {@link Vector3} of the center of this block on
     * the X, Y, and Z axis.
     *
     */
    center(): Vector3;
    /**
     * @remarks
     * 返回位于该方块东侧（X轴正方向）的 {@link Block}。
     *
     * Returns the {@link Block} to the east of this block
     * (positive in the X direction).
     *
     * @param steps
     * 向东的步数。
     *
     * Number of steps to the east to step before returning.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    east(steps?: number): Block | undefined;
    /**
     * @remarks
     * 获取一个方块的组件（代表附加功能），例如，一个箱子方块的库存组件。
     *
     * Gets a component (that represents additional capabilities)
     * for a block - for example, an inventory component of a chest
     * block.
     *
     * @param componentId
     * 组件的标识符 （例如 'minecraft:inventory'）。
     * 如果未指定命名空间前缀，将默认使用 'minecraft:'。
     * 可用的组件标识符可以在 {@link BlockComponentTypes} 枚举中找到。
     *
     * The identifier of the component (e.g.,
     * 'minecraft:inventory'). If no namespace prefix is specified,
     * 'minecraft:' is assumed. Available component IDs are those
     * in the {@link BlockComponentTypes} enum and custom component
     * IDs registered with the {@link BlockComponentRegistry}.
     * @returns
     * 如果该组件存在于该方块，则返回该组件。
     * 否则返回 undefined。
     *
     * Returns the component if it exists on the block, otherwise
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponent<T extends string>(componentId: T): BlockComponentReturnType<T> | undefined;
    /**
     * @remarks
     * Returns all scripting components that are present on this
     * block.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponents(): BlockComponent[];
    /**
     * @remarks
     * 创建一个基于该方块的原型物品对象-{@link ItemStack}，可以与 {@link Container}/{@link ContainerSlot} 接口 一起使用。
     *
     * Creates a prototype item stack based on this block that can
     * be used with Container/ContainerSlot APIs.
     *
     * @param amount
     * 要设置在物品对象-{@link ItemStack}中的这个方块的数量。
     *
     * Number of instances of this block to place in the item
     * stack.
     * Defaults to: 1
     * Bounds: [1, 255]
     * @param withData
     * 是否包括物品对象的附加数据。
     *
     * Whether additional data facets of the item stack are
     * included.
     * Defaults to: false
     * @returns
     * 一个带有指定数量和数据的物品对象。
     * 如果方块类型不兼容，则返回 undefined。
     *
     * An itemStack with the specified amount of items and data.
     * Returns undefined if block type is incompatible.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;
    /**
     * @remarks
     * Returns the total brightness level of light shining on a
     * certain block.
     *
     * @worldMutation
     *
     * @returns
     * The brightness level on the block.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(): number;
    /**
     * @beta
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getMapColor(): RGBA;
    /**
     * @rc
     * @remarks
     * Returns array of all loaded block parts if this block has
     * the 'minecraft:multi_block' trait. If it does not have the
     * trait returns undefined
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getParts(): Block[] | undefined;
    /**
     * @remarks
     * 返回该方块的净红石能量强度。
     * 考虑了所有输入和输出后的总红石能量强度。
     * 表示了一个方块与周围环境中所有红石元件的相互作用后的红石能量状态。
     *
     * Returns the net redstone power of this block.
     *
     * @returns
     * 如果这个方块不适用红石能量，返回 undefined。
     *
     * Returns undefined if redstone power is not applicable to
     * this block.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getRedstonePower(): number | undefined;
    /**
     * @remarks
     * Returns the brightness level of light shining from the sky
     * on a certain block.
     *
     * @worldMutation
     *
     * @returns
     * The brightness level on the block.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(): number;
    /**
     * @remarks
     * 返回方块被设置的标签的列表。
     *
     * Returns a set of tags for a block.
     *
     * @returns
     * 方块拥有的标签列表。
     *
     * The list of tags that the block has.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * block.
     *
     * @param componentId
     * The identifier of the component (e.g.,
     * 'minecraft:inventory') to retrieve. If no namespace prefix
     * is specified, 'minecraft:' is assumed.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * 检查该方块的{@link BlockPermutation}是否具有特定的标签。
     *
     * Checks to see if the permutation of this block has a
     * specific tag.
     *
     * @param tag
     * 要检查的标签。
     *
     * Tag to check for.
     * @returns
     * 如果该方块的{@link BlockPermutation}具有该标签，则返回 `true`，否则返回 `false`。
     *
     * Returns `true` if the permutation of this block has the tag,
     * else `false`.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample checkBlockTags.ts
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this block stops liquid from flowing.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether this block stops liquid from flowing.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * Returns whether liquid can flow into the block from the
     * provided direction, or flow out from the provided direction
     * when liquid is placed into it with a bucket.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether liquid can flow into the block from the provided
     * direction, or flow out from the provided direction when
     * liquid is placed into it with a bucket
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    liquidCanFlowFromDirection(liquidType: LiquidType, flowDirection: Direction): boolean;
    /**
     * @remarks
     * Returns whether this block is removed and spawns its item
     * when touched by liquid.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether this block is removed and spawns its item when
     * touched by liquid.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * Tests whether this block matches a specific criteria.
     *
     * @param blockName
     * Block type identifier to match this API against.
     * @param states
     * Optional set of block states to test this block against.
     * @returns
     * Returns true if the block matches the specified criteria.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks
     * 返回位于该方块北侧（Z轴负方向）的 {@link Block}。
     *
     * Returns the {@link Block} to the north of this block
     * (negative in the Z direction).
     *
     * @param steps
     * 在返回之前，向北移动的步数。
     *
     * Number of steps to the north to step before returning.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    north(steps?: number): Block | undefined;
    /**
     * @remarks
     * Returns a block at an offset relative vector to this block.
     *
     * @param offset
     * The offset vector. For example, an offset of 0, 1, 0 will
     * return the block above the current block.
     * @returns
     * Block at the specified offset, or undefined if that block
     * could not be retrieved (for example, the block and its
     * relative chunk is not loaded yet.)
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    offset(offset: Vector3): Block | undefined;
    /**
     * @remarks
     * 在维度中将方块设置为{@link BlockPermutation}的状态。
     *
     * Sets the block in the dimension to the state of the
     * permutation.
     *
     * @worldMutation
     *
     * @param permutation
     * 包含方块一组属性状态的{@link BlockPermutation}。
     *
     * Permutation that contains a set of property states for the
     * Block.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * @remarks
     * 设置方块的类型。
     *
     * Sets the type of block.
     *
     * @worldMutation
     *
     * @param blockType
     * 要应用的方块类型的标识符或方块类型，
     * 例如，`minecraft:powered_repeater`。
     *
     * Identifier of the type of block to apply - for example,
     * minecraft:powered_repeater.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setType(blockType: BlockType | string): void;
    /**
     * @remarks
     * Sets whether this block has a water logged state - for
     * example, whether stairs are submerged within water.
     *
     * @worldMutation
     *
     * @param isWaterlogged
     * true if the block should have water within it.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setWaterlogged(isWaterlogged: boolean): void;
    /**
     * @remarks
     * 返回位于该方块南侧（Z轴正方向）的 {@link Block}。
     *
     * Returns the {@link Block} to the south of this block
     * (positive in the Z direction).
     *
     * @param steps
     * 在返回之前，向南移动的步数。
     *
     * Number of steps to the south to step before returning.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    south(steps?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * 首先检查放置是否有效，
     * 如何尝试在维度中将方块设置为{@link BlockPermutation}的状态，
     *
     *
     * Tries to set the block in the dimension to the state of the
     * permutation by first checking if the placement is valid.
     *
     * @worldMutation
     *
     * @param permutation
     * 包含一组方块属性状态的{@link BlockPermutation}。
     *
     * Permutation that contains a set of property states for the
     * Block.
     * @returns
     * 如果成功设置了方块的{@link BlockPermutation}，
     * 则返回 `true`，否则返回 `false`。
     *
     * Returns `true` if the block permutation data was
     * successfully set, else `false`.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
    /**
     * @remarks
     * 返回位于该方块西侧（X轴负方向）的 {@link Block}。
     *
     * Returns the {@link Block} to the west of this block
     * (negative in the X direction).
     *
     * @param steps
     * 在返回之前，向西移动的步数。
     *
     * Number of steps to the west to step before returning.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;
}

/**
 * @beta
 * 边界框工具类，提供许多用于创建和使用 {@link BlockBoundingBox}
 * 对象的有用函数。
 * 
 * Bounding Box Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * BlockBoundingBox} objects
 */
export class BlockBoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * 创建一个经过验证的 {@link BlockBoundingBox} 实例，其中 min 和 max 分量保证满足 (min <= max)。
     * 
     * Create a validated instance of a {@link BlockBoundingBox}
     * where the min and max components are guaranteed to be (min
     * <= max)
     *
     * @worldMutation
     *
     * @param min
     * 一个角落的世界坐标位置。
     * 
     * A corner world location
     * @param max
     * 对角线相对的另一个角落的世界坐标位置。
     * 
     * A corner world location diametrically opposite
     */
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 沿各轴按给定大小扩展一个 {@link BlockBoundingBox}。
     * 大小可以为负数以实现收缩。
     * 注意：如果收缩大小大于跨度，角落可能被反转，但 min/max 关系将保持正确。
     * 
     * Expand a {@link BlockBoundingBox} by a given amount along
     * each axis.
     * Sizes can be negative to perform contraction.
     * Note: corners can be inverted if the contraction size is
     * greater than the span, but the min/max relationship will
     * remain correct
     *
     * @worldMutation
     *
     * @returns
     * 返回一个新的 {@link BlockBoundingBox} 对象，表示更改后的结果。
     * 
     * Return a new {@link BlockBoundingBox} object representing
     * the changes
     */
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 检查两个 {@link BlockBoundingBox} 对象是否完全相同。
     * 
     * Check if two {@link BlockBoundingBox} objects are identical
     *
     * @worldMutation
     *
     */
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 扩展初始 box 对象的边界以包含第二个 box 参数。
     * 生成的 {@link BlockBoundingBox} 对象将是一个恰好包含这两个盒子的 BlockBoundingBox。
     * 
     * Expand the initial box object bounds to include the 2nd box
     * argument.  The resultant {@link BlockBoundingBox} object
     * will be a BlockBoundingBox which exactly encompasses the two
     * boxes.
     *
     * @worldMutation
     *
     * @returns
     * 一个新的 {@link BlockBoundingBox} 实例，表示能够同时包含两者的最小可能边界框。
     * 
     * A new {@link BlockBoundingBox} instance representing the
     * smallest possible bounding box which can encompass both
     */
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    /**
     * @remarks
     * 计算给定 {@link BlockBoundingBox} 对象的中心方块。
     * 
     * Calculate the center block of a given {@link
     * BlockBoundingBox} object.
     *
     * @worldMutation
     *
     * @returns
     * 注意 {@link BlockBoundingBox} 对象表示完整的方块，因此具有奇数边界的盒子的中心在数学上并不居中。
     * 例如，BlockBoundingBox(0,0,0 -> 3,3,3) 的中心为 (1,1,1)（而不是预期的 (1.5,1.5,1.5)）。
     * 
     * Note that {@link BlockBoundingBox} objects represent whole
     * blocks, so the center of boxes which have odd numbered
     * bounds are not mathematically centered...
     * i.e. a BlockBoundingBox( 0,0,0 -> 3,3,3 )  would have a
     * center of (1,1,1)  (not (1.5, 1.5, 1.5) as expected)
     */
    static getCenter(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 计算表示两个相交 BlockBoundingBox 的并集区域的 BlockBoundingBox。
     * 
     * Calculate the BlockBoundingBox which represents the union
     * area of two intersecting BlockBoundingBoxes
     *
     * @worldMutation
     *
     */
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    /**
     * @remarks
     * 获取 BlockBoundingBox 各轴分量的跨度。
     * 
     * Get the Span of each of the BlockBoundingBox Axis components
     *
     * @worldMutation
     *
     */
    static getSpan(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 检查两个 BlockBoundingBox 对象是否相交。
     * 
     * Check to see if two BlockBoundingBox objects intersect
     *
     * @worldMutation
     *
     */
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 检查给定的坐标是否在 BlockBoundingBox 内部。
     * 
     * Check to see if a given coordinate is inside a
     * BlockBoundingBox
     *
     * @worldMutation
     *
     */
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * 检查 BlockBoundingBox 是否有效（即 min <= max）。
     * 
     * Check to see if a BlockBoundingBox is valid (i.e. (min <=
     * max))
     *
     * @worldMutation
     *
     */
    static isValid(box: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 按给定量移动 BlockBoundingBox。
     * 
     * Move a BlockBoundingBox by a given amount
     *
     * @worldMutation
     *
     * @returns
     * 返回一个新的 BlockBoundingBox 对象，表示移动后的结果。
     * 
     * Return a new BlockBoundingBox object which represents the
     * change
     */
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}

/**
 * 与方块相关联的组件的基础类型。
 * 
 * Base type for components associated with blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 此组件所属的方块实例。
     * 
     * Block instance that this component pertains to.
     *
     */
    readonly block: Block;
}

/**
 * 包含有关特定方块被破坏的信息。
 * 
 * Contains information regarding a specific block being
 * broken.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 导致破坏的方块。
     * 
     * The block that caused destruction.
     *
     */
    readonly blockDestructionSource?: Block;
    /**
     * @remarks
     * 返回此方块在被破坏之前的置换信息。
     * 
     * Returns permutation information about this block before it
     * was broken.
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 导致破坏的 Actor。
     * 
     * The Actor that caused destruction.
     *
     */
    readonly entitySource?: Entity;
}

/**
 * 包含有关特定方块置换从之前置换更改的信息。
 * 
 * Contains information regarding a specific block permutation
 * that was changed from a previous permutation.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockStateChangeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 先前的 BlockPermutation。
     * 
     * The previous BlockPermutation.
     *
     */
    readonly previousPermutation: BlockPermutation;
}

/**
 * 包含有关实体向世界中此方块发送事件的信息。
 * 
 * Contains information regarding an event sent by an entity to
 * this block in the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回接收事件的方块的置换信息。
     * 
     * Returns permutation information about the block receiving
     * the event.
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 发送事件的实体。
     * 
     * The entity that sent the event.
     *
     */
    readonly entitySource: Entity;
    /**
     * @remarks
     * 实体触发的事件的名称。
     * 
     * Name of the event fired by the entity.
     *
     */
    readonly name: string;
}

/**
 * 包含有关实体坠落到特定方块上的信息。
 * 
 * Contains information regarding an entity falling onto a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 坠落到方块上的实体。
     * 
     * The entity that fell onto the block.
     *
     */
    readonly entity?: Entity;
    /**
     * @remarks
     * 实体坠落到此方块上的距离。
     * 
     * The distance that the entity fell onto this block with.
     *
     */
    readonly fallDistance: number;
}

/**
 * 包含有关特定方块被放置的信息。
 * 
 * Contains information regarding a specific block that was
 * placed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 在此位置被替换的先前方块。
     * 
     * Previous block at this location that was replaced.
     *
     */
    readonly previousBlock: BlockPermutation;
}

/**
 * 包含有关玩家破坏特定方块的信息。
 * 
 * Contains information regarding a specific block being broken
 * by a player.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回此方块在被破坏之前的置换信息。
     * 
     * Returns permutation information about this block before it
     * was broken.
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 破坏此方块的玩家。
     * 
     * The player that broke this block.
     *
     */
    readonly player?: Player;
}

/**
 * 包含有关特定方块被交互的信息。
 * 
 * Contains information regarding a specific block being
 * interacted with.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被交互的方块面。
     * 
     * The block face that was interacted with.
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 玩家交互的位置，相对于方块的西北下角。
     * 
     * Location relative to the bottom north-west corner of the
     * block that the player interacted with.
     *
     */
    readonly faceLocation?: Vector3;
    /**
     * @remarks
     * 与此方块交互的玩家。
     * 
     * The player that interacted with this block.
     *
     */
    readonly player?: Player;
}

/**
 * 包含有关玩家放置方块之前的事件信息。
 * 
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 `true`，则取消方块放置事件。
     * 
     * If set to true, cancels the block place event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 放置时所朝向的方块面。
     * 
     * The block face that was placed onto.
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 如果事件未被取消，将放置的方块置换。如果设置为不同的方块置换，则将放置该置换。
     * 
     * The block permutation that will be placed if the event is
     * not cancelled. If set to a different block permutation, that
     * permutation will be placed instead.
     *
     */
    permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * 正在放置此方块的玩家。
     * 
     * The player that is placing this block.
     *
     */
    readonly player?: Player;
}

/**
 * 包含有关特定方块随机刻更新的信息。
 * 
 * Contains information regarding a specific block randomly
 * ticking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRandomTickEvent extends BlockEvent {
    private constructor();
}

/**
 * 包含有关特定方块红石更新事件的信息。
 * 
 * Contains information regarding a specific block redstone
 * update event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRedstoneUpdateEvent extends BlockEvent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 红石组件的第一个更新事件。
     * 
     * The first update event for the redstone component.
     *
     */
    readonly firstUpdate: boolean;
    /**
     * @remarks
     * 通过此方块的红石信号强度。保证不小于该方块的 `minecraft:redstone_consumer`
     * 组件的 `min_power` 值。
     * 
     * The redstone signal strength passing through this block. It
     * is guaranteed to be >= the `min_power` of the block's
     * 'minecraft:redstone_consumer' component.
     *
     */
    readonly powerLevel: number;
    /**
     * @remarks
     * 上一刻通过此方块的红石信号强度。保证不小于该方块的 `minecraft:redstone_consumer`
     * 组件的 `min_power` 值。
     * 
     * The redstone signal strength from the last tick that was
     * passing through this block. It is guaranteed to be >= the
     * `min_power` of the block's 'minecraft:redstone_consumer'
     * component.
     *
     */
    readonly previousPowerLevel: number;
}

/**
 * 用于注册方块自定义组件的注册表类。
 * 
 * Registry class for block custom components.
 */
export class BlockComponentRegistry {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link BlockCustomComponentAlreadyRegisteredError}
     *
     * {@link BlockCustomComponentReloadNewComponentError}
     *
     * {@link BlockCustomComponentReloadNewEventError}
     *
     * {@link BlockCustomComponentReloadVersionError}
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}

/**
 * 包含有关实体离开特定方块的信息。
 * 
 * Contains information regarding an entity stepping off a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 离开方块的实体。
     * 
     * The entity that stepped off the block.
     *
     */
    readonly entity?: Entity;
}

/**
 * 包含有关实体踩上特定方块的信息。
 * 
 * Contains information regarding an entity stepping onto a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 踩上方块的实体。
     * 
     * The entity that stepped on the block.
     *
     */
    readonly entity?: Entity;
}

/**
 * 包含有关特定方块刻更新的信息。
 * 
 * Contains information regarding a specific block ticking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentTickEvent extends BlockEvent {
    private constructor();
}

/**
 * 包含有关特定容器方块被关闭的信息。
 * 
 * Contains information regarding a specific container block
 * being closed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerClosedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被关闭的方块容器的来源。
     * 
     * The source of the block container being closed.
     *
     * @worldMutation
     *
     */
    closeSource: ContainerAccessSource;
}

/**
 * 管理与方块容器被关闭时相关的回调。
 * 
 * Manages callbacks that are connected to when a block
 * container is closed.
 */
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在方块容器被关闭时调用的回调。
     * 
     * Adds a callback that will be called when a block container
     * is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在方块容器被关闭时调用的回调。
     * 
     * Removes a callback from being called when a block container
     * is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}

/**
 * 包含有关特定容器方块被打开的信息。
 * 
 * Contains information regarding a specific container block
 * being opened.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerOpenedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被打开的方块容器的来源。
     * 
     * The source of the block container being opened.
     *
     * @worldMutation
     *
     */
    openSource: ContainerAccessSource;
}

/**
 * 管理与方块容器被打开时相关的回调。
 * 
 * Manages callbacks that are connected to when a block
 * container is opened.
 */
export class BlockContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在方块容器被打开时调用的回调。
     * 
     * Adds a callback that will be called when a block container
     * is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: BlockContainerOpenedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在方块容器被打开时调用的回调。
     * 
     * Removes a callback from being called when a block container
     * is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockContainerOpenedAfterEvent) => void): void;
}

/**
 * 方块上自定义组件的一个实例。
 * 
 * An instance of a custom component on a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentInstance extends BlockComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}

/**
 * @beta
 * 表示世界中方块的动态属性。仅适用于方块实体。每个内容包、每个方块实体在其动态属性存储中最多 1KB。
 * @seeExample rememberPlayerInteraction.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockDynamicPropertiesComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:dynamic_properties';
    /**
     * @remarks
     * 返回使用提供的键存储的动态属性。键对于每个内容包是唯一的，不能用于检索从其他内容包设置的动态属性。
     * 如果未找到键，则返回 `undefined`。
     * 
     * Returns a DynamicProperty that was stored with the provided
     * key. Keys are unique to each content pack and cannot be used
     * to retrieve dynamic properties set from other content packs.
     * Returns undefined if the key was not found.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 使用提供的键和值设置动态属性。键对于每个内容包是唯一的，不能用于为其他内容包设置动态属性。
     * 值可以是 Number、String 或 Vector3。使用 `undefined` 值设置属性将将其从存储中移除。
     * 存储大小使用计入每个内容包 1KB 的限制。
     * 
     * Sets a dynamic property with the provided key and value.
     * Keys are unique to each content pack and cannot be used to
     * set dynamic properties for other content packs. Values can
     * be either a Number, a String or a Vector3. Setting a
     * property with an undefined value will remove it from the
     * storage. Storage size usage is counted towards the 1KBytes
     * limit per content pack.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 返回此方块实体动态属性存储的当前大小（以字节为单位）。字节计数仅计算由您的内容包设置的属性。
     * 1KB 限制是每个内容包的。
     * 
     * Returns the current size, in bytes, of the dynamic
     * properties storage for this block entity. The byte count
     * only accounts for properties set by your content pack. The
     * 1KBytes limit is per content pack.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    totalByteCount(): number;
}

/**
 * 包含有关影响特定方块的事件的信息。
 * 
 * Contains information regarding an event that impacts a
 * specific block.
 */
export class BlockEvent {
    private constructor();
    /**
     * @remarks
     * 当前世界中此事件所在位置的方块。
     * 
     * Block currently in the world at the location of this event.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 包含此事件主题方块的维度。
     * 
     * Dimension that contains the block that is the subject of
     * this event.
     *
     */
    readonly dimension: Dimension;
}

/**
 * 包含有关特定方块发生爆炸的信息。
 * 
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 已爆炸的方块的描述。
     * 
     * Description of the block that has exploded.
     *
     */
    readonly explodedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 爆炸的可选来源。
     * 
     * Optional source of the explosion.
     *
     */
    readonly source?: Entity;
}

/**
 * 管理与爆炸发生时相关回调，当爆炸影响单个方块时触发。
 * 
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在爆炸发生时调用的回调，当爆炸影响单个方块时触发。
     * 
     * Adds a callback that will be called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在爆炸发生时调用的回调。
     * 
     * Removes a callback from being called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}

/**
 * 表示世界中方块的流体容器。用于像炼药锅这样的方块。
 * 
 * Represents the fluid container of a block in the world. Used
 * with blocks like cauldrons.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 流体容器的相对填充液位。
     * 
     * Relative fill level of the fluid container.
     *
     * @worldMutation
     *
     */
    fillLevel: number;
    /**
     * @remarks
     * 容器中流体的自定义颜色。
     * 
     * Custom color of the fluid in the container.
     *
     * @worldMutation
     *
     */
    fluidColor: RGBA;
    static readonly componentId = 'minecraft:fluid_container';
    /**
     * @remarks
     * 向流体中添加染料。染料颜色将与任何现有的自定义颜色合并。
     * 
     * Adds a dye to the fluid. The dye color is combined with any
     * existing custom color.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addDye(dye: ItemType): void;
    /**
     * @remarks
     * 获取容器中当前的流体类型。
     * 
     * Gets the current fluid type in the container.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getFluidType(): FluidType;
    /**
     * @remarks
     * 设置容器中当前的流体类型。
     * 
     * Sets the current fluid type in the container.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setFluidType(fluidType: FluidType): void;
    /**
     * @remarks
     * 在容器中设置一个药水物品。将容器的流体类型更改为药水。
     * 
     * Sets a potion item in the container. Changes the container's
     * fluid type to potion.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPotion(itemStack: ItemStack): void;
}

/**
 * @beta
 * 表示方块可以分配在其上表面和下表面的乐器。
 * 
 * Represents the instruments a block can have assigned to it's
 * up and down faces.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInstrumentComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:instrument_sound';
    /**
     * @remarks
     * 获取方法，用于获取给定有效面 Direction 的乐器名称。
     * 
     * A getter method to get the name of an instrument for a given
     * valid face Direction.
     *
     * @param face
     * 要获取乐器名称的面 Direction。
     * 
     * the face Direction to get the instrument name for.
     * @returns
     * 返回给定有效面 Direction 的乐器名称。
     * 
     * Returns the name of the instrument for a given valid face
     * Direction.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getInstrumentName(face: Direction): string;
    /**
     * @remarks
     * 在组件的方块位置播放给定有效面 Direction 的乐器声音，使用可选的 WorldSoundOptions。
     * 
     * plays the instrument sound for a given valid face Direction
     * at the components block location using optional
     * WorldSoundOptions.
     *
     * @worldMutation
     *
     * @param face
     * 要播放乐器声音的面 Direction。
     * 
     * the face Direction for which instrument sound to play.
     * @param soundOptions
     * 播放乐器声音时使用的可选 WorldSoundOptions；如果省略，则使用默认值。
     * 
     * optional WorldSoundOptions to use when playing the
     * insturment sound; if omitted the default values are used.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    playInstrumentSound(face: Direction, soundOptions?: WorldSoundOptions): void;
}

/**
 * 表示世界中方块的库存。用于像箱子这样的方块。
 * @seeExample placeItemsInChest.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 持有 {@link ItemStack} 的容器。
     *
     * @throws This property can throw when used.
     */
    readonly container?: Container;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * BlockLocationIterator 返回其正在迭代的方块体积中的下一个方块位置。
 * BlockLocationIterator 用于抽象其获取来源的方块体积的形状（因此它可以表示构成矩形、立方体、球体、线条和复杂形状的所有方块位置）。
 * 每次迭代传递返回父形状中的下一个有效方块位置。
 * 除非父形状另有指定，否则 BlockLocationIterator 将按 X 递增、然后 Z 递增、然后 Y 递增的顺序在 3D 空间中进行迭代。
 * （实际上是在 XZ 平面上逐步移动，当该平面中所有位置都遍历完毕后，将 Y 坐标递增到下一个 XZ 切片）。
 * 
 * A BlockLocationIterator returns the next block location of
 * the block volume across which it is iterating.
 * The BlockLocationIterator is used to abstract the shape of
 * the block volume it was fetched from (so it can represent
 * all the block locations that make up rectangles, cubes,
 * spheres, lines and complex shapes).
 * Each iteration pass returns the next valid block location in
 * the parent shape.
 * Unless otherwise specified by the parent shape - the
 * BlockLocationIterator will iterate over a 3D space in the
 * order of increasing X, followed by increasing Z followed by
 * increasing Y.
 * (Effectively stepping across the XZ plane, and when all the
 * locations in that plane are exhausted, increasing the Y
 * coordinate to the next XZ slice)
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @beta
     * @remarks
     * 检查底层的方块体积是否已失效。如果方块体积在创建迭代器之后和迭代之前被修改，则返回 `false`，否则返回 `true`。
     * 
     * Checks if the underlining block volume has been invalidated.
     * Will return false if the block volume was modified between
     * creating the iterator and iterating it, and true otherwise.
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    isValid(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    next(): IteratorResult<Vector3>;
}

/**
 * 表示方块在地图上显示时的颜色。
 * 
 * Represents the color of a block when displayed on a map.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMapColorComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 为该方块定义的基础地图颜色。
     * 
     * Base map color defined for that block.
     *
     * @throws This property can throw when used.
     */
    readonly color: RGBA;
    /**
     * @remarks
     * 返回基色乘以在给定位置评估的着色值的结果。
     * 
     * Returns the base color multiplied to the evaluated tint at
     * the given position.
     *
     */
    readonly tintedColor: RGBA;
    /**
     * @remarks
     * 应用于颜色的着色类型。
     * 
     * Type of tint applied to the color.
     *
     * @throws This property can throw when used.
     */
    readonly tintMethod: TintMethod;
    static readonly componentId = 'minecraft:map_color';
}

/**
 * 表示可以移动的方块（例如活塞）。
 * 
 * Represents a block that can move (such as a piston).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMovableComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly movementType: MovementType;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly stickyType: StickyType;
    static readonly componentId = 'minecraft:movable';
}

/**
 * 包含类型 {@link BlockType} 和属性（有时也称为方块状态）的组合，用于描述一个方块（但不属于特定的 {@link Block}）。
 * @seeExample addTranslatedSign.ts 9e2fd749
 */
export class BlockPermutation {
    private constructor();
    /**
     * @remarks
     * 此 BlockPermutation 名称在 .lang 文件中使用的本地化键。
     * 
     * Key for the localization of this BlockPermutation's name
     * used in .lang files.
     *
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 置换所具有的 {@link BlockType}。
     * 
     * The {@link BlockType} that the permutation has.
     *
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * 返回此方块在接触液体时是否被移除。
     * 
     * Returns whether this block is removed when touched by
     * liquid.
     *
     * @param liquidType
     * 此函数应为之调用的液体类型。
     * 
     * The type of liquid this function should be called for.
     * @returns
     * 此方块在接触液体时是否被移除。
     * 
     * Whether this block is removed when touched by liquid.
     * @throws This function can throw errors.
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块是否可以在其上放置液体，即被水浸没。
     * 
     * Returns whether this block can have a liquid placed over it,
     * i.e. be waterlogged.
     *
     * @param liquidType
     * 此函数应为之调用的液体类型。
     * 
     * The type of liquid this function should be called for.
     * @returns
     * 此方块是否可以在其上放置液体。
     * 
     * Whether this block can have a liquid placed over it.
     * @throws This function can throw errors.
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回与此方块关联的所有可用方块状态。
     * 
     * Returns all available block states associated with this
     * block.
     *
     * @returns
     * 返回置换所具有的所有方块状态的列表。
     * 
     * Returns the list of all of the block states that the
     * permutation has.
     */
    getAllStates(): Record<string, boolean | number | string>;
    /**
     * @remarks
     * 基于此方块置换检索一个原型物品堆，可用于物品 Container/ContainerSlot API。
     * 
     * Retrieves a prototype item stack based on this block
     * permutation that can be used with item
     * Container/ContainerSlot APIs.
     *
     * @param amount
     * 要放入原型物品堆中的此方块实例数量。
     * 默认为：1
     * 范围：[1, 255]
     * 
     * Number of instances of this block to place in the prototype
     * item stack.
     * Defaults to: 1
     * Bounds: [1, 255]
     */
    getItemStack(amount?: number): ItemStack | undefined;
    /**
     * @remarks
     * 获取置换的状态。
     * 
     * Gets a state for the permutation.
     *
     * @param stateName
     * 要返回值的方块状态名称。
     * 
     * Name of the block state who's value is to be returned.
     * @returns
     * 如果置换具有该状态则返回状态值，否则返回 `undefined`。
     * 
     * Returns the state if the permutation has it, else
     * `undefined`.
     */
    getState<T extends keyof BlockStateSuperset>(
        stateName: T,
    ): BlockStateSuperset[T] | undefined;
    /**
     * @remarks
     * 创建置换的副本。
     * 
     * Creates a copy of the permutation.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查置换是否具有特定标签。
     * 
     * Checks to see if the permutation has a specific tag.
     *
     * @returns
     * 如果置换具有该标签则返回 `true`，否则返回 `false`。
     * 
     * Returns `true` if the permutation has the tag, else `false`.
     * @seeExample checkBlockTags.ts
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回此方块是否阻止液体流动。
     * 
     * Returns whether this block stops liquid from flowing.
     *
     * @param liquidType
     * 此函数应为之调用的液体类型。
     * 
     * The type of liquid this function should be called for.
     * @returns
     * 此方块是否阻止液体流动。
     * 
     * Whether this block stops liquid from flowing.
     * @throws This function can throw errors.
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块在接触液体时是否被移除并生成其物品。
     * 
     * Returns whether this block is removed and spawns its item
     * when touched by liquid.
     *
     * @param liquidType
     * 此函数应为之调用的液体类型。
     * 
     * The type of liquid this function should be called for.
     * @returns
     * 此方块在接触液体时是否被移除并生成其物品。
     * 
     * Whether this block is removed and spawns its item when
     * touched by liquid.
     * @throws This function can throw errors.
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回指定置换是否与此置换匹配。如果未指定状态，则 matches 会在更广泛的类型集合上进行检查。
     * 
     * Returns a boolean whether a specified permutation matches
     * this permutation. If states is not specified, matches checks
     * against the set of types more broadly.
     *
     * @param blockName
     * 要比较的可选状态集合。
     * 
     * An optional set of states to compare against.
     */
    matches<T extends string = MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): boolean;
    /**
     * @remarks
     * 返回一个设置了特定属性的派生 BlockPermutation。
     * 
     * Returns a derived BlockPermutation with a specific property
     * set.
     *
     * @param name
     * 方块属性的标识符。
     * 
     * Identifier of the block property.
     * @param value
     * 方块属性的值。
     * 
     * Value of the block property.
     * @throws This function can throw errors.
     */
    withState<T extends keyof BlockStateSuperset>(
        name: T,
        value: BlockStateSuperset[T],
    ): BlockPermutation;
    /**
     * @remarks
     * 给定类型标识符和可选的属性集合，将返回一个可在其他方块 API 中使用的 BlockPermutation 对象（例如 block.setPermutation）。
     * 
     * Given a type identifier and an optional set of properties,
     * will return a BlockPermutation object that is usable in
     * other block APIs (e.g., block.setPermutation)
     *
     * @param blockName
     * 要检查的方块的标识符。
     * 
     * Identifier of the block to check.
     * @throws This function can throw errors.
     * @seeExample addBlockColorCube.ts
     */
    static resolve<T extends string = MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): BlockPermutation;
}

/**
 * 当存在时，此方块具有活塞般的行为。包含用于发现方块活塞状态的附加属性。
 * 
 * When present, this block has piston-like behavior. Contains
 * additional properties for discovering block piston state.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 活塞是否正在伸出或收回的过程中。
     * 
     * Whether the piston is in the process of expanding or
     * retracting.
     *
     * @throws This property can throw when used.
     */
    readonly isMoving: boolean;
    /**
     * @remarks
     * 活塞的当前状态。
     * 
     * The current state of the piston.
     *
     * @throws This property can throw when used.
     */
    readonly state: BlockPistonState;
    static readonly componentId = 'minecraft:piston';
    /**
     * @remarks
     * 检索此活塞连接的一组方块。
     * 
     * Retrieves a set of blocks that this piston is connected
     * with.
     *
     * @throws This function can throw errors.
     */
    getAttachedBlocks(): Block[];
    /**
     * @remarks
     * 检索此活塞连接的一组方块位置。
     * 
     * Retrieves a set of block locations that this piston is
     * connected with.
     *
     * @throws This function can throw errors.
     */
    getAttachedBlocksLocations(): Vector3[];
}

/**
 * 表示方块如何与降水（例如雨或雪）交互。
 * 
 * Represents a how a block interacts with precipitation (such
 * as rain or snow).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPrecipitationInteractionsComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:precipitation_interactions';
    /**
     * @remarks
     * 如果降雪会在方块上自然积累，则返回 `true`。如果雪不会在方块上积累，则返回 `false`。
     * 
     * Returns `true` if falling snow will accumulate naturally on
     * the block. Returns `false` if snow will not accumulate on
     * the block.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    accumulatesSnow(): boolean;
    /**
     * @remarks
     * 如果此方块内部可以容纳雪（如被雪淹没的花朵），则返回 `true`。如果此方块内部不能容纳雪，则返回 `false`。
     * 
     * Returns `true` if this block can have snow within it, like a
     * flower submerged in snow. Returns `false` if this block
     * cannot have snow within it.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    isSnowLoggable(): boolean;
    /**
     * @remarks
     * 如果雨水不会穿过方块，则返回 `true`。如果雨水应穿过方块，则返回 `false`。
     * 
     * Returns `true` if rain will not go through the block.
     * Returns `false` if rain should go through the block.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    obstructsRain(): boolean;
}

/**
 * 表示可以播放唱片的方块。
 * 
 * Represents a block that can play a record.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:record_player';
    /**
     * @remarks
     * 弹出此唱片播放方块当前设置的唱片。
     * 
     * Ejects the currently set record of this record-playing
     * block.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    ejectRecord(): void;
    /**
     * @remarks
     * 获取此唱片播放方块当前设置的唱片。
     * 
     * Gets the currently set record of this record-playing block.
     *
     * @throws This function can throw errors.
     */
    getRecord(): ItemStack | undefined;
    /**
     * @remarks
     * 返回唱片播放方块当前是否正在播放唱片。
     * 
     * Returns true if the record-playing block is currently
     * playing a record.
     *
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * 暂停此唱片播放方块当前正在播放的唱片。
     * 
     * Pauses the currently playing record of this record-playing
     * block.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    pauseRecord(): void;
    /**
     * @remarks
     * 播放此唱片播放方块当前设置的唱片。
     * 
     * Plays the currently set record of this record-playing block.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    playRecord(): void;
    /**
     * @remarks
     * 设置并基于物品类型播放唱片。
     * 
     * Sets and plays a record based on an item type.
     *
     * @worldMutation
     *
     * @param startPlaying
     * 默认为：`true`。
     * 
     * Defaults to: true
     * @throws This function can throw errors.
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}

/**
 * 表示可以输出红石信号的方块。
 * 
 * Represents a block that can output a redstone signal.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 获取此方块向电路系统输出的功率。如果方块不再有效或不具有 `minecraft:redstone_producer` 组件，则返回错误。
     * 
     * Gets the power that this block outputs to circuit system.
     * Returns error if block is no longer valid or if block
     * doesn't have a 'minecraft:redstone_producer' component.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidBlockComponentError}
     */
    readonly power: number;
    static readonly componentId = 'minecraft:redstone_producer';
    /**
     * @remarks
     * 获取此方块可以连接到电路并输出功率的面。如果方块不再有效或不具有 `minecraft:redstone_producer` 组件，则返回错误。
     * 
     * Gets the faces of this block that can connect to the circuit
     * and output power. Returns error if block is no longer valid
     * or if block doesn't have a 'minecraft:redstone_producer'
     * component.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getConnectedFaces(): Direction[];
    /**
     * @remarks
     * 获取对方块进行强充能的方块面。如果 `minecraft:redstone_producer` 方块组件未定义 `strongly_powered_face`，则此方法返回 `undefined`。如果方块不再有效或不具有 `minecraft:redstone_producer` 组件，则返回错误。
     * 
     * Gets the block face that strongly powers the block touching
     * it. If the 'minecraft:redstone_producer' block component
     * hasn't defined a 'strongly_powered_face' then this method
     * returns 'undefined'. Returns error if block is no longer
     * valid or if block doesn't have a
     * 'minecraft:redstone_producer' component.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getStronglyPoweredFace(): Direction | undefined;
}

/**
 * 表示可以在上面显示文字的方块。
 * @seeExample addSign.ts
 * @seeExample addTwoSidedSign.ts
 * @seeExample updateSignText.ts
 * @seeExample addTranslatedSign.ts 9e2fd749
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 玩家是否可以编辑告示牌。如果告示牌被使用过蜂巢或调用了 `setWaxed`，则会发生这种情况。
     * 
     * Whether or not players can edit the sign. This happens if a
     * sign has had a honeycomb used on it or `setWaxed` was called
     * on the sign.
     *
     * @throws This property can throw when used.
     */
    readonly isWaxed: boolean;
    static readonly componentId = 'minecraft:sign';
    /**
     * @remarks
     * 如果使用 RawMessage 或 RawText 对象调用了 `setText`，则返回告示牌的 RawText，否则返回 `undefined`。
     * 
     * Returns the RawText of the sign if `setText` was called with
     * a RawMessage or a RawText object, otherwise returns
     * undefined.
     *
     * @param side
     * 要读取消息的告示牌面。如果未提供，则将返回告示牌正面的消息。
     * 默认为：0
     * 
     * The side of the sign to read the message from. If not
     * provided, this will return the message from the front side
     * of the sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * @remarks
     * 如果使用字符串调用了 `setText`，则返回告示牌的文本，否则返回 `undefined`。
     * 
     * Returns the text of the sign if `setText` was called with a
     * string, otherwise returns undefined.
     *
     * @param side
     * 要读取消息的告示牌面。如果未提供，则将返回告示牌正面的消息。
     * 默认为：0
     * 
     * The side of the sign to read the message from. If not
     * provided, this will return the message from the front side
     * of the sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getText(side?: SignSide): string | undefined;
    /**
     * @remarks
     * 获取文字上的染料，如果告示牌未被染色，则返回 `undefined`。
     * 
     * Gets the dye that is on the text or undefined if the sign
     * has not been dyed.
     *
     * @param side
     * 要读取染料的告示牌面。如果未提供，则将返回告示牌正面的染料。
     * 默认为：0
     * 
     * The side of the sign to read the dye from. If not provided,
     * this will return the dye on the front side of the sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @remarks
     * 设置告示牌组件的文本。
     * 
     * Sets the text of the sign component.
     *
     * @worldMutation
     *
     * @param message
     * 要在告示牌上设置的消息。如果设置为字符串，则调用 `getText` 来读取该字符串。如果设置为 RawMessage，则调用 `getRawText` 将返回 RawText。
     * 
     * The message to set on the sign. If set to a string, then
     * call `getText` to read that string. If set to a RawMessage,
     * then calling `getRawText` will return a RawText.
     * @param side
     * 消息将被设置到的告示牌面。如果未提供，消息将设置在告示牌的正面。
     * 默认为：0
     * 
     * The side of the sign the message will be set on. If not
     * provided, the message will be set on the front side of the
     * sign.
     * Defaults to: 0
     * @throws
     * 如果提供的消息长度超过 512 个字符，则抛出错误。
     * 
     * Throws if the provided message is greater than 512
     * characters in length.
     */
    setText(message: RawMessage | string, side?: SignSide): void;
    /**
     * @remarks
     * 设置文字的染料颜色。
     * 
     * Sets the dye color of the text.
     *
     * @worldMutation
     *
     * @param color
     * 要应用于告示牌的染料颜色，或 `undefined` 以清除告示牌上的染料。
     * 默认为：null
     * 
     * The dye color to apply to the sign or undefined to clear the
     * dye on the sign.
     * Defaults to: null
     * @param side
     * 颜色将被设置到的告示牌面。如果未提供，颜色将设置在告示牌的正面。
     * 默认为：0
     * 
     * The side of the sign the color will be set on. If not
     * provided, the color will be set on the front side of the
     * sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @remarks
     * 使玩家无法编辑此告示牌。
     * 
     * Makes it so players cannot edit this sign.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setWaxed(waxed: boolean): void;
}

/**
 * 枚举所有 {@link BlockStateType}。
 * 
 * Enumerates all {@link BlockStateType}s.
 */
export class BlockStates {
    private constructor();
    /**
     * @remarks
     * 检索特定的方块状态实例。
     * 
     * Retrieves a specific block state instance.
     *
     * @returns
     * 如果找到则返回 {@link Block} 状态实例。如果未找到方块状态实例，则返回 `undefined`。
     * 
     * Returns the {@link Block} state instance if it is found. If
     * the block state instance is not found returns undefined.
     */
    static get(stateName: string): BlockStateType | undefined;
    /**
     * @remarks
     * 检索所有可用方块状态的集合。
     * 
     * Retrieves a set of all available block states.
     *
     */
    static getAll(): BlockStateType[];
}

/**
 * 表示方块实例的可配置状态值。例如，楼梯的朝向方向可以作为方块状态访问。
 * 
 * Represents a configurable state value of a block instance.
 * For example, the facing direction of stairs is accessible as
 * a block state.
 */
export class BlockStateType {
    private constructor();
    /**
     * @remarks
     * 方块属性的标识符。
     * 
     * Identifier of the block property.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 方块属性的有效值集合。
     * 
     * A set of valid values for the block property.
     *
     */
    readonly validValues: (boolean | number | string)[];
}

/**
 * 方块的类型（或模板）。不包含置换数据（状态），仅包含其表示的方块类型。此类型在 1.17.10.21 版本引入。
 * 
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
    private constructor();
    /**
     * @remarks
     * 方块类型名称 - 例如 `minecraft:acacia_stairs`。
     * 
     * Block type name - for example, `minecraft:acacia_stairs`.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 此 BlockType 名称在 .lang 文件中使用的本地化键。
     * 
     * Key for the localization of this BlockType's name used in
     * .lang files.
     *
     */
    readonly localizationKey: string;
}

/**
 * 包含此世界中可用的 Minecraft 方块类型目录。
 * 
 * Contains a catalog of Minecraft Block Types that are
 * available in this world.
 */
export class BlockTypes {
    private constructor();
    /**
     * @remarks
     * 返回指定标识符的 BlockType 对象。
     * 
     * Returns a BlockType object for the specified identifier.
     *
     * @param typeName
     * 方块类型的标识符。应采用 namespace:id 模式，例如 minecraft:dirt。
     * 
     * Identifier of the block type. Should follow a namespace:id
     * pattern, such as minecraft:dirt.
     * @returns
     * BlockType 对象，如果该方块类型在此世界中不可用则返回 `undefined`。
     * 
     * BlockType object, or undefined if the block type is not
     * available within this world.
     */
    static get(typeName: string): BlockType | undefined;
    /**
     * @remarks
     * 返回所有可用方块类型的集合。
     * 
     * Returns a collection of all available block types.
     *
     */
    static getAll(): BlockType[];
}

/**
 * BlockVolume 是一个简单的接口对象，表示在方块世界位置处给定大小的 3D 矩形（以方块计）。
 * 注意这些并不等同于"min"和"max"值，因为向量分量不保证按任何顺序排列。
 * 此外，这些向量位置不可与 BlockLocation 互换。
 * 如果您想将此体积表示为 BlockLocation 范围，可以使用 getBoundingBox 实用函数。
 * 此体积类将保持最初设置的角落索引的顺序。想象一下，每个角落都在编辑器中分配——当您移动角落时（可能会反转边界的 min/max 关系）——
 * 您最初选择为顶部/左侧的角落通常会变成底部/右侧。
 * 在手动编辑这些类型的体积时，您需要在编辑时保持角落的标识——BlockVolume 实用函数正是这样做的。
 * 
 * 需要注意的是，这是测量方块大小（从/到）——一个普通的 AABB (0,0,0) 到 (0,0,0) 传统上大小为 (0,0,0)，
 * 但是，因为我们测量的是方块，BlockVolume 的大小或跨度实际上将是 (1,1,1)。
 * 
 * A BlockVolume is a simple interface to an object which
 * represents a 3D rectangle of a given size (in blocks) at a
 * world block location.
 * Note that these are not analogous to "min" and "max" values,
 * in that the vector components are not guaranteed to be in
 * any order.
 * In addition, these vector positions are not interchangeable
 * with BlockLocation.
 * If you want to get this volume represented as range of of
 * BlockLocations, you can use the getBoundingBox utility
 * function.
 * This volume class will maintain the ordering of the corner
 * indexes as initially set. imagine that each corner is
 * assigned in Editor - as you move the corner around
 * (potentially inverting the min/max relationship of the
 * bounds) - what
 * you had originally selected as the top/left corner would
 * traditionally become the bottom/right.
 * When manually editing these kinds of volumes, you need to
 * maintain the identity of the corner as you edit - the
 * BlockVolume utility functions do this.
 *
 * Important to note that this measures block sizes (to/from) -
 * a normal AABB (0,0,0) to (0,0,0) would traditionally be of
 * size (0,0,0)
 * However, because we're measuring blocks - the size or span
 * of a BlockVolume would actually be (1,1,1)
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * 表示 3D 矩形中一个角落的世界方块位置。
     * 
     * A world block location that represents a corner in a 3D
     * rectangle
     *
     */
    'from': Vector3;
    /**
     * @remarks
     * 表示 3D 矩形中对角角落的世界方块位置。
     * 
     * A world block location that represents the opposite corner
     * in a 3D rectangle
     *
     */
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    /**
     * @remarks
     * 检查给定位置是否直接与 BlockVolume 的外表面相邻。
     * 
     * Check to see if the given location is directly adjacent to
     * the outer surface of a BlockVolume.
     *
     *
     * @param pos
     * 要测试的世界方块位置。
     * 
     * The world block location to test
     * @returns
     * 如果该位置在内部或距离超过 0 个方块，则返回 `false`。
     * 如果该位置直接接触 BlockVolume 的外表面，则返回 `true`。
     * 
     * If the location is either inside or more than 0 blocks away,
     * the function will return false.
     * If the location is directly contacting the outer surface of
     * the BlockVolume, the function will return true.
     */
    doesLocationTouchFaces(pos: Vector3): boolean;
    /**
     * @remarks
     * 检查两个方块体积是否直接相邻且两个面接触。
     * 
     * Check to see if a two block volumes are directly adjacent
     * and two faces touch.
     *
     * @param other
     * 要测试的体积。
     * 
     * The volume to test
     * @returns
     * 如果两个方块体积的外表面在任何点接触且直接相邻，返回 `true`。
     * 
     * If the outer faces of both block volumes touch and are
     * directly adjacent at any point, return true.
     */
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    /**
     * @remarks
     * 返回表示两个 BlockVolume 对象之间交集的枚举。
     * 
     * Return an enumeration which represents the intersection
     * between two BlockVolume objects
     *
     */
    intersects(other: BlockVolume): BlockVolumeIntersection;
}

/**
 * BlockVolume 的基础类型。
 * 
 * Base type for BlockVolumes.
 */
export class BlockVolumeBase {
    private constructor();
    /**
     * @remarks
     * 获取一个 {@link BlockLocationIterator}，表示指定体积内的所有方块世界位置。
     * 
     * Fetch a {@link BlockLocationIterator} that represents all of
     * the block world locations within the specified volume
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @beta
     * @remarks
     * 返回一个 {@link BlockBoundingBox} 对象，表示体积的有效最小和最大坐标。
     * 
     * Return a {@link BlockBoundingBox} object which represents
     * the validated min and max coordinates of the volume
     *
     * @throws This function can throw errors.
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 返回 BlockVolume 的容量（体积）（W*D*H）。
     * 
     * Return the capacity (volume) of the BlockVolume (W*D*H)
     *
     */
    getCapacity(): number;
    /**
     * @beta
     * @remarks
     * 返回体积内最接近给定位置的方块位置列表，按距离排序（最近优先）。
     * 
     * Returns a list of block positions within the volume that are
     * closest to a given location, sorted by distance (nearest
     * first)
     *
     * @param count
     * 要返回的最接近位置的数量。
     * 
     * Number of closest positions to return
     * @param location
     * 测量距离的位置。
     * 
     * Position to measure distance from
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    getClosest(count: number, location: Vector3): Vector3[];
    /**
     * @beta
     * @remarks
     * 返回体积内距离给定位置最远的方块位置列表，按距离排序（最远优先）。
     * 
     * Returns a list of block positions within the volume that are
     * farthest from a given location, sorted by distance (farthest
     * first)
     *
     * @param count
     * 要返回的最远位置的数量。
     * 
     * Number of farthest positions to return
     * @param location
     * 测量距离的位置。
     * 
     * Position to measure distance from
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    getFarthest(count: number, location: Vector3): Vector3[];
    /**
     * @remarks
     * 获取体积的最大角落位置（保证 >= min）。
     * 
     * Get the largest corner position of the volume (guaranteed to
     * be >= min)
     *
     * @throws This function can throw errors.
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取体积的最小角落位置（保证 <= max）。
     * 
     * Get the smallest corner position of the volume (guaranteed
     * to be <= max)
     *
     * @throws This function can throw errors.
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取一个 {@link Vector3} 对象，其中每个分量表示沿该轴的方块数量。
     * 
     * Get a {@link Vector3} object where each component represents
     * the number of blocks along that axis
     *
     */
    getSpan(): Vector3;
    /**
     * @remarks
     * 检查给定的世界方块位置是否在 BlockVolume 内部。
     * 
     * Check to see if a given world block location is inside a
     * BlockVolume
     *
     */
    isInside(location: Vector3): boolean;
    /**
     * @remarks
     * 按指定量移动 BlockVolume。
     * 
     * Move a BlockVolume by a specified amount
     *
     * @param delta
     * 移动的方块数量。
     * 
     * Amount of blocks to move by
     */
    translate(delta: Vector3): void;
}

/**
 * 包含与按钮按压变化相关的信息。
 * @seeExample buttonPushEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 触发按钮按压的可选来源。
     * 
     * Optional source that triggered the button push.
     *
     */
    readonly source: Entity;
}

/**
 * 管理与按钮被按下时相关的回调。
 * @seeExample buttonPushEvent.ts
 */
export class ButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在按钮被按下时调用的回调。
     * 
     * Adds a callback that will be called when a button is pushed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在按钮被按下时调用的回调。
     * 
     * Removes a callback from being called when a button is
     * pushed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}

/**
 * 包含与指定玩家的活动相机相关的方法。
 *
 * Contains methods relating to the active camera for the
 * specified player.
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * 返回该相机是否可访问和使用。当相机的拥有者玩家已加载且自身有效时，该相机被视为有效。
     *
     * Returns whether the Camera is valid to access and use. A
     * Camera is considered valid when the owning Player of the
     * Camera is loaded and valid itself.
     *
     */
    readonly isValid: boolean;
    /**
     * @beta
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    addShake(shakeCameraOptions: CameraShakeOptions): void;
    /**
     * @remarks
     * 将相机附加到非玩家实体上。
     *
     * Attaches the camera to a non-player entity.
     *
     * @worldMutation
     *
     * @param attachCameraOptions
     * 相机要附加到的实体的选项。包含实体标识符和可选的实体位置。
     *
     * Options for the entity the camera is attaching to. Contains
     * the entity identifier and optional entity location.
     * @throws This function can throw errors.
     */
    attachToEntity(attachCameraOptions?: CameraAttachOptions): void;
    /**
     * @remarks
     * 清除指定玩家的活动相机。使指定玩家结束任何进行中的相机视角，包括任何缓动相机运动，并返回到其正常视角。
     *
     * Clears the active camera for the specified player. Causes
     * the specified players to end any in-progress camera
     * perspectives, including any eased camera motions, and return
     * to their normal perspective.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * 开始相机淡入淡出过渡。淡入淡出过渡是一种全屏颜色，会淡入、保持、然后淡出。
     *
     * Begins a camera fade transition. A fade transition is a
     * full-screen color that fades-in, holds, and then fades-out.
     *
     * @worldMutation
     *
     * @param fadeCameraOptions
     * 相机淡入淡出操作的附加选项。
     *
     * Additional options around camera fade operations.
     * @throws This function can throw errors.
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    playAnimation(splineType: CatmullRomSpline | LinearSpline, cameraAnimationOptions: AnimationOptions): void;
    /**
     * @remarks
     * 为指定玩家设置当前活动相机。
     *
     * Sets the current active camera for the specified player.
     *
     * @worldMutation
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件的标识符。
     *
     * Identifier of a camera preset file defined within JSON.
     * @param setOptions
     * 相机的附加选项。
     *
     * Additional options for the camera.
     * @throws This function can throw errors.
     */
    setCamera(
        cameraPreset: string,
        setOptions?:
            | CameraFixedBoomOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions
            | CameraTargetOptions,
    ): void;
    /**
     * @beta
     * @remarks
     * 使用缓动设置当前活动相机。
     *
     * Sets the current active camera with easing.
     *
     * @worldMutation
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件的标识符。
     *
     * Identifier of a camera preset file defined within JSON.
     * @param easeOptions
     * 用于将相机从上一个位置缓动到当前位置的选项。
     *
     * Options to ease the camera from the previous camera to the
     * current one.
     * @throws
     * 当前在未启用实验性相机切换功能时，缓动到 `minecraft:first_person` 预设会抛出异常。
     *
     * Throws when easing to minecraft:first_person presets
     * currently without the experimental cameras toggle enabled.
     */
    setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void;
    /**
     * @remarks
     * 为指定玩家设置当前活动相机，并将位置和旋转重置为 JSON 中定义的值。
     *
     * Sets the current active camera for the specified player and
     * resets the position and rotation to the values defined in
     * the JSON.
     *
     * @worldMutation
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件的标识符。
     *
     * Identifier of a camera preset file defined within JSON.
     * @param easeOptions
     * 用于将相机缓动回其原始位置和旋转的选项。
     *
     * Options to ease the camera back to its original position and
     * rotation.
     * @throws This function can throw errors.
     */
    setDefaultCamera(cameraPreset: string, easeOptions?: EaseOptions): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setFov(fovCameraOptions?: CameraFovOptions): void;
    /**
     * @beta
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopShaking(): void;
}

/**
 * @beta
 * 战利品物品函数，会尝试将被破坏方块的方块实体数据复制到掉落的物品上。
 *
 * Loot item function that will try to copy the block entity
 * data from the destroyed block to the dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CarryOverBlockEntityDataFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 如果为 `true`，并且方块实体具有 `dynamic_properties`，则该函数会将动态属性从方块实体复制到掉落的物品上。
     *
     * If true, and if the block entity had dynamic_properties, the
     * function will copy the dynamic properties from the block
     * entity to the dropped item.
     *
     */
    readonly dynamicProperties: boolean;
}

/**
 * CatmullRom 样条曲线创建。
 *
 * CatmullRom spline creation.
 */
export class CatmullRomSpline {
    /**
     * @remarks
     * CatmullRom 曲线的控制点。
     *
     * Control points for the CatmullRom curve.
     *
     * @worldMutation
     *
     */
    controlPoints: Vector3[];
}

/**
 * @beta
 * 当玩家输入聊天消息时触发的事件。
 *
 * An event that fires as players enter chat messages.
 */
export class ChatSendAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在广播的消息。
     *
     * Message that is being broadcast.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 发送聊天消息的玩家。
     *
     * Player that sent the chat message.
     *
     */
    readonly sender: Player;
    /**
     * @remarks
     * 可选的要接收此消息的玩家列表。如果已定义，此消息将直接发送给一个或多个玩家（即不进行广播）。
     *
     * Optional list of players that will receive this message. If
     * defined, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     *
     */
    readonly targets?: Player[];
}

/**
 * @beta
 * 管理与聊天消息发送相关的回调。
 *
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当新的聊天消息发送时将被调用。
     *
     * Adds a callback that will be called when new chat messages
     * are sent.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在发送新的聊天消息时不再被调用。
     *
     * Removes a callback from being called when new chat messages
     * are sent.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}

/**
 * @beta
 * 当玩家输入聊天消息时触发的事件。
 *
 * An event that fires as players enter chat messages.
 */
export class ChatSendBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果在 beforeChat 事件处理程序中设置为 `true`，则此消息不会广播出去。
     *
     * If set to true in a beforeChat event handler, this message
     * is not broadcast out.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 正在广播的消息。
     *
     * Message that is being broadcast.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 发送聊天消息的玩家。
     *
     * Player that sent the chat message.
     *
     */
    readonly sender: Player;
    /**
     * @remarks
     * 可选的要接收此消息的玩家列表。如果已定义，此消息将直接发送给一个或多个玩家（即不进行广播）。
     *
     * Optional list of players that will receive this message. If
     * defined, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     *
     */
    readonly targets?: Player[];
}

/**
 * @beta
 * 管理与聊天消息发送前触发的事件相关的回调。
 *
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 * @seeExample customCommand.ts
 */
export class ChatSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在新的聊天消息发送之前被调用。
     *
     * Adds a callback that will be called before new chat messages
     * are sent.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限被调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在新的聊天消息发送之前不再被调用。
     *
     * Removes a callback from being called before new chat
     * messages are sent.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}

/**
 * 包含客户端实例的设备信息。
 *
 * Contains the device information for a client instance.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ClientSystemInfo extends SystemInfo {
    private constructor();
    /**
     * @remarks
     * 客户端选择的区域设置（例如，`en_US`、`fr_FR`、`ja_JP`）。请注意，在大多数情况下，服务端脚本不应使用此属性来手动本地化文本。相反，应使用带有 translate 字段的 {@link RawMessage} 来发送本地化键，让每个客户端自动以其自己的语言解析。直接使用区域设置进行本地化是不稳定的，并且当同一服务器上的玩家使用不同语言时可能会产生意外结果。
     *
     * The locale selected by the client (e.g., en_US, fr_FR,
     * ja_JP). Note that in most cases, server scripts should not
     * use this property to manually localize text. Instead, use
     * {@link RawMessage} with a translate field to send
     * localization keys, allowing each client to resolve them in
     * their own language automatically. Direct use of locale for
     * localization is fragile and may produce unexpected results
     * when players with different languages are on the same
     * server.
     *
     */
    readonly locale: string;
    /**
     * @remarks
     * 设备的最大渲染距离（以区块为单位）。
     *
     * The max render distance for the device in chunks.
     *
     */
    readonly maxRenderDistance: number;
    /**
     * @remarks
     * 设备的平台类型。
     *
     * The platform type of the device.
     *
     */
    readonly platformType: PlatformType;
}

/**
 * 包含命令执行结果的返回数据。
 *
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * 如果命令对多个实体、方块或物品进行操作，则返回此命令的成功应用次数。
     *
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     *
     */
    readonly successCount: number;
}

/**
 * 下游 Component 实现的基类。
 *
 * Base class for downstream Component implementations.
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * 返回该组件是否有效。如果组件的拥有者有效，并且满足组件所需的任何额外验证，则该组件被视为有效。
     *
     * Returns whether the component is valid. A component is
     * considered valid if its owner is valid, in addition to any
     * addition to any additional validation required by the
     * component.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 组件的标识符。
     *
     * Identifier of the component.
     *
     */
    readonly typeId: string;
}

/**
 * @beta
 * Compound Block Volume 是单个方块体积定义的集合，这些定义共同定义一个更大的（有时是非连续的）不规则形状的体积。
 * 该类大致基于 CSG（计算实体几何）的概念，允许用户通过构建体积和空洞的堆栈来创建复杂的体积，形成一个更大的单一体积。
 * 例如——通常创建者会为每个面创建 6 个"墙壁"表面来制作一个空心立方体。
 * 使用 Compound Block Volume，创建者可以通过创建一个单独的外部实体立方体，然后在较大的立方体内部定义一个单独的"空洞"立方体来制作一个空心立方体。
 * 同样，Compound Block Volume 可以表示不规则的形状体积（例如，一棵树由树干和许多树叶方块组成，这些方块不一定连续放置）。
 * 添加到 CompoundBlockVolume 的每个体积（默认情况下）都是相对于设置的原点（在构造时或通过某个 set 函数设置）的。
 * 然而，也可以将绝对性质的体积推送到复合集合中，这些体积不受原点变化的影响。
 *
 * The Compound Block Volume is a collection of individual
 * block volume definitions which, as a collection, define a
 * larger volume of (sometimes non-contiguous) irregular
 * shapes.
 * This class is loosely based on the concept of CSG
 * (Computational Solid Geometry) and allows a user to create
 * complex volumes by building a stack of volumes and voids to
 * make a larger single volume.
 * For example - normally a creator would create a hollow cube
 * by creating 6 "wall" surfaces for each face.
 * With a Compound Block Volume, a creator can define a hollow
 * cube by creating a single outer solid cube, and then
 * defining a further single 'void' cube inside the larger one.
 * Similarly, the Compound Block Volume can represent irregular
 * shaped volumes (e.g. a tree consists of a trunk and lots of
 * leaf cubes which are not necessarily contiguously placed).
 * Each of the volumes added to the CompoundBlockVolume are (by
 * default) relative to the origin set (either at construction
 * or via one of the set functions).
 * However, it is also possible to push volumes to the compound
 * collection which are absolute in nature and are not affected
 * by origin changes.
 */
export class CompoundBlockVolume {
    /**
     * @remarks
     * 返回表示堆栈中体积集合的边界矩形的"容量"。
     *
     * Return the 'capacity' of the bounding rectangle which
     * represents the collection of volumes in the stack
     *
     */
    readonly capacity: number;
    readonly items: CompoundBlockVolumeItem[];
    readonly itemsAbsolute: CompoundBlockVolumeItem[];
    /**
     * @remarks
     * 返回体积堆栈中体积（正向和负向）的数量。
     *
     * Return the number of volumes (positive and negative) in the
     * volume stack
     *
     */
    readonly volumeCount: number;
    /**
     * @remarks
     * 创建一个 CompoundBlockVolume 对象。
     *
     * Create a CompoundBlockVolume object
     *
     * @param origin
     * 一个可选的用于居中复合体积的世界空间原点。如果未指定，原点设置为 `(0,0,0)`。
     *
     * An optional world space origin on which to center the
     * compound volume.
     * If not specified, the origin is set to (0,0,0)
     */
    constructor(origin?: Vector3);
    /**
     * @remarks
     * 清空体积堆栈的内容。
     *
     * Clear the contents of the volume stack
     *
     * @worldMutation
     *
     */
    clear(): void;
    /**
     * @remarks
     * 获取 Compound Block Volume 的方块位置迭代器。此迭代器将允许创建者遍历更大边界区域内所有选中的体积。已被减去体积覆盖的体积区域将不包含在迭代器步骤中（即，如果你向堆栈推送一个立方体，然后向同一位置推送一个减去体积，迭代器将跳过初始体积，因为它被视为负空间）。请注意，此迭代器返回的方块位置是绝对世界空间坐标（无论推送的复合体积项是绝对的还是相对的）。
     *
     * Fetch a Block Location Iterator for the Compound Block
     * Volume.  This iterator will allow a creator to iterate
     * across all of the selected volumes within the larger
     * bounding area.
     * Areas of a volume which have been overridden by a
     * subtractive volume will not be included in the iterator
     * step.
     * (i.e. if you push a cube to the stack, and then push a
     * subtractive volume to the same location, then the iterator
     * will step over the initial volume because it is considered
     * negative space)
     * Note that the Block Locations returned by this iterator are
     * in absolute world space (irrespective of whether the
     * compound volume items pushed are absolute or relative)
     *
     * @worldMutation
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @remarks
     * 获取表示堆栈上所有体积容器的最大的边界框。请注意，返回的边界框以绝对世界空间坐标表示（无论推送的复合体积项是绝对的还是相对的）。
     *
     * Get the largest bounding box that represents a container for
     * all of the volumes on the stack
     * Note that the bounding box returned is represented in
     * absolute world space  (irrespective of whether the compound
     * volume items pushed are absolute or relative)
     *
     * @worldMutation
     *
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 获取表示堆栈上体积的最外层边界矩形的最大方块位置。请注意，返回的最大位置以绝对世界空间坐标表示（无论推送的复合体积项是绝对的还是相对的）。
     *
     * Get the max block location of the outermost bounding
     * rectangle which represents the volumes on the stack.
     * Note that the max location returned is in absolute world
     * space (irrespective of whether the compound volume items
     * pushed are absolute or relative)
     *
     * @worldMutation
     *
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取表示堆栈上体积的最外层边界矩形的最小方块位置。请注意，返回的最小位置以绝对世界空间坐标表示（无论推送的复合体积项是绝对的还是相对的）。
     *
     * Get the min block location of the outermost bounding
     * rectangle which represents the volumes on the stack.
     * Note that the min location returned is in absolute world
     * space (irrespective of whether the compound volume items
     * pushed are absolute or relative)
     *
     * @worldMutation
     *
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取复合体积在世界空间中的原点。
     *
     * Fetch the origin in world space of the compound volume
     *
     * @worldMutation
     *
     */
    getOrigin(): Vector3;
    /**
     * @remarks
     * 返回一个布尔值，指示是否有体积项被推送到体积堆栈中。
     *
     * Return a boolean which signals if there are any volume items
     * pushed to the volume
     *
     * @worldMutation
     *
     */
    isEmpty(): boolean;
    /**
     * @remarks
     * 返回一个布尔值，表示给定的绝对世界空间方块位置是否在正向方块体积内部。例如，如果堆栈包含一个大立方体后面跟着一个稍小的负立方体，并且测试位置在负立方体内部——该函数将返回 `false`，因为它不在体积"内部"（它在边界矩形内部，但不在正确定义的位置内部）。
     *
     * Return a boolean representing whether or not a given
     * absolute world space block location is inside a positive
     * block volume.
     * E.g. if the stack contains a large cube followed by a
     * slightly smaller negative cube, and the test location is
     * within the negative cube - the function will return false
     * because it's not 'inside' a volume (it IS inside the
     * bounding rectangle, but it is not inside a positively
     * defined location)
     *
     * @worldMutation
     *
     */
    isInside(worldLocation: Vector3): boolean;
    /**
     * @remarks
     * 检查推送到体积堆栈的最后一个条目，而不影响堆栈内容。
     *
     * Inspect the last entry pushed to the volume stack without
     * affecting the stack contents.
     *
     * @worldMutation
     *
     * @param forceRelativity
     * 确定函数是否返回强制为相对或绝对坐标系的 CompoundBlockVolumeItem。
     * `true` = 强制返回的项相对于体积原点
     * `false` = 强制返回的项为绝对世界空间位置
     * 如果未指定标志，返回的项保留其推送时的相对性。
     *
     * Determine whether the function returns a
     * CompoundBlockVolumeItem which is forced into either relative
     * or absolute coordinate system.
     * `true` = force returned item to be relative to volume origin
     * `false` = force returned item to be absolute world space
     * location
     *
     * If no flag is specified, the item returned retains whatever
     * relativity it had when it was pushed
     * @returns
     * 如果堆栈为空则返回 `undefined`。
     *
     * Returns undefined if the stack is empty
     */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * 从体积堆栈中移除最后一个条目。这将使堆栈大小减一。
     *
     * Remove the last entry from the volume stack.  This will
     * reduce the stack size by one
     *
     * @worldMutation
     *
     */
    popVolume(): boolean;
    /**
     * @remarks
     * 将一个体积项推送到堆栈。该体积项包含一个 `action` 参数，用于确定该体积是正向空间还是负向空间。该项还包含一个 `locationRelativity`，用于确定它是相对于复合体积原点还是绝对的。
     *
     * Push a volume item to the stack.  The volume item contains
     * an 'action' parameter which determines whether this volume
     * is a positive or negative space.
     * The item also contains a `locationRelativity` which
     * determines whether it is relative or absolute to the
     * compound volume origin
     *
     * @worldMutation
     *
     * @param item
     * 要推送到堆栈末尾的项。
     *
     * Item to push to the end of the stack
     */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * 如果体积堆栈为空，此函数将推送指定项到堆栈。如果体积堆栈不为空，此函数将用新项替换堆栈上的最后一个项。
     *
     * If the volume stack is empty, this function will push the
     * specified item to the stack.
     * If the volume stack is NOT empty, this function will replace
     * the last item on the stack with the new item.
     *
     * @worldMutation
     *
     * @param item
     * 要添加或替换的项。
     *
     * Item to add or replace
     */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /**
     * @remarks
     * 将复合体积的原点设置为绝对世界空间位置。
     *
     * Set the origin of the compound volume to an absolute world
     * space location
     *
     * @worldMutation
     *
     * @param preserveExistingVolumes
     * 此可选的布尔标志确定相对的 `CompoundBlockVolumeItem` 是固定在原地，还是受新原点影响。
     * 想象一个场景，你有一系列围绕原点的相对位置，构成一个球体；所有这些位置的范围在 -2 到 2 之间。
     * 将这些位置作为相对项推送到复合体积中。
     * 现在，移动原点，表示球体的所有位置也会随之移动。
     * 然而，假设你想在第一个球体旁边添加第二个球体。
     * 在这种情况下，将新原点设置在几个位置之外，但设置 `preserveExistingVolumes` = `true`。
     * 这将设置一个新原点，但现有的球体位置将保持相对于原始原点。
     * 现在，你可以再次推送相对的球体位置（这次它们将相对于新原点）——结果得到两个相邻的球体。
     *
     * This optional boolean flag determines whether the relative
     * `CompoundBlockVolumeItem`'s are frozen in place, or are
     * affected by the new origin.
     * Imagine a scenario where you have a series of relative
     * locations around an origin which make up a sphere; all of
     * these locations are in the range of -2 to 2.
     * Push each of these locations to the compound volume as
     * relative items.
     * Now, move the origin and all of the locations representing
     * the sphere move accordingly.
     * However, let's say you want to add a 2nd sphere next to the
     * 1st.
     * In this case, set the new origin a few locations over, but
     * 'preserveExistingVolumes' = true.
     * This will set a new origin, but the existing sphere
     * locations will remain relative to the original origin.
     * Now, you can push the relative sphere locations again (this
     * time they will be relative to the new origin) - resulting in
     * 2 spheres next to each other.
     */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /**
     * @remarks
     * 类似于 {@link CompoundBlockVolume.setOrigin}——此函数会将原点按给定增量平移到一个新位置。
     *
     * Similar to {@link CompoundBlockVolume.setOrigin} - this
     * function will translate the origin by a given delta to a new
     * position
     *
     * @worldMutation
     *
     * @param preserveExistingVolumes
     * 参见 {@link CompoundBlockVolume.setOrigin} 参数的描述。
     *
     * See the description for the arguments to {@link
     * CompoundBlockVolume.setOrigin}
     */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}

/**
 * 表示一个可以容纳多组物品的容器。用于诸如玩家、运输矿车、羊驼等实体。
 *
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 * @seeExample containers.ts
 */
export class Container {
    private constructor();
    /**
     * @remarks
     * 如果定义了这些规则，其他容器操作如果导致这些规则被违反则会抛出异常。例如，将潜影盒添加到原版 bundles 中。
     *
     * If these rules are defined other container operations will
     * throw if they cause these rules to be invalidated. For
     * example, adding a shulker box to a vanilla bundle.
     *
     */
    readonly containerRules?: ContainerRules;
    /**
     * @remarks
     * 容器中空槽位的数量。
     *
     * Count of the slots in the container that are empty.
     *
     * @throws
     * 如果容器无效则抛出异常。
     *
     * Throws if the container is invalid.
     */
    readonly emptySlotsCount: number;
    /**
     * @remarks
     * 返回容器对象（或与此容器关联的实体或方块）在此上下文中是否仍然可用。
     *
     * Returns whether a container object (or the entity or block
     * that this container is associated with) is still available
     * for use in this context.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 此容器中的槽位数。例如，一个标准的单方块箱子大小为 27。注意，玩家的物品栏容器共有 36 个槽位，9 个快捷栏槽位加 27 个物品栏槽位。
     *
     * The number of slots in this container. For example, a
     * standard single-block chest has a size of 27. Note, a
     * player's inventory container contains a total of 36 slots, 9
     * hotbar slots plus 27 inventory slots.
     *
     * @throws
     * 如果容器无效则抛出异常。
     *
     * Throws if the container is invalid.
     */
    readonly size: number;
    /**
     * @remarks
     * 容器中所有物品的总重量。
     *
     * The combined weight of all items in the container.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerError}
     */
    readonly weight: number;
    /**
     * @remarks
     * 向容器中添加一个物品。该物品将被放置在第一个可用的槽位中，并可以与相同类型的现有物品堆叠。请注意，如果希望在特定槽位中设置物品，请使用 {@link Container.setItem}。
     *
     * Adds an item to the container. The item is placed in the
     * first available slot(s) and can be stacked with existing
     * items of the same type. Note, use {@link Container.setItem}
     * if you wish to set the item in a particular slot.
     *
     * @worldMutation
     *
     * @param itemStack
     * 要添加的物品堆叠。
     *
     * The stack of items to add.
     * @throws
     * 不会因超过重量限制而抛出 {@link ContainerRules} 错误，而是会添加物品直至达到重量限制为止。
     *
     * Won't throw {@link ContainerRules} error for over weight
     * limit but will instead add items up to the weight limit.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks
     * 清空容器中的所有物品栏物品。
     *
     * Clears all inventory items in the container.
     *
     * @worldMutation
     *
     * @throws
     * 如果容器无效则抛出异常。
     *
     * Throws if the container is invalid.
     */
    clearAll(): void;
    /**
     * @remarks
     * 尝试在容器中查找一个物品。
     *
     * Attempts to find an item inside the container
     *
     * @param itemStack
     * 要查找的物品。
     *
     * The item to find.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    contains(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 查找容器内第一个匹配物品的索引。
     *
     * Find the index of the first instance of an item inside the
     * container
     *
     * @param itemStack
     * 要查找的物品。
     *
     * The item to find.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    find(itemStack: ItemStack): number | undefined;
    /**
     * @remarks
     * 查找容器内最后一个匹配物品的索引。
     *
     * Find the index of the last instance of an item inside the
     * container
     *
     * @param itemStack
     * 要查找的物品。
     *
     * The item to find.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    findLast(itemStack: ItemStack): number | undefined;
    /**
     * @remarks
     * 查找容器内第一个空槽位的索引。
     *
     * Finds the index of the first empty slot inside the container
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    firstEmptySlot(): number | undefined;
    /**
     * @remarks
     * 查找容器内第一个物品的索引。
     *
     * Finds the index of the first item inside the container
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    firstItem(): number | undefined;
    /**
     * @remarks
     * 获取指定槽位中的 {@link ItemStack}。如果槽位为空，则返回 `undefined`。此方法不会更改或清空指定槽位的内容。要获取特定槽位的引用，请参阅 {@link Container.getSlot}。
     *
     * Gets an {@link ItemStack} of the item at the specified slot.
     * If the slot is empty, returns `undefined`. This method does
     * not change or clear the contents of the specified slot. To
     * get a reference to a particular slot, see {@link
     * Container.getSlot}.
     *
     * @param slot
     * 要从中检索物品的槽位的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to retrieve items from.
     * Minimum value: 0
     * @throws
     * 如果容器无效或 `slot` 索引超出范围则抛出异常。
     *
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * @seeExample getFirstHotbarItem.ts
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @remarks
     * 返回一个容器槽位。这作为给定索引处槽位的引用。
     *
     * Returns a container slot. This acts as a reference to a slot
     * at the given index for this container.
     *
     * @param slot
     * 要返回的槽位索引。此索引必须在容器的范围内。最小值：0
     *
     * The index of the slot to return. This index must be within
     * the bounds of the container.
     * Minimum value: 0
     * @throws
     * 如果容器无效或 `slot` 索引超出范围则抛出异常。
     *
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * 将物品从一个槽位移到另一个槽位，可以跨容器移动。
     *
     * Moves an item from one slot to another, potentially across
     * containers.
     *
     * @worldMutation
     *
     * @param fromSlot
     * 此容器中要移出物品的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * Minimum value: 0
     * @param toSlot
     * `toContainer` 中要移入物品的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to transfer an item to, on
     * `toContainer`.
     * Minimum value: 0
     * @param toContainer
     * 要移入的目标容器。注意可以是与源容器相同的容器。
     *
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws
     * 如果此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围则抛出异常。
     *
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     * @seeExample moveBetweenContainers.ts
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks
     * 在特定槽位中设置物品堆叠。
     *
     * Sets an item stack within a particular slot.
     *
     * @worldMutation
     *
     * @param slot
     * 要放置物品的槽位的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to set an item at.
     * Minimum value: 0
     * @param itemStack
     * 要放置在指定槽位中的物品堆叠。将 `itemStack` 设置为 `undefined` 将清空该槽位。
     *
     * Stack of items to place within the specified slot. Setting
     * `itemStack` to undefined will clear the slot.
     * @throws
     * 如果容器无效或 `slot` 索引超出范围则抛出异常。
     *
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * 在容器内的两个不同槽位之间交换物品。
     *
     * Swaps items between two different slots within containers.
     *
     * @worldMutation
     *
     * @param slot
     * 此容器中要交换的槽位的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to swap from this container.
     * Minimum value: 0
     * @param otherSlot
     * 要交换的槽位的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to swap with.
     * Minimum value: 0
     * @param otherContainer
     * 要交换的目标容器。注意可以是与源容器相同的容器。
     *
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws
     * 如果此容器或 `otherContainer` 无效，或者 `slot` 或 `otherSlot` 超出范围则抛出异常。
     *
     * Throws if either this container or `otherContainer` are
     * invalid or if the `slot` or `otherSlot` are out of bounds.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks
     * 将物品从一个槽位移到另一个容器，或移到同一容器中的第一个可用槽位。
     *
     * Moves an item from one slot to another container, or to the
     * first available slot in the same container.
     *
     * @worldMutation
     *
     * @param fromSlot
     * 此容器中要移出物品的从零开始的索引。最小值：0
     *
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * Minimum value: 0
     * @param toContainer
     * 要移入的目标容器。注意可以是与源容器相同的容器。
     *
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @returns
     * 包含无法转移的物品的 ItemStack。如果所有物品都已转移，则返回 `undefined`。
     *
     * An itemStack with the items that couldn't be transferred.
     * Returns undefined if all items were transferred.
     * @throws
     * 如果此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围则抛出异常。不会因超过重量限制而抛出 {@link ContainerRules} 错误，而是会添加物品直至达到重量限制为止。
     *
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * Won't throw {@link ContainerRules} error for over weight
     * limit but will instead add items up to the weight limit.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     * @seeExample transferBetweenContainers.ts
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}

/**
 * 表示更广泛容器（例如实体物品栏）中的一个槽位。
 *
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 */
export class ContainerSlot {
    private constructor();
    /**
     * @remarks
     * 堆叠中的物品数量。有效值范围为 1-255。提供的值将被限制到物品的最大堆叠大小。
     *
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * @worldMutation
     *
     * Bounds: [1, 255]
     * @throws
     * 如果值超出 1-255 的范围则抛出异常。
     *
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * 返回物品是否可堆叠。如果物品的最大堆叠大小大于 1，并且物品不包含任何自定义数据或属性，则该物品被视为可堆叠。
     *
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * 返回 ContainerSlot 是否有效。如果容器存在且已加载，并且槽位索引有效，则该容器槽位有效。
     *
     * Returns whether the ContainerSlot is valid. The container
     * slot is valid if the container exists and is loaded, and the
     * slot index is valid.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取或设置物品在死亡时是否保留。
     *
     * Gets or sets whether the item is kept on death.
     *
     * @worldMutation
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * 获取或设置物品的锁定模式。默认值为 `ItemLockMode.none`。
     *
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * @worldMutation
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * 最大堆叠大小。此值因物品类型而异。例如，火把的最大堆叠大小为 64，而鸡蛋的最大堆叠大小为 16。
     *
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * 此物品堆叠的给定名称。悬停在物品上时会显示名称标签。将名称标签设置为空字符串或 `undefined` 将移除该名称标签。
     *
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * @worldMutation
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。如果长度超过 255 个字符也会抛出异常。
     *
     * Throws if the slot's container is invalid. Also throws if
     * the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * 物品的类型。
     *
     * The type of the item.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link EngineError}
     *
     * {@link InvalidContainerSlotError}
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * 堆叠物品类型的标识符。如果未指定命名空间，则默认为 `minecraft:`。示例包括 `wheat` 或 `apple`。
     *
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly typeId: string;
    /**
     * @remarks
     * 清除此物品堆叠上设置的所有动态属性。
     *
     * Clears all dynamic properties that have been set on this
     * item stack.
     *
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 返回此容器槽位中的物品是否可以被破坏。
     *
     * Returns whether the item within this container slot can be
     * destroyed.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * 返回此容器槽位中的物品是否可以放置在方块上。
     *
     * Returns if the item in this container slot can be placed on.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getCanPlaceOn(): string[];
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
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 返回此物品堆叠上已使用的可用动态属性标识符集合。
     *
     * Returns the available set of dynamic property identifiers
     * that have been used on this item stack.
     *
     * @returns
     * 此实体上设置的动态属性的字符串数组。
     *
     * A string array of the dynamic properties set on this entity.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
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
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 创建物品堆叠的精确副本，包括任何自定义数据或属性。
     *
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * @returns
     * 返回槽位中物品的副本。如果槽位为空则返回 `undefined`。
     *
     * Returns a copy of the item in the slot. Returns undefined if
     * the slot is empty.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getItem(): ItemStack | undefined;
    /**
     * @remarks
     * 返回 ItemStack 的 lore 值——一个次要显示字符串。
     *
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * 一个 lore 字符串数组。如果物品没有 lore，则返回空数组。
     *
     * An array of lore strings. If the item does not have lore,
     * returns an empty array.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getLore(): string[];
    /**
     * @remarks
     * 返回 ItemStack 的 lore 值——一个次要显示字符串。字符串类型的 lore 行将被转换为 {@link RawMessage} 并放置在 {@link RawMessage.text} 下。
     *
     * Returns the lore value - a secondary display string - for an
     * ItemStack. String lore lines will be converted to a {@link
     * RawMessage} and put under {@link RawMessage.text}.
     *
     * @returns
     * 一个 lore 行数组。如果物品没有 lore，则返回空数组。
     *
     * An array of lore lines. If the item does not have lore,
     * returns an empty array.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getRawLore(): RawMessage[];
    /**
     * @remarks
     * 返回槽位中物品的所有标签。
     *
     * Returns all tags for the item in the slot.
     *
     * @returns
     * 返回槽位中物品的所有标签。如果槽位为空则返回空数组。
     *
     * Returns all tags for the item in the slot. Return an empty
     * array if the the slot is empty.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 返回此槽位是否拥有物品。
     *
     * Returns true if this slot has an item.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    hasItem(): boolean;
    /**
     * @remarks
     * 返回槽位中的物品是否具有给定标签。
     *
     * Returns whether the item in the slot slot has the given tag.
     *
     * @param tag
     * 物品标签。
     *
     * The item tag.
     * @returns
     * 如果槽位为空或槽位中的物品不具有给定标签，则返回 `false`。
     *
     * Returns false when the slot is empty or the item in the slot
     * does not have the given tag.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回此物品堆叠是否可以与给定的 `itemStack` 堆叠。这是通过比较物品类型以及物品堆叠关联的任何自定义数据和属性来确定的。每个物品堆叠的数量不予考虑。
     *
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     *
     * @param itemStack
     * 正在比较的 ItemStack。
     *
     * The ItemStack that is being compared.
     * @returns
     * 返回此物品堆叠是否可以与给定的 `itemStack` 堆叠。
     *
     * Returns whether this item stack can be stacked with the
     * given `itemStack`.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 在冒险模式下此物品可以破坏的方块类型列表。方块名称显示在物品的工具提示中。将该值设置为 `undefined` 将清除该列表。
     *
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * @worldMutation
     *
     * @param blockIdentifiers
     * 由标识符指定的方块列表。
     *
     * The list of blocks, given by their identifiers.
     * @throws
     * 如果槽位的容器无效则抛出异常。如果提供的任何方块标识符无效也会抛出异常。
     *
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 在冒险模式下此物品可以放置在上面的方块类型列表。这仅适用于方块物品。方块名称显示在物品的工具提示中。将该值设置为 `undefined` 将清除该列表。
     *
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * @worldMutation
     *
     * @param blockIdentifiers
     * 由标识符指定的方块列表。
     *
     * The list of blocks, given by their identifiers.
     * @throws
     * 如果槽位的容器无效则抛出异常。如果提供的任何方块标识符无效也会抛出异常。
     *
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
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
     * {@link InvalidContainerSlotError}
     *
     * {@link UnsupportedFunctionalityError}
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
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidContainerSlotError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 在槽位中设置给定的 ItemStack，替换任何现有物品。
     *
     * Sets the given ItemStack in the slot, replacing any existing
     * item.
     *
     * @worldMutation
     *
     * @param itemStack
     * 要放置在槽位中的 ItemStack。
     *
     * The ItemStack to be placed in the slot.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link ContainerRulesError}
     *
     * {@link InvalidContainerSlotError}
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * 设置 ItemStack 的 lore 值——一个次要显示字符串。
     *
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @worldMutation
     *
     * @param loreList
     * 一个 lore 字符串列表。将此参数设置为 `undefined` 将清除 lore。
     *
     * A list of lore strings. Setting this argument to undefined
     * will clear the lore.
     * @throws
     * 如果槽位的容器无效则抛出异常。
     *
     * Throws if the slot's container is invalid.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}

/**
 * 关于命令来源的详细信息。
 *
 * Details about the origins of the command.
 */
export class CustomCommandOrigin {
    private constructor();
    /**
     * @remarks
     * 如果此命令是通过 NPC 发起的，则返回发起 NPC 对话的实体。
     *
     * If this command was initiated via an NPC, returns the entity
     * that initiated the NPC dialogue.
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * 如果此命令是通过方块（如命令方块）触发的，则为来源方块。
     *
     * Source block if this command was triggered via a block
     * (e.g., a commandblock.)
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * 如果此命令是由实体（如 NPC）触发的，则为来源实体。
     *
     * Source entity if this command was triggered by an entity
     * (e.g., a NPC).
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * 返回触发此命令的来源类型。
     *
     * Returns the type of source that fired this command.
     *
     */
    readonly sourceType: CustomCommandSource;
}

/**
 * 提供注册自定义命令的功能。
 *
 * Provides the functionality for registering custom commands.
 */
export class CustomCommandRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个自定义命令，该命令在执行时触发脚本回调。
     *
     * Registers a custom command that when executed triggers a
     * script callback.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 命令执行时触发的回调。
     *
     * The callback triggered when the command executes.
     * @throws This function can throw errors.
     *
     * {@link CustomCommandError}
     *
     * {@link EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCommand(
        customCommand: CustomCommand,
        callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
    ): void;
    /**
     * @remarks
     * 注册一个自定义命令枚举。
     *
     * Registers a custom command enum.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link CustomCommandError}
     *
     * {@link EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerEnum(name: string, values: string[]): void;
}

/**
 * 包含自定义组件的 JSON 参数。
 *
 * Contains the custom component's JSON parameters
 */
export class CustomComponentParameters {
    private constructor();
    /**
     * @remarks
     * 包含来自自定义组件定义的参数的 JSON 对象。
     *
     * JSON object containing the parameters from the custom
     * component definition
     *
     */
    readonly params: unknown;
}

/**
 * 战利品物品条件，检查战利品来源是否被特定类型的实体伤害过。
 *
 * Loot item condition that checks whether the loot source was
 * damaged by a specific type of entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DamagedByEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     *
     * The entity type required for this condition to pass.
     *
     */
    readonly entityType: string;
}

/**
 * 包含与数据驱动实体事件触发相关的信息——例如，鸡的 `minecraft:ageable_grow_up` 事件。
 *
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    /**
     * @remarks
     * 触发事件的实体。
     *
     * Entity that the event triggered on.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 正在触发的数据驱动事件的名称。
     *
     * Name of the data driven event being triggered.
     *
     */
    readonly eventId: string;
    /**
     * @remarks
     * 一个可更新的组件状态修改列表，是此触发事件的效果。
     *
     * An updateable list of modifications to component state that
     * are the effect of this triggered event.
     *
     */
    getModifiers(): DefinitionModifier[];
}

/**
 * 包含与数据驱动实体事件触发相关的事件注册信息——例如，鸡的 `minecraft:ageable_grow_up` 事件。
 *
 * Contains event registration related to firing of a data
 * driven entity event - for example, the
 * minecraft:ageable_grow_up event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在数据驱动实体事件触发后被调用。
     *
     * Adds a callback that will be called after a data driven
     * entity event is triggered.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在数据驱动实体事件触发后不再被调用。
     *
     * Removes a callback that will be called after a data driven
     * entity event is triggered.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}

/**
 * 表示世界中特定维度（例如，末地）的类。
 *
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
export class Dimension {
    private constructor();
    /**
     * @remarks
     * 维度的高度范围。
     *
     * Height range of the dimension.
     *
     * @throws This property can throw when used.
     */
    readonly heightRange: NumberRange;
    /**
     * @remarks
     * 维度的标识符。
     *
     * Identifier of the dimension.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于语言文件本地化维度名称的键。
     *
     * Key for the localization of a dimension's name used by
     * language files.
     *
     */
    readonly localizationKey: string;
    /**
     * @rc
     * @remarks
     * 根据世界种子计算特定类型生物群系最近的位置。请注意，`calculateClosestBiomeFromSeed` 可能是一个开销较大的操作，因此在单个 tick 内避免多次调用。结果纯粹源自世界生成算法和世界种子，因此如果生物群系在生成后被修改，返回的位置可能不反映实际的当前地形。
     *
     * Calculates the location of the closest biome of a particular
     * type from the world seed. Note that
     * calculateClosestBiomeFromSeed can be an expensive operation,
     * so avoid using many of these calls within a particular tick.
     * The result is derived purely from the world generation
     * algorithm and the world seed, so the returned location may
     * not reflect the actual current terrain if biomes have been
     * modified after generation.
     *
     * @param pos
     * 要查找生物群系的起始位置。
     *
     * Starting location to look for a biome to find.
     * @param biomeToFind
     * 要查找的生物群系的标识符。
     *
     * Identifier of the biome to look for.
     * @param options
     * 生物群系搜索的其他选择条件。
     *
     * Additional selection criteria for a biome search.
     * @returns
     * 返回生物群系的位置，如果找不到则返回 `undefined`。
     *
     * Returns a location of the biome, or undefined if a biome
     * could not be found.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link Error}
     */
    calculateClosestBiomeFromSeed(
        pos: Vector3,
        biomeToFind: BiomeType | string,
        options?: BiomeSearchOptions,
    ): Vector3 | undefined;
    /**
     * @remarks
     * 检查一个区域是否包含指定的生物群系。如果该区域部分在世界边界之外，则只搜索边界内的部分。此操作的耗时与体积的面积和要检查的生物群系数量成正比。
     *
     * Checks if an area contains the specified biomes. If the area
     * is partially inside world boundaries, only the area that is
     * in bounds will be searched. This operation takes longer
     * proportional to both the area of the volume and the number
     * of biomes to check.
     *
     * @param volume
     * 要检查生物群系的区域。
     *
     * Area to check biomes in.
     * @param biomeFilter
     * 要包含和排除的生物群系列表。要包含和排除的标签列表。如果在区域中发现了排除列表中的生物群系或包含任何排除标签，则返回 `false`。
     *
     * A list of biomes to include and exclude. A list of tags to
     * include and exclude. Will return false if a biome is found
     * in the area that is in the excluded list or contains any of
     * the excluded tags.
     * @param isSuperset
     * Superset 用于确定过滤的严格程度。如果 superset 设置为 `true`，则区域必须包含一个或多个包含列表中的生物群系，或包含所有包含的标签。如果 superset 设置为 `false`，则区域必须仅包含包含列表中的生物群系，并且包含所有包含的标签。
     *
     * Superset is used to determine the strictness of the filter.
     * If superset is set to true then the area must contain one or
     * more biomes in the included list or that contains all of the
     * included tags. If superset is set to false then the area
     * must contain only biomes in the included list and that
     * contain all of the included tags
     * @returns
     * 如果区域中的生物群系匹配传入的过滤设置则返回 `true`，否则返回 `false`。
     *
     * Returns true if the biomes in the area match the filter
     * settings passed in. Otherwise, returns false.
     * @throws
     * 如果提供的区域包含未加载的区块则会抛出错误。如果提供的区域完全在世界边界之外则会抛出错误。如果提供了未知的生物群系名称则会抛出错误。
     *
     * An error will be thrown if the area provided includes
     * unloaded chunks.
     * An error will be thrown if the area provided is completely
     * outside the world boundaries.
     * An error will be thrown if an unknown biome name is
     * provided.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     *
     * {@link UnloadedChunksError}
     */
    containsBiomes(volume: BlockVolumeBase, biomeFilter: BiomeFilter, isSuperset: boolean): boolean;
    /**
     * @remarks
     * 在方块体积中搜索满足方块过滤条件的方块。
     *
     * Searches the block volume for a block that satisfies the
     * block filter.
     *
     * @param volume
     * 要被检查的方块体积。
     *
     * Volume of blocks that will be checked.
     * @param filter
     * 将要与体积中每个方块进行比对的方块过滤条件。
     *
     * Block filter that will be checked against each block in the
     * volume.
     * @param allowUnloadedChunks
     * 如果设置为 `true`，将抑制 UnloadedChunksError（如果部分或全部方块体积位于已加载区块之外）。将只检查体积中位于已加载区块内的方块位置。默认值：`false`。
     *
     * If set to true will suppress the UnloadedChunksError if some
     * or all of the block volume is outside of the loaded chunks.
     * Will only check the block locations that are within the
     * loaded chunks in the volume.
     * Defaults to: false
     * @returns
     * 如果体积中至少有一个方块满足过滤条件则返回 `true`，否则返回 `false`。
     *
     * Returns true if at least one block in the volume satisfies
     * the filter, false otherwise.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;
    /**
     * @remarks
     * 在指定位置创建一次爆炸。
     *
     * Creates an explosion at the specified location.
     *
     * @worldMutation
     *
     * @param location
     * 爆炸的位置。
     *
     * The location of the explosion.
     * @param radius
     * 要创建的爆炸的半径（以方块为单位）。范围：[0, 1000]
     *
     * Radius, in blocks, of the explosion to create.
     * Bounds: [0, 1000]
     * @param explosionOptions
     * 爆炸的其他可配置选项。
     *
     * Additional configurable options for the explosion.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample createExplosion.ts
     * @seeExample createNoBlockExplosion.ts
     * @seeExample createExplosions.ts
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    /**
     * @remarks
     * 使用特定的方块类型填充一个区域的方块。
     *
     * Fills an area of blocks with a specific block type.
     *
     * @worldMutation
     *
     * @param volume
     * 要被填充的方块体积。
     *
     * Volume of blocks to be filled.
     * @param block
     * 用于填充体积的方块类型。
     *
     * Type of block to fill the volume with.
     * @param options
     * 一组附加选项，例如可用于包含/排除填充中特定方块的方块过滤器。
     *
     * A set of additional options, such as a block filter which
     * can be used to include / exclude specific blocks in the
     * fill.
     * @returns
     * 返回包含所有已放置方块的 ListBlockVolume。
     *
     * Returns a ListBlockVolume which contains all the blocks that
     * were placed.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    fillBlocks(
        volume: BlockVolumeBase,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): ListBlockVolume;
    /**
     * @remarks
     * 返回指定位置的生物群系类型。
     *
     * Returns the biome type at the specified location.
     *
     * @param location
     * 检查生物群系的位置。
     *
     * Location at which to check the biome.
     * @throws
     * 如果位置在世界边界之外则会抛出错误。如果位置在未加载的区块中则会抛出错误。
     *
     * An error will be thrown if the location is out of world
     * bounds.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBiome(location: Vector3): BiomeType;
    /**
     * @remarks
     * 返回给定位置的方块实例。
     *
     * Returns a block instance at the given location.
     *
     * @param location
     * 要返回方块的位置。
     *
     * The location at which to return a block.
     * @returns
     * 指定位置的方块，如果请求的方块位于未加载的区块中，则返回 `undefined`。
     *
     * Block at the specified location, or 'undefined' if asking
     * for a block at an unloaded chunk.
     * @throws
     * PositionInUnloadedChunkError：当尝试与不再位于已加载且正在运行的区块中的 Block 对象交互时抛出的异常。
     * PositionOutOfWorldBoundariesError：当尝试与维度高度范围之外的位置交互时抛出的异常。
     *
     * PositionInUnloadedChunkError: Exception thrown when trying
     * to interact with a Block object that isn't in a loaded and
     * ticking chunk anymore
     *
     * PositionOutOfWorldBoundariesError: Exception thrown when
     * trying to interact with a position outside of dimension
     * height range
     *
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * @remarks
     * 根据给定的选项，获取给定方块位置上方的第一个方块（默认情况下，将找到上方的第一个实心方块）。
     *
     * Gets the first block found above a given block location
     * based on the given options (by default will find the first
     * solid block above).
     *
     * @param location
     * 要从中获取上方方块的位置。
     *
     * Location to retrieve the block above from.
     * @param options
     * 用于判断方块是否为有效结果的选项。
     *
     * The options to decide if a block is a valid result.
     * @throws This function can throw errors.
     */
    getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @remarks
     * 根据给定的选项，获取给定方块位置下方的第一个方块（默认情况下，将找到下方的第一个实心方块）。
     *
     * Gets the first block found below a given block location
     * based on the given options (by default will find the first
     * solid block below).
     *
     * @param location
     * 要从中获取下方方块的位置。
     *
     * Location to retrieve the block below from.
     * @param options
     * 用于判断方块是否为有效结果的选项。
     *
     * The options to decide if a block is a valid result.
     * @throws This function can throw errors.
     */
    getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @remarks
     * 获取从某个位置发射的向量相交的第一个方块。
     *
     * Gets the first block that intersects with a vector emanating
     * from a location.
     *
     * @param location
     * 发起射线检查的位置。
     *
     * Location from where to initiate the ray check.
     * @param direction
     * 发射射线的向量方向。
     *
     * Vector direction to cast the ray.
     * @param options
     * 处理此射线投射查询的附加选项。
     *
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @remarks
     * 获取一个体积中满足方块查询选项的所有方块。
     *
     * Gets all the blocks in a volume that satisfy the block query
     * options.
     *
     * @param volume
     * 要被检查的方块体积。
     *
     * Volume of blocks that will be checked.
     * @param options
     * 方块查询选项，包括过滤条件和可选的最接近/最远距离排序（相对于某个位置）。
     *
     * Block query options including filter criteria and optional
     * closest/farthest distance sorting from a location.
     * @param allowUnloadedChunks
     * 如果设置为 `true`，将抑制 UnloadedChunksError（如果部分或全部方块体积位于已加载区块之外）。将只检查体积中位于已加载区块内的方块位置。默认值：`false`。
     *
     * If set to true will suppress the UnloadedChunksError if some
     * or all of the block volume is outside of the loaded chunks.
     * Will only check the block locations that are within the
     * loaded chunks in the volume.
     * Defaults to: false
     * @returns
     * 返回包含所有满足方块查询选项的方块位置的 ListBlockVolume。
     *
     * Returns the ListBlockVolume that contains all the block
     * locations that satisfied the block query options.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link UnloadedChunksError}
     */
    getBlocks(volume: BlockVolumeBase, options: BlockQueryOptions, allowUnloadedChunks?: boolean): ListBlockVolume;
    /**
     * @remarks
     * 根据一组通过 EntityQueryOptions 过滤条件集定义的条件返回一组实体。
     *
     * Returns a set of entities based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * 可用于过滤返回实体集合的附加选项。
     *
     * Additional options that can be used to filter the set of
     * entities returned.
     * @returns
     * 一个实体数组。
     *
     * An entity array.
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidArgumentError}
     * @seeExample bounceSkeletons.ts
     * @seeExample tagsQuery.ts
     * @seeExample testThatEntityIsFeatherItem.ts
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * @remarks
     * 返回特定位置的一组实体。
     *
     * Returns a set of entities at a particular location.
     *
     * @param location
     * 要返回实体的位置。
     *
     * The location at which to return entities.
     * @returns
     * 指定位置的零个或多个实体。
     *
     * Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @remarks
     * 获取与从某个位置发射的指定向量相交的实体。
     *
     * Gets entities that intersect with a specified vector
     * emanating from a location.
     *
     * @param options
     * 处理此射线投射查询的附加选项。
     *
     * Additional options for processing this raycast query.
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
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @beta
     * @remarks
     * 返回包含指定位置的已生成结构的向量（例如，掠夺者前哨站、废弃矿井等）。如果未找到任何结构，则向量为空。
     *
     * Returns a vector of generated structures that contain the
     * specified location (ex: Pillager Outpost, Mineshaft, etc.).
     * The vector will be empty if no structures are found.
     *
     * @param location
     * 检查结构的位置。
     *
     * Location at which to check for structures.
     * @throws
     * 如果位置在世界边界之外则会抛出错误。如果位置在未加载的区块中则会抛出错误。
     *
     * An error will be thrown if the location is out of world
     * bounds.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getGeneratedStructures(location: Vector3): (MinecraftFeatureTypes | string)[];
    /**
     * @remarks
     * 返回照射在特定方块位置上的总亮度级别。
     *
     * Returns the total brightness level of light shining on a
     * certain block position.
     *
     * @param location
     * 我们要检查亮度的方块位置。
     *
     * Location of the block we want to check the brightness of.
     * @returns
     * 方块上的亮度级别。
     *
     * The brightness level on the block.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(location: Vector3): number;
    /**
     * @remarks
     * 根据一组通过 EntityQueryOptions 过滤条件集定义的条件返回一组玩家。
     *
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * 可用于过滤返回玩家集合的附加选项。
     *
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * 一个玩家数组。
     *
     * A player array.
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @remarks
     * 返回特定方块位置上从天空照射的光线的亮度级别。
     *
     * Returns the brightness level of light shining from the sky
     * on a certain block position.
     *
     * @param location
     * 我们要检查亮度的方块位置。
     *
     * Position of the block we want to check the brightness of.
     * @returns
     * 方块上的亮度级别。
     *
     * The brightness level on the block.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(location: Vector3): number;
    /**
     * @remarks
     * 返回给定 XZ 位置处的最高方块。
     *
     * Returns the highest block at the given XZ location.
     *
     * @param locationXZ
     * 要获取最高方块的位置。
     *
     * Location to retrieve the topmost block for.
     * @param minHeight
     * 开始搜索的 Y 高度。默认值为最大维度高度。
     *
     * The Y height to begin the search from. Defaults to the
     * maximum dimension height.
     * @throws This function can throw errors.
     */
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * 返回当前的天气。
     *
     * Returns the current weather.
     *
     * @returns
     * 返回解释当前天气大类别的 WeatherType。
     *
     * Returns a WeatherType that explains the broad category of
     * weather that is currently going on.
     */
    getWeather(): WeatherType;
    /**
     * @remarks
     * 如果给定位置的区块已加载（且可用于脚本使用），则返回 `true`。
     *
     * Returns true if the chunk at the given location is loaded
     * (and valid for use with scripting).
     *
     * @param location
     * 检查区块是否已加载的位置。
     *
     * Location to check if the chunk is loaded.
     */
    isChunkLoaded(location: Vector3): boolean;
    /**
     * @remarks
     * 将给定的特性放置到维度中的指定位置。
     *
     * Places the given feature into the dimension at the specified
     * location.
     *
     * @worldMutation
     *
     * @param featureName
     * 特性的字符串标识符。
     *
     * The string identifier for the feature.
     * @param location
     * 放置特性的位置。
     *
     * Location to place the feature.
     * @param shouldThrow
     * 指定如果无法放置特性，函数调用是否会抛出错误。
     * 注意：如果使用未知的特性名称或尝试在未加载的区块中放置，函数调用将始终抛出错误。
     * 默认值：`false`
     *
     * Specifies if the function call will throw an error if the
     * feature could not be placed.
     * Note: The function call will always throw an error if using
     * an unknown feature name or trying to place in a unloaded
     * chunk.
     * Defaults to: false
     * @throws
     * 如果特性名称无效则会抛出错误。如果位置在未加载的区块中则会抛出错误。
     *
     * An error will be thrown if the feature name is invalid.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean;
    /**
     * @remarks
     * 将给定的特性规则放置到维度中的指定位置。
     *
     * Places the given feature rule into the dimension at the
     * specified location.
     *
     * @worldMutation
     *
     * @param featureRuleName
     * 特性规则的字符串标识符。
     *
     * The string identifier for the feature rule.
     * @param location
     * 放置特性规则的位置。
     *
     * Location to place the feature rule.
     * @throws
     * 如果特性规则名称无效则会抛出错误。如果位置在未加载的区块中则会抛出错误。
     *
     * An error will be thrown if the feature rule name is invalid.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeatureRule(featureRuleName: string, location: Vector3): boolean;
    /**
     * @remarks
     * 为所有玩家播放声音。
     *
     * Plays a sound for all players.
     *
     * @worldMutation
     *
     * @param soundId
     * 声音的标识符。
     *
     * Identifier of the sound.
     * @param location
     * 声音的位置。
     *
     * Location of the sound.
     * @param soundOptions
     * 用于配置声音附加效果的选项。
     *
     * Additional options for configuring additional effects for
     * the sound.
     * @throws
     * 如果音量小于 0.0 则会抛出错误。如果淡入淡出小于 0.0 则会抛出错误。如果音调小于 0.01 则会抛出错误。如果音量小于 0.0 则会抛出错误。
     *
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * An error will be thrown if pitch is less than 0.01.
     * An error will be thrown if volume is less than 0.0.
     *
     * {@link EngineError}
     *
     * {@link PropertyOutOfBoundsError}
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): SoundInstance;
    /**
     * @remarks
     * 使用更广泛维度的上下文同步运行一条命令。
     *
     * Runs a command synchronously using the context of the
     * broader dimenion.
     *
     * @worldMutation
     *
     * @param commandString
     * 要运行的命令。注意命令字符串不应以斜杠开头。
     *
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * 返回包含命令成功执行次数的命令结果。
     *
     * Returns a command result with a count of successful values
     * from the command.
     * @throws
     * 如果命令因参数不正确或命令语法错误而失败，或者在命令的错误情况下抛出异常。请注意，在许多情况下，如果命令没有执行（例如，目标选择器未找到任何匹配项），此方法将不会抛出异常。
     *
     * Throws an exception if the command fails due to incorrect
     * parameters or command syntax, or in erroneous cases for the
     * command. Note that in many cases, if the command does not
     * operate (e.g., a target selector found no matches), this
     * method will not throw an exception.
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * 使用 BlockPermutation 在世界中设置一个方块。BlockPermutation 是具有特定状态的方块。
     *
     * Sets a block in the world using a BlockPermutation.
     * BlockPermutations are blocks with a particular state.
     *
     * @worldMutation
     *
     * @param location
     * 维度内要设置方块的位置。
     *
     * The location within the dimension to set the block.
     * @param permutation
     * 要设置的方块置换。
     *
     * The block permutation to set.
     * @throws
     * 如果位置位于未加载的区块中或世界边界之外则抛出异常。
     *
     * Throws if the location is within an unloaded chunk or
     * outside of the world bounds.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    /**
     * @remarks
     * 在维度内的给定位置设置一个方块。
     *
     * Sets a block at a given location within the dimension.
     *
     * @worldMutation
     *
     * @param location
     * 维度内要设置方块的位置。
     *
     * The location within the dimension to set the block.
     * @param blockType
     * 要设置的方块类型。可以是字符串标识符或 BlockType。使用默认的方块置换。
     *
     * The type of block to set. This can be either a string
     * identifier or a BlockType. The default block permutation is
     * used.
     * @throws
     * 如果位置位于未加载的区块中或世界边界之外则抛出异常。
     *
     * Throws if the location is within an unloaded chunk or
     * outside of the world bounds.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockType(location: Vector3, blockType: BlockType | string): void;
    /**
     * @remarks
     * 设置维度内的当前天气。
     *
     * Sets the current weather within the dimension
     *
     * @worldMutation
     *
     * @param weatherType
     * 设置要应用的天气类型。
     *
     * Set the type of weather to apply.
     * @param duration
     * 设置天气的持续时间（以 tick 为单位）。如果未提供持续时间，则持续时间将设置为 300 到 900 秒之间的随机值。范围：[1, 1000000]
     *
     * Sets the duration of the weather (in ticks). If no duration
     * is provided, the duration will be set to a random duration
     * between 300 and 900 seconds.
     * Bounds: [1, 1000000]
     * @throws This function can throw errors.
     */
    setWeather(weatherType: WeatherType, duration?: number): void;
    /**
     * @remarks
     * 在指定位置创建一个新实体（例如，一个生物）。
     *
     * Creates a new entity (e.g., a mob) at the specified
     * location.
     *
     * @worldMutation
     *
     * @param identifier
     * 要生成的实体类型的标识符。如果未指定命名空间，则默认为 `minecraft:`。
     *
     * Identifier of the type of entity to spawn. If no namespace
     * is specified, 'minecraft:' is assumed.
     * @param location
     * 创建实体的位置。
     *
     * The location at which to create the entity.
     * @returns
     * 在指定位置新创建的实体。
     *
     * Newly created entity at the specified location.
     * @throws This function can throw errors.
     *
     * {@link EntitySpawnError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample spawnAdultHorse.ts
     * @seeExample quickFoxLazyDog.ts
     * @seeExample triggerEvent.ts d45f49d2
     */
    spawnEntity<T = never>(
        identifier: EntityIdentifierType<NoInfer<T>>,
        location: Vector3,
        options?: SpawnEntityOptions,
    ): Entity;
    /**
     * @remarks
     * 在指定位置创建一个新的物品堆叠实体。
     *
     * Creates a new item stack as an entity at the specified
     * location.
     *
     * @worldMutation
     *
     * @param location
     * 创建物品堆叠的位置。
     *
     * The location at which to create the item stack.
     * @returns
     * 在指定位置新创建的物品堆叠实体。
     *
     * Newly created item stack entity at the specified location.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample itemStacks.ts
     * @seeExample spawnFeatherItem.ts
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @remarks
     * 在世界中的指定位置创建一个新的粒子发射器。
     *
     * Creates a new particle emitter at a specified location in
     * the world.
     *
     * @worldMutation
     *
     * @param effectName
     * 要创建的粒子的标识符。
     *
     * Identifier of the particle to create.
     * @param location
     * 创建粒子发射器的位置。
     *
     * The location at which to create the particle emitter.
     * @param molangVariables
     * 一组可选的、可自定义的变量，可以为此粒子进行调整。
     *
     * A set of optional, customizable variables that can be
     * adjusted for this particle.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample spawnParticle.ts bba750fb
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @beta
     * @remarks
     * 在维度中的指定位置生成一个经验球。
     *
     * Spawns an experience orb at a specified location in the
     * dimension.
     *
     * @worldMutation
     *
     * @param location
     * 生成经验球的位置。
     *
     * The location at which to spawn the experience orb.
     * @param amount
     * 给予经验球的经验量。范围：[1, 12000]
     *
     * The amount of experience to give the experience orb.
     * Bounds: [1, 12000]
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnXp(location: Vector3, amount: number): void;
    /**
     * @beta
     * @remarks
     * 停止所有玩家播放的所有声音。
     *
     * Stops all sounds from playing for all players.
     *
     * @worldMutation
     *
     */
    stopAllSounds(): void;
    /**
     * @beta
     * @remarks
     * 停止所有玩家播放的某个声音。
     *
     * Stops a sound from playing for all players.
     *
     * @worldMutation
     *
     * @param soundId
     * 声音的标识符。
     *
     * Identifier of the sound.
     */
    stopSound(soundId: string): void;
}

/**
 * 提供注册自定义维度的功能。自定义维度只能在系统启动事件期间注册。
 *
 * Provides the functionality for registering custom
 * dimensions. Custom dimensions can only be registered during
 * the system startup event.
 */
export class DimensionRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个新的自定义维度类型。必须在系统启动事件期间调用。维度将使用虚空生成器创建。
     *
     * Registers a new custom dimension type. Must be called during
     * the system startup event. The dimension will be created
     * using the void generator.
     *
     * @earlyExecution
     *
     * @param typeId
     * 自定义维度的命名空间标识符（例如，`mypack:my_dimension`）。必须包含命名空间，并仅使用有效的标识符字符。
     *
     * The namespaced identifier for the custom dimension (e.g.,
     * 'mypack:my_dimension'). Must include a namespace and use
     * only valid identifier characters.
     * @throws This function can throw errors.
     *
     * {@link CustomDimensionAlreadyRegisteredError}
     *
     * {@link CustomDimensionInvalidRegistryError}
     *
     * {@link CustomDimensionNameError}
     *
     * {@link CustomDimensionReloadNewDimensionError}
     *
     * {@link EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomDimension(typeId: string): void;
}

/**
 * 表示维度的一种类型。目前仅适用于原版维度。
 *
 * Represents a type of dimension. Currently only works with
 * Vanilla dimensions.
 */
export class DimensionType {
    private constructor();
    /**
     * @remarks
     * 维度类型的标识符。目前仅适用于原版维度。
     *
     * Identifier of the dimension type. Currently only works with
     * Vanilla dimensions.
     *
     */
    readonly typeId: string;
}

/**
 * 用于访问所有可用的维度类型。目前仅适用于原版维度。
 *
 * Used for accessing all available dimension types. Currently
 * only works with Vanilla dimensions.
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * 使用基于字符串的标识符检索维度类型。目前仅适用于原版维度。
     *
     * Retrieves a dimension type using a string-based identifier.
     * Currently only works with Vanilla dimensions.
     *
     * @earlyExecution
     *
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * 检索所有维度类型的数组。目前仅适用于原版维度。
     *
     * Retrieves an array of all dimension types. Currently only
     * works with Vanilla dimensions.
     *
     * @earlyExecution
     *
     */
    static getAll(): DimensionType[];
}

/**
 * 表示一个已添加到实体上的效果——例如中毒。
 *
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * 获取应用于此效果的放大器。示例值通常范围为 0 到 4。例如：效果"跳跃提升 II"的放大器值为 1。
     *
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     *
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 获取此效果的玩家友好名称。
     *
     * Gets the player-friendly name of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * 获取此效果的整个指定持续时间（以 tick 为单位）。每秒有 20 tick。使用 {@link TicksPerSecond} 常量在 tick 和秒之间进行转换。
     *
     * Gets the entire specified duration, in ticks, of this
     * effect. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * 返回一个效果实例在此上下文中是否可用于使用。
     *
     * Returns whether an effect instance is available for use in
     * this context.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取此效果的类型 ID。
     *
     * Gets the type id of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
}

/**
 * 包含与将效果（如中毒）添加到实体相关的变化信息。
 *
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddAfterEvent {
    private constructor();
    /**
     * @remarks
     * 效果的附加属性和详细信息。
     *
     * Additional properties and details of the effect.
     *
     */
    readonly effect: Effect;
    /**
     * @remarks
     * 正在添加效果的实体。
     *
     * Entity that the effect is being added to.
     *
     */
    readonly entity: Entity;
}

/**
 * 管理与将效果添加到实体时相关的回调。
 *
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当效果被添加到实体时将被调用。
     *
     * Adds a callback that will be called when an effect is added
     * to an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EffectAddAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在效果被添加到实体时不再被调用。
     *
     * Removes a callback from being called when an effect is added
     * to an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}

/**
 * 包含与将效果（如中毒）添加到实体相关的变化信息。
 *
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 当设置为 `true` 时会取消事件。
     *
     * When set to true will cancel the event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 效果的持续时间。
     *
     * Effect duration.
     *
     */
    duration: number;
    /**
     * @remarks
     * 正在添加的效果的类型。
     *
     * The type of the effect that is being added.
     *
     */
    readonly effectType: string;
    /**
     * @remarks
     * 正在添加效果的实体。
     *
     * Entity that the effect is being added to.
     *
     */
    readonly entity: Entity;
}

/**
 * 管理与将效果添加到实体时相关的回调。
 *
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当效果被添加到实体时将被调用。
     *
     * Adds a callback that will be called when an effect is added
     * to an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限被调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在效果被添加到实体时不再被调用。
     *
     * Removes a callback from being called when an effect is added
     * to an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}

/**
 * 表示一种效果类型——例如中毒——可以应用于实体。
 *
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectType {
    private constructor();
    /**
     * @remarks
     * 此效果类型的标识符名称。
     *
     * Identifier name of this effect type.
     *
     * @returns
     * 效果类型的标识符。
     *
     * Identifier of the effect type.
     */
    getName(): string;
}

/**
 * 表示一种效果类型——例如中毒——可以应用于实体。
 *
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectTypes {
    private constructor();
    /**
     * @remarks
     * 获取给定标识符的效果类型。
     *
     * Effect type for the given identifier.
     *
     * @worldMutation
     *
     * @param identifier
     * 效果的标识符。
     *
     * The identifier for the effect.
     * @returns
     * 返回给定标识符的效果类型，如果效果不存在则返回 `undefined`。
     *
     * Effect type for the given identifier or undefined if the
     * effect does not exist.
     */
    static get(identifier: string): EffectType | undefined;
    /**
     * @remarks
     * 获取所有效果。
     *
     * Gets all effects.
     *
     * @worldMutation
     *
     * @returns
     * 所有效果的列表。
     *
     * A list of all effects.
     */
    static getAll(): EffectType[];
}

/**
 * 表示战利品池中的一个完全空的条目。如果选择此条目，则不会掉落任何物品。
 *
 * Represents a completely empty entry in a loot pool. If this
 * entry is chosen, no items will drop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EmptyLootItem extends LootPoolEntry {
    private constructor();
}

/**
 * 附魔信息。
 *
 * Enchantment information.
 */
export class EnchantInfo {
    private constructor();
    /**
     * 附魔的标识符。
     *
     * The enchantment identifier.
     */
    readonly enchantment: string;
    /**
     * 值的范围。
     *
     * The value range.
     */
    readonly range: NumberRange;
}

/**
 * 包含一种附魔类型的信息。
 *
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
    /**
     * @remarks
     * 附魔类型的名称。
     *
     * The name of the enchantment type.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 此附魔类型可拥有的最大等级。
     *
     * The maximum level this type of enchantment can have.
     *
     */
    readonly maxLevel: number;
    /**
     * @throws This function can throw errors.
     */
    constructor(enchantmentType: string);
}

/**
 * 包含此世界中可用的 Minecraft 附魔类型目录。
 *
 * Contains a catalog of Minecraft Enchantment Types that are
 * available in this world.
 */
export class EnchantmentTypes {
    private constructor();
    /**
     * @remarks
     * 使用指定标识符检索附魔。
     *
     * Retrieves an enchantment with the specified identifier.
     *
     * @param enchantmentId
     * 附魔的标识符。例如，`minecraft:flame`。
     *
     * Identifier of the enchantment.  For example,
     * "minecraft:flame".
     * @returns
     * 如果可用，返回表示指定附魔的 EnchantmentType 对象。
     *
     * If available, returns an EnchantmentType object that
     * represents the specified enchantment.
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
    /**
     * @remarks
     * 返回所有可用附魔类型的集合。
     *
     * Returns a collection of all available enchantment types.
     *
     */
    static getAll(): EnchantmentType[];
}

/**
 * 战利品物品函数，使用与原版生物生成时附魔装备相同的算法，对掉落的物品应用随机附魔。
 *
 * Loot item function that applies a random enchant to the
 * dropped item using the same algorithm used while enchanting
 * equipment vanilla mobs spawn with.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomEquipmentFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 决定装备被附魔的可能性的值。
     *
     * Value that determines the likelihood of equipment being
     * enchanted.
     *
     */
    readonly chance: number;
}

/**
 * 随机附魔掉落物品的战利品物品函数。
 *
 * Loot item function that randomly enchants the dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomlyFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 确定是否将宝藏附魔包含在随机选择的附魔中。
     *
     * Determines whether or not treasure enchantments are included
     * in the randomly chosen enchantments.
     *
     */
    readonly treasure: boolean;
}

/**
 * 对掉落物品应用随机附魔的战利品物品函数。
 *
 * Loot item function that applies a random enchant to the
 * dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantWithLevelsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择要应用的附魔等级的值范围。包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * level of enchantment to apply. Contains minimum and maximum
     * values.
     *
     */
    readonly levels: NumberRange;
    /**
     * @remarks
     * 确定是否将宝藏附魔包含在随机附魔选择中的值。
     *
     * Value that determines whether or not treasure enchants
     * should be included in the random enchant selection.
     *
     */
    readonly treasure: boolean;
}

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

/**
 * 添加时，此组件使实体在生成时携带指定 entityType 的骑乘者。
 *
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 在特定条件下生成时作为此实体骑乘者添加的实体类型。
     *
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     *
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /**
     * @remarks
     * 可选的在骑乘者为此实体生成时触发的事件。
     *
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}

/**
 * 为实体添加成长计时器。可以通过给予实体其喜好的物品（由 feedItems 定义）来加速成长。
 *
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体成长前的剩余时间，-1 表示始终为幼年体。
     *
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * 此实体成长时触发的事件。
     *
     * Event that runs when this entity grows up.
     *
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * 使用的饲料物品在成功交互后将转化为此物品。
     *
     * The feed item used will transform into this item upon
     * successful interaction.
     *
     * @throws This property can throw when used.
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * 实体成长时掉落的物品列表。
     *
     * List of items that the entity drops when it grows up.
     *
     * @throws This function can throw errors.
     */
    getDropItems(): string[];
    /**
     * @remarks
     * 可以喂给实体的物品列表。包含 `item`（物品名称）和 `growth`（定义成长多少时间）。
     *
     * List of items that can be fed to the entity. Includes 'item'
     * for the item name and 'growth' to define how much time it
     * grows up by.
     *
     * @throws This function can throw errors.
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}

/**
 * 这是任何以数字为中心、可以定义最小值、最大值和默认值的实体组件的基类抽象类。
 *
 * This is a base abstract class for any entity component that
 * centers around a number and can have a minimum, maximum, and
 * default defined value.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实例当前属性的值。
     *
     * Current value of this attribute for this instance.
     *
     * @throws This property can throw when used.
     */
    readonly currentValue: number;
    /**
     * @remarks
     * 返回此属性的默认定义值。
     *
     * Returns the default defined value for this attribute.
     *
     * @throws This property can throw when used.
     */
    readonly defaultValue: number;
    /**
     * @remarks
     * 返回给定任何其他环境组件或因素后此属性的有效最大值。
     *
     * Returns the effective max of this attribute given any other
     * ambient components or factors.
     *
     * @throws This property can throw when used.
     */
    readonly effectiveMax: number;
    /**
     * @remarks
     * 返回给定任何其他环境组件或因素后此属性的有效最小值。
     *
     * Returns the effective min of this attribute given any other
     * ambient components or factors.
     *
     * @throws This property can throw when used.
     */
    readonly effectiveMin: number;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的默认值。
     *
     * Resets the current value of this attribute to the defined
     * default value.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的最大值。
     *
     * Resets the current value of this attribute to the maximum
     * defined value.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的最小值。
     *
     * Resets the current value of this attribute to the minimum
     * defined value.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * 设置此属性的当前值。
     *
     * Sets the current value of this attribute.
     *
     * @worldMutation
     *
     * @throws
     * 如果值超出范围，将抛出 ArgumentOutOfBounds Error。
     *
     * If the value is out of bounds, an ArgumentOutOfBounds Error
     * is thrown.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setCurrentValue(value: number): boolean;
}

/**
 * 实体移动事件系列的基类。
 *
 * Base class for a family of entity movement events.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该生物此移动模式的最大转弯速率。
     *
     * Maximum turn rate for this movement modality of the mob.
     *
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
}

/**
 * 定义此实体可以在哪些方块中呼吸，并赋予它们窒息的能力。
 *
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 实体的当前空气供应量。
     *
     * The current air supply of the entity.
     *
     * @worldMutation
     *
     * @throws
     * 如果空气供应超出范围 [suffocationTime, maxAirSupply] 将抛出错误。
     *
     * Will throw an error if the air supply is out of bounds
     * [suffocationTime, maxAirSupply].
     */
    airSupply: number;
    /**
     * @remarks
     * 如果为 `true`，此实体可以在空气中呼吸。
     *
     * If true, this entity can breathe in air.
     *
     * @throws This property can throw when used.
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * 如果为 `true`，此实体可以在熔岩中呼吸。
     *
     * If true, this entity can breathe in lava.
     *
     * @throws This property can throw when used.
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * 如果为 `true`，此实体可以在实心方块中呼吸。
     *
     * If true, this entity can breathe in solid blocks.
     *
     * @throws This property can throw when used.
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * 如果为 `true`，此实体可以在水中呼吸。
     *
     * If true, this entity can breathe in water.
     *
     * @throws This property can throw when used.
     */
    readonly breathesWater: boolean;
    /**
     * @beta
     * @remarks
     * 如果为 `true`，该实体能够呼吸。
     *
     * If true, the entity is able to breathe.
     *
     * @throws This property can throw when used.
     */
    readonly canBreathe: boolean;
    /**
     * @remarks
     * 如果为 `true`，此实体在水中时会显示可见的气泡。
     *
     * If true, this entity will have visible bubbles while in
     * water.
     *
     * @throws This property can throw when used.
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * 恢复到最大呼吸量的时间（以秒为单位）。
     *
     * Time in seconds to recover breath to maximum.
     *
     * @throws This property can throw when used.
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * 窒息伤害之间的时间间隔（以秒为单位）。
     *
     * Time in seconds between suffocation damage.
     *
     * @throws This property can throw when used.
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * 实体可以屏住呼吸的时间（以秒为单位）。
     *
     * Time in seconds the entity can hold its breath.
     *
     * @throws This property can throw when used.
     */
    readonly totalSupply: number;
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * 此实体可以呼吸的方块列表，除了按方块类别区分的单独属性之外。
     *
     * List of blocks this entity can breathe in, in addition to
     * the separate properties for classes of blocks.
     *
     * @throws This function can throw errors.
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * 此实体不能呼吸的方块列表。
     *
     * List of blocks this entity can't breathe in.
     *
     * @throws This function can throw errors.
     */
    getNonBreatheBlocks(): BlockPermutation[];
}

/**
 * 添加时，此组件表示该实体可以爬梯子。
 *
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_climb';
}

/**
 * 添加时，此组件表示该实体可以飞行，且寻路器不会限制在下方需要有实心方块的路径上。
 *
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}

/**
 * 添加时，此组件表示该实体可以像 Minecraft 中的马一样进行蓄力跳跃。
 *
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_power_jump';
}

/**
 * 定义实体的次要颜色。仅对具有次要预定义颜色值的特定实体（例如，热带鱼）有效。
 *
 * Defines the entity's secondary color. Only works on certain
 * entities that have secondary predefined color values (e.g.,
 * tropical fish).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * Value of this particular color.
     *
     * @throws This property can throw when used.
     */
    readonly value: PaletteColor;
    static readonly componentId = 'minecraft:color2';
}

/**
 * 定义实体的颜色。仅对具有预定义颜色值的特定实体（例如，羊、羊驼、潜影贝）有效。
 *
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (e.g., sheep, llama,
 * shulker).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * Value of this particular color.
     *
     * @worldMutation
     *
     */
    value: number;
    static readonly componentId = 'minecraft:color';
}

/**
 * 下游实体组件的基类。
 *
 * Base class for downstream entity components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 拥有此组件的实体。如果实体已被移除，则实体将为 `undefined`。
     *
     * The entity that owns this component. The entity will be
     * undefined if it has been removed.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly entity: Entity;
}

/**
 * 包含关于特定实体容器被关闭的信息。
 *
 * Contains information regarding a specific entity container
 * being closed.
 */
export class EntityContainerClosedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 实体容器被关闭的来源。
     *
     * The source of the entity container being closed.
     *
     */
    readonly closeSource: ContainerAccessSource;
    readonly entity: Entity;
}

/**
 * 管理与实体容器被关闭后相关的回调。
 *
 * Manages callbacks that are connected to after an entity container is closed.
 */
export class EntityContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体容器被关闭后调用。
     *
     * Adds a callback that will be called after an entity container is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): (arg0: EntityContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体容器被关闭后不再被调用。
     *
     * Removes a callback from being called after an entity container is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): void;
}

/**
 * 包含关于特定实体容器被打开的信息。
 *
 * Contains information regarding a specific entity container
 * being opened.
 */
export class EntityContainerOpenedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 实体容器被打开的来源。
     *
     * The source of the entity container being opened.
     *
     */
    readonly openSource: ContainerAccessSource;
    readonly entity: Entity;
}

/**
 * 管理与实体容器被打开后相关的回调。
 *
 * Manages callbacks that are connected to after an entity container is opened.
 */
export class EntityContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体容器被打开后调用。
     *
     * Adds a callback that will be called after an entity container is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): (arg0: EntityContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体容器被打开后不再被调用。
     *
     * Removes a callback from being called after an entity container is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): void;
}

/**
 * 作为 Ageable 组件的一部分，表示一组可以喂给实体的物品及其促进成长的速率。
 *
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
export class EntityDefinitionFeedItem {
    private constructor();
    /**
     * @remarks
     * 实体在喂食此物品时年龄增长的量。值通常在 0 到 1 之间。
     *
     * The amount by which an entity's age will increase when fed
     * this item. Values usually range between 0 and 1.
     *
     */
    readonly growth: number;
    /**
     * @remarks
     * 可喂食物品类型的标识符。如果未指定命名空间，则默认为 `minecraft:`。示例值包括 `wheat` 或 `golden_apple`。
     *
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食后产生的物品的类型 ID。这通常为空，但用于某些场景，例如用一桶鱼喂食鹦鹉螺时，结果物品将是一个空桶。
     *
     * Type ID of the resulting item after feeding has occurred.
     * This will usually be empty but is used for scenarios such as
     * feeding a Nautilus with a bucket of fish, where the result
     * item will be an empty bucket.
     *
     */
    readonly resultItem?: string;
}

/**
 * 包含与游戏中实体死亡相关的数据。
 *
 * Contains data related to the death of an entity in the game.
 */
export class EntityDieAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果指定，提供关于导致此实体死亡的伤害来源的更多信息。
     *
     * If specified, provides more information on the source of
     * damage that caused the death of this entity.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 现已死亡的实体对象。
     *
     * Now-dead entity object.
     *
     */
    readonly deadEntity: Entity;
}

/**
 * 管理与实体死亡后相关的回调。
 *
 * Manages callbacks that are connected to after an entity dies.
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体死亡后被调用。
     *
     * Adds a callback that will be called after an entity dies.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityDieAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体死亡后不再被调用。
     *
     * Removes a callback from being called after an entity dies.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}

/**
 * 表示此实体的末影箱物品属性。此组件始终存在于玩家身上，其容器中的任何物品在玩家打开末影箱时都会显示出来。
 *
 * Represents this entity's ender inventory properties. This
 * component is always present on players and any items in its
 * container will display for the player when they access an
 * ender chest.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEnderInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 定义此实体的末影箱物品容器。如果实体已被移除，则容器将为 `undefined`。
     *
     * Defines the ender inventory container for this entity. The
     * container will be undefined if the entity has been removed.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:ender_inventory';
}

/**
 * 提供对生物装备槽位的访问。此组件存在于玩家实体上。
 *
 * Provides access to a mob's equipment slots. This component
 * exists on player entities.
 * @seeExample givePlayerElytra.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回拥有者的总护甲等级。
     *
     * Returns the total Armor level of the owner.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly totalArmor: number;
    /**
     * @remarks
     * 返回拥有者的总韧性等级。
     *
     * Returns the total Toughness level of the owner.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly totalToughness: number;
    static readonly componentId = 'minecraft:equippable';
    /**
     * @remarks
     * 获取给定 EquipmentSlot 的已装备物品。
     *
     * Gets the equipped item for the given EquipmentSlot.
     *
     * @param equipmentSlot
     * 装备槽位，例如 `"head"`、`"chest"`、`"offhand"`。
     *
     * The equipment slot. e.g. "head", "chest", "offhand"
     * @returns
     * 返回装备到给定 EquipmentSlot 的物品。如果为空，则返回 `undefined`。
     *
     * Returns the item equipped to the given EquipmentSlot. If
     * empty, returns undefined.
     * @throws This function can throw errors.
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @remarks
     * 获取对应于给定 EquipmentSlot 的 ContainerSlot。
     *
     * Gets the ContainerSlot corresponding to the given
     * EquipmentSlot.
     *
     * @param equipmentSlot
     * 装备槽位，例如 `"head"`、`"chest"`、`"offhand"`。
     *
     * The equipment slot. e.g. "head", "chest", "offhand".
     * @returns
     * 返回对应于给定 EquipmentSlot 的 ContainerSlot。
     *
     * Returns the ContainerSlot corresponding to the given
     * EquipmentSlot.
     * @throws This function can throw errors.
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * 替换给定 EquipmentSlot 中的物品。
     *
     * Replaces the item in the given EquipmentSlot.
     *
     * @worldMutation
     *
     * @param equipmentSlot
     * 装备槽位，例如 `"head"`、`"chest"`、`"offhand"`。
     *
     * The equipment slot. e.g. "head", "chest", "offhand".
     * @param itemStack
     * 要装备的物品。如果为 `undefined`，则清空该槽位。
     *
     * The item to equip. If undefined, clears the slot.
     * @throws This function can throw errors.
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}

/**
 * 定义与此实体的 exhaustion（疲劳度）交互方式。封装了 `minecraft:player.exhaustion` 属性。
 *
 * Defines the interactions with this entity for Exhaustion.
 * Wraps the `minecraft.player.exhaustion` attribute.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityExhaustionComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.exhaustion';
}

/**
 * 当添加时，此组件表示该实体不会受到火焰伤害。
 *
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:fire_immune';
}

/**
 * 当添加时，此组件表示该实体可以在液体方块中漂浮。
 *
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:floats_in_liquid';
}

/**
 * 定义实体的飞行速度。
 *
 * Defines the flying speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当前飞行速度值。
     *
     * Current flying speed value.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:flying_speed';
}

/**
 * 定义实体移动时的摩擦力修改器。
 *
 * Defines the friction modifier for an entity when moving.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:friction_modifier';
}

/**
 * 战利品物品条件，检查战利品来源是否具有特定的标记变体。
 *
 * Loot item condition to check that the loot source has a specific mark variant.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasMarkVariantCondition extends LootItemCondition {
    private constructor();
    readonly markVariant: number;
}

/**
 * 战利品物品条件，检查战利品来源是否具有特定的变体。
 *
 * Loot item condition to check that the loot source has a specific variant.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasVariantCondition extends LootItemCondition {
    private constructor();
    readonly variant: number;
}

/**
 * 定义与此实体进行治愈的交互方式。
 *
 * Defines the interactions with this entity for healing it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 决定是否可以在实体满生命值时使用物品。
     *
     * Determines if an item can be used regardless of the entity
     * being at full health.
     *
     * @throws This property can throw when used.
     */
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * 一组可以专门治愈此实体的物品。
     *
     * A set of items that can specifically heal this entity.
     *
     * @returns
     * 此组件关联的实体。
     *
     * Entity that this component is associated with.
     * @throws This function can throw errors.
     */
    getFeedItems(): FeedItem[];
}

/**
 * 包含实体在被治愈后的相关数据。
 *
 * Contains data related to an entity after it has been healed.
 */
export class EntityHealAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被治愈的实体。
     *
     * The entity that was healed.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 治愈的来源。
     *
     * The source of the healing.
     *
     */
    readonly healSource: EntityHealSource;
    /**
     * @remarks
     * 实体恢复的生命值量。
     *
     * The amount of health the entity regained.
     *
     */
    readonly healAmount: number;
}

/**
 * 管理与实体被治愈后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is healed.
 */
export class EntityHealAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被治愈后调用。
     *
     * Adds a callback that will be called after an entity is healed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHealAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHealAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被治愈后不再被调用。
     *
     * Removes a callback from being called after an entity is healed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}

/**
 * 包含实体在被治愈前的相关数据。
 *
 * Contains data related to an entity before it is healed.
 */
export class EntityHealBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 `true`，会取消治愈事件。
     *
     * If set to true, cancels the heal event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 被治愈的实体。
     *
     * The entity that is being healed.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 治愈的来源。
     *
     * The source of the healing.
     *
     */
    readonly healSource: EntityHealSource;
    /**
     * @remarks
     * 实体将恢复的生命值量。
     *
     * The amount of health the entity will regain.
     *
     */
    healAmount: number;
}

/**
 * 管理与实体被治愈前相关的回调。
 *
 * Manages callbacks that are connected to before an entity is healed.
 */
export class EntityHealBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被治愈前调用。
     *
     * Adds a callback that will be called before an entity is healed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限被调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: EntityHealBeforeEvent) => void): (arg0: EntityHealBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被治愈前不再被调用。
     *
     * Removes a callback from being called before an entity is healed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EntityHealBeforeEvent) => void): void;
}

/**
 * 提供有关治愈如何应用于实体的信息。
 *
 * Provides information about how healing has been applied to
 * an entity.
 */
export class EntityHealSource {
    private constructor();
    /**
     * @remarks
     * 治愈来源的原因枚举值。
     *
     * Cause enumerator of the source of healing.
     *
     */
    readonly cause: EntityHealCause;
}

/**
 * 包含与实体生命值变化相关的数据。
 *
 * Contains data related to an entity's health change.
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly newHealth: number;
    readonly oldHealth: number;
}

/**
 * 管理与实体生命值变化时相关的回调。
 *
 * Manages callbacks that are connected to when an entity's health changes.
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体生命值变化时被调用。
     *
     * Adds a callback that will be called when an entity's health changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体生命值变化时不再被调用。
     *
     * Removes a callback from being called when an entity's health changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}

/**
 * 定义实体的生命值属性。
 *
 * Defines the health properties of an entity.
 * @seeExample applyDamageThenHeal.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:health';
}

/**
 * 包含实体撞击方块后的相关信息。
 *
 * Contains information related to an entity hitting a block.
 */
export class EntityHitBlockAfterEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly dimension: Dimension;
    readonly entity: Entity;
    readonly faceLocation: Vector3;
    readonly hitBlockInformation: BlockHitInformation;
    readonly location: Vector3;
}

/**
 * 管理与实体撞击方块后相关的回调。
 *
 * Manages callbacks that are connected to after an entity hits a block.
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体撞击方块后被调用。
     *
     * Adds a callback that will be called after an entity hits a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHitBlockAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体撞击方块后不再被调用。
     *
     * Removes a callback from being called after an entity hits a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}

/**
 * 包含实体撞击另一个实体后的相关信息。
 *
 * Contains information related to an entity hitting another entity.
 */
export class EntityHitEntityAfterEvent {
    private constructor();
    readonly damagingEntity: Entity;
    readonly hitEntity: Entity;
}

/**
 * 管理与实体撞击另一个实体后相关的回调。
 *
 * Manages callbacks that are connected to after an entity hits another entity.
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体撞击另一个实体后被调用。
     *
     * Adds a callback that will be called after an entity hits another entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHitEntityAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体撞击另一个实体后不再被调用。
     *
     * Removes a callback from being called after an entity hits another entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}

/**
 * 定义此实体与饥饿值的交互方式。封装了 `minecraft:player.hunger` 属性。
 *
 * Defines the interactions with this entity for hunger. Wraps the `minecraft:player.hunger` attribute.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHungerComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.hunger';
}

/**
 * 包含与实体受到伤害相关的信息。
 *
 * Contains information related to an entity getting hurt.
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * 描述造成的伤害量。
     *
     * Describes the amount of damage caused.
     *
     */
    readonly damage: number;
    /**
     * @remarks
     * 可能施加此伤害的实体的来源信息。
     *
     * Source information on the entity that may have applied this
     * damage.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 受到伤害的实体。
     *
     * Entity that was hurt.
     *
     */
    readonly hurtEntity: Entity;
}

/**
 * 管理与实体受到伤害时相关的回调。
 *
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体受到伤害时被调用的回调。
     *
     * Adds a callback that will be called when an entity is hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityHurtAfterEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体受到伤害时被调用的回调。
     *
     * Removes a callback from being called when an entity is hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}

/**
 * 包含与即将受到伤害的实体相关的信息。
 *
 * Contains information related to an entity that will be hurt.
 */
export class EntityHurtBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * 描述将要造成的伤害量。
     *
     * Describes the amount of damage that will be caused.
     *
     */
    damage: number;
    /**
     * @remarks
     * 可能施加此伤害的实体的来源信息。
     *
     * Source information on the entity that may have applied this
     * damage.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 将要受到伤害的实体。
     *
     * Entity that will be hurt.
     *
     */
    readonly hurtEntity: Entity;
}

/**
 * 管理与实体将要受到伤害时相关的回调。
 *
 * Manages callbacks that are connected to when an entity will
 * be hurt.
 */
export class EntityHurtBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体将要受到伤害时被调用的回调。
     *
     * Adds a callback that will be called when an entity will be
     * hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: EntityHurtBeforeEvent) => void,
        options?: EntityHurtBeforeEventOptions,
    ): (arg0: EntityHurtBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在实体将要受到伤害时被调用的回调。
     *
     * Removes a callback from being called when an entity will be
     * hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EntityHurtBeforeEvent) => void): void;
}

/**
 * 表示一个实体的物品栏属性。
 * 
 * Defines this entity's inventory properties.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 表示实体每层强度（实体组件 `minecraft:strength`）可以获得的额外槽数。
     * 
     * Number of slots that this entity can gain per extra
     * strength.
     *
     * @throws This property can throw when used.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * 若为 `true`，则表示实体物品栏中的物品可被漏斗或漏斗矿车转移走。
     * 
     * If true, the contents of this inventory can be removed by a
     * hopper.
     *
     * @throws This property can throw when used.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * 表示实体的容器。若实体已被移除则为 `undefined`。
     * 
     * Defines the container for this entity. The container will be
     * undefined if the entity has been removed.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    /**
     * @remarks
     * 表示实体容器的种类。
     * 
     * Type of container this entity has.
     *
     * @throws This property can throw when used.
     */
    readonly containerType: string;
    /**
     * @remarks
     * 表示实体容器的槽位数量。
     * 
     * Number of slots the container has.
     *
     * @throws This property can throw when used.
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * 若为 `true`，则表示实体死亡不会掉落物品栏的物品。
     * 
     * If true, the entity will not drop it's inventory on death.
     *
     * @throws This property can throw when used.
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * 若为 `true`，则表示实体物品栏仅能被其主人或实体自己访问和操作。
     * 
     * If true, the entity's inventory can only be accessed by its
     * owner or itself.
     *
     * @throws This property can throw when used.
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * 当添加时，此组件表示该实体是幼年体。
 *
 * When added, this component signifies that this entity is a baby.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_baby';
}

/**
 * 当添加时，此组件表示该实体已蓄力。
 *
 * When added, this component signifies that this entity is charged.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_charged';
}

/**
 * 当添加时，此组件表示该实体带有箱子。
 *
 * When added, this component signifies that this entity is chested.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_chested';
}

/**
 * 当添加时，此组件表示该实体可以染色。
 *
 * When added, this component signifies that this entity is dyeable.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}

/**
 * 当添加时，此组件表示当实体隐身时，该实体对于其他实体隐藏。
 *
 * When added, this component signifies that this entity hides from other entities when invisible.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}

/**
 * 当添加时，此组件表示该实体当前正在着火。
 *
 * When added, this component signifies that this entity this
 * currently on fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_ignited';
}

/**
 * 当添加时，此组件表示该实体是一个灾厄队长。
 *
 * When added, this component signifies that this entity is an
 * illager captain.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_illager_captain';
}

/**
 * 当添加时，此组件表示该实体当前已上鞍。
 *
 * When added, this component signifies that this entity is
 * currently saddled.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_saddled';
}

/**
 * 当添加时，此组件表示该实体当前正在颤抖。
 *
 * When added, this component signifies that this entity is
 * currently shaking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_shaking';
}

/**
 * 当添加时，此组件表示该实体已被剪过毛。
 *
 * When added, this component signifies that this entity is sheared.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_sheared';
}

/**
 * 当添加时，此组件表示该实体可以被堆叠。
 *
 * When added, this component signifies that this entity can be
 * stacked.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stackable';
}

/**
 * 当添加时，此组件表示该实体当前被击晕。
 *
 * When added, this component signifies that this entity is
 * currently stunned.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stunned';
}

/**
 * 当添加时，此组件表示该实体当前已被驯服。
 *
 * When added, this component signifies that this entity is
 * currently tamed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_tamed';
}

/**
 * 为实体添加物品栏属性。
 *
 * Adds inventory properties to an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:item';
}

/**
 * 包含与实体已掉落物品相关的信息。
 *
 * Contains information related to an entity having dropped
 * items.
 */
export class EntityItemDropAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已掉落物品的实体。
     *
     * The entity that has dropped the items.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体已掉落的物品列表。
     *
     * The list of items the entity has dropped.
     *
     */
    readonly items: Entity[];
}

/**
 * 管理与实体已掉落物品时相关的回调。
 *
 * Manages callbacks that are connected to when an entity has
 * dropped items.
 */
export class EntityItemDropAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体已掉落物品时被调用的回调。
     *
     * Adds a callback that will be called when an entity has
     * dropped items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityItemDropAfterEvent) => void,
        options?: EntityItemDropEventOptions,
    ): (arg0: EntityItemDropAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体已掉落物品时被调用的回调。
     *
     * Removes a callback from being called when an entity has
     * dropped items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityItemDropAfterEvent) => void): void;
}

/**
 * 包含与实体已拾取物品相关的信息。
 *
 * Contains information related to an entity having picked up
 * items.
 */
export class EntityItemPickupAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已拾取物品的实体。
     *
     * The entity that has picked up the items.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体已拾取的物品列表。
     *
     * The list of items the entity has picked up.
     *
     */
    readonly items: ItemStack[];
}

/**
 * 管理与实体已拾取物品时相关的回调。
 *
 * Manages callbacks that are connected to when an entity has
 * picked up items.
 */
export class EntityItemPickupAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体已拾取物品时被调用的回调。
     *
     * Adds a callback that will be called when an entity has
     * picked up items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityItemPickupAfterEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体已拾取物品时被调用的回调。
     *
     * Removes a callback from being called when an entity has
     * picked up items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityItemPickupAfterEvent) => void): void;
}

/**
 * 包含与实体将要拾取物品相关的信息。
 *
 * Contains information related to an entity picking up an
 * item.
 */
export class EntityItemPickupBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 `true`，则物品将不会被拾取。
     *
     * If set to true the item will not be picked up.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 将要拾取物品的实体。
     *
     * The entity that will pick up the item.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 将要被拾取的物品。
     *
     * The item that will be picked up.
     *
     */
    readonly item: Entity;
}

/**
 * 管理与实体将要拾取物品时相关的回调。
 *
 * Manages callbacks that are connected to when an entity will
 * pick up an item.
 */
export class EntityItemPickupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体将要拾取物品时被调用的回调。
     *
     * Adds a callback that will be called when an entity will pick
     * up an item.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: EntityItemPickupBeforeEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在实体将要拾取物品时被调用的回调。
     *
     * Removes a callback from being called when an entity will
     * pick up an item.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EntityItemPickupBeforeEvent) => void): void;
}

/**
 * 战利品物品条件，检查战利品来源是否被击杀。
 *
 * Loot item condition to check that the loot source was killed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityKilledCondition extends LootItemCondition {
    private constructor();
    readonly killedEntity: string;
    readonly killedEntityType: string;
}

/**
 * 定义实体在熔岩中的移动速度。
 *
 * Defines the lava movement speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:lava_movement';
}

/**
 * 允许实体被拴绳拴住。定义实体被拴绳时的条件和事件。
 *
 * Allows the entity to be leashed. Defines the conditions and
 * events for when an entity is leashed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果另一个实体可以通过附加自己的拴绳来"偷走"被拴的实体，则返回 `true`。
     *
     * Returns true if another entity can 'steal' the leashed
     * entity by attaching their own leash to it.
     *
     * @throws This property can throw when used.
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * 拴绳变硬并限制移动的距离（以方块为单位）。
     *
     * Distance in blocks at which the leash stiffens, restricting
     * movement.
     *
     * @throws This property can throw when used.
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * 如果实体被拴住则返回 `true`。
     *
     * Returns true if the entity is leashed.
     *
     * @throws This property can throw when used.
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * 牵着拴绳的实体。
     *
     * Entity that is holding the leash.
     *
     * @throws This property can throw when used.
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * 牵着拴绳的实体的标识符。
     *
     * Identifier of entity that is holding the leash.
     *
     * @throws This property can throw when used.
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * 拴绳断裂的距离（以方块为单位）。
     *
     * Distance in blocks at which the leash breaks.
     *
     * @throws This property can throw when used.
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * "弹簧"效应开始作用以保持此实体靠近拴住它的实体的距离（以方块为单位）。
     *
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     *
     * @throws This property can throw when used.
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * 将此实体拴到另一个实体上。
     *
     * Leashes this entity to another entity.
     *
     * @worldMutation
     *
     * @param leashHolder
     * 要将此实体拴到的实体。
     *
     * The entity to leash this entity to.
     * @throws
     * 如果要拴到的实体超过最大距离，或者玩家死亡或处于旁观模式，则抛出异常。
     *
     * Throws if the entity to leash to is over the max distance,
     * and if the player is dead or in spectator mode.
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * 如果此实体被拴到另一个实体上，则解开拴绳。
     *
     * Unleashes this entity if it is leashed to another entity.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    unleash(): void;
}

/**
 * 包含实体已加载后的相关数据。
 *
 * Contains data related to an entity after it has been loaded.
 */
export class EntityLoadAfterEvent {
    private constructor();
    readonly entity: Entity;
}

/**
 * 管理与实体加载后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is loaded.
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体加载后被调用。
     *
     * Adds a callback that will be called after an entity is loaded.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体加载后不再被调用。
     *
     * Removes a callback from being called after an entity is loaded.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}

/**
 * 定义实体的标记变体。
 *
 * Defines the entity's mark variant.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:mark_variant';
}

/**
 * 允许该实体在两栖环境中移动。
 *
 * Allows this entity to move in amphibious environments.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.amphibious';
}

/**
 * 允许该实体在平面上基本移动。
 *
 * Allows this entity to move basically on a plane.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.basic';
}

/**
 * 定义实体的移动属性。
 *
 * Defines the movement properties of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement';
}

/**
 * 允许该实体在空中飞行移动。
 *
 * Allows this entity to move by flying through the air.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.fly';
}

/**
 * 允许该实体通用移动。
 *
 * Allows this entity to move generically.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.generic';
}

/**
 * 允许该实体滑翔移动。
 *
 * Allows this entity to move by gliding.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.glide';
}

/**
 * 允许该实体悬停移动。
 *
 * Allows this entity to move by hovering.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.hover';
}

/**
 * 允许该实体跳跃移动。
 *
 * Allows this entity to move by jumping.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.jump';
}

/**
 * 允许该实体跳跃式移动。
 *
 * Allows this entity to move by skipping.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.skip';
}

/**
 * 允许该实体摆动移动。
 *
 * Allows this entity to move by swaying.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.sway';
}

/**
 * 允许该实体在方块上攀爬。
 *
 * Allows this entity to climb blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.climb';
}

/**
 * 允许实体导航的基类组件。
 *
 * Base class component for allowing entity navigation.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
}

/**
 * 允许该实体像在水中浮游的生物一样导航。
 *
 * Allows this entity to navigate like a floating mob in water.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.float';
}

/**
 * 允许该实体像在空气中飞行的生物一样导航。
 *
 * Allows this entity to navigate like a flying mob in the air.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.fly';
}

/**
 * 允许该实体进行通用导航。
 *
 * Allows this entity to navigate generically.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.generic';
}

/**
 * 允许该实体像悬停的生物一样导航。
 *
 * Allows this entity to navigate like a hovering mob.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.hover';
}

/**
 * 允许该实体像生物走动一样进行导航。
 *
 * Allows this entity to navigate like a walking mob.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.walk';
}

/**
 * @beta
 * 为实体添加 NPC 功能，如自定义皮肤、名称和对话交互。
 *
 * Adds NPC capabilities to an entity such as custom skin,
 * name, and dialogue interactions.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当玩家首次与 NPC 交互时打开的 DialogueScene。
     *
     * The DialogueScene that is opened when players first interact
     * with the NPC.
     *
     * @worldMutation
     *
     */
    defaultScene: string;
    /**
     * @remarks
     * NPC 显示给玩家的名称。
     *
     * The name of the NPC as it is displayed to players.
     *
     * @worldMutation
     *
     */
    name: string;
    /**
     * @remarks
     * NPC 将使用的皮肤索引。
     *
     * The index of the skin the NPC will use.
     *
     * @worldMutation
     *
     */
    skinIndex: number;
    static readonly componentId = 'minecraft:npc';
}

/**
 * 当添加时，此组件表示该实体着火时的行为表现。
 *
 * When added, this component signifies that this entity on fire behavior.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:onfire';
}

/**
 * 投射物组件控制投射物实体的属性，并允许其向给定方向射出。当实体具有 `minecraft:projectile` 组件时，此组件存在。
 *
 * The projectile component controls the properties of a
 * projectile entity and allows it to be shot in a given
 * direction.
 * This component is present when the entity has the
 * minecraft:projectile component.
 * @seeExample shootArrow.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 投射物在空气中飞行时每 tick 保持的速度比例。
     *
     * The fraction of the projectile's speed maintained every tick
     * while traveling through air.
     *
     * @worldMutation
     *
     */
    airInertia: number;
    /**
     * @remarks
     * 如果为 `true`，实体在受伤时会被点燃。默认燃烧时长为 5 秒。此持续时间可以通过 `onFireTime` 属性修改。如果实体免疫火焰或实体处于潮湿状态，则不会着火。
     *
     * If true, the entity will be set on fire when hurt. The
     * default burn duration is 5 seconds. This duration can be
     * modified via the onFireTime property. The entity will not
     * catch fire if immune or if the entity is wet.
     *
     * @worldMutation
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * 如果为 `true`，投射物在被玩家击中时会生成暴击粒子。例如，玩家攻击潜影贝子弹。
     *
     * If true, the projectile will spawn crit particles when hit
     * by a player. E.g. Player attacking a Shulker bullet.
     *
     * @worldMutation
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * 如果为 `true`，投射物在受到伤害时会被摧毁。例如，玩家攻击潜影贝子弹。
     *
     * If true, the projectile will be destroyed when it takes
     * damage. E.g. Player attacking a Shulker bullet.
     *
     * @worldMutation
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * 应用于投射物的重力。当实体不在地面上时，每 tick 从投射物的垂直位置变化中减去此值。值越高，投射物下落越快。如果为负值，实体将上升而不是下落。
     *
     * The gravity applied to the projectile. When the entity is
     * not on the ground, subtracts this amount from the
     * projectile's change in vertical position every tick. The
     * higher the value, the faster the projectile falls. If
     * negative, the entity will rise instead of fall.
     *
     * @worldMutation
     *
     */
    gravity: number;
    /**
     * @remarks
     * 投射物击中实体时播放的声音。
     *
     * The sound that plays when the projectile hits an entity.
     *
     * @worldMutation
     *
     */
    hitEntitySound?: string;
    /**
     * @remarks
     * 投射物击中方块时播放的声音。
     *
     * The sound that plays when the projectile hits a block.
     *
     * @worldMutation
     *
     */
    hitGroundSound?: string;
    /**
     * @remarks
     * 投射物击中物体时生成的粒子。
     *
     * The particle that spawns when the projectile hits something.
     *
     * @worldMutation
     *
     */
    hitParticle?: string;
    /**
     * @remarks
     * 如果为 `true`，且天气为雷暴且实体与天空之间没有遮挡，则实体在被击中时会遭雷击。例如，带有引雷附魔的投掷三叉戟。
     *
     * If true and the weather is thunder and the entity has line
     * of sight to the sky, the entity will be struck by lightning
     * when hit. E.g. A thrown Trident with the Channeling
     * enchantment.
     *
     * @worldMutation
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * 投射物在液体中飞行时每 tick 保持的速度比例。
     *
     * The fraction of the projectile's speed maintained every tick
     * while traveling through a liquid.
     *
     * @worldMutation
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * 当 `catchFireOnHurt` 设置为 `true` 时，被击中实体着火的持续时间（以秒为单位）。
     *
     * Duration in seconds that the entity hit will be on fire for
     * when catchFireOnHurt is set to true.
     *
     * @worldMutation
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * 投射物的拥有者。用于确定投射物可以与什么碰撞并造成伤害。它还确定哪个实体被指定为攻击者。
     *
     * The owner of the projectile. This is used to determine what
     * the projectile can collide with and damage. It also
     * determines which entity is assigned as the attacker.
     *
     * @worldMutation
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * 如果为 `true`，投射物在未造成伤害时会从生物身上弹开。例如，正在生成的凋灵。
     *
     * If true, the projectile will bounce off mobs when no damage
     * is taken. E.g. A spawning wither.
     *
     * @worldMutation
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * 如果为 `true`，投射物在击中实体时会停止移动，如同被格挡一样。例如，投掷三叉戟的击中行为。
     *
     * If true, the projectile will stop moving when an entity is
     * hit as thought it had been blocked. E.g. Thrown trident on
     * hit behavior.
     *
     * @worldMutation
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * 以给定速度射出投射物。投射物将从其当前位置射出。
     *
     * Shoots the projectile with a given velocity. The projectile
     * will be shot from its current location.
     *
     * @worldMutation
     *
     * @param velocity
     * 发射投射物的速度。这同时控制投射物射出的速度和方向。
     *
     * The velocity to fire the projectile. This controls both the
     * speed and direction which which the projectile will be shot.
     * @param options
     * 射出的可选配置。
     *
     * Optional configuration for the shoot.
     * @throws
     * 如果组件或实体不再存在则抛出异常。
     *
     * Throws if the component or entity no longer exist.
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}

/**
 * 定义实体可以推开其他实体的能力。
 *
 * Defines the ability of an entity to push through other entities.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:push_through';
}

/**
 * 包含实体被移除后的相关数据。
 *
 * Contains data related to an entity after it is removed.
 */
export class EntityRemoveAfterEvent {
    private constructor();
    readonly removedEntity: Entity;
    readonly removedEntityId: string;
    readonly removedEntityTypeId: string;
}

/**
 * 管理与实体被移除后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is removed.
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被移除后被调用。
     *
     * Adds a callback that will be called after an entity is removed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityRemoveAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被移除后不再被调用。
     *
     * Removes a callback from being called after an entity is removed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}

/**
 * 包含实体被移除前的相关数据。
 *
 * Contains data related to an entity before it is removed.
 */
export class EntityRemoveBeforeEvent {
    private constructor();
    readonly removedEntity: Entity;
    readonly removedEntityId: string;
    readonly removedEntityTypeId: string;
}

/**
 * 管理与实体被移除前相关的回调。
 *
 * Manages callbacks that are connected to before an entity is removed.
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被移除前调用。
     *
     * Adds a callback that will be called before an entity is removed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被移除前不再被调用。
     *
     * Removes a callback from being called before an entity is removed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}

/**
 * 当添加时，此组件添加了实体可以被另一个实体骑乘的能力。
 *
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 * @seeExample minibiomes.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 可用于控制此实体的座位（从零开始索引）。
     *
     * Zero-based index of the seat that can used to control this
     * entity.
     *
     * @throws This property can throw when used.
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * 确定当实体蹲下时是否不支持交互。
     *
     * Determines whether interactions are not supported if the
     * entity is crouching.
     *
     * @throws This property can throw when used.
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * 当玩家看着要骑乘此实体时应该显示的一组文本（通常用于触摸屏控制）。
     *
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     *
     * @throws This property can throw when used.
     */
    readonly interactText: string;
    /**
     * @remarks
     * 可成为乘客的生物的最大宽度。
     *
     * The max width a mob can be to be a passenger.
     *
     * @throws This property can throw when used.
     */
    readonly passengerMaxWidth: number;
    /**
     * @remarks
     * 如果为 `true`，此实体将把具有正确 `family_types` 的实体拉入任何可用座位。
     *
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     *
     * @throws This property can throw when used.
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * 如果为 `true`，骑乘者看着此实体时可以被拾取。
     *
     * If true, this entity will be picked when looked at by the
     * rider.
     *
     * @throws This property can throw when used.
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * 为此实体定义的骑乘者座位数量。
     *
     * Number of seats for riders defined for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * 向此实体添加一个骑乘者实体。
     *
     * Adds an entity to this entity as a rider.
     *
     * @worldMutation
     *
     * @param rider
     * 将成为此实体骑乘者的实体。
     *
     * Entity that will become the rider of this entity.
     * @returns
     * 如果骑乘者实体成功添加，则返回 `true`。
     *
     * True if the rider entity was successfully added.
     * @throws This function can throw errors.
     * @seeExample minibiomes.ts
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * 弹射此实体的指定骑乘者。
     *
     * Ejects the specified rider of this entity.
     *
     * @worldMutation
     *
     * @param rider
     * 应从此实体弹射的实体。
     *
     * Entity that should be ejected from this entity.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * 弹射此实体的所有骑乘者。
     *
     * Ejects all riders of this entity.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    /**
     * @remarks
     * 此实体支持的作为骑乘者的实体类型字符串列表。
     *
     * A string-list of entity types that this entity can support
     * as riders.
     *
     * @throws This function can throw errors.
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * 获取当前骑乘此实体的所有实体列表。
     *
     * Gets a list of the all the entities currently riding this
     * entity.
     *
     * @throws This function can throw errors.
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * 获取骑乘此实体的每个位置的位置和骑乘者数量列表。
     *
     * Gets a list of positions and number of riders for each
     * position for entities riding this entity.
     *
     * @throws This function can throw errors.
     */
    getSeats(): Seat[];
}

/**
 * 当添加时，此组件表示该实体正在骑乘另一个实体。
 *
 * When added, this component signifies that this entity is riding another entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:riding';
}

/**
 * 定义此实体与饱和度的交互方式。封装了 `minecraft:player.saturation` 属性。
 *
 * Defines the interactions with this entity for saturation. Wraps the `minecraft:player.saturation` attribute.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySaturationComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.saturation';
}

/**
 * 定义实体的缩放比例。
 *
 * Defines the scale of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:scale';
}

/**
 * 定义实体的皮肤 ID（材质变体）。
 *
 * Defines the entity's skin ID (texture variant).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:skin_id';
}

/**
 * 包含实体生成后的相关数据。
 *
 * Contains data related to an entity after it is spawned.
 */
export class EntitySpawnAfterEvent {
    private constructor();
    readonly cause: EntityInitializationCause;
    readonly entity: Entity;
}

/**
 * 管理与实体生成后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is spawned.
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体生成后被调用。
     *
     * Adds a callback that will be called after an entity is spawned.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void, options?: EntityEventOptions): (arg0: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体生成后不再被调用。
     *
     * Removes a callback from being called after an entity is spawned.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}

/**
 * 包含实体开始潜行后的相关数据。
 *
 * Contains data related to an entity after it starts sneaking.
 */
export class EntityStartSneakingAfterEvent {
    private constructor();
    readonly entity: Entity;
}

/**
 * 管理与实体开始潜行后相关的回调。
 *
 * Manages callbacks that are connected to after an entity starts sneaking.
 */
export class EntityStartSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体开始潜行后被调用。
     *
     * Adds a callback that will be called after an entity starts sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): (arg0: EntityStartSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体开始潜行后不再被调用。
     *
     * Removes a callback from being called after an entity starts sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): void;
}

/**
 * 包含实体停止潜行后的相关数据。
 *
 * Contains data related to an entity after it stops sneaking.
 */
export class EntityStopSneakingAfterEvent {
    private constructor();
    readonly entity: Entity;
}

/**
 * 管理与实体停止潜行后相关的回调。
 *
 * Manages callbacks that are connected to after an entity stops sneaking.
 */
export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体停止潜行后被调用。
     *
     * Adds a callback that will be called after an entity stops sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体停止潜行后不再被调用。
     *
     * Removes a callback from being called after an entity stops sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}

/**
 * 定义该实体的强度属性，用于决定该实体可携带装备的数量。
 *
 * Defines the entity's strength, which determines the amount of equipment the entity can carry.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:strength';
}

/**
 * 定义实体的可驯服属性。
 *
 * Defines the tameable properties of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:tameable';
}

/**
 * 包含实体被驯服后的相关数据。
 *
 * Contains data related to an entity after it is tamed.
 */
export class EntityTamedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly player: Player;
}

/**
 * 管理与实体被驯服后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is tamed.
 */
export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被驯服后被调用。
     *
     * Adds a callback that will be called after an entity is tamed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityTamedAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被驯服后不再被调用。
     *
     * Removes a callback from being called after an entity is tamed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}

/**
 * 包含实体被驯服前的相关数据。
 *
 * Contains data related to an entity before it is tamed.
 */
export class EntityTamedBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly entity: Entity;
    readonly player: Player;
}

/**
 * 管理与实体被驯服前相关的回调。
 *
 * Manages callbacks that are connected to before an entity is tamed.
 */
export class EntityTamedBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体被驯服前调用。
     *
     * Adds a callback that will be called before an entity is tamed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityTamedBeforeEvent) => void): (arg0: EntityTamedBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被驯服前不再被调用。
     *
     * Removes a callback from being called before an entity is tamed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityTamedBeforeEvent) => void): void;
}

/**
 * 包含基于骑乘者来驯服可骑乘实体的选项。
 *
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果实体已被驯服，则返回 `true`。
     *
     * Returns true if the entity is tamed.
     *
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 如果实体已被玩家驯服，则返回 `true`。
     *
     * Returns true if the entity is tamed by a player.
     *
     * @throws This property can throw when used.
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @remarks
     * 返回已驯服此实体的玩家，如果实体未被玩家驯服，则返回 `undefined`。
     *
     * Returns the player that has tamed the entity, or 'undefined'
     * if entity is not tamed by a player.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回已驯服此实体的玩家的 ID，如果实体未被驯服，则返回 `undefined`。
     *
     * Returns the id of player that has tamed the entity, or
     * 'undefined' if entity is not tamed.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * 将此可骑乘实体设置为已驯服。
     *
     * Sets this rideable entity as tamed.
     *
     * @worldMutation
     *
     * @param showParticles
     * 此实体被驯服时是否显示效果粒子。
     *
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks
     * 将此可骑乘实体设置为已被给定玩家驯服。
     *
     * Sets this rideable entity as tamed by the given player.
     *
     * @worldMutation
     *
     * @param showParticles
     * 此实体被驯服时是否显示效果粒子。
     *
     * Whether to show effect particles when this entity is tamed.
     * @param player
     * 应驯服此实体的玩家。
     *
     * The player that this entity should be tamed by.
     * @returns
     * 如果实体被驯服，则返回 `true`。
     *
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}

/**
 * 表示一种实体类型的信息。
 *
 * Represents information about a type of entity.
 */
export class EntityType {
    private constructor();
    /**
     * @remarks
     * 此实体类型的标识符——例如，`minecraft:skeleton`。
     *
     * Identifier of this entity type - for example,
     * 'minecraft:skeleton'.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于在 `.lang` 文件中本地化此 EntityType 名称的键。
     *
     * Key for the localization of this EntityType's name used in
     * .lang files.
     *
     */
    readonly localizationKey: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 定义此实体的种类。
 *
 * Defines the type family of this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly typeFamily: Set<string>;
    static readonly componentId = 'minecraft:type_family';
    /**
     * @remarks
     * 检查实体是否具有给定的种类。
     *
     * Check if the entity has the given type family.
     *
     * @throws This function can throw errors.
     */
    hasTypeFamily(typeFamily: string): boolean;
}

/**
 * 用于访问世界中当前可用的所有实体类型。
 *
 * Used for accessing all entity types currently available for
 * use within the world.
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * 使用字符串标识符检索实体类型。
     *
     * Retrieves an entity type using a string-based identifier.
     *
     */
    static get<T = never>(identifier: EntityIdentifierType<NoInfer<T>>): EntityType | undefined;
    /**
     * @remarks
     * 检索此世界中的所有实体类型集合。
     *
     * Retrieves a set of all entity types within this world.
     *
     */
    static getAll(): EntityType[];
}

/**
 * 定义实体在水下的移动速度。
 *
 * Defines the underwater movement speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityUnderwaterMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:underwater_movement';
}

/**
 * 包含实体升级后的相关数据。
 *
 * Contains data related to an entity after it has been upgraded.
 */
export class EntityUpgradeAfterEvent {
    private constructor();
    readonly entity: Entity;
}

/**
 * 管理与实体升级后相关的回调。
 *
 * Manages callbacks that are connected to after an entity is upgraded.
 */
export class EntityUpgradeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体升级后被调用。
     *
     * Adds a callback that will be called after an entity is upgraded.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): (arg0: EntityUpgradeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体升级后不再被调用。
     *
     * Removes a callback from being called after an entity is upgraded.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): void;
}

/**
 * 定义实体的变体。
 *
 * Defines the entity's variant.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:variant';
}

/**
 * 当添加时，此组件表示该实体想要成为骑乘者。
 *
 * When added, this component signifies that this entity wants to become a jockey.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:wants_jockey';
}

/**
 * 表示实体的路径点。
 *
 * Represents a waypoint for an entity.
 */
export class EntityWaypoint {
    private constructor();
    readonly dimension: Dimension;
    readonly location: Vector3;
}

/**
 * 战利品物品函数，修改掉落的藏宝图以标记一个位置。
 *
 * Loot item function that modifies a dropped treasure map to
 * mark a location.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplorationMapFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 决定将掉落哪种类型的藏宝图。
     *
     * Determines which type of treasure map will drop.
     *
     */
    readonly destination: string;
}

/**
 * 包含有关已发生的爆炸的信息。
 *
 * Contains information regarding an explosion that has
 * happened.
 */
export class ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 爆炸发生的维度。
     *
     * Dimension where the explosion has occurred.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 爆炸的可选来源。
     *
     * Optional source of the explosion.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 受此爆炸事件影响的方块集合。
     *
     * A collection of blocks impacted by this explosion event.
     *
     */
    getImpactedBlocks(): Block[];
}

/**
 * 管理与爆炸发生时相关的回调。
 *
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在爆炸发生时被调用。
     *
     * Adds a callback that will be called when an explosion
     * occurs.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在爆炸发生时不再被调用。
     *
     * Removes a callback from being called when an explosion
     * occurs.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}

/**
 * 包含有关已发生的爆炸的信息。
 *
 * Contains information regarding an explosion that has
 * happened.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 `true`，则取消爆炸事件。
     *
     * If set to true, cancels the explosion event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 更新受此爆炸事件影响的方法集合。
     *
     * Updates a collection of blocks impacted by this explosion
     * event.
     *
     * @param blocks
     * 受此爆炸影响的新方块列表。
     *
     * New list of blocks that are impacted by this explosion.
     */
    setImpactedBlocks(blocks: Block[]): void;
}

/**
 * 管理与爆炸发生前相关的回调。
 *
 * Manages callbacks that are connected to before an explosion
 * occurs.
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在爆炸发生前被调用。该回调可以选择性更改或取消爆炸行为。
     *
     * Adds a callback that will be called when before an explosion
     * occurs. The callback can optionally change or cancel
     * explosion behavior.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限被调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在爆炸发生前不再被调用。
     *
     * Removes a callback from being called from before when an
     * explosion would occur.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}

/**
 * 战利品物品函数，确定战利品掉落物是否应该被爆炸摧毁。
 *
 * Loot item function that determines whether or not loot drops
 * should be destroyed by explosions.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionDecayFunction extends LootItemFunction {
    private constructor();
}

/**
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
    /**
     * @remarks
     * Type ID of the resulting item after feeding has occurred.
     * This will usually be empty but is used for scenarios such as
     * feeding a Nautilus with a bucket of fish, where the result
     * item will be an empty bucket.
     *
     */
    readonly resultItem?: string;
    /**
     * @remarks
     * As part of the Healable component, an optional collection of
     * side effects that can occur from being fed an item.
     *
     */
    getEffects(): FeedItemEffect[];
}

/**
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually
     * ranging between 0 and 4.
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Chance that this effect is applied as a result of the entity
     * being fed this item. Valid values range between 0 and 1.
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * Gets the duration, in ticks, of this effect.
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets the identifier of the effect to apply. Example values
     * include 'fire_resistance' or 'regeneration'.
     *
     */
    readonly name: string;
}

/**
 * Loot item function that populates a dropped container item
 * using another loot table.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FillContainerFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The path to the loot table with which the container will be
     * filled.
     *
     */
    readonly lootTable: string;
}

/**
 * Represents constants related to fluid containers.
 */
export class FluidContainer {
    private constructor();
    /**
     * @remarks
     * Constant that represents the maximum fill level of a fluid
     * container.
     *
     */
    static readonly maxFillLevel = 6;
    /**
     * @remarks
     * Constant that represents the minimum fill level of a fluid
     * container.
     *
     */
    static readonly minFillLevel = 0;
}

/**
 * @beta
 * Provides access to the fog definitions stack of a player
 * entity, allowing scripts to push, pop, remove, and query
 * active fog definitions.
 */
export class FogSettings {
    private constructor();
    /**
     * @remarks
     * Returns the list of fog identifiers currently on the
     * player's fog stack, ordered from bottom to top.
     *
     * @worldMutation
     *
     * @returns
     * An array of fog definition identifiers currently on the
     * stack.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    getStack(): string[];
    /**
     * @remarks
     * Returns the list of tags currently present on the player's
     * fog stack.
     *
     * @worldMutation
     *
     * @returns
     * An array of tag strings associated with fog settings on the
     * stack.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * Removes the most recently pushed fog definition from the
     * player's fog stack.
     *
     * @worldMutation
     *
     * @param tag
     * An optional tag identifying which entry to pop. If provided,
     * searches the stack from top to bottom and removes the most
     * recently pushed entry with this tag. If omitted, removes the
     * most recently pushed entry regardless of tag.
     * @returns
     * Returns the identifier of the popped fog definition, or
     * undefined if the stack was unchanged.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    pop(tag?: string): string | undefined;
    /**
     * @remarks
     * Pushes a new fog definition onto the player's fog stack.
     *
     * @worldMutation
     *
     * @param fogId
     * The identifier of the fog definition to push onto the stack
     * (e.g. 'minecraft:fog_bamboo_jungle').
     * @param tag
     * An optional tag used to label this fog definition on the
     * stack, allowing it to be targeted by pop or remove. If
     * omitted, the entry is stored with the tag 'untagged'.
     * @returns
     * Returns the zero-based index at which the fog definition was
     * inserted into the stack.
     * @throws
     * Throws if the entity is invalid, the fog identifier is
     * invalid, or if the stack limit of 16 has been exceeded.
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    push(fogId: string, tag?: string): number;
    /**
     * @remarks
     * Removes all fog definitions with the given tag from the
     * player's fog stack. If no tag is provided, clears all fog
     * definitions.
     *
     * @worldMutation
     *
     * @param tag
     * An optional tag identifying which the entries to remove. If
     * omitted, clears all fog definitions regardless of tag.
     * @returns
     * Returns true if at least one entry was removed, or false if
     * the stack was unchanged.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    remove(tag?: string): boolean;
    /**
     * @remarks
     * Sets the player's fog stack to the given list of fog
     * identifiers, replacing any existing entries.
     *
     * @worldMutation
     *
     * @param fogIds
     * A stack of fog definition identifiers to set on the player's
     * fog stack (e.g. ['minecraft:fog_bamboo_jungle']). Maximum of
     * 16 entries.
     * @param tag
     * An optional tag to associate with the new entries, used to
     * target them with pop or remove.
     * @throws
     * Throws if the entity is invalid, if more than 16 fog
     * identifiers are provided, or if any fog identifier is
     * invalid.
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    setStack(fogIds: string[], tag?: string): void;
}

/**
 * Contains information regarding a changed world.gameRules
 * property.
 */
export class GameRuleChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The rule identifier pertaining to the changed
     * world.gameRules property.
     *
     */
    readonly rule: GameRule;
    /**
     * @remarks
     * The value of the world.gameRules property after being
     * changed.
     *
     */
    readonly value: boolean | number;
}

/**
 * Manages callbacks that are connected to when a
 * world.gameRules property has changed.
 */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world.gameRules
     * property is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world.gameRules
     * property is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}

/**
 * Represents the game rules for a world experience.
 */
export class GameRules {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    commandBlockOutput: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    commandBlocksEnabled: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    doDayLightCycle: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    doEntityDrops: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    doFireTick: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    doImmediateRespawn: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    doInsomnia: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    doLimitedCrafting: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    doMobLoot: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    doMobSpawning: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    doTileDrops: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    doWeatherCycle: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    drowningDamage: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    fallDamage: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    fireDamage: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    freezeDamage: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    functionCommandLimit: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    keepInventory: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    maxCommandChainLength: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    mobGriefing: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    naturalRegeneration: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    playersSleepingPercentage: number;
    /**
     * @beta
     * @remarks
     * @worldMutation
     *
     */
    playerWaypoints: PlayerWaypointsMode;
    /**
     * @remarks
     * @worldMutation
     *
     */
    projectilesCanBreakBlocks: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    pvp: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    randomTickSpeed: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    recipesUnlock: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    respawnBlocksExplode: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    sendCommandFeedback: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showBorderEffect: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showCoordinates: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showDaysPlayed: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showDeathMessages: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showRecipeMessages: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showTags: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    spawnRadius: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    tntExplodes: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    tntExplosionDropDecay: boolean;
}

/**
 * Contains the input information for a client instance.
 */
export class InputInfo {
    private constructor();
    /**
     * @remarks
     * The last input mode used by the player.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly lastInputModeUsed: InputMode;
    /**
     * @remarks
     * Whether the player touch input only affects the touchbar or
     * not.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}

/**
 * Loot item condition that checks whether or not the entity
 * dropping loot is a baby.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class IsBabyCondition extends LootItemCondition {
    private constructor();
}

export class ISerializable {
    private constructor();
}

/**
 * @beta
 * Represents the dynamic properties of a block. Only available
 * from block entities. Up to 1KBytes of data can be stored per
 * content pack per block entity in their dynamic properties
 * storage.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBlockDynamicPropertiesComponent extends ItemComponent {
    private constructor();
    static readonly componentId = 'minecraft:block_actor_dynamic_properties';
    /**
     * @remarks
     * Returns a DynamicProperty that was stored with the provided
     * key. Keys are unique to each content pack and cannot be used
     * to retrieve dynamic properties set from other content packs.
     * Returns undefined if the key was not found.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Sets a dynamic property with the provided key and value.
     * Keys are unique to each content pack and cannot be used to
     * set dynamic properties for other content packs. Values can
     * be either a Number, a String or a Vector3. Setting a
     * property with an undefined value will remove it from the
     * storage. Storage size usage is counted towards the 1KBytes
     * limit per content pack.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Returns the current size, in bytes, of the dynamic
     * properties storage for this block. The byte count only
     * accounts for properties set by your content pack. The
     * 1KBytes limit is per content pack.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    totalByteCount(): number;
}

/**
 * When present on an item, this item is a book item. Can
 * access and modify the contents of the book and sign it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * The name of the author of the book if it is signed,
     * otherwise undefined.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly author?: string;
    /**
     * @remarks
     * The contents of pages in the book that are in string format.
     * Entries not in string format will be undefined.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly contents: (string | undefined)[];
    /**
     * @remarks
     * Determines whether the book has been signed or not.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly isSigned: boolean;
    /**
     * @remarks
     * The amount of pages the book has.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly pageCount: number;
    /**
     * @remarks
     * The contents of pages in the book that are in {@link
     * RawMessage} format. Entries not in {@link RawMessage} format
     * will be undefined.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly rawContents: (RawMessage | undefined)[];
    /**
     * @remarks
     * The title of the book if it is signed, otherwise undefined.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly title?: string;
    static readonly componentId = 'minecraft:book';
    /**
     * @remarks
     * Gets the string format content of a page for a given index.
     *
     * @param pageIndex
     * The index of the page.
     * @returns
     * The content of the page if a valid index is provided and it
     * is in string format, otherwise returns undefined.
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    getPageContent(pageIndex: number): string | undefined;
    /**
     * @remarks
     * Gets the {@link RawMessage} format content of a page for a
     * given index.
     *
     * @param pageIndex
     * The index of the page.
     * @returns
     * The content of the page if a valid index is provided and it
     * is in {@link RawMessage} format, otherwise returns
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks
     * Inserts a page at a given index. Empty pages will be created
     * if the index is greater than the current book size.
     * Pages have a maximum limit of 256 characters for strings as
     * well as the JSON representation of a {@link RawMessage}.
     * Books have a maximum limit of 50 pages.
     *
     * @worldMutation
     *
     * @param pageIndex
     * The index of the page.
     * @param content
     * The content to set for the page. Can be a single string or
     * {@link RawMessage} or an array of strings and/or {@link
     * RawMessage}s
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    insertPage(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Removes a page at a given index. Existing pages following
     * this page will be moved backward to fill the empty space.
     *
     * @worldMutation
     *
     * @param pageIndex
     * The index of the page.
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    removePage(pageIndex: number): void;
    /**
     * @remarks
     * Sets the contents of the book's pages. Pre-existing pages
     * will be cleared.
     * Pages have a maximum limit of 256 characters for strings as
     * well as the JSON representation of a {@link RawMessage}.
     * Books have a maximum limit of 50 pages.
     *
     * @worldMutation
     *
     * @param contents
     * An array of each page's contents. Each page can be a single
     * string or {@link RawMessage} or an array of strings and/or
     * {@link RawMessage}s.
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setContents(contents: ((RawMessage | string)[] | RawMessage | string)[]): void;
    /**
     * @remarks
     * Sets or creates the content of a specific page. Empty pages
     * will be created if the index is greater than the current
     * book size.
     * Pages have a maximum limit of 256 characters for strings as
     * well as the JSON representation of a {@link RawMessage}.
     * Books have a maximum limit of 50 pages.
     *
     * @worldMutation
     *
     * @param pageIndex
     * The index of the page.
     * @param content
     * The content to set for the page. Can be a single string or
     * {@link RawMessage} or an array of strings and/or {@link
     * RawMessage}s
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setPageContent(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Signs a book giving it a title and author name. Once signed
     * players can no longer directly edit the book.
     * Titles have a maximum character limit of 16.
     *
     * @worldMutation
     *
     * @param title
     * The title to give the book.
     * @param author
     * The name of the book's author.
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link InvalidEntityError}
     *
     * {@link InvalidItemStackError}
     */
    signBook(title: string, author: string): void;
}

/**
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that has completed charging.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * completes charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * completes charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}

/**
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that has completed charging.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * Base class for item components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
}

/**
 * Contains information regarding an item before it is damaged
 * from hitting an entity.
 */
export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    /**
     * @remarks
     * The attacking entity.
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * The damage applied to the item's durability when the event
     * occurs.
     *
     */
    durabilityDamage: number;
    /**
     * @remarks
     * The entity being hit.
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * The item stack used to hit the entity.
     *
     */
    itemStack?: ItemStack;
}

/**
 * Contains information related to a chargeable item completing
 * being charged via a component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentCompleteUseEvent extends ItemCompleteUseEvent {
    private constructor();
}

/**
 * Contains information related to a food item being consumed.
 */
export class ItemComponentConsumeEvent {
    private constructor();
    /**
     * @remarks
     * The item stack that was consumed.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * The source entity that consumed the item.
     *
     */
    readonly source: Entity;
}

/**
 * Contains information regarding when an item is used to hit
 * an entity.
 */
export class ItemComponentHitEntityEvent {
    private constructor();
    /**
     * @remarks
     * The attacking entity.
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * Whether the hit landed or had any effect.
     *
     */
    readonly hadEffect: boolean;
    /**
     * @remarks
     * The entity being hit.
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * The item stack used to hit the entity.
     *
     */
    readonly itemStack?: ItemStack;
}

/**
 * Contains information regarding the mining of a block using
 * an item.
 */
export class ItemComponentMineBlockEvent {
    private constructor();
    /**
     * @remarks
     * The block impacted by this event.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The item stack used to mine the block.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * The block permutation that was mined.
     *
     */
    readonly minedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * The entity that mined the block.
     *
     */
    readonly source: Entity;
}

/**
 * Provides the functionality for registering custom components
 * for items.
 */
export class ItemComponentRegistry {
    private constructor();
    /**
     * @remarks
     * Registers an item custom component that can be used in item
     * JSON configuration.
     *
     * @earlyExecution
     *
     * @param name
     * The id that represents this custom component. Must have a
     * namespace. This id can be specified in a item's JSON
     * configuration under the 'minecraft:custom_components' item
     * component.
     * @param itemCustomComponent
     * The collection of event functions that will be called when
     * the event occurs on an item using this custom component id.
     * @throws This function can throw errors.
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link EngineError}
     *
     * {@link ItemCustomComponentAlreadyRegisteredError}
     *
     * {@link ItemCustomComponentReloadNewComponentError}
     *
     * {@link ItemCustomComponentReloadNewEventError}
     *
     * {@link ItemCustomComponentReloadVersionError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}

/**
 * Contains information regarding the use of an item.
 */
export class ItemComponentUseEvent {
    private constructor();
    /**
     * @remarks
     * The item stack when the item was used.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * The player who used the item.
     *
     */
    readonly source: Player;
}

/**
 * Contains information regarding the use of an item on a block
 * via a component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * The entity that used the item on the block.
     *
     */
    readonly source: Entity;
    /**
     * @remarks
     * The block permutation that the item was used on.
     *
     */
    readonly usedOnBlockPermutation: BlockPermutation;
}

/**
 * When present, the item can be composted in the composter
 * block if the composting chance is in the range [1 - 100].
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * This is the percent chance of the item composting in the
     * composter block and generating a compost layer. Note this
     * api will also return the composting chance for vanilla items
     * that are compostable but do not use the compostable item
     * component.
     *
     * @throws
     * Throws if value outside the range [1 - 100]
     */
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}

/**
 * 表示物品使用冷却组件。当出现在物品上时，表示该物品被实体使用后会有冷却效果。
 * 注意，若使用后不会进入冷却，原版物品会获取到没有实际作用的该组件。
 * 
 * When present on an item, this item has a cooldown effect
 * when used by entities.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 表示物品的冷却类别。
     * 
     * Represents the cooldown category that this item is
     * associated with.
     *
     * @throws This property can throw when used.
     */
    readonly cooldownCategory: string;
    /**
     * @remarks
     * 物品冷却所需的时间，单位为刻。
     * 
     * Amount of time, in ticks, it will take this item to
     * cooldown.
     *
     * @throws This property can throw when used.
     */
    readonly cooldownTicks: number;
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * Will return true if the item is the cooldown category passed
     * in and false otherwise.
     *
     * @worldMutation
     *
     * @param cooldownCategory
     * The cooldown category that might be associated with this
     * item.
     * @returns
     * True if the item is the given cooldown category.
     * @throws This function can throw errors.
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * Will return true if the item is the cooldown category passed
     * in and false otherwise.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param cooldownCategory
     * The cooldown category that might be associated with this
     * item.
     * @returns
     * True if the item is the given cooldown category.
     * @throws This function can throw errors.
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks
     * 开始物品的冷却周期。
     * 如果物品已在冷却中，将重新开始冷却。
     * 
     * Starts a new cooldown period for this item.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
}

/**
 * An instance of a custom component on an item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentInstance extends ItemComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}

/**
 * 表示物品耐久组件。当出现在物品上时，表示该物品可以在使用中受到损坏。
 * 注意，只能在数驱物品上获取和使用该组件。
 * 
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
 * @seeExample giveHurtDiamondSword.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 此物品当前的损坏值。
     * 物品当前耐久度为 `maxDurability - damage`。
     * 当被设置为 负数，`Infinity`，`NaN` 等值时，值为 0。
     * 
     * Returns the current damage level of this particular item.
     *
     * @worldMutation
     *
     */
    damage: number;
    /**
     * @remarks
     * 表示该物品在损坏前可以承受的损坏值。
     * 
     * Represents the amount of damage that this item can take
     * before breaking.
     *
     * @throws This property can throw when used.
     */
    readonly maxDurability: number;
    /**
     * @remarks
     * Whether an item breaks or loses durability. Setting to true
     * temporarily removes item's durability HUD, and freezes
     * durability loss on item.
     *
     * @worldMutation
     *
     */
    unbreakable: boolean;
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * 返回根据 `damageRange` 属性生成的最大损坏概率，
     * 附带一个耐久附魔等级作为可选参数。
     * 
     * Returns the maximum chance that this item would be damaged
     * using the damageRange property, given an unbreaking
     * enchantment level.
     *
     * @worldMutation
     *
     * @param unbreakingEnchantmentLevel
     * 耐久魔咒等级，在计算损坏概率时受到此参数的影响。
     * 传入的 `unbreakingEnchantmentLevel` 参数必须介于 [0, 3]。
     * 
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be within the
     * range [0, 3].
     * Defaults to: 0
     * Bounds: [0, 3]
     * @returns 使用时的最大损坏概率。
     * @throws
     * 若 `unbreakingEnchantmentLevel` 参数未在范围内时，抛出 `TypeError` 。
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks
     * 返回用于计算物品损失耐久的概率范围。最终物品损失耐久的概率将落在此范围中。
     * 
     * A range of numbers that is used to calculate the damage
     * chance for an item. The damage chance will fall within this
     * range.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getDamageChanceRange(): NumberRange;
}

/**
 * When present on an item, this item can be dyed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDyeableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * Sets and returns the current color of the item.
     *
     * @worldMutation
     *
     */
    color?: RGB;
    /**
     * @remarks
     * Returns the default color of the item.
     *
     * @throws This property can throw when used.
     */
    readonly defaultColor?: RGB;
    static readonly componentId = 'minecraft:dyeable';
}

/**
 * When present on an item, this item can have enchantments
 * applied to it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = 'minecraft:enchantable';
    /**
     * @remarks
     * Adds an enchantment to the item stack.
     *
     * @worldMutation
     *
     * @param enchantment
     * The enchantment interface to be added.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if the enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: Exception
     * thrown if the enchantment is not compatible with the item
     * stack.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /**
     * @remarks
     * Adds a list of enchantments to the item stack.
     *
     * @worldMutation
     *
     * @param enchantments
     * The list of enchantments to be added.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if any
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if any enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: Exception
     * thrown if any enchantment is not compatible with the item
     * stack.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /**
     * @remarks
     * Checks whether an enchantment can be added to the item
     * stack.
     *
     * @param enchantment
     * The enchantment interface to be added.
     * @returns
     * Returns true if the enchantment can be added to the item
     * stack.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if the enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Gets the enchantment of a given type from the item stack.
     *
     * @param enchantmentType
     * The enchantment type to get.
     * @returns
     * Returns the enchantment if it exists on the item stack.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * Gets all enchantments on the item stack.
     *
     * @returns
     * Returns a list of enchantments on the item stack.
     * @throws This function can throw errors.
     */
    getEnchantments(): Enchantment[];
    /**
     * @remarks
     * Checks whether an item stack has a given enchantment type.
     *
     * @param enchantmentType
     * The enchantment type to check for.
     * @returns
     * Returns true if the item stack has the enchantment type.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * Removes all enchantments applied to this item stack.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * Removes an enchantment of the given type.
     *
     * @worldMutation
     *
     * @param enchantmentType
     * The enchantment type to remove.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

/**
 * 表示物品食物组件。当出现在物品上时，实体可以消耗此物品。
 * 注意，只能在数驱物品上获取和使用该组件。
 * 
 * When present on an item, this item is consumable by
 * entities. Note that this component only applies to
 * data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 若为 `true` ，则无论饥饿值是否已满，玩家始终可以食用该物品。
     * 
     * If true, the player can always eat this item (even when not
     * hungry).
     *
     * @throws This property can throw when used.
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * 表示实体在食用该物品后恢复的饥饿值，即营养值。
     * 
     * Represents how much nutrition this food item will give an
     * entity when eaten.
     *
     * @throws This property can throw when used.
     */
    readonly nutrition: number;
    /**
     * @remarks
     * 当一个物品被食用，
     * 将根据公式 `nutrition * saturation_modifier * 2`
     * 来为玩家添加饱和状态。
     * 
     * When an item is eaten, this value is used according to this
     * formula (nutrition * saturation_modifier * 2) to apply a
     * saturation buff.
     *
     * @throws This property can throw when used.
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * 若给出，则使用时将该物品转换为标识符指定的物品。
     * 
     * When specified, converts the active item to the one
     * specified by this property.
     *
     * @throws This property can throw when used.
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}

/**
 * This component is added to items with the `Storage Item`
 * component. Can access and modify this items inventory
 * container.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemInventoryComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * When present on an item, this item is a potion item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * The PotionDeliveryType associated with the potion item.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     *
     * {@link Error}
     */
    readonly potionDeliveryType: PotionDeliveryType;
    /**
     * @remarks
     * The PotionEffectType associated with the potion item.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     *
     * {@link Error}
     */
    readonly potionEffectType: PotionEffectType;
    static readonly componentId = 'minecraft:potion';
}

/**
 * Contains information related to a chargeable item when the
 * player has finished using the item and released the build
 * action.
 */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that triggered this item event.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the releasing of
 * charging for a chargeable item.
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * is released from charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * is released from charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}

/**
 * Defines a collection of items.
 * @seeExample itemStacks.ts
 * @seeExample givePlayerEquipment.ts
 * @seeExample spawnFeatherItem.ts
 */
export class ItemStack {
    /**
     * @remarks
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * @worldMutation
     *
     * Bounds: [1, 255]
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * Gets or sets whether the item is kept on death.
     *
     * @worldMutation
     *
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * Key for the localization of this items's name used in .lang
     * files.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * @worldMutation
     *
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * @worldMutation
     *
     * @throws
     * Throws if the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * The type of the item.
     *
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * The total weight of all items in the stack plus the weight
     * of all items in the items container which is defined with
     * the `Storage Item` component. The weight per item can be
     * modified by the `Storage Weight Modifier` component.
     *
     */
    readonly weight: number;
    /**
     * @remarks
     * Creates a new instance of a stack of items for use in the
     * world.
     *
     * @param itemType
     * Type of item to create. See the {@link
     * @minecraft/vanilla-data.MinecraftItemTypes} enumeration for
     * a list of standard item types in Minecraft experiences.
     * @param amount
     * Number of items to place in the stack, between 1-255. The
     * provided value will be clamped to the item's maximum stack
     * size. Note that certain items can only have one item in the
     * stack.
     * Defaults to: 1
     * Bounds: [1, 255]
     * @throws
     * Throws if `itemType` is invalid, or if `amount` is outside
     * the range of 1-255.
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * @remarks
     * Clears all dynamic properties that have been set on this
     * item stack.
     *
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * @returns
     * Returns a copy of this item stack.
     */
    clone(): ItemStack;
    /**
     * @remarks
     * Get the list of block types this item can break in Adventure
     * mode.
     *
     * @worldMutation
     *
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * Get the list of block types this item can be placed on in
     * Adventure mode.
     *
     * @worldMutation
     *
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food'). If
     * no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs are those in the {@link
     * ItemComponentTypes} enum and custom component IDs registered
     * with the {@link ItemComponentRegistry}.
     * @returns
     * Returns the component if it exists on the item stack,
     * otherwise undefined.
     * @seeExample giveHurtDiamondSword.ts
     */
    getComponent<T extends string>(componentId: T): ItemComponentReturnType<T> | undefined;
    /**
     * @remarks
     * Returns all scripting components that are present on this
     * item stack.
     *
     */
    getComponents(): ItemComponent[];
    /**
     * @remarks
     * Returns a property value.
     *
     * @param identifier
     * The property identifier.
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Returns the available set of dynamic property identifiers
     * that have been used on this entity.
     *
     * @returns
     * A string array of the dynamic properties set on this entity.
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * Returns the total size, in bytes, of all the dynamic
     * properties that are currently stored for this entity. This
     * includes the size of both the key and the value.  This can
     * be useful for diagnosing performance warning signs - if, for
     * example, an entity has many megabytes of associated dynamic
     * properties, it may be slow to load on various devices.
     *
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * An array of lore lines. If the item does not have lore,
     * returns an empty array.
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack. String lore lines will be converted to a {@link
     * RawMessage} and put under {@link RawMessage.text}.
     *
     * @returns
     * An array of lore lines. If the item does not have lore,
     * returns an empty array.
     */
    getRawLore(): RawMessage[];
    /**
     * @remarks
     * Returns a set of tags associated with this item stack.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Checks whether this item stack has a particular tag
     * associated with it.
     *
     * @param tag
     * Tag to search for.
     * @returns
     * True if the Item Stack has the tag associated with it, else
     * false.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration, but for non-stackable items this will always
     * return false.
     *
     * @param itemStack
     * ItemStack to check stacking compatibility with.
     * @returns
     * True if the Item Stack is stackable with the itemStack
     * passed in. False for non-stackable items.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * Version safe way of checking if an item matches.
     *
     * @param itemName
     * Identifier of the item.
     * @param states
     *  Applicable only for blocks. An optional set of states to
     * compare against. If states is not specified, matches checks
     * against the set of types more broadly.
     * @returns
     * Returns a boolean whether the specified item matches.
     */
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * @worldMutation
     *
     * @param blockIdentifiers
     * String list of block types that the item can destroy.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @seeExample giveDestroyRestrictedPickaxe.ts
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * @worldMutation
     *
     * @param blockIdentifiers
     * String list of block types that the item can be placed on.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @seeExample givePlaceRestrictedGoldBlock.ts
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * Sets multiple dynamic properties with specific values.
     *
     * @param values
     * A Record of key value pairs of the dynamic properties to
     * set. If the data value is null, it will remove that property
     * instead.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    /**
     * @remarks
     * Sets a specified property to a value. Note: This function
     * only works with non-stackable items.
     *
     * @param identifier
     * The property identifier.
     * @param value
     * Data value of the property to set. If the value is null, it
     * will remove the property instead.
     * @throws
     * Throws if the item stack is stackable.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack. The lore list is cleared if set to an empty
     * string or undefined.
     *
     * @worldMutation
     *
     * @param loreList
     * List of lore lines. Each element in the list represents a
     * new line. The maximum lore line count is 20. The maximum
     * lore line length is 50 characters.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link Error}
     * @seeExample diamondAwesomeSword.ts
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}

/**
 * Contains information related to a chargeable item starting
 * to be charged.
 */
export class ItemStartUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is starting to be charged.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the start of
 * charging for a chargeable item.
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * starts charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * starts charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}

/**
 * Contains information related to an item being used on a
 * block. This event fires when a player presses the the Use
 * Item / Place Block button to successfully use an item or
 * place a block. Fires for the first block that is interacted
 * with when performing a build action. Note: This event cannot
 * be used with Hoe or Axe items.
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that an item is being used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * The impacted item stack that is starting to be used. Can be
     * undefined in some gameplay scenarios like pushing a button
     * with an empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}

/**
 * Contains information related to a chargeable item has
 * finished an items use cycle, or when the player has released
 * the use action with the item.
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is stopping being charged.
     * ItemStopUseAfterEvent can be called when teleporting to a
     * different dimension and this can be undefined.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the stopping of
 * charging for an item that has a registered
 * minecraft:chargeable component.
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * stops charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * stops charging.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}

/**
 * Contains information related to an item that has stopped
 * being used on a block. This event fires when a player
 * successfully uses an item or places a block by pressing the
 * Use Item / Place Block button. If multiple blocks are
 * placed, this event will only occur once at the beginning of
 * the block placement. Note: This event cannot be used with
 * Hoe or Axe items.
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The impacted item stack that is being used on a block.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * Manages callbacks that are connected to an item stops used
 * on a block event.
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item stops being
     * used on a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}

/**
 * Represents the type of an item - for example, Wool.
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Key for the localization of this ItemType's name used in
     * .lang files.
     *
     */
    readonly localizationKey: string;
}

/**
 * Returns the set of item types registered within Minecraft.
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * Returns a specific item type, if available within Minecraft.
     *
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * Retrieves all available item types registered within
     * Minecraft.
     *
     */
    static getAll(): ItemType[];
}

/**
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers an entity interaction.
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is being used.
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}

/**
 * Contains information related to an item being used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this will cancel the item use behavior.
     *
     */
    cancel: boolean;
}

/**
 * Manages callbacks that fire before an item is used.
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}

/**
 * Contains information regarding the use of an item on a
 * block.
 */
export class ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * The block impacted by this event.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that the item was used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block that the item was used on.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The item stack used on the block.
     *
     */
    readonly itemStack: ItemStack;
}

/**
 * 战利品物品条件，用于检查掉落来源是否被特定类型的实体击杀。
 *
 * Loot item condition that checks whether or not the drop
 * source was killed by a specific type of entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class KilledByEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     * 示例：`minecraft:skeleton`。
     *
     * The entity type required for this condition to pass.
     * Example: 'minecraft:skeleton'.
     *
     */
    readonly entityType: string;
}

/**
 * 战利品物品条件，用于检查战利品掉落的来源是否被玩家击杀。
 *
 * Loot item condition that checks whether or not the source of
 * the loot drop was killed by the player.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class KilledByPlayerCondition extends LootItemCondition {
    private constructor();
}

/**
 * 战利品物品条件，用于检查战利品掉落的来源是否被玩家或玩家的任何宠物击杀。
 *
 * Loot item condition that checks whether or not the source of
 * the loot drop was killed by the player or any of the
 * player's pets.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class KilledByPlayerOrPetsCondition extends LootItemCondition {
    private constructor();
}

/**
 * 包含与拉杆激活或停用变化相关的信息。
 *
 * Contains information related to changes to a lever
 * activating or deactivating.
 * @seeExample leverActionEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果拉杆已激活（即正在传输电力），则为 `true`。
     *
     * True if the lever is activated (that is, transmitting
     * power).
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * 触发拉杆激活的可选玩家。
     *
     * Optional player that triggered the lever activation.
     *
     */
    readonly player: Player;
}

/**
 * 管理与拉杆移动（激活或停用）相关的回调。
 *
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 * @seeExample leverActionEvent.ts
 */
export class LeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当拉杆被移动（激活或停用）时将被调用。
     *
     * Adds a callback that will be called when a lever is moved
     * (activates or deactivates).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在拉杆被移动（激活或停用）时不再被调用。
     *
     * Removes a callback from being called when a lever is moved
     * (activates or deactivates).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}

/**
 * 在点之间线性插值的样条线。
 *
 * A spline that linearly interpolates between points.
 */
export class LinearSpline {
    /**
     * @remarks
     * 线性样条线的控制点。
     *
     * Control points for the Linear spline.
     *
     * @worldMutation
     *
     */
    controlPoints: Vector3[];
}

/**
 * 由唯一方块位置的无序容器组成的体积。
 *
 * Volume composed of an unordered container of unique block
 * locations.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ListBlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * 创建 `ListBlockVolume` 的新实例。
     *
     * Creates a new instance of ListBlockVolume.
     *
     * @param locations
     * 用于构造 `ListBlockVolume` 的初始方块位置数组。
     *
     * Initial array of block locations that ListBlockVolume will
     * be constructed with.
     */
    constructor(locations: Vector3[]);
    /**
     * @remarks
     * 将方块位置插入容器中。
     *
     * Insert block locations into container.
     *
     * @param locations
     * 要插入容器的方块位置数组。
     *
     * Array of block locations to be inserted into container.
     */
    add(locations: Vector3[]): void;
    /**
     * @remarks
     * 从容器中移除方块位置。
     *
     * Remove block locations from container.
     *
     * @param locations
     * 要从容器中移除的方块位置数组。
     *
     * Array of block locations to be removed from container.
     */
    remove(locations: Vector3[]): void;
}

/**
 * 指向世界中固定位置的路径点。与实体路径点不同，位置路径点始终保持有效，并且其位置可以更新。
 *
 * Waypoint that points to a fixed location in the world.
 * Unlike entity waypoints, location waypoints always remain
 * valid and their position can be updated.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationWaypoint extends Waypoint {
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(dimensionLocation: DimensionLocation, textureSelector: WaypointTextureSelector, color?: RGB);
    /**
     * @remarks
     * 更新此路径点指向的维度和位置。
     *
     * Updates the dimension and location that this waypoint points
     * to.
     *
     * @worldMutation
     *
     * @param dimensionLocation
     * 路径点的新 `DimensionLocation`（维度和坐标）。
     *
     * The new {@link DimensionLocation} (dimension and
     * coordinates) for the waypoint.
     */
    setDimensionLocation(dimensionLocation: DimensionLocation): void;
}

/**
 * 管理玩家定位栏上显示的路径点集合。允许添加、移除和查询路径点，具有最大容量限制。
 *
 * 定位栏中的无效路径点将在下一个游戏刻自动移除。这包括与已从世界中移除的实体绑定的路径点。
 *
 * 注意：你可以使用 `playerWaypoints` {@link GameRule} 控制是否自动将玩家路径点添加到定位栏。接受的值有 `off`（玩家不显示在定位栏上）和 `everyone`（所有玩家在定位栏上可见）。
 *
 * 注意：你只能修改、移除或查询由此包添加的路径点。
 *
 * Manages the collection of waypoints displayed on a player's
 * locator bar. Allows adding, removing, and querying waypoints
 * with a maximum capacity limit.
 *
 * Invalid waypoints in the locator bar will be automatically
 * removed in the next tick. This includes waypoints tied to
 * entities that have been removed from the world.
 *
 * Note: You can control whether vanilla player waypoints are
 * automatically added to the locator bar using the
 * `playerWaypoints` {@link GameRule}. Accepted values are
 * `off` (players are not shown on the locator bar) and
 * `everyone` (all players are visible on the locator bar).
 *
 * Note: You can only modify, remove, or query waypoints that
 * were added by this pack.
 * @seeExample sharedWaypoint.ts
 */
export class LocatorBar {
    private constructor();
    /**
     * @remarks
     * 定位栏中当前的路径点数量。
     *
     * The current number of waypoints in the locator bar.
     *
     */
    readonly count: number;
    /**
     * @remarks
     * 可以添加到定位栏的最大路径点数量。
     *
     * The maximum number of waypoints that can be added to the
     * locator bar.
     *
     */
    readonly maxCount: number;
    /**
     * @remarks
     * 将路径点添加到定位栏。如果路径点已存在、已达到最大路径点限制或路径点无效，则抛出错误。
     *
     * Adds a waypoint to the locator bar. Throws an error if the
     * waypoint already exists, the maximum waypoint limit has been
     * reached, or the waypoint is invalid.
     *
     * @worldMutation
     *
     * @param waypoint
     * 要添加到定位栏的 {@link Waypoint}。
     *
     * The {@link Waypoint} to add to the locator bar.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidWaypointError}
     *
     * {@link LocatorBarError}
     */
    addWaypoint(waypoint: Waypoint): void;
    /**
     * @remarks
     * 返回当前定位栏中所有路径点的数组。
     *
     * Returns an array of all waypoints currently in the locator
     * bar.
     *
     * @worldMutation
     *
     */
    getAllWaypoints(): Waypoint[];
    /**
     * @remarks
     * 检查指定的路径点是否存在于定位栏中。
     *
     * Checks whether the specified waypoint exists in the locator
     * bar.
     *
     * @worldMutation
     *
     * @param waypoint
     * 要检查的 {@link Waypoint}。
     *
     * The {@link Waypoint} to check for.
     */
    hasWaypoint(waypoint: Waypoint): boolean;
    /**
     * @remarks
     * 从定位栏中移除所有路径点，将其完全清空。
     *
     * Removes all waypoints from the locator bar, clearing it
     * completely.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    removeAllWaypoints(): void;
    /**
     * @remarks
     * 从定位栏中移除指定路径点。如果路径点不存在于定位栏中，则返回错误。
     *
     * Removes a specific waypoint from the locator bar. Returns an
     * error if the waypoint does not exist in the locator bar.
     *
     * @worldMutation
     *
     * @param waypoint
     * 要从定位栏中移除的 {@link Waypoint}。
     *
     * The {@link Waypoint} to remove from the locator bar.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link LocatorBarError}
     */
    removeWaypoint(waypoint: Waypoint): void;
}

/**
 * 如果提供的工具具有抢夺附魔，则掉落额外物品的战利品物品函数。
 *
 * Loot item function that drops extra items if the provided
 * tool has the looting enchant.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootingEnchantFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择额外物品掉落数量的数值范围。包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * number of extra items to drop. Contains minimum and maximum
     * values.
     *
     */
    readonly count: NumberRange;
}

/**
 * 表示包含要掉落物品的战利品池条目。
 *
 * Represents a loot pool entry containing an item to drop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootItem extends LootPoolEntry {
    private constructor();
    /**
     * @beta
     */
    readonly conditions: LootItemCondition[];
    readonly functions: LootItemFunction[];
    /**
     * @remarks
     * 此条目中包含的物品名称。
     *
     * The name of the item contained in this entry.
     *
     */
    readonly name?: ItemType;
}

/**
 * 所有战利品物品条件派生的抽象基类。战利品物品条件是一组规则或要求，必须满足这些条件才能产生战利品掉落。
 *
 * An abstract base class from which all loot item conditions
 * are derived. A loot item condition is a set of rules or
 * requirements which must be met for a loot drop to happen.
 */
export class LootItemCondition {
    private constructor();
}

/**
 * 所有战利品物品函数派生的抽象基类。战利品物品函数可以在战利品掉落时以多种方式修改掉落物，可选地依赖于一组必须满足的条件。
 *
 * An abstract base class from which all loot item functions
 * are derived. Loot item functions can modify loot drops in a
 * variety of ways as they happen, optionally dependent on a
 * set of conditions which must be met.
 */
export class LootItemFunction {
    private constructor();
    readonly conditions: LootItemCondition[];
}

/**
 * 条目的集合，每个条目单独决定战利品掉落。可以包含决定掉落结果的数值，包括投掷次数、额外投掷次数和层级。
 *
 * A collection of entries which individually determine loot
 * drops. Can contain values determining drop outcomes,
 * including rolls, bonus rolls and tiers.
 */
export class LootPool {
    private constructor();
    /**
     * @remarks
     * 返回基于玩家幸运等级战利品池将额外投掷的次数，表示为从最小到最大投掷次数的范围。
     *
     * Returns the number of extra times a loot pool will be rolled
     * based on the player's luck level, represented as a range
     * from minimum to maximum rolls.
     *
     */
    readonly bonusRolls: NumberRange;
    readonly conditions: LootItemCondition[];
    /**
     * @remarks
     * 获取战利品池中包含的所有战利品池条目的完整列表。
     *
     * Gets a complete list of all loot pool entries contained in
     * the loot pool.
     *
     */
    readonly entries: LootPoolEntry[];
    /**
     * @remarks
     * 返回战利品池将投掷的次数，表示为从最小到最大投掷次数的范围。
     *
     * Returns the number of times a loot pool will be rolled,
     * represented as a range from minimum to maximum rolls.
     *
     */
    readonly rolls: NumberRange;
    /**
     * @remarks
     * 获取给定战利品表的战利品池层级值（如果存在）。
     *
     * Gets the loot pool tier values for a given table if they
     * exist.
     *
     */
    readonly tiers?: LootPoolTiers;
}

/**
 * 表示战利品表中的一个条目，描述战利品掉落时的一个可能掉落物。可以包含一个物品、另一个战利品表、另一个战利品表的路径或空掉落。
 *
 * Represents one entry within Loot Table, which describes one
 * possible drop when a loot drop occurs. Can contain an item,
 * another loot table, a path to another loot table, or an
 * empty drop.
 */
export class LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 获取给定战利品池条目的品质。
     *
     * Gets the quality of a given loot pool entry.
     *
     */
    readonly quality: number;
    /**
     * @remarks
     * 获取给定战利品池条目的子表。
     *
     * Gets the subtable of a given loot pool entry.
     *
     */
    readonly subTable?: LootPoolEntry;
    /**
     * @remarks
     * 获取给定战利品池条目的权重。
     *
     * Gets the weight of a given loot pool entry.
     *
     */
    readonly weight: number;
}

/**
 * 表示在分层战利品池中决定战利品掉落的值。分层战利品池中的潜在掉落物是有序的，并通过此对象中的值控制的逻辑进行选择。
 *
 * Represents the values which determine loot drops in a tiered
 * loot pool. Potential drops from tiered loot pools are
 * ordered, and chosen via logic controlled by the values in
 * this object.
 */
export class LootPoolTiers {
    private constructor();
    /**
     * @remarks
     * 每次额外投掷尝试升级掉落物品层级的机会。
     *
     * The chance for each bonus roll attempt to upgrade the tier
     * of the dropped item.
     *
     */
    readonly bonusChance: number;
    /**
     * @remarks
     * 战利品掉落升级其层级的尝试次数，从而增加其在战利品池条目数组中的位置，产生更高级别的掉落。
     *
     * The number of attempts for the loot drop to upgrade its
     * tier, thereby incrementing its position in the loot pool
     * entry array, resulting in a higher tier drop.
     *
     */
    readonly bonusRolls: number;
    /**
     * @remarks
     * 表示确定掉落哪个战利品层级的起始点上界。下界始终为 1。例如，值为 3 将导致层级掉落逻辑从战利品池条目数组中 1 到 3 之间的随机选择位置开始。
     *
     * Represents the upper bound for the starting point in
     * determining which tier of loot to drop. The lower bound is
     * always 1. For example, a value of 3 would result in the tier
     * drop logic starting at a randomly selected position in the
     * loot pool entry array between 1 and 3.
     *
     */
    readonly initialRange: number;
}

/**
 * 表示单个战利品表，决定杀死生物、破坏方块、填充容器等时生成哪些物品。
 *
 * Represents a single Loot Table, which determines what items
 * are generated when killing a mob, breaking a block, filling
 * a container, and more.
 */
export class LootTable {
    private constructor();
    /**
     * @remarks
     * 返回表示此战利品表的 JSON 文件的路径。不包括文件扩展名或 `loot_tables/` 文件夹前缀。示例：`entities/creeper`。
     *
     * Returns the path to the JSON file that represents this loot
     * table. Does not include file extension, or 'loot_tables/'
     * folder prefix. Example: `entities/creeper`.
     *
     */
    readonly path: string;
    /**
     * @remarks
     * 返回给定战利品表上的战利品池数组。
     *
     * Returns the array of loot pools on a given loot table.
     *
     */
    readonly pools: LootPool[];
}

/**
 * 表示包含另一个独立的嵌套战利品表的战利品池条目。
 *
 * Represents a loot pool entry containing another separate,
 * nested loot table.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableEntry extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 获取存储为父战利品池中子表的战利品表。
     *
     * Gets the loot table stored as a subtable in the parent loot
     * pool.
     *
     */
    readonly lootTable: LootTable;
}

/**
 * Manager for Loot Table related APIs. Allows for generation
 * of drops from blocks and entities according to their loot
 * tables.
 */
export class LootTableManager {
    private constructor();
    /**
     * @remarks
     * Generates loot from a given block as if it had been mined.
     *
     * @param block
     * The block to generate loot from.
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     * @throws
     * Throws if the block is in an unloaded chunk, or if the
     * block's position is outside of world bounds.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     *
     * {@link UnloadedChunksError}
     */
    generateLootFromBlock(block: Block, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * Generates loot from a given block permutation as if it had
     * been mined.
     *
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     */
    generateLootFromBlockPermutation(blockPermutation: BlockPermutation, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * Generates loot from a given block type as if it had been
     * mined.
     *
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     */
    generateLootFromBlockType(scriptBlockType: BlockType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * Generates loot from given a entity as if it had been killed.
     *
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the entity
     * was invalid.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    generateLootFromEntity(entity: Entity, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * Generates loot from given a entity type as if it had been
     * killed.
     *
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped.
     */
    generateLootFromEntityType(entityType: EntityType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * Generates loot from a given LootTable.
     *
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     */
    generateLootFromTable(lootTable: LootTable, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * Retrieves a single loot table from the level's current
     * registry.
     *
     * @param path
     * Path to the table to retrieve. Does not include file
     * extension, or 'loot_tables/' folder prefix. Example:
     * `entities/creeper`.
     * @returns
     * Returns a LootTable if one is found, or `undefined` if the
     * provided path does not correspond to an existing loot table.
     */
    getLootTable(path: string): LootTable | undefined;
}

/**
 * 表示包含对另一个战利品表（由其路径描述）的引用的战利品池条目。
 *
 * Represents a loot pool entry containing a reference to
 * another loot table, described by its path.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableReference extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 引用的战利品表的路径。示例：`loot_tables/chests/village/village_bundle.json`
     *
     * The path to the referenced loot table. Example:
     * `loot_tables/chests/village/village_bundle.json`
     *
     */
    readonly path: string;
}

/**
 * 用于检查是否使用合适的工具触发战利品事件的战利品物品条件。可以描述要比较的物品类型、数量、耐久度、附魔或物品标签数组。
 *
 * Loot item condition that checks whether an appropriate tool
 * was used to trigger the loot event. Can describe item type,
 * count, durability, enchantments, or arrays of item tags to
 * compare against.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MatchToolCondition extends LootItemCondition {
    private constructor();
    /**
     * 此条件通过所需的堆叠大小或数量。
     *
     * @remarks
     * The stack size, or count, required for this condition to
     * pass.
     *
     */
    readonly count: NumberRange;
    /**
     * 此条件通过所需的耐久度值。
     *
     * @remarks
     * The durability value required for this condition to pass.
     *
     */
    readonly durability: NumberRange;
    /**
     * 此条件通过所需的附魔数组。
     *
     * @remarks
     * Array of enchantments required for this condition to pass.
     *
     */
    readonly enchantments: EnchantInfo[];
    /**
     * 此条件通过所需的工具物品名称。
     *
     * @remarks
     * The name of the tool item required for this condition to
     * pass.
     *
     */
    readonly itemName: string;
    /**
     * 此条件通过必须全部匹配的物品标签数组。
     *
     * @remarks
     * Array of item tags which ALL must be matched for this
     * condition to pass.
     *
     */
    readonly itemTagsAll: string[];
    /**
     * 此条件通过至少需要匹配一个的物品标签数组。
     *
     * @remarks
     * Array of item tags, from which at least 1 must be matched
     * for this condition to pass.
     *
     */
    readonly itemTagsAny: string[];
    /**
     * 此条件通过需要恰好零个匹配的物品标签数组。
     *
     * @remarks
     * Array of item tags, from which exactly zero must match for
     * this condition to pass.
     *
     */
    readonly itemTagsNone: string[];
}

/**
 * @beta
 * 一个特定的当前内部事件，用于将消息从客户端传递到服务器。
 *
 * A specific currently-internal event used for passing
 * messages from client to server.
 */
export class MessageReceiveAfterEvent {
    private constructor();
    /**
     * 消息标识符。
     *
     * @remarks
     * The message identifier.
     *
     */
    readonly id: string;
    /**
     * 消息内容。
     *
     * @remarks
     * The message.
     *
     */
    readonly message: string;
    /**
     * 发送消息的玩家。
     *
     * @remarks
     * The player who sent the message.
     *
     */
    readonly player: Player;
}

/**
 * 包含一组额外的变量值，用于进一步定义渲染和动画的工作方式。
 *
 * Contains a set of additional variable values for further
 * defining how rendering and animations function.
 */
export class MolangVariableMap {
    /**
     * 向 Molang 添加以下变量：
     * - `<variable_name>.r` - 红色颜色值 [0-1]
     * - `<variable_name>.g` - 绿色颜色值 [0-1]
     * - `<variable_name>.b` - 蓝色颜色值 [0-1]
     *
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     *
     * @throws This function can throw errors.
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * 向 Molang 添加以下变量：
     * - `<variable_name>.r` - 红色颜色值 [0-1]
     * - `<variable_name>.g` - 绿色颜色值 [0-1]
     * - `<variable_name>.b` - 蓝色颜色值 [0-1]
     * - `<variable_name>.a` - Alpha（透明度）颜色值 [0-1]
     *
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * - `<variable_name>.a` - Alpha (transparency) color value
     * [0-1]
     *
     * @throws This function can throw errors.
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * 在 Molang 变量映射中设置一个数值（小数）。
     *
     * @remarks
     * Sets a numeric (decimal) value within the Molang variable
     * map.
     *
     * @param variableName
     * 要设置的浮点数的名称。
     * Name of the float-based number to set.
     * @param number
     * 要为基于 Molang 的变量设置的值。
     * Value for the Molang-based variable to set.
     * @throws This function can throw errors.
     */
    setFloat(variableName: string, number: number): void;
    /**
     * 向 Molang 添加以下变量：
     * - `<variable_name>.speed` - 提供的速度数值
     * - `<variable_name>.direction_x` - 提供的 {@link Vector3} 中的 X 值
     * - `<variable_name>.direction_y` - 提供的 {@link Vector3} 中的 Y 值
     * - `<variable_name>.direction_z` - 提供的 {@link Vector3} 中的 Z 值
     *
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.speed` - Speed number provided
     * - `<variable_name>.direction_x` - X value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_y` - Y value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_z` - Z value from the {@link
     * Vector3} provided
     *
     * @throws This function can throw errors.
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * 向 Molang 添加以下变量：
     * - `<variable_name>.x` - 提供的 {@link Vector3} 中的 X 值
     * - `<variable_name>.y` - 提供的 {@link Vector3} 中的 Y 值
     * - `<variable_name>.z` - 提供的 {@link Vector3} 中的 Z 值
     *
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.x` - X value from the {@link Vector3}
     * provided
     * - `<variable_name>.y` - Y value from the {@link Vector3}
     * provided
     * - `<variable_name>.z` - Z value from the {@link Vector3}
     * provided
     *
     * @throws This function can throw errors.
     */
    setVector3(variableName: string, vector: Vector3): void;
}

/**
 * @beta
 * 发生更改的包设置名称和值。
 *
 * Pack setting name and value that changed.
 */
export class PackSettingChangeAfterEvent {
    private constructor();
    /**
     * 设置的名称。
     *
     * @remarks
     * The name of the setting.
     *
     */
    readonly settingName: string;
    /**
     * 设置的值。
     *
     * @remarks
     * The value of the setting.
     *
     */
    readonly settingValue: boolean | number | string;
}

/**
 * @beta
 * 管理连接到包设置更改事件的回调。
 *
 * Manages callbacks that are connected to pack setting change events.
 */
export class PackSettingChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): (arg0: PackSettingChangeAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): void;
}

/**
 * 用于检查战利品实体当前是否为特定类型实体乘客的战利品条件。
 *
 * Loot item condition that checks whether the looting entity
 * is currently a passenger of a specific type of entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PassengerOfEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * 此条件通过所需的实体类型。
     *
     * @remarks
     * The entity type required for this condition to pass.
     *
     */
    readonly entityType: string;
}

/**
 * 包含与活塞扩展或收缩变化相关的信息。
 *
 * Contains information related to changes to a piston
 * expanding or retracting.
 * @seeExample pistonAfterEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 如果活塞正在扩展过程中，则为 `true`。
     *
     * @remarks
     * True if the piston is the process of expanding.
     *
     */
    readonly isExpanding: boolean;
    /**
     * 包含活塞的附加属性和详细信息。
     *
     * @remarks
     * Contains additional properties and details of the piston.
     *
     */
    readonly piston: BlockPistonComponent;
}

/**
 * 管理与活塞激活相关的回调。
 *
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @seeExample pistonAfterEvent.ts
     */
    subscribe(callback: (arg0: PistonActivateAfterEvent) => void): (arg0: PistonActivateAfterEvent) => void;
    /**
     * 移除在活塞扩展或收缩时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PistonActivateAfterEvent) => void): void;
}

/**
 * 表示世界中的一个玩家。
 *
 * Represents a player within the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /**
     * @remarks
     * 玩家的摄像机。
     *
     * The player's Camera.
     *
     * @throws This property can throw when used.
     */
    readonly camera: Camera;
    /**
     * @beta
     * @remarks
     * 玩家的聊天显示名称，由 {@link Player.chatNamePrefix} + {@link Player.name} + {@link Player.chatNameSuffix} 组成。这是以此玩家身份发送的聊天消息中所显示的作者名称。要更改显示在玩家头顶的名称，请使用 {@link Entity.nameTag}。
     *
     * The player's chat display name, composed from {@link Player.chatNamePrefix} + {@link Player.name} + {@link Player.chatNameSuffix}. This is the name shown as the author of chat messages sent by this player. To change the name shown above the player's head, use {@link Entity.nameTag}.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly chatDisplayName: string;
    /**
     * @beta
     * @remarks
     * 一个可选的字符串，设置后会被添加到该玩家发送的聊天消息文本之前。可用于对玩家的消息应用格式或颜色代码（例如，使用 `'§a'` 使其消息变为绿色）。不影响玩家的名称显示 —— 请使用 {@link Player.chatNamePrefix} 更改聊天中显示的名称，或使用 {@link Entity.nameTag} 更改玩家头顶的名称。设置为 `undefined` 以清除。
     *
     * An optional string that, when set, is prepended to the text of chat messages sent by this player. Useful for applying formatting or color codes to a player's messages (e.g., '§a' to make their messages green). Does not affect the player's name display - use {@link Player.chatNamePrefix} for the name shown in chat, or {@link Entity.nameTag} for the name above the player's head. Set to undefined to clear.
     *
     * @worldMutation
     *
     */
    chatMessagePrefix?: string;
    /**
     * @beta
     * @remarks
     * 一个可选的字符串，设置后会被添加到聊天消息中玩家的名称之前。不影响玩家头顶的名称标签或玩家列表 —— 请使用 {@link Entity.nameTag} 设置。要为消息文本本身添加前缀，请使用 {@link Player.chatMessagePrefix}。设置为 `undefined` 以清除。
     *
     * An optional string that, when set, is prepended to the player's name in chat messages. Does not affect the name tag above the player's head or the player list - use {@link Entity.nameTag} for that. To prefix the message text itself, use {@link Player.chatMessagePrefix}. Set to undefined to clear.
     *
     * @worldMutation
     *
     */
    chatNamePrefix?: string;
    /**
     * @beta
     * @remarks
     * 一个可选的字符串，设置后会被追加到聊天消息中玩家的名称之后。不影响玩家头顶的名称标签或玩家列表 —— 请使用 {@link Entity.nameTag} 设置。另请参见 {@link Player.chatNamePrefix}。设置为 `undefined` 以清除。
     *
     * An optional string that, when set, is appended to the player's name in chat messages. Does not affect the name tag above the player's head or the player list - use {@link Entity.nameTag} for that. See also {@link Player.chatNamePrefix}. Set to undefined to clear.
     *
     * @worldMutation
     *
     */
    chatNameSuffix?: string;
    /**
     * @remarks
     * 包含玩家的设备信息。
     *
     * Contains the player's device information.
     *
     * @throws This property can throw when used.
     */
    readonly clientSystemInfo: ClientSystemInfo;
    /**
     * @remarks
     * @worldMutation
     *
     */
    commandPermissionLevel: CommandPermissionLevel;
    /**
     * @beta
     * @remarks
     * 包含用于操作玩家的渲染距离迷雾设置的方法。
     *
     * Contains methods for manipulating the render distance fog settings of a Player.
     *
     */
    readonly fogSettings: FogSettings;
    /**
     * @remarks
     * 获取玩家客户端的当前图形模式。这可以在设置菜单的视频部分中更改，具体取决于可用硬件。
     *
     * Gets the current graphics mode of the player's client. This can be changed in the Video section of the settings menu based on what hardware is available.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly graphicsMode: GraphicsMode;
    /**
     * @remarks
     * 包含玩家的输入信息。
     *
     * Contains the player's input information.
     *
     */
    readonly inputInfo: InputInfo;
    /**
     * @remarks
     * 玩家的输入权限。
     *
     * Input permissions of the player.
     *
     */
    readonly inputPermissions: PlayerInputPermissions;
    /**
     * @remarks
     * 如果为 `true`，玩家当前正在进行表情动作。
     *
     * If true, the player is currently emoting.
     *
     * @throws This property can throw when used.
     */
    readonly isEmoting: boolean;
    /**
     * @remarks
     * 玩家是否在飞行。例如，在创造模式或旁观者模式下。
     *
     * Whether the player is flying. For example, in Creative or Spectator mode.
     *
     * @throws This property can throw when used.
     */
    readonly isFlying: boolean;
    /**
     * @remarks
     * 玩家是否正在使用鞘翅滑翔。
     *
     * Whether the player is gliding with Elytra.
     *
     * @throws This property can throw when used.
     */
    readonly isGliding: boolean;
    /**
     * @remarks
     * 玩家是否正在跳跃。玩家按住跳跃动作时，此值将保持为 `true`。
     *
     * Whether the player is jumping. This will remain true while the player is holding the jump action.
     *
     * @throws This property can throw when used.
     */
    readonly isJumping: boolean;
    /**
     * @remarks
     * 玩家当前的总等级，基于其经验值。
     *
     * The current overall level for the player, based on their experience.
     *
     * @throws This property can throw when used.
     */
    readonly level: number;
    /**
     * @remarks
     * 玩家的 Locator Bar 定位栏。此属性用于管理显示在 HUD 上的导航点。
     *
     * The player's Locator Bar. This property is used for managing waypoints displayed on the HUD.
     *
     */
    readonly locatorBar: LocatorBar;
    /**
     * @remarks
     * 玩家的名称。
     *
     * Name of the player.
     *
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @remarks
     * 包含用于操作玩家的屏幕显示的方法。
     *
     * Contains methods for manipulating the on-screen display of a Player.
     *
     * @throws This property can throw when used.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @beta
     * @remarks
     * 一个可用于跨会话标识玩家的标识符。
     *
     * An identifier that can be used to identify a player across sessions.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly persistentId: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly playerPermissionLevel: PlayerPermissionLevel;
    /**
     * @remarks
     * @worldMutation
     *
     */
    selectedSlotIndex: number;
    /**
     * @remarks
     * 玩家达到下一级所需的总经验值。
     *
     * The overall total set of experience needed to achieve the next level for a player.
     *
     * @throws This property can throw when used.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @remarks
     * 玩家当前等级已获得的经验值。
     *
     * The current set of experience achieved for the player.
     *
     * @throws This property can throw when used.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks
     * 向玩家添加/移除经验值，并返回玩家的当前经验值。
     *
     * Adds/removes experience to/from the Player and returns the current experience of the Player.
     *
     * @worldMutation
     *
     * @param amount
     * 要添加的经验值数量。注意，这可以为负值。最小/最大边界为 -2^24 ~ 2^24。
     *
     * Amount of experience to add. Note that this can be negative. Min/max bounds at -2^24 ~ 2^24
     * Bounds: [-16777216, 16777216]
     * @returns
     * 返回玩家的当前经验值。
     *
     * Returns the current experience of the Player.
     * @throws This function can throw errors.
     */
    addExperience(amount: number): number;
    /**
     * @remarks
     * 向玩家添加/移除等级，并返回玩家的当前等级。
     *
     * Adds/removes level to/from the Player and returns the current level of the Player.
     *
     * @worldMutation
     *
     * @param amount
     * 要添加到玩家的数量。最小/最大边界为 -2^24 ~ 2^24。
     *
     * Amount to add to the player. Min/max bounds at -2^24 ~ 2^24
     * Bounds: [-16777216, 16777216]
     * @returns
     * 返回玩家的当前等级。
     *
     * Returns the current level of the Player.
     * @throws This function can throw errors.
     */
    addLevels(amount: number): number;
    /**
     * @remarks
     * 对此玩家，移除目标实体上所有 Entity 属性的覆盖。此更改不会应用到其他玩家，且直到下一刻才会应用。
     *
     * For this player, removes all overrides of any Entity Properties on the target Entity. This change is not applied until the next tick and will not apply to other players.
     *
     * @worldMutation
     *
     * @param targetEntity
     * 正在清除 Entity 属性覆盖的实体或实体 ID。
     *
     * The Entity or the ID of the Entity whose Entity Property overrides are being cleared.
     * @throws
     * 如果实体或实体 ID 无效则抛出。
     *
     * Throws if the Entity or Entity ID is invalid.
     */
    clearPropertyOverridesForEntity(targetEntity: Entity | string): void;
    /**
     * @beta
     * @remarks
     * 吃掉一个物品，为玩家提供该物品的饥饿度和饱和度效果。只能对食物物品使用。
     *
     * Eats an item, providing the item's hunger and saturation effects to the player. Can only be used on food items.
     *
     * @worldMutation
     *
     * @param itemStack
     * 要吃的物品。
     *
     * The item to eat.
     * @throws
     * 如果物品不是食物物品则抛出。
     *
     * Throws if the item is not a food item.
     */
    eatItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * 玩家的瞄准辅助设置。
     *
     * The player's aim-assist settings.
     *
     */
    getAimAssist(): PlayerAimAssist;
    /**
     * @remarks
     * 返回玩家当前的控制方案。
     *
     * Returns the player's current control scheme.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getControlScheme(): ControlScheme;
    /**
     * @remarks
     * 获取此玩家的活跃游戏模式（如果已指定）。
     *
     * Retrieves the active gamemode for this player, if specified.
     *
     * @throws This function can throw errors.
     */
    getGameMode(): GameMode;
    /**
     * @remarks
     * 获取特定冷却类别的当前物品冷却时间。
     *
     * Gets the current item cooldown time for a particular cooldown category.
     *
     * @param cooldownCategory
     * 指定要获取当前冷却时间的冷却类别。
     *
     * Specifies the cooldown category to retrieve the current cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(cooldownCategory: string): number;
    /**
     * @beta
     * @remarks
     * 获取玩家的延迟（以毫秒为单位）。
     *
     * Gets the player's ping in milliseconds.
     *
     * @returns
     * 玩家的延迟（以毫秒为单位）。
     *
     * The player's ping in milliseconds.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    getPing(): number;
    /**
     * @remarks
     * 获取玩家的当前出生点。
     *
     * Gets the current spawn point of the player.
     *
     * @throws This function can throw errors.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @beta
     * @remarks
     * 返回玩家的分屏槽位。
     *
     * Returns the split screen slot of the player.
     *
     * @returns
     * 玩家的分屏槽位，如果玩家不在分屏会话中则返回 `undefined`。
     *
     * The split screen slot of the player or undefined if the player is not in a split screen session.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    getSplitScreenSlot(): PlayerSplitScreenSlot | undefined;
    /**
     * @remarks
     * 获取玩家的总经验值。
     *
     * Gets the total experience of the Player.
     *
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /**
     * @remarks
     * 播放只有此特定玩家能听到的音乐曲目。
     *
     * Plays a music track that only this particular player can hear.
     *
     * @worldMutation
     *
     * @param trackId
     * 要播放的音乐曲目标识符。
     *
     * Identifier of the music track to play.
     * @param musicOptions
     * 音乐曲目的附加选项。
     *
     * Additional options for the music track.
     * @throws This function can throw errors.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 播放只有此特定玩家能听到的音效。
     *
     * Plays a sound that only this particular player can hear.
     *
     * @worldMutation
     *
     * @param soundOptions
     * 音效的附加可选选项。
     *
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link Error}
     * @seeExample playMusicAndSound.ts
     */
    playSound(soundId: SoundDefinition | string, soundOptions?: PlayerSoundOptions): SoundInstance;
    /**
     * @beta
     * @remarks
     * 这是一个内部方法，用于向下游客户端发布系统消息。
     *
     * This is an internal-facing method for posting a system message to downstream clients.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * 排队一首只有此特定玩家能听到的附加音乐曲目。如果当前没有曲目在播放，则会播放一首音乐曲目。
     *
     * Queues an additional music track that only this particular player can hear. If a track is not playing, a music track will play.
     *
     * @worldMutation
     *
     * @param trackId
     * 要播放的音乐曲目标识符。
     *
     * Identifier of the music track to play.
     * @param musicOptions
     * 音乐曲目的附加选项。
     *
     * Additional options for the music track.
     * @throws
     * 如果音量小于 0.0 将抛出错误。
     * 如果淡变小于 0.0 将抛出错误。
     *
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 对此玩家，移除 Entity 属性上的覆盖。此更改不会应用到其他玩家，且直到下一刻才会应用。
     *
     * For this player, removes the override on an Entity Property. This change is not applied until the next tick and will not apply to other players.
     *
     * @worldMutation
     *
     * @param targetEntity
     * 正在移除 Entity 属性覆盖的实体。
     *
     * The Entity whose Entity Property override is being removed.
     * @param identifier
     * Entity 属性标识符。
     *
     * The Entity Property identifier.
     * @throws
     * 如果实体无效则抛出。
     * 如果提供了无效的标识符则抛出。
     * 如果提供的值类型与属性类型不匹配则抛出。
     *
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the property type.
     */
    removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void;
    /**
     * @remarks
     * 重置玩家的等级。
     *
     * Resets the level of the player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetLevel(): void;
    /**
     * @remarks
     * 向玩家发送消息。
     *
     * Sends a message to the player.
     *
     * @param message
     * 要显示的消息。
     *
     * The message to be displayed.
     * @throws
     * 如果提供的 {@link RawMessage} 格式无效，此方法可能抛出错误。例如，如果为 `score` 提供了空的 `name` 字符串。
     *
     * This method can throw if the provided {@link RawMessage} is in an invalid format. For example, if an empty `name` string is provided to `score`.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @seeExample nestedTranslation.ts
     * @seeExample scoreWildcard.ts
     * @seeExample sendBasicMessage.ts
     * @seeExample sendPlayerMessages.ts
     * @seeExample sendTranslatedMessage.ts
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 设置玩家的控制方案。玩家的活跃摄像机预设必须通过脚本（如 camera.setCamera()）或命令设置。
     *
     * Set a player's control scheme. The player's active camera preset must be set by scripts like with camera.setCamera() or commands.
     *
     * @worldMutation
     *
     * @param controlScheme
     * 控制方案类型。如果此参数为 `undefined`，此方法将清除玩家的控制方案，恢复为玩家摄像机的默认控制方案。
     *
     * Control scheme type. If this argument is undefined, this method will clear the player's control scheme back to the player camera's default control scheme.
     * @returns
     * 如果控制方案已成功添加或更新，则不返回任何内容。如果控制方案不被玩家当前摄像机允许，则可能抛出 InvalidArgumentError。
     *
     * Returns nothing if the control scheme was added or updated successfully. This can throw an InvalidArgumentError if the control scheme is not allowed by the player's current camera.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setControlScheme(controlScheme?: ControlScheme): void;
    /**
     * @remarks
     * 为此玩家设置游戏模式覆盖。
     *
     * Sets a gamemode override for this player.
     *
     * @worldMutation
     *
     * @param gameMode
     * 活跃的游戏模式。
     *
     * Active gamemode.
     * @throws This function can throw errors.
     */
    setGameMode(gameMode?: GameMode): void;
    /**
     * @remarks
     * 对此玩家，将目标实体上的 Entity 属性覆盖为提供的值。此属性必须是客户端同步的。此更改不会应用到其他玩家，且直到下一刻才会应用。
     *
     * For this player, overrides an Entity Property on the target Entity to the provided value. This property must be client synced. This change is not applied until the next tick and will not apply to other players.
     *
     * @worldMutation
     *
     * @param targetEntity
     * 其 Entity 属性正在被覆盖的实体。
     *
     * The Entity whose Entity Property is being overriden.
     * @param identifier
     * Entity 属性标识符。
     *
     * The Entity Property identifier.
     * @param value
     * 覆盖值。提供的类型必须与实体定义中指定的类型兼容。
     *
     * The override value. The provided type must be compatible with the type specified in the entity's definition.
     * @throws
     * 如果实体无效则抛出。
     * 如果提供了无效的标识符则抛出。
     * 如果提供的值类型与属性类型不匹配则抛出。
     * 如果提供的值超出预期范围（int、float 属性）则抛出。
     * 如果提供的字符串值与接受的枚举值集合不匹配（enum 属性）则抛出。
     *
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the property type.
     * Throws if the provided value is outside the expected range (int, float properties).
     * Throws if the provided string value does not match the set of accepted enum values (enum properties)
     */
    setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * 为此特定玩家设置当前起始出生点。
     *
     * Sets the current starting spawn point for this particular player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * @remarks
     * 在世界中的指定位置创建一个新的粒子发射器。仅对目标玩家可见。
     *
     * Creates a new particle emitter at a specified location in the world. Only visible to the target player.
     *
     * @worldMutation
     *
     * @param effectName
     * 要创建的粒子标识符。
     *
     * Identifier of the particle to create.
     * @param location
     * 创建粒子发射器的位置。
     *
     * The location at which to create the particle emitter.
     * @param molangVariables
     * 一组可选的、可自定义的变量，可为该粒子进行调整。
     *
     * A set of optional, customizable variables that can be adjusted for this particle.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample spawnParticle.ts bd8c7a07
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @remarks
     * 设置特定冷却类别的物品冷却时间。
     *
     * Sets the item cooldown time for a particular cooldown category.
     *
     * @worldMutation
     *
     * @param cooldownCategory
     * 指定要获取当前冷却时间的冷却类别。
     *
     * Specifies the cooldown category to retrieve the current cooldown for.
     * @param tickDuration
     * 物品冷却的持续时间（以刻为单位）。
     *
     * Duration in ticks of the item cooldown.
     * Bounds: [0, 32767]
     * @throws This function can throw errors.
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /**
     * @beta
     * @remarks
     * 为此特定玩家停止所有音效播放。
     *
     * Stops all sounds from playing for this particular player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopAllSounds(): void;
    /**
     * @remarks
     * 为此特定玩家停止播放任何音乐曲目。
     *
     * Stops any music tracks from playing for this particular player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopMusic(): void;
    /**
     * @beta
     * @remarks
     * 为此特定玩家停止播放音效。
     *
     * Stops a sound from playing for this particular player.
     *
     * @worldMutation
     *
     * @param soundId
     * 音效的标识符。
     *
     * Identifier of the sound.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopSound(soundId: string): void;
}

/**
 * 用于玩家瞄准辅助相关 API 的容器。
 *
 * A container for APIs related to player aim-assist.
 */
export class PlayerAimAssist {
    private constructor();
    /**
     * 玩家当前激活的瞄准辅助设置，如果未激活则为 `undefined`。
     *
     * @remarks
     * The player's currently active aim-assist settings, or
     * undefined if not active.
     *
     */
    readonly settings?: PlayerAimAssistSettings;
    /**
     * 设置玩家的瞄准辅助设置。
     *
     * @remarks
     * Sets the player's aim-assist settings.
     *
     * @worldMutation
     *
     * @param settings
     * 要为玩家激活的瞄准辅助设置，如果为 `undefined`，则瞄准辅助将被禁用。
     * Aim-assist settings to activate for the player, if undefined
     * aim-assist will be disabled.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link NamespaceNameError}
     */
    set(settings?: PlayerAimAssistSettings): void;
}

/**
 * 包含玩家破坏方块后的事件相关信息。
 *
 * Contains information regarding an event after a player
 * breaks a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 返回该方块被破坏前的排列信息。
     *
     * @remarks
     * Returns permutation information about this block before it
     * was broken.
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * 用于破坏方块后手中的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that was used to break the block after the
     * block was broken, or undefined if empty hand.
     *
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * 用于破坏方块前手中的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that was used to break the block before the
     * block was broken, or undefined if empty hand.
     *
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * 破坏该方块的玩家。
     *
     * @remarks
     * Player that broke the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家破坏方块时相关的回调。
 *
 * Manages callbacks that are connected to when a player breaks
 * a block.
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个在方块被玩家破坏时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a block is broken
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * 移除在玩家破坏方块时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a player breaks a
     * block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}

/**
 * 包含玩家破坏方块前的事件相关信息。
 *
 * Contains information regarding an event before a player
 * breaks a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * 如果设置为 `true`，则取消方块破坏事件。
     *
     * @remarks
     * If set to true, cancels the block break event.
     *
     */
    cancel: boolean;
    /**
     * 用于破坏方块的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that is being used to break the block, or
     * undefined if empty hand.
     *
     */
    itemStack?: ItemStack;
    /**
     * 破坏此方块的玩家。
     *
     * @remarks
     * Player breaking the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家破坏方块前相关的回调。
 *
 * Manages callbacks that are connected to before a player
 * breaks a block.
 */
export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /**
     * 添加一个在方块被玩家破坏之前调用的回调。
     *
     * @remarks
     * Adds a callback that will be called before a block is broken
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockBeforeEvent) => void;
    /**
     * 移除在玩家破坏方块之前调用的回调。
     *
     * @remarks
     * Removes a callback from being called before a player breaks
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
}

/**
 * 玩家按下按钮时的事件数据。
 *
 * Event data for when a player presses a button.
 */
export class PlayerButtonInputAfterEvent {
    private constructor();
    /**
     * 此事件涉及的按钮。
     *
     * @remarks
     * The button this event is about.
     *
     */
    readonly button: InputButton;
    /**
     * 此按钮转移到的状态。
     *
     * @remarks
     * The state that this button transferred to.
     *
     */
    readonly newButtonState: ButtonState;
    /**
     * 执行输入事件的玩家。
     *
     * @remarks
     * The player that performed the input event.
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家输入相关的回调。
 *
 * Manages callbacks that are connected to player inputs.
 */
export class PlayerButtonInputAfterEventSignal {
    private constructor();
    /**
     * 添加一个在玩家执行输入后调用的回调。
     *
     * @remarks
     * Adds a callback that will be called after the player
     * performs an input.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg0: PlayerButtonInputAfterEvent) => void;
    /**
     * 移除在玩家执行输入后调用的回调。
     *
     * @remarks
     * Removes a callback from being called after the player
     * performs an input.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}

/**
 * @rc
 * 包含玩家取消破坏方块后的事件相关信息。
 *
 * Contains information regarding an event after a player
 * cancels breaking a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCancelBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 玩家取消破坏的方块的排列。
     *
     * @remarks
     * The permutation of the block that the player cancelled
     * breaking.
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * 玩家取消时破坏方块的进度，范围为 (0, 1)。
     *
     * @remarks
     * The progress of breaking the block when the player cancelled
     * in the exclusive range (0, 1).
     *
     */
    readonly breakProgress: number;
    /**
     * 正在被破坏的方块的面。
     *
     * @remarks
     * The face of the block that was being broken.
     *
     */
    readonly face: Direction;
    /**
     * 玩家用于破坏方块的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that the player was using to break the block,
     * or undefined if empty hand.
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * 取消破坏此方块的玩家。
     *
     * @remarks
     * Player that cancelled breaking the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * @rc
 * 管理与玩家取消破坏方块时相关的回调。
 *
 * Manages callbacks that are connected to when a player
 * cancels breaking a block.
 */
export class PlayerCancelBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个在玩家取消破坏方块时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a player cancels
     * breaking a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerCancelBreakingBlockAfterEvent) => void;
    /**
     * 移除在玩家取消破坏方块时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a player cancels
     * breaking a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void): void;
}

/**
 * 表示玩家的光标背包。用于在背包 UI 中的容器之间移动物品。不适用于触屏控制。
 *
 * Represents the players cursor inventory. Used when moving
 * items between between containers in the inventory UI. Not
 * used with touch controls.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * 玩家光标背包中当前的物品堆。
     *
     * @remarks
     * The ItemStack currently in the players cursor inventory.
     *
     * @throws This property can throw when used.
     */
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    /**
     * 清空玩家的光标背包。
     *
     * @remarks
     * Clears the players cursor inventory.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    clear(): void;
}

/**
 * 包含玩家维度已更改的相关信息。
 *
 * Contains information related to changes to a player's
 * dimension having been changed.
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * 玩家正在切换的源维度。
     *
     * @remarks
     * The dimension the player is changing from.
     *
     */
    readonly fromDimension: Dimension;
    /**
     * 玩家在切换维度前的位置。
     *
     * @remarks
     * The location the player was at before changing dimensions.
     *
     */
    readonly fromLocation: Vector3;
    /**
     * 正在切换维度的玩家句柄。
     *
     * @remarks
     * Handle to the player that is changing dimensions.
     *
     */
    readonly player: Player;
    /**
     * 玩家正在切换到的目标维度。
     *
     * @remarks
     * The dimension that the player is changing to.
     *
     */
    readonly toDimension: Dimension;
    /**
     * 玩家切换维度后将生成的位置。
     *
     * @remarks
     * The location the player will spawn to after changing
     * dimensions.
     *
     */
    readonly toLocation: Vector3;
}

/**
 * 管理与玩家维度切换成功后的回调。
 *
 * Manages callbacks that are connected to successful player
 * dimension changes.
 */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * 为玩家维度切换后事件订阅指定的回调。
     *
     * @remarks
     * Subscribes the specified callback to a player dimension
     * change after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerDimensionChangeAfterEvent) => void,
    ): (arg0: PlayerDimensionChangeAfterEvent) => void;
    /**
     * 从玩家维度切换后事件中移除指定的回调。
     *
     * @remarks
     * Removes the specified callback from a player dimension
     * change after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}

export class PlayerEmoteAfterEvent {
    private constructor();
    readonly personaPieceId: string;
    readonly player: Player;
}

/**
 * 管理连接到玩家表情事件后的回调。
 *
 * Manages callbacks that are connected to after a player emote event.
 */
export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}

/**
 * 包含玩家游戏模式更改后的事件相关信息。
 *
 * Contains information regarding an event after a players game
 * mode is changed.
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * 更改前的游戏模式。
     *
     * @remarks
     * The previous game mode before the change.
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 更改后的当前游戏模式。
     *
     * @remarks
     * The current game mode after the change.
     *
     */
    readonly toGameMode: GameMode;
}

/**
 * 管理与玩家游戏模式更改后相关的回调。
 *
 * Manages callbacks that are connected to after a players game
 * mode is changed.
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * 添加一个在玩家游戏模式更改后调用的回调。
     *
     * @remarks
     * Adds a callback that will be called after a players game
     * mode is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    /**
     * 移除在玩家游戏模式更改后调用的回调。
     *
     * @remarks
     * Removes a callback from being called after a players game
     * mode is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}

/**
 * 包含玩家与实体交互前的事件相关信息。
 *
 * Contains information regarding an event before a player
 * interacts with an entity.
 */
export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    /**
     * 如果设置为 `true`，游戏模式更改将被取消。
     *
     * @remarks
     * If set to true the game mode change will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * 当前的游戏模式。
     *
     * @remarks
     * The current game mode.
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 要更改到的游戏模式。
     *
     * @remarks
     * The game mode being changed to.
     *
     */
    toGameMode: GameMode;
}

/**
 * 管理与玩家游戏模式更改前相关的回调。
 *
 * Manages callbacks that are connected to before a players
 * game mode is changed.
 */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * 添加一个在玩家游戏模式更改前调用的回调。
     *
     * @remarks
     * Adds a callback that will be called before a players game
     * mode is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerGameModeChangeBeforeEvent) => void,
    ): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * 移除在玩家游戏模式更改前调用的回调。
     *
     * @remarks
     * Removes a callback from being called before a players game
     * mode is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}

/**
 * 包含玩家切换选择的快捷栏槽位后的事件相关信息。
 *
 * Contains information regarding an event after changing the
 * selected hotbar slot for a player.
 */
export class PlayerHotbarSelectedSlotChangeAfterEvent {
    private constructor();
    /**
     * 所选新槽位的物品堆。
     *
     * @remarks
     * The item stack of the new slot selected.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * 所选的新快捷栏槽位索引。
     *
     * @remarks
     * The new hotbar slot index selected.
     *
     */
    readonly newSlotSelected: number;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 先前选择的快捷栏槽位索引。
     *
     * @remarks
     * The previous hotbar slot index selected.
     *
     */
    readonly previousSlotSelected: number;
}

/**
 * 管理与玩家选择的快捷栏槽位更改后相关的回调。
 *
 * Manages callbacks that are connected after a player selected
 * hotbar slot is changed.
 */
export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * 添加一个在玩家选择的快捷栏槽位更改后调用的回调。
     *
     * @remarks
     * Adds a callback that will be called after a player selected
     * hotbar slot is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此事件触发时调用的函数回调。
     * Function callback that is called when this event fires.
     * @param options
     * 事件订阅的附加过滤选项。
     * Additional filtering options for the event subscription.
     */
    subscribe(
        callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void,
        options?: HotbarEventOptions,
    ): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * 移除在玩家选择的快捷栏槽位更改后调用的回调。
     *
     * @remarks
     * Removes a callback from being called after a player selected
     * hotbar slot is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void;
}

/**
 * 玩家输入模式更改时的事件数据。
 *
 * Event data for when a player input mode changes.
 */
export class PlayerInputModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家使用的新输入模式。
     *
     * The new input mode used by the player.
     *
     */
    readonly newInputModeUsed: InputMode;
    /**
     * @remarks
     * 输入模式发生更改的玩家。
     *
     * The player that had an input mode change.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家之前使用的输入模式。
     *
     * The previous input mode used by the player.
     *
     */
    readonly previousInputModeUsed: InputMode;
}

/**
 * 管理连接到玩家输入模式更改的回调。
 *
 * Manages callbacks that are connected to player input mode.
 */
export class PlayerInputModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家输入模式更改后调用的回调。
     *
     * Adds a callback that will be called after the player input mode changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerInputModeChangeAfterEvent) => void,
    ): (arg0: PlayerInputModeChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家输入模式更改后调用的回调。
     *
     * Removes a callback from being called after the player input mode changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}

/**
 * 包含关于玩家输入权限更改后事件的信息。
 *
 * Contains information regarding an event after a players input permissions change.
 */
export class PlayerInputPermissionCategoryChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已更改的输入权限类别。
     *
     * The category of input permissions that have changed.
     *
     */
    readonly category: InputPermissionCategory;
    /**
     * @remarks
     * 玩家输入权限的启用/禁用状态。
     *
     * The enabled/disabled state of the players input permissions.
     *
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * 输入权限已被更改的玩家。
     *
     * The player that has had their input permissions changed.
     *
     */
    readonly player: Player;
}

/**
 * 管理连接到玩家输入权限更改后事件的回调。
 *
 * Manages callbacks that are connected to after a players input permissions change.
 */
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家输入权限更改后调用的回调。
     *
     * Adds a callback that will be called after a players input permissions change.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void,
    ): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家输入权限更改后调用的回调。
     *
     * Removes a callback from being called after a players input permissions change.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}

/**
 * 包含启用/禁用玩家输入权限的 API。
 *
 * Contains APIs to enable/disable player input permissions.
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks
     * 返回输入权限是否已启用。
     *
     * Returns true if an input permission is enabled.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @remarks
     * 启用或禁用某项输入权限。启用时输入将正常工作，禁用时则不工作。
     *
     * Enable or disable an input permission. When enabled the input will work, when disabled will not work.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}

/**
 * 包含关于玩家成功与方块交互后事件的信息。
 *
 * Contains information regarding an event after a player successfully interacts with a block.
 */
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 交互成功前的物品堆，如果为空手则为 `undefined`。
     *
     * The ItemStack before the interaction succeeded, or undefined if hand is empty.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 将要被交互的方块。
     *
     * The block that will be interacted with.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在被交互的方块面。
     *
     * The face of the block that is being interacted with.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的位置，物品将放置在此处。
     *
     * Location relative to the bottom north-west corner of the block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件是在玩家首次按下交互按钮时触发的，此值为 `true`；如果是按住交互按钮时触发的事件，则为 `false`。
     *
     * This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button.
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 交互成功后的物品堆，如果为空手则为 `undefined`。
     *
     * The ItemStack after the interaction succeeded, or undefined if hand is empty.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     * Source Player for this event.
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家与方块交互后相关的回调。
 *
 * Manages callbacks that are connected to after a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家与方块交互后调用的回调。
     *
     * @remarks
     * Adds a callback that will be called after a player interacts
     * with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockAfterEvent) => void,
    ): (arg0: PlayerInteractWithBlockAfterEvent) => void;
    /**
     * 移除一个在玩家与方块交互后调用的回调。
     *
     * @remarks
     * Removes a callback from being called after a player
     * interacts with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): void;
}

/**
 * 包含有关玩家与方块交互之前的事件信息。
 *
 * Contains information regarding an event before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    /**
     * 将被交互的方块。
     *
     * @remarks
     * The block that will be interacted with.
     *
     */
    readonly block: Block;
    /**
     * 正在被交互的方块面。
     *
     * @remarks
     * The face of the block that is being interacted with.
     *
     */
    readonly blockFace: Direction;
    /**
     * 如果设置为 `true`，交互将被取消。
     *
     * @remarks
     * If set to true the interaction will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * 相对于方块底部西北角的物品放置位置。
     *
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * 如果事件是在玩家初始交互按钮按下时触发的，则为 `true`；如果在按住交互按钮时触发的事件，则为 `false`。
     *
     * @remarks
     * This value will be true if the event was triggered on
     * players initial interaction button press and false on events
     * triggered from holding the interaction button.
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * 交互中正在使用的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
}

/**
 * 管理在玩家与方块交互之前相关的回调。
 *
 * Manages callbacks that are connected to before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家与方块交互之前调用的回调。
     *
     * @remarks
     * Adds a callback that will be called before a player
     * interacts with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包将以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg0: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * 移除一个在玩家与方块交互之前调用的回调。
     *
     * @remarks
     * Removes a callback from being called before a player
     * interacts with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包将以受限执行权限调用。
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}

/**
 * 包含有关玩家成功与实体交互之后的事件信息。
 *
 * Contains information regarding an event after a player
 * successfully interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * 交互成功前的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The ItemStack before the interaction succeeded, or undefined
     * if hand is empty.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * 交互成功后的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The ItemStack after the interaction succeeded, or undefined
     * if hand is empty.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 将被交互的实体。
     *
     * @remarks
     * The entity that will be interacted with.
     *
     */
    readonly target: Entity;
}

/**
 * 管理连接到玩家与实体交互后事件的回调。
 *
 * Manages callbacks that are connected to after a player interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家与实体交互后调用的回调。
     *
     * Adds a callback that will be called after a player interacts with an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg0: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家与实体交互后调用的回调。
     *
     * Removes a callback from being called after a player interacts with an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}

/**
 * 包含关于玩家与实体交互前事件的信息。
 *
 * Contains information regarding an event before a player interacts with an entity.
 */
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 `true`，交互将被取消。
     *
     * If set to true the interaction will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 交互中正在使用的物品堆，如果为空手则为 `undefined`。
     *
     * The item stack that is being used in the interaction, or undefined if empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 将要被交互的实体。
     *
     * The entity that will be interacted with.
     *
     */
    readonly target: Entity;
}

/**
 * 管理连接到玩家与实体交互前事件的回调。
 *
 * Manages callbacks that are connected to before a player interacts with an entity.
 */
export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家与实体交互前调用的回调。
     *
     * Adds a callback that will be called before a player interacts with an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包将以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void,
    ): (arg0: PlayerInteractWithEntityBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家与实体交互前调用的回调。
     *
     * Removes a callback from being called before a player interacts with an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): void;
}

/**
 * 包含有关玩家库存物品更改之后的事件信息。
 *
 * Contains information regarding an event after a player's
 * inventory item changes.
 */
export class PlayerInventoryItemChangeAfterEvent {
    private constructor();
    /**
     * 之前的物品堆。
     *
     * @remarks
     * The previous item stack.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * 库存类型。
     *
     * @remarks
     * Inventory type.
     *
     */
    readonly inventoryType: PlayerInventoryType;
    /**
     * 新的物品堆。
     *
     * @remarks
     * The new item stack.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 发生更改的槽位索引。
     *
     * @remarks
     * The slot index with the change.
     *
     */
    readonly slot: number;
}

/**
 * 管理玩家库存物品更改后相关的回调。
 *
 * Manages callbacks that are connected after a player's
 * inventory item is changed.
 */
export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家库存物品更改后调用的回调。
     *
     * @remarks
     * Adds a callback that will be called after a player's
     * inventory item is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此事件触发时调用的函数回调。
     * Function callback that is called when this event fires.
     * @param options
     * 事件订阅的其他过滤选项。
     * Additional filtering options for the event subscription.
     */
    subscribe(
        callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void,
        options?: InventoryItemEventOptions,
    ): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    /**
     * 移除一个在玩家库存物品更改后调用的回调。
     *
     * @remarks
     * Removes a callback from being called after a player's
     * inventory item is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}

/**
 * 包含有关已加入的玩家信息。有关玩家首次在游戏中生成后可能返回的更详细信息，请参见 playerSpawn 事件。
 *
 * Contains information regarding a player that has joined.
 * See the playerSpawn event for more detailed information that
 * could be returned after the first time a player has spawned
 * within the game.
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * 加入游戏的不透明字符串标识符。
     *
     * @remarks
     * Opaque string identifier of the player that joined the game.
     *
     */
    readonly playerId: string;
    /**
     * 已加入的玩家名称。
     *
     * @remarks
     * Name of the player that has joined.
     *
     */
    readonly playerName: string;
}

/**
 * 管理与玩家加入世界相关的回调。
 *
 * Manages callbacks that are connected to a player joining the
 * world.
 */
export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家加入世界时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a player joins the
     * world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * 移除一个在玩家加入世界时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a player joins the
     * world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}

/**
 * 包含关于已离开世界玩家的信息。
 *
 * Contains information regarding a player that has left the world.
 */
export class PlayerLeaveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已离开世界玩家的不透明字符串标识符。
     *
     * Opaque string identifier of the player that has left the event.
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * 已离开世界玩家的名称。
     *
     * Player that has left the world.
     *
     */
    readonly playerName: string;
}

/**
 * 管理连接到玩家离开世界事件的回调。
 *
 * Manages callbacks that are connected to a player leaving the world.
 */
export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家离开世界时调用的回调。
     *
     * Adds a callback that will be called when a player leaves the world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家离开世界时调用的回调。
     *
     * Removes a callback from being called when a player leaves the world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}

/**
 * 包含关于正在离开世界玩家的信息。
 *
 * Contains information regarding a player that is leaving the world.
 */
export class PlayerLeaveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 正在离开的玩家。
     *
     * The leaving player.
     *
     */
    readonly player: Player;
}

/**
 * 管理连接到玩家离开世界事件的回调。
 *
 * Manages callbacks that are connected to a player leaving the world.
 */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家离开世界时调用的回调。
     *
     * Adds a callback that will be called when a player leaves the world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包将以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在玩家离开世界时调用的回调。
     *
     * Removes a callback that will be called when a player leaves the world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}

/**
 * 包含有关玩家放置方块的事件信息。
 *
 * Contains information regarding an event where a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 放置此事件方块的玩家。
     *
     * @remarks
     * Player that placed the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家放置方块时相关的回调。
 *
 * Manages callbacks that are connected to when a block is
 * placed by a player.
 */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家放置方块时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a block is placed
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    /**
     * 移除一个在玩家放置方块时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when an block is placed
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}

/**
 * @beta
 * 包含有关玩家放置方块之前的事件信息。
 *
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * 如果设置为 `true`，则取消方块放置事件。
     *
     * @remarks
     * If set to true, cancels the block place event.
     *
     */
    cancel: boolean;
    /**
     * 新方块所放置的方块面。
     *
     * @remarks
     * The face of the block that the new block is being placed on.
     *
     */
    readonly face: Direction;
    /**
     * 相对于方块底部西北角的新方块放置位置。
     *
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the new block is being placed onto.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * 如果事件未被取消，将放置的方块排列。
     *
     * @remarks
     * The block permutation that will be placed if the event is
     * not cancelled.
     *
     */
    readonly permutationToPlace: BlockPermutation;
    /**
     * 放置此事件方块的玩家。
     *
     * @remarks
     * Player that is placing the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * @beta
 * 管理连接到玩家放置方块前事件的回调。
 *
 * Manages callbacks that are connected to before a block is placed by a player.
 */
export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家放置方块前调用的回调。
     *
     * Adds a callback that will be called before a block is placed by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包将以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家放置方块前调用的回调。
     *
     * Removes a callback from being called before an block is placed by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void): void;
}

/**
 * 包含关于玩家生成的更多信息的事件。
 *
 * An event that contains more information about a player
 * spawning.
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * 如果为 `true`，这是玩家加入游戏后的首次生成。
     *
     * @remarks
     * If true, this is the initial spawn of a player after joining
     * the game.
     *
     * @worldMutation
     *
     */
    initialSpawn: boolean;
    /**
     * 表示加入游戏的玩家对象。
     *
     * @remarks
     * Object that represents the player that joined the game.
     *
     * @worldMutation
     *
     */
    player: Player;
}

/**
 * 注册一个在玩家在世界中生成（或重生后）并完全准备好时触发的事件。
 *
 * Registers an event when a player is spawned (or re-spawned after death) and fully ready within the world.
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 为此特定事件类型注册一个新的事件接收器。
     *
     * Registers a new event receiver for this particular type of event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * 取消注册一个玩家生成事件的事件接收器。
     *
     * De-registers an event receiver for the player spawn event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}

/**
 * @rc
 * 包含有关玩家开始破坏方块之后的事件信息。
 *
 * Contains information regarding an event after a player
 * starts breaking a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerStartBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 玩家开始破坏的方块的排列。
     *
     * @remarks
     * The permutation of the block that the player is starting to
     * break.
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * 被破坏的方块面。
     *
     * @remarks
     * The face of the block being broken.
     *
     */
    readonly face: Direction;
    /**
     * 玩家用来破坏方块的物品堆，如果为空手则为 `undefined`。
     *
     * @remarks
     * The item stack that the player is using to break the block,
     * or undefined if empty hand.
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * 开始破坏此事件方块的玩家。
     *
     * @remarks
     * Player that started breaking the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * @rc
 * 管理与玩家开始破坏方块时相关的回调。
 *
 * Manages callbacks that are connected to when a player starts
 * breaking a block.
 */
export class PlayerStartBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家开始破坏方块时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a player starts
     * breaking a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerStartBreakingBlockAfterEvent) => void;
    /**
     * 移除一个在玩家开始破坏方块时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a player starts
     * breaking a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void): void;
}

/**
 * 包含有关玩家开始挥动手臂的信息。
 *
 * Contains information regarding a player starting to swing
 * their arm.
 */
export class PlayerSwingStartAfterEvent {
    private constructor();
    /**
     * 玩家在挥动开始时持有的物品堆。
     *
     * @remarks
     * The item stack being held by the player at the start of
     * their swing.
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * 此事件的源玩家。
     *
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * 玩家挥动的来源，参见 {@link EntitySwingSource}。
     *
     * @remarks
     * The source of the Player swing, see {@link
     * EntitySwingSource}.
     *
     */
    readonly swingSource: EntitySwingSource;
}

/**
 * 管理与玩家开始挥动手臂（例如攻击、使用物品、交互）时相关的回调。
 *
 * Manages callbacks that are connected to when a player starts
 * to swing their arm (e.g. attacking, using an item,
 * interacting).
 */
export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在玩家开始挥动手臂（例如攻击、使用物品、交互）时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a player starts to
     * swing their arm (e.g. attacking, using an item,
     * interacting).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * 移除一个在玩家开始挥动手臂（例如攻击、使用物品、交互）时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a player starts to
     * swing their arm (e.g. attacking, using an item,
     * interacting).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}

/**
 * @beta
 * 包含有关玩家成功使用有命名的命名标签物品命名实体的相关信息。
 *
 * Contains information related to when a player successfully
 * names an Entity with a named Name Tag item.
 */
export class PlayerUseNameTagAfterEvent {
    private constructor();
    /**
     * 被玩家命名的实体。
     *
     * @remarks
     * The entity that was named by the player.
     *
     * @worldMutation
     *
     */
    entityNamed: Entity;
    /**
     * 玩家给实体的新名称。
     *
     * @remarks
     * The new name that the player has given to the entity.
     *
     * @worldMutation
     *
     */
    newName: string;
    /**
     * 使用命名标签的玩家的句柄。
     *
     * @remarks
     * Handle to the player that used the name tag.
     *
     * @worldMutation
     *
     */
    player: Player;
    /**
     * 玩家使用命名标签之前实体的先前名称。如果实体之前未命名，则为 `undefined`。
     *
     * @remarks
     * The previous name of the entity before the player used the
     * name tag. This will be undefined if the entity was not
     * previously named.
     *
     * @worldMutation
     *
     */
    previousName?: string;
}

/**
 * @beta
 * 管理连接到玩家使用命名过的命名牌物品成功命名实体事件的回调。
 *
 * Manages callbacks that are connected to when a player successfully names an Entity with a named Name Tag item.
 */
export class PlayerUseNameTagAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 将指定回调订阅到玩家使用命名牌后事件。
     *
     * Subscribes the specified callback to a player use name tag after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): (arg0: PlayerUseNameTagAfterEvent) => void;
    /**
     * @remarks
     * 从玩家使用命名牌后事件中移除指定回调。
     *
     * Removes the specified callback from a player use name tag after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): void;
}

/**
 * 跟踪玩家位置的导航点。扩展 {@link EntityWaypoint}，增加了特定于玩家的可见性规则，如隐藏状态和旁观者模式。
 *
 * Waypoint that tracks a player's position. Extends {@link EntityWaypoint} with additional player-specific visibility rules such as hidden state and spectator mode.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerWaypoint extends EntityWaypoint {
    /**
     * @remarks
     * 控制导航点何时基于玩家状态显示的 {@link PlayerVisibilityRules}（例如隐藏、旁观者模式、旁观者查看其他旁观者）。
     *
     * The {@link PlayerVisibilityRules} that control when the waypoint is shown based on the player's state (e.g., hidden, spectator mode, spectator viewing another spectator).
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly playerRules: PlayerVisibilityRules;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(
        player: Player,
        textureSelector: WaypointTextureSelector,
        playerRules: PlayerVisibilityRules,
        color?: RGB,
    );
}

/**
 * Represents how the potion effect is delivered.
 */
export class PotionDeliveryType {
    private constructor();
    readonly id: string;
}

/**
 * 表示一种药水效果类型，例如治疗或跳跃提升。
 *
 * Represents a type of potion effect - like healing or leaping.
 */
export class PotionEffectType {
    private constructor();
    /**
     * @remarks
     * 效果应用于实体时的持续时间（以刻为单位）。`undefined` 表示效果不会过期。
     *
     * Duration of the effect when applied to an entity in ticks. Undefined means the effect does not expire.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     */
    readonly durationTicks?: number;
    readonly id: string;
}

/**
 * 用于访问所有药水效果类型、传递类型以及创建药水。
 *
 * Used for accessing all potion effect types, delivery types, and creating potions.
 */
export class Potions {
    private constructor();
    /**
     * @remarks
     * 获取所有已注册的药水传递类型的句柄。
     *
     * Retrieves handles for all registered potion delivery types.
     *
     * @returns
     * 所有已注册传递类型句柄的数组。
     *
     * Array of all registered delivery type handles.
     */
    static getAllDeliveryTypes(): PotionDeliveryType[];
    /**
     * @remarks
     * 获取所有已注册的药水效果的类型句柄。
     *
     * Retrieves all type handle for all registered potion effects.
     *
     * @returns
     * 所有已注册效果类型句柄的数组。
     *
     * Array of all registered effect type handles.
     */
    static getAllEffectTypes(): PotionEffectType[];
    /**
     * @remarks
     * 获取指定药水传递 ID 的类型句柄。
     *
     * Retrieves a type handle for a specified potion delivery id.
     *
     * @returns
     * 包装有效传递 ID 的类型句柄，如果传递 ID 无效则返回 `undefined`。
     *
     * A type handle wrapping the valid delivery id, or undefined for an invalid delivery id.
     */
    static getDeliveryType(potionDeliveryId: string): PotionDeliveryType | undefined;
    /**
     * @remarks
     * 获取指定药水效果 ID 的类型句柄。
     *
     * Retrieves a type handle for a specified potion effect id.
     *
     * @param potionEffectId
     * 有效的药水效果 ID。请参见 @minecraft/vanilla-data.MinecraftPotionEffectTypes。
     *
     * A valid potion effect id. See @minecraft/vanilla-data.MinecraftPotionEffectTypes
     * @returns
     * 包装有效效果 ID 的类型句柄，如果效果 ID 无效则返回 `undefined`。
     *
     * A type handle wrapping the valid effect id, or undefined for an invalid effect id.
     */
    static getEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * 根据效果和传递类型创建药水。
     *
     * Creates a potion given an effect and delivery type.
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidPotionDeliveryTypeError}
     *
     * {@link InvalidPotionEffectTypeError}
     */
    static resolve<
        T extends string = MinecraftPotionEffectTypes,
        U extends string = MinecraftPotionDeliveryTypes,
    >(potionEffectType: PotionEffectType | T, potionDeliveryType: PotionDeliveryType | U): ItemStack;
}

/**
 * 包含与压力板弹起变化相关的信息。
 *
 * Contains information related to changes to a pressure plate
 * pop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 压力板弹起之前的红石能量。
     *
     * @remarks
     * The redstone power of the pressure plate before it was
     * popped.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * 弹起时压力板的红石能量。
     *
     * @remarks
     * The redstone power of the pressure plate at the time of the
     * pop.
     *
     */
    readonly redstonePower: number;
}

/**
 * 管理与压力板弹起时相关的回调。
 *
 * Manages callbacks that are connected to when a pressure
 * plate is popped.
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在压力板弹起时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * popped.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * 移除一个在压力板弹起时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is popped.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}

/**
 * 包含与压力板按下变化相关的信息。
 *
 * Contains information related to changes to a pressure plate push.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 压力板按下前的红石能量。
     *
     * The redstone power of the pressure plate before it was pushed.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 按下时压力板的红石能量。
     *
     * The redstone power of the pressure plate at the time of the push.
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 触发压力板按下的源实体。
     *
     * Source that triggered the pressure plate push.
     *
     */
    readonly source: Entity;
}

/**
 * 管理连接到压力板按下事件的回调。
 *
 * Manages callbacks that are connected to when a pressure plate is pushed.
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在压力板按下时调用的回调。
     *
     * Adds a callback that will be called when a pressure plate is pushed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在压力板按下时调用的回调。
     *
     * Removes a callback from being called when a pressure plate is pushed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}

/**
 * 文本图元的基础类。表示世界中的一个对象及其基本属性。
 *
 * The base class for a text primitive. Represents an object in the world and its base properties.
 */
export class PrimitiveShape {
    private constructor();
    /**
     * @remarks
     * 此形状所依附的实体。设置时，此形状将复制所依附实体的根位置，并且形状的位置将用作偏移量。
     *
     * The entity this shape is attached to. When set, this shape will copy the root location of the attached entity and the shape's position will be used as an offset.
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * 形状的颜色。
     *
     * The color of the shape.
     *
     */
    color: RGBA;
    /**
     * @remarks
     * 形状可见的维度。如果维度为 `undefined`，则将在所有维度中显示。
     *
     * The dimension the shape is visible within. If the dimension is undefined, it will display in all dimensions.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 返回形状是否具有有限的自动移除时间。
     *
     * Returns true if the shape has a limited time span before being removed.
     *
     */
    readonly hasDuration: boolean;
    /**
     * @remarks
     * 形状的位置。
     *
     * The location of the shape.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 如果已定义，此距离将用于确定为每个客户端渲染此图元的远近。默认情况下，距离将匹配客户端的渲染距离设置。
     *
     * If defined, this distance will be used to determine how far away this primitive will be rendered for each client. By default the distance will match the client's render distance setting.
     *
     * Minimum Value: 0
     */
    maximumRenderDistance?: number;
    /**
     * @remarks
     * 形状的旋转角度（欧拉角 —— [Pitch, Yaw, Roll]）。
     *
     * The rotation of the shape (Euler angles - [Pitch, Yaw, Roll]).
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 形状的缩放比例。
     *
     * The scale of the shape.
     *
     * Bounds: [-1000, 1000]
     */
    scale: number;
    /**
     * @remarks
     * 距离此形状自动移除的剩余时间（以秒为单位）。如果形状没有有限的生存期，则返回 `undefined`。
     *
     * The time left (in seconds) until this shape is automatically removed. Returns undefined if the shape does not have a limited life-span.
     *
     */
    timeLeft?: number;
    /**
     * @remarks
     * 距离此形状自动移除的总初始时间（以秒为单位）。如果形状没有有限的生存期，则返回 `undefined`。
     *
     * The total initial time-span (in seconds) until this shape is automatically removed. Returns undefined if the shape does not have a limited life-span.
     *
     */
    readonly totalTimeLeft?: number;
    /**
     * @remarks
     * 此形状对其可见的玩家列表。如果留空，形状将对所有玩家可见。
     *
     * The list of players that this shape will be visible to. If left empty, the shape will be visible to all players.
     *
     */
    visibleTo: Player[];
    /**
     * @remarks
     * 从世界中移除此形状。可以通过 PrimitiveShapesManager 的 addText 方法重新添加该形状。
     *
     * Removes this shape from the world. The shape can be re-added via the PrimitiveShapesManager's addText method.
     *
     */
    remove(): void;
    /**
     * @remarks
     * 设置形状的位置和维度。如果维度为 `undefined`，则将在所有维度中显示。
     *
     * Set the location and dimension of the shape. If the dimension is undefined, it will display in all dimensions.
     *
     */
    setLocation(location: DimensionLocation | Vector3): void;
}

/**
 * 用于允许向世界添加和移除文本图元的 Primitive Shapes 类。
 *
 * Primitive Shapes class used to allow adding and removing text primitives to the world.
 */
export class PrimitiveShapesManager {
    private constructor();
    /**
     * @remarks
     * 这是允许的最大图元形状数量。
     *
     * This is the maximum number of allowed primitive shapes.
     *
     */
    readonly maxShapes: number;
    /**
     * @remarks
     * 向世界添加一个新的文本图元。
     *
     * Adds a new text primitive to the world.
     *
     * @param text
     * 要添加的文本图元。
     *
     * The text primitive to be added.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link PrimitiveShapeError}
     */
    addText(text: TextPrimitive, dimension?: Dimension): void;
    /**
     * @remarks
     * 从世界中移除所有文本图元。
     *
     * Removes all text primitives from the world.
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * 从世界中移除一个文本图元实例。这等同于在文本本身调用 remove。
     *
     * Removes an instance of a text primitive from the world. This is equivalent to calling remove on the text itself.
     *
     */
    removeText(text: TextPrimitive): void;
}

/**
 * 包含与抛射物击中方块相关的信息。
 *
 * Contains information related to a projectile hitting a block.
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此抛射物撞击发生的维度。
     *
     * Dimension where this projectile hit took place.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 抛射物击中方块时的方向向量。
     *
     * Direction vector of the projectile as it hit a block.
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 抛射物撞击发生的位置。
     *
     * Location where the projectile hit occurred.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 击中方块的抛射物实体。
     *
     * Entity for the projectile that hit a block.
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 发射抛射物的可选源实体。
     *
     * Optional source entity that fired the projectile.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 包含关于抛射物击中的方块的附加信息。
     *
     * Contains additional information about the block that was hit by the projectile.
     *
     * @worldMutation
     *
     */
    getBlockHit(): BlockHitInformation;
}

/**
 * 管理与弹射物击中方块时相关的回调。
 *
 * Manages callbacks that are connected to when a projectile
 * hits a block.
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在弹射物击中方块时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a projectile hits a
     * block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * 移除一个在弹射物击中方块时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a projectile hits
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}

/**
 * 包含与弹射物击中实体相关的信息。
 *
 * Contains information related to a projectile hitting an
 * entity.
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * 弹射物击中发生的维度。
     *
     * @remarks
     * Dimension where this projectile hit took place.
     *
     */
    readonly dimension: Dimension;
    /**
     * 弹射物击中实体时的方向向量。
     *
     * @remarks
     * Direction vector of the projectile as it hit an entity.
     *
     */
    readonly hitVector: Vector3;
    /**
     * 弹射物击中的位置。
     *
     * @remarks
     * Location where the projectile hit occurred.
     *
     */
    readonly location: Vector3;
    /**
     * 击中实体的弹射物实体。
     *
     * @remarks
     * Entity for the projectile that hit an entity.
     *
     */
    readonly projectile: Entity;
    /**
     * 发射弹射物的可选源实体。
     *
     * @remarks
     * Optional source entity that fired the projectile.
     *
     */
    readonly source?: Entity;
    /**
     * 包含有关被击中的实体的附加信息。
     *
     * @remarks
     * Contains additional information about an entity that was
     * hit.
     *
     * @worldMutation
     *
     */
    getEntityHit(): EntityHitInformation;
}

/**
 * 管理与弹射物击中实体时相关的回调。
 *
 * Manages callbacks that are connected to when a projectile
 * hits an entity.
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * 添加一个将在弹射物击中实体时调用的回调。
     *
     * @remarks
     * Adds a callback that will be called when a projectile hits
     * an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    /**
     * 移除一个在弹射物击中实体时调用的回调。
     *
     * @remarks
     * Removes a callback from being called when a projectile hits
     * an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}

/**
 * 随机修改掉落物品数据值的战利品物品函数。
 *
 * Loot item function that randomly modifies the data value of
 * the item dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomAuxValueFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择数据值的范围，包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * data value to assign. Contains minimum and maximum values.
     *
     */
    readonly values: NumberRange;
}

/**
 * 随机修改掉落物品方块状态的战利品物品函数。
 *
 * Loot item function that randomly modifies the block state of
 * the item dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomBlockStateFunction extends LootItemFunction {
    private constructor();
    readonly blockState: string;
    /**
     * @remarks
     * 函数随机选择给定方块状态值的范围，包含最小值和最大值。
     *
     * The range from which the function randomly chooses the value
     * to assign to the given block state. Contains minimum and
     * maximum values.
     *
     */
    readonly values: NumberRange;
}

/**
 * 将给定值应用于战利品掉落几率的战利品物品条件。
 *
 * Loot item condition that applies a given value to the
 * chances that loot will drop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的几率，范围为 0.0-1.0。
     *
     * The chance, from 0.0-1.0, that loot will drop.
     *
     */
    readonly chance: number;
}

/**
 * 将给定值应用于战利品掉落几率（受所用工具的抢夺附魔等级影响）的战利品物品条件。
 *
 * Loot item condition that applies a given value to the
 * chances that loot will drop, modified by the level of
 * looting enchantment on the tool used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceWithLootingCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的基础几率，范围为 0.0-1.0，将受 "lootingMultiplier" 值的修正。
     *
     * The base chance, from 0.0-1.0, that loot will drop. Will be
     * modified by the 'lootingMultiplier' value.
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 每级抢夺附魔增加的掉落几率。
     *
     * The increase in drop chance per looting enchant level.
     *
     */
    readonly lootingMultiplier: number;
}

/**
 * 根据当前难度等级将给定值应用于战利品掉落几率的战利品物品条件。
 *
 * Loot item condition that applies given values to the chances
 * that loot will drop based on the current difficulty level.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 一个四元素数组，包含每个难度等级的战利品掉落几率，依次为：和平、简单、普通、困难。
     *
     * A four-element array containing the chance of a loot drop
     * occurring for each difficulty level, in order: Peaceful,
     * Easy, Normal, Hard.
     *
     */
    readonly chances: number[];
}

/**
 * 对掉落物品应用随机染色的战利品物品函数。
 *
 * Loot item function that applies a randomly dye to the
 * dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomDyeFunction extends LootItemFunction {
    private constructor();
}

/**
 * 将给定值应用于战利品掉落几率（受掉落发生区域修正）的战利品物品条件。
 *
 * Loot item condition that applies a given value to the
 * chances that loot will drop, modified by the region the drop
 * is happening within.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的基础几率，范围为 0.0-1.0，将受当前区域倍率的修正。
     *
     * The base chance, from 0.0-1.0, that loot will drop. Will be
     * modified by the current region's multiplier.
     *
     */
    readonly maxChance: number;
}

/**
 * 表示记分板。其上包含了记分项和分数持有者。
 * 
 * Contains objectives and participants for the scoreboard.
 * @seeExample updateScoreboard.ts
 */
export class Scoreboard {
    private constructor();
    /**
     * @remarks
     * 在记分板上添加一个新的记分项。
     * 
     * Adds a new objective to the scoreboard.
     *
     * @worldMutation
     * @param objectiveId 记分项名称。
     * @param displayName 记分项的显示名称。
     * @returns 创建的记分项对象。
     * @throws
     * 若同名记分项已存在时，抛出 `"Failed to add objective 'objectiveId' as it is already being tracked"`。
     * @seeExample updateScoreboard.ts
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    /**
     * @remarks
     * 清除显示位置上正在显示的记分项。
     * 
     * Clears the objective that occupies a display slot.
     *
     * @worldMutation
     * @param displaySlotId 显示位置。
     * @returns 先前正显示的记分项，为空时返回 `null`。
     *
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 获取名称为 `objectiveId` 的记分项对象。
     * 
     * Returns a specific objective (by id).
     *
     * @param objectiveId
     * 记分项名称。
     * 
     * Identifier of the objective.
     * @returns 指定的记分项对象。不存在时返回 `null`。
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 获取位于指定显示位置上的记分项对象与显示配置。
     * 
     * Returns an objective that occupies the specified display
     * slot.
     * @param displaySlotId 显示位置。
     * @returns 位于指定显示位置的记分项显示配置。为空时返回 `null`。
     *
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * 获取记分板上的已定义的所有记分项。
     * 
     * Returns all defined objectives.
     * @returns 所有记分项对象组成的数组。
     *
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * 获取所有已经定义的分数持有者。
     * 
     * Returns all defined scoreboard identities.
     * @returns 所有分数持有者对象组成的数组。
     *
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 从记分板上移除指定的记分项。
     * 
     * Removes an objective from the scoreboard.
     *
     * @worldMutation
     * @param objectiveId 记分项对象或名称。
     * @returns 总是返回 `true`。
     * @throws
     * 若指定的记分项不存在时，抛出 `"Failed to find the objective specified"`。
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * 设置指定的显示位置显示的记分项与其他显示配置。
     * 
     * Sets an objective into a display slot with specified
     * additional display settings.
     *
     * @worldMutation
     * @param displaySlotId 显示位置。
     * @param objectiveDisplaySetting 记分项显示配置。
     * @returns
     * 显示位上先前显示的记分项对象。先前未显示记分项时，返回 `undefined`。
     * 
     * Returns the previous `ScoreboardObjective` set at the
     * display slot, if no objective was previously set it returns
     * `undefined`.
     * @throws
     * 若记分项无效，抛出 `"Failed to set invalid objective at DisplaySlot"`。
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}

/**
 * 表示记分板上的分数持有者。
 * 
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    private constructor();
    /**
     * @remarks
     * 此分数持有者在玩家视角显示的名称。
     * 
     * Returns the player-visible name of this identity.
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * 此分数持有者的 ID。
     * 
     * Identifier of the scoreboard identity.
     *
     */
    readonly id: number;
    /**
     * @remarks
     * Returns true if the ScoreboardIdentity reference is still
     * valid.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 此分数持有者的类型。
     * 
     * Type of the scoreboard identity.
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * 返回此分数持有者对应的实体对象（仅当此分数持有者是一个实体或者玩家时）。
     * 
     * If the scoreboard identity is an entity or player, returns
     * the entity that this scoreboard item corresponds to.
     * @returns 对应的实体对象。虚拟玩家类型的分数持有者会返回 `undefined`。
     * @throws
     * 若实体不存在时，抛出。
     */
    getEntity(): Entity | undefined;
}

/**
 * 表示记分板上的记分项。包含了分数持有者和各自的分数。
 * 
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * 此记分项的显示名称。
     * 
     * Returns the player-visible name of this scoreboard
     * objective.
     *
     * @throws
     * 若记分项无效，则抛出。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 此记分项的名称。
     * 
     * Identifier of the scoreboard objective.
     *
     * @throws
     * 若记分项无效，则抛出。
     */
    readonly id: string;
    /**
     * @remarks
     * Returns true if the ScoreboardObjective reference is still
     * valid.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * Adds a score to the given participant and objective.
     *
     * @worldMutation
     *
     * @param participant
     * Participant to apply the scoreboard value addition to.
     * @throws This function can throw errors.
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * 返回此记分项上已记录的分数持有者。
     * 
     * Returns all objective participant identities.
     * @returns 由分数持有者对象组成的数组。
     * @throws
     * 若记分项无效时，抛出。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 获取指定分数持有者的分数。
     * 
     * Returns a specific score for a participant.
     *
     * @param participant
     * 分数持有者。
     * 
     * Identifier of the participant to retrieve a score for.
     * @returns 指定分数持有者的分数。
     * @throws
     * 若此记分项上未记录分数持有者的分数，抛出 `"Failed to retrieve score for '<participant>'"`。
     * 若记分项无效时，抛出。
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * 获取记分项上记录的所有分数信息。
     * 
     * Returns specific scores for this objective for all
     * participants.
     * @returns 由分数信息对象组成的数组。
     * @throws
     * 若记分项无效时，抛出。
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * Returns if the specified identity is a participant of the
     * scoreboard objective.
     *
     * @throws This function can throw errors.
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * Removes a participant from this scoreboard objective.
     *
     * @worldMutation
     *
     * @param participant
     * Participant to remove from being tracked with this
     * objective.
     * @throws This function can throw errors.
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * Sets a score for a participant.
     *
     * @worldMutation
     *
     * @param participant
     * Identity of the participant.
     * @param score
     * New value of the score.
     * @throws This function can throw errors.
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

/**
 * 表示分数信息。包含了分数持有者以及它在记分板上的对应的分数。
 * 
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
    private constructor();
    /**
     * @remarks
     * 分数归属的分数持有者。
     * 
     * This scoreboard participant for this score.
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * 该记分项上分数持有者的分数。
     * 
     * Score value of the identity for this objective.
     *
     */
    readonly score: number;
}

/**
 * 包含关于显示在屏幕上的用户界面元素的信息。
 *
 * Contains information about user interface elements that are showing up on the screen.
 * @seeExample setTitle.ts
 * @seeExample setTitleAndSubtitle.ts
 * @seeExample countdown.ts
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @remarks
     * 返回当前对此屏幕显示管理器对象的引用是否有效且可用。
     *
     * Returns true if the current reference to this screen display manager object is valid and functional.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    resetHudElementsVisibility(): void;
    /**
     * @remarks
     * 设置操作栏文本 —— 一段显示在标题下方和快捷栏上方的文本。
     *
     * Set the action bar text - a piece of text that displays beneath the title and above the hot-bar.
     *
     * @worldMutation
     *
     * @param text
     * 操作栏文本的新值。
     *
     * New value for the action bar text.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 设置平视显示器（HUD）特定元素的可见性。
     *
     * Sets visibility of a particular element of the heads up display (HUD).
     *
     * @worldMutation
     *
     * @param visible
     * 是否将 HUD 元素设置为不可见，或恢复为默认状态。
     *
     * Whether to set the HUD element to invisible, or to reset it back to its default.
     * @param hudElements
     * 可选的 HUD 元素列表，用于配置可见性。
     *
     * Optional list of HUD elements to configure visibility for.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks
     * 使标题显示在玩家的屏幕显示上。如果设置为空字符串将清除标题。可以选择指定额外的副标题以及淡入、停留和淡出时间。
     *
     * Will cause a title to show up on the player's on screen display. Will clear the title if set to empty string. You can optionally specify an additional subtitle as well as fade in, stay and fade out times.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @seeExample setTitle.ts
     * @seeExample setTitleAndSubtitle.ts
     * @seeExample countdown.ts
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * 如果副标题先前已通过 setTitle 方法显示，则更新副标题。
     *
     * Updates the subtitle if the subtitle was previously displayed via the setTitle method.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @seeExample countdown.ts
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

/**
 * 返回关于 /scriptevent 命令调用的附加数据。
 *
 * Returns additional data about a /scriptevent command
 * invocation.
 */
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此 ScriptEvent 命令消息的标识符。
     *
     * Identifier of this ScriptEvent command message.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 如果此命令是通过 NPC 发起的，则返回发起 NPC 对话的实体。
     *
     * If this command was initiated via an NPC, returns the entity
     * that initiated the NPC dialogue.
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * 通过脚本事件命令传递的可选附加数据。
     *
     * Optional additional data passed in with the script event
     * command.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 如果此命令是通过方块（如命令方块）触发的，则为源方块。
     *
     * Source block if this command was triggered via a block
     * (e.g., a commandblock.)
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * 如果此命令是由实体（如 NPC）触发的，则为源实体。
     *
     * Source entity if this command was triggered by an entity
     * (e.g., a NPC).
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * 返回触发此命令的源类型。
     *
     * Returns the type of source that fired this command.
     *
     */
    readonly sourceType: ScriptEventSource;
}

/**
 * 允许注册一个响应入站 /scriptevent 命令的事件处理器。
 *
 * Allows for registering an event handler that responds to inbound /scriptevent commands.
 */
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册一个新的 ScriptEvent 处理器。
     *
     * Registers a new ScriptEvent handler.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg0: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks
     * 取消订阅 ScriptEvent 事件的特定处理器。
     *
     * Unsubscribes a particular handler for a ScriptEvent event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}

/**
 * 描述此可骑乘实体上的特定座位位置。
 *
 * Describes a particular seating position on this rideable
 * entity.
 */
export class Seat {
    private constructor();
    /**
     * @remarks
     * 骑乘者在骑乘此实体时允许旋转的角度（以度为单位）。
     *
     * Angle in degrees that a rider is allowed to rotate while
     * riding this entity.
     *
     */
    readonly lockRiderRotation: number;
    /**
     * @remarks
     * 此座位可支持的最大骑乘者数量。
     *
     * A maximum number of riders that this seat can support.
     *
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * 如果需要填充此座位，可放置在此座位位置的最小骑乘者数量。
     *
     * A minimum number of riders that can be placed in this seat
     * position, if this seat is to be filled.
     *
     */
    readonly minRiderCount: number;
    /**
     * @remarks
     * 此座位的实际位置，相对于实体的位置。
     *
     * Physical location of this seat, relative to the entity's
     * location.
     *
     */
    readonly position: Vector3;
    /**
     * @remarks
     * 旋转骑乘者的角度（以度为单位）。
     *
     * Angle in degrees to rotate riders by.
     *
     */
    readonly seatRotation: number;
}

/**
 * @beta
 * 管理消息传递到服务器的回调。此事件目前尚未完全实现，不应使用。
 *
 * Manages callbacks that are message passing to a server. This event is not currently fully implemented, and should not be used.
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在内部消息传递时调用的回调。
     *
     * Adds a callback that will be called when an internal message is passed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在内部消息传递时调用的回调。
     *
     * Removes a callback from being called when an internal message is passed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}

/**
 * 修改掉落盔甲物品的纹饰的战利品物品函数。
 *
 * Loot item function that modifies the trim on a dropped armor
 * item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetArmorTrimFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于盔甲纹饰的材料。
     *
     * The material to apply to the armor trim.
     *
     */
    readonly material: string;
    /**
     * @remarks
     * 应用于盔甲纹饰的图案。
     *
     * The pattern to apply to the armor trim.
     *
     */
    readonly pattern: string;
}

/**
 * 修改掉落旗帜类型的战利品物品函数。
 *
 * Loot item function that modifies the type of a banner that
 * drops.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBannerDetailsFunction extends LootItemFunction {
    private constructor();
    /**
     * @beta
     * @remarks
     * 掉落旗帜的基础颜色。
     *
     * The base color for the dropped banner.
     *
     */
    readonly baseColor: string;
    /**
     * @beta
     * @remarks
     * 用于装饰旗帜的 {@link BannerPattern} 对象数组，包括颜色和图案类型。
     *
     * An array of {@link BannerPattern} objects used to decorate
     * the banner, including color and pattern type.
     *
     */
    readonly patterns: BannerPattern[];
    /**
     * @remarks
     * 掉落的旗帜类型。
     *
     * The type of banner to drop.
     *
     */
    readonly 'type': number;
}

/**
 * 修改掉落书本内容的战利品物品函数。
 *
 * Loot item function that modifies the contents of a dropped
 * book.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBookContentsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 书本作者的名称。
     *
     * The name of the book's author.
     *
     */
    readonly author: string;
    /**
     * @remarks
     * 放置在书本页面中的文本数组。
     *
     * An array of text to be placed in the pages of the book.
     *
     */
    readonly pages: string[];
    /**
     * @remarks
     * 书本的标题。
     *
     * The book's title.
     *
     */
    readonly title: string;
}

/**
 * 根据颜色索引修改掉落物品数据值的战利品物品函数。如果未设置颜色索引，则默认为零。
 *
 * Loot item function that modifies the dropped item's data
 * value based on its color index. Defaults to zero if no color
 * index is set.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetDataFromColorIndexFunction extends LootItemFunction {
    private constructor();
}

/**
 * 修改战利品池条目掉落物品数量的战利品物品函数。
 *
 * Loot item function that modifies the number items that drop
 * from the loot pool entry.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemCountFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择掉落物品数量的范围，包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * number of items to drop. Contains minimum and maximum
     * values.
     *
     */
    readonly count: NumberRange;
}

/**
 * 修改掉落物品耐久度值的战利品物品函数。
 *
 * Loot item function that modifies the durability value of the
 * item dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemDamageFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择耐久度值的范围，包含最小值和最大值。必须始终介于 0.0 和 1.0 之间。
     *
     * The value range from which the function randomly chooses the
     * durability value to assign. Contains minimum and maximum
     * values. Must always be between 0.0 and 1.0.
     *
     */
    readonly damage: NumberRange;
}

/**
 * 修改掉落物品数据值的战利品物品函数。
 *
 * Loot item function that modifies the data value of the item
 * dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemDataFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择数据值的范围，包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * data value to assign. Contains minimum and maximum values.
     *
     */
    readonly data: NumberRange;
}

/**
 * 修改掉落物品 lore 的战利品物品函数。
 *
 * Loot item function that modifies the lore of the item
 * dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemLoreFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于掉落物品的 lore。
     *
     * The lore to apply to the dropped item.
     *
     */
    readonly lore: string[];
}

/**
 * 修改掉落物品名称的战利品物品函数。
 *
 * Loot item function that modifies the name of the item
 * dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemNameFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于掉落物品的名称。
     *
     * The name to apply to the dropped item.
     *
     */
    readonly name: string;
}

/**
 * 修改不祥之瓶增幅值（amplifier）的战利品物品函数。
 *
 * Loot item function that modifies an ominous bottle's
 * amplifier value.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetOminousBottleFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择增幅值（amplifier）的范围，包含最小值和最大值。
     *
     * The value range from which the function randomly chooses the
     * amplifier value to assign. Contains minimum and maximum
     * values.
     *
     */
    readonly amplifier: NumberRange;
}

/**
 * 为掉落药水分配类型的战利品物品函数。
 *
 * Loot item function that assigns a type to a dropped potion.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetPotionFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 分配给掉落药水的 id。
     *
     * The id to be assigned to the dropped potion.
     *
     */
    readonly id: string;
}

/**
 * 为掉落的刷怪蛋分配实体类型的战利品物品函数。不适用于除刷怪蛋外的任何物品。
 *
 * Loot item function that assigns an entity type to a dropped
 * spawn egg. Does not work on any items other than spawn eggs.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetSpawnEggFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 分配给掉落刷怪蛋的实体。
     *
     * The entity to be assigned to the dropped egg.
     *
     */
    readonly id: string;
}

/**
 * 修改掉落煲类物品效果的战利品物品函数。
 *
 * Loot item function that modifies the effects of a dropped
 * stew item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetStewEffectFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 对应于煲类效果的整数数组，将从中随机选择并应用于掉落物品。
     *
     * An array of integers corresponding to stew effects to be
     * randomly chosen from and applied to the dropped item.
     *
     */
    readonly effects: number[];
}

/**
 * 为调用者提供了一个可适应的接口，用于订阅在游戏世界关闭前触发的事件。此事件发生在玩家离开之后，但在世界关闭之前。
 *
 * Provides an adaptable interface for callers to subscribe to an event that fires before the game world shuts down. This event occurs after players have left, but before the world has closed.
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 为此事件添加一个新的订阅者回调。
     *
     * Adds a new subscriber callback to this event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 事件触发时调用的函数回调。此闭包以受限执行权限被调用。
     *
     * Function callback that is called when this event fires. This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * 移除先前通过 subscribe 方法订阅的回调。
     *
     * Removes a subscriber callback previously subscribed to via the subscribe method.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 先前传递给 subscribe 方法的函数闭包。此闭包以受限执行权限被调用。
     *
     * Function closure that was previously passed to the subscribe method. This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}

/**
 * 游戏世界关闭时分发的事件对象。
 *
 * The event object that gets dispatched when the game world is
 * shutting down.
 */
export class ShutdownEvent {
    private constructor();
}

/**
 * 将掉落物品视为在熔炉中冶炼或烹饪处理后的战利品物品函数。
 *
 * Loot item function that processes the dropped item as if it
 * was smelted or cooked in a furnace.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SmeltItemFunction extends LootItemFunction {
    private constructor();
}

/**
 * @beta
 * 包含关于声音声明时长已结束的信息。
 *
 * Contains information about a sound thats declared duration
 * elapsed.
 */
export class SoundCompletedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已完成的音频实例的标识符。与播放声音时返回的 `SoundInstance` 的 `id` 属性匹配。
     *
     * Identifier of the sound instance that completed. Matches the
     * `id` property of the `SoundInstance` returned when the sound
     * was played.
     *
     */
    readonly soundInstanceId: string;
}

/**
 * @beta
 * 管理当被追踪声音的声明时长结束时触发的回调。
 *
 * Manages callbacks that are invoked when a tracked sound's
 * declared duration elapses.
 */
export class SoundCompletedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当被追踪声音的声明时长结束时将被调用。
     *
     * Adds a callback that will be invoked when a tracked sound's
     * declared duration elapses.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: SoundCompletedAfterEvent) => void): (arg0: SoundCompletedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个先前注册的、在追踪声音声明时长结束时调用的回调。
     *
     * Removes a callback from being invoked when a tracked sound's
     * declared duration elapses.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: SoundCompletedAfterEvent) => void): void;
}

/**
 * @beta
 * 关于在 sound_definitions.json 文件中声明的音效的静态元数据。
 *
 * Static metadata about a sound declared in a sound_definitions.json file.
 */
export class SoundDefinition {
    private constructor();
    /**
     * @remarks
     * 为此音效声明的持续时间元数据。当音效定义未指定持续时间时为 `undefined`。
     *
     * Duration metadata declared for this sound. Undefined when the sound definition does not specify a duration.
     *
     */
    readonly durationInfo?: SoundDefinitionDurationInfo;
    /**
     * @remarks
     * 为此音效声明的音乐元数据。当音效定义未指定 music_info 块时为 `undefined`。
     *
     * Music metadata declared for this sound. Undefined when the sound definition does not specify a music_info block.
     *
     */
    readonly musicInfo?: SoundDefinitionMusicInfo;
    /**
     * @remarks
     * 此定义所声明的音效事件标识符，格式为 'namespace:name'。
     *
     * Identifier of the sound event this definition declares, in the form 'namespace:name'.
     *
     */
    readonly soundEventId: string;
    /**
     * @remarks
     * 为此音效声明的标签元数据，以记录形式将每个标签名称映射到其声明的值。使用单个字符串值声明的标签将作为单元素数组暴露。当音效定义未指定任何标签时为 `undefined`。
     *
     * Tag metadata declared for this sound, as a record mapping each tag name to its declared values. A tag declared with a single string value is exposed as a single-element array. Undefined when the sound definition does not specify any tags.
     *
     */
    readonly tags?: Record<string, string[]>;
}

/**
 * @beta
 * 提供对当前世界加载的音效定义的只读访问。
 *
 * Provides read-only access to the sound definitions loaded for the current world.
 */
export class SoundDefinitionRegistry {
    private constructor();
    /**
     * @remarks
     * 返回注册表中的音效定义，可选择通过筛选条件缩小范围。
     *
     * Returns the sound definitions in the registry, optionally narrowed by a filter.
     *
     * @param filter
     * 应用于每个定义的可选筛选条件。省略时返回所有定义。
     *
     * Optional filter applied to each definition. When omitted, every definition is returned.
     * @returns
     * 所有符合筛选条件的音效定义，或未提供筛选条件时的所有音效定义。
     *
     * All sound definitions matching the filter, or every sound definition when no filter is supplied.
     * @throws
     * 如果 filter.minDuration 大于 filter.maxDuration 将抛出错误。
     *
     * An error will be thrown if filter.minDuration is greater than filter.maxDuration.
     *
     * {@link InvalidArgumentError}
     */
    getDefinitions(filter?: SoundDefinitionFilter): SoundDefinition[];
}

/**
 * @beta
 * 提供声明了时长的声音的时长和播放信息。
 *
 * Provides duration and playback information for a sound whose
 * definition declares a duration.
 */
export class SoundDurationInfo {
    private constructor();
    /**
     * @remarks
     * 获取声音的总时长（以秒为单位）。
     *
     * Gets the total duration of the sound in seconds.
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取声音是否仍被追踪。
     *
     * Gets whether the sound is still being tracked.
     *
     */
    readonly isActive: boolean;
    /**
     * @remarks
     * 返回声音开始播放以来的已播放时间（以秒为单位）。
     *
     * Returns the elapsed playback time of the sound, in seconds,
     * since it started playing.
     *
     * @worldMutation
     *
     * @returns
     * 已播放的时间（以秒为单位）。
     *
     * Elapsed playback time in seconds.
     */
    getPlaybackPosition(): number;
}

/**
 * 表示已播放音效的句柄。在音效播放期间需要通过此句柄来控制音效（例如调用 `stop`、`setVolume`、`setPitch`、`fade` 或 `seekTo`）。无限循环音效（通过 `loop: -1` 启动）会在最后一个 `SoundInstance` 引用被丢弃时自动停止；只要音效需要继续播放，就应保留此句柄。
 *
 * Represents a handle to a sound that has been played. The handle is required to control the sound while it is playing (for example, to call `stop`, `setVolume`, `setPitch`, `fade`, or `seekTo`). Infinitely-looping sounds (started with `loop: -1`) stop automatically when the last `SoundInstance` reference is dropped; retain the handle for as long as the sound should keep playing.
 */
export class SoundInstance {
    private constructor();
    /**
     * @beta
     * @remarks
     * 获取此音效的持续时间和播放信息。
     *
     * Gets duration and playback information for this sound.
     *
     */
    readonly durationInfo?: SoundDurationInfo;
    /**
     * @beta
     * @remarks
     * 此音效实例的唯一标识符。
     *
     * Unique identifier of this sound instance.
     *
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * 获取此音效为其播放的玩家。
     *
     * Gets the player this sound was played for.
     *
     */
    readonly recipient?: Player;
    /**
     * @beta
     * @remarks
     * 获取此实例启动时使用的音效事件标识符。
     *
     * Gets the identifier of the sound event this instance was started with.
     *
     */
    readonly soundEventId: string;
    /**
     * @beta
     * @remarks
     * 将当前音效实例从当前音量渐变为指定音量，持续指定时间。要从静音淡入，请先调用 `setVolume(0.0)`；要淡出，请传入目标音量 `0.0`。
     *
     * Fades this sound instance from its current volume to the target volume over the specified duration. To fade in from silence, call `setVolume(0.0)` first; to fade out, pass a target volume of `0.0`.
     *
     * @worldMutation
     *
     * @param duration
     * 淡变的持续时间（以秒为单位）。必须为非负值。
     *
     * Duration of the fade in seconds. Must be non-negative.
     * Minimum value: 0
     * @param targetVolume
     * 淡变到的目标音量。必须为非负值。
     *
     * Volume to fade to. Must be non-negative.
     * Minimum value: 0
     */
    fade(duration: number, targetVolume: number): void;
    /**
     * @beta
     * @remarks
     * 暂停此音效。
     *
     * Pauses this sound.
     *
     * @worldMutation
     *
     */
    pause(): void;
    /**
     * @beta
     * @remarks
     * 暂停后恢复此音效。
     *
     * Resumes this sound after a pause.
     *
     * @worldMutation
     *
     */
    resume(): void;
    /**
     * @beta
     * @remarks
     * 设置此音效实例的播放位置。
     *
     * Sets the playback position of this sound instance.
     *
     * @worldMutation
     *
     * @param seconds
     * 要跳转到的位置（以秒为单位）。必须为非负值。
     *
     * Position to seek to in seconds. Must be non-negative.
     * Minimum value: 0
     */
    seekTo(seconds: number): void;
    /**
     * @beta
     * @remarks
     * 设置此音效实例的音高。
     *
     * Sets the pitch of this sound instance.
     *
     * @worldMutation
     *
     * @param pitch
     * 0.01 到 10.0 之间的音高倍率。值为 1.0 表示正常音高。
     *
     * Pitch multiplier between 0.01 and 10.0. A value of 1.0 is normal pitch.
     * Bounds: [0.009999999776482582, 10]
     */
    setPitch(pitch: number): void;
    /**
     * @beta
     * @remarks
     * 设置此音效实例的音量。
     *
     * Sets the volume of this sound instance.
     *
     * @worldMutation
     *
     * @param volume
     * 0.0 到 10.0 之间的音量级别。
     *
     * Volume level between 0.0 and 10.0.
     * Bounds: [0, 10]
     */
    setVolume(volume: number): void;
    /**
     * @rc
     * @remarks
     * 停止此音效实例的播放。
     *
     * Stops this sound instance from playing.
     *
     * @worldMutation
     *
     */
    stop(): void;
}

/**
 * 为掉落物品应用一个或多个预定义附魔的战利品物品函数。
 *
 * Loot item function that applies one or several predefined
 * enchants to the dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SpecificEnchantFunction extends LootItemFunction {
    private constructor();
    readonly enchantments: EnchantInfo[];
}

/**
 * 管理连接到启动前事件的回调。
 *
 * Manages callbacks that are connected to before a startup event.
 */
export class StartupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以早期执行权限被调用。
     *
     * This closure is called with early-execution privilege.
     * @returns
     * 以早期执行权限调用的闭包。
     *
     * Closure that is called with early-execution privilege.
     */
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以早期执行权限被调用。
     *
     * This closure is called with early-execution privilege.
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}

export class StartupEvent {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly customCommandRegistry: CustomCommandRegistry;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly dimensionRegistry: DimensionRegistry;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
}

/**
 * 表示已加载的结构模板（.mcstructure 文件）。可以使用 /structure 命令或 {@link StructureManager} API 在世界中放置结构。
 *
 * Represents a loaded structure template (.mcstructure file). Structures can be placed in a world using the /structure command or the {@link StructureManager} APIs.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Structure extends ISerializable {
    private constructor();
    /**
     * @remarks
     * 结构的名称。标识符必须包含命名空间。对于通过 /structure 命令或结构方块创建的结构，此命名空间默认为 "mystructure"。
     *
     * The name of the structure. The identifier must include a namespace. For structures created via the /structure command or structure blocks, this namespace defaults to "mystructure".
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 返回 Structure 是否有效。如果 Structure 被删除，则将变为无效。
     *
     * Returns whether the Structure is valid. The Structure may become invalid if it is deleted.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 结构的尺寸。例如，单方块结构的尺寸为 {x:1, y:1, z:1}。
     *
     * The dimensions of the structure. For example, a single block structure will have a size of {x:1, y:1, z:1}.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @remarks
     * 返回表示 Structure 中指定位置方块的 BlockPermutation。
     *
     * Returns a BlockPermutation representing the block contained within the Structure at the given location.
     *
     * @param location
     * 相对于 Structure 原点的方块位置。
     *
     * The block location relative to the Structure's origin.
     * @returns
     * 返回 BlockPermutation。如果指定位置不存在方块，则返回 `undefined`。
     *
     * Returns a BlockPermutation. Returns undefined if a block does not exist at the given location.
     * @throws
     * 如果位置超出结构边界则抛出。
     * 如果 Structure 已被删除则抛出。
     *
     * Throws if the location is outside the structure's bounds.
     * Throws if the Structure has been deleted.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @remarks
     * 返回指定位置的方块是否含水。
     *
     * Returns whether the block at the given location is waterlogged.
     *
     * @param location
     * 相对于 Structure 原点的方块位置。
     *
     * The block location relative to the Structure's origin.
     * @returns
     * 返回指定位置的方块是否含水。如果指定位置不存在方块，则返回 `false`。
     *
     * Returns whether the block at the given location is waterlogged. Returns false if a block does not exist at the given location.
     * @throws
     * 如果位置超出结构边界则抛出。
     * 如果 Structure 已被删除则抛出。
     *
     * Throws if the location is outside the structure's bounds.
     * Throws if the Structure has been deleted.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @remarks
     * 创建 Structure 的副本并以新名称保存。
     *
     * Creates a copy of a Structure and saves it with a new name.
     *
     * @worldMutation
     *
     * @param identifier
     * 新创建的 Structure 的名称。
     *
     * The name of the newly created Structure.
     * @param saveMode
     * 确定 Structure 的保存方式。默认为保存到世界。
     *
     * Determines how the Structure should be saved. Defaults to saving to the world.
     * Defaults to: 1
     * @returns
     * 返回新创建的结构。
     *
     * Returns the newly created structure.
     * @throws
     * 如果标识符无效则抛出。有效的标识符必须包含命名空间且必须唯一。
     * 如果 Structure 已被删除则抛出。
     *
     * Throws if the identifier is invalid. A valid identifier must include a namespace and must be unique.
     * Throws if the Structure has been deleted.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * 将修改后的 Structure 保存到世界文件中。
     *
     * Saves a modified Structure to the world file.
     *
     * @worldMutation
     *
     * @throws
     * 如果 Structure 已被删除则抛出。
     *
     * Throws if the Structure has been deleted.
     *
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /**
     * @remarks
     * 在 Structure 中设置一个 BlockPermutation。
     *
     * Sets a BlockPermutation within a Structure.
     *
     * @worldMutation
     *
     * @param location
     * 相对于 Structure 原点的方块位置。
     *
     * The block location relative to the Structure's origin.
     * @param blockPermutation
     * 要设置的 BlockPermutation。
     *
     * The BlockPermutation to set.
     * Defaults to: null
     * @param waterlogged
     * 指定方块是否应含水。空气和未定义的方块不能含水。
     *
     * Specifies whether the block should be waterlogged. Air and undefined blocks cannot be waterlogged.
     * Defaults to: false
     * @throws
     * 如果方块类型为 StructureVoid 则抛出。
     * 如果方块未定义且 waterlogged 设置为 `true` 则抛出。
     * 如果方块为空气且 waterlogged 设置为 `true` 则抛出。
     * 如果位置超出结构边界则抛出。
     * 如果 Structure 已被删除则抛出。
     *
     * Throws if the type of block is StructureVoid.
     * Throws if the block is undefined and waterlogged is set to true.
     * Throws if the block is air and waterlogged is set to true.
     * Throws if the location is outside the structure's bounds.
     * Throws if the Structure has been deleted.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}

/**
 * Structure 相关 API 的管理器。包括用于创建、获取、放置和删除 Structure 的 API。
 *
 * Manager for Structure related APIs. Includes APIs for creating, getting, placing and deleting Structures.
 */
export class StructureManager {
    private constructor();
    /**
     * @remarks
     * 在内存中创建一个空的 Structure。使用 {@link Structure.setBlockPermutation} 填充结构中的方块，并使用 {@link Structure.saveAs} 保存更改。
     *
     * Creates an empty Structure in memory. Use {@link Structure.setBlockPermutation} to populate the structure with blocks and save changes with {@link Structure.saveAs}.
     *
     * @worldMutation
     *
     * @param identifier
     * 结构的名称。有效的标识符必须包含命名空间且必须唯一。
     *
     * The name of the structure. A valid identifier must include a namespace and must be unique.
     * @param size
     * 结构的大小。例如，要创建一个单方块结构，大小应为 {x:1, y:1, z:1}。
     *
     * The size of the structure. For example, to create a single block structure the size should be {x:1, y:1, z:1}.
     * @param saveMode
     * 创建时结构的保存方式。默认为 StructureSaveMode.Memory。
     *
     * How the Structure should be saved upon creation. Defaults to StructureSaveMode.Memory.
     * Defaults to: 0
     * @returns
     * 返回新创建的 Structure。
     *
     * Returns the newly created Structure.
     * @throws
     * 如果标识符无效则抛出。有效的标识符必须包含命名空间且必须唯一。
     *
     * Throws if the identifier is invalid. A valid identifier must include a namespace and must be unique.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * 从世界中的方块创建一个新的 Structure。这在功能上等同于 /structure save 命令。
     *
     * Creates a new Structure from blocks in the world. This is functionally equivalent to the /structure save command.
     *
     * @worldMutation
     *
     * @param identifier
     * 结构的名称。有效的标识符必须包含命名空间且必须唯一。
     *
     * The name of the structure. A valid identifier must include a namespace and must be unique.
     * @param dimension
     * 应从中读取方块的维度。
     *
     * The dimension where the blocks should be read from.
     * @param options
     * 从世界创建结构的附加选项。
     *
     * Additional options for creating a structure from the world.
     * @returns
     * 返回新创建的 Structure。
     *
     * Returns the newly created Structure.
     * @throws
     * 如果标识符无效则抛出。有效的标识符必须包含命名空间且必须唯一。
     * 如果结构边界超出最大大小则抛出。
     * 如果结构边界包含世界边界之外的方块则抛出。
     *
     * Throws if the identifier is invalid. A valid identifier must include a namespace and must be unique.
     * Throws if the structure bounds exceed the maximum size.
     * Throws if the structure bounds contains blocks outside the world bounds.
     *
     *
     * {@link InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        from: Vector3,
        to: Vector3,
        options?: StructureCreateOptions,
    ): Structure;
    /**
     * @remarks
     * 从内存和世界中删除一个结构（如果存在）。
     *
     * Deletes a structure from memory and from the world if it exists.
     *
     * @worldMutation
     *
     * @param structure
     * 要删除的结构标识符或 Structure 对象。注意，Structure 对象在删除后将变为无效。
     *
     * The structure identifier or Structure object that should be deleted. Note, a Structure object will become invalid after it is deleted.
     * @returns
     * 返回结构是否已被移除。
     *
     * Returns whether the structure was removed.
     * @throws
     * 如果无法移除结构则抛出。例如，从行为包加载的结构。
     *
     * Throws if a structure cannot be removed. For example, a structure loaded from a Behavior Pack.
     *
     * {@link InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    /**
     * @remarks
     * 获取已保存到内存或世界中的 Structure。
     *
     * Gets a Structure that is saved to memory or the world.
     *
     * @worldMutation
     *
     * @param identifier
     * 要获取的结构的名称。
     *
     * The name of the structure to get.
     * @returns
     * 如果结构存在则返回 Structure，否则返回 `undefined`。
     *
     * Returns a Structure if it exists, otherwise undefined.
     */
    get(identifier: string): Structure | undefined;
    /**
     * @remarks
     * 返回行为包中包含的所有结构列表。不包括保存到世界或内存中的结构。
     *
     * Returns a list of all structures contained in behavior packs. Does not include structures saved to the world or in memory.
     *
     * @worldMutation
     *
     * @returns
     * 结构标识符列表。
     *
     * The list of structure identifiers.
     */
    getPackStructureIds(): string[];
    /**
     * @remarks
     * 返回所有保存到世界和内存中的结构列表。不包括行为包中包含的结构。
     *
     * Returns a list of all structures saved to the world and to memory. Does not include structures contained in behavior packs.
     *
     * @worldMutation
     *
     * @returns
     * 结构标识符列表。
     *
     * The list of structure identifiers.
     */
    getWorldStructureIds(): string[];
    /**
     * @remarks
     * 在世界中放置一个结构。放置在未加载区块中的结构将被排队等待加载。
     *
     * Places a structure in the world. Structures placed in unloaded chunks will be queued for loading.
     *
     * @worldMutation
     *
     * @param structure
     * 结构的标识符或 Structure 对象。
     *
     * The structure's identifier or a Structure object.
     * @param dimension
     * 应放置结构的维度。
     *
     * The dimension where the Structure should be placed.
     * @param location
     * 维度中应放置结构的位置。
     *
     * The location within the dimension where the Structure should be placed.
     * @param options
     * Structure 放置的附加选项。
     *
     * Additional options for Structure placement.
     * @throws
     * 如果完整性值超出 [0,1] 范围则抛出。
     * 如果完整性种子无效则抛出。
     * 如果放置位置包含世界边界之外的方块则抛出。
     *
     * Throws if the integrity value is outside of the range [0,1]
     * Throws if the integrity seed is invalid.
     * Throws if the placement location contains blocks that are outside the world bounds.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    place(
        structure: string | Structure,
        dimension: Dimension,
        location: Vector3,
        options?: StructurePlaceOptions,
    ): void;
    /**
     * @remarks
     * 在世界中放置部分拼图结构。这有利于调试拼图方块之间的连接。
     *
     * Places a partial jigsaw structure in the world. This is useful for debugging connections between jigsaw blocks.
     *
     * @worldMutation
     *
     * @param pool
     * 起始模板池的标识符。
     *
     * The identifier of the template pool to start from.
     * @param targetJigsaw
     * 起始拼图方块的名称。此方块必须至少包含在起始池结构模板之一中。
     *
     * The name of the jigsaw block to start from. This block must be included in at least one of the starting pool structure templates.
     * @param maxDepth
     * 拼图结构的最大递归深度。
     *
     * The maximum recursion depth for the jigsaw structure.
     * Bounds: [1, 20]
     * @param dimension
     * 放置拼图结构的维度。
     *
     * The dimension to place the jigsaw structure in.
     * @param location
     * 拼图结构将开始生成的位置，相对于 targetJigsaw 方块。
     *
     * The location where the jigsaw structure will begin generating relative to the targetJigsaw block.
     * @param options
     * 生成拼图结构时使用的可选设置。
     *
     * Optional settings to use when generating the jigsaw structure.
     * @returns
     * 返回表示拼图结构最大边界的 {@link BlockBoundingBox} 对象。
     *
     * Returns a {@link BlockBoundingBox} object which represents the maximum bounds of the jigsaw structure.
     * @throws
     * 如果 maxDepth 超出 [1,20] 范围则抛出。
     * 如果由于无效参数或拼图配置导致生成失败则抛出。
     * 如果放置位置包含世界边界之外的方块则抛出。
     *
     * Throws if maxDepth is outside of the range [1,20]
     * Throws if generation fails due to invalid parameters or jigsaw configuration.
     * Throws if the placement location contains blocks that are outside the world bounds.
     *
     * {@link PlaceJigsawError}
     */
    placeJigsaw(
        pool: string,
        targetJigsaw: string,
        maxDepth: number,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawPlaceOptions,
    ): BlockBoundingBox;
    /**
     * @remarks
     * 在世界中放置一个拼图结构。
     *
     * Places a jigsaw structure in the world.
     *
     * @worldMutation
     *
     * @param identifier
     * 拼图结构的标识符。
     *
     * The identifier of the jigsaw structure.
     * @param dimension
     * 放置拼图结构的维度。
     *
     * The dimension to place the jigsaw structure in.
     * @param location
     * 拼图结构将开始生成的位置。注意，除非设置了 ignoreStarJigsawStructurePlaceOptions ignoreStartHeight 选项，否则 y 值将被结构的起始高度覆盖。
     *
     * The location where the jigsaw structure will begin generating. Note that the y value will be overridden by the structure's start height unless the ignoreStarJigsawStructurePlaceOptions ignoreStartHeight option is set.
     * @param options
     * 生成拼图结构时使用的可选设置。
     *
     * Optional settings to use when generating the jigsaw structure.
     * @returns
     * 返回表示拼图结构最大边界的 {@link BlockBoundingBox} 对象。
     *
     * Returns a {@link BlockBoundingBox} object which represents the maximum bounds of the jigsaw structure.
     * @throws
     * 如果由于无效参数或拼图配置导致生成失败则抛出。
     * 如果放置位置包含世界边界之外的方块则抛出。
     *
     * Throws if generation fails due to invalid parameters or jigsaw configuration.
     * Throws if the placement location contains blocks that are outside the world bounds.
     *
     * {@link PlaceJigsawError}
     */
    placeJigsawStructure(
        identifier: string,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawStructurePlaceOptions,
    ): BlockBoundingBox;
}

/**
 * 提供系统级事件和函数的类。
 *
 * A class that provides system-level events and functions.
 */
export class System {
    private constructor();
    /**
     * @remarks
     * 返回系统级操作的后置事件集合。
     *
     * Returns a collection of after-events for system-level operations.
     *
     * @earlyExecution
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @remarks
     * 返回系统级操作的前置事件集合。
     *
     * Returns a collection of before-events for system-level operations.
     *
     * @earlyExecution
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * 表示服务器当前的世界刻数。
     *
     * Represents the current world tick of the server.
     *
     * @earlyExecution
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * 如果这是一个当前已加载编辑器的世界，则返回 `true`，否则返回 `false`。
     *
     * Returns true if this is a world where the editor is currently loaded, returns false otherwise.
     *
     * @earlyExecution
     *
     */
    readonly isEditorWorld: boolean;
    /**
     * @remarks
     * 包含服务器的设备信息。
     *
     * Contains the device information for the server.
     *
     * @earlyExecution
     *
     */
    readonly serverSystemInfo: SystemInfo;
    /**
     * @remarks
     * 取消通过 {@link System.runJob} 排队的作业的执行。
     *
     * Cancels the execution of a job queued via {@link System.runJob}.
     *
     * @earlyExecution
     *
     * @param jobId
     * 从 {@link System.runJob} 返回的作业 ID。
     *
     * The job ID returned from {@link System.runJob}.
     */
    clearJob(jobId: number): void;
    /**
     * @remarks
     * 取消先前通过 {@link System.run} 安排的函数运行的执行。
     *
     * Cancels the execution of a function run that was previously scheduled via {@link System.run}.
     *
     * @earlyExecution
     *
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * 在下一个可用的未来时间运行指定的函数。这通常用于实现延迟行为和游戏循环。在事件处理程序的上下文中运行时，通常会在事件发生的同一刻结束时运行代码。在其他代码（system.run 回调）中运行时，该函数将在下一刻运行。但请注意，根据系统负载，不能保证在同一刻或下一刻运行。
     *
     * Runs a specified function at the next available future time. This is frequently used to implement delayed behaviors and game loops. When run within the context of an event handler, this will generally run the code at the end of the same tick where the event occurred. When run in other code (a system.run callout), this will run the function in the next tick. Note, however, that depending on load on the system, running in the same or next tick is not guaranteed.
     *
     * @earlyExecution
     *
     * @param callback
     * 在下一个游戏刻运行的函数回调。
     *
     * Function callback to run at the next game tick.
     * @returns
     * 一个不透明标识符，可与 `clearRun` 函数一起使用以取消此运行的执行。
     *
     * An opaque identifier that can be used with the `clearRun` function to cancel the execution of this run.
     * @seeExample trapTick.ts
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * 按间隔运行一组代码。
     *
     * Runs a set of code on an interval.
     *
     * @earlyExecution
     *
     * @param callback
     * 在此间隔发生时将运行的功能代码。
     *
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * 回调被调用的间隔刻数。
     *
     * An interval of every N ticks that the callback will be called upon.
     * @returns
     * 一个不透明句柄，可与 clearRun 方法一起使用以停止此函数的间隔运行。
     *
     * An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
     * @seeExample every30Seconds.ts
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks
     * 将生成器排队直到完成。生成器将在每刻获得一个时间片，并将运行直到它让出或完成。
     *
     * Queues a generator to run until completion. The generator will be given a time slice each tick, and will be run until it yields or completes.
     *
     * @earlyExecution
     *
     * @param generator
     * 要运行的生成器实例。
     *
     * The instance of the generator to run.
     * @returns
     * 一个不透明句柄，可与 {@link System.clearJob} 一起使用以停止此生成器的运行。
     *
     * An opaque handle that can be used with {@link System.clearJob} to stop the run of this generator.
     * @seeExample cubeGenerator.ts
     */
    runJob(generator: Generator<void, void, void>): number;
    /**
     * @remarks
     * 在由 tickDelay 指定的未来时间运行一组代码。
     *
     * Runs a set of code at a future time specified by tickDelay.
     *
     * @earlyExecution
     *
     * @param callback
     * 此超时发生时将运行的功能代码。
     *
     * Functional code that will run when this timeout occurs.
     * @param tickDelay
     * 调用间隔前的时间（以刻为单位）。
     *
     * Amount of time, in ticks, before the interval will be called.
     * @returns
     * 一个不透明句柄，可与 clearRun 方法一起使用以停止此函数的间隔运行。
     *
     * An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @remarks
     * 使用指定的消息 ID 和负载在脚本内触发事件。
     *
     * Causes an event to fire within script with the specified message ID and payload.
     *
     * @param id
     * 要发送的消息的标识符。这是自定义的，具体取决于你在世界中安装的行为包和内容。
     *
     * Identifier of the message to send. This is custom and dependent on the kinds of behavior packs and content you may have installed within the world.
     * @param message
     * 要发送的消息的数据组件。这是自定义的，具体取决于你在世界中安装的行为包和内容。
     *
     * Data component of the message to send. This is custom and dependent on the kinds of behavior packs and content you may have installed within the world.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    sendScriptEvent(id: string, message: string): void;
    /**
     * @remarks
     * waitTicks 返回一个在请求的刻数后解析的 Promise。
     *
     * waitTicks returns a promise that resolves after the requested number of ticks.
     *
     * @earlyExecution
     *
     * @param ticks
     * 要等待的刻数。最小值为 1。
     *
     * The amount of ticks to wait. Minimum value is 1.
     * @returns
     * 在指定刻数过去后解析的 Promise。
     *
     * A promise that is resolved when the specified amount of ticks have occurred.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}

/**
 * 提供在 Minecraft 更广泛的脚本系统内触发的一组事件。
 *
 * Provides a set of events that fire within the broader
 * scripting system within Minecraft.
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * 当 /scriptevent 命令被设置时触发的事件。这为命令和其他系统提供了一种在脚本中触发行为的方式。
     *
     * An event that fires when a /scriptevent command is set. This
     * provides a way for commands and other systems to trigger
     * behavior within script.
     *
     * @earlyExecution
     *
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

/**
 * 一组在实际操作发生前触发的事件。在大多数情况下，你可以取消或修改即将发生的事件。注意，在 before 事件中，任何修改游戏状态的 API 将无法运行并会抛出错误。
 *
 * A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event. Note that in before events any APIs that modify gameplay state will not function and will throw an error.
 */
export class SystemBeforeEvents {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly shutdown: ShutdownBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly startup: StartupBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 当脚本监视狗关闭服务器时触发。这可能是由于使用了过多内存，或导致了显著的减速或卡顿。要阻止关闭，请将事件的 cancel 属性设置为 `true`。
     *
     * Fires when the scripting watchdog shuts down the server. The can be due to using too much memory, or by causing significant slowdown or hang. To prevent shutdown, set the event's cancel property to true.
     *
     * @earlyExecution
     *
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}

/**
 * 包含设备信息，如内存层级。
 *
 * Contains device information, like memory tier.
 */
export class SystemInfo {
    private constructor();
    /**
     * @remarks
     * 描述设备的内存。
     *
     * Describes the memory of the device.
     *
     */
    readonly memoryTier: MemoryTier;
}

/**
 * Contains information related to changes to a target block
 * hit.
 *
 * 包含与标靶方块被击中时的变化相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The position where the source hit the block.
     *
     * 击中方块时的源位置。
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * The redstone power before the block is hit.
     *
     * 方块被击中前的红石信号强度。
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power at the time the block is hit.
     *
     * 方块被击中时的红石信号强度。
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * Optional source that hit the target block.
     *
     * 击中目标方块的来源（可选）。
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to when a target block
 * is hit.
 *
 * 管理与标靶方块被击中时相关的回调。
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a target block is
     * hit.
     *
     * 添加一个回调，当目标方块被击中时调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a target block is
     * hit.
     *
     * 移除一个在目标方块被击中时调用的回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}

/**
 * A primitive shape class that represents a text label in the
 * world with a background.
 *
 * 一个基本形状类，表示世界中带有背景的文本标签。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TextPrimitive extends PrimitiveShape {
    /**
     * @remarks
     * If set to true, the text primitive will render the back-face
     * of the background. Defaults to true but will always be false
     * if 'useRotation' is set to false.
     *
     * 如果设置为 `true`，文本图元将渲染背景的背面。默认为 `true`，但如果 `'useRotation'` 设置为 `false`，则始终为 `false`。
     */
    backfaceVisible: boolean;
    /**
     * @remarks
     * The color of the background plate of the text. If set to
     * undefined, it will use the default color.
     *
     * 文本背景板的颜色。如果设置为 `undefined`，则使用默认颜色。
     */
    backgroundColorOverride?: RGBA;
    /**
     * @remarks
     * If set to true, the text will be hidden behind blocks or
     * entities. By default this is set to false (will always
     * render).
     *
     * 如果设置为 `true`，文本将被方块或实体遮挡。默认设置为 `false`（始终渲染）。
     */
    depthTest: boolean;
    /**
     * @remarks
     * Get the text of the debug text shape. Returns the RawText of
     * the debug text if `setText` was called with a RawMessage or
     * a RawText object, otherwise returns a string.
     *
     * 获取调试文本形状的文本。如果 `setText` 是通过 `RawMessage` 或 `RawText` 对象调用的，则返回调试文本的 `RawText`，否则返回字符串。
     */
    readonly text: RawMessage | string;
    /**
     * @remarks
     * If set to true, the text primitive will render the back-face
     * of the text. Defaults to true but will always be false if
     * 'useRotation' is set to false.
     *
     * 如果设置为 `true`，文本图元将渲染文本的背面。默认为 `true`，但如果 `'useRotation'` 设置为 `false`，则始终为 `false`。
     */
    textBackfaceVisible: boolean;
    /**
     * @remarks
     * If set to true, the text will not face the camera and
     * instead will use the rotation from the shape.
     *
     * 如果设置为 `true`，文本将不会面向摄像机，而是使用形状的旋转角度。
     */
    useRotation: boolean;
    constructor(location: DimensionLocation | Vector3, text: RawMessage | string);
    /**
     * @remarks
     * Sets the text to display.
     *
     * 设置要显示的文本。
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link RawMessageError}
     */
    setText(text: RawMessage | string): void;
}

/**
 * This manager is used to add, remove or query temporary
 * ticking areas to a dimension. These ticking areas are
 * limited by a fixed amount of ticking chunks per pack
 * independent of the command limits. Cannot modify or query
 * ticking areas added by other packs or commands.
 *
 * 该管理器用于向维度添加、移除或查询临时常加载区域。这些常加载区域受每个包固定数量的常加载区块限制，独立于命令限制。无法修改或查询由其他包或命令添加的常加载区域。
 */
export class TickingAreaManager {
    private constructor();
    /**
     * @remarks
     * The number of currently ticking chunks in this manager.
     *
     * 此管理器中当前常加载的区块数量。
     */
    readonly chunkCount: number;
    /**
     * @remarks
     * The maximum number of allowed ticking chunks. Overlapping
     * ticking area chunks do count towards total.
     *
     * 允许的最大常加载区块数量。重叠的常加载区域区块会计入总数。
     */
    readonly maxChunkCount: number;
    /**
     * @remarks
     * Creates a ticking area. Promise will return when all the
     * chunks in the area are loaded and ticking.
     *
     * 创建一个常加载区域。当区域中所有区块都已加载并开始常加载时，Promise 将返回。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link TickingAreaError}
     */
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    /**
     * @remarks
     * Gets all ticking areas added by this manager.
     *
     * 获取此管理器添加的所有常加载区域。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getAllTickingAreas(): TickingArea[];
    /**
     * @remarks
     * Tries to get specific ticking area by identifier.
     *
     * 尝试通过标识符获取特定的常加载区域。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    /**
     * @remarks
     * Returns true if the manager has enough chunk capacity for
     * the ticking area and false otherwise. Will also return false
     * if the length or width exceeds the 255 chunk limit.
     *
     * 如果管理器有足够的区块容量来容纳常加载区域，则返回 `true`，否则返回 `false`。如果长度或宽度超过 255 个区块的限制，也会返回 `false`。
     *
     * @worldMutation
     *
     */
    hasCapacity(options: TickingAreaOptions): boolean;
    /**
     * @remarks
     * Returns true if the identifier is already in the manager and
     * false otherwise.
     *
     * 如果标识符已存在于管理器中，则返回 `true`，否则返回 `false`。
     *
     * @worldMutation
     *
     */
    hasTickingArea(identifier: string): boolean;
    /**
     * @remarks
     * Removes all ticking areas added by this manager.
     *
     * 移除此管理器添加的所有常加载区域。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    removeAllTickingAreas(): void;
    /**
     * @remarks
     * Removes specific ticking area by unique identifier.
     *
     * 通过唯一标识符移除特定的常加载区域。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link TickingAreaError}
     */
    removeTickingArea(identifier: string | TickingArea): void;
}

/**
 * Represents a trigger for firing an event.
 *
 * 表示用于触发事件的触发器。
 */
export class Trigger {
    /**
     * @remarks
     * Event name of the trigger.
     *
     * 触发器的事件名称。
     */
    eventName: string;
    /**
     * @remarks
     * Creates a new trigger.
     *
     * 创建一个新的触发器。
     */
    constructor(eventName: string);
}

/**
 * Contains information related to changes to a trip wire trip.
 *
 * 包含与绊线被触发相关的信息。
 * @seeExample tripWireTripEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Whether or not the block has redstone power.
     *
     * 该方块是否具有红石信号。
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * The sources that triggered the trip wire to trip.
     *
     * 触发绊线的来源。
     */
    readonly sources: Entity[];
}

/**
 * Manages callbacks that are connected to when a trip wire is
 * tripped.
 *
 * 管理与绊线被触发时相关的回调。
 * @seeExample tripWireTripEvent.ts
 */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a trip wire is
     * tripped.
     *
     * 添加一个回调，当绊线被触发时调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a trip wire is
     * tripped.
     *
     * 移除一个在绊线被触发时调用的回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to a script watchdog
 * termination.
 *
 * 包含与脚本看门狗终止相关的信息。
 */
export class WatchdogTerminateBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the termination of the script
     * runtime. Note that depending on server configuration
     * settings, cancellation of the termination may not be
     * allowed.
     *
     * 如果设置为 `true`，取消脚本运行时的终止。请注意，根据服务器配置设置，可能不允许取消终止。
     */
    cancel: boolean;
    /**
     * @remarks
     * Contains the reason why a script runtime is to be
     * terminated.
     *
     * 包含脚本运行时将被终止的原因。
     */
    readonly terminateReason: WatchdogTerminateReason;
}

/**
 * @beta
 * Manages callbacks that are connected to a callback that will
 * be called when a script runtime is being terminated due to a
 * violation of the performance watchdog system.
 *
 * 管理与回调连接的回调，当脚本运行时因违反性能看门狗系统而被终止时，将调用该回调。
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a script runtime is
     * being terminated due to a violation of the performance
     * watchdog system.
     *
     * 添加一个回调，当脚本运行时因违反性能看门狗系统而被终止时调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     *
     * 此闭包以受限执行权限调用。
     * @returns
     * Closure that is called with restricted-execution privilege.
     *
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a script runtime
     * is being terminated due to a violation of the performance
     * watchdog system.
     *
     * 移除一个在脚本运行时因违反性能看门狗系统而被终止时调用的回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     *
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}

/**
 * Base class for waypoints displayed on the player's locator
 * bar. Waypoints can track locations or entities and are
 * rendered with customizable textures and colors.
 *
 * 显示在玩家定位栏上的路径点的基类。路径点可以跟踪位置或实体，并使用可自定义的纹理和颜色进行渲染。
 *
 * Waypoints act as shared handles that can be added to
 * multiple players' locator bars. When you modify a waypoint's
 * properties (such as color, texture, or enabled state), the
 * changes are reflected for all players who have that waypoint
 * in their locator bar. This allows you to efficiently manage
 * waypoints across multiple players without creating separate
 * instances for each player.
 *
 * 路径点作为共享句柄，可以添加到多个玩家的定位栏中。当你修改路径点的属性（如颜色、纹理或启用状态）时，所有在其定位栏中拥有该路径点的玩家都会看到这些更改。这使得你可以高效地跨多个玩家管理路径点，而无需为每个玩家创建单独的实例。
 */
export class Waypoint {
    private constructor();
    /**
     * @remarks
     * Optional {@link RGB} color tint applied to the waypoint
     * icon. If not specified, the waypoint uses its default color.
     *
     * 应用于路径点图标的可选 {@link RGB} 颜色色调。如果未指定，路径点将使用其默认颜色。
     *
     * @worldMutation
     *
     */
    color?: RGB;
    /**
     * @remarks
     * Controls whether the waypoint is currently displayed on the
     * player's screen. When disabled, the waypoint is hidden but
     * remains valid.
     *
     * 控制路径点当前是否显示在玩家的屏幕上。禁用时，路径点会被隐藏但仍保持有效。
     *
     * @worldMutation
     *
     */
    isEnabled: boolean;
    /**
     * @remarks
     * Returns whether the waypoint is currently valid. A waypoint
     * becomes invalid when its tracked entity is no longer valid.
     *
     * 返回路径点当前是否有效。当路径点跟踪的实体不再有效时，路径点将变为无效。
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * The {@link WaypointTextureSelector} that determines which
     * icon texture is displayed for the waypoint based on distance
     * or other criteria.
     *
     * 根据距离或其他条件确定路径点显示哪种图标纹理的 {@link WaypointTextureSelector}。
     *
     * @worldMutation
     *
     */
    textureSelector: WaypointTextureSelector;
    /**
     * @remarks
     * Gets the current {@link DimensionLocation} of the waypoint.
     * For entity waypoints, this returns the entity's current
     * position. For location waypoints, this returns the stored
     * location.
     *
     * 获取路径点的当前 {@link DimensionLocation}。对于实体路径点，返回实体的当前位置。对于位置路径点，返回存储的位置。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    getDimensionLocation(): DimensionLocation;
    /**
     * @remarks
     * Removes the waypoint from all locator bars it has been added
     * to. This affects all players who have this waypoint in their
     * locator bar.
     *
     * 从所有已添加的定位栏中移除该路径点。这会影响所有在其定位栏中拥有此路径点的玩家。
     *
     * @worldMutation
     *
     */
    remove(): void;
}

/**
 * Contains information related to changes in weather in the
 * environment.
 *
 * 包含与环境中天气变化相关的信息。
 */
export class WeatherChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension in which the weather has changed.
     *
     * 天气发生变化的维度。
     */
    readonly dimension: string;
    /**
     * @remarks
     * The weather type after the weather was changed.
     *
     * 天气变化后的天气类型。
     */
    readonly newWeather: WeatherType;
    /**
     * @remarks
     * The weather type before the weather was changed.
     *
     * 天气变化前的天气类型。
     */
    readonly previousWeather: WeatherType;
}

/**
 * Manages callbacks that are connected to weather changing.
 *
 * 管理与天气变化相关的回调。
 */
export class WeatherChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when weather changes.
     *
     * 添加一个回调，当天气变化时调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: WeatherChangeAfterEvent) => void): (arg0: WeatherChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when weather changes.
     *
     * 移除一个在天气变化时调用的回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WeatherChangeAfterEvent) => void): void;
}

/**
 * Contains information related to changes in weather in the
 * environment.
 *
 * 包含与环境中天气变化相关的信息。
 */
export class WeatherChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the weather change will be cancelled.
     *
     * 如果设置为 `true`，天气变化将被取消。
     */
    cancel: boolean;
    /**
     * @remarks
     * Sets the duration of the new weather (in ticks).
     *
     * 设置新天气的持续时间（以刻为单位）。
     */
    duration: number;
    /**
     * @remarks
     * The type of weather that will be applied.
     *
     * 将应用的天气类型。
     */
    newWeather: WeatherType;
    /**
     * @remarks
     * The type of weather that it was prior to the event being
     * fired.
     *
     * 事件触发之前的天气类型。
     */
    readonly previousWeather: WeatherType;
}

/**
 * Manages callbacks that are connected to before weather
 * changing.
 *
 * 管理与天气变化前相关的回调。
 */
export class WeatherChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before weather changes.
     *
     * 添加一个回调，将在天气变化前调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     *
     * 此闭包以受限执行权限调用。
     * @returns
     * Closure that is called with restricted-execution privilege.
     *
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before weather changes.
     *
     * 移除一个在天气变化前调用的回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     *
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}

/**
 * 表示一个世界。包含了世界的各种状态，即一系列维度以及 Minecraft 的环境。
 * 
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
    private constructor();
    /**
     * @remarks
     * Contains a set of events that are applicable to the entirety
     * of the world.  Event callbacks are called in a deferred
     * manner. Event callbacks are executed in read-write mode.
     *
     * @earlyExecution
     *
     */
    readonly afterEvents: WorldAfterEvents;
    /**
     * @beta
     * @remarks
     * Enables or disables cheats.
     *
     * @worldMutation
     *
     */
    allowCheats: boolean;
    /**
     * @remarks
     * Contains a set of events that are applicable to the entirety
     * of the world. Event callbacks are called immediately. Event
     * callbacks are executed in read-only mode.
     *
     * @earlyExecution
     *
     * @seeExample customCommand.ts
     */
    readonly beforeEvents: WorldBeforeEvents;
    /**
     * @remarks
     * The game rules that apply to the world.
     *
     */
    readonly gameRules: GameRules;
    readonly isHardcore: boolean;
    /**
     * @remarks
     * Manager for adding and removing primitive text objects in
     * the world.
     *
     */
    readonly primitiveShapesManager: PrimitiveShapesManager;
    /**
     * @remarks
     * 全局的、唯一的记分板对象。
     * 
     * Returns the general global scoreboard that applies to the
     * world.
     *
     */
    readonly scoreboard: Scoreboard;
    /**
     * @remarks
     * The world seed.
     *
     */
    readonly seed: string;
    /**
     * @beta
     * @remarks
     * Provides read-only access to the sound definitions loaded
     * for this world.
     *
     */
    readonly soundDefinitionRegistry: SoundDefinitionRegistry;
    /**
     * @remarks
     * Returns the manager for {@link Structure} related APIs.
     *
     */
    readonly structureManager: StructureManager;
    /**
     * @remarks
     * Manager for adding, removing and querying pack specific
     * ticking areas.
     *
     */
    readonly tickingAreaManager: TickingAreaManager;
    /**
     * @beta
     * @remarks
     * A method that is internal-only, used for broadcasting
     * specific messages between client and server.
     *
     * @worldMutation
     *
     * @param id
     * The message identifier.
     * @param value
     * The message.
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * Clears the set of dynamic properties declared for this
     * behavior pack within the world.
     *
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 获取自游戏开始以来流逝的时间（计算公式：`day*24000+daytime`）。
     * 时间的流逝受到游戏规则 `dodaylightcycle` 的影响。
     * 
     * Returns the absolute time since the start of the world.
     * @returns 自游戏开始以来流逝的时间，以刻为单位。
     *
     */
    getAbsoluteTime(): number;
    /**
     * @remarks
     * The aim-assist presets and categories that can be used in
     * the world.
     *
     */
    getAimAssist(): AimAssistRegistry;
    /**
     * @remarks
     * 获取一个包含了游戏中所有玩家的对象的数组。
     * 
     * Returns an array of all active players within the world.
     * @returns 返回包含了游戏中所有玩家的对象的数组。
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidArgumentError}
     */
    getAllPlayers(): Player[];
    /**
     * @remarks
     * Returns the current day.
     *
     * @returns
     * The current day, determined by the world time divided by the
     * number of ticks per day. New worlds start at day 0.
     */
    getDay(): number;
    /**
     * @remarks
     * Returns the default Overworld spawn location.
     *
     * @returns
     * The default Overworld spawn location. By default, the Y
     * coordinate is 32767, indicating a player's spawn height is
     * not fixed and will be determined by surrounding blocks.
     */
    getDefaultSpawnLocation(): Vector3;
    /**
     * @remarks
     * Gets the difficulty from the world.
     *
     * @returns
     * Returns the world difficulty.
     */
    getDifficulty(): Difficulty;
    /**
     * @remarks
     * 由 `dimensionId` 获取维度对象。
     * 
     * Returns a dimension object.
     *
     * @param dimensionId
     * 要获取的维度的标识符。
     * 
     * The name of the dimension. For example, "overworld",
     * "nether" or "the_end".
     * @returns
     * 与 `dimensionId` 关联的维度对象。
     * 
     * The requested dimension
     * @throws
     * 若 `dimensionId` 不与任何维度关联，抛出 `"Dimension '<dimensionId>' is invalid"`。
     *
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @remarks
     * 获取由 `identifier` 指定的世界中已定义的动态属性的值。
     * 
     * Returns a property value.
     *
     * @param identifier
     * 动态属性的标识符。
     * 
     * The property identifier.
     * @returns
     * 返回动态属性 `identifier` 的值。属性的值尚未设定时，返回 `undefined`。
     * 
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws
     * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"` 。
     * 
     * Throws if the given dynamic property identifier is not
     * defined.
     * @seeExample incrementDynamicProperty.ts
     * @seeExample incrementDynamicPropertyInJsonBlob.ts
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Gets a set of dynamic property identifiers that have been
     * set in this world.
     *
     * @returns
     * A string array of active dynamic property identifiers.
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * Gets the total byte count of dynamic properties. This could
     * potentially be used for your own analytics to ensure you're
     * not storing gigantic sets of dynamic properties.
     *
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * Returns an entity based on the provided id.
     *
     * @param id
     * The id of the entity.
     * @returns
     * The requested entity object.
     * @throws
     * Throws if the given entity id is invalid.
     */
    getEntity(id: string): Entity | undefined;
    /**
     * @remarks
     * Returns a manager capable of generating loot from an
     * assortment of sources.
     *
     * @returns
     * A loot table manager with a variety of loot generation
     * methods.
     */
    getLootTableManager(): LootTableManager;
    /**
     * @remarks
     * Returns the MoonPhase for the current time.
     *
     */
    getMoonPhase(): MoonPhase;
    /**
     * @remarks
     * Returns a map of pack setting name and value pairs.
     *
     * @earlyExecution
     *
     */
    getPackSettings(): Record<string, boolean | number | string>;
    /**
     * @remarks
     * 列出世界上的玩家，可使用 `options` 指定的实体查询选项对其进行筛选。
     * 
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * 可选的参数，用作于筛选指定条件的玩家。
     *
     * 注意，不能使用接口中的 `type`、`location`、`maxDistance`、`minDistance` 或 `volume` 属性。
     * 
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws
     * 若向 `options` 传入的对象含有 `type` 属性，抛出 `"command.generic.invalidPlayerType"`。
     * 
     * 若向 `options` 传入的对象含有 `location`、`maxDistance`、`minDistance` 或 `volume` 属性，抛出 `"EntityQueryOptions property '<property>' is incompatible with function world.getPlayers"`。
     * 
     * Throws if the provided EntityQueryOptions are invalid.
     *
     * {@link CommandError}
     *
     * {@link InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @remarks
     * 返回当前一天中的时间。
     * 
     * Returns the time of day.
     *
     * @returns
     * 当前一天中的时间，以刻为单位，为 `0` 至 `24000` 之间的整数。
     * 
     * The time of day, in ticks, between 0 and 24000.
     */
    getTimeOfDay(): number;
    /**
     * @remarks
     * 停止正在播放的音乐，并开始向玩家播放指定音乐。播放类别不为音乐的声音项目不会有任何效果。
     * 
     * Plays a particular music track for all players.
     *
     * @worldMutation
     *
     * @param trackId 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
     * @param musicOptions 可选，指定播放音乐使用的附加参数。
     * @throws This function can throw errors.
     *
     * {@link PropertyOutOfBoundsError}
     * @seeExample playMusicAndSound.ts
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 将音乐添加到播放列表。如果没有任何正在播放的音乐，将会开始播放音乐。播放列表中的音乐将会按照添加顺序播放（需要更多测试）。
     * 
     * Queues an additional music track for players. If a track is
     * not playing, a music track will play.
     *
     * @worldMutation
     *
     * @param trackId
     * 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
     * 
     * Identifier of the music track to play.
     * @param musicOptions
     * 可选，指定播放音乐使用的附加参数。
     * 
     * Additional options for the music track.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     *
     *
     * {@link PropertyOutOfBoundsError}
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 向所有玩家广播一条消息。
     * 
     * Sends a message to all players.
     *
     * @param message
     * 将要广播的一段消息。
     * 这段消息可能是一段字符串，或者符合 `RawMessage` 接口的对象，或是这两种类型的组合。
     * 
     * The message to be displayed.
     * @throws
     * 该方法在 `message` 格式不正确时会抛出错误。例如 `score` 的 `name` 为空字符串时。
     * 
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Sets the world time.
     *
     * @worldMutation
     *
     * @param absoluteTime
     * The world time, in ticks.
     */
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @remarks
     * Sets a default spawn location for all players.
     *
     * @worldMutation
     *
     * @param spawnLocation
     * Location of the spawn point. Note that this is assumed to be
     * within the overworld dimension.
     * @throws
     * Throws if the provided spawn location is out of bounds.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /**
     * @remarks
     * Sets the worlds difficulty.
     *
     * @worldMutation
     *
     * @param difficulty
     * The difficulty we want to set the world to.
     */
    setDifficulty(difficulty: Difficulty): void;
    /**
     * @remarks
     * Sets multiple dynamic properties with specific values.
     *
     * @param values
     * A Record of key value pairs of the dynamic properties to
     * set. If the data value is null, it will remove that property
     * instead.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    /**
     * @remarks
     * 为世界动态属性 `identifier` 设置一个值。
     * 
     * Sets a specified property to a value.
     *
     * @param identifier
     * 动态属性的标识符。
     * 
     * The property identifier.
     * @param value
     * 要设定的值，值的类型必须与动态属性注册的类型相同。若值为 null，该属性将被移除。
     * 
     * Data value of the property to set. If the value is null, it
     * will remove the property instead.
     * @throws
     * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"`。
     * 
     * 若动态属性的类型不符合值的类型，抛出 `"Type mismatch for dynamic property '<identifier>'"`。
     * 
     * 若动态属性的类型为字符串，且值在使用 UTF-8 编码后的字节长度大于动态属性所允许的最大长度，抛出 `"Maximum string length exceeded (<length>/<maxLength>) for dynamic property '<identifier>'"`。
     * 
     * Throws if the given dynamic property identifier is not
     * defined.
     *
     * {@link ArgumentOutOfBoundsError}
     * @seeExample incrementDynamicProperty.ts
     * @seeExample incrementDynamicPropertyInJsonBlob.ts
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Sets the time of day.
     *
     * @worldMutation
     *
     * @param timeOfDay
     * The time of day, in ticks, between 0 and 24000.
     * @throws
     * Throws if the provided time of day is not within the valid
     * range.
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    /**
     * @remarks
     * 停止客户端中正在播放的所有音乐曲目（需要更多测试）。
     * 
     * Stops any music tracks from playing.
     *
     * @worldMutation
     *
     */
    stopMusic(): void;
}

/**
 * Contains a set of events that are available across the scope
 * of the World.
 *
 * 包含一组在世界范围内可用的事件。
 */
export class WorldAfterEvents {
    private constructor();
    /**
     * @remarks
     * This event fires when a block container is closed.
     *
     * 此事件在方块容器关闭时触发。
     *
     * @earlyExecution
     *
     */
    readonly blockContainerClosed: BlockContainerClosedAfterEventSignal;
    /**
     * @remarks
     * This event fires when a block container is opened.
     *
     * 此事件在方块容器打开时触发。
     *
     * @earlyExecution
     *
     */
    readonly blockContainerOpened: BlockContainerOpenedAfterEventSignal;
    /**
     * @remarks
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     *
     * 此事件针对爆炸摧毁的每个方块位置触发。该事件在方块已被摧毁后触发。
     *
     * @earlyExecution
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a button is pushed.
     *
     * 此事件在按钮被按下时触发。
     *
     * @earlyExecution
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     *
     * 此事件在聊天消息已广播或发送给玩家后触发。
     *
     * @earlyExecution
     *
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     *
     * 此事件在已触发将更新实体组件定义状态的实体事件时触发。
     *
     * @earlyExecution
     *
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @remarks
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     *
     * 此事件在效果（如中毒）被添加到实体时触发。
     *
     * @earlyExecution
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity container is closed.
     *
     * 此事件在实体容器关闭时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityContainerClosed: EntityContainerClosedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity container is opened.
     *
     * 此事件在实体容器打开时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityContainerOpened: EntityContainerOpenedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity dies.
     *
     * 此事件在实体死亡时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly entityHeal: EntityHealAfterEventSignal;
    /**
     * @remarks
     * This event fires when entity health changes in any degree.
     *
     * 此事件在实体生命值发生任何程度的变化时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) a block.
     *
     * 此事件在实体击打（即近战攻击）方块时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) another entity.
     *
     * 此事件在实体击打（即近战攻击）另一个实体时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is hurt (takes damage).
     *
     * 此事件在实体受伤（受到伤害）时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity drops items.
     *
     * 此事件在实体掉落物品时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityItemDrop: EntityItemDropAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity picks up items.
     *
     * 此事件在实体拾取物品时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityItemPickup: EntityItemPickupAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is loaded.
     *
     * 此事件在实体加载时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is removed (for example, potentially
     * unloaded, or removed after being killed).
     *
     * 此事件在实体被移除时触发（例如，可能被卸载，或在被击杀后被移除）。
     *
     * @earlyExecution
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is spawned.
     *
     * 此事件在实体生成时触发。
     *
     * @earlyExecution
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity starts sneaking.
     *
     * 此事件在实体开始潜行时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityStartSneaking: EntityStartSneakingAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity stops sneaking.
     *
     * 此事件在实体停止潜行时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityStopSneaking: EntityStopSneakingAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity is tamed.
     *
     * 此事件在实体被驯服时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityTamed: EntityTamedAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly entityUpgrade: EntityUpgradeAfterEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     * 此事件在爆炸发生后触发。
     *
     * @earlyExecution
     *
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @remarks
     * This event fires when a world.gameRules property has
     * changed.
     *
     * 此事件在 `world.gameRules` 属性发生更改时触发。
     *
     * @earlyExecution
     *
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item completes charging.
     *
     * 此事件在可充能物品完成充能时触发。
     *
     * @earlyExecution
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item is released from
     * charging.
     *
     * 此事件在可充能物品从充能状态释放时触发。
     *
     * @earlyExecution
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item starts charging.
     *
     * 此事件在可充能物品开始充能时触发。
     *
     * @earlyExecution
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player successfully uses an item or
     * places a block by pressing the Use Item / Place Block
     * button. If multiple blocks are placed, this event will only
     * occur once at the beginning of the block placement. Note:
     * This event cannot be used with Hoe or Axe items.
     *
     * 此事件在玩家通过按下使用物品/放置方块按钮成功使用物品或放置方块时触发。如果放置了多个方块，此事件将仅在方块放置开始时触发一次。注意：此事件不能与锄或斧类物品一起使用。
     *
     * @earlyExecution
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item stops charging.
     *
     * 此事件在可充能物品停止充能时触发。
     *
     * @earlyExecution
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player releases the Use Item / Place
     * Block button after successfully using an item. Note: This
     * event cannot be used with Hoe or Axe items.
     *
     * 此事件在玩家成功使用物品后松开使用物品/放置方块按钮时触发。注意：此事件不能与锄或斧类物品一起使用。
     *
     * @earlyExecution
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     * 此事件在物品被玩家成功使用时触发。
     *
     * @earlyExecution
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @remarks
     * A lever has been pulled.
     *
     * 拉杆已被拉动。
     *
     * @earlyExecution
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is an internal implementation detail, and is
     * otherwise not currently functional.
     *
     * 此事件是一个内部实现细节，目前不具备其他功能。
     *
     * @earlyExecution
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is triggered when a pack setting is changed.
     *
     * 此事件在包设置发生更改时触发。
     *
     * @earlyExecution
     *
     */
    readonly packSettingChange: PackSettingChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a piston expands or retracts.
     *
     * 此事件在活塞伸出或收回时触发。
     *
     * @earlyExecution
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is broken by a player.
     *
     * 此事件针对玩家破坏的方块触发。
     *
     * @earlyExecution
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when an {@link InputButton} state is
     * changed.
     *
     * 此事件在 {@link InputButton} 状态发生更改时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;
    /**
     * @rc
     * @remarks
     * This event fires when a player cancels breaking a block.
     *
     * 此事件在玩家取消破坏方块时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerCancelBreakingBlock: PlayerCancelBreakingBlockAfterEventSignal;
    /**
     * @remarks
     * Fires when a player moved to a different dimension.
     *
     * 此事件在玩家移动到不同维度时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerEmote: PlayerEmoteAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player's selected slot changes.
     *
     * 此事件在玩家选中的槽位发生更改时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player's {@link InputMode} changes.
     *
     * 此事件在玩家的 {@link InputMode} 发生更改时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a players input permissions change.
     *
     * 此事件在玩家的输入权限发生更改时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
    /**
     * @remarks
     * An event for when a player interacts with a block.
     *
     * 玩家与方块交互时的事件。
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player interacts with an entity.
     *
     * 此事件在玩家与实体交互时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when an item gets added or removed to the
     * player's inventory.
     *
     * 此事件在物品被添加到玩家物品栏或从玩家物品栏移除时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     *
     * 此事件在玩家加入世界时触发。另请参阅 `playerSpawn`，了解另一个相关事件，可用于捕获玩家首次在世界中生成的情况。
     *
     * @earlyExecution
     *
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player leaves a world.
     *
     * 此事件在玩家离开世界时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is placed by a player.
     *
     * 此事件针对玩家放置的方块触发。
     *
     * @earlyExecution
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     *
     * 此事件在玩家生成或重生时触发。请注意，此事件中的一个额外标志将告诉你玩家是加入后立即生成还是重生。
     *
     * @earlyExecution
     *
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @rc
     * @remarks
     * This event fires when a player starts breaking a block.
     *
     * 此事件在玩家开始破坏方块时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerStartBreakingBlock: PlayerStartBreakingBlockAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerSwingStart: PlayerSwingStartAfterEventSignal;
    /**
     * @beta
     * @remarks
     * An event for when a player uses a named name tag on an
     * entity.
     *
     * 玩家在实体上使用已命名的命名牌时的事件。
     *
     * @earlyExecution
     *
     */
    readonly playerUseNameTag: PlayerUseNameTagAfterEventSignal;
    /**
     * @remarks
     * A pressure plate has popped back up (i.e., there are no
     * entities on the pressure plate.)
     *
     * 压力板已弹起（即压力板上没有任何实体）。
     *
     * @earlyExecution
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @remarks
     * A pressure plate has pushed (at least one entity has moved
     * onto a pressure plate.)
     *
     * 压力板已被压下（至少有一个实体移动到了压力板上）。
     *
     * @earlyExecution
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @remarks
     * This event fires when a projectile hits a block.
     *
     * 此事件在抛射物击中方块时触发。
     *
     * @earlyExecution
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a projectile hits an entity.
     *
     * 此事件在抛射物击中实体时触发。
     *
     * @earlyExecution
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A tracked sound's declared duration elapsed.
     *
     * 已跟踪的声明的持续时间已过去。
     *
     * @earlyExecution
     *
     */
    readonly soundCompleted: SoundCompletedAfterEventSignal;
    /**
     * @remarks
     * A target block was hit.
     *
     * 标靶方块已被击中。
     *
     * @earlyExecution
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @remarks
     * A trip wire was tripped.
     *
     * 绊线已被触发。
     *
     * @earlyExecution
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    /**
     * @remarks
     * This event will be triggered when the weather changes within
     * Minecraft.
     *
     * 此事件将在 Minecraft 内天气变化时触发。
     *
     * @earlyExecution
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly worldLoad: WorldLoadAfterEventSignal;
}

/**
 * 表示一系列触发于实际动作发生之前的事件。通常来说，即将触发的事件可被修改或取消。
 * 但请注意，在 before 类事件过程中，能够改变游戏状态的 API 将失效，试图调用将会抛出错误。
 * （例如：dimension.spawnEntity）
 * 
 * A set of events that fire before an actual action occurs. In
 * most cases, you can potentially cancel or modify the
 * impending event. Note that in before events any APIs that
 * modify gameplay state will not function and will throw an
 * error. (e.g., dimension.spawnEntity)
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     *
     * @earlyExecution
     *
     * @seeExample customCommand.ts
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * @remarks
     * This event is triggered after an event has been added to an
     * entity.
     *
     * @earlyExecution
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly entityHeal: EntityHealBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly entityHurt: EntityHurtBeforeEventSignal;
    /**
     * @remarks
     * This event fires before an entity picks up an item.
     *
     * @earlyExecution
     *
     */
    readonly entityItemPickup: EntityItemPickupBeforeEventSignal;
    /**
     * @remarks
     * Fires before an entity is removed from the world (for
     * example, unloaded or removed after being killed.)
     *
     * @earlyExecution
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * Fires before an entity is tamed.
     *
     * @earlyExecution
     *
     */
    readonly entityTamed: EntityTamedBeforeEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     * @earlyExecution
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     * @earlyExecution
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * This event fires before a block is broken by a player.
     *
     * @earlyExecution
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @remarks
     * Fires before a player interacts with a block.
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @remarks
     * Fires before a player interacts with an entity.
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks
     * Fires when a player leaves the game.
     *
     * @earlyExecution
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires before a block is placed by a player.
     *
     * @earlyExecution
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly weatherChange: WeatherChangeBeforeEventSignal;
}

export class WorldLoadAfterEvent {
    private constructor();
}

export class WorldLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}

/**
 * 轴对齐的包围盒。
 *
 * Axis-aligned bounding box.
 */
export interface AABB {
    /**
     * @remarks
     * 盒体的中心点。
     *
     * The centerpoint of the box.
     *
     */
    center: Vector3;
    /**
     * @remarks
     * 从中心点到盒体边界的绝对距离。相当于盒体长度、高度和宽度的一半。始终被视为正值。
     *
     * Absolute distance from the centerpoint to the bounds of the
     * box. Equivalent to half of the box's length, height and
     * width. Will always be treated as positive.
     *
     */
    extent: Vector3;
}

/**
 * 用于创建相机动画。
 *
 * Used to create camera animations.
 */
export interface AnimationOptions {
    /**
     * @remarks
     * 相机动画的关键帧。
     *
     * Key frames for the camera animation.
     *
     */
    animation: SplineAnimation;
    /**
     * @remarks
     * 相机动画的总时长，以秒为单位。
     *
     * Total time of the camera animation in seconds.
     *
     */
    totalTimeSeconds: number;
}

export interface BiomeFilter {
    excludeBiomes?: string[];
    excludeTags?: string[];
    includeBiomes?: string[];
    includeTags?: string[];
}

/**
 * @rc
 * 包含用于 `dimension.findNearestBiome` API 搜索的额外选项。
 *
 * Contains additional options for searches for the
 * dimension.findNearestBiome API.
 */
export interface BiomeSearchOptions {
    /**
     * @remarks
     * 要在其中搜索的包围体积大小。
     *
     * Bounding volume size to look within.
     *
     */
    boundingSize?: Vector3;
}

/**
 * `BlockBoundingBox` 是一个接口，表示一个轴对齐的矩形 AABB。
 * `BlockBoundingBox` 假设它在创建时处于有效状态（min <= max），但无法保证这一点（除非使用相关的 {@link BlockBoundingBoxUtils} 工具函数创建）。
 * min/max 坐标表示矩形对角相对的顶点。
 * `BlockBoundingBox` 并不表示方块——它与任何类型无关，只是一个数学结构——因此一个
 * ( 0,0,0 ) -> ( 0,0,0 )
 * 的矩形其大小为 ( 0,0,0 )（与非常相似的 {@link BlockVolume} 对象不同）。
 *
 * A BlockBoundingBox is an interface to an object which
 * represents an AABB aligned rectangle.
 * The BlockBoundingBox assumes that it was created in a valid
 * state (min <= max) but cannot guarantee it (unless it was
 * created using the associated {@link BlockBoundingBoxUtils}
 * utility functions.
 * The min/max coordinates represent the diametrically opposite
 * corners of the rectangle.
 * The BlockBoundingBox is not a representation of blocks - it
 * has no association with any type, it is just a mathematical
 * construct - so a rectangle with
 * ( 0,0,0 ) -> ( 0,0,0 )
 * has a size of ( 0,0,0 ) (unlike the very similar {@link
 * BlockVolume} object)
 */
export interface BlockBoundingBox {
    /**
     * @remarks
     * 一个 {@link Vector3}，表示矩形的最大角。
     *
     * A {@link Vector3} that represents the largest corner of the
     * rectangle
     *
     */
    max: Vector3;
    /**
     * @remarks
     * 一个 {@link Vector3}，表示矩形的最小角。
     *
     * A {@link Vector3} that represents the smallest corner of the
     * rectangle
     *
     */
    min: Vector3;
}

/**
 * 用于过滤方块容器访问事件的选项。
 *
 * Options used to filter block container access events.
 */
export interface BlockContainerAccessEventOptions {
    /**
     * @remarks
     * 如果存在，将过滤哪些容器访问源可以触发该事件。
     *
     * If present will filter which container access sources can
     * trigger the event.
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 如果存在，将过滤哪些容器方块可以触发该事件。
     *
     * If present will filter which container blocks can trigger
     * the event.
     *
     */
    blockFilter?: BlockFilter;
}

/**
 * 包含将为方块触发的一组事件。
 * 此对象必须使用 `BlockRegistry` 进行绑定。
 *
 * Contains a set of events that will be raised for a block.
 * This object must be bound using the BlockRegistry.
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * 该函数将在玩家放置方块之前被调用。
     *
     * This function will be called before a player places the
     * block.
     *
     */
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters) => void;
    onBlockStateChange?: (arg0: BlockComponentBlockStateChangeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在特定方块被破坏时被调用。
     * 方块置换的变化不会触发此事件。
     * 仅当使用破坏模式更改方块置换时，`Fill` 命令和 `SetBlock` 命令才会触发此事件。
     * 具有 `minecraft:replaceable` 组件的自定义方块在被替换时不会触发此事件。
     *
     * This function will be called when a specific block is
     * destroyed.
     * Changes in block permutations will not trigger this event.
     * Fill Command and SetBlock Command can trigger this event
     * when changing a block permutation only when using destroy
     * mode.
     * Custom blocks with the "minecraft:replaceable" component
     * will not trigger the event when replaced.
     *
     */
    onBreak?: (arg0: BlockComponentBlockBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在世界中的实体向此方块触发事件时被调用。
     *
     * This function will be called when an entity fires an event
     * to this block in the world.
     *
     */
    onEntity?: (arg0: BlockComponentEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在实体落到此自定义组件所绑定的方块上时被调用。
     *
     * This function will be called when an entity falls onto the
     * block that this custom component is bound to.
     *
     */
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在此自定义组件所绑定的方块被放置时被调用。
     *
     * This function will be called when the block that this custom
     * component is bound to is placed.
     *
     */
    onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;
    onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在玩家成功与此自定义组件所绑定的方块交互时被调用。
     *
     * This function will be called when a player sucessfully
     * interacts with the block that this custom component is bound
     * to.
     *
     */
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在方块随机 tick 时被调用。
     *
     * This function will be called when a block randomly ticks.
     *
     */
    onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当发生 `onRedstoneUpdate` 引擎事件时，如果方块具有 `minecraft:redstone_consumer` 组件且红石信号强度 >= 该组件的 `min_power` 字段，则将调用此函数。
     *
     * This function will be called when an 'onRedstoneUpdate'
     * engine event occurs if the block has a
     * `minecraft:redstone_consumer` component and the redstone
     * signal strength is >= to the components `min_power` field.
     *
     */
    onRedstoneUpdate?: (arg0: BlockComponentRedstoneUpdateEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在实体离开此自定义组件所绑定的方块时被调用。
     *
     * This function will be called when an entity steps off the
     * block that this custom component is bound to.
     *
     */
    onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在实体踏上此自定义组件所绑定的方块时被调用。
     *
     * This function will be called when an entity steps onto the
     * block that this custom component is bound to.
     *
     */
    onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 该函数将在方块 tick 时被调用。
     *
     * This function will be called when a block ticks.
     *
     */
    onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;
}

/**
 * 包含注册方块事件的可选参数。
 *
 * Contains optional parameters for registering a block event.
 */
export interface BlockEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的方块类型与此参数匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if the
     * impacted block's type matches this parameter.
     *
     */
    blockTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的方块置换与此参数匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if the
     * impacted block's permutation matches this parameter.
     *
     */
    permutations?: BlockPermutation[];
}

/**
 * 包含方块填充操作的额外选项。
 *
 * Contains additional options for a block fill operation.
 */
export interface BlockFillOptions {
    /**
     * @remarks
     * 指定后，填充操作将包括/排除添加到方块过滤器中的方块。
     *
     * When specified, the fill operation will include / exclude
     * the blocks added to the block filter.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 当为 `true` 时，如果部分填充体积超出已加载区块边界，`fillBlocks` 不会报错，而是仅填充位于已加载区块边界内的方块，并忽略边界外的方块。
     *
     * When true fillBlocks will not error if part of the fill
     * volume is outside of loaded chunks bounds. Instead it will
     * just fill the blocks that are inside the loaded chunk bounds
     * and ignoring blocks outside.
     *
     */
    ignoreChunkBoundErrors?: boolean;
}

/**
 * 根据类型、标签或置换来包含或排除方块的选项。
 * 如果没有添加包含选项，将选择所有未被排除选项拒绝的方块。
 * 如果至少添加了一个包含选项，方块必须匹配至少一个包含选项才能不被拒绝。
 *
 * Options to include or exclude blocks based on type, tag or
 * permutation. If no include options are added it will select
 * all blocks that are not rejected by the exclude options. If
 * at least one include option is added the block must match
 * one of the include options to not be rejected.
 */
export interface BlockFilter {
    /**
     * @remarks
     * 如果匹配其中任何一个，过滤器应拒绝的方块置换数组。
     *
     * Array of block permutations that the filter should reject if
     * any matches.
     *
     */
    excludePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 如果匹配其中任何一个，过滤器应拒绝的方块标签数组。
     *
     * Array of block tags that the filter should reject if any
     * matches.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 如果匹配其中任何一个，过滤器应拒绝的方块类型数组。
     *
     * Array of block types that the filter should reject if any
     * matches.
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 如果至少匹配其中一个，过滤器应选择的方块置换数组。
     *
     * Array of block permutations that the filter should select if
     * at least one matches.
     *
     */
    includePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 如果至少匹配其中一个，过滤器应选择的方块标签数组。
     *
     * Array of block tags that the filter should select if at
     * least one matches.
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 如果至少匹配其中一个，过滤器应选择的方块类型数组。
     *
     * Array of block types that the filter should select if at
     * least one matches.
     *
     */
    includeTypes?: string[];
}

/**
 * 包含方块被击中事件的更多信息。
 *
 * Contains more information for events where a block is hit.
 */
export interface BlockHitInformation {
    /**
     * @remarks
     * 被击中的方块。
     *
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * 被击中的方块面。
     *
     * Face of the block that was hit.
     *
     */
    face: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的位置。
     *
     * Location relative to the bottom north-west corner of the
     * block.
     *
     */
    faceLocation: Vector3;
}

/**
 * @beta
 * 在体积中查询方块的选项。扩展了 `BlockFilter`，增加了基于距离位置的额外排序和限制选项。
 *
 * Options for querying blocks in a volume. Extends BlockFilter
 * with additional sorting and limiting options based on
 * distance from a location.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockQueryOptions extends BlockFilter {
    /**
     * @remarks
     * 如果指定，则返回距离位置最近的 N 个方块。必须大于 0。不能与 `farthest` 同时使用。需要设置 `location`。
     *
     * If specified, returns the closest N blocks to the location.
     * Must be greater than 0. Cannot be used with farthest.
     * Requires location to be set.
     *
     */
    closest?: number;
    /**
     * @remarks
     * 如果指定，则返回距离位置最远的 N 个方块。必须大于 0。不能与 `closest` 同时使用。需要设置 `location`。
     *
     * If specified, returns the farthest N blocks from the
     * location. Must be greater than 0. Cannot be used with
     * closest. Requires location to be set.
     *
     */
    farthest?: number;
    /**
     * @remarks
     * 用作最近或最远距离计算的参考点位置。当指定了 `closest` 或 `farthest` 时需要设置。
     *
     * Location used as the reference point for closest or farthest
     * distance calculations. Required when closest or farthest is
     * specified.
     *
     */
    location?: Vector3;
}

/**
 * 包含方块射线投射命中结果的信息。
 *
 * Contains information for block raycast hit results.
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * 被命中的方块。
     *
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * 被命中的方块面。
     *
     * Face of the block that was hit.
     *
     */
    face: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的命中位置。
     *
     * Hit location relative to the bottom north-west corner of the
     * block.
     *
     */
    faceLocation: Vector3;
}

/**
 * 包含配置方块射线投射查询的额外选项。
 *
 * Contains additional options for configuring a block raycast
 * query.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockRaycastOptions extends BlockFilter {
    /**
     * @remarks
     * 如果为 `true`，液体方块将被视为可以"阻挡"射线投射的方块。
     *
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * 如果为 `true`，像藤蔓和花朵这类可穿过的方块将被视为可以"阻挡"射线投射的方块。
     *
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * 处理射线投射的最大距离，以方块为单位。
     *
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}

/**
 * 用于将相机附加到非玩家实体上。
 *
 * Used to attach the camera to a non player entity.
 */
export interface CameraAttachOptions {
    /**
     * @remarks
     * 设置一个相机要追踪的非玩家实体。
     *
     * Set a non player entity for the camera to target.
     *
     */
    entity: Entity;
    /**
     * @remarks
     * 您要追踪的实体的位置（例如头部、脚部、眼睛）。
     *
     * The location of the entity that you want to target (eg.
     * head, feet, eyes).
     *
     */
    locator: EntityAttachPoint;
}

/**
 * 用于启动全屏颜色淡入淡出。
 *
 * Used to initiate a full-screen color fade.
 */
export interface CameraFadeOptions {
    /**
     * @remarks
     * 要使用的淡入淡出颜色。
     *
     * Fade color to use.
     *
     */
    fadeColor?: RGB;
    /**
     * @remarks
     * 淡入、保持和淡出的时间，以秒为单位。
     *
     * Time in seconds for the fade-in, hold, and fade-out seconds.
     *
     */
    fadeTime?: CameraFadeTimeOptions;
}

/**
 * 包含淡入淡出过渡的时间。
 *
 * Contains timings for a fade transition.
 */
export interface CameraFadeTimeOptions {
    /**
     * @remarks
     * 淡入的时间，以秒为单位。
     *
     * Time, in seconds, for a fade-in.
     *
     */
    fadeInTime: number;
    /**
     * @remarks
     * 淡出的时间，以秒为单位。
     *
     * Time, in seconds, for a fade-out.
     *
     */
    fadeOutTime: number;
    /**
     * @remarks
     * 保持全屏颜色的时间，以秒为单位。
     *
     * Time, in seconds, to hold the full screen color.
     *
     */
    holdTime: number;
}

/**
 * 控制第三人称吊臂预设的支点和偏移的选项。
 *
 * Options to control pivot points and offsets of the third
 * person boom preset.
 */
export interface CameraFixedBoomOptions {
    /**
     * @remarks
     * 将支点更改为距离玩家 <x, y, z> 的位置。
     *
     * Changes the pivot point to be <x, y, z> away from the
     * player.
     *
     */
    entityOffset?: Vector3;
    /**
     * @remarks
     * 将相机从中心偏移 <x, y>。
     *
     * Offsets the camera from center by <x, y>.
     *
     */
    viewOffset?: Vector2;
}

/**
 * 用于更改当前相机的视野。
 *
 * Used to change the field of view of the current camera.
 */
export interface CameraFovOptions {
    easeOptions?: EaseOptions;
    /**
     * @remarks
     * 设置视野的值。
     *
     * Set a value for the field of view.
     *
     */
    fov?: number;
}

export interface CameraSetFacingOptions {
    easeOptions?: EaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}

export interface CameraSetLocationOptions {
    easeOptions?: EaseOptions;
    location: Vector3;
}

export interface CameraSetPosOptions {
    easeOptions?: EaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}

export interface CameraSetRotOptions {
    easeOptions?: EaseOptions;
    location?: Vector3;
    rotation: Vector2;
}

/**
 * @beta
 * 通过 `Camera.addShake` 对玩家相机应用相机抖动效果的选项。每次调用 `addShake` 都会为指定的 `type` 排队一个新的独立抖动事件；位置抖动和旋转抖动分别在各自的队列中独立跟踪并并发运行。任何时刻的渲染强度是该类型所有活动事件强度的总和，上限为 `4.0`。事件在 `duration` 时间过后自然过期。
 *
 * Options for applying a camera shake effect to a player's
 * camera via `Camera.addShake`. Each call to `addShake` queues
 * a new independent shake event for the specified `type`;
 * positional and rotational shakes are tracked in separate
 * queues and run concurrently. The rendered intensity at any
 * moment is the sum of all active events' intensities for that
 * type, capped at `4.0`. Events expire naturally when their
 * `duration` elapses.
 */
export interface CameraShakeOptions {
    /**
     * @remarks
     * 此抖动事件的持续时间，以秒为单位。必须为正值。
     *
     * How long this shake event lasts, in seconds. Must be a
     * positive value.
     *
     */
    duration: number;
    /**
     * @remarks
     * 此抖动事件的强度。必须为正值，最大值为 `4.0`。同一 `type` 的多个活动事件强度会累加，上限为 `4.0`。
     *
     * The intensity of this shake event. Must be a positive value
     * with a maximum of `4.0`. Multiple active events of the same
     * `type` are summed, capped at `4.0`.
     *
     */
    intensity: number;
    /**
     * @remarks
     * 要应用的相机抖动类型。位置抖动和旋转抖动维护各自独立的事件队列并并发应用，因此添加每种类型的抖动不会使它们相互干扰。
     *
     * The type of camera shake to apply. Positional and rotational
     * shakes maintain separate event queues and are applied
     * concurrently, so adding a shake of each type does not cause
     * them to interfere with one another.
     *
     */
    type: CameraShakeType;
}

/**
 * 用于使用自由相机瞄准一个实体。
 *
 * Used to target an entity with a free camera.
 */
export interface CameraTargetOptions {
    /**
     * @remarks
     * 设置一个从目标实体中心的 <x, y, z> 偏移。
     *
     * Set an <x, y, z> offset from the target entity's center.
     *
     */
    offsetFromTargetCenter?: Vector3;
    /**
     * @remarks
     * 您要瞄准的单个实体。
     *
     * The singular entity you want to target.
     *
     */
    targetEntity: Entity;
}

/**
 * @beta
 * 此接口定义了 {@link CompoundBlockVolume} 中的一个条目，表示一个正空间或负空间的体积。
 *
 * This interface defines an entry into the {@link
 * CompoundBlockVolume} which represents a volume of positive
 * or negative space.
 *
 */
export interface CompoundBlockVolumeItem {
    /**
     * @remarks
     * "action" 定义了方块体积在复合体积堆栈中的表示方式。
     * "Add" 创建一个被正向选择的方块体积。
     * "Subtract" 创建一个表示总体复合体积中空洞或负空间的方块体积。
     *
     * The 'action' defines how the block volume is represented in
     * the compound block volume stack.
     * 'Add' creates a block volume which is positively selected
     * 'Subtract' creates a block volume which represents a hole or
     * negative space in the overall compound block volume.
     *
     */
    action?: CompoundBlockVolumeAction;
    /**
     * @remarks
     * 位置关系枚举决定了指定的 `BlockVolume` 是相对于父复合体积原点定位，还是位于绝对世界坐标中。
     *
     * The relativity enumeration determines whether the
     * BlockVolume specified is positioned relative to the parent
     * compound block volume origin, or in absolute world space.
     *
     */
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    /**
     * @remarks
     * 空间的体积。
     *
     * The volume of space
     *
     */
    volume: BlockVolume;
}

/**
 * 表示容器访问的来源。
 *
 * Represents the source of a container access.
 */
export interface ContainerAccessSource {
    /**
     * @remarks
     * 触发容器访问的实体。
     *
     * The entity that triggered the container access.
     *
     */
    entity?: Entity;
}

/**
 * 用于过滤容器访问源的选项。
 *
 * Options for use when filtering container access sources.
 */
export interface ContainerAccessSourceFilter {
    /**
     * @remarks
     * 访问容器的源实体的过滤选项。
     *
     * Filter options for the source entity accessing the
     * container.
     *
     */
    entityFilter?: EntityFilter;
}

/**
 * 在容器操作中若违反则会抛出错误的规则。
 *
 * Rules that if broken on container operations will throw an
 * error.
 */
export interface ContainerRules {
    /**
     * @remarks
     * 定义容器中唯一允许的物品。如果为空，则所有物品都允许放入容器。
     *
     * Defines the items that are exclusively allowed in the
     * container. If empty all items are allowed in the container.
     *
     */
    allowedItems: string[];
    /**
     * @remarks
     * 确定其他存储物品是否可以放入该容器。
     *
     * Determines whether other storage items can be placed into
     * the container.
     *
     */
    allowNestedStorageItems: boolean;
    /**
     * @remarks
     * 定义容器中不允许的物品。
     *
     * Defines the items that are not allowed in the container.
     *
     */
    bannedItems: string[];
    /**
     * @remarks
     * 定义存储容器中所有物品的最大允许总重量。如果未定义，容器没有重量限制。
     *
     * Defines the maximum allowed total weight of all items in the
     * storage item container. If undefined container has no weight
     * limit.
     *
     */
    weightLimit?: number;
}

/**
 * 定义自定义命令，包括名称、权限和参数。
 *
 * Define the custom command, including name, permissions, and
 * parameters.
 */
export interface CustomCommand {
    /**
     * @remarks
     * 运行此命令需要开启作弊。默认为 `true`。
     *
     * Cheats must be enabled to run this command. Defaults to
     * true.
     *
     */
    cheatsRequired?: boolean;
    /**
     * @remarks
     * 在命令行上显示的命令描述。
     *
     * Command description as seen on the command line.
     *
     */
    description: string;
    /**
     * @remarks
     * 必填命令参数列表。
     *
     * List of mandatory command parameters.
     *
     */
    mandatoryParameters?: CustomCommandParameter[];
    /**
     * @remarks
     * 命令的名称。需要命名空间。
     *
     * The name of the command. A namespace is required.
     *
     */
    name: string;
    /**
     * @remarks
     * 可选命令参数列表。
     *
     * List of optional command parameters.
     *
     */
    optionalParameters?: CustomCommandParameter[];
    /**
     * @remarks
     * 执行命令所需的权限等级。
     *
     * The permission level required to execute the command.
     *
     */
    permissionLevel: CommandPermissionLevel;
}

/**
 * 自定义命令预期的每个参数的定义。
 *
 * Definition for each parameter expected by the custom
 * command.
 */
export interface CustomCommandParameter {
    /**
     * @beta
     * @remarks
     * 当 {@link CustomCommandParamType} 为 `Enum` 时，可用于引用枚举名称。允许参数名称与枚举名称不同。
     *
     * Can be used to reference the enum name when {@link
     * CustomCommandParamType} is 'Enum'. Allows the parameter name
     * to be different from the enum name.
     *
     */
    enumName?: string;
    /**
     * @remarks
     * 参数在命令行上显示的名称。
     *
     * The name of parameter as it appears on the command line.
     *
     */
    name: string;
    /**
     * @remarks
     * 参数的数据类型。
     *
     * The data type of the parameter.
     *
     */
    type: CustomCommandParamType;
}

/**
 * 从自定义命令回调函数返回的接口。
 *
 * Interface returned from custom command callback function.
 */
export interface CustomCommandResult {
    /**
     * @remarks
     * 命令执行后显示在聊天中的消息。
     *
     * Message displayed to chat after command execution.
     *
     */
    message?: string;
    /**
     * @remarks
     * 命令执行成功或失败。决定状态消息的显示方式。
     *
     * Command execution Success or Failure. Determines how the
     * status message is displayed.
     *
     */
    status: CustomCommandStatus;
}

export interface CustomTexture {
    /**
     * @remarks
     * 图标的相对高度。值必须在 0.0 到 1.0 之间（含）。
     *
     * The height of the icon, in relative units. Value must be
     * between 0.0 and 1.0, inclusive.
     *
     * Bounds: [0, 1]
     */
    iconHeight: number;
    /**
     * @remarks
     * 图标的相对宽度。值必须在 0.0 到 1.0 之间（含）。
     *
     * The width of the icon, in relative units. Value must be
     * between 0.0 and 1.0, inclusive.
     *
     * Bounds: [0, 1]
     */
    iconWidth: number;
    /**
     * @remarks
     * 自定义纹理的资源路径。这应是一个有效的纹理资源字符串路径。
     *
     * The resource path to the custom texture. This should be a
     * valid string path to a texture asset.
     *
     */
    path: string;
}

/**
 * 包含对实体组件定义状态的一组更新。
 *
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export interface DefinitionModifier {
    /**
     * @remarks
     * 获取通过此定义修改将要添加的组件组列表。
     *
     * Retrieves the list of component groups that will be added
     * via this definition modification.
     *
     */
    addedComponentGroups: string[];
    /**
     * @remarks
     * 通过此定义修改将要移除的组件组列表。
     *
     * The list of component groups that will be removed via this
     * definition modification.
     *
     */
    removedComponentGroups: string[];
    /**
     * @beta
     * @remarks
     * 通过此更新将要触发的实体定义事件列表。
     *
     * The list of entity definition events that will be fired via
     * this update.
     *
     */
    triggers: Trigger[];
}

/**
 * 世界中的精确坐标，包含其维度和位置。
 *
 * An exact coordinate within the world, including its
 * dimension and location.
 */
export interface DimensionLocation {
    /**
     * @remarks
     * 此坐标关联的维度。
     *
     * Dimension that this coordinate is associated with.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 此维度位置的 X 分量。
     *
     * X component of this dimension-location.
     *
     */
    x: number;
    /**
     * @remarks
     * 此维度位置的 Y 分量。
     *
     * Y component of this dimension-location.
     *
     */
    y: number;
    /**
     * @remarks
     * 此维度位置的 Z 分量。
     *
     * Z component of this dimension-location.
     *
     */
    z: number;
}

/**
 * 包含与位置和/或旋转之间缓动相关的选项。
 *
 * Contains options associated with easing between positions
 * and/or rotations.
 */
export interface EaseOptions {
    /**
     * @remarks
     * 缓动操作的时间。
     *
     * Time for the ease operation.
     *
     */
    easeTime?: number;
    /**
     * @remarks
     * 要使用的缓动操作类型。
     *
     * Type of ease operation to use.
     *
     */
    easeType?: EasingType;
}

/**
 * 此接口表示应用于物品的特定等级附魔。
 *
 * This interface represents a specific leveled enchantment
 * that is applied to an item.
 */
export interface Enchantment {
    /**
     * @remarks
     * 此附魔实例的等级。
     *
     * The level of this enchantment instance.
     *
     */
    level: number;
    /**
     * @remarks
     * 此实例的附魔类型。
     *
     * The enchantment type of this instance.
     *
     */
    type: EnchantmentType;
}

/**
 * 通过抛射物造成伤害时的额外选项。
 *
 * Additional options for when damage has been applied via a
 * projectile.
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * @remarks
     * 可选的发射抛射物的实体。
     *
     * Optional entity that fired the projectile.
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * 造成伤害的抛射物。
     *
     * Projectile that caused damage.
     *
     */
    damagingProjectile: Entity;
}

/**
 * 伤害事件的附加描述和元数据。
 *
 * Additional descriptions and metadata for a damage event.
 */
export interface EntityApplyDamageOptions {
    /**
     * @remarks
     * 伤害的底层原因。
     *
     * Underlying cause of the damage.
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * 可选的造成伤害的实体。
     *
     * Optional entity that caused the damage.
     *
     */
    damagingEntity?: Entity;
}

/**
 * 用于过滤实体容器访问事件的选项。
 *
 * Options used to filter entity container access events.
 */
export interface EntityContainerAccessEventOptions {
    /**
     * @remarks
     * 如果存在，将过滤哪些容器访问源可以触发该事件。
     *
     * If present will filter which container access sources can
     * trigger the event.
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 如果存在，将过滤哪些实体容器可以触发该事件。
     *
     * If present will filter which entity containers can trigger
     * the event.
     *
     */
    entityFilter?: EntityFilter;
}

/**
 * 提供关于伤害如何应用于实体的信息。
 *
 * Provides information about how damage has been applied to an
 * entity.
 */
export interface EntityDamageSource {
    /**
     * @remarks
     * 伤害的原因枚举。
     *
     * Cause enumeration of damage.
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * 可选的造成伤害的实体。
     *
     * Optional entity that caused the damage.
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * 可能造成伤害的可选抛射物。
     *
     * Optional projectile that may have caused damage.
     *
     */
    damagingProjectile?: Entity;
}

/**
 * 指定用于注册实体数据驱动触发事件时使用的额外过滤器。
 *
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当实体与此集合中的实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的实体类型与此参数匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的触发事件与此参数中列出的事件之一匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     *
     */
    eventTypes?: string[];
}

/**
 * 包含实体效果的附加选项。
 *
 * Contains additional options for entity effects.
 */
export interface EntityEffectOptions {
    /**
     * @remarks
     * 效果的强度。
     *
     * The strength of the effect.
     *
     */
    amplifier?: number;
    /**
     * @remarks
     * 如果为 `true`，效果作用于实体时会显示粒子。
     *
     * If true, will show particles when effect is on the entity.
     *
     */
    showParticles?: boolean;
}

/**
 * 包含注册实体事件的可选参数。
 *
 * Contains optional parameters for registering an entity
 * event.
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当实体与此集合中的实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的实体类型与此参数匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
}

/**
 * 包含筛选实体的选项。
 *
 * Contains options for filtering entities.
 */
export interface EntityFilter {
    /**
     * @remarks
     * 排除匹配一个或多个指定系列的实体。
     *
     * Excludes entities that match one or more of the specified
     * families.
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * 如果实体的特定游戏模式与指定游戏模式匹配，则排除该实体。
     *
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     *
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * 排除名称与指定值之一匹配的实体。
     *
     * Excludes entities that have a name that match one of the
     * specified values.
     *
     */
    excludeNames?: string[];
    /**
     * @remarks
     * 排除带有与指定值之一匹配的标签的实体。
     *
     * Excludes entities with a tag that matches one of the
     * specified values.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 排除如果它们是指定类型之一的实体。
     *
     * Excludes entities if they are one of the specified types.
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 如果指定，则包含匹配所有指定系列的实体。
     *
     * If specified, includes entities that match all of the
     * specified families.
     *
     */
    families?: string[];
    /**
     * @remarks
     * 如果指定，则包含游戏模式与指定游戏模式匹配的实体。
     *
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * 如果指定，则仅包含水平旋转角度最多为此值的实体。
     *
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * 如果定义，仅返回等级最多为此值的玩家。
     *
     * If defined, only players that have at most this level are
     * returned.
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * 如果指定，仅返回垂直旋转角度最多为此值的实体。
     *
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * 如果指定，将仅包含水平旋转角度至少为此值的实体。
     *
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * 如果定义，仅返回等级至少为此值的玩家。
     *
     * If defined, only players that have at least this level are
     * returned.
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * 如果指定，将仅包含垂直旋转角度至少为此值的实体。
     *
     * If specified, will only include entities that have at least
     * this vertical rotation.
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * 包含具有指定名称的实体。
     *
     * Includes entities with the specified name.
     *
     */
    name?: string;
    propertyOptions?: EntityQueryPropertyOptions[];
    /**
     * @remarks
     * 获取/设置一组带有特定计分板目标过滤器的 `EntityQueryScoreOptions` 对象。
     *
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * 包含匹配所有指定标签的实体。
     *
     * Includes entities that match all of the specified tags.
     *
     */
    tags?: string[];
    /**
     * @remarks
     * 如果定义，则包含匹配此类型的实体。
     *
     * If defined, entities that match this type are included.
     *
     */
    type?: string;
}

/**
 * 包含注册实体治疗事件的可选参数。
 *
 * Contains optional parameters for registering an entity heal
 * event.
 */
export interface EntityHealEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当治疗原因匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for healing
     * causes that match.
     *
     */
    allowedHealCauses?: EntityHealCause[];
    /**
     * @remarks
     * 如果设置了此值，则仅当实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match.
     *
     */
    entityFilter?: EntityFilter;
}

/**
 * 包含被击中的实体的附加信息。
 *
 * Contains additional information about an entity that was
 * hit.
 */
export interface EntityHitInformation {
    /**
     * @remarks
     * 被击中的实体。
     *
     * Entity that was hit.
     *
     */
    entity?: Entity;
}

/**
 * 包含注册实体受伤后事件的可选参数。
 *
 * Contains optional parameters for registering an entity hurt
 * after event.
 */
export interface EntityHurtAfterEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当伤害原因匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for damage
     * causes that match.
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * 如果设置了此值，则仅当实体与此集合中的实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则仅当实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match.
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的实体类型与此参数匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
}

/**
 * 包含注册实体受伤前事件的可选参数。
 *
 * Contains optional parameters for registering an entity hurt
 * before event.
 */
export interface EntityHurtBeforeEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当伤害原因匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for damage
     * causes that match.
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * 如果设置了此值，则仅当实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match.
     *
     */
    entityFilter?: EntityFilter;
}

/**
 * 传递给 {@link EntityItemDropAfterEventSignal.subscribe} 的接口，用于过滤哪些事件会传递给所提供的回调函数。
 *
 * An interface that is passed into {@link
 * EntityItemDropAfterEventSignal.subscribe} that filters out
 * which events are passed to the provided callback.
 */
export interface EntityItemDropEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match.
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，则仅当事件中的物品匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if an item
     * in the event matches.
     *
     */
    itemFilter?: ItemFilter;
}

/**
 * 传递给 {@link EntityItemPickupAfterEventSignal.subscribe} 和 {@link EntityItemPickupBeforeEventSignal.subscribe} 的接口，用于过滤哪些事件会传递给所提供的回调函数。
 *
 * An interface that is passed into {@link
 * EntityItemPickupAfterEventSignal.subscribe} and {@link
 * EntityItemPickupBeforeEventSignal.subscribe} that filters
 * out which events are passed to the provided callback.
 */
export interface EntityItemPickupEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当实体匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire for entities
     * that match.
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，则仅当事件中的物品匹配时才会触发此事件。
     *
     * If this value is set, this event will only fire if an item
     * in the event matches.
     *
     */
    itemFilter?: ItemFilter;
}

/**
 * 包含在区域内选择实体的选项。
 * @seeExample blockConditional.ts
 * @seeExample findEntitiesHavingPropertyEqualsTo.ts
 * @seeExample playSoundChained.ts
 * @seeExample setScoreboardChained.ts
 * @seeExample summonMobChained.ts
 * @seeExample bounceSkeletons.ts
 * @seeExample tagsQuery.ts
 * @seeExample testThatEntityIsFeatherItem.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityQueryOptions extends EntityFilter {
    /**
     * @remarks
     * 限制返回的实体数量，按照此属性指定的最近 N 个实体来选择。查询选项对象上也必须指定 `location` 值。
     *
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    closest?: number;
    /**
     * @remarks
     * 限制返回的实体数量，按照此属性指定的最远 N 个实体来选择。查询选项对象上也必须指定 `location` 值。
     *
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    farthest?: number;
    /**
     * @remarks
     * 向查询添加一个种子位置，与 `closest`、`farthest`、`limit`、`volume` 和 `distance` 属性配合使用。
     *
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * 如果指定，则包含距离 `location` 属性中指定位置小于此距离的实体。
     *
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * 如果指定，则包含距离 `location` 属性中指定位置至少为此距离的实体。
     *
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * 与 `location` 结合使用，指定一个要包含的实体的长方体体积。
     *
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     *
     */
    volume?: Vector3;
}

export interface EntityQueryPropertyOptions {
    exclude?: boolean;
    propertyId: string;
    value?:
        | boolean
        | string
        | EqualsComparison
        | GreaterThanComparison
        | GreaterThanOrEqualsComparison
        | LessThanComparison
        | LessThanOrEqualsComparison
        | NotEqualsComparison
        | RangeComparison;
}

/**
 * 包含根据目标的分数筛选玩家的额外选项。
 *
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * 如果设置为 `true`，则此分数范围内的实体和玩家将从查询结果中排除。
     *
     * If set to true, entities and players within this score range
     * are excluded from query results.
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * 如果定义，仅包含分数等于或低于 `maxScore` 的玩家。
     *
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * 如果定义，仅包含分数等于或高于 `minScore` 的玩家。
     *
     * If defined, only players that have a score equal to or over
     * minScore are included.
     *
     */
    minScore?: number;
    /**
     * @remarks
     * 筛选的计分板目标标识符。
     *
     * Identifier of the scoreboard objective to filter on.
     *
     */
    objective?: string;
}

/**
 * 包含实体射线投射命中结果的信息。
 *
 * Contains information for entity raycast hit results.
 */
export interface EntityRaycastHit {
    /**
     * @remarks
     * 从射线原点到实体边界的距离。
     *
     * Distance from ray origin to entity bounds.
     *
     */
    distance: number;
    /**
     * @remarks
     * 被击中的实体。
     *
     * Entity that was hit.
     *
     */
    entity: Entity;
}

/**
 * 包含实体射线投射操作的额外选项。
 *
 * Contains additional options for an entity raycast operation.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityRaycastOptions extends EntityFilter {
    /**
     * @remarks
     * 如果为 `true`，方块将不被视为可以"阻挡"射线投射的方块。
     *
     * If true, blocks will not be considered as blocks that 'stop'
     * the raycast.
     *
     */
    ignoreBlockCollision?: boolean;
    /**
     * @remarks
     * 如果为 `true`，液体方块将被视为可以"阻挡"射线投射的方块。
     *
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * 如果为 `true`，像藤蔓和花朵这类可穿过的方块将被视为可以"阻挡"射线投射的方块。
     *
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * 处理射线投射的最大距离，以方块为单位。
     *
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}

/**
 * @beta
 * 用于过滤实体开始潜行和停止潜行事件的选项。
 *
 * Options used to filter entity start sneaking and stop
 * sneaking events.
 */
export interface EntitySneakingChangedEventOptions {
    entityFilter?: EntityFilter;
}

/**
 * @beta
 * 包含过滤实体驯服事件的选项。
 *
 * Contains options for filtering entity tamed events.
 */
export interface EntityTamedEventFilter {
    entityFilter?: EntityFilter;
    tamingEntityFilter?: EntityFilter;
}

/**
 * 根据它所追踪实体的状态控制路径点的可见性。这些规则允许通过实体条件（如潜行、隐形和死亡状态）来过滤路径点的可见性。
 *
 * Controls when a waypoint is visible based on the state of
 * the entity it tracks. These rules allow filtering waypoint
 * visibility by entity conditions like sneaking, invisibility,
 * and death state.
 */
export interface EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪实体死亡时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when the tracked
     * entity is dead. If undefined, defaults to true.
     *
     */
    showDead?: boolean;
    /**
     * @remarks
     * 控制当被追踪实体隐形时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when the tracked
     * entity is invisible. If undefined, defaults to true.
     *
     */
    showInvisible?: boolean;
    /**
     * @remarks
     * 控制当被追踪实体潜行时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when the tracked
     * entity is sneaking. If undefined, defaults to true.
     *
     */
    showSneaking?: boolean;
}

/**
 * 等于运算符。
 *
 * Equal to operator.
 */
export interface EqualsComparison {
    /**
     * @remarks
     * 进行比较的阈值。
     *
     * Threshold value compared against.
     *
     */
    equals: boolean | number | string;
}

/**
 * {@link Dimension.createExplosion} 方法的附加配置选项。
 * @seeExample createNoBlockExplosion.ts
 * @seeExample createExplosions.ts
 *
 * Additional configuration options for the {@link
 * Dimension.createExplosion} method.
 */
export interface ExplosionOptions {
    /**
     * @remarks
     * 爆炸是否也会影响水下区域。
     *
     * Whether parts of the explosion also impact underwater.
     *
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * 爆炸是否会破坏爆炸半径内的方块。
     *
     * Whether the explosion will break blocks within the blast
     * radius.
     *
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * 如果为 `true`，爆炸会在爆炸半径内或附近伴随火焰。
     *
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     *
     */
    causesFire?: boolean;
    /**
     * @remarks
     * 可选的爆炸来源。
     *
     * Optional source of the explosion.
     *
     */
    source?: Entity;
}

/**
 * 包含 `getBlockStandingOn` 和 `getAllBlocksStandingOn` 的额外选项。
 *
 * Contains additional options for getBlockStandingOn and
 * getAllBlocksStandingOn.
 */
export interface GetBlocksStandingOnOptions {
    /**
     * @remarks
     * 指定后，函数将根据方块过滤器来包括/排除返回的方块。
     *
     * When specified, the function will include / exclude what
     * block(s) are returned based on the block filter.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 如果为 `true`，所有高度为 0.2 或更低的方块（如活板门和地毯）将被忽略，并返回其下方的方块。
     *
     * If true, all blocks of height 0.2 or lower like trapdoors
     * and carpets will be ignored, and the block underneath will
     * be returned.
     *
     */
    ignoreThinBlocks?: boolean;
}

/**
 * 大于运算符。
 *
 * Greater than operator.
 */
export interface GreaterThanComparison {
    /**
     * @remarks
     * 进行比较的阈值。
     *
     * Threshold value compared against.
     *
     */
    greaterThan: number;
}

/**
 * 大于或等于运算符。
 *
 * Greater than or equal to operator.
 */
export interface GreaterThanOrEqualsComparison {
    /**
     * @remarks
     * 进行比较的阈值。
     *
     * Threshold value compared against.
     *
     */
    greaterThanOrEquals: number;
}

/**
 * 包含快捷栏事件的附加过滤选项。
 *
 * Contains additional filtering options for hotbar events.
 */
export interface HotbarEventOptions {
    /**
     * @remarks
     * 要考虑的插槽索引。值应在 0 到 8 之间（含）。如果未指定，则考虑所有插槽。
     *
     * The slot indexes to consider. Values should be between 0 and
     * 8, inclusive. If not specified, all slots are considered.
     *
     * Bounds: [0, 8]
     */
    allowedSlots?: number[];
}

/**
 * 传递给 {@link PlayerButtonInputAfterEventSignal.subscribe} 的接口，用于过滤哪些事件会传递给所提供的回调函数。
 *
 * An interface that is passed into {@link
 * PlayerButtonInputAfterEventSignal.subscribe} that filters
 * out which events are passed to the provided callback.
 */
export interface InputEventOptions {
    /**
     * @remarks
     * 回调函数应针对的按钮。如果未定义，回调函数将针对所有按钮被调用。
     *
     * The buttons the callback should be called for. If undefined,
     * the callback will be called for all buttons.
     *
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * 回调函数应针对的状态。如果未定义，回调函数将针对所有按钮状态被调用。
     *
     * The state the callback should be called for. If undefined,
     * the callback will be called for all button states.
     *
     */
    state?: ButtonState;
}

/**
 * 包含库存物品事件的额外过滤选项。
 *
 * Contains additional filtering options for inventory item
 * events.
 */
export interface InventoryItemEventOptions {
    /**
     * @remarks
     * 要考虑的插槽索引。值应为正数。如果未指定，则考虑所有插槽。
     *
     * The slot indexes to consider. Values should be positive
     * numbers. If not specified, all slots are considered.
     *
     * Bounds: [0, 1000]
     */
    allowedSlots?: number[];
    /**
     * @remarks
     * 要排除的物品名称。
     *
     * The names for the items to exclude.
     *
     */
    excludeItems?: string[];
    /**
     * @remarks
     * 要排除的物品标签。
     *
     * The item tags to exclude.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 标记为仅忽略数量变化。`true` 表示忽略数量变化，`false` 表示不忽略数量变化。
     *
     * Flag to specify to ignore quantity changes only. True to
     * ignore quantity changes, false to not ignore quantity
     * changes.
     *
     */
    ignoreQuantityChange?: boolean;
    /**
     * @remarks
     * 要考虑的物品名称。
     *
     * The item names to consider.
     *
     */
    includeItems?: string[];
    /**
     * @remarks
     * 要考虑的物品标签。
     *
     * The item tags to consider.
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 要考虑的玩家库存类型。
     *
     * The player inventory type to consider.
     *
     */
    inventoryType?: PlayerInventoryType;
}

/**
 * 包含将为物品触发的一组事件。
 * 此对象必须使用 `ItemComponentRegistry` 进行绑定。
 *
 * Contains a set of events that will be raised for an item.
 * This object must be bound using the ItemComponentRegistry.
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * 当包含此组件的物品击中实体并即将消耗耐久度时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is hitting an entity and about to take durability
     * damage.
     *
     */
    onBeforeDurabilityDamage?: (
        arg0: ItemComponentBeforeDurabilityDamageEvent,
        arg1: CustomComponentParameters,
    ) => void;
    /**
     * @remarks
     * 当包含此组件的物品的使用时长完成时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component's use duration was completed.
     *
     */
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被实体食用时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is eaten by an entity.
     *
     */
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品用于击中另一个实体时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is used to hit another entity.
     *
     */
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品用于挖掘方块时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is used to mine a block.
     *
     */
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被玩家使用时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is used by a player.
     *
     */
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品在方块上被使用时，将调用此函数。
     *
     * This function will be called when an item containing this
     * component is used on a block.
     *
     */
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}

/**
 * 包含过滤物品的选项。
 *
 * Contains options for filtering items.
 */
export interface ItemFilter {
    /**
     * @remarks
     * 如果定义，则包含与这些类型匹配的物品。
     *
     * If defined, items that match these types are included.
     *
     */
    includeTypes?: (ItemType | string)[];
}

/**
 * 为 {@link StructureManager.placeJigsaw} 提供额外选项。
 *
 * Provides additional options for {@link
 * StructureManager.placeJigsaw}.
 */
export interface JigsawPlaceOptions {
    /**
     * @remarks
     * 结构中是否应包含实体。默认为 `true`。
     *
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否保留拼图方块。默认为 `false`。
     *
     * Whether the jigsaw blocks should be kept when generating the
     * structure. Defaults to false.
     *
     */
    keepJigsaws?: boolean;
    /**
     * @remarks
     * 指定如何处理可与水共存的方块与现有液体的重叠。默认为 `ApplyWaterlogging`。
     *
     * Specifies how to handle waterloggable blocks overlapping
     * with existing liquid. Defaults to `ApplyWaterlogging`.
     *
     */
    liquidSettings?: LiquidSettings;
}

/**
 * 为 {@link StructureManager.placeJigsawStructure} 提供额外选项。
 *
 * Provides additional options for {@link
 * StructureManager.placeJigsawStructure}.
 */
export interface JigsawStructurePlaceOptions {
    /**
     * @remarks
     * 是否应忽略拼图结构定义中定义的起始高度，并使用指定的 y 坐标覆盖。默认为 `false`。
     *
     * Whether the start height defined in the jigsaw structure
     * definition should be ignored and overridden with the
     * specified y coordinate. Defaults to false.
     *
     */
    ignoreStartHeight?: boolean;
    /**
     * @remarks
     * 结构中是否应包含实体。默认为 `true`。
     *
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否保留拼图方块。默认为 `false`。
     *
     * Whether the jigsaw blocks should be kept when generating the
     * structure. Defaults to false.
     *
     */
    keepJigsaws?: boolean;
    /**
     * @remarks
     * 指定如何处理可与水共存的方块与现有液体的重叠。默认为 `ApplyWaterlogging`。
     *
     * Specifies how to handle waterloggable blocks overlapping
     * with existing liquid. Defaults to `ApplyWaterlogging`.
     *
     */
    liquidSettings?: LiquidSettings;
}

/**
 * 小于运算符。
 *
 * Less than operator.
 */
export interface LessThanComparison {
    /**
     * @remarks
     * 进行比较的阈值。
     *
     * Threshold value compared against.
     *
     */
    lessThan: number;
}

/**
 * 小于或等于运算符。
 *
 * Less than or equal to operator.
 */
export interface LessThanOrEqualsComparison {
    /**
     * @remarks
     * 进行比较的阈值。
     *
     * Threshold value compared against.
     *
     */
    lessThanOrEquals: number;
}

/**
 * 用于 {@link World.playMusic}/{@link World.queueMusic} 方法的额外配置选项。
 *
 * Additional configuration options for {@link
 * World.playMusic}/{@link World.queueMusic} methods.
 */
export interface MusicOptions {
    /**
     * @remarks
     * 指定音乐播放结束时的淡出重叠量。
     *
     * Specifies a fade overlap for music at the end of play.
     *
     */
    fade?: number;
    /**
     * @remarks
     * 如果设置为 `true`，此音乐曲目将重复播放。
     *
     * If set to true, this music track will play repeatedly.
     *
     */
    loop?: boolean;
    /**
     * @remarks
     * 音乐的相对音量级别。
     *
     * Relative volume level of the music.
     *
     */
    volume?: number;
}

/**
 * 不等于运算符。
 *
 * Not equal to operator.
 */
export interface NotEqualsComparison {
    /**
     * @remarks
     * 进行比较的阈值。
     *
     * Threshold value compared against.
     *
     */
    notEquals: boolean | number | string;
}

/**
 * 包含动画播放方式的额外选项。
 *
 * Contains additional options for how an animation is played.
 */
export interface PlayAnimationOptions {
    /**
     * @remarks
     * 动画停止后淡出所需的时间。
     *
     * Amount of time to fade out after an animation stops.
     *
     */
    blendOutTime?: number;
    /**
     * @remarks
     * 指定要在实体上使用的已定义的控制器。
     *
     * Specifies a controller to use that has been defined on the
     * entity.
     *
     */
    controller?: string;
    /**
     * @remarks
     * 指定要转换到的状态。
     *
     * Specifies the state to transition to.
     *
     */
    nextState?: string;
    /**
     * @remarks
     * 动画对其可见的玩家列表。
     *
     * A list of players the animation will be visible to.
     *
     */
    players?: Player[];
    /**
     * @remarks
     * 指定此动画完成时应使用的 Molang 表达式。
     *
     * Specifies a Molang expression for when this animation should
     * complete.
     *
     */
    stopExpression?: string;
}

/**
 * 与玩家瞄准辅助相关的设置。
 *
 * Settings relating to a player's aim-assist targeting.
 */
export interface PlayerAimAssistSettings {
    /**
     * @remarks
     * 用于瞄准辅助的视距限制。
     *
     * The view distance limit to use for aim-assist targeting.
     *
     */
    distance?: number;
    /**
     * @remarks
     * 要激活的瞄准辅助预设的 ID。必须包含命名空间。
     *
     * The Id of the aim-assist preset to activate. Must have a
     * namespace.
     *
     */
    presetId: string;
    /**
     * @remarks
     * 用于瞄准辅助的模式。
     *
     * The mode to use for aim-assist targeting.
     *
     */
    targetMode?: AimAssistTargetMode;
    /**
     * @remarks
     * 用于瞄准辅助的视角限制。
     *
     * The view angle limit to use for aim-assist targeting.
     *
     */
    viewAngle?: Vector2;
}

/**
 * @rc
 * 传递给 {@link PlayerStartBreakingBlockAfterEventSignal.subscribe} 或 {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe} 的接口，用于过滤哪些事件会传递给所提供的回调函数。
 *
 * An interface that is passed into {@link
 * PlayerStartBreakingBlockAfterEventSignal.subscribe} or
 * {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe}
 * that filters out which events are passed to the provided
 * callback.
 */
export interface PlayerBreakingBlockEventOptions {
    /**
     * @remarks
     * 回调函数应针对的 {@link BlockFilter}。如果未定义，回调函数将针对所有方块被调用。
     *
     * The {@link BlockFilter} that the callback should be called
     * for. If undefined, the callback will be called for all
     * blocks.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 回调函数应针对的 {@link EntityFilter}。如果未定义，回调函数将针对所有玩家被调用。
     *
     * The {@link EntityFilter} that the callback should be called
     * for. If undefined, the callback will be called for all
     * players.
     *
     */
    playerFilter?: EntityFilter;
}

/**
 * 如何为玩家播放声音的额外选项。
 *
 * Additional options for how a sound plays for a player.
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * 声音的位置；如果未指定，则在玩家附近播放声音。
     *
     * Location of the sound; if not specified, the sound is played
     * near a player.
     *
     */
    location?: Vector3;
    /**
     * @beta
     * @remarks
     * 初始播放后额外重复该声音的次数。`0`（默认值）播放一次，`-1` 无限循环，正整数 `N` 总共播放 `N + 1` 次。例如，`loopCount: 1` 播放两次。循环次数在声音开始时固定，之后无法更改。使用 `-1` 时，请参阅 `SoundInstance` 了解句柄生命周期要求。
     *
     * Number of additional times to repeat the sound after the
     * initial play. `0` (the default) plays the sound once, `-1`
     * loops it forever, and a positive integer `N` plays the sound
     * `N + 1` times in total. For example, `loopCount: 1` plays
     * the sound twice. The loop count is fixed when the sound
     * starts and cannot be changed afterward. When using `-1`, see
     * `SoundInstance` for handle lifetime requirements.
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 可选的音高。
     *
     * Optional pitch of the sound.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 可选的音量。
     *
     * Optional volume of the sound.
     *
     */
    volume?: number;
}

/**
 * 传递给 {@link @minecraft/server.PlayerSwingStartAfterEventSignal.subscribe} 的接口，用于过滤哪些事件会传递给所提供的回调函数。
 *
 * An interface that is passed into {@link
 * @minecraft/server.PlayerSwingStartAfterEventSignal.subscribe} that
 * filters out which events are passed to the provided
 * callback.
 */
export interface PlayerSwingEventOptions {
    /**
     * @remarks
     * 回调函数应针对的持有物品选项。如果未定义，无论玩家手中是否持有物品，回调函数都会被调用。
     *
     * The held item option that the callback should be called for.
     * If undefined, the callback will be called whether or not the
     * player is holding an item in their hand.
     *
     */
    heldItemOption?: HeldItemOption;
    /**
     * @remarks
     * 回调函数应针对的 {@link EntitySwingSource}。如果未定义，回调函数将针对所有挥动来源被调用。
     *
     * The {@link EntitySwingSource} that the callback should be
     * called for. If undefined, the callback will be called for
     * all swing sources.
     *
     */
    swingSource?: EntitySwingSource;
}

/**
 * 根据玩家特定状态控制路径点的可见性。扩展了 {@link EntityVisibilityRules}，增加了针对玩家专属状态（如隐藏模式和旁观者模式）的额外规则。
 *
 * Controls when a waypoint is visible based on player-specific
 * states. Extends {@link EntityVisibilityRules} with
 * additional rules for player-only states like hidden mode and
 * spectator mode.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface PlayerVisibilityRules extends EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪的玩家处于隐藏状态时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when the tracked
     * player is hidden. If undefined, defaults to true.
     *
     */
    showHidden?: boolean;
    /**
     * @remarks
     * 控制当被追踪的玩家处于旁观者模式时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when the tracked
     * player is in spectator mode. If undefined, defaults to true.
     *
     */
    showSpectator?: boolean;
    /**
     * @remarks
     * 控制当旁观者正在查看另一位旁观者玩家时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when a spectator is
     * viewing another spectator player. If undefined, defaults to
     * true.
     *
     */
    showSpectatorToSpectator?: boolean;
}

/**
 * 保存相机动画进度的关键帧。
 *
 * Key frame that holds the progress of the camera animation.
 */
export interface ProgressKeyFrame {
    /**
     * @remarks
     * 表示相机沿曲线的进度值。取值范围为 [0.0, 1.0]（包含两端）。
     *
     * Value to denote how far along the curve the camera will be.
     * Values are [0.0, 1.0] inclusive.
     *
     */
    alpha: number;
    /**
     * @remarks
     * 该帧在位置变化中使用的可选缓动类型。
     *
     * The optional easing type that the frame will use for
     * position.
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 相机到达指定 alpha 值的时间值。
     *
     * Time value that the camera will be at the given alpha.
     *
     */
    timeSeconds: number;
}

/**
 * @minecraft/server.EntityProjectileComponent.shoot 的可选参数。
 *
 * Optional arguments for
 * @minecraft/server.EntityProjectileComponent.shoot.
 */
export interface ProjectileShootOptions {
    /**
     * @remarks
     * 控制射击的精度。值为 0 表示完美精度。
     *
     * Controls the accuracy of the shot. A value of 0 is perfect
     * accuracy.
     *
     */
    uncertainty?: number;
}

/**
 * 表示用于表达数字可能范围的上下界结构的运算符。
 *
 * Operator represents a lower/upper bound structure for
 * expressing a potential range of numbers.
 */
export interface RangeComparison {
    /**
     * @remarks
     * 范围内的下界。
     *
     * Lower bound within a range.
     *
     */
    lowerBound: number;
    /**
     * @remarks
     * 范围内的上界。
     *
     * Upper bound within a range.
     *
     */
    upperBound: number;
}

/**
 * 定义一个用于更灵活处理的 JSON 结构。
 *
 * Defines a JSON structure that is used for more flexible.
 * @seeExample addTranslatedSign.ts c0399cc7
 * @seeExample showTranslatedMessageForm.ts
 * @seeExample addTranslatedSign.ts 9e2fd749
 */
export interface RawMessage {
    /**
     * @remarks
     * 提供当前消息的原始文本等效内容。
     *
     * Provides a raw-text equivalent of the current message.
     *
     */
    rawtext?: RawMessage[];
    /**
     * @remarks
     * 提供一个将被替换为分数值的令牌。
     *
     * Provides a token that will get replaced with the value of a
     * score.
     *
     */
    score?: RawMessageScore;
    /**
     * @remarks
     * 提供一个要使用的字符串字面量值。
     *
     * Provides a string literal value to use.
     *
     */
    text?: string;
    /**
     * @remarks
     * 提供一个翻译令牌，如果客户端在玩家语言中有与该令牌匹配的可用资源，则会在客户端进行翻译。
     *
     * Provides a translation token where, if the client has an
     * available resource in the players' language which matches
     * the token, will get translated on the client.
     *
     */
    translate?: string;
    /**
     * @remarks
     * 翻译令牌的参数。可以是字符串数组，也可以是包含原始文本对象数组的 RawMessage。
     *
     * Arguments for the translation token. Can be either an array
     * of strings or RawMessage containing an array of raw text
     * objects.
     *
     */
    with?: string[] | RawMessage;
}

/**
 * 提供在原始消息中使用的分数令牌的描述。
 *
 * Provides a description of a score token to use within a raw
 * message.
 */
export interface RawMessageScore {
    /**
     * @remarks
     * 要匹配的分数值名称。
     *
     * Name of the score value to match.
     *
     */
    name?: string;
    /**
     * @remarks
     * 要匹配的分数值名称。
     *
     * Name of the score value to match.
     *
     */
    objective?: string;
}

/**
 * 一个仅包含 `rawtext` 属性的 `RawMessage`。当序列化 `RawMessage` 时，内容会被放入 `rawtext` 属性中，因此在读取已保存的 RawMessage 时非常有用。请参阅 `BlockSignComponent.setText` 和 `BlockSignComponent.getRawText` 获取示例。
 *
 * A `RawMessage` with only the `rawtext` property. When a
 * `RawMessage` is serialized the contents are put into a
 * rawtext property, so this is useful when reading saved
 * RawMessages. See `BlockSignComponent.setText` and
 * `BlockSignComponent.getRawText` for examples.
 */
export interface RawText {
    /**
     * @remarks
     * 关联告示牌当前值的序列化内容。
     *
     * A serialization of the current value of an associated sign.
     *
     */
    rawtext?: RawMessage[];
}

/**
 * 表示 Minecraft 中完全可自定义的颜色。
 *
 * Represents a fully customizable color within Minecraft.
 */
export interface RGB {
    /**
     * @remarks
     * 确定颜色的蓝色分量。有效值在 0 到 1.0 之间。
     *
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     *
     */
    blue: number;
    /**
     * @remarks
     * 确定颜色的绿色分量。有效值在 0 到 1.0 之间。
     *
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     *
     */
    green: number;
    /**
     * @remarks
     * 确定颜色的红色分量。有效值在 0 到 1.0 之间。
     *
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     *
     */
    red: number;
}

/**
 * 表示 Minecraft 中完全可自定义的颜色。
 *
 * Represents a fully customizable color within Minecraft.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface RGBA extends RGB {
    /**
     * @remarks
     * 确定颜色的 alpha（不透明度）分量。有效值在 0（透明）到 1.0（不透明）之间。
     *
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     *
     */
    alpha: number;
}

/**
 * 保存相机动画旋转角度的关键帧。
 *
 * Key frame that holds the rotation of the camera animation.
 */
export interface RotationKeyFrame {
    /**
     * @remarks
     * 该帧在旋转中使用的可选缓动类型。
     *
     * The optional easing type that the frame will use for
     * rotation.
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 相机旋转值。
     *
     * Value of the rotation of the camera.
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 相机到达指定旋转角度的时间值。
     *
     * Time value that the camera will be at the given rotation.
     *
     */
    timeSeconds: number;
}

/**
 * 表示记分项显示位置配置。描述了如何在记分板显示位置上显示记分项。
 * 
 * Contains additional options for how a scoreboard should be
 * displayed within its display slot.
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * @remarks
     * 要显示的记分项。
     * 
     * Objective to be displayed.
     *
     */
    objective: ScoreboardObjective;
    /**
     * @remarks
     * 记分项条目的显示排序顺序。
     * 
     * The sort order to display the objective items within.
     *
     */
    sortOrder?: ObjectiveSortOrder;
}

/**
 * 包含注册脚本事件回调的额外选项。
 *
 * Contains additional options for registering a script event
 * event callback.
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * 用于过滤入站脚本事件消息的可选命名空间列表。
     *
     * Optional list of namespaces to filter inbound script event
     * messages.
     *
     */
    namespaces: string[];
}

/**
 * @beta
 * 在声音定义中声明的持续时间元数据。
 *
 * Duration metadata declared in a sound definition.
 */
export interface SoundDefinitionDurationInfo {
    /**
     * @remarks
     * 声音定义中声明的总持续时长（以秒为单位）。
     *
     * Total duration of the sound in seconds, as declared in the
     * sound definition.
     *
     */
    duration: number;
}

/**
 * @beta
 * 用于缩小一组声音定义范围的筛选条件。每个字段都是可选的，仅在定义时应用其约束；一个定义必须满足所有已定义的字段才能通过。
 *
 * Criteria used to narrow a set of sound definitions. Each
 * field is optional and applies its constraint only when
 * defined; a definition must satisfy every defined field to
 * pass.
 */
export interface SoundDefinitionFilter {
    /**
     * @remarks
     * 要与定义中 `music_info.artist` 进行匹配的艺术家名称。比较不区分大小写。当定义为非空数组时，只有在其声明的艺术家与提供的值之一匹配时，定义才通过。当未定义时，不对艺术家施加约束。
     *
     * Artist names to match against the definition's
     * music_info.artist. Comparison is case-insensitive. When
     * defined as a non-empty array, a definition passes only when
     * its declared artist matches one of the supplied values. When
     * undefined, no constraint on artist is applied.
     *
     */
    artists?: string[];
    /**
     * @remarks
     * 要与定义中 `music_info.genres` 进行匹配的流派。比较不区分大小写。当定义为非空数组时，只有在其声明的至少一个流派与提供的值之一匹配时，定义才通过。当未定义时，不对流派施加约束。
     *
     * Genres to match against the definition's music_info.genres.
     * Comparison is case-insensitive. When defined as a non-empty
     * array, a definition passes only when at least one of its
     * declared genres matches one of the supplied values. When
     * undefined, no constraint on genres is applied.
     *
     */
    genres?: string[];
    /**
     * @remarks
     * 以秒为单位的上限（包含）。当定义时，持续时间更长的定义以及未声明持续时间的定义将被排除。当未定义时，不应用上限。
     *
     * Upper bound in seconds, inclusive. When defined, definitions
     * with a longer duration and definitions without a declared
     * duration are excluded. When undefined, no upper bound is
     * applied.
     *
     */
    maxDuration?: number;
    /**
     * @remarks
     * 以秒为单位的下限（包含）。当定义时，持续时间更短的定义以及未声明持续时间的定义将被排除。当未定义时，不应用下限。
     *
     * Lower bound in seconds, inclusive. When defined, definitions
     * with a shorter duration and definitions without a declared
     * duration are excluded. When undefined, no lower bound is
     * applied.
     *
     */
    minDuration?: number;
    /**
     * @remarks
     * 要与定义中 `music_info.moods` 进行匹配的情绪。比较不区分大小写。当定义为非空数组时，只有在其声明的至少一个情绪与提供的值之一匹配时，定义才通过。当未定义时，不对情绪施加约束。
     *
     * Moods to match against the definition's music_info.moods.
     * Comparison is case-insensitive. When defined as a non-empty
     * array, a definition passes only when at least one of its
     * declared moods matches one of the supplied values. When
     * undefined, no constraint on moods is applied.
     *
     */
    moods?: string[];
    /**
     * @remarks
     * 要与定义的标签进行匹配的标签约束。标签名称和值的比较不区分大小写。当定义为非空记录时，只有对于每个具有非空值数组的条目，该标签名称在定义中存在且至少有一个匹配值时，定义才通过。当未定义时，不对标签施加约束。
     *
     * Tag constraints to match against the definition's tags.
     * Comparisons of tag names and values are case-insensitive.
     * When defined as a non-empty record, a definition passes only
     * when, for each entry with a non-empty value array, the tag
     * name is present on the definition with at least one matching
     * value. When undefined, no constraint on tags is applied.
     *
     */
    tags?: Record<string, string[]>;
    /**
     * @remarks
     * 要与定义中 `music_info.title` 进行匹配的标题。比较不区分大小写。当定义为非空数组时，只有在其声明的标题与提供的值之一匹配时，定义才通过。当未定义时，不对标题施加约束。
     *
     * Titles to match against the definition's music_info.title.
     * Comparison is case-insensitive. When defined as a non-empty
     * array, a definition passes only when its declared title
     * matches one of the supplied values. When undefined, no
     * constraint on title is applied.
     *
     */
    titles?: string[];
}

/**
 * @beta
 * 在声音定义上声明的音乐元数据。每个字段都是可选的，当声音定义未为其声明值时，该字段为 `undefined`。
 *
 * Music metadata declared on a sound definition. Each field is
 * optional and is undefined when the sound definition does not
 * declare a value for it.
 */
export interface SoundDefinitionMusicInfo {
    /**
     * @remarks
     * 为此声音声明的艺术家。当未声明艺术家时为 `undefined`。
     *
     * Artist declared for this sound. Undefined when no artist was
     * declared.
     *
     */
    artist?: string;
    /**
     * @remarks
     * 为此声音声明的流派。当未声明流派时为 `undefined`。
     *
     * Genres declared for this sound. Undefined when no genres
     * were declared.
     *
     */
    genres?: string[];
    /**
     * @remarks
     * 为此声音声明的情绪。当未声明情绪时为 `undefined`。
     *
     * Moods declared for this sound. Undefined when no moods were
     * declared.
     *
     */
    moods?: string[];
    /**
     * @remarks
     * 为此声音声明的标题。当未声明标题时为 `undefined`。
     *
     * Title declared for this sound. Undefined when no title was
     * declared.
     *
     */
    title?: string;
}

/**
 * 包含生成实体的额外选项。
 *
 * Contains additional options for spawning an Entity.
 */
export interface SpawnEntityOptions {
    /**
     * @remarks
     * 可选布尔值，决定此实体是否应在游戏世界中持久存在。持久化可防止实体自动消失。
     *
     * Optional boolean which determines if this entity should
     * persist in the game world. Persistence prevents the entity
     * from automatically despawning.
     *
     */
    initialPersistence?: boolean;
    /**
     * @remarks
     * 可选参数，实体生成时设置的初始旋转角度（以度为单位）。
     *
     * Optional initial rotation, in degrees, to set on the entity
     * when it spawns.
     *
     */
    initialRotation?: number;
    /**
     * @remarks
     * 可选参数，实体生成后要发送给实体的事件。
     *
     * Optional spawn event to send to the entity after it is
     * spawned.
     *
     */
    spawnEvent?: string;
}

/**
 * 相机动画的关键帧集合。
 *
 * Collection of key frames for camera animation.
 */
export interface SplineAnimation {
    /**
     * @remarks
     * 相机沿指定曲线的进度关键帧。
     *
     * Key frames for camera progress along a given curve.
     *
     */
    progressKeyFrames: ProgressKeyFrame[];
    /**
     * @remarks
     * 相机旋转关键帧。
     *
     * Key frames for camera rotation.
     *
     */
    rotationKeyFrames: RotationKeyFrame[];
}

/**
 * 为 {@link StructureManager.createFromWorld} 提供额外的选项。
 *
 * Provides additional options for {@link
 * StructureManager.createFromWorld}
 */
export interface StructureCreateOptions {
    /**
     * @remarks
     * 方块是否应包含在结构中。默认为 `true`。
     *
     * Whether blocks should be included in the structure. Defaults
     * to true.
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 实体是否应包含在结构中。默认为 `true`。
     *
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 结构的保存方式。默认为 StructureSaveMode.World。
     *
     * How the Structure should be saved. Defaults to
     * StructureSaveMode.World.
     *
     */
    saveMode?: StructureSaveMode;
}

/**
 * 为 {@link StructureManager.place} 提供额外的选项。
 *
 * Provides additional options for {@link
 * StructureManager.place}
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * 放置时结构的动画方式。
     *
     * How the Structure should be animated when placed.
     *
     */
    animationMode?: StructureAnimationMode;
    /**
     * @remarks
     * 动画持续多少秒。
     *
     * How many seconds the animation should take.
     *
     */
    animationSeconds?: number;
    /**
     * @remarks
     * 方块是否应包含在结构中。默认为 `true`。
     *
     * Whether blocks should be included in the structure. Defaults
     * to true.
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 实体是否应包含在结构中。默认为 `true`。
     *
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 应放置方块的百分比。值为 1 将放置 100% 的方块，而值为 0 则不放置任何方块。方块根据 {@link StructurePlaceOptions.integritySeed} 随机选择。
     *
     * What percentage of blocks should be placed. A value of 1
     * will place 100% of the blocks while a value of 0 will place
     * none. The blocks are chosen randomly based on the {@link
     * StructurePlaceOptions.integritySeed}.
     *
     */
    integrity?: number;
    /**
     * @remarks
     * 决定随机选择哪些方块进行放置的种子。默认为随机种子。
     *
     * Seed that determines which blocks are randomly chosen to be
     * placed. Defaults to a random seed.
     *
     */
    integritySeed?: string;
    /**
     * @remarks
     * 放置时结构应沿哪些轴进行镜像。默认为 StructureMirrorAxis.None。
     *
     * Which axes the Structure should be mirrored on when placed.
     * Defaults to StructureMirrorAxis.None.
     *
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * 放置时结构的旋转方式。默认为 AxisAlignedRotation.None。
     *
     * How the Structure should be rotated when placed. Defaults to
     * AxisAlignedRotation.None.
     *
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * 放置时结构是否应被水淹没。默认为 `false`。如果为 `true`，则放置在水中时方块将被水淹没。
     *
     * Whether the structure should be waterlogged when placed.
     * Defaults to false. If true, blocks will become waterlogged
     * when placed in water.
     *
     */
    waterlogged?: boolean;
}

/**
 * 包含传送实体的额外选项。
 *
 * Contains additional options for teleporting an entity.
 * @seeExample teleport.ts
 * @seeExample teleportMovement.ts
 */
export interface TeleportOptions {
    /**
     * @remarks
     * 是否检查传送后方块是否会阻挡实体。
     *
     * Whether to check whether blocks will block the entity after
     * teleport.
     *
     */
    checkForBlocks?: boolean;
    /**
     * @remarks
     * 可能将实体移动到的维度。如果未指定，实体将在其所在的维度内传送。
     *
     * Dimension to potentially move the entity to.  If not
     * specified, the entity is teleported within the dimension
     * that they reside.
     *
     */
    dimension?: Dimension;
    /**
     * @remarks
     * 传送后实体应面向的位置。
     *
     * Location that the entity should be facing after teleport.
     *
     */
    facingLocation?: Vector3;
    /**
     * @remarks
     * 传送后是否保留实体的速度。
     *
     * Whether to retain the entities velocity after teleport.
     *
     */
    keepVelocity?: boolean;
    /**
     * @remarks
     * 传送后实体的旋转角度。
     *
     * Rotation of the entity after teleport.
     *
     */
    rotation?: Vector2;
}

/**
 * 提供关于特定常加载区域信息的上下文。
 *
 * A context which provides information about a specific
 * ticking area.
 */
export interface TickingArea {
    /**
     * @remarks
     * 包含常加载区域中所有常加载方块的边界框。
     *
     * The box which contains all the ticking blocks in the ticking
     * area.
     *
     */
    boundingBox: BlockBoundingBox;
    /**
     * @remarks
     * 常加载区域包含的区块数量。
     *
     * The number of chunks that the ticking area contains.
     *
     */
    chunkCount: number;
    /**
     * @remarks
     * 常加载区域所在的维度。
     *
     * The dimension the ticking area is located.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 常加载区域的唯一标识符。
     *
     * The unique identifier of the ticking area.
     *
     */
    identifier: string;
    /**
     * @remarks
     * 如果常加载区域的所有区块都已加载并处于常加载状态，则为 `true`，否则为 `false`。
     *
     * Will be true if all the ticking areas chunks are loaded in
     * ticking and false otherwise.
     *
     */
    isFullyLoaded: boolean;
}

/**
 * 使用 {@link TickingAreaManager} 创建常加载区域的选项。
 *
 * Options to create a ticking area using the {@link
 * TickingAreaManager}.
 */
export interface TickingAreaOptions {
    /**
     * @remarks
     * 常加载区域所在的维度。
     *
     * The dimension the ticking area will be in.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 边界框的一个角落方块位置。
     *
     * Corner block location of the bounding box.
     *
     */
    from: Vector3;
    /**
     * @remarks
     * 边界框的对角角落方块位置。
     *
     * Opposite corner block location of the bounding box.
     *
     */
    to: Vector3;
}

/**
 * 包含显示标题和可选副标题的额外选项。
 *
 * Contains additional options for displaying a title and
 * optional subtitle.
 */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * 标题和副标题的淡入持续时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     *
     * Fade-in duration for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     *
     */
    fadeInDuration: number;
    /**
     * @remarks
     * 标题和副标题的淡出持续时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     *
     * Fade-out time for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     *
     */
    fadeOutDuration: number;
    /**
     * @remarks
     * 标题和副标题的停留持续时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     *
     * Amount of time for the title and subtitle to stay in place,
     * in ticks. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     */
    stayDuration: number;
    /**
     * @remarks
     * 可选的副标题文本。
     *
     * Optional subtitle text.
     *
     */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}

/**
 * 表示一个二维向量。
 *
 * Represents a two-directional vector.
 */
export interface Vector2 {
    /**
     * @remarks
     * 二维向量的 X 分量。
     *
     * X component of the two-dimensional vector.
     *
     */
    x: number;
    /**
     * @remarks
     * 二维向量的 Y 分量。
     *
     * Y component of the two-dimensional vector.
     *
     */
    y: number;
}

/**
 * 包含向量的描述。
 *
 * Contains a description of a vector.
 */
export interface Vector3 {
    /**
     * @remarks
     * 此向量的 X 分量。
     *
     * X component of this vector.
     *
     */
    x: number;
    /**
     * @remarks
     * 此向量的 Y 分量。
     *
     * Y component of this vector.
     *
     */
    y: number;
    /**
     * @remarks
     * 此向量的 Z 分量。
     *
     * Z component of this vector.
     *
     */
    z: number;
}

export interface VectorXZ {
    x: number;
    z: number;
}

/**
 * 定义一个纹理及其应显示的距离范围。在 {@link WaypointTextureSelector} 内部使用，以创建基于距离的纹理切换。
 *
 * Defines a texture and the distance range in which it should
 * be displayed. Used within a {@link WaypointTextureSelector}
 * to create distance-based texture switching.
 */
export interface WaypointTextureBounds {
    /**
     * @remarks
     * 此纹理的下距离边界。当到路径点的距离大于此值时显示纹理。值必须大于或等于 0。
     *
     * The lower distance bound for this texture. The texture is
     * displayed when the distance to the waypoint is greater than
     * this value. Value must be greater than or equal to 0.
     *
     * Minimum Value: 0
     */
    lowerBound: number;
    /**
     * @remarks
     * 在此距离范围内显示的 {@link WaypointTexture} 或 {@link CustomTexture}。
     *
     * The {@link WaypointTexture} or {@link CustomTexture} to
     * display within this distance range.
     *
     */
    texture: CustomTexture | WaypointTexture;
    /**
     * @remarks
     * 此纹理的上距离边界。当到路径点的距离小于或等于此值时显示纹理。如果未定义，则没有上限。值必须大于或等于 0。
     *
     * The upper distance bound for this texture. The texture is
     * displayed when the distance to the waypoint is less than or
     * equal to this value. If undefined, there is no upper limit.
     * Value must be greater than or equal to 0.
     *
     * Minimum Value: 0
     */
    upperBound?: number;
}

/**
 * 定义路径点纹理如何根据距离变化。包含一个纹理边界列表，决定在不同距离范围内显示哪个纹理。
 *
 * Defines how waypoint textures change based on distance.
 * Contains a list of texture bounds that determine which
 * texture is displayed at different distance ranges.
 */
export interface WaypointTextureSelector {
    /**
     * @remarks
     * 一个 {@link WaypointTextureBounds} 数组，定义在不同距离范围内显示哪些纹理。系统会评估这些边界，根据到路径点的当前距离确定合适的纹理。列表的最大大小限制为 16。
     *
     * An array of {@link WaypointTextureBounds} that define which
     * textures are displayed at different distance ranges. The
     * system evaluates these bounds to determine the appropriate
     * texture based on the current distance to the waypoint. The
     * list has a maximum size limit of 16.
     *
     */
    textureBoundsList: WaypointTextureBounds[];
}

/**
 * 包含 playSound 事件的额外选项。
 *
 * Contains additional options for a playSound occurrence.
 */
export interface WorldSoundOptions {
    /**
     * @beta
     * @remarks
     * 首次播放后额外重复声音的次数。`0`（默认值）播放一次声音，`-1` 无限循环，正整数 `N` 总共播放 `N + 1` 次。例如，`loopCount: 1` 播放两次声音。循环次数在声音开始时固定，之后无法更改。使用 `-1` 时，请参阅 `SoundInstance` 了解句柄生命周期要求。
     *
     * Number of additional times to repeat the sound after the
     * initial play. `0` (the default) plays the sound once, `-1`
     * loops it forever, and a positive integer `N` plays the sound
     * `N + 1` times in total. For example, `loopCount: 1` plays
     * the sound twice. The loop count is fixed when the sound
     * starts and cannot be changed afterward. When using `-1`, see
     * `SoundInstance` for handle lifetime requirements.
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 播放声音的音高。
     *
     * Pitch of the sound played.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 此声音被听到的相对音量和空间。
     *
     * Relative volume and space by which this sound is heard.
     *
     */
    volume?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 当尝试注册一个已经注册过的方块自定义组件时抛出的错误。
 * 
 * Error thrown when attempting to register a block custom component that has already been registered.
 */
export class BlockCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 当重新加载过程中发现新的方块自定义组件时抛出的错误。
 * 
 * Error thrown when a new block custom component is detected during reload.
 */
export class BlockCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 当重新加载过程中发现新的方块自定义组件事件时抛出的错误。
 * 
 * Error thrown when a new block custom component event is detected during reload.
 */
export class BlockCustomComponentReloadNewEventError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 当重新加载过程中发现方块自定义组件版本发生变化时抛出的错误。
 * 
 * Error thrown when a block custom component version change is detected during reload.
 */
export class BlockCustomComponentReloadVersionError extends Error {
    private constructor();
}

/**
 * 使用 {@link ItemBookComponent} 时可能抛出的错误。
 * 
 * Errors that can be thrown when using {@link
 * ItemBookComponent}.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookError extends Error {
    private constructor();
    /**
     * @remarks
     * 错误的原因。
     * 
     * The reason for the error.
     *
     * @earlyExecution
     *
     */
    readonly reason: BookErrorReason;
}

/**
 * 当在 {@link ItemBookComponent} 上设置的页面内容无效时（例如超过最大页面长度）调用的错误。
 * 
 * The error called if page content being set on an {@link
 * ItemBookComponent} are invalid ie. exceeding the maximum
 * page length.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookPageContentError extends Error {
    private constructor();
    /**
     * @remarks
     * 请求修改的页面索引。
     * 
     * The index of the page requested to be modified.
     *
     * @earlyExecution
     *
     */
    readonly pageIndex: number;
    /**
     * @remarks
     * 错误的原因。
     * 
     * The reason for the error.
     *
     * @earlyExecution
     *
     */
    readonly reason: BookErrorReason;
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 由命令执行失败抛出的错误类型。
 *
 * Type of error thrown by failed command execution.
 */
export class CommandError extends Error {
    private constructor();
}

/**
 * 当容器操作违反了 {@link ContainerRules} 时抛出的错误。
 *
 * Error thrown if {@link ContainerRules} are broken on
 * container operations.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ContainerRulesError extends Error {
    private constructor();
    /**
     * @remarks
     * 抛出该错误的具体原因。
     *
     * The specific reason the error was thrown.
     *
     * @earlyExecution
     *
     */
    readonly reason: ContainerRulesErrorReason;
}

/**
 * 当 CustomCommandRegistry 操作发生错误时抛出的错误对象。
 *
 * Error object thrown when CustomCommandRegistry errors occur.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomCommandError extends Error {
    private constructor();
    /**
     * @remarks
     * 错误的原因。
     *
     * Reason for the error.
     *
     * @earlyExecution
     *
     */
    readonly reason: CustomCommandErrorReason;
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 在系统启动事件之外尝试注册自定义组件时抛出的错误。
 *
 * Thrown when trying to register a custom component outside of
 * the system startup event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentInvalidRegistryError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 当自定义组件名称包含无效字符时抛出的错误。
 *
 * Thrown when trying to register a custom component with a
 * name that contains invalid characters.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentNameError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly reason: CustomComponentNameErrorReason;
}

/**
 * 当尝试注册一个已注册过的自定义维度名称时抛出的错误。
 *
 * Thrown when trying to register a custom dimension with a
 * name that has already been registered.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionAlreadyRegisteredError extends Error {
    private constructor();
}

/**
 * 在系统启动事件之外尝试注册自定义维度时抛出的错误。
 *
 * Thrown when trying to register a custom dimension outside of
 * the system startup event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionInvalidRegistryError extends Error {
    private constructor();
}

/**
 * 当尝试使用包含无效字符的名称注册自定义维度时抛出的错误。
 *
 * Thrown when trying to register a custom dimension with a
 * name that contains invalid characters.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionNameError extends Error {
    private constructor();
}

/**
 * 在使用 /reload 命令后，尝试注册一个之前未注册的自定义维度时抛出的错误。在重载期间不能添加新的自定义维度。
 *
 * Thrown after using the /reload command when trying to
 * register a custom dimension that was not previously
 * registered. New custom dimensions cannot be added during a
 * reload.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionReloadNewDimensionError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 当附魔等级超出允许范围时抛出的错误。
 *
 * Error thrown when an enchantment level is out of the allowed bounds.
 */
export class EnchantmentLevelOutOfBoundsError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 当附魔类型与指定物品不兼容时抛出的错误。
 *
 * Error thrown when an enchantment type is not compatible with the specified item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeNotCompatibleError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 当使用了未知的附魔类型标识符时抛出的错误。
 *
 * Error thrown when an unknown enchantment type identifier is used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeUnknownIdError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
/**
 * 实体生成失败时抛出的错误。
 *
 * Error thrown when entity spawning fails.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySpawnError extends Error {
    private constructor();
}

/**
 * @beta
 * Error thrown by {@link FogSettings} operations when the fog
 * stack limit is exceeded or an invalid fog identifier is
 * provided.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FogSettingsError extends Error {
    private constructor();
}

/**
 * The error can occur when a block is invalid. This can also
 * occur when accessing components on a block that doesn't have
 * them.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidBlockComponentError extends Error {
    private constructor();
}

/**
 * The container is invalid. This can occur if the container is
 * missing or deleted.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerError extends Error {
    private constructor();
}

/**
 * The container slot is invalid. This can occur when the
 * owning container is destroyed or unloaded.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerSlotError extends Error {
    private constructor();
}

/**
 * This error can occur when accessing components on an entity
 * that doesn't have them.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityComponentError extends Error {
    private constructor();
}

/**
 * The error called when an entity is invalid. This can occur
 * when accessing components on a removed entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks
     * The id of the entity that is now invalid.
     *
     * @earlyExecution
     *
     */
    readonly id: string;
    /**
     * @remarks
     * The type of the entity that is now invalid.
     *
     * @earlyExecution
     *
     */
    readonly type: string;
}

/**
 * The error called when an item is invalid. This can occur
 * when accessing components on a removed item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidItemStackError extends Error {
    private constructor();
    /**
     * @remarks
     * The type of the item that is now invalid.
     *
     * @earlyExecution
     *
     */
    readonly itemType: ItemType;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidIteratorError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidPotionDeliveryTypeError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidPotionEffectTypeError extends Error {
    private constructor();
}

/**
 * Thrown when a Structure is invalid. A structure becomes
 * invalid when it is deleted.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidStructureError extends Error {
    private constructor();
}

/**
 * Error thrown when attempting to perform operations on an
 * invalid waypoint. A waypoint becomes invalid when it is
 * removed or when the entity it tracks is no longer valid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWaypointError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWaypointTextureSelectorError extends Error {
    private constructor();
}

/**
 * Thrown when trying to register an item custom component with
 * a name that has already been registered.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

/**
 * Thrown after using the /reload command when trying to
 * register a previously unregistered item custom component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

/**
 * Thrown after using the /reload command when trying to
 * register a previously registered item custom component that
 * handles a new event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}

/**
 * Thrown after using the /reload command when trying to
 * register a previously registered item custom component with
 * a newer API version.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}

/**
 * 当指定位置或边界区域所在的区块未加载时抛出。
 *
 * Thrown when the chunk for provided location or bounding area
 * is not loaded.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}

/**
 * 当提供的位置或边界区域超出维度的最小或最大高度时抛出。
 *
 * Thrown when a provided location or bounding area is outside
 * the minimum or maximum dimension height.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationOutOfWorldBoundariesError extends Error {
    private constructor();
}

/**
 * 当定位栏操作失败时抛出的错误。包含指示错误具体原因的原因代码。
 *
 * Error thrown when a locator bar operation fails. Contains a
 * reason code indicating the specific cause of the error.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocatorBarError extends Error {
    private constructor();
    /**
     * @remarks
     * 指示定位栏操作失败原因的 `LocatorBarErrorReason` 代码。
     *
     * The {@link LocatorBarErrorReason} code that indicates why
     * the locator bar operation failed.
     *
     * @earlyExecution
     *
     */
    readonly reason: LocatorBarErrorReason;
}

/**
 * 当名称需要命名空间且在验证该命名空间时发生错误时抛出。
 *
 * Thrown when a name requires a namespace and an error occurs
 * when validating that namespace
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NamespaceNameError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly reason: NamespaceNameErrorReason;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PlaceJigsawError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PrimitiveShapeError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class RawMessageError extends Error {
    private constructor();
}

/**
 * The error returned from invalid {@link TickingAreaManager}
 * method calls.
 *
 * 从无效的 {@link TickingAreaManager} 方法调用返回的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TickingAreaError extends Error {
    private constructor();
    /**
     * @remarks
     * The specific reason that the error was thrown.
     *
     * 抛出该错误的具体原因。
     *
     * @earlyExecution
     *
     */
    readonly reason: TickingAreaErrorReason;
}

/**
 * Error thrown when the specified area contains one or more
 * unloaded chunks.
 *
 * 当指定区域包含一个或多个未加载的区块时抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class UnloadedChunksError extends Error {
    private constructor();
}

export const HudElementsCount = 13;
export const HudVisibilityCount = 2;
/**
 * @remarks
 * 包含月相（MoonPhases）的数量。
 *
 * Holds the number of MoonPhases
 *
 */
export const MoonPhaseCount = 8;
/**
 * @remarks
 * 服务器在游戏内一天中刻（tick）的次数。
 *
 * How many times the server ticks in one in-game day.
 *
 */
export const TicksPerDay = 24000;
/**
 * @remarks
 * 服务器每秒（现实时间）的刻（tick）次数。
 *
 * How many times the server ticks per second of real time.
 *
 */
export const TicksPerSecond = 20;
/**
 * @remarks
 * 一个提供系统级事件和函数的类。
 *
 * A class that provides system-level events and functions.
 *
 */
export const system: System;
/**
 * @remarks
 * 一个封装世界状态的类——一组维度以及 Minecraft 的环境。
 *
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 *
 */
export const world: World;
