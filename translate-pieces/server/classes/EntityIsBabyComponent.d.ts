/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体是幼年体。
 *
 * When added, this component signifies that this entity is a baby.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_baby';
}
