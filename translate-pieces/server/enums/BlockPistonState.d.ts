/**
 * 描述方块活塞状态的枚举。
 *
 * An enumeration describing the state of a block piston.
 */
export enum BlockPistonState {
    /**
     * @remarks
     * 活塞是否完全伸出。
     *
     * Whether the piston is fully expanded.
     *
     */
    Expanded = 'Expanded',
    /**
     * @remarks
     * 活塞是否正在伸出过程中。
     *
     * Whether the piston is in the process of expanding.
     *
     */
    Expanding = 'Expanding',
    /**
     * @remarks
     * 活塞是否完全收回。
     *
     * Whether the piston is fully retracted.
     *
     */
    Retracted = 'Retracted',
    /**
     * @remarks
     * 活塞是否正在收回过程中。
     *
     * Whether the piston is in the process of retracting.
     *
     */
    Retracting = 'Retracting',
}
