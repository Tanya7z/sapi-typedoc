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
