/* IMPORT */ import { ButtonState, InputButton } from '..';

/**
 * 传递给 {@link PlayerButtonInputAfterEventSignal.subscribe} 的接口，用于过滤哪些事件会传递给所提供的回调函数。
 *
 * An interface that is passed into {@link
 * PlayerButtonInputAfterEventSignal.subscribe} that filters
 * out which events are passed to the provided callback.
 */
export interface InputEventOptions {
    /**
     * @remarks
     * 回调函数应针对的按钮。如果未定义，回调函数将针对所有按钮被调用。
     *
     * The buttons the callback should be called for. If undefined,
     * the callback will be called for all buttons.
     *
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * 回调函数应针对的状态。如果未定义，回调函数将针对所有按钮状态被调用。
     *
     * The state the callback should be called for. If undefined,
     * the callback will be called for all button states.
     *
     */
    state?: ButtonState;
}
