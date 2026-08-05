/**
 * 描述实体初始化原因的枚举。
 *
 * An enumeration describing initialization cause of an entity.
 */
export enum EntityInitializationCause {
    /**
     * @remarks
     * 实体作为其他实体的子代创建时的情况，例如，牛生小牛或史莱姆死亡后分裂出更小的史莱姆。
     *
     * Case when an entity is created as child of other entity or
     * entities, e.g., cows making a cow or slimes making smaller
     * slimes after dying.
     *
     */
    Born = 'Born',
    /**
     * @remarks
     * 实体由事件创建时的情况，例如，流浪商人生成羊驼。
     *
     * Case when an entity is created by an event, e.g., a
     * Wandering trader spawning llamas.
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * 实体被加载到世界中时的情况。
     *
     * Case when an entity is loaded into the world.
     *
     */
    Loaded = 'Loaded',
    /**
     * @remarks
     * 实体自然生成在世界中时的情况。
     *
     * Case when an entity is naturally spawned in the world.
     *
     */
    Spawned = 'Spawned',
    /**
     * @remarks
     * 实体转变为另一个实体时的情况。
     *
     * Case when an entity is transformed into another entity.
     *
     */
    Transformed = 'Transformed',
}
