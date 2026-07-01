/**
 * 表示方块实例的可配置状态值。例如，楼梯的朝向方向可以作为方块状态访问。
 * 
 * Represents a configurable state value of a block instance.
 * For example, the facing direction of stairs is accessible as
 * a block state.
 */
export class BlockStateType {
    private constructor();
    /**
     * @remarks
     * 方块属性的标识符。
     * 
     * Identifier of the block property.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 方块属性的有效值集合。
     * 
     * A set of valid values for the block property.
     *
     */
    readonly validValues: (boolean | number | string)[];
}
