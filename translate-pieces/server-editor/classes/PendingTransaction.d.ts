/* IMPORT */ import { BlockVolumeBase, Entity, Vector3 } from '../../server';
/* IMPORT */ import { EntityOperationType, RelativeVolumeListBlockVolume, TransactionHandler, UserDefinedTransactionOperationHandler, VolumeListTransactionOperationHandler } from '..';

export class PendingTransaction {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    addEntityOperation(entity: Entity, type: EntityOperationType): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    addUserDefinedOperation(
        transactionHandler: UserDefinedTransactionOperationHandler,
        prevData: string,
        currentData: string,
        operationName?: string,
    ): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    addVolumeListOperation(
        operationHandler: VolumeListTransactionOperationHandler,
        previous: RelativeVolumeListBlockVolume[],
        current: RelativeVolumeListBlockVolume[],
    ): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    commitTrackedChanges(): number;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    discard(): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    discardTrackedChanges(): number;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    submit(transactionHandler?: TransactionHandler): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeArea(from: Vector3, to: Vector3): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeList(locations: Vector3[]): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeVolume(blockVolume: BlockVolumeBase): boolean;
}
