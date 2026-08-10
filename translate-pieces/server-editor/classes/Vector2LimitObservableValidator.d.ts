/* IMPORT */ import { Vector2 } from '../../server';
/* IMPORT */ import { ObservableValidator } from '..';

/**
 * Validates min/max limits of observable objects that support
 * Vector2
 */
export declare class Vector2LimitObservableValidator implements ObservableValidator<Vector2> {
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
    protected _max: Partial<Vector2>;
    /**
     * @remarks
     * @privilege restricted-execution-unusable - @worldMutation
     *
     */
    protected _min: Partial<Vector2>;
    /**
     * @remarks
     * Constructs a new instance of the
     * `Vector2LimitObservableValidator` class
     *
     */
    constructor(min: Partial<Vector2>, max: Partial<Vector2>, isInteger?: boolean);
    updateLimits(min: Partial<Vector2>, max: Partial<Vector2>): void;
    validate(newValue: Vector2): Vector2;
}
