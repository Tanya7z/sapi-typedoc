import { existsSync } from 'node:fs';
import { join } from 'node:path';
import {
  Node,
  Project,
  SyntaxKind,
  type ExportedDeclarations,
  type JSDoc,
} from 'ts-morph';
import { inferDomainTags } from '../domain-tags.js';
import type { ApiMember, ApiMemberKind, ApiSymbol, ApiSymbolKind } from './types.js';

const PRIVILEGE_TAGS = ['worldMutation', 'earlyExecution'] as const;
const STATUS_TAGS = ['beta', 'rc', 'deprecated', 'experimental'] as const;

function tagsFromJsDocs(docs: JSDoc[]): { privileges: string[]; status: string[] } {
  const privileges: string[] = [];
  const status: string[] = [];
  for (const doc of docs) {
    for (const tag of doc.getTags()) {
      const name = tag.getTagName();
      if ((PRIVILEGE_TAGS as readonly string[]).includes(name) && !privileges.includes(name)) {
        privileges.push(name);
      }
      if ((STATUS_TAGS as readonly string[]).includes(name) && !status.includes(name)) {
        status.push(name);
      }
    }
  }
  return { privileges, status };
}

/** 取 JSDoc 首段摘要，截断 */
export function summaryFromJsDocs(docs: JSDoc[], max = 240): string {
  for (const doc of docs) {
    const raw = doc.getDescription().trim();
    if (!raw) continue;
    const first = raw.split(/\r?\n\r?\n/)[0]!.replace(/\s+/g, ' ').trim();
    if (!first) continue;
    return first.length > max ? `${first.slice(0, max)}…` : first;
  }
  return '';
}

function kindOfDeclaration(decl: ExportedDeclarations): ApiSymbolKind | undefined {
  if (Node.isClassDeclaration(decl)) return 'classes';
  if (Node.isInterfaceDeclaration(decl)) return 'interfaces';
  if (Node.isEnumDeclaration(decl)) return 'enums';
  if (Node.isFunctionDeclaration(decl)) return 'functions';
  if (Node.isTypeAliasDeclaration(decl)) return 'types';
  if (Node.isVariableDeclaration(decl)) return 'variables';
  if (Node.isModuleDeclaration(decl)) return 'modules';
  return undefined;
}

function compactSignature(text: string, max = 280): string {
  const one = text.replace(/\s+/g, ' ').trim();
  return one.length > max ? `${one.slice(0, max)}…` : one;
}

function isPrivateOrProtected(node: {
  hasModifier(kind: SyntaxKind): boolean;
}): boolean {
  return (
    node.hasModifier(SyntaxKind.PrivateKeyword) ||
    node.hasModifier(SyntaxKind.ProtectedKeyword)
  );
}

