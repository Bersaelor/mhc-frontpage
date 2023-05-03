import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { styled } from '@suid/material/styles';
import { MonoSpacedDate, JobTitle } from './CVCareerStep';
import Typography from '@suid/material/Typography';
import Grid from '@suid/material/Grid';
import Stack from '@suid/material/Stack';
import { useI18n } from "../../i18n/context";

const Institution = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  letterSpacing: '0.2rem',
  fontWeight: '200',
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const steps = [
  {
    start_date: "2003",
    end_date: "2006",
    uni: "TU Dresden",
    topic: {
      "de": "Technomathematik",
      "en": "Computational Mathematics",
    },
  },
  {
    start_date: "2006",
    end_date: "2009",
    uni: "TU Berlin",
    topic: {
      "de": "Mathematik",
      "en": "Mathematics",
    },
  },
];

const CVEducation: Component = () => {
  const i18n = useI18n();

  return (
    <For each={steps.reverse()}>
      {(step) =>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <MonoSpacedDate>
              {step.start_date} - {step.end_date}
            </MonoSpacedDate>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Stack mb={2} direction='column'>
              <JobTitle>
                {step.topic[i18n.language as 'de' | 'en']}
              </JobTitle>
              <Institution>
                {step.uni}
              </Institution>
            </Stack>
          </Grid>
        </Grid>}
    </For>
  );
};

export default CVEducation;