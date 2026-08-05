/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
 * 允许该实体悬停移动。
 *
 * Allows this entity to move by hovering.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.hover';
}
