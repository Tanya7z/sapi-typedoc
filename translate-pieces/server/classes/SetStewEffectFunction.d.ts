/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 修改掉落煲类物品效果的战利品物品函数。
 *
 * Loot item function that modifies the effects of a dropped
 * stew item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetStewEffectFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 对应于煲类效果的整数数组，将从中随机选择并应用于掉落物品。
     *
     * An array of integers corresponding to stew effects to be
     * randomly chosen from and applied to the dropped item.
     *
     */
    readonly effects: number[];
}
