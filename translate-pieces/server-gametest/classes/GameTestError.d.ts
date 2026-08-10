/* IMPORT */ import { GameTestErrorContext, GameTestErrorType } from '..';

export class GameTestError extends Error {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly context?: GameTestErrorContext;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly messageParameters: string[];
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly type: GameTestErrorType;
}
