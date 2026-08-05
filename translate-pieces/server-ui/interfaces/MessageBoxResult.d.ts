/* IMPORT */ import { DataDrivenScreenClosedReason } from '..';

/**
 * 当 MessageBox 关闭时返回的结果。包含消息框关闭的原因以及玩家选择的按钮（如果适用）。
 *
 * The result returned when an MessageBox is closed. Contains
 * the reason the message box was closed and the player's
 * button selection, if applicable.
 */
export interface MessageBoxResult {
    /**
     * @remarks
     * 消息框关闭的原因。
     *
     * The reason the message box was closed.
     *
     */
    closeReason: DataDrivenScreenClosedReason;
    /**
     * @remarks
     * 玩家所选择按钮的索引。如果消息框在没有按钮选择的情况下关闭（例如，玩家正忙或服务器关闭了它），则不设置此值。
     *
     * The index of the button the player selected. Not set if the
     * message box was closed without a button selection (e.g., the
     * player was busy or the server closed it).
     *
     */
    selection?: number;
}
