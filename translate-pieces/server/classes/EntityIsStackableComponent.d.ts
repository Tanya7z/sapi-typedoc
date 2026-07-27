/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体可以被堆叠。
 *
 * When added, this component signifies that this entity can be
 * stacked.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stackable';
}
