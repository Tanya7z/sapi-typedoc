/* IMPORT */ import { Block, BlockPermutation, BlockType, Entity, EntityType, InvalidEntityError, ItemStack, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, LootTable, UnloadedChunksError } from '..';

/**
 * 战利品表相关 API 的管理器。可根据方块和实体的战利品表生成掉落物。
 *
 * Manager for Loot Table related APIs. Allows for generation
 * of drops from blocks and entities according to their loot
 * tables.
 */
export class LootTableManager {
    private constructor();
    /**
     * @remarks
     * 模拟挖掘行为，根据给定的方块生成战利品。
     *
     * Generates loot from a given block as if it had been mined.
     *
     * @param block
     * 要生成战利品的方块。
     *
     * The block to generate loot from.
     * @param tool
     * 可选。用于挖掘的工具。
     *
     * Optional. The tool to use in the looting operation.
     * @returns
     * 战利品掉落事件中掉落的物品堆数组。若没有掉落物则为空数组；若所提供的工具不足以挖掘该方块，则返回 undefined。
     *
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     * @throws
     * 当方块位于未加载的区块中，或方块位置超出世界边界时抛出。
     *
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
     * 模拟挖掘行为，根据给定的方块状态（BlockPermutation）生成战利品。
     *
     * Generates loot from a given block permutation as if it had
     * been mined.
     *
     * @param tool
     * 可选。用于挖掘的工具。
     *
     * Optional. The tool to use in the looting operation.
     * @returns
     * 战利品掉落事件中掉落的物品堆数组。若没有掉落物则为空数组；若所提供的工具不足以挖掘该方块，则返回 undefined。
     *
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     */
    generateLootFromBlockPermutation(blockPermutation: BlockPermutation, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 模拟挖掘行为，根据给定的方块类型生成战利品。
     *
     * Generates loot from a given block type as if it had been
     * mined.
     *
     * @param tool
     * 可选。用于挖掘的工具。
     *
     * Optional. The tool to use in the looting operation.
     * @returns
     * 战利品掉落事件中掉落的物品堆数组。若没有掉落物则为空数组；若所提供的工具不足以挖掘该方块，则返回 undefined。
     *
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     */
    generateLootFromBlockType(scriptBlockType: BlockType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 模拟击杀行为，根据给定的实体生成战利品。
     *
     * Generates loot from given a entity as if it had been killed.
     *
     * @param tool
     * 可选。用于击杀的工具。
     *
     * Optional. The tool to use in the looting operation.
     * @returns
     * 战利品掉落事件中掉落的物品堆数组。若没有掉落物则为空数组；若实体无效则返回 undefined。
     *
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
     * 模拟击杀行为，根据给定的实体类型生成战利品。
     *
     * Generates loot from given a entity type as if it had been
     * killed.
     *
     * @param tool
     * 可选。用于击杀的工具。
     *
     * Optional. The tool to use in the looting operation.
     * @returns
     * 战利品掉落事件中掉落的物品堆数组。若没有掉落物则为空数组。
     *
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped.
     */
    generateLootFromEntityType(entityType: EntityType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 根据给定的战利品表（LootTable）生成战利品。
     *
     * Generates loot from a given LootTable.
     *
     * @param tool
     * 可选。用于挖掘的工具。
     *
     * Optional. The tool to use in the looting operation.
     * @returns
     * 战利品掉落事件中掉落的物品堆数组。若没有掉落物则为空数组；若所提供的工具不足以挖掘该方块，则返回 undefined。
     *
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     */
    generateLootFromTable(lootTable: LootTable, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从当前关卡的注册表中获取单个战利品表。
     *
     * Retrieves a single loot table from the level's current
     * registry.
     *
     * @param path
     * 要获取的战利品表路径。不含文件扩展名，也不含 `loot_tables/` 前缀。例如：`entities/creeper`。
     *
     * Path to the table to retrieve. Does not include file
     * extension, or 'loot_tables/' folder prefix. Example:
     * `entities/creeper`.
     * @returns
     * 若找到对应的战利品表则返回该 LootTable，若所提供的路径不存在对应战利品表则返回 `undefined`。
     *
     * Returns a LootTable if one is found, or `undefined` if the
     * provided path does not correspond to an existing loot table.
     */
    getLootTable(path: string): LootTable | undefined;
}
