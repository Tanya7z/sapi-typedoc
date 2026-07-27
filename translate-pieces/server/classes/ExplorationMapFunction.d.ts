/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 战利品物品函数，修改掉落的藏宝图以标记一个位置。
 *
 * Loot item function that modifies a dropped treasure map to
 * mark a location.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplorationMapFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 决定将掉落哪种类型的藏宝图。
     *
     * Determines which type of treasure map will drop.
     *
     */
    readonly destination: string;
}
