/* IMPORT */ import { MinecraftBlockTypes, MinecraftEntityTypes, MinecraftItemTypes } from '../../vanilla-data';

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
