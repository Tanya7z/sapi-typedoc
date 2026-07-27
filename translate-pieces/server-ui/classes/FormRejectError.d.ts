/* IMPORT */ import { FormRejectReason } from '..';

/**
 * 当表单被拒绝时抛出。包含拒绝的原因。
 * 
 * Thrown when a form is rejected. Contains the reason for the
 * rejection.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FormRejectError extends Error {
    private constructor();
    /**
     * @remarks
     * 表单被拒绝的原因。
     * 
     * The reason the form was rejected.
     *
     * @earlyExecution
     *
     */
    readonly reason: FormRejectReason;
}
