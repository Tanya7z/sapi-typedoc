/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体移动时的摩擦力修改器。
 *
 * Defines the friction modifier for an entity when moving.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:friction_modifier';
}
