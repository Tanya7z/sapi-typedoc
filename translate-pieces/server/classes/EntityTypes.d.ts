/* IMPORT */ import { EntityIdentifierType, EntityType } from '..';

/**
 * 用于访问世界中当前可用的所有实体类型。
 *
 * Used for accessing all entity types currently available for
 * use within the world.
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * 使用字符串标识符检索实体类型。
     *
     * Retrieves an entity type using a string-based identifier.
     *
     */
    static get<T = never>(identifier: EntityIdentifierType<NoInfer<T>>): EntityType | undefined;
    /**
     * @remarks
     * 检索此世界中的所有实体类型集合。
     *
     * Retrieves a set of all entity types within this world.
     *
     */
    static getAll(): EntityType[];
}
