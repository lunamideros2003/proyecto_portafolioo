export type Language = 'es' | 'en';
export type LangMap = Record<string, string>;
export type LinksMap = Record<string, string>;

import data from './translations.json';

export const i18nData = data as { es: LangMap; en: LangMap; links: LinksMap };

export function tFor(lang: Language, key: string): string {
  const map = lang === 'es' ? i18nData.es : i18nData.en;
  return map[key] ?? key;
}