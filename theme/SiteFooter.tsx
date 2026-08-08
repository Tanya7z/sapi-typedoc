import { CookieSettingsButton } from './CookieConsent';

type SiteFooterProps = {
  /** home：首页浮动卡片；doc：正文页全宽接缝栏 */
  variant?: 'home' | 'doc';
};

/** 全站页脚：备案号 + Cookie 设置 + 皮肤署名 */
export function SiteFooter({ variant = 'home' }: SiteFooterProps) {
  return (
    <footer
      className={
        variant === 'doc'
          ? 'sapi-site-footer sapi-site-footer--doc'
          : 'sapi-site-footer sapi-site-footer--home'
      }
    >
      <div className="sapi-site-footer__panel">
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          闽ICP备2023018495号-2
        </a>
        <span className="sapi-site-footer__sep" aria-hidden="true">
          ·
        </span>
        <CookieSettingsButton />
        <span className="sapi-site-footer__sep" aria-hidden="true">
          ·
        </span>
        <a href="/ai-use/">AI 使用说明</a>
        <span className="sapi-site-footer__sep" aria-hidden="true">
          ·
        </span>
        <a href="/mcp/">MCP</a>
        <span className="sapi-site-footer__sep" aria-hidden="true">
          ·
        </span>
        <span className="sapi-site-footer__skin">
          皮肤贴图来自{' '}
          <a
            href="https://minecraft.wiki/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minecraft Wiki
          </a>
          ，采用{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/3.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-SA 3.0
          </a>
        </span>
      </div>
    </footer>
  );
}
