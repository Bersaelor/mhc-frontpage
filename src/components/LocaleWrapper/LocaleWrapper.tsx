import type { ParentComponent } from 'solid-js';
import i18n from '../../i18n/config';
import {onMount, createSignal} from "solid-js";
import {Show} from "solid-js";
import I18nProvider from "../I18nProvider/I18nProvider";
import i18next from "i18next";
import {createI18n} from "../../i18n/context";
import LanguageSwitcher from '../CV/LanguageSwitcher';

const LocaleWrapper: ParentComponent = (props) => {
  const [loaded, setLoaded] = createSignal(false);
  const [i18nState, updatei18nState] = createI18n(i18next);

  onMount(async () => {
    await i18n;
    updatei18nState(i18next);
    setLoaded(true);
  });

  const handleOnChange = (lang: string) => {
    i18next.changeLanguage(lang).then(() => {
      updatei18nState(i18next);
    })
  }

  return (
    <Show
      when={loaded()}
    >
      <I18nProvider i18n={i18nState}>
        {props.children}
        <LanguageSwitcher onChange={handleOnChange} />
      </I18nProvider>
    </Show>
  );
}

export default LocaleWrapper;