/**
 * 描述设备的输入类型。
 *
 * Describes the type of input of a device.
 */
export enum InputMode {
    /**
     * @remarks
     * 游戏手柄输入。
     *
     * Gamepad input.
     *
     */
    Gamepad = 'Gamepad',
    /**
     * @remarks
     * 键盘和鼠标输入。
     *
     * Keyboard and mouse input.
     *
     */
    KeyboardAndMouse = 'KeyboardAndMouse',
    /**
     * @remarks
     * 动作控制器输入。
     *
     * Motion controller input.
     *
     */
    MotionController = 'MotionController',
    /**
     * @remarks
     * 触摸输入。
     *
     * Touch input.
     *
     */
    Touch = 'Touch',
}
