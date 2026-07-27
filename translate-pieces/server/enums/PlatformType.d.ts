/**
 * 描述设备属于哪种平台。
 *
 * Describes what kind of platform is a device.
 */
export enum PlatformType {
    /**
     * @remarks
     * 专用游戏设备。
     *
     * Specialized gaming device.
     *
     */
    Console = 'Console',
    /**
     * @remarks
     * 个人计算机（PC）。
     *
     * Personal Computer (PC).
     *
     */
    Desktop = 'Desktop',
    /**
     * @remarks
     * 手持设备，例如智能手机或平板电脑。
     *
     *  Handheld device such smartphone or tablet.
     *
     */
    Mobile = 'Mobile',
}
