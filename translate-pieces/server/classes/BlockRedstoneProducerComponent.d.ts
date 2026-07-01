/* IMPORT */ import { BlockComponent, Direction, InvalidBlockComponentError } from '..';

/**
 * 表示可以输出红石信号的方块。
 * 
 * Represents a block that can output a redstone signal.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 获取此方块向电路系统输出的功率。如果方块不再有效或不具有 `minecraft:redstone_producer` 组件，则返回错误。
     * 
     * Gets the power that this block outputs to circuit system.
     * Returns error if block is no longer valid or if block
     * doesn't have a 'minecraft:redstone_producer' component.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidBlockComponentError}
     */
    readonly power: number;
    static readonly componentId = 'minecraft:redstone_producer';
    /**
     * @remarks
     * 获取此方块可以连接到电路并输出功率的面。如果方块不再有效或不具有 `minecraft:redstone_producer` 组件，则返回错误。
     * 
     * Gets the faces of this block that can connect to the circuit
     * and output power. Returns error if block is no longer valid
     * or if block doesn't have a 'minecraft:redstone_producer'
     * component.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getConnectedFaces(): Direction[];
    /**
     * @remarks
     * 获取对方块进行强充能的方块面。如果 `minecraft:redstone_producer` 方块组件未定义 `strongly_powered_face`，则此方法返回 `undefined`。如果方块不再有效或不具有 `minecraft:redstone_producer` 组件，则返回错误。
     * 
     * Gets the block face that strongly powers the block touching
     * it. If the 'minecraft:redstone_producer' block component
     * hasn't defined a 'strongly_powered_face' then this method
     * returns 'undefined'. Returns error if block is no longer
     * valid or if block doesn't have a
     * 'minecraft:redstone_producer' component.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getStronglyPoweredFace(): Direction | undefined;
}
