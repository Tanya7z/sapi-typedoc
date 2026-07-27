/**
 * 表示物品的类型，例如 Wool。
 *
 * Represents the type of an item - for example, Wool.
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * 返回该物品类型的标识符，例如 'minecraft:apple'。
     *
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于 .lang 文件中对该 ItemType 名称进行本地化的键。
     *
     * Key for the localization of this ItemType's name used in
     * .lang files.
     *
     */
    readonly localizationKey: string;
}
