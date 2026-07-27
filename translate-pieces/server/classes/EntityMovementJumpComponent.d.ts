/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
 * 允许该实体跳跃移动。
 *
 * Allows this entity to move by jumping.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.jump';
}
