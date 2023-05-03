import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { styled } from '@suid/material/styles';
import { useI18n } from "../../i18n/context";
import Typography from '@suid/material/Typography';
import Grid from '@suid/material/Grid';
import Stack from '@suid/material/Stack';
import Paper from '@suid/material/Paper';

import { MonoSpacedDate, JobTitle } from './CVCareerStep';
import type { Work } from '../../types/Work';

type Props = {
  work: Work,
}

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.05rem',
  fontWeight: '500',
  color: theme.palette.text.primary,
}));

export const CellTitle = styled(Typography)(({ theme }) => ({
  fontFamily: [
    'Source Code Pro',
    'Noto Sans',
    'Arial',
    'sans-serif',
  ].join(','),
  fontSize: '1.05rem',
  fontWeight: '500',
  color: theme.palette.text.secondary,
}));

const ItemCell: Component<{ text: string, color?: string }> = (props) => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: props.color || 'secondary.main' }}>
      <CellTitle px={1}>{props.text}</CellTitle>
    </Paper>
  );
}

const CVWork: Component<Props> = (props) => {
  const i18n = useI18n();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={3}>
        <MonoSpacedDate>
          {props.work.release}
        </MonoSpacedDate>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Stack mb={2} direction='column'>
          <JobTitle>
            {props.work.title}
          </JobTitle>
          <Typography variant="body2" color="text.primary">
            {props.work.text[i18n.language]}
          </Typography>
          <SubTitle mt={0.5}>
            {i18n.t("cv.works.techs")}:
          </SubTitle>
          <Stack direction='row' spacing={1} flexWrap='wrap' rowGap={1}>
            <For each={props.work.techs}>
              {(tech) => <ItemCell text={tech} />}
            </For>
          </Stack>
          <SubTitle mt={0.5}>
            {i18n.t("cv.works.languages")}:
          </SubTitle>
          <Stack direction='row' spacing={1} flexWrap='wrap' rowGap={1}>
            <For each={props.work.langs}>
              {(l) => <ItemCell text={l} color="#73572C"/>}
            </For>
          </Stack>
          <SubTitle mt={0.5}>
            {i18n.t("cv.works.role")}: <span style={{ 'font-weight': '400'}}>{props.work.role}</span>
          </SubTitle>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CVWork;