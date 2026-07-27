/**
 * 返回此栅栏是否在多个方向上与其他栅栏连接的信息。
 *
 * Returns information about whether this fence is connected to
 * other fences in several directions.
 */
export class FenceConnectivity {
    private constructor();
    /**
     * @remarks
     * 表示此栅栏方块是否与东侧（x + 1）的另一个栅栏连接。
     *
     * Represents whether this fence block is connected to another
     * fence to the east (x + 1).
     *
     */
    readonly east: boolean;
    /**
     * @remarks
     * 表示此栅栏方块是否与北侧（z - 1）的另一个栅栏连接。
     *
     * Represents whether this fence block is connected to another
     * fence to the north (z - 1).
     *
     */
    readonly north: boolean;
    /**
     * @remarks
     * 表示此栅栏方块是否与南侧（z + 1）的另一个栅栏连接。
     *
     * Represents whether this fence block is connected to another
     * fence to the south (z + 1).
     *
     */
    readonly south: boolean;
    /**
     * @remarks
     * 表示此栅栏方块是否与西侧（x - 1）的另一个栅栏连接。
     *
     * Represents whether this fence block is connected to another
     * fence to the west (x - 1).
     *
     */
    readonly west: boolean;
}
