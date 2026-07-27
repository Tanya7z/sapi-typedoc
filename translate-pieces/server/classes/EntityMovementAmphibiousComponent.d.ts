/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
 * 允许该实体在两栖环境中移动。
 *
 * Allows this entity to move in amphibious environments.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.amphibious';
}
