/**
 * @beta
 * Thrown when an invalid recipe identifier is used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidRecipeError extends Error {
    private constructor();
    /**
     * @remarks
     * The identifier of the invalid recipe.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly recipeId: string;
}
