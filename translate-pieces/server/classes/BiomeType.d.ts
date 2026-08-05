/**
 * 描述一种生物群系类型。
 * 
 * Describes a type of biome.
 */
export class BiomeType {
    private constructor();
    /**
     * @remarks
     * 生物群系类型的标识符。
     * 
     * Identifier of the biome type.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 返回该生物群系的标签列表。
     * 
     * Returns a list of the biome's tags.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查生物群系是否拥有所有提供的标签。
     * 
     * Checks if the biome has all of the provided tags.
     *
     * @param tags
     * 要检查的标签列表。
     * 
     * The list of tags to check against the biome.
     */
    hasTags(tags: string[]): boolean;
}
