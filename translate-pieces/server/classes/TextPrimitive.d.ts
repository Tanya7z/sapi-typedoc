/* IMPORT */ import { ArgumentOutOfBoundsError } from '../../common';
/* IMPORT */ import { DimensionLocation, PrimitiveShape, RGBA, RawMessage, RawMessageError, Vector3 } from '..';

/**
 * A primitive shape class that represents a text label in the
 * world with a background.
 *
 * 一个基本形状类，表示世界中带有背景的文本标签。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TextPrimitive extends PrimitiveShape {
    /**
     * @remarks
     * If set to true, the text primitive will render the back-face
     * of the background. Defaults to true but will always be false
     * if 'useRotation' is set to false.
     *
     * 如果设置为 `true`，文本图元将渲染背景的背面。默认为 `true`，但如果 `'useRotation'` 设置为 `false`，则始终为 `false`。
     */
    backfaceVisible: boolean;
    /**
     * @remarks
     * The color of the background plate of the text. If set to
     * undefined, it will use the default color.
     *
     * 文本背景板的颜色。如果设置为 `undefined`，则使用默认颜色。
     */
    backgroundColorOverride?: RGBA;
    /**
     * @remarks
     * If set to true, the text will be hidden behind blocks or
     * entities. By default this is set to false (will always
     * render).
     *
     * 如果设置为 `true`，文本将被方块或实体遮挡。默认设置为 `false`（始终渲染）。
     */
    depthTest: boolean;
    /**
     * @remarks
     * Get the text of the debug text shape. Returns the RawText of
     * the debug text if `setText` was called with a RawMessage or
     * a RawText object, otherwise returns a string.
     *
     * 获取调试文本形状的文本。如果 `setText` 是通过 `RawMessage` 或 `RawText` 对象调用的，则返回调试文本的 `RawText`，否则返回字符串。
     */
    readonly text: RawMessage | string;
    /**
     * @remarks
     * If set to true, the text primitive will render the back-face
     * of the text. Defaults to true but will always be false if
     * 'useRotation' is set to false.
     *
     * 如果设置为 `true`，文本图元将渲染文本的背面。默认为 `true`，但如果 `'useRotation'` 设置为 `false`，则始终为 `false`。
     */
    textBackfaceVisible: boolean;
    /**
     * @remarks
     * If set to true, the text will not face the camera and
     * instead will use the rotation from the shape.
     *
     * 如果设置为 `true`，文本将不会面向摄像机，而是使用形状的旋转角度。
     */
    useRotation: boolean;
    constructor(location: DimensionLocation | Vector3, text: RawMessage | string);
    /**
     * @remarks
     * Sets the text to display.
     *
     * 设置要显示的文本。
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link RawMessageError}
     */
    setText(text: RawMessage | string): void;
}
