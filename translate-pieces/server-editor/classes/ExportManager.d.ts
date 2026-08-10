/* IMPORT */ import { ExportResult, GameOptions } from '..';

export class ExportManager {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    canExportProject(): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    getGameOptions(useDefault?: boolean): GameOptions;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    getGameVersion(): string;
}
