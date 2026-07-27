/* IMPORT */ import { DataDrivenEntityTriggerAfterEvent, EntityDataDrivenTriggerEventOptions } from '..';

/**
 * 包含与数据驱动实体事件触发相关的事件注册信息——例如，鸡的 `minecraft:ageable_grow_up` 事件。
 *
 * Contains event registration related to firing of a data
 * driven entity event - for example, the
 * minecraft:ageable_grow_up event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在数据驱动实体事件触发后被调用。
     *
     * Adds a callback that will be called after a data driven
     * entity event is triggered.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在数据驱动实体事件触发后不再被调用。
     *
     * Removes a callback that will be called after a data driven
     * entity event is triggered.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}
