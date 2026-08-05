/* IMPORT */ import { LootItemFunction } from '..';

/**
 * 为掉落的刷怪蛋分配实体类型的战利品物品函数。不适用于除刷怪蛋外的任何物品。
 *
 * Loot item function that assigns an entity type to a dropped
 * spawn egg. Does not work on any items other than spawn eggs.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetSpawnEggFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 分配给掉落刷怪蛋的实体。
     *
     * The entity to be assigned to the dropped egg.
     *
     */
    readonly id: string;
}
