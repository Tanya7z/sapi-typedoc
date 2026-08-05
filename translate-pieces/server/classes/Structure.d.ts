/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { BlockPermutation, ISerializable, InvalidStructureError, StructureManager, StructureSaveMode, Vector3 } from '..';

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
