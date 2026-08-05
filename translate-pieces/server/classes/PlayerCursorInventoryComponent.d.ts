/* IMPORT */ import { EntityComponent, ItemStack } from '..';

/**
 * 表示玩家的光标背包。用于在背包 UI 中的容器之间移动物品。不适用于触屏控制。
 *
 * Represents the players cursor inventory. Used when moving
 * items between between containers in the inventory UI. Not
 * used with touch controls.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * 玩家光标背包中当前的物品堆。
     *
     * @remarks
     * The ItemStack currently in the players cursor inventory.
     *
     * @throws This property can throw when used.
     */
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    /**
     * 清空玩家的光标背包。
     *
     * @remarks
     * Clears the players cursor inventory.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    clear(): void;
}
