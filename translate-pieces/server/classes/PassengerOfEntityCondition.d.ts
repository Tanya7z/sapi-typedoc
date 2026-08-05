/* IMPORT */ import { LootItemCondition } from '..';

/**
 * 用于检查战利品实体当前是否为特定类型实体乘客的战利品条件。
 *
 * Loot item condition that checks whether the looting entity
 * is currently a passenger of a specific type of entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PassengerOfEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * 此条件通过所需的实体类型。
     *
     * @remarks
     * The entity type required for this condition to pass.
     *
     */
    readonly entityType: string;
}
