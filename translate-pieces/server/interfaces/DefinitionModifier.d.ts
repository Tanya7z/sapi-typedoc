/* IMPORT */ import { Trigger } from '..';

/**
 * 包含对实体组件定义状态的一组更新。
 *
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export interface DefinitionModifier {
    /**
     * @remarks
     * 获取通过此定义修改将要添加的组件组列表。
     *
     * Retrieves the list of component groups that will be added
     * via this definition modification.
     *
     */
    addedComponentGroups: string[];
    /**
     * @remarks
     * 通过此定义修改将要移除的组件组列表。
     *
     * The list of component groups that will be removed via this
     * definition modification.
     *
     */
    removedComponentGroups: string[];
    /**
     * @beta
     * @remarks
     * 通过此更新将要触发的实体定义事件列表。
     *
     * The list of entity definition events that will be fired via
     * this update.
     *
     */
    triggers: Trigger[];
}
