/* IMPORT */ import { EntityNavigationComponent } from '..';

/**
 * 允许该实体像在水中浮游的生物一样导航。
 *
 * Allows this entity to navigate like a floating mob in water.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.float';
}
