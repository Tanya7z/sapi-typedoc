/**
 * 一个枚举，表示表单被取消的原因。
 *
 * An enum representing the reasons why a form was canceled.
 */
export enum FormCancelationReason {
    /**
     * @remarks
     * 由于玩家正忙于另一个 UI 交互，表单被取消。
     *
     * The form was canceled because the player was busy with
     * another UI interaction.
     *
     */
    UserBusy = 'UserBusy',
    /**
     * @remarks
     * 由于玩家关闭了表单，表单被取消。
     *
     * The form was canceled because the player closed it.
     *
     */
    UserClosed = 'UserClosed',
}
