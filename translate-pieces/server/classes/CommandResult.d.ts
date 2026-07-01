/**
 * 包含命令执行结果的返回数据。
 *
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * 如果命令对多个实体、方块或物品进行操作，则返回此命令的成功应用次数。
     *
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     *
     */
    readonly successCount: number;
}
