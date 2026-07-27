/* IMPORT */ import { PlatformType, RawMessage, SystemInfo } from '..';

/**
 * 包含客户端实例的设备信息。
 *
 * Contains the device information for a client instance.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ClientSystemInfo extends SystemInfo {
    private constructor();
    /**
     * @remarks
     * 客户端选择的区域设置（例如，`en_US`、`fr_FR`、`ja_JP`）。请注意，在大多数情况下，服务端脚本不应使用此属性来手动本地化文本。相反，应使用带有 translate 字段的 {@link RawMessage} 来发送本地化键，让每个客户端自动以其自己的语言解析。直接使用区域设置进行本地化是不稳定的，并且当同一服务器上的玩家使用不同语言时可能会产生意外结果。
     *
     * The locale selected by the client (e.g., en_US, fr_FR,
     * ja_JP). Note that in most cases, server scripts should not
     * use this property to manually localize text. Instead, use
     * {@link RawMessage} with a translate field to send
     * localization keys, allowing each client to resolve them in
     * their own language automatically. Direct use of locale for
     * localization is fragile and may produce unexpected results
     * when players with different languages are on the same
     * server.
     *
     */
    readonly locale: string;
    /**
     * @remarks
     * 设备的最大渲染距离（以区块为单位）。
     *
     * The max render distance for the device in chunks.
     *
     */
    readonly maxRenderDistance: number;
    /**
     * @remarks
     * 设备的平台类型。
     *
     * The platform type of the device.
     *
     */
    readonly platformType: PlatformType;
}
