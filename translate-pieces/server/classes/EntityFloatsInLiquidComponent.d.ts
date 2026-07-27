/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体可以在液体方块中漂浮。
 *
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:floats_in_liquid';
}
