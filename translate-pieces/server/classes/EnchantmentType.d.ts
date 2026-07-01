/**
 * 包含一种附魔类型的信息。
 *
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
    /**
     * @remarks
     * 附魔类型的名称。
     *
     * The name of the enchantment type.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 此附魔类型可拥有的最大等级。
     *
     * The maximum level this type of enchantment can have.
     *
     */
    readonly maxLevel: number;
    /**
     * @throws This function can throw errors.
     */
    constructor(enchantmentType: string);
}
