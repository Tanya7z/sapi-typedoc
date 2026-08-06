import { Badge } from '@rspress/core/theme';
import { useMemo, useState } from 'react';

export type TagFilterItem = {
  name: string;
  module: string;
  kind: string;
  tags: string[];
  href: string;
};

export type TagLegendEntry = {
  tag: string;
  meaning: string;
};

const KIND_LABELS: Record<string, string> = {
  classes: '类',
  interfaces: '接口',
  enumerations: '枚举',
  enums: '枚举',
  functions: '函数',
  variables: '变量',
  types: '类型别名',
  'type-aliases': '类型别名',
  modules: '模块',
};

function kindLabel(kind: string): string {
  return KIND_LABELS[kind] ?? kind;
}

function uniqueSorted(values: string[]): string[] {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

export type TagFilterProps = {
  items: TagFilterItem[];
  legend?: TagLegendEntry[];
};

/** 按领域 / 模块 / 类型筛选 Script API 符号 */
export function TagFilter({ items, legend = [] }: TagFilterProps) {
  const [domain, setDomain] = useState('');
  const [module, setModule] = useState('');
  const [kind, setKind] = useState('');

  const domainOptions = useMemo(
    () => uniqueSorted(items.flatMap((item) => item.tags)),
    [items],
  );
  const moduleOptions = useMemo(() => uniqueSorted(items.map((item) => item.module)), [items]);
  const kindOptions = useMemo(() => uniqueSorted(items.map((item) => item.kind)), [items]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (domain && !item.tags.includes(domain)) return false;
      if (module && item.module !== module) return false;
      if (kind && item.kind !== kind) return false;
      return true;
    });
  }, [items, domain, module, kind]);

  const hasFilter = Boolean(domain || module || kind);

  return (
    <div className="sapi-tag-filter">
      {legend.length > 0 ? (
        <details className="sapi-tag-filter__legend" open>
          <summary className="sapi-tag-filter__legend-summary">领域标签说明</summary>
          <div className="sapi-tag-filter__legend-body">
            <table className="sapi-tag-filter__table">
              <thead>
                <tr>
                  <th>标签</th>
                  <th>含义</th>
                </tr>
              </thead>
              <tbody>
                {legend.map((entry) => (
                  <tr key={entry.tag}>
                    <td>
                      <Badge type="info">{entry.tag}</Badge>
                    </td>
                    <td>{entry.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      ) : null}

      <div className="sapi-tag-filter__controls">
        <label className="sapi-tag-filter__field">
          <span className="sapi-tag-filter__label">领域</span>
          <select
            className="sapi-tag-filter__select"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          >
            <option value="">全部</option>
            {domainOptions.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </label>
        <label className="sapi-tag-filter__field">
          <span className="sapi-tag-filter__label">模块</span>
          <select
            className="sapi-tag-filter__select"
            value={module}
            onChange={(e) => setModule(e.target.value)}
          >
            <option value="">全部</option>
            {moduleOptions.map((mod) => (
              <option key={mod} value={mod}>
                {mod}
              </option>
            ))}
          </select>
        </label>
        <label className="sapi-tag-filter__field">
          <span className="sapi-tag-filter__label">类型</span>
          <select
            className="sapi-tag-filter__select"
            value={kind}
            onChange={(e) => setKind(e.target.value)}
          >
            <option value="">全部</option>
            {kindOptions.map((k) => (
              <option key={k} value={k}>
                {kindLabel(k)}
              </option>
            ))}
          </select>
        </label>
        {hasFilter ? (
          <button
            type="button"
            className="sapi-tag-filter__clear"
            onClick={() => {
              setDomain('');
              setModule('');
              setKind('');
            }}
          >
            清除筛选
          </button>
        ) : null}
      </div>

      <p className="sapi-tag-filter__count">
        共 {filtered.length} 项
        {hasFilter ? `（筛选自 ${items.length}）` : null}
      </p>

      {filtered.length === 0 ? (
        <p className="sapi-tag-filter__empty">无匹配项</p>
      ) : (
        <ul className="sapi-tag-filter__list">
          {filtered.map((item) => (
            <li key={`${item.module}/${item.kind}/${item.name}`} className="sapi-tag-filter__item">
              <a className="sapi-tag-filter__link" href={item.href}>
                {item.name}
              </a>
              <span className="sapi-tag-filter__meta">
                {item.module} · {kindLabel(item.kind)}
              </span>
              {item.tags.length > 0 ? (
                <span className="sapi-tag-filter__badges">
                  {item.tags.map((tag) => (
                    <Badge key={tag} type="info">
                      {tag}
                    </Badge>
                  ))}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
