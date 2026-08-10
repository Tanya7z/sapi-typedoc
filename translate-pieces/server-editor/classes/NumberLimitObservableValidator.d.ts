/* IMPORT */ import { ObservableValidator } from '..';

/**
 * Validates min/max limits of observable objects that support
 * number
 */
export declare class NumberLimitObservableValidator implements ObservableValidator<number> {
    /**
     * @remarks
     * @privilege restricted-execution-unusable - @worldMutation
     *
     */
    protected _isInteger?: boolean;
    /**
     * @remarks
     * @privilege restricted-execution-unusable - @worldMutation
     *
     */
    protected _max?: number;
    /**
     * @remarks
     * @privilege restricted-execution-unusable - @worldMutation
     *
     */
    protected _min?: number;
    /**
     * @remarks
     * Constructs a new instance of the
     * `NumberLimitObservableValidator` class
     *
     */
    constructor(min: number | undefined, max: number | undefined, isInteger?: boolean);
    updateLimits(min: number | undefined, max: number | undefined): void;
    validate(newValue: number): number;
}
