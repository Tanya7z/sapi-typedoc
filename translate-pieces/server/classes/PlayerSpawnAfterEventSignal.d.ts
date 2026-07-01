/* IMPORT */ import { PlayerSpawnAfterEvent } from '..';

/**
 * 注册一个在玩家在世界中生成（或重生后）并完全准备好时触发的事件。
 *
 * Registers an event when a player is spawned (or re-spawned after death) and fully ready within the world.
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 为此特定事件类型注册一个新的事件接收器。
     *
     * Registers a new event receiver for this particular type of event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * 取消注册一个玩家生成事件的事件接收器。
     *
     * De-registers an event receiver for the player spawn event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}
