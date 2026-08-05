/* IMPORT */ import { EnchantmentType } from '..';

/**
 * 包含此世界中可用的 Minecraft 附魔类型目录。
 *
 * Contains a catalog of Minecraft Enchantment Types that are
 * available in this world.
 */
export class EnchantmentTypes {
    private constructor();
    /**
     * @remarks
     * 使用指定标识符检索附魔。
     *
     * Retrieves an enchantment with the specified identifier.
     *
     * @param enchantmentId
     * 附魔的标识符。例如，`minecraft:flame`。
     *
     * Identifier of the enchantment.  For example,
     * "minecraft:flame".
     * @returns
     * 如果可用，返回表示指定附魔的 EnchantmentType 对象。
     *
     * If available, returns an EnchantmentType object that
     * represents the specified enchantment.
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
    /**
     * @remarks
     * 返回所有可用附魔类型的集合。
     *
     * Returns a collection of all available enchantment types.
     *
     */
    static getAll(): EnchantmentType[];
}
