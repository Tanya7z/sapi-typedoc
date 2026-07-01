/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义此实体的种类。
 *
 * Defines the type family of this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly typeFamily: Set<string>;
    static readonly componentId = 'minecraft:type_family';
    /**
     * @remarks
     * 检查实体是否具有给定的种类。
     *
     * Check if the entity has the given type family.
     *
     * @throws This function can throw errors.
     */
    hasTypeFamily(typeFamily: string): boolean;
}
