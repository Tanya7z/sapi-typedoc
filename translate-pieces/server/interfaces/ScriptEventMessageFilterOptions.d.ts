/**
 * 包含注册脚本事件回调的额外选项。
 *
 * Contains additional options for registering a script event
 * event callback.
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * 用于过滤入站脚本事件消息的可选命名空间列表。
     *
     * Optional list of namespaces to filter inbound script event
     * messages.
     *
     */
    namespaces: string[];
}
