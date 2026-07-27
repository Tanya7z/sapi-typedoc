/**
 * 描述命名空间名称错误被抛出原因的枚举。
 *
 * An enumeration describing the reason for the namespace name
 * error being thrown
 */
export enum NamespaceNameErrorReason {
    /**
     * @remarks
     * 使用了受限的命名空间作为命名空间。
     *
     * A restricted namespace was used as the namespace
     *
     */
    DisallowedNamespace = 'DisallowedNamespace',
    /**
     * @remarks
     * 当需要命名空间时，名称缺少命名空间。
     *
     * The name was missing a namespace when one is required
     *
     */
    NoNamespace = 'NoNamespace',
}
