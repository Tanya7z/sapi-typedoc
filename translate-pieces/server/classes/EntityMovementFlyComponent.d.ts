/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
 * 允许该实体在空中飞行移动。
 *
 * Allows this entity to move by flying through the air.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.fly';
}
