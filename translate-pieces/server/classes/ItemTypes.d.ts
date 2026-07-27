/* IMPORT */ import { ItemType } from '..';

/**
 * 返回在 Minecraft 中注册的物品类型集合。
 *
 * Returns the set of item types registered within Minecraft.
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * 若 Minecraft 中存在相应物品类型，则返回该物品类型。
     *
     * Returns a specific item type, if available within Minecraft.
     *
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * 获取 Minecraft 中注册的所有可用物品类型。
     *
     * Retrieves all available item types registered within
     * Minecraft.
     *
     */
    static getAll(): ItemType[];
}
