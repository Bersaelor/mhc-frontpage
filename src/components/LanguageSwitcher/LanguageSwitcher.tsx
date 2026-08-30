import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { styled } from '@suid/material/styles';
import { ToggleButton, ToggleButtonGroup } from "@suid/material";
import { useI18n, useSetLanguage } from "../../i18n/context";

type Props = {
  // Presentation for the dark top bar. The default MUI colours - near-black
  // `action.active` text on a `divider` border - are invisible against the
  // starfield, so the unselected button disappears. The CV renders its own
  // light backdrop and wants the defaults.
  onDark?: boolean,
}

const Holder = styled('div')(({ theme }) => ({
  '&.on-dark .MuiToggleButton-root': {
    color: '#c1dff5',
    borderColor: '#ffffff55',
    padding: '2px 8px',
    lineHeight: 1.6,

    '&:hover': {
      backgroundColor: '#ffffff1f',
    },

    '&.Mui-selected': {
      color: '#0b1b2b',
      backgroundColor: '#c1dff5',

      '&:hover': {
        backgroundColor: '#d5e8fa',
      },
    },
  },
}))

const LanguageSwitcher: Component<Props> = (props) => {
  const i18n = useI18n();
  const setLanguage = useSetLanguage();
  const availableLocales = () => [
    { title: 'EN', code: 'en' },
    { title: 'DE', code: 'de' }
  ];

  return (
    <Holder class={props.onDark ? 'on-dark' : undefined}>
      <ToggleButtonGroup
        color="primary"
        size="small"
        value={i18n.language}
        exclusive
        aria-label={i18n.t('home.language.label')}
        onChange={(event, newLang) => {
          // null when the active button is clicked again - keep current language
          if (newLang) setLanguage(newLang);
        }}
      >
        <For each={availableLocales()}>
          {(item) =>
            <ToggleButton value={item.code} aria-label={item.title}>
              {item.title}
            </ToggleButton>
          }
        </For>
      </ToggleButtonGroup>
    </Holder>
  );
};

export default LanguageSwitcher;
