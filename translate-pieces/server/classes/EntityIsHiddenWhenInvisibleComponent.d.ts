/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示当实体隐身时，该实体对于其他实体隐藏。
 *
 * When added, this component signifies that this entity hides from other entities when invisible.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}
