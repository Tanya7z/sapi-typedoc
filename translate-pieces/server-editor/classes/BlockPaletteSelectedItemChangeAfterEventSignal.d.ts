/* IMPORT */ import { BlockPaletteSelectedItemChangeAfterEvent } from '..';

export class BlockPaletteSelectedItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void,
    ): (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @privilege early-execution-allowed - @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void): void;
}
