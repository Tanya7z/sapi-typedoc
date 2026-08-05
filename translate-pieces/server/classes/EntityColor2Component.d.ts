/* IMPORT */ import { EntityComponent, PaletteColor } from '..';

/**
 * 定义实体的次要颜色。仅对具有次要预定义颜色值的特定实体（例如，热带鱼）有效。
 *
 * Defines the entity's secondary color. Only works on certain
 * entities that have secondary predefined color values (e.g.,
 * tropical fish).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * Value of this particular color.
     *
     * @throws This property can throw when used.
     */
    readonly value: PaletteColor;
    static readonly componentId = 'minecraft:color2';
}
