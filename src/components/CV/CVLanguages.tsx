import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { For } from 'solid-js';
import Grid from '@suid/material/Grid';
import Stack from '@suid/material/Stack';
import { Typography } from '@suid/material';
import { useI18n } from "../../i18n/context";

export const Language = styled(Typography)(({ theme }) => ({
  fontSize: '1.05rem',
  fontWeight: '500',
  color: theme.palette.text.primary,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.05rem',
  fontWeight: '400',
  color: theme.palette.text.primary,
}));

const steps = [
  {
    name: {
      "de": "Deutsch",
      "en": "German",
    },
    value: {
      "de": "Muttersprache",
      "en": "Native",
    }
  },
  {
    name: {
      "de": "Englisch",
      "en": "English",
    },
    value: {
      "de": "C2",
      "en": "C2",
    }
  },
  {
    name: {
      "de": "Französisch",
      "en": "French",
    },
    value: {
      "de": "B1",
      "en": "B1",
    }
  },
];

const CVLanguages: Component = () => {
  const i18n = useI18n();

  return (
    <For each={steps.reverse()}>
      {(step) =>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Language>
              {step.name[i18n.language as 'de' | 'en']}
            </Language>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Stack mb={2} direction='column'>
              <Title>
                {step.value[i18n.language as 'de' | 'en']}
              </Title>
            </Stack>
          </Grid>
        </Grid>}
    </For>
  );
};

export default CVLanguages;