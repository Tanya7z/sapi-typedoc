/* IMPORT */ import { PacketReceiveBeforeEventSignal, PacketSendBeforeEventSignal } from '..';

export class NetworkBeforeEvents {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly packetReceive: PacketReceiveBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - @earlyExecution
     *
     */
    readonly packetSend: PacketSendBeforeEventSignal;
}
