/* IMPORT */ import { BlockComponent, RGBA, TintMethod } from '..';

/**
 * 表示方块在地图上显示时的颜色。
 * 
 * Represents the color of a block when displayed on a map.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMapColorComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 为该方块定义的基础地图颜色。
     * 
     * Base map color defined for that block.
     *
     * @throws This property can throw when used.
     */
    readonly color: RGBA;
    /**
     * @remarks
     * 返回基色乘以在给定位置评估的着色值的结果。
     * 
     * Returns the base color multiplied to the evaluated tint at
     * the given position.
     *
     */
    readonly tintedColor: RGBA;
    /**
     * @remarks
     * 应用于颜色的着色类型。
     * 
     * Type of tint applied to the color.
     *
     * @throws This property can throw when used.
     */
    readonly tintMethod: TintMethod;
    static readonly componentId = 'minecraft:map_color';
}
