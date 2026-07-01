/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
 * 允许该实体通用移动。
 *
 * Allows this entity to move generically.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.generic';
}
