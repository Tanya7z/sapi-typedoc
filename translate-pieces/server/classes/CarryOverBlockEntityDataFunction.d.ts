/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @beta
 * 战利品物品函数，会尝试将被破坏方块的方块实体数据复制到掉落的物品上。
 *
 * Loot item function that will try to copy the block entity
 * data from the destroyed block to the dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CarryOverBlockEntityDataFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 如果为 `true`，并且方块实体具有 `dynamic_properties`，则该函数会将动态属性从方块实体复制到掉落的物品上。
     *
     * If true, and if the block entity had dynamic_properties, the
     * function will copy the dynamic properties from the block
     * entity to the dropped item.
     *
     */
    readonly dynamicProperties: boolean;
}
