import { useLocation } from '@rspress/core/runtime';
import { useEffect, useState } from 'react';
import { trackPageview } from './analytics';
import {
  COOKIE_CONSENT_EVENT,
  hasAnalyticsConsent,
  type CookieConsentValue,
} from './cookie-consent';

/** 全局副作用：仅在同意后，路由变化时向 GA4 上报 page_path */
export default function GoogleAnalytics() {
  const { pathname } = useLocation();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(hasAnalyticsConsent());
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsentValue | null>).detail;
      setAllowed(detail === 'accepted');
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (!allowed) return;
    trackPageview(pathname);
  }, [pathname, allowed]);

  return null;
}
