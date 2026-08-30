import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { styled } from '@suid/material/styles';
import { MonoSpacedDate, CompanyLink } from './CVCareerStep';
import Typography from '@suid/material/Typography';
import Grid from '@suid/material/Grid';
import Stack from '@suid/material/Stack';

import talks from '../../data/talks';

const Talk = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: '400',
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const CVTalks: Component = () => {

  return (
    <For each={talks}>
      {(talk) =>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <MonoSpacedDate>
              {talk.year}
            </MonoSpacedDate>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Stack mb={2} direction='column'>
              <Talk
                component='a'
                href={`https://www.youtube.com/watch?v=${talk.videoId}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {talk.title}
              </Talk>
              <CompanyLink href={talk.conferenceUrl}>
                {talk.conference}
              </CompanyLink>
            </Stack>
          </Grid>
        </Grid>}
    </For>
  );
};

export default CVTalks;
