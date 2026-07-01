/**
 * 此错误表示容器的尺寸超出了允许的范围。
 *
 * This type of error is thrown when the size of a container is out of expected bounds.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ContainerSizeOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * 容器允许的最大尺寸。
     *
     * Maximum expected size for the container.
     *
     * @earlyExecution
     *
     */
    readonly maxValue: number;
}
