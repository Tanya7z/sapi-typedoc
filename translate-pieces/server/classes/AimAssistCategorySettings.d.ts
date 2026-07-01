/* IMPORT */ import { MinecraftBlockTypes, MinecraftEntityTypes } from '../../vanilla-data';

/**
 * 与 AimAssistRegistry.addCategory 一起使用的设置，用于创建 AimAssistCategory。
 * 
 * Settings used with AimAssistRegistry.addCategory for
 * creation of the AimAssistCategory.
 */
export class AimAssistCategorySettings {
    /**
     * @remarks
     * 可选。用于未提供给 setBlockPriorities 的方块类型的默认瞄准优先级。
     * 
     * Optional. Default targeting priority used for block types
     * not provided to setBlockPriorities.
     *
     * @worldMutation
     *
     */
    defaultBlockPriority: number;
    /**
     * @remarks
     * 可选。用于未提供给 setEntityPriorities 的实体类型的默认瞄准优先级。
     * 
     * Optional. Default targeting priority used for entity types
     * not provided to setEntityPriorities.
     *
     * @worldMutation
     *
     */
    defaultEntityPriority: number;
    /**
     * @remarks
     * 用于注册分类的唯一 ID。必须具有命名空间。
     * 
     * The unique Id used to register the category with. Must have
     * a namespace.
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 构造函数，接受一个唯一 ID 来与创建的 AimAssistCategory 关联。必须具有命名空间。
     * 
     * Constructor that takes a unique Id to associate with the
     * created AimAssistCategory. Must have a namespace.
     *
     */
    constructor(identifier: string);
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
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
    /**
     * @remarks
     * 设置用于方块瞄准的优先级设置。
     * 
     * Sets the priority settings used for block targeting.
     *
     * @worldMutation
     *
     * @param blockPriorities
     * 将方块 ID 映射到其优先级设置的记录。数字越大，优先级越高。
     * 
     * A record mapping block Ids to their priority settings.
     * Larger numbers have greater priority.
     */
    setBlockPriorities(
        blockPriorities: Record<keyof typeof MinecraftBlockTypes | string, number>,
    ): void;
    /**
     * @remarks
     * 设置用于方块瞄准的优先级设置。
     * 
     * Sets the priority settings used for block targeting.
     *
     * @worldMutation
     *
     */
    setBlockTagPriorities(blockTagPriorities: Record<string, number>): void;
    /**
     * @remarks
     * 设置用于实体瞄准的优先级设置。
     * 
     * Sets the priority settings used for entity targeting.
     *
     * @worldMutation
     *
     * @param entityPriorities
     * 将实体 ID 映射到其优先级设置的记录。数字越大，优先级越高。
     * 
     * A record mapping entity Ids to their priority settings.
     * Larger numbers have greater priority.
     */
    setEntityPriorities(
        entityPriorities: Record<keyof typeof MinecraftEntityTypes | string, number>,
    ): void;
    /**
     * @remarks
     * 设置用于实体瞄准的优先级设置。
     * 
     * Sets the priority settings used for entity targeting.
     *
     * @worldMutation
     *
     */
    setEntityTypeFamilyPriorities(entityTypeFamilyPriorities: Record<string, number>): void;
}
