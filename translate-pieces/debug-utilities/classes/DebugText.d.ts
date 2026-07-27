/* IMPORT */ import { ArgumentOutOfBoundsError } from '../../common';
/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, RGBA, RawMessage, RawMessageError, Vector3 } from '../../server';

/**
 * 表示世界中带有背景的文本标签的调试形状类。
 *
 * A debug shape class that represents a text label in the
 * world with a background.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugText extends DebugShape {
    /**
     * @remarks
     * 若设为 true，调试文本将渲染背景的背面。默认为 true，但当 `useRotation` 设为 false 时将始终为 false。
     *
     * If set to true, the debug text will render the back-face of
     * the background. Defaults to true but will always be false if
     * 'useRotation' is set to false.
     *
     */
    backfaceVisible: boolean;
    /**
     * @remarks
     * 文本背景板的颜色。若设为 undefined，则使用默认颜色。
     *
     * The color of the background plate of the text. If set to
     * undefined, it will use the default color.
     *
     */
    backgroundColorOverride?: RGBA;
    /**
     * @remarks
     * 若设为 true，文本将被方块或实体遮挡。默认为 false（始终渲染）。
     *
     * If set to true, the text will be hidden behind blocks or
     * entities. By default this is set to false (will always
     * render).
     *
     */
    depthTest: boolean;
    /**
     * @remarks
     * 获取调试文本形状的文本内容。如果 `setText` 传入的是 RawMessage 或 RawText 对象，则返回该 RawText；否则返回字符串。
     *
     * Get the text of the debug text shape. Returns the RawText of
     * the debug text if `setText` was called with a RawMessage or
     * a RawText object, otherwise returns a string.
     *
     */
    readonly text: RawMessage | string;
    /**
     * @remarks
     * 若设为 true，调试文本将渲染文本的背面。默认为 true，但当 `useRotation` 设为 false 时将始终为 false。
     *
     * If set to true, the debug text will render the back-face of
     * the text. Defaults to true but will always be false if
     * 'useRotation' is set to false.
     *
     */
    textBackfaceVisible: boolean;
    /**
     * @remarks
     * 若设为 true，文本将不会朝向相机，而是使用形状自带的旋转。
     *
     * If set to true, the text will not face the camera and
     * instead will use the rotation from the shape.
     *
     */
    useRotation: boolean;
    constructor(
        location: DimensionLocation | Vector3,
        text: RawMessage | string,
    );
    /**
     * @remarks
     * 设置要显示的文本内容。
     *
     * Sets the text to display.
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link RawMessageError}
     */
    setText(text: RawMessage | string): void;
}
