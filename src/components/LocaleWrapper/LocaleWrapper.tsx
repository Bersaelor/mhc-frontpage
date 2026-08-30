import type { ParentComponent } from 'solid-js';
import { createEffect } from 'solid-js';
import i18next from 'i18next';
import { normalizeLanguage } from '../../i18n/config';
import I18nProvider from "../I18nProvider/I18nProvider";
import { createI18n, SetLanguageContext } from "../../i18n/context";

const LocaleWrapper: ParentComponent = (props) => {
  const [i18nState, updatei18nState] = createI18n(i18next);

  // Translations are bundled, so i18next is ready synchronously and there is
  // nothing to wait for before the first paint.
  const handleOnChange = (lang: string) => {
    i18next.changeLanguage(normalizeLanguage(lang)).then(() => {
      updatei18nState(i18next);
    })
  }

  // Screen readers pick pronunciation from this, so it has to track the
  // language actually being shown.
  createEffect(() => {
    document.documentElement.lang = i18nState.language ?? 'en';
  });

  return (
    <SetLanguageContext.Provider value={handleOnChange}>
      <I18nProvider i18n={i18nState}>
        {props.children}
      </I18nProvider>
    </SetLanguageContext.Provider>
  );
}

export default LocaleWrapper;
