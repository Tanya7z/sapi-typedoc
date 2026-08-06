/** Cookie / 分析同意状态（localStorage） */
export const COOKIE_CONSENT_KEY = 'sapi-cookie-consent';
export const COOKIE_CONSENT_EVENT = 'sapi-cookie-consent-change';

export type CookieConsentValue = 'accepted' | 'rejected';

export function readCookieConsent(): CookieConsentValue | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === 'accepted' || value === 'rejected') return value;
  } catch {
    // 隐私模式等可能禁用 storage
  }
  return null;
}

export function hasAnalyticsConsent(): boolean {
  return readCookieConsent() === 'accepted';
}

export function writeCookieConsent(value: CookieConsentValue): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
}

/** 清除偏好，下次访问重新弹出 */
export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: null }));
}
