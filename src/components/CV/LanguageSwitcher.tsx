import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { styled } from '@suid/material/styles';
import { ToggleButton, ToggleButtonGroup } from "@suid/material";
import { Stack } from '@suid/material';
import { useI18n } from "../../i18n/context";

type Props = {
  onChange: (lang: string) => void,
}

const LanguageSwitcher: Component<Props> = (props) => {
  const i18n = useI18n();
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
        onChange={(event, newLang) => {
          props.onChange(newLang);
        }}
      >
        <For each={availableLocales()}>
          {(item) =>
          <ToggleButton value={item.code}>{item.title}</ToggleButton>
          }
        </For>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default LanguageSwitcher;