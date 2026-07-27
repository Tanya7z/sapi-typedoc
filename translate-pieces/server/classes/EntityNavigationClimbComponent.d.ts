/* IMPORT */ import { EntityComponent } from '..';

/**
 * 允许该实体在方块上攀爬。
 *
 * Allows this entity to climb blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.climb';
}
