/**
 * 包含快照过程中所收集的文件的相关信息。
 *
 * Contains information about a file that was gathered during a
 * snapshot.
 */
export class LevelStorageQuerySnapshotFile {
    private constructor();
    /**
     * @remarks
     * 快照中该文件的路径。
     *
     * The path to the file in the snapshot.
     *
     */
    readonly fileName: string;
    /**
     * @remarks
     * 快照中该文件的大小。
     *
     * The size of the file in the snapshot.
     *
     */
    readonly fileSize: number;
}
