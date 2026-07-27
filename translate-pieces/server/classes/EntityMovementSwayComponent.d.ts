/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
 * 允许该实体摆动移动。
 *
 * Allows this entity to move by swaying.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.sway';
}
