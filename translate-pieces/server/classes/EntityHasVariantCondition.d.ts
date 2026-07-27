/* IMPORT */ import { LootItemCondition } from '..';

/**
 * 战利品物品条件，检查战利品来源是否具有特定的变体。
 *
 * Loot item condition to check that the loot source has a specific variant.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasVariantCondition extends LootItemCondition {
    private constructor();
    readonly variant: number;
}
