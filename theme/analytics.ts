import { hasAnalyticsConsent } from './cookie-consent';

/** Google Analytics 测量 ID（与旧 MkDocs Material 配置一致） */
export const GA_MEASUREMENT_ID = 'G-EBV9ZXZG07';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let gtagBootstrapped = false;

/** 仅在用户同意后加载 / 初始化 gtag */
export function ensureGtag(): boolean {
  if (typeof window === 'undefined') return false;
  if (!hasAnalyticsConsent()) return false;
  if (gtagBootstrapped && typeof window.gtag === 'function') return true;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  window.gtag('js', new Date());
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
  });
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
  });

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`,
  );
  if (!existing) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  gtagBootstrapped = true;
  return true;
}

/** 拒绝分析：更新 consent 模式并尽量清掉本站 GA Cookie */
export function disableAnalytics(): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }
  clearGaCookies();
  gtagBootstrapped = false;
}

function clearGaCookies(): void {
  const hostname = window.location.hostname;
  const domains = [hostname, hostname.replace(/^www\./, '')];
  const names = document.cookie.split(';').map((part) => part.trim().split('=')[0] ?? '');
  for (const name of names) {
    if (!name.startsWith('_ga')) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
      document.cookie = `${name}=; Max-Age=0; path=/`;
    }
  }
}

/** SPA 路由变化时上报 page_path（对齐 Material location$ 行为） */
export function trackPageview(pathname: string): void {
  if (!ensureGtag()) return;
  window.gtag?.('config', GA_MEASUREMENT_ID, { page_path: pathname });
}

/**
 * 页面反馈事件，参数与 MkDocs Material 一致：
 * gtag('event', 'feedback', { page, data })
 */
export function trackFeedback(page: string, data: 0 | 1): void {
  if (!ensureGtag()) return;
  window.gtag?.('event', 'feedback', { page, data });
}
