/* IMPORT */ import { CommandPermissionLevel, CustomCommandParameter } from '..';

/**
 * 定义自定义命令，包括名称、权限和参数。
 *
 * Define the custom command, including name, permissions, and
 * parameters.
 */
export interface CustomCommand {
    /**
     * @remarks
     * 运行此命令需要开启作弊。默认为 `true`。
     *
     * Cheats must be enabled to run this command. Defaults to
     * true.
     *
     */
    cheatsRequired?: boolean;
    /**
     * @remarks
     * 在命令行上显示的命令描述。
     *
     * Command description as seen on the command line.
     *
     */
    description: string;
    /**
     * @remarks
     * 必填命令参数列表。
     *
     * List of mandatory command parameters.
     *
     */
    mandatoryParameters?: CustomCommandParameter[];
    /**
     * @remarks
     * 命令的名称。需要命名空间。
     *
     * The name of the command. A namespace is required.
     *
     */
    name: string;
    /**
     * @remarks
     * 可选命令参数列表。
     *
     * List of optional command parameters.
     *
     */
    optionalParameters?: CustomCommandParameter[];
    /**
     * @remarks
     * 执行命令所需的权限等级。
     *
     * The permission level required to execute the command.
     *
     */
    permissionLevel: CommandPermissionLevel;
}
