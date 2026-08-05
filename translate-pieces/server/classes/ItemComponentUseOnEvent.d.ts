/* IMPORT */ import { BlockPermutation, Entity, ItemUseOnEvent } from '..';

/**
 * 包含通过组件对某个方块使用物品时相关的信息。
 *
 * Contains information regarding the use of an item on a block
 * via a component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * 对方块使用该物品的实体。
     *
     * The entity that used the item on the block.
     *
     */
    readonly source: Entity;
    /**
     * @remarks
     * 物品被使用的方块所对应的方块状态。
     *
     * The block permutation that the item was used on.
     *
     */
    readonly usedOnBlockPermutation: BlockPermutation;
}
