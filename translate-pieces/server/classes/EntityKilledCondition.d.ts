/* IMPORT */ import { LootItemCondition } from '..';

/**
 * 战利品物品条件，检查战利品来源是否被击杀。
 *
 * Loot item condition to check that the loot source was killed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityKilledCondition extends LootItemCondition {
    private constructor();
    readonly killedEntity: string;
    readonly killedEntityType: string;
}
