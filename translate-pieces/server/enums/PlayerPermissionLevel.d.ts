/**
 * 玩家权限等级。
 *
 * The player permission level.
 */
export enum PlayerPermissionLevel {
    /**
     * @remarks
     * 访客只能观察世界，不能与之交互。
     *
     * Visitors can only observe the world, not interact with it.
     *
     */
    Visitor = 0,
    /**
     * @remarks
     * 成员可以建造和挖掘、攻击玩家和生物，以及与物品和实体交互。
     *
     * Members can build and mine, attack players and mobs, and
     * interact with items and entities.
     *
     */
    Member = 1,
    /**
     * @remarks
     * 操作员可以传送和使用命令，此外还可以执行成员的所有操作。
     *
     * Operators can teleport and use commands, in addition to
     * everything Members can do.
     *
     */
    Operator = 2,
    Custom = 3,
}
