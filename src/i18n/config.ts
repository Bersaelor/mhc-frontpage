import i18next from 'i18next';
import HttpApi from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const i18n = i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    load: 'languageOnly',
    fallbackLng: 'en',
    preload: ['en', 'de'],
    ns: 'translations',
    defaultNS: 'translations',
    fallbackNS: false,
    debug: true,
    detection: {
      order: ['querystring', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
    },
    backend: {
      loadPath: '/i18n/{{lng}}/{{ns}}.json',
    }
  }, (err, t) => {
    if (err) return console.error(err)
  });
export default i18n;