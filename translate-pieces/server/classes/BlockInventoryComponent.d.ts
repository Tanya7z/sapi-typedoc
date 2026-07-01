/* IMPORT */ import { BlockComponent, Container, ItemStack } from '..';

/**
 * 表示世界中方块的库存。用于像箱子这样的方块。
 * @seeExample placeItemsInChest.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 持有 {@link ItemStack} 的容器。
     *
     * @throws This property can throw when used.
     */
    readonly container?: Container;
    static readonly componentId = 'minecraft:inventory';
}
