/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { AllowList, LevelStorage } from '..';

/**
 * 包含仅在基岩版专用服务器中可用的 API。
 *
 * Contains apis that are only available when in Bedrock
 * Dedicated Server.
 */
export class DedicatedServerUtils {
    private constructor();
    /**
     * @remarks
     * 返回用于管理服务器允许列表的对象。
     *
     * Returns an object that manages the server's allow list.
     *
     */
    readonly allowList: AllowList;
    /**
     * @remarks
     * 返回用于管理关卡存储的对象。
     *
     * Returns an object that manages the level's storage.
     *
     */
    readonly levelStorage: LevelStorage;
    /**
     * @remarks
     * 从磁盘重新加载 CDN 配置。
     *
     * Reloads the cdn configuration from disk.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    reloadCDNConfig(): void;
    /**
     * @remarks
     * 从磁盘重新加载服务器权限。
     *
     * Reloads the permissions for the server from disk.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    reloadPermissions(): void;
    /**
     * @remarks
     * 从磁盘重新加载服务器的脚本配置。
     *
     * Reloads the script configuration for the server from disk.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    reloadScriptingConfig(): void;
    /**
     * @remarks
     * 关闭专用服务器。
     *
     * Shuts down the dedicated server.
     *
     * @worldMutation
     *
     */
    stopServer(): void;
}
