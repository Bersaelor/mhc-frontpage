import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { ToggleButton, ToggleButtonGroup } from "@suid/material";
import { Stack } from '@suid/material';
import { useI18n, useSetLanguage } from "../../i18n/context";

const LanguageSwitcher: Component = () => {
  const i18n = useI18n();
  const setLanguage = useSetLanguage();
  const availableLocales = () => [
    { title: 'EN', code: 'en' },
    { title: 'DE', code: 'de' }
  ];

  return (
    <Stack direction='row' justifyContent='center' py={2} mx={2}>
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
    </Stack>
  );
};

export default LanguageSwitcher;
