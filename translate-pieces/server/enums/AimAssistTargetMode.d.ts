/**
 * 指定用于瞄准辅助的不同目标模式。
 *
 * Specifies different targeting modes for use in aim-assist.
 */
export enum AimAssistTargetMode {
    /**
     * @remarks
     * 基于角度的目标锁定。
     *
     * Angle based targeting.
     *
     */
    Angle = 'Angle',
    /**
     * @remarks
     * 基于距离的目标锁定。
     *
     * Distance based targeting.
     *
     */
    Distance = 'Distance',
}
