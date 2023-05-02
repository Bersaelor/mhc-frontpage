import type { ParentComponent } from 'solid-js';
import { I18nContext } from '../../i18n/context';

type Props = {
  i18n: any,
}

const I18nProvider: ParentComponent<Props> = (props) => {

  return (
    <I18nContext.Provider value={props.i18n}>
      {props.children}
    </I18nContext.Provider>
  );
}
export default I18nProvider;