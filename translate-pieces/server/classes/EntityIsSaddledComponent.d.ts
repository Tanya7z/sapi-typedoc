/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体当前已上鞍。
 *
 * When added, this component signifies that this entity is
 * currently saddled.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_saddled';
}