function membersOfDeclaration(decl: ExportedDeclarations): ApiMember[] {
  const out: ApiMember[] = [];

  if (Node.isClassDeclaration(decl)) {
    for (const member of decl.getMembers()) {
      if (Node.isConstructorDeclaration(member)) {
        if (isPrivateOrProtected(member)) continue;
        const { privileges, status } = tagsFromJsDocs(member.getJsDocs());
        out.push({
          name: 'constructor',
          kind: 'constructor',
          signature: compactSignature(member.getText()),
          privileges,
          status,
        });
        continue;
      }
      if (Node.isMethodDeclaration(member)) {
        if (isPrivateOrProtected(member)) continue;
        const name = member.getName();
        if (!name || name.startsWith('#')) continue;
        const { privileges, status } = tagsFromJsDocs(member.getJsDocs());
        const params = member
          .getParameters()
          .map((p) => p.getText())
          .join(', ');
        const ret = member.getReturnType().getText(member);
        out.push({
          name,
          kind: 'method',
          signature: compactSignature(`${name}(${params}): ${ret}`),
          privileges,
          status,
        });
        continue;
      }
      if (Node.isPropertyDeclaration(member)) {
        if (isPrivateOrProtected(member)) continue;
        const name = member.getName();
        if (!name || name.startsWith('#')) continue;
        const { privileges, status } = tagsFromJsDocs(member.getJsDocs());
        const readonly = member.isReadonly() ? 'readonly ' : '';
        const optional = member.hasQuestionToken() ? '?' : '';
        const typeText = member.getType().getText(member);
        out.push({
          name,
          kind: 'property',
          signature: compactSignature(`${readonly}${name}${optional}: ${typeText}`),
          privileges,
          status,
        });
        continue;
      }
      if (Node.isGetAccessorDeclaration(member) || Node.isSetAccessorDeclaration(member)) {
        if (isPrivateOrProtected(member)) continue;
        const name = member.getName();
        if (!name) continue;
        const { privileges, status } = tagsFromJsDocs(member.getJsDocs());
        const kindLabel = Node.isGetAccessorDeclaration(member) ? 'get' : 'set';
        out.push({
          name,
          kind: 'accessor',
          signature: compactSignature(`${kindLabel} ${name}`),
          privileges,
          status,
        });
      }
    }
  } else if (Node.isInterfaceDeclaration(decl)) {
    for (const member of decl.getMembers()) {
      if (Node.isMethodSignature(member)) {
        const name = member.getName();
        if (!name) continue;
        const { privileges, status } = tagsFromJsDocs(member.getJsDocs());
        const params = member
          .getParameters()
          .map((p) => p.getText())
          .join(', ');
        const ret = member.getReturnType().getText(member);
        out.push({
          name,
          kind: 'method',
          signature: compactSignature(`${name}(${params}): ${ret}`),
          privileges,
          status,
        });
      } else if (Node.isPropertySignature(member)) {
        const name = member.getName();
        if (!name) continue;
        const { privileges, status } = tagsFromJsDocs(member.getJsDocs());
        const readonly = member.isReadonly() ? 'readonly ' : '';
        const optional = member.hasQuestionToken() ? '?' : '';
        const typeText = member.getType().getText(member);
        out.push({
          name,
          kind: 'property',
          signature: compactSignature(`${readonly}${name}${optional}: ${typeText}`),
          privileges,
          status,
        });
      } else if (Node.isCallSignatureDeclaration(member)) {
        const { privileges, status } = tagsFromJsDocs(member.getJsDocs());
        out.push({
          name: 'call',
          kind: 'call-signature',
          signature: compactSignature(member.getText()),
          privileges,
          status,
        });
      }
    }
  } else if (Node.isEnumDeclaration(decl)) {
    for (const member of decl.getMembers()) {
      const name = member.getName();
      const { privileges, status } = tagsFromJsDocs(member.getJsDocs());
      const init = member.getInitializer()?.getText();
      out.push({
        name,
        kind: 'enum-member',
        signature: compactSignature(init ? `${name} = ${init}` : name),
        privileges,
        status,
      });
    }
  } else if (Node.isFunctionDeclaration(decl)) {
    const { privileges, status } = tagsFromJsDocs(decl.getJsDocs());
    const name = decl.getName() ?? 'anonymous';
    const params = decl
      .getParameters()
      .map((p) => p.getText())
      .join(', ');
    const ret = decl.getReturnType().getText(decl);
    out.push({
      name,
      kind: 'call-signature',
      signature: compactSignature(`${name}(${params}): ${ret}`),
      privileges,
      status,
    });
  } else if (Node.isVariableDeclaration(decl)) {
    const { privileges, status } = tagsFromJsDocs(
      decl.getVariableStatement()?.getJsDocs() ?? [],
    );
    out.push({
      name: decl.getName(),
      kind: 'other',
      signature: compactSignature(`${decl.getName()}: ${decl.getType().getText(decl)}`),
      privileges,
      status,
    });
  } else if (Node.isTypeAliasDeclaration(decl)) {
    const { privileges, status } = tagsFromJsDocs(decl.getJsDocs());
    out.push({
      name: decl.getName(),
      kind: 'other',
      signature: compactSignature(`type ${decl.getName()} = ${decl.getType().getText(decl)}`),
      privileges,
      status,
    });
  }

  return out;
}

function extendsOf(decl: ExportedDeclarations): string[] | undefined {
  if (Node.isClassDeclaration(decl)) {
    const ext = decl.getExtends();
    if (!ext) return undefined;
    const text = ext.getExpression().getText();
    return text ? [text] : undefined;
  }
  if (Node.isInterfaceDeclaration(decl)) {
    const list = decl.getExtends().map((e) => e.getExpression().getText());
    return list.length > 0 ? list : undefined;
  }
  return undefined;
}

function statusOfDecl(decl: ExportedDeclarations): string[] {
  if (Node.isVariableDeclaration(decl)) {
    return tagsFromJsDocs(decl.getVariableStatement()?.getJsDocs() ?? []).status;
  }
  if (
    Node.isClassDeclaration(decl) ||
    Node.isInterfaceDeclaration(decl) ||
    Node.isEnumDeclaration(decl) ||
    Node.isFunctionDeclaration(decl) ||
    Node.isTypeAliasDeclaration(decl) ||
    Node.isModuleDeclaration(decl)
  ) {
    return tagsFromJsDocs(decl.getJsDocs()).status;
  }
  return [];
}

