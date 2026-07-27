/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { CustomCommand, CustomCommandError, CustomCommandOrigin, CustomCommandResult, NamespaceNameError } from '..';

/**
 * 提供注册自定义命令的功能。
 *
 * Provides the functionality for registering custom commands.
 */
export class CustomCommandRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个自定义命令，该命令在执行时触发脚本回调。
     *
     * Registers a custom command that when executed triggers a
     * script callback.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 命令执行时触发的回调。
     *
     * The callback triggered when the command executes.
     * @throws This function can throw errors.
     *
     * {@link CustomCommandError}
     *
     * {@link EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCommand(
        customCommand: CustomCommand,
        callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
    ): void;
    /**
     * @remarks
     * 注册一个自定义命令枚举。
     *
     * Registers a custom command enum.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link CustomCommandError}
     *
     * {@link EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerEnum(name: string, values: string[]): void;
}
