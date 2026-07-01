/* IMPORT */ import { ArgumentOutOfBoundsError, EngineError, InvalidArgumentError, NumberRange, PropertyOutOfBoundsError, UnsupportedFunctionalityError } from '../../common';
/* IMPORT */ import { BiomeFilter, BiomeSearchOptions, BiomeType, Block, BlockFillOptions, BlockFilter, BlockPermutation, BlockQueryOptions, BlockRaycastHit, BlockRaycastOptions, BlockType, BlockVolumeBase, CommandError, CommandResult, Entity, EntityIdentifierType, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, EntitySpawnError, ExplosionOptions, InvalidEntityError, ItemStack, ListBlockVolume, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, MolangVariableMap, Player, SoundInstance, SpawnEntityOptions, UnloadedChunksError, Vector3, VectorXZ, WeatherType, WorldSoundOptions } from '..';
/* IMPORT */ import { MinecraftFeatureTypes } from '../../vanilla-data';

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
