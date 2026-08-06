// Learn how to customize the theme: https://rspress.rs/guide/basic/custom-theme
import { Layout as OriginalLayout } from '@rspress/core/theme-original';
import type { ComponentProps, ReactNode } from 'react';
import { PageComments } from './PageComments';
import { PageFeedback } from './PageFeedback';
import { SiteFooter } from './SiteFooter';
import './index.css';

export * from '@rspress/core/theme-original';

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
  return (
    <OriginalLayout
      {...props}
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
      bottom={<SiteFooter />}
    />
  );
}
