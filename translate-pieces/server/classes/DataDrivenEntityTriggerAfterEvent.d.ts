/* IMPORT */ import { DefinitionModifier, Entity } from '..';

/**
 * 包含与数据驱动实体事件触发相关的信息——例如，鸡的 `minecraft:ageable_grow_up` 事件。
 *
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    /**
     * @remarks
     * 触发事件的实体。
     *
     * Entity that the event triggered on.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 正在触发的数据驱动事件的名称。
     *
     * Name of the data driven event being triggered.
     *
     */
    readonly eventId: string;
    /**
     * @remarks
     * 一个可更新的组件状态修改列表，是此触发事件的效果。
     *
     * An updateable list of modifications to component state that
     * are the effect of this triggered event.
     *
     */
    getModifiers(): DefinitionModifier[];
}
