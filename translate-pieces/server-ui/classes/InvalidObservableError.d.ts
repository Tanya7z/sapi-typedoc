/**
 * Thrown when an observable value is expected to be writable,
 * but it is not.
 * 当期望可观察值是可写的，但它不可写时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidObservableError extends Error {
    private constructor();
}
