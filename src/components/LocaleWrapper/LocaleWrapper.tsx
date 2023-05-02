import type { ParentComponent } from 'solid-js';
import i18n from '../../i18n/config';
import {onMount, createSignal} from "solid-js";
import {Show} from "solid-js";
import I18nProvider from "../I18nProvider/I18nProvider";
import i18next from "i18next";

const LocaleWrapper: ParentComponent = (props) => {
  const [loaded, setLoaded] = createSignal(false);
  onMount(async () => {
    await i18n;
    setLoaded(true);
  });
  return (
    <Show
      when={loaded()}
    >
      <I18nProvider i18n={i18next}>
        {props.children}
      </I18nProvider>
    </Show>
  );
}

export default LocaleWrapper;