/* IMPORT */ import { PackSettingChangeAfterEvent } from '..';

/**
 * @beta
 * 管理连接到包设置更改事件的回调。
 *
 * Manages callbacks that are connected to pack setting change events.
 */
export class PackSettingChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): (arg0: PackSettingChangeAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): void;
}
