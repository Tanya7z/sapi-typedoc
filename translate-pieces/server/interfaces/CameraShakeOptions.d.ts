/* IMPORT */ import { CameraShakeType } from '..';

/**
 * @beta
 * 通过 `Camera.addShake` 对玩家相机应用相机抖动效果的选项。每次调用 `addShake` 都会为指定的 `type` 排队一个新的独立抖动事件；位置抖动和旋转抖动分别在各自的队列中独立跟踪并并发运行。任何时刻的渲染强度是该类型所有活动事件强度的总和，上限为 `4.0`。事件在 `duration` 时间过后自然过期。
 *
 * Options for applying a camera shake effect to a player's
 * camera via `Camera.addShake`. Each call to `addShake` queues
 * a new independent shake event for the specified `type`;
 * positional and rotational shakes are tracked in separate
 * queues and run concurrently. The rendered intensity at any
 * moment is the sum of all active events' intensities for that
 * type, capped at `4.0`. Events expire naturally when their
 * `duration` elapses.
 */
export interface CameraShakeOptions {
    /**
     * @remarks
     * 此抖动事件的持续时间，以秒为单位。必须为正值。
     *
     * How long this shake event lasts, in seconds. Must be a
     * positive value.
     *
     */
    duration: number;
    /**
     * @remarks
     * 此抖动事件的强度。必须为正值，最大值为 `4.0`。同一 `type` 的多个活动事件强度会累加，上限为 `4.0`。
     *
     * The intensity of this shake event. Must be a positive value
     * with a maximum of `4.0`. Multiple active events of the same
     * `type` are summed, capped at `4.0`.
     *
     */
    intensity: number;
    /**
     * @remarks
     * 要应用的相机抖动类型。位置抖动和旋转抖动维护各自独立的事件队列并并发应用，因此添加每种类型的抖动不会使它们相互干扰。
     *
     * The type of camera shake to apply. Positional and rotational
     * shakes maintain separate event queues and are applied
     * concurrently, so adding a shake of each type does not cause
     * them to interfere with one another.
     *
     */
    type: CameraShakeType;
}
