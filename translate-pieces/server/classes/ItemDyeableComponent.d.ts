/* IMPORT */ import { ItemComponent, RGB } from '..';

/**
 * 表示物品可被染色。当出现在物品上时，表示该物品可被染色。
 *
 * When present on an item, this item can be dyed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDyeableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 设置并返回该物品当前的颜色。
     *
     * Sets and returns the current color of the item.
     *
     * @worldMutation
     *
     */
    color?: RGB;
    /**
     * @remarks
     * 返回该物品的默认颜色。
     *
     * Returns the default color of the item.
     *
     * @throws This property can throw when used.
     */
    readonly defaultColor?: RGB;
    static readonly componentId = 'minecraft:dyeable';
}
