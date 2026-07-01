/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体正在骑乘另一个实体。
 *
 * When added, this component signifies that this entity is riding another entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:riding';
}
