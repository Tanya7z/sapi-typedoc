/* IMPORT */ import { RawMessage } from '..';

/**
 * 一个仅包含 `rawtext` 属性的 `RawMessage`。当序列化 `RawMessage` 时，内容会被放入 `rawtext` 属性中，因此在读取已保存的 RawMessage 时非常有用。请参阅 `BlockSignComponent.setText` 和 `BlockSignComponent.getRawText` 获取示例。
 *
 * A `RawMessage` with only the `rawtext` property. When a
 * `RawMessage` is serialized the contents are put into a
 * rawtext property, so this is useful when reading saved
 * RawMessages. See `BlockSignComponent.setText` and
 * `BlockSignComponent.getRawText` for examples.
 */
export interface RawText {
    /**
     * @remarks
     * 关联告示牌当前值的序列化内容。
     *
     * A serialization of the current value of an associated sign.
     *
     */
    rawtext?: RawMessage[];
}
