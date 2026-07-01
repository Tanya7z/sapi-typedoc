/**
 * 表示一种实体类型的信息。
 *
 * Represents information about a type of entity.
 */
export class EntityType {
    private constructor();
    /**
     * @remarks
     * 此实体类型的标识符——例如，`minecraft:skeleton`。
     *
     * Identifier of this entity type - for example,
     * 'minecraft:skeleton'.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于在 `.lang` 文件中本地化此 EntityType 名称的键。
     *
     * Key for the localization of this EntityType's name used in
     * .lang files.
     *
     */
    readonly localizationKey: string;
}
