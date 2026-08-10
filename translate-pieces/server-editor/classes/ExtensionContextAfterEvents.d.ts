/* IMPORT */ import { BlockPaletteSelectedItemChangeAfterEventSignal, ClipboardChangeAfterEventSignal, CurrentThemeChangeAfterEventSignal, CurrentThemeColorChangeAfterEventSignal, CursorPropertyChangeAfterEventSignal, ModeChangeAfterEventSignal, SelectionChangeAfterEventSignal } from '..';

/**
 * Contains a set of events that are available across the scope
 * of the ExtensionContext.
 */
export class ExtensionContextAfterEvents {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly blockPaletteSelectedItemChange: BlockPaletteSelectedItemChangeAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly clipboardChange: ClipboardChangeAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly currentThemeChange: CurrentThemeChangeAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly currentThemeColorChange: CurrentThemeColorChangeAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    /**
     * @remarks
     * This event triggers when the editor mode changes for the
     * player.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly modeChange: ModeChangeAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly SelectionChange: SelectionChangeAfterEventSignal;
}
