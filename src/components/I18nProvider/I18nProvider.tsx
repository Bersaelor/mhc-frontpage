import type { ParentComponent } from 'solid-js';
import { I18nContext } from '../../i18n/context';
import i18n from 'i18next';

type Props = {
  i18n: typeof i18n,
}

const I18nProvider: ParentComponent<Props> = (props) => {

  return (
    <I18nContext.Provider value={props.i18n}>
      {props.children}
    </I18nContext.Provider>
  );
}
export default I18nProvider;