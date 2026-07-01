/* IMPORT */ import { CustomCommandStatus } from '..';

/**
 * 从自定义命令回调函数返回的接口。
 *
 * Interface returned from custom command callback function.
 */
export interface CustomCommandResult {
    /**
     * @remarks
     * 命令执行后显示在聊天中的消息。
     *
     * Message displayed to chat after command execution.
     *
     */
    message?: string;
    /**
     * @remarks
     * 命令执行成功或失败。决定状态消息的显示方式。
     *
     * Command execution Success or Failure. Determines how the
     * status message is displayed.
     *
     */
    status: CustomCommandStatus;
}
