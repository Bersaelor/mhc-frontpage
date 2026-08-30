import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';

export const supportedLanguages = ['en', 'de'] as const;

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

export default i18n;
