/* IMPORT */ import { ObservableOptions, UIRawMessage } from '..';

/**
 * An observable that holds a UIRawMessage value. Listeners are
 * notified whenever the value changes.
 * 一个持有 `UIRawMessage` 值的可观察对象。当值发生变化时，会通知所有监听器。
 */
export class ObservableUIRawMessage {
    /**
     * @remarks
     * Creates a new ObservableUIRawMessage with the provided
     * initial UIRawMessage value.
     * 使用提供的初始 `UIRawMessage` 值创建一个新的 `ObservableUIRawMessage`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The initial UIRawMessage value for this observable.
     * 此可观察对象的初始 `UIRawMessage` 值。
     * @param options
     * Optional configuration for the observable, such as whether
     * the value can be written by the client.
     * 可观察对象的可选配置，例如该值是否可由客户端写入。
     */
    constructor(data: UIRawMessage, options?: ObservableOptions);
    /**
     * @remarks
     * Returns the current UIRawMessage value held by this
     * observable.
     * 返回此可观察对象持有的当前 `UIRawMessage` 值。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    getData(): UIRawMessage;
    /**
     * @remarks
     * Updates the UIRawMessage value held by this observable. If
     * the new value differs from the current value, all subscribed
     * listeners are notified with the new value.
     * 更新此可观察对象持有的 `UIRawMessage` 值。如果新值与当前值不同，则会使用新值通知所有已订阅的监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The new UIRawMessage value to set.
     * 要设置的新 `UIRawMessage` 值。
     */
    setData(data: UIRawMessage): void;
    /**
     * @remarks
     * Registers a callback to be invoked whenever the observable's
     * value changes. Returns the callback, which can be passed to
     * unsubscribe to remove the listener.
     * 注册一个回调函数，当可观察对象的值发生变化时调用。返回该回调函数，可将其传递给 `unsubscribe` 以移除监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * A function that receives the new UIRawMessage value each
     * time the observable changes.
     * 每次可观察对象发生变化时接收新 `UIRawMessage` 值的函数。
     */
    subscribe(callback: (arg0: UIRawMessage) => void): (arg0: UIRawMessage) => void;
    /**
     * @remarks
     * Removes a previously registered listener from this
     * observable. Returns true if the listener was found and
     * removed, false if it was not found.
     * 从此可观察对象中移除先前注册的监听器。如果找到并移除了监听器，则返回 `true`；如果未找到，则返回 `false`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * The callback handle previously returned by subscribe.
     * 先前由 `subscribe` 返回的回调句柄。
     */
    unsubscribe(callback: (arg0: UIRawMessage) => void): boolean;
}
