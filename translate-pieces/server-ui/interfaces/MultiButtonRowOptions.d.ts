/* IMPORT */ import { ObservableBoolean } from '..';

/**
 * @rc
 * Options for configuring a multi-button row component.
 */
export interface MultiButtonRowOptions {
    /**
     * @remarks
     * When false or bound to a false, the entire row is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
