/* IMPORT */ import { BlockEvent, BlockPistonComponent } from '..';

/**
 * 包含与活塞伸出或缩回相关的信息。
 *
 * Contains information related to changes to a piston
 * expanding or retracting.
 * @seeExample pistonAfterEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    /**
     * 如果活塞正在伸出过程中，则为 `true`。
     *
     * @remarks
     * True if the piston is the process of expanding.
     *
     */
    readonly isExpanding: boolean;
    /**
     * 包含活塞的附加属性和详细信息。
     *
     * @remarks
     * Contains additional properties and details of the piston.
     *
     */
    readonly piston: BlockPistonComponent;
}
