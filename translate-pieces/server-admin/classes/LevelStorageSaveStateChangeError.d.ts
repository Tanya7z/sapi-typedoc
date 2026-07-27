/**
 * 当关卡存储的存档状态管理被乱序调用、或以无效方式重复调用时抛出的错误。
 *
 * An error that is thrown when level storage save state
 * management are used out of sequence or are repeated in an
 * invalid way.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LevelStorageSaveStateChangeError extends Error {
    private constructor();
}
