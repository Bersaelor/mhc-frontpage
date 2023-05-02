import { createContext, useContext, Signal } from 'solid-js';
import { createStore } from "solid-js/store";
import i18n from 'i18next';

export const I18nContext = createContext<typeof i18n>();

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new ReferenceError('I18nContext');
  return context;
}

export function createI18n(i18nValue: typeof i18n): [typeof i18n, (i18nValue: typeof i18n) => void] {
  const [store, setStore] = createStore({
    ...i18nValue,
    t: i18nValue.t.bind({}),
  });
  const updateStore = (i18nValue: typeof i18n) => {
    setStore({
      ...i18nValue,
      t: i18nValue.t.bind({}),
    });
  }
  return [store, updateStore];
}