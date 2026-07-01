/* IMPORT */ import { EntityComponent } from '..';

/**
 * 添加时，此组件表示该实体可以飞行，且寻路器不会限制在下方需要有实心方块的路径上。
 *
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}
