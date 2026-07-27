/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体的移动属性。
 *
 * Defines the movement properties of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement';
}
