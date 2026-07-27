/* IMPORT */ import { EnchantmentType } from '..';

/**
 * 此接口表示应用于物品的特定等级附魔。
 *
 * This interface represents a specific leveled enchantment
 * that is applied to an item.
 */
export interface Enchantment {
    /**
     * @remarks
     * 此附魔实例的等级。
     *
     * The level of this enchantment instance.
     *
     */
    level: number;
    /**
     * @remarks
     * 此实例的附魔类型。
     *
     * The enchantment type of this instance.
     *
     */
    type: EnchantmentType;
}
