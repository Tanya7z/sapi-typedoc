/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 使用另一张战利品表来填充已掉落容器物品的战利品物品函数。
 *
 * Loot item function that populates a dropped container item
 * using another loot table.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FillContainerFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 用于填充该容器的战利品表路径。
     *
     * The path to the loot table with which the container will be
     * filled.
     *
     */
    readonly lootTable: string;
}
