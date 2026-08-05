/* IMPORT */ import { LootItemCondition } from '..';

/**
 * 战利品物品条件，用于检查掉落来源是否被特定类型的实体击杀。
 *
 * Loot item condition that checks whether or not the drop
 * source was killed by a specific type of entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class KilledByEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     * 示例：`minecraft:skeleton`。
     *
     * The entity type required for this condition to pass.
     * Example: 'minecraft:skeleton'.
     *
     */
    readonly entityType: string;
}
