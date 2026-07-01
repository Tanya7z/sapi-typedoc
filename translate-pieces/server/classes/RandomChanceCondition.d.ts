/* IMPORT */ import { LootItemCondition } from '..';

/**
 * 将给定值应用于战利品掉落几率的战利品物品条件。
 *
 * Loot item condition that applies a given value to the
 * chances that loot will drop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的几率，范围为 0.0-1.0。
     *
     * The chance, from 0.0-1.0, that loot will drop.
     *
     */
    readonly chance: number;
}
