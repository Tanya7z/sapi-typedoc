/* IMPORT */ import { GameTestCompletedErrorReason } from '..';

export class GameTestCompletedError extends Error {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly reason: GameTestCompletedErrorReason;
}
