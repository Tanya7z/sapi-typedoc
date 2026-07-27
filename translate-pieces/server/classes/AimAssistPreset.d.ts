/* IMPORT */ import { EngineError } from '../../common';

/**
 * 处理存在于 world.aimAssist 注册表中的瞄准辅助预设的句柄。
 * 
 * Handle to an aim-assist preset that exists in the
 * world.aimAssist registry.
 */
export class AimAssistPreset {
    private constructor();
    /**
     * @remarks
     * 可选。用于未提供给 setItemSettings 的项目的默认瞄准辅助分类 ID。
     * 
     * Optional. Default aim-assist category Id used for items not
     * provided to setItemSettings.
     *
     * @throws This property can throw when used.
     */
    readonly defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手的瞄准辅助分类 ID。
     * 
     * Optional. Aim-assist category Id used for an empty hand.
     *
     * @throws This property can throw when used.
     */
    readonly handSettings?: string;
    /**
     * @remarks
     * 与该预设关联的唯一 ID。
     * 
     * The unique Id associated with the preset.
     *
     */
    readonly identifier: string;
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
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getExcludedBlockTagTargets(): string[];
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
     * @throws This function can throw errors.
     */
    getExcludedBlockTargets(): string[];
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
     * @throws This function can throw errors.
     */
    getExcludedEntityTargets(): string[];
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
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getExcludedEntityTypeFamilyTargets(): string[];
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
     * @throws This function can throw errors.
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
     * @throws This function can throw errors.
     */
    getLiquidTargetingItems(): string[];
}
