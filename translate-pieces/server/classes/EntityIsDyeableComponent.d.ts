/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体可以染色。
 *
 * When added, this component signifies that this entity is dyeable.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}
