/**
 * 包含快捷栏事件的附加过滤选项。
 *
 * Contains additional filtering options for hotbar events.
 */
export interface HotbarEventOptions {
    /**
     * @remarks
     * 要考虑的插槽索引。值应在 0 到 8 之间（含）。如果未指定，则考虑所有插槽。
     *
     * The slot indexes to consider. Values should be between 0 and
     * 8, inclusive. If not specified, all slots are considered.
     *
     * Bounds: [0, 8]
     */
    allowedSlots?: number[];
}
