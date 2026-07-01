/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体已蓄力。
 *
 * When added, this component signifies that this entity is charged.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_charged';
}
