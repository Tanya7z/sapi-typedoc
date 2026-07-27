/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体在熔岩中的移动速度。
 *
 * Defines the lava movement speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:lava_movement';
}