function summaryOfDecl(decl: ExportedDeclarations): string {
  if (Node.isVariableDeclaration(decl)) {
    return summaryFromJsDocs(decl.getVariableStatement()?.getJsDocs() ?? []);
  }
  if (
    Node.isClassDeclaration(decl) ||
    Node.isInterfaceDeclaration(decl) ||
    Node.isEnumDeclaration(decl) ||
    Node.isFunctionDeclaration(decl) ||
    Node.isTypeAliasDeclaration(decl) ||
    Node.isModuleDeclaration(decl)
  ) {
    return summaryFromJsDocs(decl.getJsDocs());
  }
  return '';
}

export type TagLookup = Map<string, string[]>;

/** key: `${module}:${name}` */
export function buildTagLookup(
  items: Array<{ module: string; name: string; tags: string[] }>,
): TagLookup {
  const map: TagLookup = new Map();
  for (const item of items) {
    map.set(`${item.module}:${item.name}`, item.tags);
  }
  return map;
}

export type ExperimentalLookup = {
  allExperimental: boolean;
  symbols: Set<string>;
  members: Map<string, Set<string>>;
};

export function buildExperimentalLookup(mod?: {
  allExperimental: boolean;
  experimentalSymbols: string[];
  experimentalMembers: Record<string, string[]>;
}): ExperimentalLookup {
  if (!mod) {
    return { allExperimental: false, symbols: new Set(), members: new Map() };
  }
  const members = new Map<string, Set<string>>();
  for (const [sym, list] of Object.entries(mod.experimentalMembers ?? {})) {
    members.set(sym, new Set(list));
  }
  return {
    allExperimental: mod.allExperimental,
    symbols: new Set(mod.experimentalSymbols ?? []),
    members,
  };
}

const KIND_PRIORITY: Record<ApiSymbolKind, number> = {
  classes: 0,
  interfaces: 1,
  enums: 2,
  functions: 3,
  types: 4,
  variables: 5,
  modules: 6,
};

/**
 * 从 translated/{module}.d.ts（及子目录）抽取导出符号。
 */
export function extractModuleSymbols(
  module: string,
  translatedRoot: string,
  options?: {
    tagLookup?: TagLookup;
    experimental?: ExperimentalLookup;
  },
): ApiSymbol[] {
  const entry = join(translatedRoot, `${module}.d.ts`);
  if (!existsSync(entry)) return [];

  const project = new Project({ skipAddingFilesFromTsConfig: true });
  project.addSourceFileAtPath(entry);
  const sub = join(translatedRoot, module);
  if (existsSync(sub)) {
    project.addSourceFilesAtPaths(join(sub, '**', '*.d.ts'));
  }

  const source = project.getSourceFileOrThrow(entry);
  const symbols: ApiSymbol[] = [];
  const seen = new Set<string>();

  for (const [exportName, decls] of source.getExportedDeclarations()) {
    if (seen.has(exportName)) continue;

    let primary: ExportedDeclarations | undefined;
    let kind: ApiSymbolKind | undefined;
    for (const decl of decls) {
      const k = kindOfDeclaration(decl);
      if (!k) continue;
      if (!primary || !kind || KIND_PRIORITY[k] < KIND_PRIORITY[kind]) {
        primary = decl;
        kind = k;
      }
    }
    if (!primary || !kind) continue;
    seen.add(exportName);

    const tags =
      options?.tagLookup?.get(`${module}:${exportName}`) ?? inferDomainTags(exportName);
    const exp = options?.experimental;
    const symbolExperimental =
      Boolean(exp?.allExperimental || exp?.symbols.has(exportName)) || undefined;
    const expMembers = exp?.members.get(exportName);

    const members = membersOfDeclaration(primary).map((m) => {
      if (expMembers?.has(m.name) || symbolExperimental) {
        return { ...m, experimental: true as const };
      }
      return m;
    });

    symbols.push({
      module,
      kind,
      name: exportName,
      path: `/${module}/${kind}/${exportName}`,
      summary: summaryOfDecl(primary),
      status: statusOfDecl(primary),
      tags,
      experimental: symbolExperimental || undefined,
      extends: extendsOf(primary),
      members,
    });
  }

  symbols.sort((a, b) => a.name.localeCompare(b.name));
  return symbols;
}

export function memberKindLabel(kind: ApiMemberKind): string {
  return kind;
}
