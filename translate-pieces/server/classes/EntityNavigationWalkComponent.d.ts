/* IMPORT */ import { EntityNavigationComponent } from '..';

/**
 * 允许该实体像生物走动一样进行导航。
 *
 * Allows this entity to navigate like a walking mob.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.walk';
}
