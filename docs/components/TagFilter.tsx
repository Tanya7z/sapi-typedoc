import { useMemo, useState, type CSSProperties } from 'react';

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

const wrapStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const filtersStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem 1.25rem',
  alignItems: 'flex-end',
};

const fieldStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  fontSize: '0.9rem',
};

const selectStyle: CSSProperties = {
  minWidth: '10rem',
  padding: '0.35rem 0.5rem',
};

const listStyle: CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.35rem',
};

const metaStyle: CSSProperties = {
  color: 'var(--rp-c-text-2, #666)',
  fontSize: '0.85rem',
  marginLeft: '0.5rem',
};

const legendTableStyle: CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.9rem',
};

const legendCellStyle: CSSProperties = {
  borderBottom: '1px solid var(--rp-c-divider, #e5e5e5)',
  padding: '0.35rem 0.5rem',
  textAlign: 'left',
  verticalAlign: 'top',
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
    <div style={wrapStyle}>
      {legend.length > 0 ? (
        <details open>
          <summary>领域标签说明</summary>
          <table style={legendTableStyle}>
            <thead>
              <tr>
                <th style={legendCellStyle}>标签</th>
                <th style={legendCellStyle}>含义</th>
              </tr>
            </thead>
            <tbody>
              {legend.map((entry) => (
                <tr key={entry.tag}>
                  <td style={legendCellStyle}>
                    <code>{entry.tag}</code>
                  </td>
                  <td style={legendCellStyle}>{entry.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      ) : null}

      <div style={filtersStyle}>
        <label style={fieldStyle}>
          领域
          <select
            style={selectStyle}
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
        <label style={fieldStyle}>
          模块
          <select
            style={selectStyle}
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
        <label style={fieldStyle}>
          类型
          <select style={selectStyle} value={kind} onChange={(e) => setKind(e.target.value)}>
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

      <p style={{ margin: 0, fontSize: '0.9rem' }}>
        共 {filtered.length} 项
        {hasFilter ? `（筛选自 ${items.length}）` : null}
      </p>

      <ul style={listStyle}>
        {filtered.map((item) => (
          <li key={`${item.module}/${item.kind}/${item.name}`}>
            <a href={item.href}>{item.name}</a>
            <span style={metaStyle}>
              {item.module} · {kindLabel(item.kind)}
              {item.tags.length > 0 ? ` · ${item.tags.join(', ')}` : ''}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
