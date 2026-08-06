// Learn how to customize the theme: https://rspress.rs/guide/basic/custom-theme
import { usePageData } from '@rspress/core/runtime';
import { Layout as OriginalLayout } from '@rspress/core/theme-original';
import type { ComponentProps, ReactNode } from 'react';
import { HomeLayout } from './HomeLayout';
import { PageComments } from './PageComments';
import { PageFeedback } from './PageFeedback';
import { SiteFooter } from './SiteFooter';
import './index.css';
import './wiki-skin.css';

export * from '@rspress/core/theme-original';
export { HomeLayout };

type AbbrProps = {
  /** 浮层说明（remark 插件写入，不用原生 title） */
  tip?: string;
  children?: ReactNode;
};

/** 缩写浮层：悬停/聚焦显示 tip，避免浏览器原生 title 气泡 */
function Abbr({ tip, children }: AbbrProps) {
  const hasTip = Boolean(tip);
  return (
    <abbr
      className="sapi-abbr"
      {...(hasTip ? { 'data-tip': tip } : {})}
      tabIndex={hasTip ? 0 : undefined}
    >
      {children}
    </abbr>
  );
}

export function Layout(props: ComponentProps<typeof OriginalLayout>) {
  const { page } = usePageData();
  const isHome = page.pageType === 'home';

  return (
    <OriginalLayout
      {...props}
      HomeLayout={HomeLayout}
      components={{
        ...props.components,
        abbr: Abbr,
      }}
      beforeDocFooter={
        <>
          <PageFeedback />
          <PageComments />
        </>
      }
      {/* 正文：贴在侧栏/纸面下方的全宽接缝栏；首页：仍用 bottom 浮动卡片 */}
      afterDoc={!isHome ? <SiteFooter variant="doc" /> : undefined}
      bottom={isHome ? <SiteFooter variant="home" /> : undefined}
    />
  );
}
