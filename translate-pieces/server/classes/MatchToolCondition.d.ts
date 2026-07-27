/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { EnchantInfo, LootItemCondition } from '..';

/**
 * 用于检查是否使用合适的工具触发战利品事件的战利品物品条件。可以描述要比较的物品类型、数量、耐久度、附魔或物品标签数组。
 *
 * Loot item condition that checks whether an appropriate tool
 * was used to trigger the loot event. Can describe item type,
 * count, durability, enchantments, or arrays of item tags to
 * compare against.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MatchToolCondition extends LootItemCondition {
    private constructor();
    /**
     * 此条件通过所需的堆叠大小或数量。
     *
     * @remarks
     * The stack size, or count, required for this condition to
     * pass.
     *
     */
    readonly count: NumberRange;
    /**
     * 此条件通过所需的耐久度值。
     *
     * @remarks
     * The durability value required for this condition to pass.
     *
     */
    readonly durability: NumberRange;
    /**
     * 此条件通过所需的附魔数组。
     *
     * @remarks
     * Array of enchantments required for this condition to pass.
     *
     */
    readonly enchantments: EnchantInfo[];
    /**
     * 此条件通过所需的工具物品名称。
     *
     * @remarks
     * The name of the tool item required for this condition to
     * pass.
     *
     */
    readonly itemName: string;
    /**
     * 此条件通过必须全部匹配的物品标签数组。
     *
     * @remarks
     * Array of item tags which ALL must be matched for this
     * condition to pass.
     *
     */
    readonly itemTagsAll: string[];
    /**
     * 此条件通过至少需要匹配一个的物品标签数组。
     *
     * @remarks
     * Array of item tags, from which at least 1 must be matched
     * for this condition to pass.
     *
     */
    readonly itemTagsAny: string[];
    /**
     * 此条件通过需要恰好零个匹配的物品标签数组。
     *
     * @remarks
     * Array of item tags, from which exactly zero must match for
     * this condition to pass.
     *
     */
    readonly itemTagsNone: string[];
}
