/**
 * @remarks
 * 按插件禁用看门狗的“运行缓慢”与“耗时突增”警告。
 *
 * Disable watchdog slow and spike warnings per plugin.
 *
 * @param disable
 * 用于禁用或重新启用警告的开关。
 * Flag to disable or re-enable warnings.
 * @throws This function can throw errors.
 */
export function disableWatchdogTimingWarnings(disable: boolean): void;
