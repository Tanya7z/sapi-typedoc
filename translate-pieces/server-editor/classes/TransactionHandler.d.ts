/* IMPORT */ import { RelativeVolumeListBlockVolume, UserDefinedTransactionOperationHandler, VolumeListTransactionOperationHandler } from '..';

export class TransactionHandler {
    private constructor();
    readonly id: string;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    addUserDefinedOperationHandler(payloadClosure: (arg0: string) => void): UserDefinedTransactionOperationHandler;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    addVolumeListOperationHandler(
        closure: (arg0: RelativeVolumeListBlockVolume[]) => void,
    ): VolumeListTransactionOperationHandler;
    isValid(): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    unregister(): void;
}
