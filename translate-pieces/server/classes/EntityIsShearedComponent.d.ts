/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体已被剪过毛。
 *
 * When added, this component signifies that this entity is sheared.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_sheared';
}
