/* IMPORT */ import { MemoryTier } from '..';

/**
 * 包含设备信息，如内存层级。
 *
 * Contains device information, like memory tier.
 */
export class SystemInfo {
    private constructor();
    /**
     * @remarks
     * 描述设备的内存。
     *
     * Describes the memory of the device.
     *
     */
    readonly memoryTier: MemoryTier;
}
