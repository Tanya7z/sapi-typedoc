/* IMPORT */ import { EntityNavigationComponent } from '..';

/**
 * 允许该实体像悬停的生物一样导航。
 *
 * Allows this entity to navigate like a hovering mob.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.hover';
}
