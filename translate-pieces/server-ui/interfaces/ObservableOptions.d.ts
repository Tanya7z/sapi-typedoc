/**
 * 用于创建 Observable 的配置选项。控制可观察值的访问和修改方式。
 *
 * Configuration options for creating an Observable. Controls
 * how the observable value can be accessed and modified.
 */
export interface ObservableOptions {
    /**
     * @remarks
     * 当为 `true` 时，允许客户端直接写入此可观察对象的值，从而实现 UI 与可观察对象之间的双向数据绑定。
     *
     * When true, allows the client to write to this observable's
     * value directly, enabling two-way data binding between the UI
     * and the observable.
     *
     */
    clientWritable: boolean;
}
