/**
 * @beta
 * 发生更改的包设置名称和值。
 *
 * Pack setting name and value that changed.
 */
export class PackSettingChangeAfterEvent {
    private constructor();
    /**
     * 设置的名称。
     *
     * @remarks
     * The name of the setting.
     *
     */
    readonly settingName: string;
    /**
     * 设置的值。
     *
     * @remarks
     * The value of the setting.
     *
     */
    readonly settingValue: boolean | number | string;
}
