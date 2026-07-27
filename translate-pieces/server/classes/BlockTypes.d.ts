/* IMPORT */ import { BlockType } from '..';

/**
 * 包含此世界中可用的 Minecraft 方块类型目录。
 * 
 * Contains a catalog of Minecraft Block Types that are
 * available in this world.
 */
export class BlockTypes {
    private constructor();
    /**
     * @remarks
     * 返回指定标识符的 BlockType 对象。
     * 
     * Returns a BlockType object for the specified identifier.
     *
     * @param typeName
     * 方块类型的标识符。应采用 namespace:id 模式，例如 minecraft:dirt。
     * 
     * Identifier of the block type. Should follow a namespace:id
     * pattern, such as minecraft:dirt.
     * @returns
     * BlockType 对象，如果该方块类型在此世界中不可用则返回 `undefined`。
     * 
     * BlockType object, or undefined if the block type is not
     * available within this world.
     */
    static get(typeName: string): BlockType | undefined;
    /**
     * @remarks
     * 返回所有可用方块类型的集合。
     * 
     * Returns a collection of all available block types.
     *
     */
    static getAll(): BlockType[];
}
