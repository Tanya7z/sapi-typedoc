/* IMPORT */ import { LevelStorageQuerySnapshotFile } from '..';

/**
 * Controls how the server saves to disk. Only available on
 * dedicated server.
 */
export class LevelStorage {
    private constructor();
    /**
     * @remarks
     * Disables the server writing to the world files and begins
     * creating a snapshot.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    saveHold(): Promise<void>;
    /**
     * @remarks
     * Returns the path and size of every file in the current
     * snapshot if a snapshot is being taken.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    saveQuery(): Promise<LevelStorageQuerySnapshotFile[]>;
    /**
     * @remarks
     * Re-enables server writing world state to files and removes
     * snapshot.
     *
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    saveResume(): Promise<void>;
}
