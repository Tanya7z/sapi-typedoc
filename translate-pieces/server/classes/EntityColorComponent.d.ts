/* IMPORT */ import { EntityComponent } from '..';

/**
 * 定义实体的颜色。仅对具有预定义颜色值的特定实体（例如，羊、羊驼、潜影贝）有效。
 *
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (e.g., sheep, llama,
 * shulker).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * Value of this particular color.
     *
     * @worldMutation
     *
     */
    value: number;
    static readonly componentId = 'minecraft:color';
}
