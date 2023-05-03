import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { styled } from '@suid/material/styles';
import { MonoSpacedDate, CompanyLink } from './CVCareerStep';
import Typography from '@suid/material/Typography';
import Grid from '@suid/material/Grid';
import Stack from '@suid/material/Stack';

const Talk = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: '400',
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const talks = [
  {
    year: "Brooklyn 2017",
    conf_url: "http://2017.funswiftconf.com",
    name: "Functional Swift",
    title: "Growing trees with recursive enums in Swift",
    url: "https://www.youtube.com/embed/CwcEjxRtn18",
  },
  {
    year: "St. Petersburg 2018",
    conf_url: "https://mobiusconf.com/en/",
    name: "Mobius Conf",
    title: "How to fit a million stars into an iPhone",
    url: "https://www.youtube.com/embed/51PJjrh9yTA",
  },
  {
    year: "Berlin 2019",
    conf_url: "https://www.serversideswift.info",
    name: "Server Side Swift",
    title: "How server side and mobile Swift can benefit from each other",
    url: "https://www.youtube.com/embed/xA3ZYt5S6iA",
  },
];

const CVTalks: Component = () => {

  return (
    <For each={talks.reverse()}>
      {(talk) =>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <MonoSpacedDate>
              {talk.year}
            </MonoSpacedDate>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Stack mb={2} direction='column'>
              <Talk component='a' href={talk.url}>
                {talk.title}
              </Talk>
              <CompanyLink href={talk.conf_url}>
                {talk.name}
              </CompanyLink>
            </Stack>
          </Grid>
        </Grid>}
    </For>
  );
};

export default CVTalks;