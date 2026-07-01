/**
 * 自定义命令注册失败的原因。
 *
 * Reason why custom command registration failed.
 */
export enum CustomCommandErrorReason {
    /**
     * @remarks
     * 命令名称已注册。
     *
     * Command name already registered.
     *
     */
    AlreadyRegistered = 'AlreadyRegistered',
    /**
     * @remarks
     * 自定义命令引用了一个尚未注册的枚举。
     *
     * Custom Command references an enum that has not been
     * registered.
     *
     */
    EnumDependencyMissing = 'EnumDependencyMissing',
    /**
     * @remarks
     * 提供的自定义命令命名空间与此附加包之前的注册不匹配。
     *
     * Supplied Custom Command namespace does not match previous
     * registrations for this add-on.
     *
     */
    NamespaceMismatch = 'NamespaceMismatch',
    /**
     * @remarks
     * 在 CustomCommand 中定义了太多命令参数。
     *
     * Too many command parameters defined in CustomCommand.
     *
     */
    ParameterLimit = 'ParameterLimit',
    /**
     * @remarks
     * 在世界初始化事件之后无法访问自定义命令注册表。
     *
     * Custom command registry can not be accessed after world
     * initialized event.
     *
     */
    RegistryInvalid = 'RegistryInvalid',
    /**
     * @remarks
     * 重载期间不能重新定义命令参数。只有脚本闭包本身可以更改。
     *
     * Command parameters cannot be redefined during reload. Only
     * the script closure itself can be changed.
     *
     */
    RegistryReadOnly = 'RegistryReadOnly',
    /**
     * @beta
     * @remarks
     * 非枚举类型的命令参数不能使用 enumName。
     *
     * Non enum type command parameters cannot use enumName.
     *
     */
    UnexpectedEnumName = 'UnexpectedEnumName',
}
