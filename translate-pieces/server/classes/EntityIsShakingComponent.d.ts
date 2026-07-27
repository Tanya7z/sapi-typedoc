/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体当前正在颤抖。
 *
 * When added, this component signifies that this entity is
 * currently shaking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_shaking';
}
