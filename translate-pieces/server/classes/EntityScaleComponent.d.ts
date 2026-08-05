/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体的缩放比例。
 *
 * Defines the scale of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:scale';
}
