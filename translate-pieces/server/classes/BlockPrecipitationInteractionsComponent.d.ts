/* IMPORT */ import { BlockComponent, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError } from '..';

/**
 * 表示方块如何与降水（例如雨或雪）交互。
 * 
 * Represents a how a block interacts with precipitation (such
 * as rain or snow).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPrecipitationInteractionsComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:precipitation_interactions';
    /**
     * @remarks
     * 如果降雪会在方块上自然积累，则返回 `true`。如果雪不会在方块上积累，则返回 `false`。
     * 
     * Returns `true` if falling snow will accumulate naturally on
     * the block. Returns `false` if snow will not accumulate on
     * the block.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    accumulatesSnow(): boolean;
    /**
     * @remarks
     * 如果此方块内部可以容纳雪（如被雪淹没的花朵），则返回 `true`。如果此方块内部不能容纳雪，则返回 `false`。
     * 
     * Returns `true` if this block can have snow within it, like a
     * flower submerged in snow. Returns `false` if this block
     * cannot have snow within it.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    isSnowLoggable(): boolean;
    /**
     * @remarks
     * 如果雨水不会穿过方块，则返回 `true`。如果雨水应穿过方块，则返回 `false`。
     * 
     * Returns `true` if rain will not go through the block.
     * Returns `false` if rain should go through the block.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    obstructsRain(): boolean;
}
