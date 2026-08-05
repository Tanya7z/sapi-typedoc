/* IMPORT */ import { NumberRange } from '../../common';

/**
 * 附魔信息。
 *
 * Enchantment information.
 */
export class EnchantInfo {
    private constructor();
    /**
     * 附魔的标识符。
     *
     * The enchantment identifier.
     */
    readonly enchantment: string;
    /**
     * 值的范围。
     *
     * The value range.
     */
    readonly range: NumberRange;
}
