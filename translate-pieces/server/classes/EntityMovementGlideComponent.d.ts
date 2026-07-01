/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
 * 允许该实体滑翔移动。
 *
 * Allows this entity to move by gliding.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.glide';
}
