/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player } from '../../server';
/* IMPORT */ import { ObservableOptions, TextFilteringError } from '..';

/**
 * An observable that holds a string value. Listeners are
 * notified whenever the value changes.
 * 一个持有字符串值的可观察对象。当值发生变化时，会通知所有监听器。
 */
export class ObservableString {
    /**
     * @remarks
     * Creates a new ObservableString with the provided initial
     * string value.
     * 使用提供的初始字符串值创建一个新的 `ObservableString`。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The initial string value for this observable.
     * 此可观察对象的初始字符串值。
     * @param options
     * Optional configuration for the observable, such as whether
     * the value can be written by the client.
     * 可观察对象的可选配置，例如该值是否可由客户端写入。
     */
    constructor(data: string, options?: ObservableOptions);
    /**
     * @remarks
     * Returns the current string value held by this observable.
     * 返回此可观察对象持有的当前字符串值。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    getData(): string;
    /**
     * @remarks
     * Gets filtered data from the Observable (only available for
     * strings). In case of failure, it will return an array of
     * TextFilteringError that can provide more context about the
     * filtering process. For testing purposes, the options are
     * available under 'Creator -> Text Filtering' settings menu.
     * This delay is only applied to the getFilteredText function
     * and can be used to simulate network latency when testing.
     * 从可观察对象获取经过过滤的数据（仅适用于字符串）。如果失败，它将返回一个 `TextFilteringError` 数组，该数组可以提供有关过滤过程的更多上下文。出于测试目的，这些选项可在 'Creator -> Text Filtering' 设置菜单中找到。此延迟仅适用于 `getFilteredText` 函数，并可在测试时用于模拟网络延迟。
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    getFilteredText(player: Player): Promise<TextFilteringError[] | string>;
    /**
     * @remarks
     * Updates the string value held by this observable. If the new
     * value differs from the current value, all subscribed
     * listeners are notified with the new value.
     * 更新此可观察对象持有的字符串值。如果新值与当前值不同，则会使用新值通知所有已订阅的监听器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The new string value to set.
     * 要设置的新字符串值。
     */
    setData(data: string): void;
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
     * A function that receives the new string value each time the
     * observable changes.
     * 每次可观察对象发生变化时接收新字符串值的函数。
     */
    subscribe(callback: (arg0: string) => void): (arg0: string) => void;
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
    unsubscribe(callback: (arg0: string) => void): boolean;
}
