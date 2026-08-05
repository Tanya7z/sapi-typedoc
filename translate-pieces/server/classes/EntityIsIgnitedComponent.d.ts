/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体当前正在着火。
 *
 * When added, this component signifies that this entity this
 * currently on fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_ignited';
}
