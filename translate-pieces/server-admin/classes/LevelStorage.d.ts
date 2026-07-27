/* IMPORT */ import { LevelStorageQuerySnapshotFile, LevelStorageSaveStateChangeError } from '..';

/**
 * 控制服务器如何保存到磁盘。仅在专用服务器上可用。
 *
 * Controls how the server saves to disk. Only available on
 * dedicated server.
 */
export class LevelStorage {
    private constructor();
    /**
     * @remarks
     * 停止服务器写入世界文件，并开始创建快照。
     *
     * Disables the server writing to the world files and begins
     * creating a snapshot.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveHold(): void;
    /**
     * @remarks
     * 返回当前快照（如果正在创建快照）中每个文件的路径和大小。
     *
     * Returns the path and size of every file in the current
     * snapshot if a snapshot is being taken.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveQuery(): LevelStorageQuerySnapshotFile[];
    /**
     * @remarks
     * 重新启用服务器将世界状态写入文件，并移除快照。
     *
     * Re-enables server writing world state to files and removes
     * snapshot.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveResume(): void;
}
