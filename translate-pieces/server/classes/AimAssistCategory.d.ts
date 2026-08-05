/* IMPORT */ import { EngineError } from '../../common';

/**
 * 处理存在于 world.aimAssist 注册表中的瞄准辅助分类的句柄。
 * 
 * Handle to an aim-assist category that exists in the
 * world.aimAssist registry.
 */
export class AimAssistCategory {
    private constructor();
    /**
     * @remarks
     * 用于未在 getBlockPriorities 中找到的方块类型的默认瞄准优先级。
     * 
     * Default targeting priority used for block types not found in
     * getBlockPriorities.
     *
     * @throws This property can throw when used.
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * 用于未在 getEntityPriorities 中找到的实体类型的默认瞄准优先级。
     * 
     * Default targeting priority used for entity types not found
     * in getEntityPriorities.
     *
     * @throws This property can throw when used.
     */
    readonly defaultEntityPriority: number;
    /**
     * @remarks
     * 与该分类关联的唯一 ID。
     * 
     * The unique Id associated with the category.
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     * 
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * 记录方块 ID 到其优先级设置的映射。数字越大，优先级越高。
     * 
     * The record mapping block Ids to their priority settings.
     * Larger numbers have greater priority.
     * @throws This function can throw errors.
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     * 
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * 记录方块标签到其优先级设置的映射。数字越大，优先级越高。
     * 
     * The record mapping block tags to their priority settings.
     * Larger numbers have greater priority.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     * 
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * 记录实体 ID 到其优先级设置的映射。数字越大，优先级越高。
     * 
     * The record mapping entity Ids to their priority settings.
     * Larger numbers have greater priority.
     * @throws This function can throw errors.
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     * 
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * 将实体类型家族映射到 Record 中的优先级设置。数字越大，优先级越高。
     * 
     * Map entity type families to their priority settings in a
     * Record. Larger numbers have greater priority.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
}
