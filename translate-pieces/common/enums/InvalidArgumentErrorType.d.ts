/**
 * 描述 InvalidArgumentError 类型的枚举。
 *
 * An enum describing the type of InvalidArgumentError
 */
export enum InvalidArgumentErrorType {
    /**
     * @remarks
     * 该参数在此域中存在重复。
     *
     * The argument has a duplicate in this domain.
     *
     */
    Duplicate = 'Duplicate',
    /**
     * @remarks
     * 该参数为空。
     *
     * The argument is empty.
     *
     */
    Empty = 'Empty',
    /**
     * @remarks
     * 该参数类型不正确。
     *
     * The argument is not the correct type.
     *
     */
    InvalidType = 'InvalidType',
    /**
     * @remarks
     * 该参数在此域中未知。
     *
     * The argument is unknown in this domain.
     *
     */
    Unknown = 'Unknown',
    /**
     * @remarks
     * 未指定错误类型。
     *
     * No specified error type.
     *
     */
    Unspecified = 'Unspecified',
    /**
     * @remarks
     * 该参数对该类型不受支持。
     *
     * The argument is unsupported for this type.
     *
     */
    UnsupportedValue = 'UnsupportedValue',
}
