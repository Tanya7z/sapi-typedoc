/* IMPORT */ import { BlockComponentRegistry, CustomCommandRegistry, DimensionRegistry, ItemComponentRegistry, WorldClockRegistry } from '..';

export class StartupEvent {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly customCommandRegistry: CustomCommandRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly dimensionRegistry: DimensionRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
    /**
     * @beta
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly worldClockRegistry: WorldClockRegistry;
}
