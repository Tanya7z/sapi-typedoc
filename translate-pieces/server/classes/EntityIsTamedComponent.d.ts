/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体当前已被驯服。
 *
 * When added, this component signifies that this entity is
 * currently tamed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_tamed';
}
