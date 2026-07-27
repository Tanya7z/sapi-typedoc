/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
 * 允许该实体在平面上基本移动。
 *
 * Allows this entity to move basically on a plane.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.basic';
}
