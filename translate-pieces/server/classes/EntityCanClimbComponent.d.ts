/* IMPORT */ import { EntityComponent } from '..';

/**
 * 添加时，此组件表示该实体可以爬梯子。
 *
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_climb';
}
