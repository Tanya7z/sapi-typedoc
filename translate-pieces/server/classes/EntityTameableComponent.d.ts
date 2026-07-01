/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体的可驯服属性。
 *
 * Defines the tameable properties of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:tameable';
}
