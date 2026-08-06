import { useLocation, usePageData } from '@rspress/core/runtime';
import { useEffect, useState } from 'react';
import { trackFeedback } from './analytics';

type Rating = {
  name: string;
  data: 0 | 1;
  note: string;
};

const RATINGS: Rating[] = [
  {
    name: '有用',
    data: 1,
    note: '谢谢啦～(≧▽≦)/',
  },
  {
    name: '还能改进',
    data: 0,
    note: '我会努力的！(≧∇≦)ﾉ',
  },
];

/** 文档页底部「是否帮到你」反馈，事件上报对齐旧站 Material analytics.feedback */
export function PageFeedback() {
  const { pathname } = useLocation();
  const { page } = usePageData();
  const [submitted, setSubmitted] = useState<0 | 1 | null>(null);

  // 换页后重置，允许在新页面再次反馈
  useEffect(() => {
    setSubmitted(null);
  }, [pathname]);

  // 首页等非文档页不展示
  if (page.pageType && page.pageType !== 'doc') {
    return null;
  }

  const note = submitted === null ? null : RATINGS.find((r) => r.data === submitted)?.note;

  return (
    <aside className="sapi-feedback" aria-label="页面反馈">
      <p className="sapi-feedback__title">这个网站帮到你了吗ヾ(≧▽≦)o</p>
      {submitted === null ? (
        <div className="sapi-feedback__actions">
          {RATINGS.map((rating) => (
            <button
              key={rating.data}
              type="button"
              className="sapi-feedback__btn"
              title={rating.name}
              onClick={() => {
                trackFeedback(pathname, rating.data);
                setSubmitted(rating.data);
              }}
            >
              <span className="sapi-feedback__icon" aria-hidden="true">
                {rating.data === 1 ? '☺' : '☹'}
              </span>
              {rating.name}
            </button>
          ))}
        </div>
      ) : (
        <p className="sapi-feedback__note">{note}</p>
      )}
    </aside>
  );
}
