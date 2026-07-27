/* IMPORT */ import { EntityNavigationComponent } from '..';

/**
 * 允许该实体进行通用导航。
 *
 * Allows this entity to navigate generically.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.generic';
}
