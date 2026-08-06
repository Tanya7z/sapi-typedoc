import {
  DocContent,
  HomeBackground,
  HomeFooter,
  HomeHero,
} from '@rspress/core/theme-original';
import type { ReactNode } from 'react';
import { HomeSocialLinks } from './HomeSocialLinks';

type HomeLayoutProps = {
  beforeHero?: ReactNode;
  afterHero?: ReactNode;
  beforeHeroActions?: ReactNode;
  afterHeroActions?: ReactNode;
  beforeFeatures?: ReactNode;
  afterFeatures?: ReactNode;
};

/**
 * 自定义首页：hero + 右侧彩色外链，下方渲染 index.md 正文（更新日志）。
 * 默认 HomeLayout 不渲染 MD 正文，所以更新日志之前看不见。
 */
export function HomeLayout({
  beforeHero,
  afterHero,
  beforeHeroActions,
  afterHeroActions,
  beforeFeatures,
  afterFeatures,
}: HomeLayoutProps) {
  return (
    <>
      <HomeBackground />
      {beforeHero}
      <div className="sapi-home-top">
        <HomeHero
          beforeHeroActions={beforeHeroActions}
          afterHeroActions={afterHeroActions}
        />
        <HomeSocialLinks />
      </div>
      {afterHero}
      {beforeFeatures}
      {afterFeatures}
      <section className="sapi-home-doc">
        <div className="sapi-home-doc__panel rp-doc">
          <DocContent components={undefined} isOverviewPage />
        </div>
      </section>
      <HomeFooter />
    </>
  );
}
