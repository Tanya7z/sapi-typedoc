/* IMPORT */ import { PacketEventOptions, PacketReceivedBeforeEvent } from '..';

export class PacketReceiveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     *
     * This closure is called with restricted-execution privilege.
     * @returns
     * 以受限执行权限调用的闭包。
     *
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PacketReceivedBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg0: PacketReceivedBeforeEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     *
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PacketReceivedBeforeEvent) => void): void;
}
