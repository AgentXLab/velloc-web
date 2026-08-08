import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

// ============================================================
// Locale support
//
// English is the source language; every other locale is a
// translation of the English value (see
// velloc/internal/docs/workflow/translation.md).
// ============================================================

export type Lang = 'en' | 'zh' | 'es' | 'fr' | 'de' | 'ja' | 'ko' | 'bn' | 'hi' | 'pt' | 'ru';

export const LANGUAGES: readonly Lang[] = [
  'en', 'zh', 'es', 'fr', 'de', 'ja', 'ko', 'bn', 'hi', 'pt', 'ru',
] as const;

/** Native endonym shown in the language switcher. */
export const LANG_LABELS: Record<Lang, string> = {
  en: 'English',
  zh: '简体中文',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  ja: '日本語',
  ko: '한국어',
  bn: 'বাংলা',
  hi: 'हिन्दी',
  pt: 'Português',
  ru: 'Русский',
};

function isLang(value: string | null): value is Lang {
  return !!value && (LANGUAGES as readonly string[]).includes(value);
}

/**
 * Map any BCP-47 language tag onto the supported set by prefix.
 * `zh-TW` and `zh-CN` both resolve to `zh`; an unsupported tag
 * falls back to `en`.
 */
export function resolveLocale(tag: string): Lang {
  const base = tag.trim().toLowerCase().replace(/_/g, '-').split('-')[0];
  switch (base) {
    case 'zh':
      return 'zh';
    case 'es':
      return 'es';
    case 'fr':
      return 'fr';
    case 'de':
      return 'de';
    case 'ja':
      return 'ja';
    case 'ko':
      return 'ko';
    case 'bn':
      return 'bn';
    case 'hi':
      return 'hi';
    case 'pt':
      return 'pt';
    case 'ru':
      return 'ru';
    default:
      return 'en';
  }
}

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangCtx>({ lang: 'en', setLang: () => {} });

const STORAGE_KEY = 'velloc-lang';

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  if (typeof navigator !== 'undefined' && navigator.language) {
    return resolveLocale(navigator.language);
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
  );
}

export function useLang(): LangCtx {
  return useContext(LangContext);
}
