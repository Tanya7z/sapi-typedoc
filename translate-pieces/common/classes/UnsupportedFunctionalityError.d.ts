/**
 * 此错误表示调用了当前环境不支持的函数。
 *
 * This type of error is thrown when a functionality is called that is not supported in the current environment.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class UnsupportedFunctionalityError extends Error {
    private constructor();
}
