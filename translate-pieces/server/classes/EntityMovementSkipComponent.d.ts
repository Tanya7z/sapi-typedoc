/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
 * 允许该实体跳跃式移动。
 *
 * Allows this entity to move by skipping.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.skip';
}
