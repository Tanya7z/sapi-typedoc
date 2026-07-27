/**
 * 描述设备的内存。
 *
 * Describes the memory of a device.
 */
export enum MemoryTier {
    /**
     * @remarks
     * 超低等级的最大内存为 1.5GB。
     *
     * Max memory for Super Low Tier is 1.5GBs.
     *
     */
    SuperLow = 0,
    /**
     * @remarks
     * 低等级的最大内存为 2GB。
     *
     *  Max memory for Low Tier is 2GBs.
     *
     */
    Low = 1,
    /**
     * @remarks
     * 中等级的最大内存为 4GB。
     *
     * Max memory for Mid Tier is 4GBs.
     *
     */
    Mid = 2,
    /**
     * @remarks
     * 高等级的最大内存为 8GB。
     *
     * Max memory for High Tier is 8GBs.
     *
     */
    High = 3,
    /**
     * @remarks
     * 超高等级的内存超过 8GB。
     *
     * Memory for Super High Tier is above 8GBs.
     *
     */
    SuperHigh = 4,
}
