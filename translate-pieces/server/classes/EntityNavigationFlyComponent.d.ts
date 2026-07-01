/* IMPORT */ import { EntityNavigationComponent } from '..';

/**
 * 允许该实体像在空气中飞行的生物一样导航。
 *
 * Allows this entity to navigate like a flying mob in the air.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.fly';
}
