/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义该实体的强度属性，用于决定该实体可携带装备的数量。
 *
 * Defines the entity's strength, which determines the amount of equipment the entity can carry.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:strength';
}
