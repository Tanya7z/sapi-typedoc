/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 修改掉落盔甲物品的纹饰的战利品物品函数。
 *
 * Loot item function that modifies the trim on a dropped armor
 * item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetArmorTrimFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于盔甲纹饰的材料。
     *
     * The material to apply to the armor trim.
     *
     */
    readonly material: string;
    /**
     * @remarks
     * 应用于盔甲纹饰的图案。
     *
     * The pattern to apply to the armor trim.
     *
     */
    readonly pattern: string;
}
