import { syncDocsHome } from '../docs-home.js';
import type { Hook } from './hook.js';

/** 更新官方 d.ts 后，从 npm / MicrosoftDocs 刷新 Rspress 首页（docs-home）。 */
export default {
    async afterUpdate({ dependencies }) {
        await syncDocsHome(dependencies);
    }
} as Hook;
