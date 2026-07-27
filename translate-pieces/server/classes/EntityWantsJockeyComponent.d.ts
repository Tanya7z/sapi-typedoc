/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体想要成为骑乘者。
 *
 * When added, this component signifies that this entity wants to become a jockey.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:wants_jockey';
}
