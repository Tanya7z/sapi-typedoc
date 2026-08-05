/* IMPORT */ import { BlockComponent, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, MovementType, StickyType } from '..';

/**
 * 表示可以移动的方块（例如活塞）。
 * 
 * Represents a block that can move (such as a piston).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMovableComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly movementType: MovementType;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly stickyType: StickyType;
    static readonly componentId = 'minecraft:movable';
}
