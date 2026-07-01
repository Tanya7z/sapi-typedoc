/* IMPORT */ import { TripWireTripAfterEvent } from '..';

/**
 * Manages callbacks that are connected to when a trip wire is
 * tripped.
 *
 * 管理与绊线被触发时相关的回调。
 * @seeExample tripWireTripEvent.ts
 */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a trip wire is
     * tripped.
     *
     * 添加一个回调，当绊线被触发时调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a trip wire is
     * tripped.
     *
     * 移除一个在绊线被触发时调用的回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}
