/**
 * 方块的类型（或模板）。不包含置换数据（状态），仅包含其表示的方块类型。此类型在 1.17.10.21 版本引入。
 * 
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
    private constructor();
    /**
     * @remarks
     * 方块类型名称 - 例如 `minecraft:acacia_stairs`。
     * 
     * Block type name - for example, `minecraft:acacia_stairs`.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 此 BlockType 名称在 .lang 文件中使用的本地化键。
     * 
     * Key for the localization of this BlockType's name used in
     * .lang files.
     *
     */
    readonly localizationKey: string;
}
