import { CookieSettingsButton } from './CookieConsent';

/** 全站页脚：备案号 + Cookie 设置 */
export function SiteFooter() {
  return (
    <footer className="sapi-site-footer">
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
    </footer>
  );
}
