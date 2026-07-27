/* IMPORT */ import { ArgumentOutOfBoundsError, InvalidArgumentError, PropertyOutOfBoundsError } from '../../common';
/* IMPORT */ import { AimAssistRegistry, CommandError, Difficulty, Dimension, Entity, EntityQueryOptions, GameRules, LocationOutOfWorldBoundariesError, LootTableManager, MoonPhase, MusicOptions, Player, PrimitiveShapesManager, RawMessage, Scoreboard, SoundDefinitionRegistry, Structure, StructureManager, TickingAreaManager, TimeOfDay, Vector3, WorldAfterEvents, WorldBeforeEvents } from '..';

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
     * 包含适用于整个世界的一组事件。事件回调以延迟方式调用，且以读写模式执行。
     *
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
     * 启用或禁用作弊功能。
     *
     * Enables or disables cheats.
     *
     * @worldMutation
     *
     */
    allowCheats: boolean;
    /**
     * @remarks
     * 包含适用于整个世界的一组事件。事件回调以立即方式调用，且以只读模式执行。
     *
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
     * 适用于该世界的游戏规则。
     *
     * The game rules that apply to the world.
     *
     */
    readonly gameRules: GameRules;
    readonly isHardcore: boolean;
    /**
     * @remarks
     * 用于在世界中添加和移除原始文本对象的管理器。
     *
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
     * 世界的种子。
     *
     * The world seed.
     *
     */
    readonly seed: string;
    /**
     * @beta
     * @remarks
     * 提供对当前世界已加载的声音定义的只读访问。
     *
     * Provides read-only access to the sound definitions loaded
     * for this world.
     *
     */
    readonly soundDefinitionRegistry: SoundDefinitionRegistry;
    /**
     * @remarks
     * 返回与 {@link Structure} 相关 API 的管理器。
     *
     * Returns the manager for {@link Structure} related APIs.
     *
     */
    readonly structureManager: StructureManager;
    /**
     * @remarks
     * 用于添加、移除和查询资源包专用的常加载区域的管理器。
     *
     * Manager for adding, removing and querying pack specific
     * ticking areas.
     *
     */
    readonly tickingAreaManager: TickingAreaManager;
    /**
     * @beta
     * @remarks
     * 一个仅供内部使用的方法，用于在客户端与服务端之间广播特定消息。
     *
     * A method that is internal-only, used for broadcasting
     * specific messages between client and server.
     *
     * @worldMutation
     *
     * @param id
     * 消息的标识符。
     *
     * The message identifier.
     * @param value
     * 消息内容。
     *
     * The message.
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * 清除该行为包在世界中所声明的一组动态属性。
     *
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
     * 该世界中可用的瞄准辅助预设与类别。
     *
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
     * 返回当前天数。
     *
     * Returns the current day.
     *
     * @returns
     * 当前天数，由世界时间除以每天的刻数得出。新世界的天数为 0。
     *
     * The current day, determined by the world time divided by the
     * number of ticks per day. New worlds start at day 0.
     */
    getDay(): number;
    /**
     * @remarks
     * 返回主世界默认的出生点位置。
     *
     * Returns the default Overworld spawn location.
     *
     * @returns
     * 主世界默认的出生点位置。默认情况下 Y 坐标为 32767，表示玩家出生高度不固定，将由周围方块决定。
     *
     * The default Overworld spawn location. By default, the Y
     * coordinate is 32767, indicating a player's spawn height is
     * not fixed and will be determined by surrounding blocks.
     */
    getDefaultSpawnLocation(): Vector3;
    /**
     * @remarks
     * 从世界中获取难度。
     *
     * Gets the difficulty from the world.
     *
     * @returns
     * 返回世界难度。
     *
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
     * 获取在世界中已设置的动态属性标识符集合。
     *
     * Gets a set of dynamic property identifiers that have been
     * set in this world.
     *
     * @returns
     * 处于活跃状态的动态属性标识符的字符串数组。
     *
     * A string array of active dynamic property identifiers.
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 获取动态属性的总字节数。可用于自行分析，确保不会存储过大的动态属性集合。
     *
     * Gets the total byte count of dynamic properties. This could
     * potentially be used for your own analytics to ensure you're
     * not storing gigantic sets of dynamic properties.
     *
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 根据提供的 id 获取实体。
     *
     * Returns an entity based on the provided id.
     *
     * @param id
     * 实体的 id。
     *
     * The id of the entity.
     * @returns
     * 所请求的实体对象。
     *
     * The requested entity object.
     * @throws
     * 若提供的实体 id 无效，则抛出错误。
     *
     * Throws if the given entity id is invalid.
     */
    getEntity(id: string): Entity | undefined;
    /**
     * @remarks
     * 返回一个可从各种来源生成战利品的管理器。
     *
     * Returns a manager capable of generating loot from an
     * assortment of sources.
     *
     * @returns
     * 一个包含多种战利品生成方法的战利品表管理器。
     *
     * A loot table manager with a variety of loot generation
     * methods.
     */
    getLootTableManager(): LootTableManager;
    /**
     * @remarks
     * 返回当前时间的月相（MoonPhase）。
     *
     * Returns the MoonPhase for the current time.
     *
     */
    getMoonPhase(): MoonPhase;
    /**
     * @remarks
     * 返回由资源包设置项的名称和值构成的映射。
     *
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
     * 设置世界时间。
     *
     * Sets the world time.
     *
     * @worldMutation
     *
     * @param absoluteTime
     * 世界时间，以刻为单位。
     *
     * The world time, in ticks.
     */
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @remarks
     * 为所有玩家设置一个默认出生点位置。
     *
     * Sets a default spawn location for all players.
     *
     * @worldMutation
     *
     * @param spawnLocation
     * 出生点的位置。注意假定其位于主世界（overworld）中。
     *
     * Location of the spawn point. Note that this is assumed to be
     * within the overworld dimension.
     * @throws
     * 若提供的出生点位置超出世界边界，则抛出错误。
     *
     * Throws if the provided spawn location is out of bounds.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /**
     * @remarks
     * 设置世界难度。
     *
     * Sets the worlds difficulty.
     *
     * @worldMutation
     *
     * @param difficulty
     * 想要设置的世界难度。
     *
     * The difficulty we want to set the world to.
     */
    setDifficulty(difficulty: Difficulty): void;
    /**
     * @remarks
     * 同时设置多个动态属性为指定值。
     *
     * Sets multiple dynamic properties with specific values.
     *
     * @param values
     * 由键值对组成的记录，每个条目对应一个动态属性。若数据值为 null，则会移除该属性。
     *
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
     * 设置一天内的时间。
     *
     * Sets the time of day.
     *
     * @worldMutation
     *
     * @param timeOfDay
     * 一天内的时间，以刻为单位，介于 0 至 24000 之间。
     *
     * The time of day, in ticks, between 0 and 24000.
     * @throws
     * 若提供的一天内的时间不在有效范围内，则抛出错误。
     *
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
