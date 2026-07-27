/**
 * 指定如何处理可与水共存的方块与现有液体重叠的情况。
 *
 * Specifies how to handle waterloggable blocks overlapping
 * with existing liquid.
 */
export enum LiquidSettings {
    /**
     * @remarks
     * 使可与水共存的方块在与现有液体重叠时变为含水状态。
     *
     * Causes a waterloggable block to become waterlogged, if it
     * overlaps with existing liquid.
     *
     */
    ApplyWaterlogging = 'ApplyWaterlogging',
    /**
     * @remarks
     * 不要使任何与现有液体重叠的可与水共存的方块变为含水状态。
     *
     * Do not waterlog any waterloggable blocks that overlap
     * existing liquid.
     *
     */
    IgnoreWaterlogging = 'IgnoreWaterlogging',
}
