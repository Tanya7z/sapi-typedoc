/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体带有箱子。
 *
 * When added, this component signifies that this entity is chested.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_chested';
}
