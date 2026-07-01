/* IMPORT */ import { BlockContainerClosedAfterEventSignal, BlockContainerOpenedAfterEventSignal, BlockExplodeAfterEventSignal, ButtonPushAfterEventSignal, ChatSendAfterEventSignal, DataDrivenEntityTriggerAfterEventSignal, EffectAddAfterEventSignal, EntityContainerClosedAfterEventSignal, EntityContainerOpenedAfterEventSignal, EntityDieAfterEventSignal, EntityHealAfterEventSignal, EntityHealthChangedAfterEventSignal, EntityHitBlockAfterEventSignal, EntityHitEntityAfterEventSignal, EntityHurtAfterEventSignal, EntityItemDropAfterEventSignal, EntityItemPickupAfterEventSignal, EntityLoadAfterEventSignal, EntityRemoveAfterEventSignal, EntitySpawnAfterEventSignal, EntityStartSneakingAfterEventSignal, EntityStopSneakingAfterEventSignal, EntityTamedAfterEventSignal, EntityUpgradeAfterEventSignal, ExplosionAfterEventSignal, GameRuleChangeAfterEventSignal, InputButton, InputMode, ItemCompleteUseAfterEventSignal, ItemReleaseUseAfterEventSignal, ItemStartUseAfterEventSignal, ItemStartUseOnAfterEventSignal, ItemStopUseAfterEventSignal, ItemStopUseOnAfterEventSignal, ItemUseAfterEventSignal, LeverActionAfterEventSignal, PackSettingChangeAfterEventSignal, PistonActivateAfterEventSignal, PlayerBreakBlockAfterEventSignal, PlayerButtonInputAfterEventSignal, PlayerCancelBreakingBlockAfterEventSignal, PlayerDimensionChangeAfterEventSignal, PlayerEmoteAfterEventSignal, PlayerGameModeChangeAfterEventSignal, PlayerHotbarSelectedSlotChangeAfterEventSignal, PlayerInputModeChangeAfterEventSignal, PlayerInputPermissionCategoryChangeAfterEventSignal, PlayerInteractWithBlockAfterEventSignal, PlayerInteractWithEntityAfterEventSignal, PlayerInventoryItemChangeAfterEventSignal, PlayerJoinAfterEventSignal, PlayerLeaveAfterEventSignal, PlayerPlaceBlockAfterEventSignal, PlayerSpawnAfterEventSignal, PlayerStartBreakingBlockAfterEventSignal, PlayerSwingStartAfterEventSignal, PlayerUseNameTagAfterEventSignal, PressurePlatePopAfterEventSignal, PressurePlatePushAfterEventSignal, ProjectileHitBlockAfterEventSignal, ProjectileHitEntityAfterEventSignal, ServerMessageAfterEventSignal, SoundCompletedAfterEventSignal, TargetBlockHitAfterEventSignal, TripWireTripAfterEventSignal, WeatherChangeAfterEventSignal, WorldLoadAfterEventSignal } from '..';

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
