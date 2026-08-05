/* IMPORT */ import { CustomCommandParamType } from '..';

/**
 * 自定义命令预期的每个参数的定义。
 *
 * Definition for each parameter expected by the custom
 * command.
 */
export interface CustomCommandParameter {
    /**
     * @beta
     * @remarks
     * 当 {@link CustomCommandParamType} 为 `Enum` 时，可用于引用枚举名称。允许参数名称与枚举名称不同。
     *
     * Can be used to reference the enum name when {@link
     * CustomCommandParamType} is 'Enum'. Allows the parameter name
     * to be different from the enum name.
     *
     */
    enumName?: string;
    /**
     * @remarks
     * 参数在命令行上显示的名称。
     *
     * The name of parameter as it appears on the command line.
     *
     */
    name: string;
    /**
     * @remarks
     * 参数的数据类型。
     *
     * The data type of the parameter.
     *
     */
    type: CustomCommandParamType;
}
