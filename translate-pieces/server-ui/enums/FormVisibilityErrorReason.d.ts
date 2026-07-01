/**
 * 表单可见性操作失败的原因。
 *
 * The reason why a form visibility operation failed.
 */
export enum FormVisibilityErrorReason {
    /**
     * @remarks
     * 由于表单已在向玩家显示，操作失败。
     *
     * The operation failed because the form is already being shown
     * to the player.
     *
     */
    AlreadyShowing = 'AlreadyShowing',
    /**
     * @remarks
     * 由于表单当前未向玩家显示，操作失败。
     *
     * The operation failed because the form is not currently being
     * shown to the player.
     *
     */
    NotShowing = 'NotShowing',
}
