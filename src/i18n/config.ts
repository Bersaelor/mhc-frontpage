import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';

export const supportedLanguages = ['en', 'de'] as const;
export type SupportedLanguage = typeof supportedLanguages[number];

// `load: 'languageOnly'` only affects which resources i18next resolves - it
// leaves the detected locale verbatim on `i18n.language`, so a browser set to
// de-DE yields "de-DE" there. Project descriptions (work.text) and the language
// switcher are keyed by plain "en"/"de", so collapse the region to a supported
// base language.
export function normalizeLanguage(lng?: string): SupportedLanguage {
  const base = (lng ?? '').split('-')[0];
  return (supportedLanguages as readonly string[]).includes(base)
    ? base as SupportedLanguage
    : 'en';
}

// The translations are bundled rather than fetched: they are a couple of
// kilobytes, and a backend request would mean the page cannot render until it
// resolves. LanguageDetector has to be registered for the `detection` options
// below to have any effect.
const i18n = i18next
  .use(LanguageDetector)
  .init({
    load: 'languageOnly',
    fallbackLng: 'en',
    returnNull: false,
    supportedLngs: [...supportedLanguages],
    ns: 'translations',
    defaultNS: 'translations',
    resources: {
      en: { translations: en },
      de: { translations: de },
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
    interpolation: {
      // Solid escapes when it inserts the string into the DOM.
      escapeValue: false,
    },
  }, (err) => {
    if (err) return console.error(err)
  });

// Normalise once, here, so every consumer can rely on i18n.language being
// exactly "en" or "de" rather than each call site having to remember.
// Resources are bundled, so init above has already completed synchronously.
const detected = normalizeLanguage(i18next.language);
if (i18next.language !== detected) {
  i18next.changeLanguage(detected);
}

export default i18n;
