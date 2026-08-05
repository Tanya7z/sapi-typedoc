/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体可以推开其他实体的能力。
 *
 * Defines the ability of an entity to push through other entities.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:push_through';
}
