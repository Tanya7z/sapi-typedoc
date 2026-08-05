/* IMPORT */ import { PlayerEmoteAfterEvent } from '..';

/**
 * 管理连接到玩家表情事件后的回调。
 *
 * Manages callbacks that are connected to after a player emote event.
 */
export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}
