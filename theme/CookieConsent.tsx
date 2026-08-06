import { useEffect, useState } from 'react';
import { disableAnalytics, ensureGtag } from './analytics';
import {
  clearCookieConsent,
  COOKIE_CONSENT_EVENT,
  readCookieConsent,
  type CookieConsentValue,
  writeCookieConsent,
} from './cookie-consent';

/** 底部 Cookie 确认条：同意后才加载 Google Analytics */
export default function CookieConsent() {
  const [consent, setConsent] = useState<CookieConsentValue | null | 'pending'>('pending');

  useEffect(() => {
    setConsent(readCookieConsent());
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsentValue | null>).detail;
      setConsent(detail ?? null);
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (consent === 'accepted') ensureGtag();
  }, [consent]);

  // 首屏 hydration 前不渲染，避免闪烁；已选过则隐藏
  if (consent === 'pending' || consent === 'accepted' || consent === 'rejected') {
    return null;
  }

  return (
    <div className="sapi-cookie" role="dialog" aria-labelledby="sapi-cookie-title" aria-live="polite">
      <div className="sapi-cookie__inner">
        <div className="sapi-cookie__copy">
          <p id="sapi-cookie-title" className="sapi-cookie__title">
            Cookie 与访问统计
          </p>
          <p className="sapi-cookie__text">
            本站使用 Google Analytics（Cookie：
            <code>_ga</code>、<code>_ga_*</code>
            ）统计访问量与页面反馈，用于改进文档。拒绝后不会加载分析脚本，也不影响正常阅读。
          </p>
        </div>
        <div className="sapi-cookie__actions">
          <button
            type="button"
            className="sapi-cookie__btn sapi-cookie__btn--ghost"
            onClick={() => {
              writeCookieConsent('rejected');
              disableAnalytics();
              setConsent('rejected');
            }}
          >
            拒绝
          </button>
          <button
            type="button"
            className="sapi-cookie__btn sapi-cookie__btn--primary"
            onClick={() => {
              writeCookieConsent('accepted');
              ensureGtag();
              setConsent('accepted');
            }}
          >
            接受
          </button>
        </div>
      </div>
    </div>
  );
}

/** 页脚入口：重新打开 Cookie 偏好 */
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="sapi-cookie-settings"
      onClick={() => {
        clearCookieConsent();
        disableAnalytics();
      }}
    >
      Cookie 设置
    </button>
  );
}
