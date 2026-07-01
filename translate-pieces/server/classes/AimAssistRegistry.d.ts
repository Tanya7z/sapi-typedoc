/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { AimAssistCategory, AimAssistCategorySettings, AimAssistPreset, AimAssistPresetSettings, NamespaceNameError } from '..';

/**
 * 用于管理世界瞄准辅助设置的 API 容器。
 * 
 * A container for APIs related to the world's aim-assist
 * settings.
 */
export class AimAssistRegistry {
    private constructor();
    /**
     * @remarks
     * 未另行指定时使用的默认瞄准辅助分类 ID。
     * 
     * The default aim-assist category Id that is used when not
     * otherwise specified.
     *
     */
    static readonly DefaultCategoryId = 'minecraft:default';
    /**
     * @remarks
     * 未另行指定时使用的默认瞄准辅助预设 ID。
     * 
     * The default aim-assist preset Id that is used when not
     * otherwise specified.
     *
     */
    static readonly DefaultPresetId = 'minecraft:aim_assist_default';
    /**
     * @remarks
     * 向注册表添加一个瞄准辅助分类。
     * 
     * Adds an aim-assist category to the registry.
     *
     * @worldMutation
     *
     * @param category
     * 用于创建新分类的分类设置。
     * 
     * The category settings used to create the new category.
     * @returns
     * 创建的分类句柄。
     * 
     * The created category handle.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addCategory(category: AimAssistCategorySettings): AimAssistCategory;
    /**
     * @remarks
     * 向注册表添加一个瞄准辅助预设。
     * 
     * Adds an aim-assist preset to the registry.
     *
     * @worldMutation
     *
     * @param preset
     * 用于创建新预设的预设设置。
     * 
     * The preset settings used to create the new preset.
     * @returns
     * 创建的预设句柄。
     * 
     * The created preset handle.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
    /**
     * @remarks
     * 获取注册表中所有可用的分类。
     * 
     * Gets all available categories in the registry.
     *
     * @returns
     * 所有可用分类对象的数组。
     * 
     * An array of all available category objects.
     */
    getCategories(): AimAssistCategory[];
    /**
     * @remarks
     * 获取与提供的 ID 关联的分类。
     * 
     * Gets the category associated with the provided Id.
     *
     * @worldMutation
     *
     * @returns
     * 如果存在则返回分类对象，否则返回 undefined。
     * 
     * The category object if it exists, otherwise returns
     * undefined.
     */
    getCategory(categoryId: string): AimAssistCategory | undefined;
    /**
     * @remarks
     * 获取与提供的 ID 关联的预设。
     * 
     * Gets the preset associated with the provided Id.
     *
     * @worldMutation
     *
     * @param presetId
     * 要检索的预设的 ID。必须具有命名空间。
     * 
     * The Id of the preset to retrieve. Must have a namespace.
     * @returns
     * 如果存在则返回预设对象，否则返回 undefined。
     * 
     * The preset object if it exists, otherwise returns undefined.
     */
    getPreset(presetId: string): AimAssistPreset | undefined;
    /**
     * @remarks
     * 获取注册表中所有可用的预设。
     * 
     * Gets all available presets in the registry.
     *
     * @returns
     * 所有可用预设对象的数组。
     * 
     * An array of all available preset objects.
     */
    getPresets(): AimAssistPreset[];
}
