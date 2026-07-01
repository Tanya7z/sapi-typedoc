/**
 * 此错误表示设置的属性值超出了允许的范围。
 *
 * This type of error is thrown when a property value is out of expected bounds.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PropertyOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * 属性允许的最大值。
     *
     * Max expected value for the condition.
     *
     * @earlyExecution
     *
     */
    readonly maxValue?: number;
    /**
     * @remarks
     * 属性允许的最小值。
     *
     * Min expected value for the condition.
     *
     * @earlyExecution
     *
     */
    readonly minValue?: number;
    /**
     * @remarks
     * 设置的属性值。
     *
     * Value set for the property.
     *
     * @earlyExecution
     *
     */
    readonly value: number;
}
