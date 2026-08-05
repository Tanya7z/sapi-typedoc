/**
 * 表示用于表达数字可能范围的上下界结构的运算符。
 *
 * Operator represents a lower/upper bound structure for
 * expressing a potential range of numbers.
 */
export interface RangeComparison {
    /**
     * @remarks
     * 范围内的下界。
     *
     * Lower bound within a range.
     *
     */
    lowerBound: number;
    /**
     * @remarks
     * 范围内的上界。
     *
     * Upper bound within a range.
     *
     */
    upperBound: number;
}
