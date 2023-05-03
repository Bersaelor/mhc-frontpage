import i18next from 'i18next';
import HttpApi from 'i18next-xhr-backend';
const i18n = i18next
  .use(HttpApi)
  .init({
    load: 'languageOnly',
    fallbackLng: 'en',
    preload: ['en', 'de'],
    ns: 'translations',
    defaultNS: 'translations',
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