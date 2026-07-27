/* IMPORT */ import { ArgumentOutOfBoundsError, EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { BlockBoundingBox, Dimension, InvalidStructureError, JigsawPlaceOptions, JigsawStructurePlaceOptions, PlaceJigsawError, Structure, StructureCreateOptions, StructurePlaceOptions, StructureSaveMode, Vector3 } from '..';

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
