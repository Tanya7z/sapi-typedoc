/* IMPORT */ import { ChatSendBeforeEventSignal, EffectAddBeforeEventSignal, EntityHealBeforeEventSignal, EntityHurtBeforeEventSignal, EntityItemPickupBeforeEventSignal, EntityRemoveBeforeEventSignal, EntityTamedBeforeEventSignal, ExplosionBeforeEventSignal, ItemUseBeforeEventSignal, PlayerBreakBlockBeforeEventSignal, PlayerGameModeChangeBeforeEventSignal, PlayerInteractWithBlockBeforeEventSignal, PlayerInteractWithEntityBeforeEventSignal, PlayerLeaveBeforeEventSignal, PlayerPlaceBlockBeforeEventSignal, WeatherChangeBeforeEventSignal, WorldClock, WorldClockOnRestartBeforeEventSignal } from '..';

/**
 * A set of events that fire before an actual action occurs. In
 * most cases, you can potentially cancel or modify the
 * impending event. Note that in before events any APIs that
 * modify gameplay state will not function and will throw an
 * error. (e.g., dimension.spawnEntity)
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     * @seeExample customCommand.ts
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * @remarks
     * This event is triggered after an event has been added to an
     * entity.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly entityHeal: EntityHealBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly entityHurt: EntityHurtBeforeEventSignal;
    /**
     * @remarks
     * This event fires before an entity picks up an item.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly entityItemPickup: EntityItemPickupBeforeEventSignal;
    /**
     * @remarks
     * Fires before an entity is removed from the world (for
     * example, unloaded or removed after being killed.)
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @rc
     * @remarks
     * Fires before an entity is tamed.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly entityTamed: EntityTamedBeforeEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * This event fires before a block is broken by a player.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @remarks
     * Fires before a player interacts with a block.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @remarks
     * Fires before a player interacts with an entity.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks
     * Fires when a player leaves the game.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires before a block is placed by a player.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly weatherChange: WeatherChangeBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a {@link WorldClock} reaches its
     * maximum time and is about to restart.
     *
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly worldClockOnRestart: WorldClockOnRestartBeforeEventSignal;
}
