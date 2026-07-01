/* IMPORT */ import { RGB, RGBA, Vector3 } from '..';

/**
 * 包含一组额外的变量值，用于进一步定义渲染和动画的工作方式。
 *
 * Contains a set of additional variable values for further
 * defining how rendering and animations function.
 */
export class MolangVariableMap {
    /**
     * 向 Molang 添加以下变量：
     * - `<variable_name>.r` - 红色颜色值 [0-1]
     * - `<variable_name>.g` - 绿色颜色值 [0-1]
     * - `<variable_name>.b` - 蓝色颜色值 [0-1]
     *
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     *
     * @throws This function can throw errors.
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * 向 Molang 添加以下变量：
     * - `<variable_name>.r` - 红色颜色值 [0-1]
     * - `<variable_name>.g` - 绿色颜色值 [0-1]
     * - `<variable_name>.b` - 蓝色颜色值 [0-1]
     * - `<variable_name>.a` - Alpha（透明度）颜色值 [0-1]
     *
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * - `<variable_name>.a` - Alpha (transparency) color value
     * [0-1]
     *
     * @throws This function can throw errors.
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * 在 Molang 变量映射中设置一个数值（小数）。
     *
     * @remarks
     * Sets a numeric (decimal) value within the Molang variable
     * map.
     *
     * @param variableName
     * 要设置的浮点数的名称。
     * Name of the float-based number to set.
     * @param number
     * 要为基于 Molang 的变量设置的值。
     * Value for the Molang-based variable to set.
     * @throws This function can throw errors.
     */
    setFloat(variableName: string, number: number): void;
    /**
     * 向 Molang 添加以下变量：
     * - `<variable_name>.speed` - 提供的速度数值
     * - `<variable_name>.direction_x` - 提供的 {@link Vector3} 中的 X 值
     * - `<variable_name>.direction_y` - 提供的 {@link Vector3} 中的 Y 值
     * - `<variable_name>.direction_z` - 提供的 {@link Vector3} 中的 Z 值
     *
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.speed` - Speed number provided
     * - `<variable_name>.direction_x` - X value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_y` - Y value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_z` - Z value from the {@link
     * Vector3} provided
     *
     * @throws This function can throw errors.
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * 向 Molang 添加以下变量：
     * - `<variable_name>.x` - 提供的 {@link Vector3} 中的 X 值
     * - `<variable_name>.y` - 提供的 {@link Vector3} 中的 Y 值
     * - `<variable_name>.z` - 提供的 {@link Vector3} 中的 Z 值
     *
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.x` - X value from the {@link Vector3}
     * provided
     * - `<variable_name>.y` - Y value from the {@link Vector3}
     * provided
     * - `<variable_name>.z` - Z value from the {@link Vector3}
     * provided
     *
     * @throws This function can throw errors.
     */
    setVector3(variableName: string, vector: Vector3): void;
}
