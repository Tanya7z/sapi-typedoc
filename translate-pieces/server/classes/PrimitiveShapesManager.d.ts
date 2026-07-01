/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { Dimension, PrimitiveShapeError, TextPrimitive } from '..';

/**
 * 用于允许向世界添加和移除文本图元的 Primitive Shapes 类。
 *
 * Primitive Shapes class used to allow adding and removing text primitives to the world.
 */
export class PrimitiveShapesManager {
    private constructor();
    /**
     * @remarks
     * 这是允许的最大图元形状数量。
     *
     * This is the maximum number of allowed primitive shapes.
     *
     */
    readonly maxShapes: number;
    /**
     * @remarks
     * 向世界添加一个新的文本图元。
     *
     * Adds a new text primitive to the world.
     *
     * @param text
     * 要添加的文本图元。
     *
     * The text primitive to be added.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link PrimitiveShapeError}
     */
    addText(text: TextPrimitive, dimension?: Dimension): void;
    /**
     * @remarks
     * 从世界中移除所有文本图元。
     *
     * Removes all text primitives from the world.
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * 从世界中移除一个文本图元实例。这等同于在文本本身调用 remove。
     *
     * Removes an instance of a text primitive from the world. This is equivalent to calling remove on the text itself.
     *
     */
    removeText(text: TextPrimitive): void;
}
