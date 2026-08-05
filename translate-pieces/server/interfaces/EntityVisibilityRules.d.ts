/**
 * 根据它所追踪实体的状态控制路径点的可见性。这些规则允许通过实体条件（如潜行、隐形和死亡状态）来过滤路径点的可见性。
 *
 * Controls when a waypoint is visible based on the state of
 * the entity it tracks. These rules allow filtering waypoint
 * visibility by entity conditions like sneaking, invisibility,
 * and death state.
 */
export interface EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪实体死亡时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when the tracked
     * entity is dead. If undefined, defaults to true.
     *
     */
    showDead?: boolean;
    /**
     * @remarks
     * 控制当被追踪实体隐形时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when the tracked
     * entity is invisible. If undefined, defaults to true.
     *
     */
    showInvisible?: boolean;
    /**
     * @remarks
     * 控制当被追踪实体潜行时是否显示路径点。如果未定义，默认为 `true`。
     *
     * Controls whether the waypoint is shown when the tracked
     * entity is sneaking. If undefined, defaults to true.
     *
     */
    showSneaking?: boolean;
}
