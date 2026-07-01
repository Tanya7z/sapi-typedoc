/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体的飞行速度。
 *
 * Defines the flying speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当前飞行速度值。
     *
     * Current flying speed value.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:flying_speed';
}
