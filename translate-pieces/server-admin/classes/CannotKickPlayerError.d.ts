/**
 * 当尝试踢出一个无法被踢出的玩家时抛出的错误。
 *
 * An error which is thrown when attempting to kick a player
 * who cannot be kicked.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CannotKickPlayerError extends Error {
    private constructor();
}
