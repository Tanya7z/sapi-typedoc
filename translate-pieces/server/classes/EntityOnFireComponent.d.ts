/* IMPORT */ import { EntityComponent } from '..';

/**
 * 当添加时，此组件表示该实体着火时的行为表现。
 *
 * When added, this component signifies that this entity on fire behavior.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:onfire';
}
