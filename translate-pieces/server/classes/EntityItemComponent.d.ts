/* IMPORT */ import { EntityComponent } from '..';

/**
 * 为实体添加物品栏属性。
 *
 * Adds inventory properties to an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:item';
}
