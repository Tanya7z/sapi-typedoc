/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体当前被击晕。
 *
 * When added, this component signifies that this entity is
 * currently stunned.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stunned';
}
