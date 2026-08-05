/* IMPORT */ import { DedicatedServerUtils } from '..';

/**
 * @remarks
 * 一个全局可用的、可选的对象，包含仅在专用服务器上才有的 API。
 *
 * A globally available, optional object that contains
 * dedicated-server only apis.
 *
 */
export const dedicatedServer: DedicatedServerUtils | undefined;
