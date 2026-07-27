/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体在水下的移动速度。
 *
 * Defines the underwater movement speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityUnderwaterMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:underwater_movement';
}
