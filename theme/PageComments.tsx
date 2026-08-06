import Giscus from '@giscus/react';
import { useLocation, usePageData } from '@rspress/core/runtime';
import { useEffect, useState } from 'react';

const REPO = 'Tanya7z/sapi-typedoc' as const;
const REPO_ID = 'R_kgDOTKJPqA';
/** GitHub Discussions「General」分类；需先在仓库安装 Giscus App */
const CATEGORY = 'General';
const CATEGORY_ID = 'DIC_kwDOTKJPqM4DCxYb';

/** 文档页底部基于 GitHub Discussions 的评论区（Giscus） */
export function PageComments() {
  const { pathname } = useLocation();
  const { page } = usePageData();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const sync = () => {
      setTheme(root.classList.contains('dark') ? 'dark' : 'light');
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  if (!mounted || (page.pageType && page.pageType !== 'doc')) {
    return null;
  }

  return (
    <section className="sapi-comments" aria-label="页面评论">
      <h2 className="sapi-comments__title">评论</h2>
      <Giscus
        key={pathname}
        id="sapi-giscus"
        repo={REPO}
        repoId={REPO_ID}
        category={CATEGORY}
        categoryId={CATEGORY_ID}
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </section>
  );
}
