/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { ItemComponent } from '..';

/**
 * 表示物品耐久组件。当出现在物品上时，表示该物品在使用过程中会损耗耐久。
 * 注意，此组件仅对数驱物品生效。
 *
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
 * @seeExample giveHurtDiamondSword.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 此物品当前的损坏值。
     * 物品当前耐久度为 `maxDurability - damage`。
     * 当被设置为 负数，`Infinity`，`NaN` 等值时，值为 0。
     * 
     * Returns the current damage level of this particular item.
     *
     * @worldMutation
     *
     */
    damage: number;
    /**
     * @remarks
     * 表示该物品在损坏前可以承受的损坏值。
     * 
     * Represents the amount of damage that this item can take
     * before breaking.
     *
     * @throws This property can throw when used.
     */
    readonly maxDurability: number;
    /**
     * @remarks
     * 表示物品是否会损坏或损失耐久度。将其设置为 true 会暂时移除物品的耐久度 HUD，并暂停该物品的耐久度损失。
     *
     * Whether an item breaks or loses durability. Setting to true
     * temporarily removes item's durability HUD, and freezes
     * durability loss on item.
     *
     * @worldMutation
     *
     */
    unbreakable: boolean;
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * 返回根据 `damageRange` 属性生成的最大损坏概率，
     * 附带一个耐久附魔等级作为可选参数。
     * 
     * Returns the maximum chance that this item would be damaged
     * using the damageRange property, given an unbreaking
     * enchantment level.
     *
     * @worldMutation
     *
     * @param unbreakingEnchantmentLevel
     * 耐久魔咒等级，在计算损坏概率时受到此参数的影响。
     * 传入的 `unbreakingEnchantmentLevel` 参数必须介于 [0, 3]。
     * 
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be within the
     * range [0, 3].
     * Defaults to: 0
     * Bounds: [0, 3]
     * @returns 使用时的最大损坏概率。
     * @throws
     * 若 `unbreakingEnchantmentLevel` 参数未在范围内时，抛出 `TypeError` 。
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks
     * 返回用于计算物品损失耐久的概率范围。最终物品损失耐久的概率将落在此范围中。
     * 
     * A range of numbers that is used to calculate the damage
     * chance for an item. The damage chance will fall within this
     * range.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getDamageChanceRange(): NumberRange;
}
