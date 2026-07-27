/* IMPORT */ import { DimensionType } from '..';

/**
 * 用于访问所有可用的维度类型。目前仅适用于原版维度。
 *
 * Used for accessing all available dimension types. Currently
 * only works with Vanilla dimensions.
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * 使用基于字符串的标识符检索维度类型。目前仅适用于原版维度。
     *
     * Retrieves a dimension type using a string-based identifier.
     * Currently only works with Vanilla dimensions.
     *
     * @earlyExecution
     *
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * 检索所有维度类型的数组。目前仅适用于原版维度。
     *
     * Retrieves an array of all dimension types. Currently only
     * works with Vanilla dimensions.
     *
     * @earlyExecution
     *
     */
    static getAll(): DimensionType[];
}
