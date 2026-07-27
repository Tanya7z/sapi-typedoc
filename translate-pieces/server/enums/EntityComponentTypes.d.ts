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
