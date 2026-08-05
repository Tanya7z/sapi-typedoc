/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { Camera, ClientSystemInfo, CommandPermissionLevel, ControlScheme, DimensionLocation, Entity, FogSettings, GameMode, GraphicsMode, InputInfo, InvalidEntityError, ItemStack, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, LocatorBar, MolangVariableMap, MusicOptions, PlayerAimAssist, PlayerInputPermissions, PlayerPermissionLevel, PlayerSoundOptions, PlayerSplitScreenSlot, RawMessage, RawMessageError, ScreenDisplay, SoundDefinition, SoundInstance, Vector3 } from '..';

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
